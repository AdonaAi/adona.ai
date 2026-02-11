"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  // Carousel images from provided assets
  const carouselImages = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Fz6qv5QZmds6Qh39sMvSXt9Ol8-2.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/2lDhebMM5B7y6CvPiEmlG1f9M-3.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/aL9C5ltzqcFiPCa5DVrGq4FIs-4.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/eWIjVW4b0TLuuUHmH6rHF9reY-5.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/aWQFal57NcVXySF19O04KNVVBnY-6.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VnWgMsLfKGF3zHUeddMZaVj49k-7.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/sMpDBAvPuoJepzHCTaELdXuxI-8.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VxJ7KOsKFFty8z9OSKnCp9SNfs-9.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/a8mDq40klzaVGMaarHzcRB5ic-10.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/HjIlmq0B9AjCCwAKnB0rAlFNA-11.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/ifruasr4kze8p6P0r2VMT6P1KZQ-12.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/7fd930EWGg2JKrJRsqhJp2Ls32I-13.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Ophna98ARWcI8ziY6WCza2h5XO0-14.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/8arw83ncKrbUw4l33V0Fju0Hd2M-15.png"
  ];

    return (
      <section className="relative pt-[140px] pb-[80px] md:pt-[180px] lg:pt-[220px] overflow-hidden bg-white" id="home">
        <div className="container mx-auto px-6 flex flex-col items-center">
          {/* Badge Pill */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-[#caf0f8] to-[#90e0ef] border border-[#48cae4] shadow-sm">
              <span className="text-[14px] md:text-[16px] font-bold text-[#03045e]">
                AI newsletter generator
              </span>
            </div>
          </div>
  
          {/* Headlines */}
          <div className="text-center max-w-[1000px] mb-12 z-10">
            <h1 className="mb-6 text-[48px] md:text-[72px] lg:text-[84px] font-[900] leading-[1.05] tracking-[-0.04em] font-display text-[#03045e] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
              Newsletters that sound like you - written and designed by AI
            </h1>
            <p className="text-gray-600 text-[18px] md:text-[22px] max-w-[720px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
              Turn your website into ready-to-send newsletters that match your brand tone, look, and goals. Create full campaigns in minutes.
            </p>
          </div>
  
          {/* CTA Button */}
          <div className="mb-20 z-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 fill-mode-both">
            <a
              href="https://adona.ai/pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1D1D1F] px-7 py-3.5 text-[16px] font-semibold text-white transition-all hover:bg-[#333] hover:shadow-lg"
              id="buynow-button-firstfold"
            >
              <span>Try now</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        {/* Dynamic Rotating Carousel - Continuous Rotation Animation */}
        <div className="relative w-full overflow-visible pb-32">
          <div className="relative h-[500px] md:h-[600px] flex justify-center items-center">
            <div
              className="absolute inset-0 flex justify-center items-center"
              style={{
                perspective: '2000px',
                perspectiveOrigin: '50% 50%'
              }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${rotation}deg)`,
                  transition: 'transform 0.05s linear'
                }}
              >
                {carouselImages.map((src, idx) => {
                  const angle = (360 / carouselImages.length) * idx;
                  const radius = 650;

                  return (
                    <div
                      key={idx}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      }}
                    >
                      <div
                        className="w-[180px] md:w-[290px] h-[280px] md:h-[460px] rounded-[24px] overflow-hidden shadow-2xl border-[1px] border-white/50 bg-white hover:scale-105 transition-transform duration-300"
                        style={{
                          transform: 'rotateY(180deg)',
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        <Image
                          src={src}
                          alt={`Newsletter preview ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 180px, 290px"
                          priority={idx < 3}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Gradient overlays for depth */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-0 top-0 bottom-0 w-[20%] bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-white via-white/90 to-transparent z-10" />
            </div>
          </div>
        </div>

        {/* Social Proof Pin */}
        <div className="flex items-center justify-center gap-4 mt-12 px-6 py-2 rounded-full border border-border bg-white/50 backdrop-blur-sm shadow-glass z-20 mb-20">
          <div className="flex -space-x-3">
            {[4, 13, 11, 12].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={`https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/${i === 4 ? 'dc8xaTir25CSGKnsIOaEcqnyqI-4.png' : i === 13 ? 'hF944J2HOWaKmZLpMGbhJD8cIw-13.jpeg' : i === 11 ? 'CDSoRipaV9Hpq0zdDkZvdZ5lQe8-11.png' : 'VKINDhjTjVV27N30RcsciHrTtzw-12.png'}`}
                  alt="Customer avatar"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-[14px] font-medium text-[#1a1a1a] flex items-center gap-1">
            <strong>4.9</strong>/5 from <strong>4268</strong> customers
            <svg width="18" height="18" viewBox="0 0 21 21" fill="none">
              <path d="M12.315 1.517L14.162 5.243C14.414 5.762 15.086 6.259 15.653 6.354L19.003 6.915C21.144 7.275 21.648 8.842 20.105 10.388L17.501 13.012C17.06 13.456 16.818 14.314 16.955 14.928L17.7 18.178C18.288 20.75 16.934 21.745 14.676 20.4L11.537 18.527C10.97 18.188 10.036 18.188 9.458 18.527L6.319 20.4C4.072 21.745 2.708 20.739 3.295 18.178L4.041 14.928C4.177 14.314 3.936 13.456 3.495 13.012L0.891 10.387C-0.642 8.841 -0.148 7.274 1.994 6.914L5.343 6.354C5.899 6.258 6.571 5.761 6.823 5.242L8.671 1.517C9.679 -0.506 11.317 -0.506 12.315 1.517Z" fill="#FEDF70"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;