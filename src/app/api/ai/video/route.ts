/**
 * ============================================
 * API Route — AI Video Generation
 * POST /api/ai/video
 * ============================================
 */

import { NextRequest, NextResponse } from "next/server";
import { generateVideo } from "@/services/replicate/video";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        if (!body.prompt || typeof body.prompt !== "string") {
            return NextResponse.json(
                { error: "Missing required field: prompt" },
                { status: 400 }
            );
        }

        const result = await generateVideo({
            prompt: body.prompt,
            model: body.model,
            duration: body.duration,
            firstFrameUrl: body.firstFrameUrl,
        });

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error("[API] /api/ai/video error:", error);
        return NextResponse.json(
            { error: "Video generation failed", details: String(error) },
            { status: 500 }
        );
    }
}
