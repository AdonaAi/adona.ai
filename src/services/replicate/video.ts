/**
 * ============================================
 * Replicate — AI Video Generation Service
 * ============================================
 */

import { getReplicateClient } from "./client";
import type { VideoGenerationInput, VideoGenerationResult } from "./types";

/** Default model: Minimax Video-01 */
const DEFAULT_VIDEO_MODEL = "minimax/video-01";

/**
 * Generate a video using Replicate.
 *
 * @example
 * ```ts
 * const result = await generateVideo({ prompt: "a cat walking gracefully" });
 * console.log(result.outputUrl);
 * ```
 */
export async function generateVideo(
    input: VideoGenerationInput
): Promise<VideoGenerationResult> {
    const client = getReplicateClient();
    const model = input.model || DEFAULT_VIDEO_MODEL;
    const startTime = Date.now();

    const output = await client.run(model as `${string}/${string}`, {
        input: {
            prompt: input.prompt,
            ...(input.firstFrameUrl && { first_frame_image: input.firstFrameUrl }),
        },
    });

    const elapsedSeconds = (Date.now() - startTime) / 1000;

    const url = Array.isArray(output) ? String(output[0]) : String(output);

    return {
        outputUrl: url,
        predictionId: "",
        status: "succeeded",
        model,
        elapsedSeconds,
    };
}
