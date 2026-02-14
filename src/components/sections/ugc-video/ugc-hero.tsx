"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function UGCHero() {
  const [rotation, setRotation] = useState(0);

  // UGC Video carousel images
  const carouselImages = [
    "https://framerusercontent.com/images/MUCvkuQweY903fktZ47rIX7lONg.mp4",
    "https://framerusercontent.com/images/eNUFze2CrR1GX4BZVWk8AOq8yU.mp4",
    "https://framerusercontent.com/images/p3Ow7OzzhAKaSauO9xXphdbcySA.mp4",
    "https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg",
    "https://framerusercontent.com/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png",
    "https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png",
    "https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png",
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev - 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const isVideo = (src: string) => src.endsWith('.mp4') || src.endsWith('.webm');

  const items = carouselImages.map((src, index) => ({
    src,
    angle: (360 / carouselImages.length) * index
  }));

  return (
    <section
      id="home"
      className="relative flex flex-col items-center pt-[120px] pb-[40px] md:pt-[140px] lg:pt-[160px] overflow-hidden bg-white"
      style={{ minHeight: '950px' }}
    >
      {/* Heading Section */}
      <div className="container relative z-10 mx-auto px-6 text-center max-w-[900px]">
        {/* Badge */}
        <div className="mb-6 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="rounded-full bg-gradient-to-r from-[#caf0f8] to-[#90e0ef] border border-[#48cae4] px-5 py-2 shadow-sm">
            <span className="text-[14px] font-bold text-[#03045e]">AI UGC Video Generator</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1D1D1F] animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Create UGC videos 75% faster
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-[650px] text-[17px] md:text-[19px] leading-[1.6] text-[#6E6E73] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          adona.ai&apos;s UGC Generator creates authentic user-generated content based on your website. No creators needed, just real-looking videos.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <a
            href="https://adona.ai/pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-[#1D1D1F] px-7 py-3.5 text-[16px] font-semibold text-white transition-all hover:bg-[#333] hover:shadow-lg"
          >
            <span>Try now</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* 3D Rotating Carousel */}
      <div className="relative mt-12 w-full h-[400px] md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${rotation}deg)`
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translateX(-50%) translateY(-50%) rotateY(${item.angle}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  className="w-[100px] md:w-[130px] h-[178px] md:h-[231px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
                  style={{
                    transform: 'rotateY(90deg) translateZ(350px)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {isVideo(item.src) ? (
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={`UGC Example ${index + 1}`}
                      width={150}
                      height={220}
                      className="w-full h-full object-cover"
                      draggable="false"
                      unoptimized
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="relative z-20 mt-8 flex items-center justify-center w-full px-4">
        {/* Customer Rating Badge */}
        {/* Customer Rating Badge */}
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#E6E6E6] shadow-sm">
          <div className="flex -space-x-2.5">
            {[
              "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hF944J2HOWaKmZLpMGbhJD8cIw-17.jpeg",
              "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8-18.png",
              "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VKINDhjTjVV27N30RcsciHrTtzw-19.png",
              "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/dc8xaTir25CSGKnsIOaEcqnyqI-20.png"
            ].map((src, index) => (
              <div
                key={index}
                className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden flex-shrink-0"
                style={{ zIndex: 4 - index }}
              >
                <Image
                  src={src}
                  alt={`Customer ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-[13px] font-sans text-[#1D1D1F] whitespace-nowrap">
            <strong className="font-bold">3742+</strong>
            <span className="text-[#666666] mx-1">marketers love Adona Ai</span>
            <span className="text-[#666666] mx-2">|</span>
            <a href="#reviews" className="text-[#0077b6] font-medium hover:underline">View More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
