import React, { useRef } from "react";
import Image from "next/image";

/**
 * WorkShowcase Component
 * 
 * Target section: "You’ve probably seen our work."
 * Features:
 * - Horizontal card slider with brand advertisements (Glossier, Blume, etc.)
 * - AI-generated content examples (Mix of images and videos)
 * - Navigation buttons for the slider
 * - High-quality visual treatments consistent with the "Clean Tech" aesthetic
 */

const showcaseItems = [
  {
    type: "image",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/OtG3QVd556Y1CNpNusIXZNhnmDQ-8.png",
    alt: "Glossier advertisement",
    width: 1024,
    height: 1536,
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
    alt: "Blume advertisement",
    width: 768,
    height: 1344,
  },
  {
    type: "video",
    src: "https://framerusercontent.com/assets/5oh5EjBkJN2eRWRn6oY635xKc.mp4",
  },
  {
    type: "image",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/bkgHLVwbBPeSUO0YXFmmv9FXv0-10.jpg",
    alt: "Brand advertisement example",
    width: 768,
    height: 1344,
  },
  {
    type: "video",
    src: "https://framerusercontent.com/assets/shnLEHynF8dwySofLxt8q77NOg.mp4",
  },
  {
    type: "image",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Ap4kpxnd510KVF9Cq3cUc5mkAuk-11.png",
    alt: "AI generated product shot",
    width: 896,
    height: 1152,
  },
];

const WorkShowcase: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="features"
      className="bg-white pt-[40px] md:pt-[60px] lg:pt-[80px] pb-0 overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Headline */}
        <div className="flex flex-col items-center mb-10 md:mb-16 lg:mb-[80px]">
          <div className="text-center px-4">
            <h2 className="text-[32px] md:text-[48px] font-bold leading-[1.2] tracking-[-0.03em] text-black">
              Enabling brands to scale performance through advanced creative automation.
            </h2>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 px-4 -mx-4 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {showcaseItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] aspect-[3/4] rounded-[24px] overflow-hidden bg-[#f9fafb] border border-[#F1F5F9] shadow-soft snap-start transition-transform hover:scale-[1.02] duration-300"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src!}
                    alt={item.alt || "Showcase work"}
                    width={item.width || 400}
                    height={item.height || 600}
                    className="w-full h-full object-cover"
                    loading="lazy"
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
          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E5E7EB] hover:bg-[#D1D5DB] transition-colors"
              aria-label="Previous slide"
            >
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/svgs/ZOaVMFinwyGanwZYIqVYV7HhxQ-1.svg"
                alt="Previous"
                className="w-8 h-8"
              />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E5E7EB] hover:bg-[#D1D5DB] transition-colors"
              aria-label="Next slide"
            >
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/svgs/tCe5fAeGAbaNrHq7anRgKs0CY-2.svg"
                alt="Next"
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .h2-sub {
          color: rgba(0, 0, 0, 0.8);
        }
        @media (max-width: 809.98px) {
          .h2-sub {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkShowcase;