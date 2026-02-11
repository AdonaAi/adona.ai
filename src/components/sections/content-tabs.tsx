"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { id: "videos", label: "Videos" },
  { id: "ads", label: "Ads" },
  { id: "socials", label: "Socials" },
  { id: "emails", label: "Emails" },
];

export default function ContentTabs() {
  const [activeTab, setActiveTab] = useState("videos");

  return (
    <section className="bg-white py-[120px] px-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Headline Section */}
        <div className="mb-[80px]">
          <h2 className="text-[clamp(32px,5vw,48px)] font-bold tracking-[-0.03em] leading-[1.2] text-[#1a1a1a] mb-6">
            The All-in-One Marketing Tool
          </h2>
          <p className="max-w-[640px] mx-auto text-[20px] leading-[1.5] text-[#666666] font-normal italic">
            Skip the tools, templates, and tabs. This is your AI for marketing,
            built to scale. From ads, emails and social posts. Core marketing
            areas? Covered.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="relative mt-20 max-w-[800px] mx-auto">
          <div className="flex justify-between items-center border-b border-[#f0f0f0]">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 py-4 text-[16px] font-medium transition-colors duration-200 ${
                  activeTab === tab.id ? "text-[#1a1a1a]" : "text-[#b2b2b2]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7b61ff] via-[#ff4d6d] to-[#ff4d6d]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Preview Area */}
        <div className="relative mt-12 min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-5xl"
            >
              {/* Placeholder for the content that would be in each tab */}
              <div className="aspect-video w-full rounded-[24px] bg-[#f9fafb] border border-[#f0f0f0] flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-[#f0f0f0] mx-auto mb-4 flex items-center justify-center text-[#7b61ff]">
                    {activeTab === "videos" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    )}
                    {activeTab === "ads" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    )}
                    {activeTab === "socials" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    )}
                    {activeTab === "emails" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#1a1a1a]">
                    AI Generated {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                  </h3>
                  <p className="text-[#666666] max-w-sm mx-auto">
                    Transform your brand URLs into high-converting {activeTab} in seconds. No complex editing required.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}