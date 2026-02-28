/**
 * ============================================
 * API Route — Inngest Serve Handler
 * POST /api/inngest
 * ============================================
 * This endpoint registers all Inngest functions
 * and handles incoming events from the Inngest server.
 */

import { serve } from "inngest/next";
import { inngest } from "@/services/inngest/client";
import { generateImageJob } from "@/services/inngest/functions/generate-image";
import { generateVideoJob } from "@/services/inngest/functions/generate-video";

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [generateImageJob, generateVideoJob],
});
