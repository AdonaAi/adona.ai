import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * FinalCTA Component
 * 
 * This component clones the bottom call-to-action section of the adona.ai website.
 * It features a large centered heading, a secondary caption, and the signature 
 * pink-to-orange gradient pill button.
 */
export default function FinalCTA() {
  return (
    <section className="bg-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 pb-0 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center justify-center text-center">
      <div className="container max-w-[1200px] flex flex-col items-center gap-8 sm:gap-10 md:gap-12">

        {/* Main Content Stack */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#03045e] px-4 max-w-[900px]">
            Start Generating High Quality Content Now
          </h2>
        </div>

        {/* CTA Button */}
        <a
          href="https://adona.ai/pricing"
          className="group relative flex items-center justify-center gap-2 px-7 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full overflow-hidden transition-transform duration-200 hover:scale-[1.03] bg-gradient-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8] shadow-[0_10px_40px_rgba(0,119,182,0.3)]"
        >
          {/* Subtle overlay for richness */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

          <span className="relative z-10 text-white font-bold text-sm sm:text-base md:text-lg lg:text-[17px] leading-[1.2]">
            Buy now
          </span>

          <ArrowRight
            className="relative z-10 text-white w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>

        {/* Video Preview - Seamless with website */}
        <div className="w-full max-w-[900px] mt-6 sm:mt-8 mb-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl sm:rounded-[24px]"
          >
            <source src="/video/hero section video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  );
}