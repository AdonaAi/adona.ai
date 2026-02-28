/**
 * ============================================
 * Replicate — Shared Types
 * ============================================
 */

// ── Image Generation ────────────────────────────────

export interface ImageGenerationInput {
    /** Text prompt describing the image to generate */
    prompt: string;
    /** Replicate model identifier (e.g. "google/nano-banana-pro") */
    model?: string;
    /** Image width in pixels */
    width?: number;
    /** Image height in pixels */
    height?: number;
    /** Number of images to generate */
    numOutputs?: number;
    /** Negative prompt — what to avoid */
    negativePrompt?: string;
    /** Aspect ratio (e.g. "4:3", "16:9", "1:1") */
    aspectRatio?: string;
    /** Output format (e.g. "png", "jpg", "webp") */
    outputFormat?: string;
}

export interface ImageGenerationResult {
    /** Generated image URL(s) */
    outputUrls: string[];
    /** Replicate prediction ID */
    predictionId: string;
    /** Generation status */
    status: "starting" | "processing" | "succeeded" | "failed" | "canceled";
    /** Model used */
    model: string;
    /** Time taken in seconds */
    elapsedSeconds?: number;
}

// ── Video Generation ────────────────────────────────

export interface VideoGenerationInput {
    /** Text prompt describing the video to generate */
    prompt: string;
    /** Replicate model identifier */
    model?: string;
    /** Video duration in seconds */
    duration?: number;
    /** First frame image URL (optional, for image-to-video) */
    firstFrameUrl?: string;
}

export interface VideoGenerationResult {
    /** Generated video URL */
    outputUrl: string;
    /** Replicate prediction ID */
    predictionId: string;
    /** Generation status */
    status: "starting" | "processing" | "succeeded" | "failed" | "canceled";
    /** Model used */
    model: string;
    /** Time taken in seconds */
    elapsedSeconds?: number;
}
