"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Assets mapping from provided source
 */
const ASSETS = {
  videos: [
    "https://framerusercontent.com/assets/PrQYypIOc9BMvyvYIt9MrkyMKKc.mp4",
    "https://framerusercontent.com/assets/s3Hwxo9oZDQ0EoZCT1k2tCrdHok.mp4",
  ],
  images: [
    "https://framerusercontent.com/images/vSIWDCl1KFWkknKz9u5rSJCy9s.png?width=1024&height=1536",
    "https://framerusercontent.com/images/OtG3QVd556Y1CNpNusIXZNhnmDQ.png?width=1024&height=1536",
    "https://framerusercontent.com/images/NEYhzCSjxTQwtw42QXuV95vNic.png?width=1024&height=1536",
    "https://framerusercontent.com/images/o4N51lF9FmBXrkqWlQU0prnYA.png?width=1024&height=1536",
    "https://framerusercontent.com/images/5Ik5328FK0N2p8sckUVxQQw0D7E.png?width=1024&height=1536",
  ],
  ugc: [
    "https://framerusercontent.com/images/wZSL0hA9e5ZCqLokbdX47Jh6hTY.gif?width=340&height=460",
    "https://framerusercontent.com/images/QSukwCnm3IX5CelwsmlRSf6gos.gif?width=360&height=460",
    "https://framerusercontent.com/images/qbgOlVGaRxzJzyt9aocYHHa88.gif?width=800&height=1067",
    "https://framerusercontent.com/images/ntZ5VfMtQVYge7rjBZAevcOsA.gif?width=800&height=1067",
  ],
};

type TabType = "Images" | "Videos" | "UGC";

export default function PerfectAdsTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("Images");

  const tabs: TabType[] = ["Images", "Videos", "UGC"];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, rotateY: -10 },
    visible: { opacity: 1, scale: 1, rotateY: 0 },
  };

  return (
    <section className="py-[120px] bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1240px]">
        {/* Header Content */}
        <div className="text-center mb-[60px] max-w-[800px] mx-auto">
          <h2 className="text-[#121212] text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] mb-4">
            Perfect ads everytime with adona.ai
          </h2>
          <p className="text-[#666666] text-[18px] leading-[1.6]">
            From feeds ads to carousel ads, adona.ai’s AI helps you step up your Instagram ads game. No more ads that look templated.
          </p>
        </div>

        {/* Tab Interface - Top Carousel Style */}
        <div className="relative min-h-[500px] flex flex-col items-center">
          <div className="w-full flex justify-center mb-12">
            <div className="relative overflow-visible h-[440px] w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  className="flex gap-4 perspective-[2000px]"
                >
                  {activeTab === "Images" &&
                    ASSETS.images.map((src, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`w-[200px] h-[300px] rounded-[16px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)] border border-[#E5E5E5] bg-white flex-shrink-0
                          ${idx === 2 ? "scale-110 z-10 translate-y-[-20px]" : "mt-8"}
                        `}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <img
                          src={src}
                          alt={`Ad creative ${idx + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}

                  {activeTab === "Videos" &&
                    ASSETS.videos.map((src, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="w-[280px] h-[440px] rounded-[24px] overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.1)] border border-[#E5E5E5] bg-black flex-shrink-0"
                      >
                        <video
                          src={src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}

                  {activeTab === "UGC" &&
                    ASSETS.ugc.map((src, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`w-[220px] h-[340px] rounded-[16px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)] border border-[#E5E5E5] bg-white flex-shrink-0
                           ${idx % 2 === 0 ? "mt-4" : "mt-12"}
                        `}
                      >
                        <img
                          src={src}
                          alt={`UGC content ${idx + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-[48px] border-b border-[#E5E5E5] w-fit mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-[16px] font-semibold transition-all duration-300 relative ${
                  activeTab === tab ? "text-[#121212]" : "text-[#666666] hover:text-[#121212]"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-gradient-to-r from-[#7f7fd5] via-[#86a8e7] to-[#91eae4]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}