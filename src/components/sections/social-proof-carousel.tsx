"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const avatars = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hF944J2HOWaKmZLpMGbhJD8cIw-4.jpeg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8-5.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VKINDhjTjVV27N30RcsciHrTtzw-6.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/dc8xaTir25CSGKnsIOaEcqnyqI-7.png",
];

const carouselItems = [
  {
    type: "image",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/OtG3QVd556Y1CNpNusIXZNhnmDQ-8.png",
    alt: "Marketing asset 1",
  },
  {
    type: "video",
    src: "https://framerusercontent.com/assets/hVwUCh3UvKMPuZNvp2daTbuNEtQ.mp4",
  },
  {
    type: "video",
    src: "https://framerusercontent.com/assets/5elpXVUcTQVL0L3WdsbfL7TnEE.mp4",
  },
  {
    type: "image",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/OgyYpZJTlJLNX1MxPTijFzo8xM-9.jpg",
    alt: "Marketing asset 2",
  },
];

export default function SocialProofCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.8
          : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-[60px] md:py-[120px] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Customer Rating Bar */}
        <div className="flex flex-col items-center mb-20">
          <div
            className="flex items-center gap-3 bg-white border border-[#EDEDED] rounded-full py-1.5 px-4 shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
            style={{ width: "fit-content" }}
          >
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Customer ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-[14px] font-medium tracking-tight text-[#000000]">
              <strong className="font-bold">3742+</strong>
              <span className="text-[#636363] mx-1">marketers love Adona Ai</span>
              <span className="text-[#636363] mx-2">|</span>
              <a href="#reviews" className="text-[#0077b6] font-medium hover:underline">View More</a>
            </div>
          </div>

          {/* Headline */}
          <div className="mt-16 text-center max-w-[800px]">
            <h2 className="text-[32px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#000000]">
              You’ve probably seen our work.<br />
              You just didn’t know it was AI.
            </h2>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-12"
          >
            {/* Double the items for infinite-feeling scroll effect */}
            {[...carouselItems, ...carouselItems].map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[280px] md:w-[380px] aspect-[3/4] rounded-[24px] overflow-hidden border border-[#EDEDED] snap-center shadow-lg"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-end gap-3 mt-4 pr-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-[#f7f7f7] border border-[#EDEDED] text-[#000000] hover:bg-[#EDEDED] transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-[#f7f7f7] border border-[#EDEDED] text-[#000000] hover:bg-[#EDEDED] transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}