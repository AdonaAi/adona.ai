import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * Hero component for Holo website
 * Featuring:
 * - Centered badge "AI for Marketing"
 * - Large bold headline
 * - Descriptive paragraph
 * - Gradient CTA button
 * - Trust badges (Backed by VC, Powered by OpenAI)
 * - Video mockup preview
 */
export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center pt-[120px] sm:pt-[140px] md:pt-[160px] lg:pt-[200px] xl:pt-[220px] pb-[10px] sm:pb-[15px] md:pb-[20px] overflow-hidden bg-white">
      <div className="container relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-10">

        {/* Badge */}
        <div className="mb-6 sm:mb-7 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center px-4 sm:px-5 md:px-7 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-[#caf0f8] border border-[#90e0ef] shadow-sm">
            <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] font-bold tracking-tight text-[#03045e]">
              AI for Marketing
            </span>
          </div>
        </div>

        <h1 className="mb-6 sm:mb-7 md:mb-8 text-[32px] xs:text-[38px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-[900] leading-[1.1] tracking-[-0.02em] font-display text-[#03045e] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 max-w-[1000px] mx-auto px-2 sm:px-4 md:px-0">
          Multiply Your Content with AI-Powered
          <span className="block mt-1 sm:mt-2 text-[#0077b6] lg:text-[84px]">Conversion Driven Creatives.</span>
        </h1>

        {/* Sub-headline */}
        <p className="mb-10 sm:mb-11 md:mb-12 max-w-[680px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[1.6] text-gray-600 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 px-4 sm:px-6 md:px-0">
          Create high-performing ads, emails, and social posts optimized for higher conversions and measurable results.
        </p>

        {/* Primary CTA Button */}
        <div className="mb-10 sm:mb-12 md:mb-14 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <Link
            href="/pricing"
            id="buynow-button-firstfold"
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-[14px] sm:text-[16px] md:text-[18px] font-bold text-white rounded-full bg-gradient-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(0,119,182,0.4)] tracking-wide">
            Buy now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Powered By Badge */}
        <div className="mb-8 sm:mb-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400 flex items-center justify-center gap-3">
          <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
            <Image
              src="https://framerusercontent.com/images/GyeA4IFDAYocEXBquIG7v6HrA.png"
              alt="OpenAI Logo"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <div className="h-4 w-[1px] bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <span className="text-[13px] sm:text-[14px] font-bold text-gray-700">Powered by OpenAI</span>
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            <span className="text-[13px] sm:text-[14px] font-medium text-gray-500">Leading AI model</span>
          </div>
        </div>



        {/* Video Mockup Container */}
        <div className="w-full max-w-[1100px] mt-3 sm:mt-4 px-2 sm:px-4 md:px-0 perspective-1000 animate-in fade-in zoom-in-95 duration-1000 delay-700">
          <div className="relative rounded-[16px] sm:rounded-[20px] md:rounded-[32px] overflow-hidden transform transition-transform duration-700">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[24px]">

              <source src="/video/hero section video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] sm:w-[45%] md:w-[40%] h-[50%] sm:h-[45%] md:h-[40%] bg-[#caf0f8] blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full"></div>
        <div className="absolute top-[-15%] right-[-5%] w-[50%] sm:w-[45%] md:w-[40%] h-[50%] sm:h-[45%] md:h-[40%] bg-[#90e0ef] blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full"></div>
      </div>
    </section>);

}