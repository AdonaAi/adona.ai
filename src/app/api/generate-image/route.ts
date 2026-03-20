import { NextRequest, NextResponse } from "next/server";

/** Google Nano Banana Pro Model */
const MODEL_ID = "google/nano-banana-pro";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            prompt,
            aspect_ratio = "1:1",
            num_outputs = 1,
            output_format = "png",
            negative_prompt,
            seed,
            cfg,
            image,             // Reference image URL for img2img
            prompt_strength,   // 0.0–1.0 — how much to deviate from reference
        } = body;

        if (!prompt || typeof prompt !== "string") {
            return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
        }

        const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;
        if (!REPLICATE_API_TOKEN) {
            return NextResponse.json({ error: "Replicate API token not configured" }, { status: 500 });
        }

        const isImg2Img = image && typeof image === "string" && image.startsWith("http");
        const modelToUse = MODEL_ID;

        // Build input payload
        const input: Record<string, unknown> = {
            prompt,
            aspect_ratio,
            output_format,
            num_outputs: Math.min(num_outputs, 4),
        };

        // img2img: pass reference image
        if (isImg2Img) {
            // Nano Banana Pro schema expects `image_input` as a file array
            input.image_input = [image]; 
            // We pass prompt_strength anyway, model will use it if supported
            input.prompt_strength = prompt_strength !== undefined ? Number(prompt_strength) : 0.45;
        }

        // Deterministic seed — critical for brand-consistent generation
        if (seed !== undefined && seed !== null && seed !== "") {
            input.seed = Number(seed);
        }

        // Negative prompt — control what to avoid in outputs
        if (negative_prompt && typeof negative_prompt === "string") {
            input.negative_prompt = negative_prompt;
        }

        // Guidance scale (CFG) — how closely to follow the prompt
        if (cfg !== undefined && cfg !== null) {
            input.cfg = Number(cfg);
        }

        // Create prediction using Replicate API
        const response = await fetch(
            `https://api.replicate.com/v1/models/${modelToUse}/predictions`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${REPLICATE_API_TOKEN}`,
                    "Content-Type": "application/json",
                    Prefer: "wait",
                },
                body: JSON.stringify({ input }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Replicate API error:", response.status, errorData);
            return NextResponse.json(
                { error: errorData?.detail || "Failed to generate image" },
                { status: response.status }
            );
        }

        const prediction = await response.json();

        // If still processing, poll for result
        if (prediction.status === "processing" || prediction.status === "starting") {
            const pollUrl =
                prediction.urls?.get ||
                `https://api.replicate.com/v1/predictions/${prediction.id}`;
            let result = prediction;
            let attempts = 0;
            const maxAttempts = 60;

            while (
                result.status !== "succeeded" &&
                result.status !== "failed" &&
                attempts < maxAttempts
            ) {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                const pollResponse = await fetch(pollUrl, {
                    headers: { Authorization: `Bearer ${REPLICATE_API_TOKEN}` },
                });
                result = await pollResponse.json();
                attempts++;
            }

            if (result.status === "failed") {
                return NextResponse.json(
                    { error: result.error || "Image generation failed" },
                    { status: 500 }
                );
            }

            // Normalize output — SD returns an array of URLs
            const output = result.output;
            const images = Array.isArray(output) ? output : output ? [output] : [];

            return NextResponse.json({ images, status: result.status });
        }

        if (prediction.status === "succeeded") {
            const output = prediction.output;
            const images = Array.isArray(output) ? output : output ? [output] : [];
            return NextResponse.json({ images, status: "succeeded" });
        }

        return NextResponse.json(
            { error: prediction.error || "Image generation failed" },
            { status: 500 }
        );
    } catch (error) {
        console.error("Generate image error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
