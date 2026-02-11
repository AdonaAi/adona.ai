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
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E6E6E6] shadow-sm">
          <div className="flex -space-x-2">
            {[
              'hF944J2HOWaKmZLpMGbhJD8cIw.jpeg',
              'CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png',
              'VKINDhjTjVV27N30RcsciHrTtzw.png',
              'dc8xaTir25CSGKnsIOaEcqnyqI.png'
            ].map((img, i) => (
              <div key={i} className="h-7 w-7 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src={`https://framerusercontent.com/images/${img}?width=400&height=400`}
                  alt="Customer"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-[13px] font-medium text-[#1D1D1F]">
            <span className="font-bold">4.9</span>/5 from <span className="font-bold">4268</span> customers
          </p>
          <svg width="18" height="18" viewBox="0 0 21 21" fill="none">
            <path d="M12.315 1.517L14.162 5.243C14.414 5.762 15.086 6.259 15.653 6.354L19.003 6.915C21.144 7.275 21.648 8.842 20.105 10.388L17.501 13.012C17.06 13.456 16.818 14.314 16.955 14.928L17.7 18.178C18.288 20.75 16.934 21.745 14.676 20.4L11.537 18.527C10.97 18.188 10.036 18.188 9.458 18.527L6.319 20.4C4.072 21.745 2.708 20.739 3.295 18.178L4.041 14.928C4.177 14.314 3.936 13.456 3.495 13.012L0.891 10.387C-0.642 8.841 -0.148 7.274 1.994 6.914L5.343 6.354C5.899 6.258 6.571 5.761 6.823 5.242L8.671 1.517C9.679 -0.506 11.317 -0.506 12.315 1.517Z" fill="#FEDF70"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
