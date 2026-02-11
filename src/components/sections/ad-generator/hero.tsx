import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center pt-[80px] pb-[40px] sm:pt-[100px] sm:pb-[50px] md:pt-[120px] md:pb-[60px] lg:pt-[140px] xl:pt-[160px] overflow-hidden bg-[#FCFCFC] px-4 sm:px-6"
    >
      {/* Centered Badge */}
      <div className="flex justify-center mb-6 sm:mb-7 md:mb-8">
        <div className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#caf0f8] border border-[#90e0ef] shadow-sm">
          <span className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#03045e] tracking-tight">
            AI ad generator
          </span>
        </div>
      </div>

      {/* Headline */}
      <h1 className="max-w-[900px] px-4 text-center mb-6 sm:mb-7 md:mb-8 bg-clip-text text-[#03045e] text-[clamp(32px,6vw,80px)] sm:text-[clamp(40px,7vw,80px)] md:text-[clamp(48px,8vw,80px)] font-[800] leading-[1.1] tracking-[-0.04em]">
        Scroll-Stopping Ads. No Creative Team Needed.
      </h1>

      {/* Subheadline */}
      <p className="max-w-[640px] px-4 text-center mb-8 sm:mb-9 md:mb-10 text-gray-600 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-normal leading-relaxed">
        adona.ai is the AI ad maker that learns your brand and generates authentic, high-performing ads - faster and cheaper than hiring an agency.
      </p>

      {/* Primary CTA */}
      <div className="flex justify-center mb-16 sm:mb-20 md:mb-24">
        <a 
          href="https://adona.ai/pricing" 
          className="btn-primary group"
        >
          <span className="text-[16px] font-semibold">Try now</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Dynamic Ad Creative Section - Overlapping Layout */}
      <div className="relative w-full max-w-[1400px] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex justify-center items-center pointer-events-none">

        {/* Left Side Large Ad */}
        <div className="absolute left-[-15%] sm:left-[-10%] md:left-[5%] z-20 w-[180px] sm:w-[240px] md:w-[320px] lg:w-[380px] rotate-[-5deg] transition-transform hover:rotate-0 duration-500">
          <div className="rounded-[32px] overflow-hidden shadow-soft border border-[#F1F1F1] bg-white">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/xbAN3vfAFtKikDsnNHzeVSB7TMU-2.png" 
              alt="Blume Ad Creative" 
              width={760} 
              height={1140}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Center Group - Overlapping Verticals */}
        <div className="relative z-30 flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 scale-75 sm:scale-85 md:scale-90 lg:scale-100">
          {/* Vertical Ad 1 */}
          <div className="w-[120px] sm:w-[140px] md:w-[180px] lg:w-[220px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden shadow-soft border border-[#F1F1F1] bg-white translate-y-8 sm:translate-y-10 md:translate-y-12">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Mil4kxO8daLsRaDA0SRr3hJn4Ts-3.png" 
              alt="Ad Creative 1" 
              width={440} 
              height={770}
              className="w-full h-auto"
            />
          </div>
          
          {/* Vertical Ad 2 (Video) */}
          <div className="w-[120px] sm:w-[140px] md:w-[180px] lg:w-[220px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden shadow-soft border border-[#F1F1F1] bg-white">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto object-cover aspect-[9/16]"
            >
              <source src="https://framerusercontent.com/assets/n9iLPSIyAEodI5aDgKr4g9Ead0Q.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Vertical Ad 3 */}
          <div className="w-[120px] sm:w-[140px] md:w-[180px] lg:w-[220px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden shadow-soft border border-[#F1F1F1] bg-white translate-y-6 sm:translate-y-7 md:translate-y-8">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hkPxH7Eldn0B8CVgjpjTwZrjNWg-4.png" 
              alt="Ad Creative 3" 
              width={512} 
              height={768}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side Large Ad */}
        <div className="absolute right-[-15%] sm:right-[-10%] md:right-[5%] z-20 w-[180px] sm:w-[240px] md:w-[340px] lg:w-[420px] rotate-[5deg] transition-transform hover:rotate-0 duration-500">
          <div className="rounded-[32px] overflow-hidden shadow-soft border border-[#F1F1F1] bg-[#1a1a1a]">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto object-cover"
            >
              <source src="https://framerusercontent.com/assets/DeZMPnmoc8qBNVJkDbSobBTAM.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>

      {/* Trust Badges */}
      <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col items-center gap-6 sm:gap-7 md:gap-8 px-4">
        {/* Customer Proof */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-[#F1F1F1] shadow-soft">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                <Image
                  src={`https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg`}
                  alt="Customer avatar"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-[13px] sm:text-[14px] md:text-[15px] text-[#1A1A1A] text-center sm:text-left">
            <span className="font-bold">4.9</span>/5 from <span className="font-bold">4268</span> customers
            <span className="ml-2">⭐</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;