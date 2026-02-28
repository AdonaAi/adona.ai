import { NextRequest, NextResponse } from "next/server";

const MODELS: Record<string, string> = {
    "nano-banana": "google/nano-banana",
    "nano-banana-pro": "google/nano-banana-pro",
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            prompt,
            aspect_ratio = "1:1",
            num_outputs = 1,
            model = "nano-banana",
            output_format = "webp",
            image_input,
        } = body;

        if (!prompt || typeof prompt !== "string") {
            return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
        }

        const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;
        if (!REPLICATE_API_TOKEN) {
            return NextResponse.json({ error: "Replicate API token not configured" }, { status: 500 });
        }

        const modelPath = MODELS[model] || MODELS["nano-banana"];

        // Build input payload
        const input: Record<string, unknown> = {
            prompt,
            aspect_ratio,
            output_format,
        };

        // Only nano-banana-pro supports num_outputs
        if (model === "nano-banana-pro") {
            input.num_outputs = Math.min(num_outputs, 4);
            input.safety_tolerance = 2;
        }

        // Support image_input for nano-banana (image editing)
        if (image_input && Array.isArray(image_input) && image_input.length > 0) {
            input.image_input = image_input;
            // Use match_input_image if images are provided and no specific ratio set
            if (aspect_ratio === "match_input") {
                input.aspect_ratio = "match_input_image";
            }
        }

        // Create prediction using Replicate API
        const response = await fetch(
            `https://api.replicate.com/v1/models/${modelPath}/predictions`,
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

            // Normalize output — nano-banana returns a single URL string, pro returns array
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
