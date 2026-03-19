"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { saveMultipleToLibrary } from "@/lib/library";
import { getBrandDNA, type BrandDNA } from "@/lib/brand-store";

const ASPECT_RATIOS = [
    { label: "1:1", w: 20, h: 20 },
    { label: "9:16", w: 11, h: 20 },
    { label: "16:9", w: 20, h: 11 },
    { label: "2:3", w: 13, h: 20 },
    { label: "3:2", w: 20, h: 13 },
];

const IMAGE_AMOUNTS = [1, 2, 4];

/** Example prompts — generic fallback + brand-aware variants */
const GENERIC_PROMPTS = [
    "Product showcase on clean white background, studio lighting, premium feel",
    "Abstract gradient background with geometric shapes, modern aesthetic",
    "Social media banner with bold typography space, eye-catching composition",
    "Flat lay lifestyle photography, top-down view, curated arrangement",
    "Minimalist hero image with subtle texture, soft lighting, editorial style",
    "Dynamic action shot with motion blur, energetic and vibrant",
];

/** Industry-specific prompt ideas — clean text, Brand DNA is added behind the scenes by buildBrandPrompt */
function getBrandPromptSuggestions(dna: BrandDNA): string[] {
    const industry = (dna.industry || "").toLowerCase();

    if (industry.includes("tech")) {
        return [
            "Premium cables and connectors on sleek dark surface, studio product photography",
            "Data center with organized cable management, blue accent lighting, wide angle",
            "Close-up macro shot of connector pins, metallic sheen, shallow depth of field",
            "Minimalist office desk with clean cable setup, natural window lighting",
            "Abstract glowing fiber optic lines on dark background, futuristic visualization",
            "Flat lay of tech accessories neatly arranged on marble surface, top-down editorial",
        ];
    }
    if (industry.includes("beauty") || industry.includes("cosmetic")) {
        return [
            "Product lineup on marble surface, soft golden lighting, luxury beauty aesthetic",
            "Close-up texture shot of skincare, dewy droplets, soft focus beauty photography",
            "Flat lay of beauty products with flowers and natural elements, pastel tones",
            "Portrait with soft bokeh background, natural makeup, editorial beauty shot",
            "Minimalist packaging mockup on clean background, premium brand aesthetic",
            "Spa still life with candles, botanicals, and products, warm ambient lighting",
        ];
    }
    if (industry.includes("fashion")) {
        return [
            "Lookbook photo — model in urban setting, golden hour lighting, editorial style",
            "Clothing flat lay on textured fabric, styled accessories, overhead composition",
            "Street style photography, bold outfit, architectural background, dynamic pose",
            "Close-up fabric texture detail, premium material quality, shallow depth of field",
            "Fashion campaign hero image, cinematic lighting, magazine-quality composition",
            "Accessory on minimalist pedestal, dramatic shadows, studio product photography",
        ];
    }
    if (industry.includes("food") || industry.includes("beverage")) {
        return [
            "Overhead food photography, fresh ingredients, artful plating, natural light",
            "Beverage pour shot with splash effect, dramatic lighting, commercial quality",
            "Restaurant interior ambiance, warm lighting, inviting atmosphere, wide angle",
            "Ingredients flat lay on rustic wooden surface, vibrant colors, farm-to-table",
            "Close-up macro food texture, steam rising, appetizing detail, shallow focus",
            "Cocktail with garnish, bar setting, moody lighting, dark background",
        ];
    }

    return [
        "Brand hero image, professional photography, premium feel, clean composition",
        "Team collaboration scene, bright modern office, natural lighting",
        "Abstract pattern with geometric shapes, gradient tones, marketing creative",
        "Product showcase on clean surface, studio lighting, commercial-grade photo",
        "Social media content — eye-catching visual, bold composition, vibrant colors",
        "Lifestyle scene, authentic and aspirational, soft natural lighting",
    ];
}

export default function ContentSwipePage() {
    const [prompt, setPrompt] = useState("");
    const [selectedRatio, setSelectedRatio] = useState("1:1");
    const [selectedAmount, setSelectedAmount] = useState(1);
    const [advancedOpen, setAdvancedOpen] = useState(true);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedImages, setGeneratedImages] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [negativePrompt, setNegativePrompt] = useState("");
    const [seed, setSeed] = useState("");
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const [savedToast, setSavedToast] = useState(false);
    const [brandDna, setBrandDna] = useState<BrandDNA | null>(null);
    const [useBrandDna, setUseBrandDna] = useState(true);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const dna = getBrandDNA();
        // Only set if brand has meaningful data
        if (dna.name || dna.mission || dna.colors.length > 0 || dna.toneOfVoice.length > 0) {
            setBrandDna(dna);
        }
    }, []);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        Array.from(files).forEach((file) => {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const dataUrl = ev.target?.result as string;
                setUploadedImages((prev) => [...prev, dataUrl]);
            };
            reader.readAsDataURL(file);
        });
    };

    const removeUploadedImage = (index: number) => {
        setUploadedImages((prev) => prev.filter((_, i) => i !== index));
    };

    /** Build an enhanced prompt that weaves in Brand DNA context */
    const buildBrandPrompt = (userPrompt: string): string => {
        if (!useBrandDna || !brandDna) return userPrompt;

        const parts: string[] = [];

        // Brand identity context
        if (brandDna.name) parts.push(`for the brand "${brandDna.name}"`);
        if (brandDna.industry) parts.push(`in the ${brandDna.industry} industry`);

        // Visual style
        if (brandDna.styleTags.length > 0) parts.push(`style: ${brandDna.styleTags.join(", ")}`);
        if (brandDna.toneOfVoice.length > 0) parts.push(`mood: ${brandDna.toneOfVoice.join(", ").toLowerCase()}`);

        // Colors
        if (brandDna.colors.length > 0) {
            parts.push(`brand color palette: ${brandDna.colors.join(", ")}`);
        }

        // Fonts hint
        if (brandDna.fonts.length > 0) parts.push(`typography style: ${brandDna.fonts.join(", ")}`);

        if (parts.length === 0) return userPrompt;

        return `${userPrompt}. ${parts.join(". ")}. High quality, professional marketing creative.`;
    };

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        setIsGenerating(true);
        setError(null);
        setGeneratedImages([]);

        try {
            const enhancedPrompt = buildBrandPrompt(prompt.trim());

            const payload: Record<string, unknown> = {
                prompt: enhancedPrompt,
                aspect_ratio: selectedRatio,
                num_outputs: selectedAmount,
                output_format: "webp",
            };

            if (negativePrompt.trim()) {
                payload.negative_prompt = negativePrompt.trim();
            }

            if (seed.trim()) {
                payload.seed = Number(seed.trim());
            }

            const res = await fetch("/api/generate-image", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Failed to generate images");
                return;
            }

            if (data.images && data.images.length > 0) {
                setGeneratedImages(data.images);

                // Auto-save to Library
                saveMultipleToLibrary(data.images, {
                    prompt: prompt.trim(),
                    negativePrompt: negativePrompt.trim() || undefined,
                    seed: seed.trim() ? Number(seed.trim()) : undefined,
                    aspectRatio: selectedRatio,
                    model: "stable-diffusion-3.5-large-turbo",
                    source: "content-swipe",
                });
                setSavedToast(true);
                setTimeout(() => setSavedToast(false), 4000);
            } else {
                setError("No images were generated. Try a different prompt.");
            }
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const showResults = generatedImages.length > 0;

    return (
        <div className="px-5 pt-5 flex-1 flex flex-col overflow-y-auto relative min-h-screen">
            {/* Background gradient */}
            <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none bg-white overflow-hidden h-screen rounded-[20px]" aria-hidden="true">
                <Image alt="" draggable={false} width={2560} height={1440} className="w-full h-full object-cover object-top opacity-90" src="/dashboard/gradient.png.svg" />
            </div>

            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageUpload}
            />

            {/* ─── Header ─── */}
            <div className="shrink-0 flex justify-between items-center w-full mb-6 relative z-10">
                <div className="flex items-center">
                    <Link
                        href="/dashboard/images"
                        className="flex items-center bg-white rounded-full px-3 py-[7px] hover:opacity-80 transition-opacity cursor-pointer"
                        style={{ boxShadow: "0px 5px 10px 0px rgba(230,230,231,0.15), inset -2px 2px 10px 0px rgba(255,255,255,0.8)" }}
                    >
                        <div className="flex items-center gap-2.5 pr-1 pt-[1px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10L16.667 9.9998" stroke="#03045e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.49967 5.83301L4.04011 9.29257C3.70678 9.6259 3.54011 9.79257 3.54011 9.99967C3.54011 10.2068 3.70678 10.3734 4.04011 10.7068L7.49967 14.1663" stroke="#03045e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-[16px] font-medium leading-normal text-[#03045e]">Back</span>
                    </Link>
                </div>

                {/* Step Label */}
                <div
                    className="flex items-center bg-white rounded-full px-5 py-[7px]"
                    style={{ boxShadow: "0px 5px 10px 0px rgba(230,230,231,0.15), inset -2px 2px 10px 0px rgba(255,255,255,0.8)" }}
                >
                    <span className="text-[16px] font-medium text-[#03045e]">
                        {showResults ? "2. Results" : "1. Instructions"}
                    </span>
                </div>

                {/* Model badge */}
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-3 py-[7px]"
                    style={{ boxShadow: "0px 5px 10px 0px rgba(230,230,231,0.15), inset -2px 2px 10px 0px rgba(255,255,255,0.8)" }}>
                    <span className="text-[14px]">🎨</span>
                    <span className="text-[13px] font-medium text-[#03045e] ml-1">Stable Diffusion 3.5</span>
                </div>
            </div>

            {/* ─── Results View ─── */}
            {showResults && (
                <div className="flex-1 flex flex-col items-center relative z-10 pb-20">
                    <div className={`grid gap-4 w-full max-w-[900px] mx-auto ${generatedImages.length === 1 ? "grid-cols-1 max-w-[500px]" :
                        generatedImages.length === 2 ? "grid-cols-1 sm:grid-cols-2 max-w-[700px]" :
                            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
                        }`}>
                        {generatedImages.map((url, i) => (
                            <div key={i} className="relative group rounded-2xl overflow-hidden bg-white shadow-lg">
                                <img src={url} alt={`Generated image ${i + 1}`} className="w-full h-auto object-cover" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-end justify-center opacity-0 group-hover:opacity-100">
                                    <a
                                        href={url}
                                        download={`adona-sd-${i + 1}.webp`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mb-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-[14px] font-medium text-[#03045e] hover:bg-white transition-colors shadow-lg"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 2v8m0 0l-3-3m3 3l3-3M3 12h10" stroke="#03045e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Download
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-3 mt-6 items-center">
                        <button
                            onClick={() => { setGeneratedImages([]); setPrompt(""); setNegativePrompt(""); setSeed(""); setUploadedImages([]); }}
                            className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 text-[14px] font-medium text-[#03045e] hover:bg-[#f5f5f7] transition-colors cursor-pointer shadow-md"
                        >
                            New Prompt
                        </button>
                        <button
                            onClick={handleGenerate}
                            disabled={isGenerating}
                            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-bold text-white hover:opacity-90 transition-all cursor-pointer shadow-md disabled:opacity-50"
                            style={{ background: "linear-gradient(135deg, #03045e 0%, #0077b6 40%, #00b4d8 100%)" }}
                        >
                            {isGenerating ? "Generating..." : "Generate Again"}
                        </button>
                        <Link
                            href="/dashboard/library"
                            className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 text-[14px] font-medium text-[#0077b6] hover:bg-[#caf0f8]/30 transition-colors cursor-pointer shadow-md border border-[#90e0ef]/30"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 3h12v10H2V3z" stroke="#0077b6" strokeWidth="1.2" strokeLinecap="round" /><path d="M2 6h12" stroke="#0077b6" strokeWidth="1.2" /><path d="M5 3V1" stroke="#0077b6" strokeWidth="1.2" strokeLinecap="round" /></svg>
                            View Library
                        </Link>
                    </div>
                </div>
            )}

            {/* ─── Input View ─── */}
            {!showResults && (
                <>
                    <div className="flex-1 flex items-center justify-center relative z-10">
                        <div className="w-full max-w-[600px] flex flex-col gap-6">

                            {/* ── Prompt ── */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-satoshi font-medium text-[16px] text-[#1d1d1f] tracking-[0.16px]">
                                        Explain your idea
                                    </span>
                                    <button
                                        onClick={() => setAdvancedOpen(!advancedOpen)}
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <span className="font-satoshi font-medium text-[14px] text-[#6e6e73] tracking-[0.14px]">
                                            Advanced settings
                                        </span>
                                        <div className={`w-[42px] h-[24px] rounded-full p-[2px] transition-colors duration-200 ${advancedOpen ? "bg-[#0077b6]" : "bg-[#e2e8f0]"}`}>
                                            <div className={`w-[20px] h-[20px] rounded-full bg-white shadow transition-transform duration-200 ${advancedOpen ? "translate-x-[18px]" : "translate-x-0"}`} />
                                        </div>
                                    </button>
                                </div>
                                <div
                                    className="relative rounded-[20px] p-[1px]"
                                    style={{ background: "linear-gradient(135deg, #caf0f8 0%, #90e0ef 50%, #0077b6 100%)" }}
                                >
                                    <div className="bg-white rounded-[19px] p-4 flex flex-col gap-3">
                                        <textarea
                                            value={prompt}
                                            onChange={(e) => setPrompt(e.target.value)}
                                            placeholder="What would you like to create?"
                                            className="w-full min-h-[100px] resize-none outline-none font-satoshi text-[15px] text-[#1d1d1f] placeholder-[#b0b0b5] tracking-[0.15px]"
                                        />

                                        {/* Uploaded images preview */}
                                        {uploadedImages.length > 0 && (
                                            <div className="flex gap-2 flex-wrap">
                                                {uploadedImages.map((img, i) => (
                                                    <div key={i} className="relative w-16 h-16 rounded-lg overflow-hidden border border-[#e2e8f0] group">
                                                        <img src={img} alt={`Upload ${i + 1}`} className="w-full h-full object-cover" />
                                                        <button
                                                            onClick={() => removeUploadedImage(i)}
                                                            className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-500 text-white rounded-full text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                                        >
                                                            ×
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => fileInputRef.current?.click()}
                                                className="w-[28px] h-[28px] flex items-center justify-center rounded-full border border-[#e2e8f0] text-[#6e6e73] hover:bg-[#f5f5f7] transition-colors cursor-pointer"
                                                title="Upload reference images"
                                            >
                                                <span className="text-[18px] leading-none">+</span>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const pool = brandDna && useBrandDna
                                                        ? getBrandPromptSuggestions(brandDna)
                                                        : GENERIC_PROMPTS;
                                                    setPrompt(pool[Math.floor(Math.random() * pool.length)]);
                                                }}
                                                className="flex items-center gap-1.5 text-[#0077b6] hover:text-[#00b4d8] transition-colors cursor-pointer font-medium"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667L2 11.5Z" fill="currentColor" opacity="0.5" />
                                                    <path d="M13.8067 3.18C14.0667 2.92 14.0667 2.5 13.8067 2.24L11.76 0.193333C11.5 -0.0666667 11.08 -0.0666667 10.82 0.193333L9.58667 1.42667L12.0867 3.92667L13.8067 3.18Z" fill="currentColor" />
                                                </svg>
                                                <span className="text-[14px]">Randomize</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ── Example Prompts ── */}
                            {!prompt.trim() && (
                                <div className="flex flex-col gap-2">
                                    <span className="font-satoshi font-medium text-[13px] text-[#6e6e73] tracking-[0.13px]">
                                        Try an example
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {(brandDna && useBrandDna
                                            ? getBrandPromptSuggestions(brandDna)
                                            : GENERIC_PROMPTS
                                        ).slice(0, 6).map((p, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setPrompt(p)}
                                                className="text-left text-[13px] text-[#03045e] bg-white border border-[#e2e8f0] hover:border-[#90e0ef] hover:bg-[#caf0f8]/20 rounded-xl px-3 py-2 transition-all cursor-pointer leading-snug"
                                            >
                                                {p.length > 70 ? p.slice(0, 67) + "..." : p}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* ── Brand DNA Context ── */}
                            {brandDna && (
                                <div className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${useBrandDna ? "bg-[#caf0f8]/30 border border-[#90e0ef]/40" : "bg-[#f7f7f7] border border-[#e6e6e7]"}`}>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${useBrandDna ? "bg-[#0077b6]" : "bg-[#e6e6e7]"}`}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1l2 3h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-3z" fill="white" /></svg>
                                        </div>
                                        <div>
                                            <p className={`text-[14px] font-bold ${useBrandDna ? "text-[#03045e]" : "text-[#6e6e73]"}`}>
                                                Brand DNA: {brandDna.name || "Configured"}
                                            </p>
                                            <p className="text-[12px] text-[#6e6e73]">
                                                {useBrandDna ? (
                                                    <>
                                                        {brandDna.colors.length > 0 && (
                                                            <span className="inline-flex items-center gap-1 mr-2">
                                                                {brandDna.colors.slice(0, 4).map((c) => (
                                                                    <span key={c} className="inline-block w-3 h-3 rounded-full border border-white/50" style={{ backgroundColor: c }} />
                                                                ))}
                                                            </span>
                                                        )}
                                                        {brandDna.toneOfVoice.length > 0 && <span>{brandDna.toneOfVoice.join(", ")}</span>}
                                                        {brandDna.styleTags.length > 0 && <span> &middot; {brandDna.styleTags.slice(0, 3).join(", ")}</span>}
                                                    </>
                                                ) : (
                                                    "Brand context disabled for this generation"
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setUseBrandDna(!useBrandDna)}
                                        className="cursor-pointer"
                                    >
                                        <div className={`w-[42px] h-[24px] rounded-full p-[2px] transition-colors duration-200 ${useBrandDna ? "bg-[#0077b6]" : "bg-[#e2e8f0]"}`}>
                                            <div className={`w-[20px] h-[20px] rounded-full bg-white shadow transition-transform duration-200 ${useBrandDna ? "translate-x-[18px]" : "translate-x-0"}`} />
                                        </div>
                                    </button>
                                </div>
                            )}

                            {/* ── Advanced panels ── */}
                            {advancedOpen && (
                                <div className="flex flex-col gap-5">
                                    {/* Row 1: Aspect ratio + Image amount */}
                                    <div className="flex gap-[20px] flex-col sm:flex-row">
                                        {/* Aspect ratio */}
                                        <div className="flex-1 flex flex-col gap-[10px]">
                                            <span className="font-satoshi font-medium text-[16px] text-[#6e6e73] tracking-[0.16px]">Aspect ratio</span>
                                            <div className="flex bg-[#f7f7f7] rounded-full p-[5px] w-full border border-white">
                                                {ASPECT_RATIOS.map((r) => {
                                                    const active = selectedRatio === r.label;
                                                    return (
                                                        <button
                                                            key={r.label}
                                                            onClick={() => setSelectedRatio(r.label)}
                                                            className={`flex-1 cursor-pointer font-medium rounded-full transition-all flex items-center justify-center gap-[5px] py-[5px] px-[10px] h-[37px] text-[14px] ${active ? "bg-white text-[#1d1d1f]" : "text-[#6e6e73] hover:text-[#1d1d1f]"}`}
                                                        >
                                                            <svg width={r.w * 0.6} height={r.h * 0.6} viewBox={`0 0 ${r.w} ${r.h}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect x="0.5" y="0.5" width={r.w - 1} height={r.h - 1} rx="2.5" stroke={active ? "#1d1d1f" : "#b0b0b5"} strokeWidth="1" />
                                                            </svg>
                                                            {r.label}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Image amount */}
                                        <div className="flex-1 flex flex-col gap-[10px]">
                                            <span className="font-satoshi font-medium text-[16px] text-[#6e6e73] tracking-[0.16px]">Image amount</span>
                                            <div className="flex bg-[#f7f7f7] rounded-full p-[5px] w-full border border-white">
                                                {IMAGE_AMOUNTS.map((amount) => {
                                                    const active = selectedAmount === amount;
                                                    return (
                                                        <button
                                                            key={amount}
                                                            onClick={() => setSelectedAmount(amount)}
                                                            className={`flex-1 cursor-pointer font-medium rounded-full transition-all flex items-center justify-center gap-[5px] py-[5px] px-[10px] h-[37px] text-[16px] ${active ? "bg-white text-[#1d1d1f]" : "text-[#6e6e73] hover:text-[#1d1d1f]"}`}
                                                        >
                                                            {amount}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 2: Negative prompt */}
                                    <div className="flex flex-col gap-[10px]">
                                        <span className="font-satoshi font-medium text-[16px] text-[#6e6e73] tracking-[0.16px]">Negative prompt</span>
                                        <div className="bg-[#f7f7f7] rounded-2xl border border-white p-3">
                                            <textarea
                                                value={negativePrompt}
                                                onChange={(e) => setNegativePrompt(e.target.value)}
                                                placeholder="What to avoid — e.g. blurry, low quality, watermark, text"
                                                className="w-full min-h-[50px] resize-none outline-none bg-transparent font-satoshi text-[14px] text-[#1d1d1f] placeholder-[#b0b0b5]"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 3: Seed */}
                                    <div className="flex flex-col gap-[10px]">
                                        <div className="flex items-center gap-2">
                                            <span className="font-satoshi font-medium text-[16px] text-[#6e6e73] tracking-[0.16px]">Seed</span>
                                            <span className="text-[12px] text-[#b0b0b5] bg-[#f0f0f2] rounded-full px-2 py-0.5">optional</span>
                                        </div>
                                        <div className="bg-[#f7f7f7] rounded-full border border-white px-4 py-2.5 flex items-center gap-2">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 1v2m0 10v2M1 8h2m10 0h2M3.05 3.05l1.41 1.41m7.08 7.08l1.41 1.41M3.05 12.95l1.41-1.41m7.08-7.08l1.41-1.41" stroke="#b0b0b5" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <input
                                                type="number"
                                                value={seed}
                                                onChange={(e) => setSeed(e.target.value)}
                                                placeholder="Leave empty for random — use a number for reproducible results"
                                                className="flex-1 outline-none bg-transparent font-satoshi text-[14px] text-[#1d1d1f] placeholder-[#b0b0b5] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                        </div>
                                        <span className="text-[12px] text-[#b0b0b5] ml-1">Same seed + same prompt = same image. Great for brand consistency.</span>
                                    </div>
                                </div>
                            )}

                            {/* Error message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl px-4 py-3 text-[14px]">
                                    {error}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ─── Loading Overlay ─── */}
                    {isGenerating && (
                        <div className="absolute inset-0 z-30 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-[20px]">
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative w-16 h-16">
                                    <div className="absolute inset-0 rounded-full border-4 border-[#caf0f8]" />
                                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#0077b6] animate-spin" />
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-[16px] font-bold text-[#03045e]">🎨 Generating with Stable Diffusion...</span>
                                    <span className="text-[13px] text-[#6e6e73]">This may take 10-30 seconds</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ─── Create Button (bottom-right) ─── */}
                    <div className="absolute bottom-5 right-5 z-20">
                        <button
                            onClick={handleGenerate}
                            disabled={isGenerating || !prompt.trim()}
                            className="h-[36px] flex cursor-pointer items-center justify-center gap-[5px] px-3 py-[7px] rounded-full transition-all duration-200 font-satoshi font-bold text-[16px] relative overflow-clip text-white hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                background: "linear-gradient(135deg, #03045e 0%, #0077b6 40%, #00b4d8 100%)",
                                lineHeight: "1.35em",
                                boxShadow: "0px 5px 15px 0px rgba(0, 119, 182, 0.35), inset -2px 2px 10px 0px rgba(255,255,255,0.2)",
                            }}
                        >
                            <span className="flex items-center justify-center w-full z-10">
                                <span>{isGenerating ? "Generating..." : "Create"}</span>
                                {!isGenerating && (
                                    <>
                                        <div className="flex items-center gap-[2px] bg-white/25 rounded-full px-[5px] ml-2 py-[1.5px]">
                                            <img alt="Credit" loading="lazy" width="15" height="15" src="/creditsLightning.svg" style={{ color: "transparent" }} />
                                            <span className="font-satoshi font-bold text-[12px] text-white tracking-[0.24px]">{selectedAmount}</span>
                                        </div>
                                        <svg className="w-5 h-5" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 6.17571C7.90237 6.56623 7.90237 7.1994 8.29289 7.58992L13.5858 12.8828L8.29289 18.1757C7.90237 18.5662 7.90237 19.1994 8.29289 19.5899C8.68342 19.9804 9.31658 19.9804 9.70711 19.5899L15.7071 13.5899C16.0976 13.1994 16.0976 12.5662 15.7071 12.1757L9.70711 6.17571C9.31658 5.78518 8.68342 5.78518 8.29289 6.17571Z" fill="#FFFFFF" />
                                        </svg>
                                    </>
                                )}
                            </span>
                        </button>
                    </div>
                </>
            )}

            {/* ─── Generation Complete Popup ─── */}
            {savedToast && (
                <div className="fixed bottom-6 right-6 z-50 animate-[slideUp_0.3s_ease-out]">
                    <div
                        className="relative flex flex-col gap-5 p-[10px] w-[330px] bg-white rounded-[20px]"
                        style={{ boxShadow: "rgb(230, 230, 231) 0px 0px 50px 0px" }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between pr-[5px]">
                            <span className="font-satoshi font-medium text-[16px] text-[#6e6e73] leading-normal">
                                Generation complete
                            </span>
                            <button
                                onClick={() => setSavedToast(false)}
                                className="flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
                            >
                                <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
                                    <path d="M11 3L3 11M3 3L11 11" stroke="#6E6E73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Task items */}
                        <div className="flex flex-col gap-[10px] max-h-[60vh] overflow-y-auto">
                            {/* Swipes done */}
                            <button
                                onClick={() => { /* already viewing results */ }}
                                className="bg-[#f3fbf2] flex items-center justify-between p-[10px] rounded-[15px] w-full cursor-pointer hover:opacity-90 transition-opacity"
                            >
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-[37px] h-[37px] rounded-full bg-white flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <rect x="2" y="2" width="16" height="16" rx="3" stroke="#42a93e" strokeWidth="1.5" />
                                            <path d="M6 10l2.5 2.5L14 7" stroke="#42a93e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="font-satoshi font-medium text-[16px] text-[#42a93e] leading-normal">
                                        Swipes done
                                    </span>
                                </div>
                                <div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="#42A93E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </button>

                            {/* Saved to Library */}
                            <Link
                                href="/dashboard/library"
                                className="bg-[#f3fbf2] flex items-center justify-between p-[10px] rounded-[15px] w-full cursor-pointer hover:opacity-90 transition-opacity"
                            >
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-[37px] h-[37px] rounded-full bg-white flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M4 3h12v14l-6-3-6 3V3z" stroke="#42a93e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="font-satoshi font-medium text-[16px] text-[#42a93e] leading-normal">
                                        Saved to Library
                                    </span>
                                </div>
                                <div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="#42A93E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>

                            {/* Brand DNA applied */}
                            {brandDna && useBrandDna && (
                                <div className="bg-[#f3fbf2] flex items-center justify-between p-[10px] rounded-[15px] w-full">
                                    <div className="flex items-center gap-[10px]">
                                        <div className="w-[37px] h-[37px] rounded-full bg-white flex items-center justify-center">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M10 2l2.5 3.5H16l-3 3.5 1 4.5-4-2.5L6 13.5l1-4.5-3-3.5h3.5L10 2z" stroke="#42a93e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="font-satoshi font-medium text-[16px] text-[#42a93e] leading-normal">
                                            Brand DNA applied
                                        </span>
                                    </div>
                                    <div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M3 7l2.5 2.5L11 4" stroke="#42A93E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Bottom actions */}
                        <div className="flex items-center gap-[10px]">
                            <button
                                onClick={() => setSavedToast(false)}
                                className="h-[37px] px-[12px] flex items-center justify-center rounded-full bg-[#fbfbfb] hover:opacity-80 transition-opacity cursor-pointer"
                                style={{ boxShadow: "rgb(230, 230, 231) 0px -1px 0px 0px inset" }}
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="#03045e" strokeWidth="1.2" />
                                    <path d="M10 6v4l3 2" stroke="#03045e" strokeWidth="1.2" strokeLinecap="round" />
                                </svg>
                            </button>
                            <Link
                                href="/dashboard/library"
                                className="flex-1 h-[37px] flex items-center justify-center rounded-full bg-[#fbfbfb] font-satoshi font-medium text-[16px] text-[#1d1d1f] hover:opacity-70 transition-opacity"
                                style={{ boxShadow: "rgb(230, 230, 231) 0px -1px 0px 0px inset" }}
                            >
                                View in Library
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
