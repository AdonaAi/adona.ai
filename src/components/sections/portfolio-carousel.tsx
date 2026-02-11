"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * PortfolioCarousel Component
 * Clones the "You've probably seen our work..." section with horizontal scrolling.
 */
export default function PortfolioCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const portfolioItems = [
    {
      type: "image",
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/OtG3QVd556Y1CNpNusIXZNhnmDQ-8.png",
      alt: "Glossier AI Generated Ad",
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
      alt: "Blume AI Generated Ad",
    },
    {
      type: "video",
      src: "https://framerusercontent.com/assets/5oh5EjBkJN2eRWRn6oY635xKc.mp4",
    },
    {
      type: "image",
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/bkgHLVwbBPeSUO0YXFmmv9FXv0-10.jpg",
      alt: "Marketing Asset",
    },
    {
      type: "video",
      src: "https://framerusercontent.com/assets/shnLEHynF8dwySofLxt8q77NOg.mp4",
    },
    {
      type: "image",
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Ap4kpxnd510KVF9Cq3cUc5mkAuk-11.png",
      alt: "Ecommerce Marketing Asset",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="features" 
      className="overflow-hidden bg-white"
      style={{ paddingTop: "140px", paddingBottom: "140px" }}
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1F1F1F]">
            You’ve probably seen our work. <br />
            You just didn’t know it was AI.
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="no-scrollbar flex gap-6 overflow-x-auto pb-10 scroll-smooth"
            style={{ 
              msOverflowStyle: 'none', 
              scrollbarWidth: 'none' 
            }}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: "360px",
                  height: "480px",
                  borderRadius: "32px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                }}
              >
                {item.type === "image" ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={item.src}
                      alt={item.alt || ""}
                      fill
                      className="object-cover"
                      sizes="360px"
                    />
                  </div>
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="mt-12 flex justify-end gap-3 px-4">
            <button
              onClick={() => scroll("left")}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#f0f0f0] bg-white transition-all hover:bg-[#f9f9fb] active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 text-[#1F1F1F]" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#f0f0f0] bg-white transition-all hover:bg-[#f9f9fb] active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 text-[#1F1F1F]" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}