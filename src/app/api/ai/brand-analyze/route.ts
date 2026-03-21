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

/** Extract hex colors from inline styles and CSS — heavily filtered to remove framework noise */
function extractCssColors(html: string): string[] {
    const colorSet = new Set<string>();

    // Common framework/default colors to IGNORE (Bootstrap blues, Tailwind defaults, grays, etc.)
    const IGNORE_COLORS = new Set([
        "#ffffff", "#000000", "#f5f5f5", "#333333", "#666666", "#999999",
        "#cccccc", "#eeeeee", "#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da",
        "#adb5bd", "#6c757d", "#495057", "#343a40", "#212529", "#f0f0f0",
        "#fafafa", "#f7f7f7", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373",
        "#525252", "#404040", "#262626", "#171717",
        // Bootstrap primary blue & variants — very common false positives
        "#0d6efd", "#0b5ed7", "#0a58ca", "#084298", "#6ea8fe", "#9ec5fe",
        "#0d6efd", "#0dcaf0", "#6610f2", "#6f42c1",
        // Tailwind blues that leak from utility classes
        "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#60a5fa", "#93c5fd",
        "#dbeafe", "#eff6ff", "#bfdbfe",
        // Common link blues
        "#0000ff", "#0000ee", "#0066cc", "#1a0dab",
    ]);

    // Hex colors (#rgb, #rrggbb)
    const hexMatches = html.match(/#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})(?=[;"'\s,)}])/g) || [];
    for (const hex of hexMatches) {
        const normalized = hex.length === 4
            ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
            : hex;
        const lower = normalized.toLowerCase();
        if (IGNORE_COLORS.has(lower)) continue;

        // Also skip near-white and near-black colors
        const r = parseInt(lower.slice(1, 3), 16);
        const g = parseInt(lower.slice(3, 5), 16);
        const b = parseInt(lower.slice(5, 7), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        if (brightness > 240 || brightness < 15) continue; // too white or too black

        colorSet.add(lower);
    }

    // rgb/rgba colors
    const rgbMatches = html.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g) || [];
    for (const rgb of rgbMatches) {
        const parts = rgb.match(/\d+/g);
        if (parts && parts.length >= 3) {
            const r = Number(parts[0]), g = Number(parts[1]), b2 = Number(parts[2]);
            const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b2.toString(16).padStart(2, "0")}`;
            if (!IGNORE_COLORS.has(hex)) {
                const brightness = (r * 299 + g * 587 + b2 * 114) / 1000;
                if (brightness <= 240 && brightness >= 15) {
                    colorSet.add(hex);
                }
            }
        }
    }

    return [...colorSet].slice(0, 30);
}

/** Extract colors specifically from branded elements (buttons, headers, key UI) */
function extractBrandedColors(html: string): string[] {
    const brandColors = new Set<string>();

    // Look for colors in button/CTA-like elements
    const buttonPatterns = [
        /(?:button|btn|cta|hero|header|brand|logo|nav|primary|accent)[^}]*?(?:background(?:-color)?|border-color|color)\s*:\s*(#[0-9a-fA-F]{3,6})/gi,
        /(?:background(?:-color)?|border-color)\s*:\s*(#[0-9a-fA-F]{3,6})[^}]*?(?:button|btn|cta)/gi,
    ];

    for (const pattern of buttonPatterns) {
        let match;
        while ((match = pattern.exec(html)) !== null) {
            const color = match[1].toLowerCase();
            if (color.length === 4) {
                brandColors.add(`#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`);
            } else {
                brandColors.add(color);
            }
        }
    }

    // Look for CSS custom properties (--primary-color, --brand-color, etc.)
    const varPatterns = html.match(/--(?:primary|brand|accent|main|theme)[^:]*:\s*(#[0-9a-fA-F]{3,6})/gi) || [];
    for (const v of varPatterns) {
        const colorMatch = v.match(/#[0-9a-fA-F]{3,6}/);
        if (colorMatch) brandColors.add(colorMatch[0].toLowerCase());
    }

    return [...brandColors];
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

/** Extract logo URLs from the page (dedicated logo detection) */
function extractLogoUrls(html: string, baseUrl: string): string[] {
    const logos = new Set<string>();

    // 1. <img> with "logo" in class, id, alt, or src
    const logoImgPatterns = [
        /<img[^>]+(?:class|id|alt)=["'][^"']*logo[^"']*["'][^>]+src=["']([^"']+)["']/gi,
        /<img[^>]+src=["']([^"']+logo[^"']+)["']/gi,
        /<img[^>]+src=["']([^"']+)["'][^>]+(?:class|id|alt)=["'][^"']*logo[^"']*["']/gi,
    ];
    for (const pattern of logoImgPatterns) {
        let match;
        while ((match = pattern.exec(html)) !== null) {
            logos.add(match[1]);
        }
    }

    // 2. <a> with logo class containing <img>
    const logoLinkPattern = /<a[^>]+class=["'][^"']*logo[^"']*["'][^>]*>[\s\S]*?<img[^>]+src=["']([^"']+)["']/gi;
    let m;
    while ((m = logoLinkPattern.exec(html)) !== null) {
        logos.add(m[1]);
    }

    // 3. CSS background-image with "logo" in context
    const bgLogoPattern = /logo[^}]*background(?:-image)?\s*:\s*url\(["']?([^"')]+)["']?\)/gi;
    while ((m = bgLogoPattern.exec(html)) !== null) {
        logos.add(m[1]);
    }

    // Resolve URLs
    return [...logos].map((src) => {
        if (src.startsWith("data:")) return src;
        if (src.startsWith("http")) return src;
        if (src.startsWith("//")) return `https:${src}`;
        return new URL(src, baseUrl).toString();
    }).filter((u) => !u.startsWith("data:")).slice(0, 3);
}

/** Use GPT-4o Vision to extract exact colors from logo/brand images */
async function analyzeImageColors(imageUrls: string[]): Promise<{ colors: string[]; colorUsage: string } | null> {
    if (imageUrls.length === 0) return null;

    try {
        const imageContent = imageUrls.slice(0, 2).map((url) => ({
            type: "image_url" as const,
            image_url: { url, detail: "low" as const },
        }));

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: `You are a brand color expert. Analyze the logo/brand images and extract the EXACT brand colors you see. Focus on the prominent colors used in the logo and branding elements. Ignore white/transparent backgrounds.

Return ONLY valid JSON:
{
  "colors": ["#hex1", "#hex2", "#hex3"],
  "colorUsage": "description of how each color is used in the logo"
}

Return 3-6 colors, ordered by visual dominance (most prominent first). Be precise with hex codes.`,
                },
                {
                    role: "user",
                    content: [
                        { type: "text", text: "Extract the exact brand colors from these logo/brand images:" },
                        ...imageContent,
                    ],
                },
            ],
            temperature: 0,
            max_tokens: 500,
            response_format: { type: "json_object" },
        });

        const raw = completion.choices[0]?.message?.content?.trim();
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (e) {
        console.error("Vision color analysis failed:", e);
        return null;
    }
}

/** Detect page language */
function extractLanguage(html: string): string {
    const langAttr = html.match(/<html[^>]+lang=["']([^"']+)["']/i);
    if (langAttr) return langAttr[1];
    const metaLang = extractMeta(html, "language") || extractMeta(html, "content-language");
    return metaLang || "";
}

/** Resolve a raw image URL to an absolute URL */
function resolveImageUrl(raw: string, baseUrl: string): string | null {
    if (!raw || raw.startsWith("data:")) return null;
    let src = raw.trim();
    if (src.startsWith("//")) src = `https:${src}`;
    else if (src.startsWith("/")) src = `${baseUrl}${src}`;
    else if (!src.startsWith("http")) src = `${baseUrl}/${src}`;

    // Skip non-image URLs, tiny assets, and tracking
    const lower = src.toLowerCase();
    if (lower.endsWith(".svg") || lower.endsWith(".gif")) return null;
    if (lower.includes("pixel") || lower.includes("tracking") || lower.includes("spacer")) return null;
    if (lower.includes("favicon")) return null;
    // Keep logo images — they're useful as brand reference
    return src;
}

/** Extract product/hero images from HTML pages — handles modern lazy-loading patterns */
function extractProductImages(pages: string[], baseUrl: string): string[] {
    const imageSet = new Set<string>();

    for (const html of pages) {
        // 1. OG images (usually hero/product photos)
        const ogImage = extractMeta(html, "og:image");
        if (ogImage) {
            const resolved = resolveImageUrl(ogImage, baseUrl);
            if (resolved) imageSet.add(resolved);
        }

        // 2. Twitter card images
        const twImage = extractMeta(html, "twitter:image");
        if (twImage) {
            const resolved = resolveImageUrl(twImage, baseUrl);
            if (resolved) imageSet.add(resolved);
        }

        // 3. All <img> tags — extract from multiple attributes (src, data-src, srcset, data-lazy-src)
        const imgTags = html.match(/<img[^>]+>/gi) || [];
        for (const imgTag of imgTags) {
            // Skip explicitly tiny images
            const widthMatch = imgTag.match(/width=["']?(\d+)/i);
            const heightMatch = imgTag.match(/height=["']?(\d+)/i);
            if (widthMatch && Number(widthMatch[1]) < 50) continue;
            if (heightMatch && Number(heightMatch[1]) < 50) continue;

            // Try multiple source attributes (modern sites use lazy loading)
            const srcAttrs = ["src", "data-src", "data-lazy-src", "data-original"];
            for (const attr of srcAttrs) {
                const attrMatch = imgTag.match(new RegExp(`${attr}=["']([^"']+)["']`, "i"));
                if (attrMatch) {
                    const resolved = resolveImageUrl(attrMatch[1], baseUrl);
                    if (resolved) { imageSet.add(resolved); break; }
                }
            }

            // Also extract first URL from srcset (usually the best quality)
            const srcsetMatch = imgTag.match(/srcset=["']([^"']+)["']/i);
            if (srcsetMatch) {
                const firstSrc = srcsetMatch[1].split(",")[0].trim().split(/\s+/)[0];
                const resolved = resolveImageUrl(firstSrc, baseUrl);
                if (resolved) imageSet.add(resolved);
            }
        }

        // 4. <source> tags inside <picture> elements
        const sourceTags = html.match(/<source[^>]+srcset=["']([^"']+)["']/gi) || [];
        for (const tag of sourceTags) {
            const srcsetMatch = tag.match(/srcset=["']([^"']+)["']/i);
            if (srcsetMatch) {
                const firstSrc = srcsetMatch[1].split(",")[0].trim().split(/\s+/)[0];
                const resolved = resolveImageUrl(firstSrc, baseUrl);
                if (resolved) imageSet.add(resolved);
            }
        }

        // 5. CSS background-image URLs (hero sections, product showcases)
        const bgImages = html.match(/background(?:-image)?\s*:\s*url\(["']?([^"')]+)["']?\)/gi) || [];
        for (const bg of bgImages) {
            const urlMatch = bg.match(/url\(["']?([^"')]+)["']?\)/i);
            if (urlMatch) {
                const resolved = resolveImageUrl(urlMatch[1], baseUrl);
                if (resolved) imageSet.add(resolved);
            }
        }

        // 6. JSON-LD structured data (product images, organization logo)
        const jsonLdBlocks = html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
        for (const block of jsonLdBlocks) {
            const jsonContent = block.replace(/<\/?script[^>]*>/gi, "");
            try {
                const data = JSON.parse(jsonContent);
                const images = data.image || data.logo || data.thumbnailUrl;
                if (typeof images === "string") {
                    const resolved = resolveImageUrl(images, baseUrl);
                    if (resolved) imageSet.add(resolved);
                } else if (Array.isArray(images)) {
                    for (const img of images.slice(0, 4)) {
                        if (typeof img === "string") {
                            const resolved = resolveImageUrl(img, baseUrl);
                            if (resolved) imageSet.add(resolved);
                        } else if (img?.url) {
                            const resolved = resolveImageUrl(img.url, baseUrl);
                            if (resolved) imageSet.add(resolved);
                        }
                    }
                }
            } catch { /* ignore invalid JSON-LD */ }
        }
    }

    // 7. Extract image URLs from inline <script> tags (Next.js __NEXT_DATA__, embedded JSON)
    for (const html of pages) {
        // Next.js __NEXT_DATA__
        const nextDataMatch = html.match(/<script[^>]+id=["']__NEXT_DATA__["'][^>]*>([\s\S]*?)<\/script>/i);
        if (nextDataMatch) {
            try {
                const imageUrls = nextDataMatch[1].match(/https?:\/\/[^"'\s]+\.(?:jpg|jpeg|png|webp)(?:\?[^"'\s]*)?/gi) || [];
                for (const imgUrl of imageUrls.slice(0, 10)) {
                    if (!imgUrl.includes("pixel") && !imgUrl.includes("tracking") && !imgUrl.includes("favicon")) {
                        imageSet.add(imgUrl);
                    }
                }
            } catch { /* ignore */ }
        }

        // Generic: find image URLs in any <script> tag content
        const scriptBlocks = html.match(/<script[^>]*>([\s\S]*?)<\/script>/gi) || [];
        for (const script of scriptBlocks.slice(0, 20)) {
            const content = script.replace(/<\/?script[^>]*>/gi, "");
            // Look for product image patterns in JSON
            const productImgUrls = content.match(/"(?:image|imageUrl|img|photo|thumbnail|src|product_image|featured_image)":\s*"(https?:\/\/[^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/gi) || [];
            for (const match of productImgUrls.slice(0, 8)) {
                const urlMatch = match.match(/"(https?:\/\/[^"]+)"/);
                if (urlMatch) {
                    const clean = urlMatch[1].replace(/\\u002F/g, "/").replace(/\\\//g, "/");
                    if (!clean.includes("pixel") && !clean.includes("tracking")) {
                        imageSet.add(clean);
                    }
                }
            }
        }
    }

    // Return up to 12 unique product images
    return [...imageSet].slice(0, 12);
}

/** Try to fetch product images from common e-commerce API endpoints */
async function fetchProductApiImages(origin: string): Promise<string[]> {
    const images: string[] = [];

    // Shopify: /products.json
    try {
        const shopifyRes = await safeFetch(`${origin}/products.json?limit=6`);
        if (shopifyRes) {
            const data = JSON.parse(shopifyRes);
            if (data.products && Array.isArray(data.products)) {
                for (const product of data.products.slice(0, 6)) {
                    if (product.images && Array.isArray(product.images)) {
                        for (const img of product.images.slice(0, 1)) {
                            if (img.src) images.push(img.src);
                        }
                    } else if (product.image?.src) {
                        images.push(product.image.src);
                    }
                }
            }
        }
    } catch { /* not Shopify */ }

    // WooCommerce: /wp-json/wc/store/products
    if (images.length === 0) {
        try {
            const wooRes = await safeFetch(`${origin}/wp-json/wc/store/products?per_page=6`);
            if (wooRes) {
                const data = JSON.parse(wooRes);
                if (Array.isArray(data)) {
                    for (const product of data.slice(0, 6)) {
                        if (product.images && Array.isArray(product.images)) {
                            for (const img of product.images.slice(0, 1)) {
                                if (img.src) images.push(img.src);
                            }
                        }
                    }
                }
            }
        } catch { /* not WooCommerce */ }
    }

    return images.slice(0, 8);
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

        // ── Step 1: Multi-page fetch (including product pages) ──
        const pagesToFetch = [
            baseUrl.toString(),
            `${origin}/about`,
            `${origin}/about-us`,
            `${origin}/contact`,
            `${origin}/products`,
            `${origin}/shop`,
            `${origin}/collections`,
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
        const brandedColors = extractBrandedColors(homepageHtml);

        // ── Step 4b: Extract logo URLs ─────────────────────
        const logoUrls = extractLogoUrls(homepageHtml, origin);

        // ── Step 4c: Vision-based color extraction from logo ──
        // Collect best image candidates: logos first, then OG image, then favicon
        const imageUrlsForVision: string[] = [...logoUrls];
        if (metadata.ogImage && metadata.ogImage.startsWith("http")) {
            imageUrlsForVision.push(metadata.ogImage);
        }
        const visionColors = await analyzeImageColors(imageUrlsForVision);

        // ── Step 5: Extract structured text ───────────────
        const structured = extractStructuredText(homepageHtml);

        // Combine all page text (limited)
        const allPageText = pages
            .map((p) => cleanHtmlForAI(p))
            .join("\n---\n")
            .slice(0, 24000);

        // ── Step 6: GPT-4o analysis ───────────────────────
        const systemPrompt = `You are a world-class brand strategist and master copywriter. You are analyzing a brand's website to build an extremely robust, highly accurate, and deeply comprehensive Brand DNA profile.

You will receive:
1. Website metadata (title, description, OG tags)
2. VISION-ANALYZED LOGO COLORS — extracted by AI vision directly from the brand's logo image (MOST ACCURATE color source)
3. Branded element colors from CSS (buttons, CTAs, headers)
4. Raw CSS colors (may contain framework noise — use with caution)
5. Social media links found
6. Structured content (headings, paragraphs) from homepage and subpages

Your task: Extract and infer brand identity with massive detail and precision. Go beyond surface-level text to infer the true essence, emotional hook, and competitive angle of the brand. Be highly specific. Do NOT leave fields empty — use contextual clues to infer when not explicitly stated.

Return ONLY valid JSON (no markdown, no explanation) with this exact structure:
{
  "name": "exact brand name, carefully extracted",
  "mission": "deep brand mission, emotional hook, or core value proposition (3-4 impactful sentences)",
  "uniqueSellingPoints": "what truly makes this brand unique, key differentiators, or specific product benefits (3-4 sentences)",
  "industry": "MUST be one of: Beauty & Cosmetics, Fashion, Food & Beverage, Health & Fitness, Technology, E-commerce, Education, Real Estate, Finance, Travel & Hospitality, Other",
  "targetAudience": "highly detailed target audience description — precise demographics, deep psychographics, hidden pain points, and desires (3-4 sentences)",
  "competitors": "4-6 likely direct competitors, comma-separated",
  "marketPosition": "deep analysis on how the brand positions itself vs competitors in the market hierarchy (3-4 sentences)",
  "toneOfVoice": ["exactly 3-4 values from: Professional, Friendly, Bold, Playful, Luxury, Minimalist, Warm, Edgy, Inspirational, Casual, Formal, Witty"],
  "language": "primary language of the website content (e.g., English, Bahasa Indonesia, etc.)",
  "writingStyle": "description of their writing style — sentence length, formality, use of jargon, etc.",
  "colors": ["3-6 hex color codes that TRULY represent the brand identity. CRITICAL PRIORITY ORDER: 1) VISION-ANALYZED LOGO COLORS are the MOST ACCURATE source — if provided, use these as the primary brand colors. They were extracted directly from the logo image by AI vision. 2) BRANDED ELEMENT COLORS from buttons/CTAs are the second best source. 3) CSS colors are UNRELIABLE — they often contain framework defaults (Bootstrap blues, Tailwind defaults). Only use CSS colors if vision and branded colors are empty. 4) NEVER use generic framework colors (#0d6efd, #3b82f6, etc.) as brand colors."],
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

=== VISION-ANALYZED LOGO COLORS (extracted by AI vision from the actual logo/brand images — HIGHEST PRIORITY, use these first!) ===
${visionColors ? `Colors: ${visionColors.colors.join(", ")}\nUsage: ${visionColors.colorUsage}` : "No logo images found for analysis"}

=== BRANDED ELEMENT COLORS (from buttons, CTAs, headers, CSS variables — HIGH PRIORITY) ===
${brandedColors.join(", ") || "None detected"}

=== ALL DETECTED CSS COLORS (may include framework/theme noise — LOW PRIORITY, only use if above sources are empty) ===
${detectedColors.join(", ") || "None detected"}

=== SOCIAL MEDIA LINKS ===
${[...allSocialLinks].join("\n") || "None found"}

=== HEADINGS ===
${structured.headings.slice(0, 4000)}

=== BODY CONTENT ===
${allPageText}`;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
            temperature: 0.1,
            max_tokens: 2500,
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

        // ── Step 7: Extract product images ─────────────────
        let productImages = extractProductImages(pages, origin);

        // If HTML scraping found very few images, try e-commerce API endpoints
        if (productImages.length < 3) {
            const apiImages = await fetchProductApiImages(origin);
            // Merge, deduplicate
            const combined = new Set([...productImages, ...apiImages]);
            productImages = [...combined].slice(0, 12);
        }

        // Merge in extracted data that AI might have missed
        return NextResponse.json({
            success: true,
            data: brandData,
            meta: {
                pagesScanned: pages.length,
                socialLinks: [...allSocialLinks],
                detectedColors,
                brandedColors,
                visionColors: visionColors?.colors || [],
                logoUrls,
                favicon: metadata.favicon,
                ogImage: metadata.ogImage,
                language: metadata.language,
                productImages,
            },
        });
    } catch (error) {
        console.error("Brand analysis error:", error);
        return NextResponse.json({ error: "Failed to analyze brand. Please try again." }, { status: 500 });
    }
}
