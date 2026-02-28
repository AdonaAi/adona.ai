/**
 * ============================================
 * Cloudflare R2 — S3-Compatible Client
 * ============================================
 * R2 uses the S3 API, so we use the AWS SDK.
 */

import { S3Client } from "@aws-sdk/client-s3";
import { env } from "@/config/env";

let _client: S3Client | null = null;

/**
 * Returns a singleton S3Client configured for Cloudflare R2.
 */
export function getR2Client(): S3Client {
    if (!_client) {
        _client = new S3Client({
            region: "auto",
            endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
            credentials: {
                accessKeyId: env.R2_ACCESS_KEY_ID,
                secretAccessKey: env.R2_SECRET_ACCESS_KEY,
            },
        });
    }
    return _client;
}
