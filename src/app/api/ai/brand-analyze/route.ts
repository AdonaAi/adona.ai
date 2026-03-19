/**
 * ============================================
 * API Route — Brand URL Analysis (Robust)
 * POST /api/ai/brand-analyze
 * ============================================
 * Multi-page scrape + meta extraction + OpenAI analysis.
 * Mirrors Holo.ai-style brand intelligence:
 *   1. Fetches homepage + /about + /contact
 *   2. Extracts meta tags, OG data, favicon, social links
 *   3. Extracts CSS colors from inline styles
 *   4. Sends all context to GPT-4o for deep brand analysis
 */

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ── Helpers ──────────────────────────────────────────────

function normalizeUrl(raw: string): URL {
    const withProtocol = raw.startsWith("http") ? raw : `https://${raw}`;
    return new URL(withProtocol);
}

async function safeFetch(url: string): Promise<string | null> {
    try {
        const res = await fetch(url, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.9",
            },
            redirect: "follow",
            signal: AbortSignal.timeout(12000),
        });
        if (!res.ok) return null;
        return await res.text();
    } catch {
        return null;
    }
}

/** Extract <meta> tag content */
function extractMeta(html: string, name: string): string {
    // Try name="..." and property="..."
    const patterns = [
        new RegExp(`<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']+)["']`, "i"),
        new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:name|property)=["']${name}["']`, "i"),
    ];
    for (const re of patterns) {
        const m = html.match(re);
        if (m) return m[1].trim();
    }
    return "";
}

/** Extract <title> */
function extractTitle(html: string): string {
    const m = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    return m ? m[1].trim() : "";
}

/** Extract favicon URL */
function extractFavicon(html: string, baseUrl: string): string {
    const patterns = [
        /<link[^>]+rel=["'](?:icon|shortcut icon|apple-touch-icon)["'][^>]+href=["']([^"']+)["']/i,
        /<link[^>]+href=["']([^"']+)["'][^>]+rel=["'](?:icon|shortcut icon|apple-touch-icon)["']/i,
    ];
    for (const re of patterns) {
        const m = html.match(re);
        if (m) {
            const href = m[1];
            if (href.startsWith("http")) return href;
            if (href.startsWith("//")) return `https:${href}`;
            return new URL(href, baseUrl).toString();
        }
    }
    return `${baseUrl}/favicon.ico`;
}

/** Extract social media URLs from href attributes */
function extractSocialLinks(html: string): string[] {
    const socialDomains = [
        "instagram.com", "facebook.com", "twitter.com", "x.com",
        "linkedin.com", "tiktok.com", "youtube.com", "pinterest.com",
        "threads.net",
    ];
    const hrefs = html.match(/href=["'](https?:\/\/[^"']+)["']/gi) || [];
    const links = new Set<string>();
    for (const h of hrefs) {
        const url = h.replace(/href=["']/i, "").replace(/["']$/, "");
        if (socialDomains.some((d) => url.includes(d))) {
            links.add(url);
        }
    }
    return [...links];
}

/** Extract hex colors from inline styles and CSS */
function extractCssColors(html: string): string[] {
    const colorSet = new Set<string>();

    // Hex colors (#rgb, #rrggbb)
    const hexMatches = html.match(/#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})(?=[;"'\s,)}])/g) || [];
    for (const hex of hexMatches) {
        const normalized = hex.length === 4
            ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
            : hex;
        // Skip very common defaults (white, black, grays)
        if (!["#ffffff", "#000000", "#fff", "#000", "#f5f5f5", "#333333", "#666666", "#999999", "#cccccc", "#eeeeee"].includes(normalized.toLowerCase())) {
            colorSet.add(normalized.toLowerCase());
        }
    }

    // rgb/rgba colors
    const rgbMatches = html.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g) || [];
    for (const rgb of rgbMatches) {
        const parts = rgb.match(/\d+/g);
        if (parts && parts.length >= 3) {
            const hex = `#${Number(parts[0]).toString(16).padStart(2, "0")}${Number(parts[1]).toString(16).padStart(2, "0")}${Number(parts[2]).toString(16).padStart(2, "0")}`;
            if (!["#ffffff", "#000000", "#f5f5f5"].includes(hex)) {
                colorSet.add(hex);
            }
        }
    }

    return [...colorSet].slice(0, 12);
}

/** Extract structured text from HTML */
function extractStructuredText(html: string): { headings: string; paragraphs: string; lists: string } {
    const headings = (html.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || [])
        .map((h) => h.replace(/<[^>]+>/g, "").trim())
        .filter(Boolean)
        .join("\n");

    const paragraphs = (html.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [])
        .map((p) => p.replace(/<[^>]+>/g, "").trim())
        .filter((p) => p.length > 20)
        .join("\n");

    const lists = (html.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [])
        .map((li) => li.replace(/<[^>]+>/g, "").trim())
        .filter(Boolean)
        .join("\n");

    return { headings, paragraphs, lists };
}

/** Clean HTML body for GPT context */
function cleanHtmlForAI(html: string): string {
    return html
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<nav[\s\S]*?<\/nav>/gi, "")
        .replace(/<footer[\s\S]*?<\/footer>/gi, "")
        .replace(/<header[\s\S]*?<\/header>/gi, "")
        .replace(/<!--[\s\S]*?-->/g, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

/** Detect page language */
function extractLanguage(html: string): string {
    const langAttr = html.match(/<html[^>]+lang=["']([^"']+)["']/i);
    if (langAttr) return langAttr[1];
    const metaLang = extractMeta(html, "language") || extractMeta(html, "content-language");
    return metaLang || "";
}

// ── Main Handler ─────────────────────────────────────────

export async function POST(request: NextRequest) {
    try {
        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json({ error: "OpenAI API key not configured" }, { status: 500 });
        }

        const body = await request.json();
        const { url } = body;

        if (!url || typeof url !== "string") {
            return NextResponse.json({ error: "Missing required field: url" }, { status: 400 });
        }

        let baseUrl: URL;
        try {
            baseUrl = normalizeUrl(url.trim());
        } catch {
            return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
        }

        const origin = baseUrl.origin;

        // ── Step 1: Multi-page fetch ──────────────────────
        const pagesToFetch = [
            baseUrl.toString(),
            `${origin}/about`,
            `${origin}/about-us`,
            `${origin}/contact`,
        ];

        const results = await Promise.allSettled(pagesToFetch.map(safeFetch));
        const pages: string[] = [];
        for (const r of results) {
            if (r.status === "fulfilled" && r.value) {
                pages.push(r.value);
            }
        }

        if (pages.length === 0) {
            return NextResponse.json(
                { error: "Could not reach the website. Please check the URL and try again." },
                { status: 422 }
            );
        }

        const homepageHtml = pages[0];

        // ── Step 2: Extract metadata ──────────────────────
        const metadata = {
            title: extractTitle(homepageHtml),
            description: extractMeta(homepageHtml, "description"),
            ogTitle: extractMeta(homepageHtml, "og:title"),
            ogDescription: extractMeta(homepageHtml, "og:description"),
            ogImage: extractMeta(homepageHtml, "og:image"),
            ogSiteName: extractMeta(homepageHtml, "og:site_name"),
            twitterTitle: extractMeta(homepageHtml, "twitter:title"),
            twitterDescription: extractMeta(homepageHtml, "twitter:description"),
            keywords: extractMeta(homepageHtml, "keywords"),
            favicon: extractFavicon(homepageHtml, origin),
            language: extractLanguage(homepageHtml),
        };

        // ── Step 3: Extract social links from all pages ───
        const allSocialLinks = new Set<string>();
        for (const page of pages) {
            for (const link of extractSocialLinks(page)) {
                allSocialLinks.add(link);
            }
        }

        // ── Step 4: Extract CSS colors ────────────────────
        const detectedColors = extractCssColors(homepageHtml);

        // ── Step 5: Extract structured text ───────────────
        const structured = extractStructuredText(homepageHtml);

        // Combine all page text (limited)
        const allPageText = pages
            .map((p) => cleanHtmlForAI(p))
            .join("\n---\n")
            .slice(0, 12000);

        // ── Step 6: GPT-4o analysis ───────────────────────
        const systemPrompt = `You are an expert brand strategist and analyst. You are analyzing a brand's website to build a comprehensive Brand DNA profile.

You will receive:
1. Website metadata (title, description, OG tags)
2. Detected CSS colors from the website
3. Social media links found
4. Structured content (headings, paragraphs) from homepage and subpages

Your task: Extract and infer brand identity. Be specific and detailed. Do NOT leave fields empty — use contextual clues to infer when not explicitly stated.

Return ONLY valid JSON (no markdown, no explanation) with this exact structure:
{
  "name": "exact brand name",
  "mission": "brand mission, tagline, or core value proposition (2-3 sentences)",
  "uniqueSellingPoints": "what makes this brand unique, key differentiators (2-3 sentences)",
  "industry": "MUST be one of: Beauty & Cosmetics, Fashion, Food & Beverage, Health & Fitness, Technology, E-commerce, Education, Real Estate, Finance, Travel & Hospitality, Other",
  "targetAudience": "detailed target audience description — demographics, psychographics, pain points (2-3 sentences)",
  "competitors": "3-5 likely competitors, comma-separated",
  "marketPosition": "how the brand positions itself vs competitors (2-3 sentences)",
  "toneOfVoice": ["exactly 2-3 values from: Professional, Friendly, Bold, Playful, Luxury, Minimalist, Warm, Edgy, Inspirational, Casual, Formal, Witty"],
  "language": "primary language of the website content (e.g., English, Bahasa Indonesia, etc.)",
  "writingStyle": "description of their writing style — sentence length, formality, use of jargon, etc.",
  "colors": ["3-6 hex color codes that best represent the brand, prioritize actual brand colors over generic ones"],
  "colorUsage": "how colors are used — primary, secondary, accent descriptions",
  "fonts": ["1-3 font names detected or most likely used, from: Inter, Satoshi, Playfair Display, Roboto, Montserrat, Poppins, Lora, DM Sans, Space Grotesk, Outfit"],
  "styleTags": ["3-5 visual style keywords like: modern, clean, bold, minimalist, luxury, playful, corporate, etc."],
  "goodCopyExamples": "2-3 actual copy snippets from the website that represent the brand voice well",
  "extraGuidelines": "any additional brand guidelines inferred from the website (tone consistency, imagery style, etc.)"
}`;

        const userPrompt = `Analyze the brand at ${baseUrl.hostname}:

=== METADATA ===
Title: ${metadata.title}
Description: ${metadata.description}
OG Title: ${metadata.ogTitle}
OG Description: ${metadata.ogDescription}
OG Site Name: ${metadata.ogSiteName}
Keywords: ${metadata.keywords}
Language: ${metadata.language}

=== DETECTED CSS COLORS ===
${detectedColors.join(", ") || "None detected"}

=== SOCIAL MEDIA LINKS ===
${[...allSocialLinks].join("\n") || "None found"}

=== HEADINGS ===
${structured.headings.slice(0, 2000)}

=== BODY CONTENT ===
${allPageText}`;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
            temperature: 0.2,
            max_tokens: 1500,
            response_format: { type: "json_object" },
        });

        const rawResponse = completion.choices[0]?.message?.content?.trim();
        if (!rawResponse) {
            return NextResponse.json({ error: "No analysis result from AI" }, { status: 500 });
        }

        let brandData;
        try {
            brandData = JSON.parse(rawResponse);
        } catch {
            const jsonMatch = rawResponse.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                brandData = JSON.parse(jsonMatch[0]);
            } else {
                return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
            }
        }

        // Merge in extracted data that AI might have missed
        return NextResponse.json({
            success: true,
            data: brandData,
            meta: {
                pagesScanned: pages.length,
                socialLinks: [...allSocialLinks],
                detectedColors,
                favicon: metadata.favicon,
                ogImage: metadata.ogImage,
                language: metadata.language,
            },
        });
    } catch (error) {
        console.error("Brand analysis error:", error);
        return NextResponse.json({ error: "Failed to analyze brand. Please try again." }, { status: 500 });
    }
}
