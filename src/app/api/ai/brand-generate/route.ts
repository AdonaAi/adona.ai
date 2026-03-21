/**
 * ============================================
 * API Route — Brand-Aware Text Generation
 * POST /api/ai/brand-generate
 * ============================================
 * Generates on-brand copy, captions, hooks, ideas, etc.
 * Brand DNA is passed in the request body and injected as a
 * detailed system prompt so GPT fully understands the brand.
 *
 * Request body:
 *   { type, brief, dna }
 *   - type: "ad-copy" | "caption" | "hook" | "content-ideas" | "email-subject" | "hashtags" | "tagline"
 *   - brief: What the content is about (product, campaign, promo)
 *   - dna: BrandDNA object from localStorage
 */

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { buildBrandSystemPrompt, type BrandDNA } from "@/lib/brand-store";

// Lazy-initialize OpenAI to prevent build-time crashes when API_KEY is missing
let openaiInstance: OpenAI | null = null;
function getOpenAI() {
    if (!openaiInstance) {
        if (!process.env.OPENAI_API_KEY) {
            throw new Error("Missing OPENAI_API_KEY environment variable");
        }
        openaiInstance = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    }
    return openaiInstance;
}

type GenerationType = "ad-copy" | "caption" | "hook" | "content-ideas" | "email-subject" | "hashtags" | "tagline";

function buildUserPrompt(type: GenerationType, brief: string, dna: BrandDNA): string {
    const name = dna.name ? `for ${dna.name}` : "";

    const prompts: Record<GenerationType, string> = {
        "ad-copy": `Write 4 short ad copy variations ${name} about: "${brief}"
Each ad copy should have:
- A punchy headline (max 8 words)
- Body text (2–3 sentences max)
- A clear call-to-action

Format each variation as:
---
Headline: [headline]
Body: [body text]
CTA: [call to action]
---`,

        "caption": `Write 4 social media caption variations ${name} about: "${brief}"
Each caption should:
- Start with a hook that stops the scroll
- Be concise and engaging (2–5 lines)
- End with a call-to-action or question to drive comments
- Match the brand's tone exactly

Separate each variation with ---`,

        "hook": `Write 5 powerful opening hook lines ${name} for content about: "${brief}"
These will be used as the first line of ads, videos, or posts.
Each hook must:
- Be a single sentence or punchy phrase (max 12 words)
- Create curiosity, urgency, or strong emotion
- Feel completely on-brand

Number each hook 1–5.`,

        "content-ideas": `Generate 6 content ideas ${name} around the topic: "${brief}"
For each idea include:
- Content format (Reel, Carousel, Story, Blog Post, etc.)
- Topic/angle
- One-sentence description of what the content would cover

Format each idea as:
[Format] — [Topic/Angle]: [Description]`,

        "email-subject": `Write 6 email subject line variations ${name} for a campaign about: "${brief}"
Rules:
- Keep each subject line under 50 characters
- Use curiosity, urgency, personalization, or benefit-driven language
- Avoid spammy words like "FREE", "CLICK NOW", "ACT NOW"
- Match the brand's tone

Number each subject line 1–6.`,

        "hashtags": `Generate a set of 20 highly relevant hashtags ${name} for content about: "${brief}"
Group them into 3 categories:
1. Brand / Niche hashtags (5 — very specific to this brand/industry)
2. Mid-size hashtags (10 — 100K–1M posts)
3. Trending/Broad hashtags (5 — broad reach)

Format: #hashtag`,

        "tagline": `Create 5 memorable brand tagline / slogan variations ${name}.
Brief / Context: "${brief}"
Each tagline should:
- Be short (3–8 words max)
- Be memorable, original, and emotionally resonant
- Reflect the brand's mission and tone
- Work across all platforms

Number each tagline 1–5.`,
    };

    return prompts[type] || prompts["ad-copy"];
}

export async function POST(request: NextRequest) {
    try {
        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json({ error: "OpenAI API key not configured" }, { status: 500 });
        }

        const body = await request.json();
        const { type, brief, dna } = body as { type: GenerationType; brief: string; dna: BrandDNA };

        if (!type || !brief || typeof brief !== "string" || !brief.trim()) {
            return NextResponse.json({ error: "Missing required fields: type and brief" }, { status: 400 });
        }

        const validTypes: GenerationType[] = ["ad-copy", "caption", "hook", "content-ideas", "email-subject", "hashtags", "tagline"];
        if (!validTypes.includes(type)) {
            return NextResponse.json({ error: `Invalid type. Must be one of: ${validTypes.join(", ")}` }, { status: 400 });
        }

        // Build the brand-aware system prompt
        const systemPrompt = dna
            ? buildBrandSystemPrompt(dna)
            : "You are an expert AI copywriter and creative strategist. Write high-quality, engaging marketing content.";

        const userPrompt = buildUserPrompt(type, brief.trim(), dna || {} as BrandDNA);

        const openai = getOpenAI();
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
            temperature: 0.75, // Higher creativity for content generation
            max_tokens: 1200,
        });

        const rawContent = completion.choices[0]?.message?.content?.trim();
        if (!rawContent) {
            return NextResponse.json({ error: "No content generated. Please try again." }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            type,
            content: rawContent,
            brandName: dna?.name || null,
            tokensUsed: completion.usage?.total_tokens,
        });
    } catch (error) {
        console.error("[API] /api/ai/brand-generate error:", error);
        return NextResponse.json({ error: "Generation failed. Please try again." }, { status: 500 });
    }
}
