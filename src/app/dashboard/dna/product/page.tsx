"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Product form is now part of the unified DNA page. Redirect. */
export default function ProductPage() {
    const router = useRouter();
    useEffect(() => { router.replace("/dashboard/dna"); }, [router]);
    return null;
}
