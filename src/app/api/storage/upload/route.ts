/**
 * ============================================
 * API Route — File Upload to R2
 * POST /api/storage/upload
 * ============================================
 */

import { NextRequest, NextResponse } from "next/server";
import { uploadFile } from "@/services/storage/upload";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
            return NextResponse.json(
                { error: "Missing required field: file" },
                { status: 400 }
            );
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const timestamp = Date.now();
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const key = `uploads/${timestamp}-${safeName}`;

        const result = await uploadFile({
            fileBuffer: buffer,
            key,
            contentType: file.type || "application/octet-stream",
        });

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error("[API] /api/storage/upload error:", error);
        return NextResponse.json(
            { error: "File upload failed", details: String(error) },
            { status: 500 }
        );
    }
}
