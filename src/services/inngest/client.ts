/**
 * ============================================
 * Inngest — Client
 * ============================================
 */

import { Inngest } from "inngest";

/**
 * Shared Inngest client for the entire app.
 * All functions and event sends use this instance.
 */
export const inngest = new Inngest({
    id: "adona-ai",
});
