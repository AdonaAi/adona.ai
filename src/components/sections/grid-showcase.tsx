import React from 'react';
import Image from 'next/image';

/**
 * GridShowcase Component
 * 
 * A pixel-perfect clone of the perspective-warped content grid.
 * Key features:
 * - 3D Perspective warp (rotateX + scale + skew)
 * - Autoplay video in a warped container
 * - Grid of ad creative mockups
 * - Central play button overlay
 */

export default function GridShowcase() {
  // Asset constant
  const showcaseVideo = "/video/WhatsApp Video 2026-02-01 at 22.20.28.mp4";

  return (
    <section className="relative w-full overflow-hidden bg-white py-[10px] md:py-[20px] lg:py-[30px] flex flex-col items-center">
      {/* Container */}
      <div className="container relative flex justify-center px-4 md:px-6">
        {/* Video Wrapper */}
        <div className="relative w-full max-w-[1200px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#F1F5F9] bg-[#E5E5E5]">
          <video
            src={showcaseVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-white/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
