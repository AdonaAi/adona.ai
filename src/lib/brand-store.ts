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
        colors: [], colorUsage: "", logoUrl: "", fonts: [], styleTags: [],
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

// ─── Legacy compat for dashboard "Start Here" card ───────
export function getBrandCompletionStatus() {
    const d = getBrandDNA();
    const m = getBrandMoodboard();
    const product = !!(d.name && d.mission);
    const context = !!(d.industry && d.toneOfVoice.length > 0);
    const moodboard = !!(d.colors.length > 0 || (m && m.images.length > 0));
    return { product, context, moodboard, total: [product, context, moodboard].filter(Boolean).length };
}
