"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ActionGallery = () => {
  const [activeTab, setActiveTab] = useState<'Images' | 'Video' | 'UGC'>('Images');

  const tabs = [
    { id: 'Images', label: 'Images' },
    { id: 'Video', label: 'Video' },
    { id: 'UGC', label: 'UGC' },
  ];

  // Based on screenshots and visual identification of the section "See adona.ai in Action"
  const galleryItems = [
    {
      id: 1,
      type: 'Images',
      src: 'https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg?width=400&height=400',
      rotation: -10,
      translateY: 0,
      zIndex: 10,
    },
    {
      id: 2,
      type: 'Images',
      src: 'https://framerusercontent.com/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png?width=400&height=400',
      rotation: -5,
      translateY: -20,
      zIndex: 20,
    },
    {
      id: 3,
      type: 'Images',
      src: 'https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png?width=400&height=400',
      rotation: 0,
      translateY: 0,
      zIndex: 30,
      scale: 1.1,
    },
    {
      id: 4,
      type: 'Images',
      src: 'https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png?width=400&height=400',
      rotation: 5,
      translateY: -20,
      zIndex: 20,
    },
    {
      id: 5,
      type: 'Images',
      src: 'https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg?width=400&height=400',
      rotation: 10,
      translateY: 0,
      zIndex: 10,
    },
  ];

  const videoAssets = [
    "https://framerusercontent.com/assets/MUCvkuQweY903fktZ47rIX7lONg.mp4",
    "https://framerusercontent.com/assets/eNUFze2CrR1GX4BZVWk8AOq8yU.mp4",
    "https://framerusercontent.com/assets/p3Ow7OzzhAKaSauO9xXphdbcySA.mp4"
  ];

  return (
    <section className="bg-[#fcfcfc] py-[120px] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Header Section */}
        <div className="max-w-[800px] mx-auto mb-[64px]">
          <h2 className="text-[48px] font-bold tracking-tight text-[#1A1A1A] mb-4">
            See adona.ai in Action
          </h2>
          <p className="text-[18px] text-[#666666] leading-[1.6]">
            From short-form videos that feel like they belong in the feed, to bold static creatives designed to catch the eye.
          </p>
        </div>

        {/* Gallery Display */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center perspective-[2000px]">
          <AnimatePresence mode="wait">
            {activeTab === 'Images' && (
              <motion.div
                key="images-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center justify-center gap-2 md:gap-4 flex-nowrap"
              >
                {galleryItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="relative shrink-0 w-[180px] h-[320px] md:w-[240px] md:h-[420px] rounded-[32px] overflow-hidden shadow-soft border border-[#f1f1f1] bg-white"
                    style={{
                      zIndex: item.zIndex,
                      transform: `rotate(${item.rotation}deg) translateY(${item.translateY}px) scale(${item.scale || 1})`,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    <img
                      src={item.src}
                      alt={`Ad concept ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'Video' && (
              <motion.div
                key="video-grid"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center justify-center gap-6"
              >
                {videoAssets.map((video, idx) => (
                  <div 
                    key={idx} 
                    className="w-[200px] h-[350px] md:w-[260px] md:h-[460px] rounded-[32px] overflow-hidden shadow-soft border border-[#f1f1f1] bg-black"
                  >
                    <video 
                      src={video} 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'UGC' && (
              <motion.div
                key="ugc-grid"
                initial={{ opacity: 0, rotateY: 45 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -45 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="w-[240px] h-[420px] rounded-[32px] overflow-hidden shadow-soft border border-[#f1f1f1] relative">
                  <video 
                    src={videoAssets[0]} 
                    autoPlay muted loop playsInline 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 glass-tooltip p-3 text-left">
                    <p className="text-[12px] font-semibold text-[#1a1a1a]">UGC Style Creative</p>
                    <p className="text-[10px] text-[#666666]">Engages 2.4x better than standard TV ads</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex p-1 bg-white border border-[#f1f1f1] rounded-full shadow-soft relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-8 py-3 text-[16px] font-semibold transition-all duration-300 rounded-full z-10 ${
                  activeTab === tab.id ? 'text-[#1A1A1A]' : 'text-[#666666] hover:text-[#1A1A1A]'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-transparent border-b-2 border-primary mt-[2px] mx-4"
                    initial={false}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    style={{
                      background: 'linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #ef4444 100%)',
                      height: '2px',
                      bottom: '-4px',
                      top: 'auto',
                      borderRadius: '100px'
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionGallery;