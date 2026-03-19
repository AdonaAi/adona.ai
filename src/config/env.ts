/**
 * ============================================
 * Adona.ai — Environment Configuration
 * ============================================
 * Central, typed environment variable access.
 * Uses Zod for runtime validation at startup.
 */

import { z } from "zod";

const envSchema = z.object({
    // ── Replicate (AI Image & Video) ──────────────────
    REPLICATE_API_TOKEN: z.string().min(1, "REPLICATE_API_TOKEN is required"),

    // ── Cloudflare R2 (Storage) ───────────────────────
    R2_ACCOUNT_ID: z.string().min(1, "R2_ACCOUNT_ID is required"),
    R2_ACCESS_KEY_ID: z.string().min(1, "R2_ACCESS_KEY_ID is required"),
    R2_SECRET_ACCESS_KEY: z.string().min(1, "R2_SECRET_ACCESS_KEY is required"),
    R2_BUCKET_NAME: z.string().default("adona-ai-assets"),
    R2_PUBLIC_URL: z.string().url().optional(),

    // ── OpenAI (Brand URL Analysis) ────────────────────
    OPENAI_API_KEY: z.string().optional(),

    // ── Inngest (Job Queue) ───────────────────────────
    INNGEST_EVENT_KEY: z.string().optional(),
    INNGEST_SIGNING_KEY: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

function getEnv(): Env {
    const parsed = envSchema.safeParse(process.env);

    if (!parsed.success) {
        console.warn(
            "⚠️ Missing environment variables (build will continue, but API routes may fail at runtime without them):",
            parsed.error.flatten().fieldErrors
        );
        // During Vercel build, process.env might not have these variables.
        // Returning process.env as Env prevents the build from crashing.
        return process.env as unknown as Env;
    }

    return parsed.data;
}

/**
 * Validated environment variables — import this everywhere.
 * @example
 * ```ts
 * import { env } from "@/config/env";
 * const token = env.REPLICATE_API_TOKEN;
 * ```
 */
export const env = getEnv();
