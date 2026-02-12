"use client";

import React from 'react';
import Image from 'next/image';

const BrandDNA = () => {
  return (
    <section className="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 bg-white overflow-hidden" id="your-brand-dna">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Headline + Sub-headline */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 gap-3 sm:gap-4">
          {/* Powered By Badge */}
          <div
            className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-medium"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #03045e 0%, #0077b6 50%, #00b4d8 100%) border-box',
              border: '1.5px solid transparent'
            }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #03045e 0%, #0077b6 50%, #00b4d8 100%)'
              }}
            >
              Powered By
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1d1d1f] px-4">
            Your Brand's Creative Blueprint
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-[18px] text-[#6e6e73] max-w-[480px] leading-[1.6] px-4">
            By understanding your brand and your audience, our AI creates content that feels authentic and effective.
          </p>
        </div>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1fr] gap-4 sm:gap-5 items-stretch">

          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-5 relative z-20">
            {/* Captures Your Style */}
            <div className="flex flex-col bg-white border border-[#e5e5ea] rounded-2xl sm:rounded-[20px] p-5 sm:p-6 flex-1">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-semibold text-[#1d1d1f] mb-2 leading-[1.3]">
                Reflects Your Style
              </h3>
              <p className="text-[#6e6e73] text-sm sm:text-[14px] leading-[1.6] mb-4">
                Understands your creative vision to ensure every asset reflects your team's standards.
              </p>
              {/* 5 Gradient Circles */}
              <div className="flex gap-1 sm:gap-1.5 mt-auto">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#3b82f6]" />
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#8b5cf6]" />
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#ec4899]" />
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#f97316]" />
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#fb7185]" />
              </div>
            </div>

            {/* Learns Buying Triggers */}
            <div className="flex flex-col bg-white border border-[#e5e5ea] rounded-2xl sm:rounded-[20px] p-5 sm:p-6 flex-1">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-semibold text-[#1d1d1f] mb-2 leading-[1.3]">
                Your Data, Fully Protected
              </h3>
              <p className="text-[#6e6e73] text-sm sm:text-[14px] leading-[1.6] mb-4">
                Your brand data remains private and secure. It is never shared, reused, or used to train external models.
              </p>
              {/* 3 Small Icons */}
              <div className="flex gap-2 sm:gap-3 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10">
                  <Image
                    src="https://framerusercontent.com/images/TB0iaXEOimB4w985KL59x8Yqac.png"
                    width={40}
                    height={40}
                    alt=""
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10">
                  <Image
                    src="https://framerusercontent.com/images/Fn01ZJFwqDXKKhz5yJzgvYK4BLw.png"
                    width={40}
                    height={40}
                    alt=""
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10">
                  <Image
                    src="https://framerusercontent.com/images/pb6g8Sx6fWVKqgz8ob7zqFXZWWc.png"
                    width={40}
                    height={40}
                    alt=""
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              </div>
              {/* Gradient Progress Bar */}
              <div
                className="h-2.5 sm:h-3 rounded-full w-full max-w-[180px] sm:max-w-[220px] mt-auto"
                style={{
                  background: 'linear-gradient(90deg, #ef4444 0%, #f97316 25%, #eab308 50%, #84cc16 75%, #22c55e 100%)'
                }}
              />
            </div>
          </div>

          {/* Center - 3D Robot Character */}
          <div className="flex items-center justify-center py-6 sm:py-8 lg:py-0 relative z-10">
            {/* Wrapper with reasonable width to preserve grid layout */}
            <div className="relative w-[250px] h-[350px] sm:w-[300px] sm:h-[400px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px]">
              {/* Absolutley positioned OVERSIZED video container that overflows visually */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] sm:w-[600px] sm:h-[700px] md:w-[750px] md:h-[850px] lg:w-[900px] lg:h-[1000px] pointer-events-none">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src="/video/WhatsApp%20Video%202026-02-02%20at%2001.10.51.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 sm:gap-5 relative z-20">
            {/* Knows Your Audience */}
            <div className="flex flex-col bg-white border border-[#e5e5ea] rounded-2xl sm:rounded-[20px] p-5 sm:p-6 flex-1">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-semibold text-[#1d1d1f] mb-2 leading-[1.3]">
                Recognizes Conversion Drivers
              </h3>
              <p className="text-[#6e6e73] text-sm sm:text-[14px] leading-[1.6] mb-4">
                Our AI studies customer intent to create more persuasive, conversion-focused content.
              </p>
              {/* Social Media Icons Row */}
              <div className="flex gap-1.5 sm:gap-2 mt-auto">
                <div className="w-8 h-8 sm:w-9 sm:h-9">
                  <Image
                    src="https://framerusercontent.com/images/VaGhYIlCjricGWnHisivyig9Ok.png"
                    width={36}
                    height={36}
                    alt="Facebook"
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9">
                  <Image
                    src="https://framerusercontent.com/images/HAFgG65Xh515eO6eEtCCRkOo2AM.png"
                    width={36}
                    height={36}
                    alt="X"
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9">
                  <Image
                    src="https://framerusercontent.com/images/S1qpQvKTIyupla3TrirFPI4Ybs.png"
                    width={36}
                    height={36}
                    alt="Instagram"
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9">
                  <Image
                    src="https://framerusercontent.com/images/ds0gjjp6jiKAirdsuFd6ufdiU.png"
                    width={36}
                    height={36}
                    alt="TikTok"
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9">
                  <Image
                    src="https://framerusercontent.com/images/zDOwxSWhNTga6kROlzhHlvDfHY.png"
                    width={36}
                    height={36}
                    alt="Email"
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Keeps Data Private */}
            <div className="flex flex-col bg-white border border-[#e5e5ea] rounded-2xl sm:rounded-[20px] p-5 sm:p-6 flex-1">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-semibold text-[#1d1d1f] mb-2 leading-[1.3]">
                Learns Your Customers
              </h3>
              <p className="text-[#6e6e73] text-sm sm:text-[14px] leading-[1.6] mb-4">
                Understands your customers' mindset, behavior, and challenges to create content that resonates.
              </p>
              {/* 100% Guarantee Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#e5e5ea] bg-white w-fit mt-auto">
                <div className="w-4 h-4 sm:w-5 sm:h-5">
                  <Image
                    src="https://framerusercontent.com/images/vAmDKxAewlD2VfNUg3sqeOHHw.png"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                    alt="Lock"
                    unoptimized
                  />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-[#1d1d1f]">100% guarantee</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandDNA;