import React from 'react';
import Image from 'next/image';

/**
 * ReviewsBar Component
 * 
 * Clones the social proof bar displaying mini customer avatars, 
 * a 4.9/5 star rating, and total customer count with a centered layout.
 * 
 * Location: Part of the Hero section, typically below the main CTA.
 */

const ReviewsBar: React.FC = () => {
  // Assets from provided list
  const avatars = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hF944J2HOWaKmZLpMGbhJD8cIw-4.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8-5.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VKINDhjTjVV27N30RcsciHrTtzw-6.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/dc8xaTir25CSGKnsIOaEcqnyqI-7.png"
  ];

  return (
    <div className="flex justify-center items-center py-8 w-full">
      <div
        className="flex items-center gap-3 px-4 py-2 border border-[#f0f0f0] rounded-full bg-white transition-all duration-300"
        style={{
          boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* Avatar Stack */}
        <div className="flex -space-x-3 items-center">
          {avatars.map((src, index) => (
            <div
              key={index}
              className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden flex-shrink-0"
              style={{ zIndex: avatars.length - index }}
            >
              <Image
                src={src}
                alt={`Customer ${index + 1}`}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          ))}
        </div>



        {/* Text Content */}
        <div className="flex items-center gap-1.5 text-[14px] leading-none text-[#1a1a1a] font-medium font-sans">
          <strong className="font-bold">3742+</strong>
          <span className="text-[#636363] mx-1">marketers love Adona Ai</span>
          <span className="text-[#636363] mx-2">|</span>
          <a href="#reviews" className="text-[#0077b6] font-medium hover:underline">View More</a>
        </div>
      </div>
    </div>
  );
};

export default ReviewsBar;