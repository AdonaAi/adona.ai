/**
 * ============================================
 * Adona.ai — Brand Identity Store (localStorage)
 * ============================================
 * Matches Holo.ai's DNA structure:
 *   - Who you are (Core Basics)
 *   - How you speak (Brand Voice)
 *   - Where you compete (Your Market)
 *   - Visual Style (Colors, Fonts, Logo, Moodboard)
 */

// ─── Types ───────────────────────────────────────────────
export interface BrandDNA {
    // Core Basics ("Who you are")
    name: string;
    websiteUrl: string;
    mission: string;
    uniqueSellingPoints: string;
    extraGuidelines: string;
    showInGallery: boolean;

    // Brand Voice ("How you speak")
    toneOfVoice: string[];
    language: string;
    useEmojis: boolean;
    goodCopyExamples: string;
    badCopyExamples: string;
    writingStyle: string;

    // Your Market ("Where you compete")
    industry: string;
    targetAudience: string;
    competitors: string;
    marketPosition: string;

    // Visual Style
    colors: string[];
    colorUsage: string;
    logoUrl: string;
    productImages: string[];
    fonts: string[];
    styleTags: string[];

    // Social
    socialMediaUrl: string;

    updatedAt: string;
}

export interface MoodboardImage {
    id: string;
    dataUrl: string;
    name: string;
}

export interface BrandMoodboard {
    images: MoodboardImage[];
    updatedAt: string;
}

// ─── Keys ────────────────────────────────────────────────
const BRAND_DNA_KEY = "adona_brand_dna";
const BRAND_MOODBOARD_KEY = "adona_brand_moodboard";

// ─── Helpers ─────────────────────────────────────────────
function safeGet<T>(key: string): T | null {
    if (typeof window === "undefined") return null;
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        return JSON.parse(raw) as T;
    } catch {
        return null;
    }
}

function safeSet(key: string, value: unknown): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, JSON.stringify(value));
}

// ─── Default DNA ─────────────────────────────────────────
export function getDefaultDNA(): BrandDNA {
    return {
        name: "", websiteUrl: "", mission: "", uniqueSellingPoints: "", extraGuidelines: "",
        showInGallery: false,
        toneOfVoice: [], language: "", useEmojis: true,
        goodCopyExamples: "", badCopyExamples: "", writingStyle: "",
        industry: "", targetAudience: "", competitors: "", marketPosition: "",
        colors: [], colorUsage: "", logoUrl: "", productImages: [], fonts: [], styleTags: [],
        socialMediaUrl: "",
        updatedAt: "",
    };
}

// ─── DNA CRUD ────────────────────────────────────────────
export function getBrandDNA(): BrandDNA {
    return safeGet<BrandDNA>(BRAND_DNA_KEY) || getDefaultDNA();
}

export function saveBrandDNA(data: BrandDNA): BrandDNA {
    const updated = { ...data, updatedAt: new Date().toISOString() };
    safeSet(BRAND_DNA_KEY, updated);
    return updated;
}

// ─── Moodboard ───────────────────────────────────────────
export function getBrandMoodboard(): BrandMoodboard | null {
    return safeGet<BrandMoodboard>(BRAND_MOODBOARD_KEY);
}

export function saveBrandMoodboard(data: Omit<BrandMoodboard, "updatedAt">): BrandMoodboard {
    const moodboard: BrandMoodboard = { ...data, updatedAt: new Date().toISOString() };
    safeSet(BRAND_MOODBOARD_KEY, moodboard);
    return moodboard;
}

// ─── Completion Scoring (like Holo's ring chart) ─────────
export function getDNACompletion(): {
    coreBasics: number; brandVoice: number; yourMarket: number; visualStyle: number; total: number;
} {
    const d = getBrandDNA();
    const m = getBrandMoodboard();

    // Core Basics: name, websiteUrl, mission, uniqueSellingPoints, extraGuidelines, socialMediaUrl
    const coreFields = [d.name, d.websiteUrl, d.mission, d.uniqueSellingPoints, d.extraGuidelines, d.socialMediaUrl];
    const coreBasics = Math.round((coreFields.filter((f) => f && f.trim().length > 0).length / coreFields.length) * 100);

    // Brand Voice: toneOfVoice, language, writingStyle, goodCopyExamples, badCopyExamples
    const voiceScore = [
        d.toneOfVoice.length > 0 ? 1 : 0,
        d.language ? 1 : 0,
        d.writingStyle ? 1 : 0,
        d.goodCopyExamples ? 1 : 0,
        d.badCopyExamples ? 1 : 0,
    ];
    const brandVoice = Math.round((voiceScore.reduce((a, b) => a + b, 0) / voiceScore.length) * 100);

    // Your Market: industry, targetAudience, competitors, marketPosition
    const marketFields = [d.industry, d.targetAudience, d.competitors, d.marketPosition];
    const yourMarket = Math.round((marketFields.filter((f) => f && f.trim().length > 0).length / marketFields.length) * 100);

    // Visual Style: colors, fonts, logoUrl, styleTags, moodboard images
    const visualScore = [
        d.colors.length > 0 ? 1 : 0,
        d.fonts.length > 0 ? 1 : 0,
        d.logoUrl ? 1 : 0,
        d.styleTags.length > 0 ? 1 : 0,
        m && m.images.length > 0 ? 1 : 0,
    ];
    const visualStyle = Math.round((visualScore.reduce((a, b) => a + b, 0) / visualScore.length) * 100);

    const total = Math.round((coreBasics + brandVoice + yourMarket + visualStyle) / 4);

    return { coreBasics, brandVoice, yourMarket, visualStyle, total };
}

// ─── Brand System Prompt Builder ─────────────────────────
/**
 * Converts stored Brand DNA into a comprehensive GPT system prompt.
 * Use this in ALL AI generation routes to inject brand context.
 *
 * @param dna - The saved BrandDNA object
 * @returns A detailed system prompt string for GPT
 */
export function buildBrandSystemPrompt(dna: BrandDNA): string {
    const lines: string[] = [
        "You are an expert AI copywriter and creative strategist specialized in on-brand content generation.",
        "You have been given the following Brand DNA profile. You MUST use it to produce content that feels authentic, consistent, and tailored to this specific brand.",
        "",
        "=== BRAND DNA ===",
    ];

    if (dna.name) lines.push(`Brand Name: ${dna.name}`);
    if (dna.industry) lines.push(`Industry: ${dna.industry}`);
    if (dna.mission) lines.push(`Mission / What We Do: ${dna.mission}`);
    if (dna.uniqueSellingPoints) lines.push(`Unique Value / USP: ${dna.uniqueSellingPoints}`);
    if (dna.targetAudience) lines.push(`Target Audience: ${dna.targetAudience}`);
    if (dna.marketPosition) lines.push(`Market Position: ${dna.marketPosition}`);
    if (dna.competitors) lines.push(`Competitors: ${dna.competitors}`);

    if (dna.toneOfVoice.length > 0) {
        lines.push(`Tone of Voice: ${dna.toneOfVoice.join(", ")}`);
    }
    if (dna.writingStyle) lines.push(`Writing Style: ${dna.writingStyle}`);
    if (dna.language) lines.push(`Language: ${dna.language}`);
    lines.push(`Use Emojis: ${dna.useEmojis ? "Yes, use them sparingly and naturally" : "No emojis"}`);

    if (dna.goodCopyExamples) {
        lines.push("", "Good Copy Examples (match this style):");
        lines.push(dna.goodCopyExamples);
    }
    if (dna.badCopyExamples) {
        lines.push("", "Bad Copy Examples (AVOID this style):");
        lines.push(dna.badCopyExamples);
    }

    if (dna.colors.length > 0) {
        lines.push(`Brand Colors: ${dna.colors.join(", ")}`);
    }
    if (dna.styleTags.length > 0) {
        lines.push(`Visual Style Keywords: ${dna.styleTags.join(", ")}`);
    }
    if (dna.fonts.length > 0) {
        lines.push(`Typography: ${dna.fonts.join(", ")}`);
    }
    if (dna.colorUsage) lines.push(`Color Usage Notes: ${dna.colorUsage}`);
    if (dna.extraGuidelines) {
        lines.push("", "Extra Brand Guidelines:");
        lines.push(dna.extraGuidelines);
    }

    lines.push(
        "",
        "=== INSTRUCTIONS ===",
        "- Always write in the brand's voice and tone described above.",
        "- Speak directly to the target audience's needs, desires, and pain points.",
        "- Reflect the brand's market position and unique value proposition.",
        "- Keep the language consistent with the brand's style (sentence length, formality, energy).",
        "- Do NOT use generic, bland, or off-brand language.",
        "- NEVER mention competitors in a negative way.",
        dna.language && dna.language.toLowerCase() !== "english"
            ? `- Write in ${dna.language} unless otherwise instructed.`
            : "- Write in English unless otherwise instructed.",
    );

    return lines.filter((l) => l !== undefined).join("\n");
}

/**
 * Build an enhanced image generation prompt that weaves in Brand DNA visual context.
 * Use this in image generation flows to keep visuals on-brand.
 */
export function buildBrandImagePrompt(userPrompt: string, dna: BrandDNA, isImageRef: boolean = false): string {
    const parts: string[] = [];

    if (dna.name) parts.push(`for the brand "${dna.name}"`);
    if (dna.industry && !isImageRef) parts.push(`in the ${dna.industry} industry`);
    
    if (isImageRef) {
        // Less descriptive for img2img so it doesn't override the existing product
        if (dna.styleTags.length > 0) parts.push(`subtle ${dna.styleTags.slice(0, 2).join(", ")} aesthetics`);
    } else {
        if (dna.styleTags.length > 0) parts.push(`style: ${dna.styleTags.join(", ")}`);
        if (dna.toneOfVoice.length > 0) parts.push(`mood: ${dna.toneOfVoice.join(", ").toLowerCase()}`);
        if (dna.targetAudience) parts.push(`visual appeal to: ${dna.targetAudience.slice(0, 80)}`);
        if (dna.fonts.length > 0) parts.push(`typography style: ${dna.fonts.join(", ")}`);
    }

    if (dna.colors.length > 0) parts.push(`brand color palette: ${dna.colors.join(", ")}`);

    if (isImageRef) {
        return `${userPrompt}. Professional marketing ad, ${parts.join(", ")}. Keep the main subject exactly the same. No typos, perfectly spelled text, highly attractive Call to Action (CTA) button, glowing holographic modern tech accents.`;
    }

    return `${userPrompt}. ${parts.join(". ")}. High quality, professional marketing ad creative, highly attractive Call to Action (CTA) button, glowing holographic modern tech accents, 100% accurate spelling, no typos.`;
}

// ─── Legacy compat for dashboard "Start Here" card ───────
export function getBrandCompletionStatus() {
    const d = getBrandDNA();
    const m = getBrandMoodboard();
    const product = !!(d.name && d.mission);
    const context = !!(d.industry && d.toneOfVoice.length > 0);
    const moodboard = !!(d.colors.length > 0 || (m && m.images.length > 0));
    return { product, context, moodboard, total: [product, context, moodboard].filter(Boolean).length };
}
