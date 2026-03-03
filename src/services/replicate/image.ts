/**
 * ============================================
 * Replicate — AI Image Generation Service
 * ============================================
 */

import { getReplicateClient } from "./client";
import type { ImageGenerationInput, ImageGenerationResult } from "./types";

/** Default model: Stable Diffusion 3.5 Large Turbo */
const DEFAULT_IMAGE_MODEL = "stability-ai/stable-diffusion-3.5-large-turbo";

/**
 * Generate an image using Replicate.
 *
 * @example
 * ```ts
 * const result = await generateImage({ prompt: "a futuristic city at sunset" });
 * console.log(result.outputUrls);
 * ```
 */
export async function generateImage(
    input: ImageGenerationInput
): Promise<ImageGenerationResult> {
    const client = getReplicateClient();
    const model = input.model || DEFAULT_IMAGE_MODEL;
    const startTime = Date.now();

    const output = await client.run(model as `${string}/${string}`, {
        input: {
            prompt: input.prompt,
            aspect_ratio: input.aspectRatio || "4:3",
            output_format: input.outputFormat || "png",
            ...(input.width && { width: input.width }),
            ...(input.height && { height: input.height }),
            ...(input.numOutputs && { num_outputs: input.numOutputs }),
            ...(input.negativePrompt && { negative_prompt: input.negativePrompt }),
            ...(input.seed !== undefined && { seed: input.seed }),
            ...(input.cfg !== undefined && { cfg: input.cfg }),
        },
    });

    const elapsedSeconds = (Date.now() - startTime) / 1000;

    // Handle FileOutput or array of URLs from Replicate
    const urls: string[] = [];
    if (Array.isArray(output)) {
        for (const item of output) {
            if (typeof item === "object" && item !== null && "url" in item) {
                urls.push((item as { url: () => string }).url());
            } else {
                urls.push(String(item));
            }
        }
    } else if (typeof output === "object" && output !== null && "url" in output) {
        urls.push((output as { url: () => string }).url());
    } else {
        urls.push(String(output));
    }

    return {
        outputUrls: urls,
        predictionId: "",
        status: "succeeded",
        model,
        elapsedSeconds,
    };
}
