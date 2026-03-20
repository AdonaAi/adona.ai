"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBrandDNA, type BrandDNA } from "@/lib/brand-store";

// ─── Types ────────────────────────────────────────────────
type GenType = "ad-copy" | "caption" | "hook" | "content-ideas" | "email-subject" | "hashtags" | "tagline";

interface GenTypeConfig {
    id: GenType;
    label: string;
    icon: string;
    placeholder: string;
    description: string;
}

const GEN_TYPES: GenTypeConfig[] = [
    {
        id: "ad-copy",
        label: "Ad Copy",
        icon: "📢",
        placeholder: "e.g. Summer sale — 30% off all products, limited time only",
        description: "Headlines, body text & CTAs for ads",
    },
    {
        id: "caption",
        label: "Caption",
        icon: "✍️",
        placeholder: "e.g. New product launch — our best-selling face serum is back",
        description: "Scroll-stopping social media captions",
    },
    {
        id: "hook",
        label: "Hook",
        icon: "🎣",
        placeholder: "e.g. Why most skincare routines are a waste of money",
        description: "Opening lines that grab attention instantly",
    },
    {
        id: "content-ideas",
        label: "Content Ideas",
        icon: "💡",
        placeholder: "e.g. Educate my audience about ingredient transparency",
        description: "Content calendar ideas for any platform",
    },
    {
        id: "email-subject",
        label: "Email Subject",
        icon: "📧",
        placeholder: "e.g. Flash sale this weekend — exclusive for subscribers",
        description: "High open-rate email subject lines",
    },
    {
        id: "hashtags",
        label: "Hashtags",
        icon: "#",
        placeholder: "e.g. Sustainable beauty product for eco-conscious consumers",
        description: "Strategic hashtag sets for maximum reach",
    },
    {
        id: "tagline",
        label: "Tagline",
        icon: "⚡",
        placeholder: "e.g. A minimalist skincare brand focused on clean ingredients",
        description: "Memorable brand slogans & taglines",
    },
];

// ─── Helpers ─────────────────────────────────────────────
function parseResultBlocks(content: string, type: GenType): string[] {
    if (type === "ad-copy") {
        // Split by --- separator
        return content.split(/\n---+\n/).map((s) => s.trim()).filter(Boolean);
    }
    if (type === "hashtags") {
        // Return as a single block
        return [content.trim()];
    }
    if (type === "content-ideas") {
        // Split by numbered line or blank line between ideas
        return content
            .split(/\n(?=\[|\d+\.)/)
            .map((s) => s.trim())
            .filter(Boolean);
    }
    // For caption, hook, email-subject, tagline — split by --- or numbered lines
    const bySeparator = content.split(/\n---+\n/).map((s) => s.trim()).filter(Boolean);
    if (bySeparator.length > 1) return bySeparator;
    const byNumber = content
        .split(/\n(?=\d+\.)/)
        .map((s) => s.trim())
        .filter(Boolean);
    return byNumber.length > 1 ? byNumber : [content.trim()];
}

// ─── Main Component ───────────────────────────────────────
export default function CopilotPage() {
    const [brandDna, setBrandDna] = useState<BrandDNA | null>(null);
    const [activeType, setActiveType] = useState<GenType>("ad-copy");
    const [brief, setBrief] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [results, setResults] = useState<string[]>([]);
    const [error, setError] = useState("");
    const [copied, setCopied] = useState<number | null>(null);
    const [useBrandDna, setUseBrandDna] = useState(true);

    useEffect(() => {
        const dna = getBrandDNA();
        if (dna.name || dna.mission || dna.toneOfVoice.length > 0) {
            setBrandDna(dna);
        }
    }, []);

    const activeConfig = GEN_TYPES.find((t) => t.id === activeType)!;
    const hasBrandDna = !!brandDna;

    const handleGenerate = async () => {
        if (!brief.trim()) return;
        setIsGenerating(true);
        setError("");
        setResults([]);

        try {
            const res = await fetch("/api/ai/brand-generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: activeType,
                    brief: brief.trim(),
                    dna: useBrandDna && brandDna ? brandDna : null,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Generation failed. Please try again.");
                return;
            }

            const blocks = parseResultBlocks(data.content, activeType);
            setResults(blocks);
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(index);
            setTimeout(() => setCopied(null), 2000);
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
            handleGenerate();
        }
    };

    return (
        <div className="px-5 pt-5 flex-1 flex flex-col overflow-y-auto relative min-h-screen">
            {/* Background */}
            <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none overflow-hidden h-screen rounded-[20px]" aria-hidden="true">
                <Image alt="" draggable={false} width={2560} height={1440} className="w-full h-full object-cover object-top opacity-90" src="/dashboard/gradient.png.svg" />
            </div>

            {/* Header */}
            <div className="shrink-0 flex justify-between items-center w-full mb-6 relative z-10">
                <div className="flex items-center gap-3">
                    <Link href="/dashboard" className="flex items-center bg-white rounded-full px-3 py-[7px] hover:opacity-80 transition-opacity cursor-pointer" style={{ boxShadow: "0px 5px 10px 0px rgba(230,230,231,0.15), inset -2px 2px 10px 0px rgba(255,255,255,0.8)" }}>
                        <div className="flex items-center gap-2.5 pr-1 pt-[1px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4.16699 10L16.667 9.9998" stroke="#03045e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.49967 5.83301L4.04011 9.29257C3.70678 9.6259 3.54011 9.79257 3.54011 9.99967C3.54011 10.2068 3.70678 10.3734 4.04011 10.7068L7.49967 14.1663" stroke="#03045e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <span className="text-[16px] font-medium leading-normal text-[#03045e]">Back</span>
                    </Link>
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-[7px]" style={{ boxShadow: "0px 5px 10px 0px rgba(230,230,231,0.15)" }}>
                        <span className="text-[18px]">🤖</span>
                        <span className="text-[14px] font-bold text-[#03045e]">AI Copilot</span>
                        <span className="text-[12px] text-[#6e6e73]">Brand-aware content generator</span>
                    </div>
                </div>

                {/* Brand DNA badge */}
                {hasBrandDna && (
                    <div onClick={() => setUseBrandDna(!useBrandDna)} className={`flex items-center gap-2.5 rounded-full px-4 py-2 cursor-pointer transition-all select-none ${useBrandDna ? "bg-[#caf0f8]/40 border border-[#90e0ef]/50" : "bg-[#f7f7f7] border border-[#e6e6e7]"}`}>
                        {brandDna?.colors.slice(0, 3).map((c) => (
                            <span key={c} className="w-3 h-3 rounded-full border border-white/50 shrink-0" style={{ backgroundColor: c }} />
                        ))}
                        <span className={`text-[13px] font-bold ${useBrandDna ? "text-[#03045e]" : "text-[#6e6e73]"}`}>
                            {brandDna?.name || "Brand DNA"}
                        </span>
                        <div className={`w-[34px] h-[20px] rounded-full p-[2px] transition-colors ${useBrandDna ? "bg-[#0077b6]" : "bg-[#e2e8f0]"}`}>
                            <div className={`w-[16px] h-[16px] rounded-full bg-white shadow transition-transform ${useBrandDna ? "translate-x-[14px]" : "translate-x-0"}`} />
                        </div>
                    </div>
                )}
            </div>

            <div className="relative z-10 w-full pb-10 flex flex-col gap-6 flex-1">

                {/* No Brand DNA warning */}
                {!hasBrandDna && (
                    <div className="bg-amber-50 border border-amber-200 rounded-[16px] px-5 py-3.5 flex items-center gap-3">
                        <span className="text-[20px]">💡</span>
                        <div className="flex-1">
                            <p className="text-[14px] font-bold text-amber-800">Brand DNA not set up yet</p>
                            <p className="text-[13px] text-amber-700">Content will be generated generically. <Link href="/dashboard/dna" className="underline font-medium">Set up your Brand DNA</Link> for fully on-brand results.</p>
                        </div>
                    </div>
                )}

                {/* Brand DNA active info */}
                {hasBrandDna && useBrandDna && (
                    <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[16px] px-5 py-3 flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#34C759] flex items-center justify-center shrink-0">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <p className="text-[13px] font-medium text-[#166534]">
                            Brand DNA active — all content will be tailored to <strong>{brandDna!.name}</strong>
                            {brandDna!.toneOfVoice.length > 0 && <span className="text-[#166534]/70"> · {brandDna!.toneOfVoice.join(", ")} tone</span>}
                            {brandDna!.industry && <span className="text-[#166534]/70"> · {brandDna!.industry}</span>}
                        </p>
                    </div>
                )}

                {/* Content type selector */}
                <div>
                    <h2 className="text-[15px] font-bold text-[#03045e] mb-3 px-1">What do you want to create?</h2>
                    <div className="flex gap-2 flex-wrap">
                        {GEN_TYPES.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => { setActiveType(t.id); setResults([]); setError(""); }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-all cursor-pointer border ${activeType === t.id
                                    ? "text-white border-transparent"
                                    : "bg-white border-[#e6e6e7] text-[#6e6e73] hover:border-[#0077b6] hover:text-[#0077b6]"
                                    }`}
                                style={activeType === t.id ? { background: "linear-gradient(135deg, #03045e 0%, #0077b6 40%, #00b4d8 100%)" } : {}}
                            >
                                <span>{t.icon}</span>
                                <span>{t.label}</span>
                            </button>
                        ))}
                    </div>
                    <p className="text-[12px] text-[#6e6e73] mt-2 px-1">{activeConfig.description}</p>
                </div>

                {/* Main generation area */}
                <div className="flex gap-5 flex-1 min-h-0">
                    {/* Left: Input */}
                    <div className="flex flex-col gap-4 w-full max-w-[440px] shrink-0">
                        <div>
                            <label className="text-[14px] font-bold text-[#03045e] block mb-2 px-1">
                                Brief / Topic
                            </label>
                            <div className="relative rounded-[20px] p-[1px]" style={{ background: "linear-gradient(135deg, #caf0f8 0%, #0077b6 100%)" }}>
                                <div className="bg-white rounded-[19px] p-4">
                                    <textarea
                                        value={brief}
                                        onChange={(e) => setBrief(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder={activeConfig.placeholder}
                                        rows={4}
                                        className="w-full resize-none outline-none text-[15px] text-[#1d1d1f] placeholder-[#b0b0b5] leading-relaxed bg-transparent"
                                    />
                                    <p className="text-[11px] text-[#b0b0b5] text-right">⌘+Enter to generate</p>
                                </div>
                            </div>
                        </div>

                        {/* Example prompts */}
                        {!brief.trim() && (
                            <div>
                                <p className="text-[12px] font-medium text-[#6e6e73] mb-2 px-1">Quick examples:</p>
                                <div className="flex flex-col gap-1.5">
                                    {[
                                        hasBrandDna
                                            ? `${brandDna!.name ? `New ${brandDna!.name} collection drop` : "New product launch — limited edition"}`
                                            : "Limited time sale — 40% off this weekend only",
                                        "Why customers trust us over the competition",
                                        hasBrandDna && brandDna!.targetAudience
                                            ? `Solve the #1 pain point of ${brandDna!.targetAudience.slice(0, 40)}...`
                                            : "Behind-the-scenes look at how we make our products",
                                    ].map((ex, i) => (
                                        <button key={i} onClick={() => setBrief(ex)} className="text-left text-[13px] bg-white border border-[#e6e6e7] hover:border-[#90e0ef] rounded-[12px] px-3 py-2 text-[#03045e] transition-all cursor-pointer">
                                            {ex}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Generate button */}
                        <button
                            onClick={handleGenerate}
                            disabled={isGenerating || !brief.trim()}
                            className="w-full h-[48px] flex items-center justify-center gap-2 rounded-full text-[15px] font-bold text-white transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
                            style={{ background: "linear-gradient(135deg, #03045e 0%, #0077b6 40%, #00b4d8 100%)", boxShadow: "0px 5px 15px 0px rgba(0, 119, 182, 0.3)" }}
                        >
                            {isGenerating ? (
                                <>
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="31.4 31.4" strokeLinecap="round" /></svg>
                                    Generating with Brand DNA...
                                </>
                            ) : (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l1.8 4.2L14 7l-4.2 1.8L8 13l-1.8-4.2L2 7l4.2-1.8L8 1z" fill="white" /></svg>
                                    Generate {activeConfig.label}
                                </>
                            )}
                        </button>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 rounded-[12px] px-4 py-3 text-[13px]">
                                {error}
                            </div>
                        )}

                        {/* Tips */}
                        <div className="bg-white border border-[#e6e6e7] rounded-[16px] p-4">
                            <p className="text-[13px] font-bold text-[#03045e] mb-2">💡 Tips for better results</p>
                            <ul className="text-[12px] text-[#6e6e73] space-y-1">
                                <li>• Be specific about the product, campaign, or offer</li>
                                <li>• Mention the goal (awareness, sales, engagement)</li>
                                <li>• Include any key message or angle to focus on</li>
                                {hasBrandDna && <li>• Your brand voice & tone are automatically applied ✓</li>}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Results */}
                    <div className="flex-1 flex flex-col min-h-0">
                        {results.length === 0 && !isGenerating && (
                            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 bg-white/50 rounded-[20px] border border-dashed border-[#e6e6e7] p-10">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center text-[32px]" style={{ background: "linear-gradient(135deg, #caf0f8 0%, #90e0ef 100%)" }}>
                                    {activeConfig.icon}
                                </div>
                                <div>
                                    <h3 className="text-[16px] font-bold text-[#03045e] mb-1">Ready to generate {activeConfig.label}</h3>
                                    <p className="text-[13px] text-[#6e6e73]">
                                        {hasBrandDna && useBrandDna
                                            ? `Content will be tailored to ${brandDna!.name || "your brand"}'s voice and style`
                                            : "Set up Brand DNA for fully personalized content"}
                                    </p>
                                </div>
                            </div>
                        )}

                        {isGenerating && (
                            <div className="flex-1 flex flex-col items-center justify-center gap-5">
                                <div className="relative w-16 h-16">
                                    <div className="absolute inset-0 rounded-full border-4 border-[#caf0f8]" />
                                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#0077b6] animate-spin" />
                                    <div className="absolute inset-0 flex items-center justify-center text-[24px]">{activeConfig.icon}</div>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-[15px] font-bold text-[#03045e]">
                                        {hasBrandDna && useBrandDna ? `Writing as ${brandDna!.name || "your brand"}...` : "Generating content..."}
                                    </span>
                                    <span className="text-[12px] text-[#6e6e73]">
                                        {hasBrandDna && useBrandDna
                                            ? `Tone: ${brandDna!.toneOfVoice.slice(0, 2).join(" & ") || "Brand"} · ${brandDna!.industry || "Your Industry"}`
                                            : "This usually takes 5–10 seconds"}
                                    </span>
                                </div>
                            </div>
                        )}

                        {results.length > 0 && (
                            <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-[15px] font-bold text-[#03045e]">
                                        {results.length} variation{results.length !== 1 ? "s" : ""} generated
                                    </h3>
                                    <button
                                        onClick={handleGenerate}
                                        disabled={isGenerating}
                                        className="flex items-center gap-1.5 text-[13px] font-medium text-[#0077b6] hover:text-[#00b4d8] transition-colors cursor-pointer"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 7A5 5 0 112 7m10 0l-2-2m2 2l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        Regenerate
                                    </button>
                                </div>
                                {results.map((block, i) => (
                                    <div key={i} className="bg-white border border-[#e6e6e7] rounded-[16px] p-4 group relative hover:border-[#90e0ef] transition-colors">
                                        <pre className="text-[13px] text-[#1d1d1f] whitespace-pre-wrap leading-relaxed font-[inherit]">{block}</pre>
                                        <button
                                            onClick={() => handleCopy(block, i)}
                                            className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#f7f7f7] hover:bg-[#e6e6e7] border border-[#e6e6e7] rounded-full px-3 py-1.5 text-[12px] font-medium text-[#6e6e73] transition-all cursor-pointer"
                                        >
                                            {copied === i ? (
                                                <><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 5-5" stroke="#34C759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="text-[#34C759]">Copied!</span></>
                                            ) : (
                                                <><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="3" width="7" height="8" rx="1.5" stroke="#6e6e73" strokeWidth="1.2" /><path d="M4 1h6a1 1 0 011 1v7" stroke="#6e6e73" strokeWidth="1.2" strokeLinecap="round" /></svg>Copy</>
                                            )}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
