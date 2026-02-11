"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { id: "videos", label: "Videos" },
  { id: "ads", label: "Ads" },
  { id: "socials", label: "Socials" },
  { id: "emails", label: "Emails" },
];

const TAB_CONTENT = {
  videos: {
    title: "AI Video Editor",
    description: "Generate high-converting video ads and social reels in seconds. No filming or editing required.",
    image: "https://framerusercontent.com/assets/hVwUCh3UvKMPuZNvp2daTbuNEtQ.mp4",
    type: "video",
  },
  ads: {
    title: "Static Ad Generation",
    description: "Turn your URL into hundreds of professional static ads for Meta, Google, and TikTok instantly.",
    image: "https://framerusercontent.com/images/OtG3QVd556Y1CNpNusIXZNhnmDQ.png?width=1024&height=1536",
    type: "image",
  },
  socials: {
    title: "Social Media Manager",
    description: "Keep your feeds active with brand-consistent posts. Our AI learns your voice and brand identity.",
    image: "https://framerusercontent.com/images/OgyYpZJTlJLNX1MxPTijFzo8xM.jpg?width=768&height=1344",
    type: "image",
  },
  emails: {
    title: "Email Campaign Creator",
    description: "Personalized cold emails and newsletters designed to convert. Build your list without the stress.",
    image: "https://framerusercontent.com/images/Ap4kpxnd510KVF9Cq3cUc5mkAuk.png?width=896&height=1152",
    type: "image",
  },
};

export default function AllInOneTool() {
  const [activeTab, setActiveTab] = useState("videos");

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <h2 className="text-[#1F1F1F] font-bold text-[48px] leading-[1.2] tracking-[-0.02em] mb-6">
            The All-in-One Marketing Tool
          </h2>
          <p className="text-[#666666] text-[20px] leading-[1.6] italic font-normal">
            Skip the tools, templates, and tabs. This is your AI for marketing, built to scale. From ads, emails and social posts. Core marketing areas? Covered.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="relative max-w-[800px] mx-auto mb-16">
          <div className="flex justify-between items-center border-b border-[#F0F0F0]">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-4 px-6 text-[18px] font-semibold transition-colors duration-300 ${
                  activeTab === tab.id ? "text-[#1F1F1F]" : "text-[#666666]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-holo-gradient"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Showcase */}
        <div className="relative min-h-[600px] flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="w-full flex flex-col items-center"
            >
              <div className="max-w-[400px] mx-auto text-center mb-12">
                <h3 className="text-[24px] font-bold text-[#1F1F1F] mb-4">
                  {TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT].title}
                </h3>
                <p className="text-[#666666] text-[16px] leading-[1.5]">
                  {TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT].description}
                </p>
              </div>

              <div className="relative w-full max-w-[900px] aspect-[16/10] rounded-[32px] overflow-hidden border border-[#F0F0F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] bg-[#F9F9FB]">
                {TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT].type === "video" ? (
                  <video
                    key={TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT].image}
                    src={TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT].image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT].image}
                    alt={TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT].title}
                    fill
                    className="object-contain p-8"
                    priority
                  />
                )}
                
                {/* Visual Accent */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        .bg-holo-gradient {
          background: linear-gradient(90deg, #8a84ff 0%, #ff5a7a 100%);
        }
        .section-padding {
          padding-top: 140px;
          padding-bottom: 140px;
        }
      `}</style>
    </section>
  );
}