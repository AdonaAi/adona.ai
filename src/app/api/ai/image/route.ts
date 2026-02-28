/**
 * ============================================
 * API Route — AI Image Generation
 * POST /api/ai/image
 * ============================================
 */

import { NextRequest, NextResponse } from "next/server";
import { generateImage } from "@/services/replicate/image";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        if (!body.prompt || typeof body.prompt !== "string") {
            return NextResponse.json(
                { error: "Missing required field: prompt" },
                { status: 400 }
            );
        }

        const result = await generateImage({
            prompt: body.prompt,
            model: body.model,
            width: body.width,
            height: body.height,
            numOutputs: body.numOutputs,
            negativePrompt: body.negativePrompt,
            aspectRatio: body.aspectRatio,
            outputFormat: body.outputFormat,
        });

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error("[API] /api/ai/image error:", error);
        return NextResponse.json(
            { error: "Image generation failed", details: String(error) },
            { status: 500 }
        );
    }
}
