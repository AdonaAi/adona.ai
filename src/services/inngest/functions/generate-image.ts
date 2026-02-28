/**
 * ============================================
 * Inngest Function — Generate Image (Background)
 * ============================================
 * Triggered by "ai/image.generate" event.
 * Runs image generation via Replicate then uploads to R2.
 */

import { inngest } from "../client";
import { generateImage } from "@/services/replicate/image";
import { uploadFile } from "@/services/storage/upload";

export const generateImageJob = inngest.createFunction(
    {
        id: "generate-image",
        name: "Generate AI Image",
    },
    { event: "ai/image.generate" },
    async ({ event, step }) => {
        // Step 1: Generate the image via Replicate
        const result = await step.run("generate-image", async () => {
            return generateImage({
                prompt: event.data.prompt,
                model: event.data.model,
                width: event.data.width,
                height: event.data.height,
                numOutputs: event.data.numOutputs,
                negativePrompt: event.data.negativePrompt,
            });
        });

        // Step 2: Upload each generated image to R2
        const uploadedUrls = await step.run("upload-to-r2", async () => {
            const urls: string[] = [];

            for (const imageUrl of result.outputUrls) {
                // Fetch the image from Replicate's CDN
                const response = await fetch(imageUrl);
                const buffer = Buffer.from(await response.arrayBuffer());

                const timestamp = Date.now();
                const key = `generated/images/${timestamp}-${Math.random().toString(36).slice(2, 8)}.png`;

                const uploaded = await uploadFile({
                    fileBuffer: buffer,
                    key,
                    contentType: "image/png",
                    metadata: {
                        prompt: event.data.prompt,
                        model: result.model,
                    },
                });

                urls.push(uploaded.publicUrl);
            }

            return urls;
        });

        return {
            success: true,
            originalUrls: result.outputUrls,
            storedUrls: uploadedUrls,
            model: result.model,
            elapsedSeconds: result.elapsedSeconds,
        };
    }
);
