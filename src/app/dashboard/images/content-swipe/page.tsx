"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const ASPECT_RATIOS = [
    { label: "1:1", w: 20, h: 20 },
    { label: "9:16", w: 11, h: 20 },
    { label: "16:9", w: 20, h: 11 },
    { label: "2:3", w: 13, h: 20 },
];

const IMAGE_AMOUNTS_PRO = [1, 2, 4];

const MODELS = [
    { id: "nano-banana", label: "Nano Banana", emoji: "🍌", desc: "Standard — supports image input" },
    { id: "nano-banana-pro", label: "Nano Banana Pro", emoji: "🍌🍌", desc: "Pro — higher quality, multi-output" },
];

export default function ContentSwipePage() {
    const [prompt, setPrompt] = useState("");
    const [selectedRatio, setSelectedRatio] = useState("1:1");
    const [selectedAmount, setSelectedAmount] = useState(1);
    const [selectedModel, setSelectedModel] = useState("nano-banana");
    const [advancedOpen, setAdvancedOpen] = useState(true);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedImages, setGeneratedImages] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const isPro = selectedModel === "nano-banana-pro";
    const currentModel = MODELS.find((m) => m.id === selectedModel)!;

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

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        setIsGenerating(true);
        setError(null);
        setGeneratedImages([]);

        try {
            const payload: Record<string, unknown> = {
                prompt: prompt.trim(),
                aspect_ratio: selectedRatio,
                model: selectedModel,
                output_format: "webp",
            };

            if (isPro) {
                payload.num_outputs = selectedAmount;
            }

            // For regular nano-banana with uploaded images
            if (!isPro && uploadedImages.length > 0) {
                payload.image_input = uploadedImages.map((url) => ({ value: url }));
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
                    <span className="text-[14px]">{currentModel.emoji}</span>
                    <span className="text-[13px] font-medium text-[#03045e] ml-1">{currentModel.label}</span>
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
                                        download={`nano-banana-${i + 1}.webp`}
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
                    <div className="flex gap-3 mt-6">
                        <button
                            onClick={() => { setGeneratedImages([]); setPrompt(""); setUploadedImages([]); }}
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
                    </div>
                </div>
            )}

            {/* ─── Input View ─── */}
            {!showResults && (
                <>
                    <div className="flex-1 flex items-center justify-center relative z-10">
                        <div className="w-full max-w-[600px] flex flex-col gap-6">

                            {/* ── Model Selector ── */}
                            <div className="flex flex-col gap-[10px]">
                                <span className="font-satoshi font-medium text-[16px] text-[#1d1d1f] tracking-[0.16px]">AI Model</span>
                                <div className="flex bg-[#f7f7f7] rounded-full p-[5px] w-full border border-white">
                                    {MODELS.map((m) => {
                                        const active = selectedModel === m.id;
                                        return (
                                            <button
                                                key={m.id}
                                                onClick={() => {
                                                    setSelectedModel(m.id);
                                                    if (m.id === "nano-banana") setSelectedAmount(1);
                                                }}
                                                className={`flex-1 cursor-pointer font-medium rounded-full transition-all flex items-center justify-center gap-[6px] py-[5px] px-[10px] h-[37px] text-[14px] ${active ? "bg-white text-[#1d1d1f] shadow-sm" : "text-[#6e6e73] hover:text-[#1d1d1f]"}`}
                                            >
                                                <span>{m.emoji}</span>
                                                <span>{m.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                                <span className="text-[12px] text-[#6e6e73] ml-1">{currentModel.desc}</span>
                            </div>

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
                                                title={isPro ? "Upload reference images (Pro)" : "Upload images for editing"}
                                            >
                                                <span className="text-[18px] leading-none">+</span>
                                            </button>
                                            <button className="flex items-center gap-1.5 text-[#0077b6] hover:text-[#00b4d8] transition-colors cursor-pointer font-medium">
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

                            {/* ── Advanced panels ── */}
                            {advancedOpen && (
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

                                    {/* Image amount — only for Pro */}
                                    {isPro && (
                                        <div className="flex-1 flex flex-col gap-[10px]">
                                            <span className="font-satoshi font-medium text-[16px] text-[#6e6e73] tracking-[0.16px]">Image amount</span>
                                            <div className="flex bg-[#f7f7f7] rounded-full p-[5px] w-full border border-white">
                                                {IMAGE_AMOUNTS_PRO.map((amount) => {
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
                                    )}
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
                                    <span className="text-[16px] font-bold text-[#03045e]">{currentModel.emoji} Generating with {currentModel.label}...</span>
                                    <span className="text-[13px] text-[#6e6e73]">This may take 15-60 seconds</span>
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
                                            <span className="font-satoshi font-bold text-[12px] text-white tracking-[0.24px]">{isPro ? selectedAmount : 1}</span>
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
        </div>
    );
}
