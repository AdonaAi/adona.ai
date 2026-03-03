"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBrandMoodboard, saveBrandMoodboard, type MoodboardImage } from "@/lib/brand-store";

export default function MoodboardPage() {
    const [images, setImages] = useState<MoodboardImage[]>([]);
    const [saved, setSaved] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const existing = getBrandMoodboard();
        if (existing) {
            setImages(existing.images);
        }
        setLoaded(true);
    }, []);

    const handleImageUpload = (files: FileList | null) => {
        if (!files) return;
        Array.from(files).forEach((file) => {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const newImg: MoodboardImage = {
                    id: `mood_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
                    dataUrl: ev.target?.result as string,
                    name: file.name,
                };
                setImages((prev) => [...prev, newImg]);
            };
            reader.readAsDataURL(file);
        });
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleImageUpload(e.target.files);
        e.target.value = "";
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragActive(false);
        handleImageUpload(e.dataTransfer.files);
    };

    const removeImage = (id: string) => setImages((prev) => prev.filter((img) => img.id !== id));

    const handleSave = () => {
        saveBrandMoodboard({ images });
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    if (!loaded) return null;

    return (
        <div className="px-5 pt-5 flex-1 flex flex-col overflow-y-auto relative min-h-screen">
            <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none bg-white overflow-hidden h-screen rounded-[20px]" aria-hidden="true">
                <Image alt="" draggable={false} width={2560} height={1440} className="w-full h-full object-cover object-top opacity-90" src="/dashboard/gradient.png.svg" />
            </div>

            {/* Header */}
            <div className="shrink-0 flex justify-between items-center w-full mb-6 relative z-10">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/dna" className="flex items-center bg-white rounded-full px-3 py-[7px] hover:opacity-80 transition-opacity cursor-pointer" style={{ boxShadow: "0px 5px 10px 0px rgba(230,230,231,0.15), inset -2px 2px 10px 0px rgba(255,255,255,0.8)" }}>
                        <div className="flex items-center gap-2.5 pr-1 pt-[1px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4.16699 10L16.667 9.9998" stroke="#03045e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.49967 5.83301L4.04011 9.29257C3.70678 9.6259 3.54011 9.79257 3.54011 9.99967C3.54011 10.2068 3.70678 10.3734 4.04011 10.7068L7.49967 14.1663" stroke="#03045e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <span className="text-[16px] font-medium leading-normal text-[#03045e]">DNA</span>
                    </Link>
                    <div className="w-10 h-10 rounded-xl bg-[#f7f7f7] flex items-center justify-center text-[20px]">🎨</div>
                    <h1 className="text-[22px] font-bold text-[#03045e]">Moodboard</h1>
                </div>
                <button onClick={handleSave} className="flex items-center gap-2 rounded-full px-6 py-2.5 text-[14px] font-bold text-white hover:opacity-90 transition-all cursor-pointer" style={{ background: "linear-gradient(135deg, #03045e 0%, #0077b6 40%, #00b4d8 100%)", boxShadow: "0px 5px 15px 0px rgba(0, 119, 182, 0.25)" }}>
                    {saved ? "✓ Saved!" : "Save"}
                </button>
            </div>

            <div className="relative z-10 w-full pb-10 space-y-6">
                {/* Drag & Drop Upload Area */}
                <div
                    className={`bg-white rounded-[20px] p-8 border-2 border-dashed transition-colors ${dragActive ? "border-[#0077b6] bg-[#caf0f8]/10" : "border-[#e6e6e7]"}`}
                    onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={handleDrop}
                    style={{ boxShadow: "0px 2px 12px 0px rgba(230,230,231,0.2)" }}
                >
                    <div className="flex flex-col items-center justify-center py-6 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#caf0f8]/40 flex items-center justify-center mb-4">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 4v18M9 11l7-7 7 7" stroke="#0077b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 22v4a2 2 0 002 2h20a2 2 0 002-2v-4" stroke="#0077b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="text-[16px] font-bold text-[#03045e] mb-1">Drop your reference images here</h3>
                        <p className="text-[14px] text-[#6e6e73] mb-4">or click to browse files</p>
                        <button onClick={() => fileInputRef.current?.click()} className="px-5 py-2 rounded-full bg-[#03045e] text-white text-[13px] font-bold hover:bg-[#0077b6] transition-colors cursor-pointer">
                            Upload Images
                        </button>
                    </div>
                    <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFileInput} className="hidden" />
                </div>

                {/* Image Grid */}
                {images.length > 0 && (
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-[16px] font-bold text-[#03045e]">Reference Images ({images.length})</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {images.map((img) => (
                                <div key={img.id} className="relative group rounded-[16px] overflow-hidden aspect-square bg-[#f7f7f7] shadow-sm">
                                    <img src={img.dataUrl} alt={img.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <button onClick={() => removeImage(img.id)} className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md cursor-pointer hover:bg-white">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 2l6 6M8 2l-6 6" stroke="#EE4454" strokeWidth="1.5" strokeLinecap="round" /></svg>
                                    </button>
                                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-[11px] text-white font-medium truncate block">{img.name}</span>
                                    </div>
                                </div>
                            ))}
                            {/* Add more */}
                            <button onClick={() => fileInputRef.current?.click()} className="rounded-[16px] border-2 border-dashed border-[#e0e0e2] hover:border-[#0077b6] aspect-square flex flex-col items-center justify-center gap-2 transition-colors cursor-pointer bg-[#fafafa] hover:bg-[#caf0f8]/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="#b0b0b5" strokeWidth="2" strokeLinecap="round" /></svg>
                                <span className="text-[11px] text-[#b0b0b5] font-medium">Add more</span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Info box */}
                <div className="bg-[#caf0f8]/20 border border-[#90e0ef]/30 rounded-[16px] p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0077b6]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 4v4M8 10.5v.5" stroke="#0077b6" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    </div>
                    <div>
                        <p className="text-[14px] font-medium text-[#03045e] mb-0.5">Reference images help Adona understand your brand style</p>
                        <p className="text-[13px] text-[#6e6e73]">Upload product photos, packaging, social posts, or any visual that represents your brand aesthetic. Colors, fonts, and style direction can be set in the <Link href="/dashboard/dna" className="text-[#0077b6] font-medium hover:underline">Brand DNA</Link> page.</p>
                    </div>
                </div>
            </div>

            {saved && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-2xl border border-[#90e0ef]/30">
                    <div className="w-6 h-6 rounded-full bg-[#34C759] flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                    <span className="text-[14px] font-medium text-[#1d1d1f]">Moodboard saved!</span>
                    <Link href="/dashboard/dna" className="text-[13px] font-bold text-[#0077b6] hover:text-[#00b4d8] transition-colors">Back to DNA →</Link>
                </div>
            )}
        </div>
    );
}
