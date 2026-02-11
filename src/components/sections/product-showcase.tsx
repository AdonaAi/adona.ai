"use client";

import React, { useState } from "react";
import Image from "next/image";

const SHOWCASE_TABS = [
  { id: "images", label: "Images" },
  { id: "video", label: "Video" },
  { id: "ugc", label: "UGC" },
] as const;

type TabId = (typeof SHOWCASE_TABS)[number]["id"];

const ASSET_IMAGES = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Q7ROj4NWRiMd4gkRN3cwpfkIQ-26.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/3ufBHvRGDA3ObZGtXhm6PN3Aao-27.png",
  "https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg?width=400&height=400",
  "https://framerusercontent.com/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png?width=400&height=400",
  "https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png?width=400&height=400",
  "https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png?width=400&height=400",
];

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState<TabId>("images");

  return (
    <section className="section-padding bg-[#FAFAFA] flex flex-col items-center overflow-hidden">
      <div className="container px-6 flex flex-col items-center text-center max-w-[800px] mb-16">
        <h2 className="text-black font-bold tracking-tight mb-6" style={{ fontSize: '48px', lineHeight: '1.1' }}>
          See adona.ai in Action
        </h2>
        <p className="text-[#666666] text-lg leading-relaxed max-w-[600px]">
          From short-form videos that feel like they belong in the feed, to bold static creatives designed to catch the eye.
        </p>
      </div>

      {/* Visual Content Stack */}
      <div className="relative w-full overflow-hidden flex flex-col items-center">
        {/* Ad Creator Showcase Mockup Area */}
        <div className="w-full max-w-[1400px] flex justify-center items-center h-[460px] relative">
            {/* The "fanned" layout of ad creative previews */}
            <div className="flex items-center justify-center gap-[-20px] md:gap-4 perspective-[1200px] w-full px-4 overflow-x-auto no-scrollbar">
                {/* Visual items with tilt effects to match the design screenshot */}
                <div className="min-w-[200px] w-[260px] h-[360px] rounded-[24px] bg-white border border-[#E5E5E5] shadow-sm transform -rotate-12 translate-x-8 translate-z-[-100px] opacity-40 overflow-hidden hidden md:block">
                     <img src={ASSET_IMAGES[2]} alt="Ad Example 1" className="w-full h-full object-cover" />
                </div>
                <div className="min-w-[240px] w-[280px] h-[400px] rounded-[24px] bg-white border border-[#E5E5E5] shadow-md transform -rotate-6 translate-x-4 translate-z-[-50px] opacity-70 overflow-hidden hidden md:block">
                     <img src={ASSET_IMAGES[3]} alt="Ad Example 2" className="w-full h-full object-cover" />
                </div>
                <div className="min-w-[280px] w-[300px] h-[440px] rounded-[24px] bg-white border border-[#E5E5E5] shadow-xl z-20 overflow-hidden transform scale-110 transition-transform duration-500">
                    <img src={ASSET_IMAGES[0]} alt="Featured Ad Example" className="w-full h-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/20 to-transparent">
                         <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-black inline-block">
                             High Performance
                         </div>
                    </div>
                </div>
                <div className="min-w-[240px] w-[280px] h-[400px] rounded-[24px] bg-white border border-[#E5E5E5] shadow-md transform rotate-6 -translate-x-4 translate-z-[-50px] opacity-70 overflow-hidden hidden md:block">
                     <img src={ASSET_IMAGES[4]} alt="Ad Example 3" className="w-full h-full object-cover" />
                </div>
                <div className="min-w-[200px] w-[260px] h-[360px] rounded-[24px] bg-white border border-[#E5E5E5] shadow-sm transform rotate-12 -translate-x-8 translate-z-[-100px] opacity-40 overflow-hidden hidden md:block">
                     <img src={ASSET_IMAGES[5]} alt="Ad Example 4" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

        {/* Tab Controls */}
        <div className="mt-16 flex items-center justify-center border-b border-[#E5E5E5] w-full max-w-[400px]">
          {SHOWCASE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-8 py-4 text-[16px] font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "text-black"
                  : "text-[#666666] hover:text-black"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-accent-gradient rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .perspective-1200 {
          perspective: 1200px;
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase;