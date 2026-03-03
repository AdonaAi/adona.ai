"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    getLibraryItems,
    toggleFavorite,
    deleteFromLibrary,
    type LibraryItem,
} from "@/lib/library";

type FilterTab = "all" | "favorites" | "content-swipe" | "concept" | "photoshoot";

export default function LibraryPage() {
    const [items, setItems] = useState<LibraryItem[]>([]);
    const [activeTab, setActiveTab] = useState<FilterTab>("all");
    const [selectedItem, setSelectedItem] = useState<LibraryItem | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const loadItems = useCallback(() => {
        setItems(getLibraryItems());
    }, []);

    useEffect(() => {
        loadItems();
    }, [loadItems]);

    const handleToggleFavorite = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        toggleFavorite(id);
        loadItems();
    };

    const handleDelete = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        deleteFromLibrary(id);
        loadItems();
        if (selectedItem?.id === id) setSelectedItem(null);
    };

    // Apply filters
    const filteredItems = items.filter((item) => {
        if (activeTab === "favorites" && !item.isFavorite) return false;
        if (activeTab !== "all" && activeTab !== "favorites" && item.source !== activeTab)
            return false;
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            return item.prompt.toLowerCase().includes(q);
        }
        return true;
    });

    const TABS: { key: FilterTab; label: string }[] = [
        { key: "all", label: "All" },
        { key: "favorites", label: "Favorites" },
        { key: "content-swipe", label: "Swipe" },
        { key: "concept", label: "Concept" },
        { key: "photoshoot", label: "Photoshoot" },
    ];

    const formatDate = (iso: string) => {
        const d = new Date(iso);
        return d.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <div className="px-5 pt-5 flex-1 flex flex-col overflow-y-auto relative min-h-screen">
            {/* Background gradient */}
            <div
                className="absolute top-0 left-0 right-0 z-0 pointer-events-none bg-white overflow-hidden h-screen rounded-[20px]"
                aria-hidden="true"
            >
                <Image
                    alt=""
                    draggable={false}
                    width={2560}
                    height={1440}
                    className="w-full h-full object-cover object-top opacity-90"
                    src="/dashboard/gradient.png.svg"
                />
            </div>

            {/* ─── Header ─── */}
            <div className="shrink-0 flex justify-between items-center w-full mb-5 relative z-10">
                <div className="flex items-center gap-4">
                    <Link
                        href="/dashboard"
                        className="flex items-center bg-white rounded-full px-3 py-[7px] hover:opacity-80 transition-opacity cursor-pointer"
                        style={{
                            boxShadow:
                                "0px 5px 10px 0px rgba(230,230,231,0.15), inset -2px 2px 10px 0px rgba(255,255,255,0.8)",
                        }}
                    >
                        <div className="flex items-center gap-2.5 pr-1 pt-[1px]">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.16699 10L16.667 9.9998"
                                    stroke="#03045e"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.49967 5.83301L4.04011 9.29257C3.70678 9.6259 3.54011 9.79257 3.54011 9.99967C3.54011 10.2068 3.70678 10.3734 4.04011 10.7068L7.49967 14.1663"
                                    stroke="#03045e"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <span className="text-[16px] font-medium leading-normal text-[#03045e]">
                            Back
                        </span>
                    </Link>

                    <h1 className="text-[22px] font-bold text-[#03045e]">Library</h1>
                    <span className="text-[14px] text-[#6e6e73] bg-[#f7f7f7] rounded-full px-3 py-1">
                        {items.length} {items.length === 1 ? "asset" : "assets"}
                    </span>
                </div>

                {/* Search */}
                <div
                    className="flex items-center bg-white rounded-full px-4 py-[7px] gap-2 w-[280px]"
                    style={{
                        boxShadow:
                            "0px 5px 10px 0px rgba(230,230,231,0.15), inset -2px 2px 10px 0px rgba(255,255,255,0.8)",
                    }}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 12A5 5 0 107 2a5 5 0 000 10zM14 14l-3.5-3.5"
                            stroke="#b0b0b5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search assets..."
                        className="flex-1 outline-none bg-transparent font-satoshi text-[14px] text-[#1d1d1f] placeholder-[#b0b0b5]"
                    />
                </div>
            </div>

            {/* ─── Filter Tabs ─── */}
            <div className="relative z-10 mb-5">
                <div className="flex bg-[#f7f7f7] rounded-full p-[4px] w-fit border border-white">
                    {TABS.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`cursor-pointer font-medium rounded-full transition-all flex items-center justify-center gap-[5px] py-[6px] px-[16px] text-[14px] ${activeTab === tab.key
                                    ? "bg-white text-[#1d1d1f] shadow-sm"
                                    : "text-[#6e6e73] hover:text-[#1d1d1f]"
                                }`}
                        >
                            {tab.key === "favorites" && "❤️ "}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ─── Content ─── */}
            <div className="relative z-10 flex-1 pb-10">
                {filteredItems.length === 0 ? (
                    /* Empty State */
                    <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
                        <div className="w-20 h-20 bg-[#f7f7f7] rounded-3xl flex items-center justify-center">
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="3"
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="3"
                                    stroke="#b0b0b5"
                                    strokeWidth="1.5"
                                />
                                <circle
                                    cx="8.5"
                                    cy="8.5"
                                    r="1.5"
                                    fill="#b0b0b5"
                                />
                                <path
                                    d="M3 15l4.293-4.293a1 1 0 011.414 0L14 16"
                                    stroke="#b0b0b5"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M12 14l2.293-2.293a1 1 0 011.414 0L21 17"
                                    stroke="#b0b0b5"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <p className="text-[18px] font-bold text-[#03045e]">
                            {activeTab === "favorites"
                                ? "No favorites yet"
                                : "No assets yet"}
                        </p>
                        <p className="text-[14px] text-[#6e6e73] text-center max-w-[300px]">
                            {activeTab === "favorites"
                                ? "Click the heart icon on any asset to add it to your favorites."
                                : "Create your first content using Content Swipe and it will appear here automatically."}
                        </p>
                        {activeTab !== "favorites" && (
                            <Link
                                href="/dashboard/images/content-swipe"
                                className="mt-2 flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-bold text-white hover:opacity-90 transition-all cursor-pointer"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #03045e 0%, #0077b6 40%, #00b4d8 100%)",
                                    boxShadow:
                                        "0px 5px 15px 0px rgba(0, 119, 182, 0.35)",
                                }}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        d="M8 3v10M3 8h10"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                Create content
                            </Link>
                        )}
                    </div>
                ) : (
                    /* Masonry Grid */
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-white cursor-pointer transition-all duration-200 hover:shadow-xl"
                                style={{
                                    boxShadow:
                                        "0px 2px 8px 0px rgba(230,230,231,0.3), inset -1px 1px 5px 0px rgba(255,255,255,0.8)",
                                }}
                                onClick={() => setSelectedItem(item)}
                            >
                                {/* Image */}
                                <img
                                    src={item.url}
                                    alt={item.prompt}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200">
                                    {/* Top-right actions */}
                                    <div className="absolute top-2 right-2 flex gap-1.5">
                                        <button
                                            onClick={(e) =>
                                                handleToggleFavorite(item.id, e)
                                            }
                                            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm cursor-pointer"
                                        >
                                            {item.isFavorite ? (
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="#EE4454"
                                                >
                                                    <path d="M7 12.5s-5.5-3.5-5.5-7A3 3 0 017 3.5a3 3 0 015.5 2c0 3.5-5.5 7-5.5 7z" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M7 12.5s-5.5-3.5-5.5-7A3 3 0 017 3.5a3 3 0 015.5 2c0 3.5-5.5 7-5.5 7z"
                                                        stroke="#1d1d1f"
                                                        strokeWidth="1"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                        <button
                                            onClick={(e) =>
                                                handleDelete(item.id, e)
                                            }
                                            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-red-50 transition-colors shadow-sm cursor-pointer"
                                        >
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                            >
                                                <path
                                                    d="M3 4h8M5.5 4V3a1 1 0 011-1h1a1 1 0 011 1v1m1.5 0v7a1 1 0 01-1 1h-5a1 1 0 01-1-1V4h8z"
                                                    stroke="#EE4454"
                                                    strokeWidth="1"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Bottom info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <p className="text-white text-[12px] font-medium line-clamp-2 leading-tight">
                                            {item.prompt}
                                        </p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-white/70 text-[10px]">
                                                {item.aspectRatio}
                                            </span>
                                            <span className="text-white/40">
                                                ·
                                            </span>
                                            <span className="text-white/70 text-[10px]">
                                                {formatDate(item.createdAt)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* ─── Detail Modal ─── */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        className="bg-white rounded-3xl max-w-[700px] w-[90vw] max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal image */}
                        <div className="relative">
                            <img
                                src={selectedItem.url}
                                alt={selectedItem.prompt}
                                className="w-full h-auto rounded-t-3xl"
                            />
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md cursor-pointer"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                >
                                    <path
                                        d="M3 3l8 8M11 3l-8 8"
                                        stroke="#1d1d1f"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Modal info */}
                        <div className="p-5 flex flex-col gap-4">
                            <div>
                                <p className="text-[11px] font-semibold text-[#0077b6]/60 uppercase tracking-[0.15em] mb-1">
                                    Prompt
                                </p>
                                <p className="text-[14px] text-[#1d1d1f] font-medium leading-relaxed">
                                    {selectedItem.prompt}
                                </p>
                            </div>

                            {selectedItem.negativePrompt && (
                                <div>
                                    <p className="text-[11px] font-semibold text-[#0077b6]/60 uppercase tracking-[0.15em] mb-1">
                                        Negative Prompt
                                    </p>
                                    <p className="text-[13px] text-[#6e6e73]">
                                        {selectedItem.negativePrompt}
                                    </p>
                                </div>
                            )}

                            {/* Meta row */}
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[12px] bg-[#f7f7f7] text-[#6e6e73] rounded-full px-3 py-1 font-medium">
                                    📐 {selectedItem.aspectRatio}
                                </span>
                                <span className="text-[12px] bg-[#f7f7f7] text-[#6e6e73] rounded-full px-3 py-1 font-medium">
                                    🎨 {selectedItem.model}
                                </span>
                                {selectedItem.seed && (
                                    <span className="text-[12px] bg-[#f7f7f7] text-[#6e6e73] rounded-full px-3 py-1 font-medium">
                                        🌱 Seed: {selectedItem.seed}
                                    </span>
                                )}
                                <span className="text-[12px] bg-[#f7f7f7] text-[#6e6e73] rounded-full px-3 py-1 font-medium">
                                    📅 {formatDate(selectedItem.createdAt)}
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 pt-2 border-t border-[#f0f0f2]">
                                <a
                                    href={selectedItem.url}
                                    download={`adona-${selectedItem.id}.webp`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 rounded-full py-2.5 text-[14px] font-bold text-white hover:opacity-90 transition-all cursor-pointer"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #03045e 0%, #0077b6 40%, #00b4d8 100%)",
                                        boxShadow:
                                            "0px 5px 15px 0px rgba(0, 119, 182, 0.25)",
                                    }}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M8 2v8m0 0l-3-3m3 3l3-3M3 12h10"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Download
                                </a>
                                <button
                                    onClick={(e) =>
                                        handleToggleFavorite(
                                            selectedItem.id,
                                            e
                                        )
                                    }
                                    className={`flex items-center justify-center gap-2 rounded-full py-2.5 px-5 text-[14px] font-medium cursor-pointer transition-colors ${selectedItem.isFavorite
                                            ? "bg-red-50 text-[#EE4454] border border-red-100"
                                            : "bg-[#f7f7f7] text-[#6e6e73] border border-white hover:bg-[#f0f0f2]"
                                        }`}
                                >
                                    {selectedItem.isFavorite
                                        ? "❤️ Favorited"
                                        : "🤍 Favorite"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
