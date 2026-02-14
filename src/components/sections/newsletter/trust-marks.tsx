import React from 'react';
import Image from 'next/image';

/**
 * TrustMarks component
 * Cloned from the section below the hero carousel.
 * Includes VC Backed badge, OpenAI badge, and Customer Rating badge.
 */
const TrustMarks = () => {
  const avatars = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hF944J2HOWaKmZLpMGbhJD8cIw-18.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8-19.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VKINDhjTjVV27N30RcsciHrTtzw-20.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/dc8xaTir25CSGKnsIOaEcqnyqI-21.png"
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto px-6 mb-[120px]">
      <div className="flex flex-col sm:flex-row items-center gap-2 px-4 py-2 bg-white border border-[#f1f5f9] rounded-2xl sm:rounded-full shadow-soft">
        <div className="flex -space-x-2.5">
          {avatars.map((src, index) => (
            <div
              key={index}
              className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden flex-shrink-0"
              style={{ zIndex: avatars.length - index }}
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
        <div className="flex items-center gap-1.5 text-[13px] md:text-sm font-sans text-black whitespace-nowrap">
          <strong className="font-bold">3742+</strong>
          <span className="text-[#636363]">marketers love Adona Ai</span>
          <span className="text-[#636363] mx-2">|</span>
          <a href="#reviews" className="text-[#0077b6] font-medium hover:underline">View More</a>
        </div>
      </div>
    </div>
  );
};

export default TrustMarks;