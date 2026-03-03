"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBrandDNA, saveBrandDNA, getDNACompletion, type BrandDNA } from "@/lib/brand-store";

const TONE_OPTIONS = ["Professional", "Friendly", "Bold", "Playful", "Luxury", "Minimalist", "Warm", "Edgy", "Inspirational", "Casual", "Formal", "Witty"];
const INDUSTRY_OPTIONS = ["Beauty & Cosmetics", "Fashion", "Food & Beverage", "Health & Fitness", "Technology", "E-commerce", "Education", "Real Estate", "Finance", "Travel & Hospitality", "Other"];
const FONT_OPTIONS = ["Inter", "Satoshi", "Playfair Display", "Roboto", "Montserrat", "Poppins", "Lora", "DM Sans", "Space Grotesk", "Outfit"];
const PRESET_COLORS = ["#03045e", "#0077b6", "#00b4d8", "#90e0ef", "#caf0f8", "#1d1d1f", "#6e6e73", "#f5f5f7", "#EE4454", "#F05427", "#34C759", "#FF9500", "#AF52DE", "#FF2D55", "#5856D6"];

type Tab = "who" | "speak" | "compete";

const CATEGORIES = [
    { key: "coreBasics", label: "Core Basics", color: "#0077b6" },
    { key: "yourMarket", label: "Your Market", color: "#EE4454" },
    { key: "brandVoice", label: "Brand Voice", color: "#EC4492" },
    { key: "visualStyle", label: "Visual Style", color: "#AF52DE" },
] as const;

export default function DnaPage() {
    const [dna, setDna] = useState<BrandDNA | null>(null);
    const [activeTab, setActiveTab] = useState<Tab>("who");
    const [saved, setSaved] = useState(false);
    const [completion, setCompletion] = useState({ coreBasics: 0, brandVoice: 0, yourMarket: 0, visualStyle: 0, total: 0 });
    const colorInputRef = useRef<HTMLInputElement>(null);
    const logoInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setDna(getBrandDNA());
        setCompletion(getDNACompletion());
    }, []);

    const update = (patch: Partial<BrandDNA>) => {
        setDna((prev) => (prev ? { ...prev, ...patch } : prev));
    };

    const handleSave = () => {
        if (!dna) return;
        saveBrandDNA(dna);
        setCompletion(getDNACompletion());
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const toggleColor = (color: string) => {
        if (!dna) return;
        update({ colors: dna.colors.includes(color) ? dna.colors.filter((c) => c !== color) : dna.colors.length < 6 ? [...dna.colors, color] : dna.colors });
    };

    const toggleTone = (tone: string) => {
        if (!dna) return;
        if (dna.toneOfVoice.includes(tone)) update({ toneOfVoice: dna.toneOfVoice.filter((t) => t !== tone) });
        else if (dna.toneOfVoice.length < 3) update({ toneOfVoice: [...dna.toneOfVoice, tone] });
    };

    const toggleFont = (font: string) => {
        if (!dna) return;
        if (dna.fonts.includes(font)) update({ fonts: dna.fonts.filter((f) => f !== font) });
        else if (dna.fonts.length < 3) update({ fonts: [...dna.fonts, font] });
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => update({ logoUrl: ev.target?.result as string });
        reader.readAsDataURL(file);
        e.target.value = "";
    };

    if (!dna) return null;

    // SVG Ring Chart
    const ringSize = 280;
    const center = ringSize / 2;
    const rings = [
        { key: "coreBasics" as const, r: 35, color: "#0077b6" },
        { key: "visualStyle" as const, r: 55, color: "#AF52DE" },
        { key: "brandVoice" as const, r: 75, color: "#EC4492" },
        { key: "yourMarket" as const, r: 95, color: "#EE4454" },
    ];

    return (
        <div className="px-5 pt-5 flex-1 flex flex-col overflow-y-auto relative min-h-screen">
            <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none bg-white overflow-hidden h-screen rounded-[20px]" aria-hidden="true">
                <Image alt="" draggable={false} width={2560} height={1440} className="w-full h-full object-cover object-top opacity-90" src="/dashboard/gradient.png.svg" />
            </div>

            {/* Header */}
            <div className="shrink-0 flex justify-between items-center w-full mb-6 relative z-10">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="flex items-center bg-white rounded-full px-3 py-[7px] hover:opacity-80 transition-opacity cursor-pointer" style={{ boxShadow: "0px 5px 10px 0px rgba(230,230,231,0.15), inset -2px 2px 10px 0px rgba(255,255,255,0.8)" }}>
                        <div className="flex items-center gap-2.5 pr-1 pt-[1px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4.16699 10L16.667 9.9998" stroke="#03045e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.49967 5.83301L4.04011 9.29257C3.70678 9.6259 3.54011 9.79257 3.54011 9.99967C3.54011 10.2068 3.70678 10.3734 4.04011 10.7068L7.49967 14.1663" stroke="#03045e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <span className="text-[16px] font-medium leading-normal text-[#03045e]">Back</span>
                    </Link>
                </div>
                <button onClick={handleSave} className="flex items-center gap-2 rounded-full px-6 py-2.5 text-[14px] font-bold text-white hover:opacity-90 transition-all cursor-pointer" style={{ background: "linear-gradient(135deg, #03045e 0%, #0077b6 40%, #00b4d8 100%)", boxShadow: "0px 5px 15px 0px rgba(0, 119, 182, 0.25)" }}>
                    {saved ? "✓ Saved!" : "Save Changes"}
                </button>
            </div>

            <div className="relative z-10 w-full pb-10 space-y-8">
                {/* Top: Ring Chart + Suggestions */}
                <div className="flex gap-5 w-full">
                    {/* Ring Chart Card */}
                    <div className="flex-[2] bg-white border border-[#e6e6e7] rounded-[20px] p-5 flex items-center gap-8 min-h-[300px]">
                        {/* Ring SVG */}
                        <div className="shrink-0 relative" style={{ width: ringSize, height: ringSize }}>
                            <svg width={ringSize} height={ringSize} viewBox={`0 0 ${ringSize} ${ringSize}`}>
                                {rings.map((ring) => {
                                    const circ = 2 * Math.PI * ring.r;
                                    const pct = completion[ring.key] / 100;
                                    return (
                                        <g key={ring.key}>
                                            <circle cx={center} cy={center} r={ring.r} fill="none" stroke="#FAFAFA" strokeWidth="10" strokeLinecap="round" />
                                            <circle cx={center} cy={center} r={ring.r} fill="none" stroke={ring.color} strokeWidth="10" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)} transform={`rotate(-90 ${center} ${center})`} className="transition-all duration-500" style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.5))" }} />
                                        </g>
                                    );
                                })}
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[18px] font-bold text-[#1d1d1f]">{completion.total}%</span>
                            </div>
                        </div>
                        {/* Legend */}
                        <div className="flex flex-col gap-3 flex-1">
                            {CATEGORIES.map((cat) => (
                                <div key={cat.key} className="flex flex-col gap-1.5">
                                    <div className="flex justify-between items-center gap-2.5">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                                            <span className="text-[15px] font-medium text-[#1d1d1f]">{cat.label}</span>
                                        </div>
                                        <span className="text-[12px] font-medium text-[#6e6e73]">{completion[cat.key]}%</span>
                                    </div>
                                    <div className="w-full h-px bg-[#e6e6e7]" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Suggestions Card */}
                    <div className="flex-1 bg-white border border-[#e6e6e7] rounded-[20px] p-5 flex flex-col min-h-[300px]">
                        <div className="flex flex-col gap-1 mb-4">
                            <h3 className="text-[16px] font-bold text-[#03045e]">Finish your brand DNA</h3>
                            <p className="text-[14px] font-medium text-[#6e6e73]">Complete these so Adona gets your brand.</p>
                        </div>
                        <div className="flex flex-col gap-2.5 flex-1">
                            {[
                                { label: "Add your brand name", color: "#0077b6", done: !!dna.name, tab: "who" as Tab },
                                { label: "Set tone of voice", color: "#EC4492", done: dna.toneOfVoice.length > 0, tab: "speak" as Tab },
                                { label: "Define your market", color: "#EE4454", done: !!dna.industry, tab: "compete" as Tab },
                                { label: "Add brand colors", color: "#AF52DE", done: dna.colors.length > 0, tab: "who" as Tab },
                            ].filter((s) => !s.done).slice(0, 4).map((suggestion) => (
                                <button key={suggestion.label} onClick={() => setActiveTab(suggestion.tab)} className="flex justify-between items-center gap-2.5 px-3 h-[44px] bg-white border border-[#f1f1f1] rounded-full hover:bg-[#fafafa] transition-colors cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: suggestion.color }} />
                                        <span className="text-[14px] font-medium text-[#1d1d1f]">{suggestion.label}</span>
                                    </div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#6e6e73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </button>
                            ))}
                            {[
                                { label: "Add your brand name", done: !!dna.name },
                                { label: "Set tone of voice", done: dna.toneOfVoice.length > 0 },
                                { label: "Define your market", done: !!dna.industry },
                                { label: "Add brand colors", done: dna.colors.length > 0 },
                            ].every((s) => s.done) && (
                                    <div className="flex items-center gap-2 text-[14px] text-[#34C759] font-medium px-3 py-2">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5 6.5-6.5" stroke="#34C759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        All basics covered! 🎉
                                    </div>
                                )}
                        </div>
                    </div>
                </div>

                {/* Tab Selector */}
                <div>
                    <h2 className="text-[24px] font-bold text-[#03045e] mb-5">Choose what to update</h2>
                    <div className="flex gap-4 w-full">
                        {([
                            { key: "who" as Tab, title: "Who you are", desc: "Brand's core identity.", icon: "🏢" },
                            { key: "speak" as Tab, title: "How you speak", desc: "Tone for communication.", icon: "💬" },
                            { key: "compete" as Tab, title: "Where you compete", desc: "Market and audience.", icon: "🎯" },
                        ]).map((tab) => (
                            <button key={tab.key} onClick={() => setActiveTab(tab.key)} className="relative w-full h-[140px] transition-all duration-200 hover:scale-[1.02] cursor-pointer">
                                <div className={`relative rounded-[20px] p-5 w-full h-full ${activeTab === tab.key ? "bg-white" : "bg-[#fbfbfb] border border-[#e6e6e7]"}`}>
                                    {activeTab === tab.key && (
                                        <div className="absolute inset-0 rounded-[20px] p-[1px]" style={{ background: "linear-gradient(135deg, #03045e 0%, #0077b6 40%, #00b4d8 100%)" }}>
                                            <div className="w-full h-full bg-white rounded-[19px]" />
                                        </div>
                                    )}
                                    <div className="relative flex flex-col gap-1 h-full text-left">
                                        <span className="text-[24px] mb-1">{tab.icon}</span>
                                        <h3 className={`text-[18px] font-bold ${activeTab === tab.key ? "text-[#03045e]" : "text-[#6e6e73]"}`}>{tab.title}</h3>
                                        <p className="text-[14px] font-medium text-[#6e6e73]">{tab.desc}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Form based on active tab */}
                <div className="space-y-5">
                    <div className="w-full h-px bg-[#e6e6e7]" />

                    {activeTab === "who" && (
                        <>
                            {/* Brand name + Website URL */}
                            <div className="flex gap-5 w-full">
                                <FormField label="Brand name" value={dna.name} onChange={(v) => update({ name: v })} placeholder="e.g. Adona AI" />
                                <FormField label="Website URL" value={dna.websiteUrl} onChange={(v) => update({ websiteUrl: v })} placeholder="https://adona.ai" />
                            </div>

                            {/* Social media */}
                            <div className="flex gap-5">
                                <div className="flex flex-col gap-2.5 flex-1">
                                    <span className="text-[15px] font-bold text-[#03045e] px-2.5">Social media</span>
                                    <div className="bg-white border border-[#e6e6e7] rounded-full h-[47px] p-2.5 flex items-center">
                                        <input type="text" value={dna.socialMediaUrl} onChange={(e) => update({ socialMediaUrl: e.target.value })} placeholder="Enter your social media URL" className="flex-1 text-[15px] font-medium text-[#6e6e73] bg-transparent outline-none" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2.5 flex-1">
                                    <span className="text-[15px] font-bold text-[#03045e] px-2.5">Language settings</span>
                                    <div className="bg-white border border-[#e6e6e7] rounded-[20px] px-2.5 py-2.5">
                                        <input type="text" value={dna.language} onChange={(e) => update({ language: e.target.value })} placeholder="e.g., English, Bahasa Indonesia" className="w-full text-[15px] font-medium text-[#6e6e73] bg-transparent outline-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Use emojis */}
                            <div className="flex flex-col gap-2.5">
                                <span className="text-[15px] font-bold text-[#03045e] px-2.5">Use emojis</span>
                                <div className="flex items-center gap-2.5 p-1 bg-[#fbfbfb] border border-[#e6e6e7] rounded-full h-[44px] w-[200px]">
                                    <button onClick={() => update({ useEmojis: true })} className={`flex-1 rounded-[20px] h-full flex items-center justify-center cursor-pointer transition-all ${dna.useEmojis ? "bg-white border border-[#e6e6e7]" : "bg-transparent"}`}>
                                        <span className={`text-[15px] font-medium ${dna.useEmojis ? "text-[#03045e]" : "text-[#6e6e73]"}`}>YES</span>
                                    </button>
                                    <button onClick={() => update({ useEmojis: false })} className={`flex-1 rounded-[20px] h-full flex items-center justify-center cursor-pointer transition-all ${!dna.useEmojis ? "bg-white border border-[#e6e6e7]" : "bg-transparent"}`}>
                                        <span className={`text-[15px] font-medium ${!dna.useEmojis ? "text-[#03045e]" : "text-[#6e6e73]"}`}>NO</span>
                                    </button>
                                </div>
                            </div>

                            {/* Brand Fonts */}
                            <div className="flex flex-col gap-2.5">
                                <div className="flex items-center gap-2.5 px-2.5">
                                    <span className="text-[15px] font-bold text-[#03045e]">Brand Fonts</span>
                                    <span className="text-[13px] font-medium text-[#6e6e73]">({dna.fonts.length}/3)</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {FONT_OPTIONS.map((font) => (
                                        <button key={font} onClick={() => toggleFont(font)} className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer ${dna.fonts.includes(font) ? "bg-[#03045e] text-white shadow-md" : "bg-white border border-[#e6e6e7] text-[#6e6e73] hover:border-[#d1d1d6]"}`}>
                                            {font}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Colors */}
                            <div className="flex flex-col gap-2.5">
                                <span className="text-[15px] font-bold text-[#03045e] px-2.5">Colors</span>
                                <div className="flex items-center gap-3 flex-wrap">
                                    {dna.colors.map((color) => (
                                        <div key={color} className="relative group">
                                            <button onClick={() => toggleColor(color)} className="absolute -top-1.5 -left-1 bg-black text-white rounded-full w-4 h-4 cursor-pointer flex items-center justify-center text-[10px] font-bold z-20 opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
                                            <div className="w-[65px] h-[65px] bg-white border border-[#e6e6e7] rounded-full p-[4px] flex items-center justify-center">
                                                <div className="w-[57px] h-[57px] rounded-full" style={{ backgroundColor: color }} />
                                            </div>
                                        </div>
                                    ))}
                                    {dna.colors.length < 6 && (
                                        <button onClick={() => colorInputRef.current?.click()} className="w-[65px] h-[65px] bg-white border-2 border-dashed border-[#e6e6e7] rounded-full flex items-center justify-center hover:border-[#0077b6] transition-colors cursor-pointer">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke="#b0b0b5" strokeWidth="2" strokeLinecap="round" /></svg>
                                        </button>
                                    )}
                                    <input ref={colorInputRef} type="color" onChange={(e) => { if (!dna.colors.includes(e.target.value) && dna.colors.length < 6) update({ colors: [...dna.colors, e.target.value] }); }} className="hidden" />
                                </div>
                                {/* Preset colors */}
                                <div className="flex gap-1.5 flex-wrap mt-1">
                                    {PRESET_COLORS.map((c) => (
                                        <button key={c} onClick={() => toggleColor(c)} className={`w-7 h-7 rounded-lg cursor-pointer transition-all hover:scale-110 border ${dna.colors.includes(c) ? "ring-2 ring-[#0077b6] ring-offset-1" : "border-[#e6e6e7]"}`} style={{ backgroundColor: c }} />
                                    ))}
                                </div>
                            </div>

                            {/* Color usage + Logo */}
                            <div className="flex gap-5">
                                <div className="flex-1">
                                    <FormTextarea label="Color usage notes" value={dna.colorUsage} onChange={(v) => update({ colorUsage: v })} placeholder="e.g., Use blue for headlines, pink for accents" rows={4} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col gap-2.5">
                                        <span className="text-[15px] font-bold text-[#03045e] px-2.5">Brand Logo</span>
                                        <div className="bg-white border border-[#e6e6e7] rounded-[20px] p-2.5 h-[120px] cursor-pointer" onClick={() => logoInputRef.current?.click()}>
                                            {dna.logoUrl ? (
                                                <div className="relative h-full rounded-[10px] overflow-hidden group">
                                                    <img src={dna.logoUrl} alt="Brand logo" className="w-full h-full object-contain" />
                                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <span className="text-white text-[14px] font-medium">Change logo</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="h-full flex items-center justify-center text-[#b0b0b5] text-[14px] font-medium">Click to upload logo</div>
                                            )}
                                        </div>
                                        <input ref={logoInputRef} type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                                    </div>
                                </div>
                            </div>

                            {/* Mission + USP */}
                            <div className="flex gap-5">
                                <FormTextarea label="What you do / mission" value={dna.mission} onChange={(v) => update({ mission: v })} placeholder="Describe your brand's mission" />
                                <FormTextarea label="Unique value claims" value={dna.uniqueSellingPoints} onChange={(v) => update({ uniqueSellingPoints: v })} placeholder="What makes your brand unique?" />
                            </div>

                            {/* Extra guidelines */}
                            <FormTextarea label="Extra guidelines" value={dna.extraGuidelines} onChange={(v) => update({ extraGuidelines: v })} placeholder="Any additional brand guidelines (one per line)" />
                        </>
                    )}

                    {activeTab === "speak" && (
                        <>
                            {/* Tone of Voice */}
                            <div className="flex flex-col gap-2.5">
                                <div className="flex items-center gap-2.5 px-2.5">
                                    <span className="text-[15px] font-bold text-[#03045e]">Tone of voice</span>
                                    <span className="text-[13px] font-medium text-[#6e6e73]">Select up to 3</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {TONE_OPTIONS.map((tone) => (
                                        <button key={tone} onClick={() => toggleTone(tone)} className={`px-4 py-2.5 rounded-full text-[14px] font-medium transition-all cursor-pointer ${dna.toneOfVoice.includes(tone) ? "bg-[#0077b6] text-white shadow-md" : "bg-white border border-[#e6e6e7] text-[#6e6e73] hover:border-[#d1d1d6]"}`}>
                                            {tone}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Writing style */}
                            <FormTextarea label="Writing style" value={dna.writingStyle} onChange={(v) => update({ writingStyle: v })} placeholder="Describe how your brand writes — short sentences? Questions? Storytelling?" />

                            {/* Good / Bad copy */}
                            <div className="flex gap-5">
                                <FormTextarea label="✅ Good copy examples" value={dna.goodCopyExamples} onChange={(v) => update({ goodCopyExamples: v })} placeholder="Paste examples of copy that represent your brand well" rows={5} />
                                <FormTextarea label="❌ Bad copy examples" value={dna.badCopyExamples} onChange={(v) => update({ badCopyExamples: v })} placeholder="Paste examples of copy you want to avoid" rows={5} />
                            </div>
                        </>
                    )}

                    {activeTab === "compete" && (
                        <>
                            {/* Industry */}
                            <div className="flex flex-col gap-2.5">
                                <span className="text-[15px] font-bold text-[#03045e] px-2.5">Industry</span>
                                <div className="flex flex-wrap gap-2">
                                    {INDUSTRY_OPTIONS.map((ind) => (
                                        <button key={ind} onClick={() => update({ industry: dna.industry === ind ? "" : ind })} className={`px-4 py-2.5 rounded-full text-[14px] font-medium transition-all cursor-pointer ${dna.industry === ind ? "bg-[#03045e] text-white shadow-md" : "bg-white border border-[#e6e6e7] text-[#6e6e73] hover:border-[#d1d1d6]"}`}>
                                            {ind}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Target audience */}
                            <FormTextarea label="Target audience" value={dna.targetAudience} onChange={(v) => update({ targetAudience: v })} placeholder="Who are your customers? Demographics, interests, pain points..." rows={4} />

                            {/* Competitors */}
                            <FormTextarea label="Competitors" value={dna.competitors} onChange={(v) => update({ competitors: v })} placeholder="List your main competitors, separated by commas..." rows={3} />

                            {/* Market positioning */}
                            <FormTextarea label="Market positioning" value={dna.marketPosition} onChange={(v) => update({ marketPosition: v })} placeholder="How do you position your brand in the market? What makes you different?" rows={4} />
                        </>
                    )}
                </div>
            </div>

            {/* Saved Toast */}
            {saved && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-2xl border border-[#90e0ef]/30">
                    <div className="w-6 h-6 rounded-full bg-[#34C759] flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                    <span className="text-[14px] font-medium text-[#1d1d1f]">Brand DNA saved!</span>
                </div>
            )}
        </div>
    );
}

// ─── Reusable Form Components ────────────────────────────
function FormField({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
    return (
        <div className="flex flex-col gap-2.5 flex-1">
            <span className="text-[15px] font-bold text-[#03045e] px-2.5">{label}</span>
            <div className="bg-white border border-[#e6e6e7] rounded-[20px] px-2.5 py-2.5">
                <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full text-[15px] font-medium text-[#1d1d1f] bg-transparent outline-none placeholder-[#b0b0b5]" />
            </div>
        </div>
    );
}

function FormTextarea({ label, value, onChange, placeholder, rows = 3 }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
    return (
        <div className="flex flex-col gap-2.5 flex-1">
            <span className="text-[15px] font-bold text-[#03045e] px-2.5">{label}</span>
            <div className="bg-white border border-[#e6e6e7] rounded-[20px] px-2.5 py-2.5">
                <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows} className="w-full text-[15px] font-medium text-[#1d1d1f] bg-transparent outline-none placeholder-[#b0b0b5] resize-none leading-relaxed" />
            </div>
        </div>
    );
}
