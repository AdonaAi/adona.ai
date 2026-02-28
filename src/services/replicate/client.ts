/**
 * ============================================
 * Replicate — Client Singleton
 * ============================================
 * Creates and exports a reusable Replicate client.
 */

import Replicate from "replicate";
import { env } from "@/config/env";

let _client: Replicate | null = null;

/**
 * Returns a singleton Replicate client instance.
 */
export function getReplicateClient(): Replicate {
    if (!_client) {
        _client = new Replicate({
            auth: env.REPLICATE_API_TOKEN,
        });
    }
    return _client;
}
