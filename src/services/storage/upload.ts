/**
 * ============================================
 * Cloudflare R2 — Upload / Delete Helpers
 * ============================================
 */

import {
    PutObjectCommand,
    DeleteObjectCommand,
    GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl as awsGetSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getR2Client } from "./client";
import { env } from "@/config/env";
import type { UploadInput, UploadResult, DeleteResult } from "./types";

/**
 * Upload a file to Cloudflare R2.
 *
 * @example
 * ```ts
 * const result = await uploadFile({
 *   fileBuffer: Buffer.from("hello"),
 *   key: "uploads/test.txt",
 *   contentType: "text/plain",
 * });
 * ```
 */
export async function uploadFile(input: UploadInput): Promise<UploadResult> {
    const client = getR2Client();

    await client.send(
        new PutObjectCommand({
            Bucket: env.R2_BUCKET_NAME,
            Key: input.key,
            Body: input.fileBuffer,
            ContentType: input.contentType,
            Metadata: input.metadata,
        })
    );

    const publicUrl = env.R2_PUBLIC_URL
        ? `${env.R2_PUBLIC_URL}/${input.key}`
        : `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${env.R2_BUCKET_NAME}/${input.key}`;

    return {
        publicUrl,
        key: input.key,
        size: input.fileBuffer.length,
    };
}

/**
 * Delete a file from Cloudflare R2.
 */
export async function deleteFile(key: string): Promise<DeleteResult> {
    const client = getR2Client();

    await client.send(
        new DeleteObjectCommand({
            Bucket: env.R2_BUCKET_NAME,
            Key: key,
        })
    );

    return { success: true, key };
}

/**
 * Generate a presigned URL for private file access.
 * URL expires after the specified duration (default: 1 hour).
 */
export async function getSignedUrl(
    key: string,
    expiresInSeconds = 3600
): Promise<string> {
    const client = getR2Client();

    const command = new GetObjectCommand({
        Bucket: env.R2_BUCKET_NAME,
        Key: key,
    });

    return awsGetSignedUrl(client, command, { expiresIn: expiresInSeconds });
}
