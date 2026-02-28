/**
 * ============================================
 * Cloudflare R2 — Shared Types
 * ============================================
 */

export interface UploadInput {
    /** File content as Buffer */
    fileBuffer: Buffer;
    /** Storage key / path (e.g. "images/abc123.png") */
    key: string;
    /** MIME content type */
    contentType: string;
    /** Optional metadata to attach to the object */
    metadata?: Record<string, string>;
}

export interface UploadResult {
    /** Public URL of the uploaded file */
    publicUrl: string;
    /** Storage key used */
    key: string;
    /** File size in bytes */
    size: number;
}

export interface DeleteResult {
    /** Whether the deletion was successful */
    success: boolean;
    /** Storage key that was deleted */
    key: string;
}
