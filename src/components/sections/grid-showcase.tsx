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
  const showcaseVideo = "https://framerusercontent.com/assets/u58pzFhEjQ87uMCyL3ZhRBuXqU.mp4";

  return (
    <section className="relative w-full overflow-hidden bg-white py-[10px] md:py-[20px] lg:py-[30px] flex flex-col items-center">
      {/* Container for the perspective effect */}
      <div className="container relative flex justify-center">

        {/* The Perspective Wrapper */}
        <div
          className="relative w-full lg:w-[130%] pointer-events-none"
          style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* The Warped Grid Surface */}
          <div
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] bg-[#E5E5E5] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#F1F5F9] md:[transform:rotateX(55deg)_scale(1)_translateY(-10%)!important]"
            style={{
              transform: 'rotateX(25deg) scale(0.95) translateY(0%)',
              transformOrigin: 'center center',
            }}
          >
            {/* Background Grid Pattern / Placeholders */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-6 p-8">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-[#D9D9D9] bg-opacity-40 rounded-[20px] w-full h-full"
                />
              ))}
            </div>

            {/* Content Video - This fills the surface */}
            <div className="absolute inset-0 z-10 overflow-hidden rounded-[32px]">
              <video
                src={showcaseVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gradient Overlay for Fade and Depth */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-white/20 via-transparent to-transparent" />
          </div>

          {/* Central Play Button UI - Positioned absolute relative to the perspective container but counter-transformed */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto">
            <div className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M19 11L1 21V1L19 11Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Caption Text */}
      <div className="mt-[-20px] md:mt-[-40px] z-40 text-center">
        <p className="text-[14px] md:text-[16px] font-semibold text-black tracking-tight font-sans">
          One for All Marketing Content.
        </p>
      </div>

      {/* Decorative Blur and Soft Shadow at Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[100px] bg-gradient-to-t from-white via-white/80 to-transparent z-40" />
    </section>
  );
}
