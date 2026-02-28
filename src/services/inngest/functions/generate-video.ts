/**
 * ============================================
 * Inngest Function — Generate Video (Background)
 * ============================================
 * Triggered by "ai/video.generate" event.
 * Runs video generation via Replicate then uploads to R2.
 */

import { inngest } from "../client";
import { generateVideo } from "@/services/replicate/video";
import { uploadFile } from "@/services/storage/upload";

export const generateVideoJob = inngest.createFunction(
    {
        id: "generate-video",
        name: "Generate AI Video",
    },
    { event: "ai/video.generate" },
    async ({ event, step }) => {
        // Step 1: Generate the video via Replicate
        const result = await step.run("generate-video", async () => {
            return generateVideo({
                prompt: event.data.prompt,
                model: event.data.model,
                duration: event.data.duration,
                firstFrameUrl: event.data.firstFrameUrl,
            });
        });

        // Step 2: Upload the generated video to R2
        const storedUrl = await step.run("upload-to-r2", async () => {
            const response = await fetch(result.outputUrl);
            const buffer = Buffer.from(await response.arrayBuffer());

            const timestamp = Date.now();
            const key = `generated/videos/${timestamp}-${Math.random().toString(36).slice(2, 8)}.mp4`;

            const uploaded = await uploadFile({
                fileBuffer: buffer,
                key,
                contentType: "video/mp4",
                metadata: {
                    prompt: event.data.prompt,
                    model: result.model,
                },
            });

            return uploaded.publicUrl;
        });

        return {
            success: true,
            originalUrl: result.outputUrl,
            storedUrl,
            model: result.model,
            elapsedSeconds: result.elapsedSeconds,
        };
    }
);
