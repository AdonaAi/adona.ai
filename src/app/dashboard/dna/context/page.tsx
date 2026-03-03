"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Context form is now part of the unified DNA page. Redirect. */
export default function ContextPage() {
    const router = useRouter();
    useEffect(() => { router.replace("/dashboard/dna"); }, [router]);
    return null;
}
