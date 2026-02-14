"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [rotation, setRotation] = useState(0);

  // 3D Carousel images from Framer reference
  const carouselImages = [
    "https://framerusercontent.com/images/JR0ksVh6cXuiY9ksTcrvTVS5o.gif",
    "https://framerusercontent.com/images/NEYhzCSjxTQwtw42QXuV95vNic.png",
    "https://framerusercontent.com/images/Z0jhLiMYbtuDYqq7mMjr3cI54.png",
    "https://framerusercontent.com/images/ce6tRygJ5r3FUvo1nI4g3AWeo.png",
    "https://framerusercontent.com/images/fcfnO91zY16j8shryxD9VsX8k.gif",
    "https://framerusercontent.com/images/HU0nI7P5WoQ2PLUoIJVLAzx2D4.png",
    "https://framerusercontent.com/images/BfdkPzlU3aGN2ZgLTcfWY1gVcRg.png",
    "https://framerusercontent.com/images/7aXUDhUZOASh4CP1YXsV8MHpM8.gif",
    "https://framerusercontent.com/images/ntZ5VfMtQVYge7rjBZAevcOsA.gif",
    "https://framerusercontent.com/images/Rs5KiaR03VARbQIF55y3F2ds8.png",
    "https://framerusercontent.com/images/1OCwWvOCusL41tD46HVbLRU6EqE.gif",
    "https://framerusercontent.com/images/23DvXZCbYd5Rt5Id8TrK1t00ALU.gif",
    "https://framerusercontent.com/images/vFnfg2196KxemZoUwnsOyDO4E.gif",
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev - 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, []);

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
            <span className="text-[14px] font-bold text-[#03045e]">Instagram Ad Maker</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1D1D1F] animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Create Instagram ad creatives 75% faster
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-[650px] text-[17px] md:text-[19px] leading-[1.6] text-[#6E6E73] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          adona.ai&apos;s Instagram Ad Maker creates feed, story, and reels ads based on your website. No design hassle, just great ads every time.
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
                  className="w-[100px] md:w-[150px] h-[150px] md:h-[220px] rounded-2xl overflow-hidden shadow-2xl bg-white"
                  style={{
                    transform: 'rotateY(90deg) translateZ(350px)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <Image
                    src={item.src}
                    alt={`Instagram Ad Example ${index + 1}`}
                    width={150}
                    height={220}
                    className="w-full h-full object-cover"
                    draggable="false"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="relative z-20 mt-8 flex items-center justify-center w-full px-4">
        {/* Customer Rating Badge */}
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#E6E6E6] shadow-sm">
          <div className="flex -space-x-2.5">
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
};

export default HeroSection;
