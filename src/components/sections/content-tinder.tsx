import React from 'react';
import Image from 'next/image';

/**
 * Section: Fill Your Content Calendar, 3 Months In Advance
 * Features: High-impact typography, subtext, and a playful "Tinder for content" pill illustration.
 */
export default function ContentTinderSection() {
  return (
    <section className="bg-white py-[20px] px-10 md:px-20 lg:px-0">
      <div className="container max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-[500px]">
            {/* Small Label */}
            <span className="text-[#666666] text-[14px] font-medium mb-4 block">
              Unlimited Creative Ideas for Ads and Social Media
            </span>

            {/* Heading */}
            <h2 className="text-[32px] md:text-[40px] font-bold text-black leading-[1.1] tracking-[-0.03em] mb-6 font-sans">
              Build a 3 Month Content Plan in Minutes
            </h2>

            {/* Subtext */}
            <p className="text-[18px] md:text-[20px] text-[#666666] leading-[1.6] mb-10 font-sans">
              Adona operates continuously behind the scenes, producing campaign-ready visuals and content. Each asset is refined to match your brand standards and performance goals. This enables you to move from review to launch in hours, not weeks.
            </p>

            {/* Tinder-like Illustration Badge/Pill */}
            <div className="bg-white border border-[#f1f5f9] rounded-[24px] p-4 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-transform duration-300 hover:translate-y-[-2px] max-w-full sm:max-w-fit">
              <div className="relative w-[64px] h-[64px] flex-shrink-0 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/mascot-character.jpeg"
                  alt="adona.ai Mascot"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#f1c40f] text-[12px] font-bold uppercase tracking-wide">
                  Find your best-performing content with a simple swipe.
                </span>
                <p className="text-[14px] text-black font-semibold leading-tight mt-1">
                  Swipe, select, and launch your best creatives.
                </p>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div className="w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] h-[600px]">
              <video
                src="/video/hp gif adona.mp4"
                loop
                preload="auto"
                muted
                playsInline
                autoPlay
                className="w-full h-full object-contain rounded-[24px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}