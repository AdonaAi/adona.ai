import React from 'react';
import Image from 'next/image';

const SocialProof = () => {
  const avatars = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hF944J2HOWaKmZLpMGbhJD8cIw-17.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8-18.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VKINDhjTjVV27N30RcsciHrTtzw-19.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/dc8xaTir25CSGKnsIOaEcqnyqI-20.png"
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full pt-10 pb-16">
      {/* Floating Trust Badge */}
      <div 
        className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-[#E5E7EB] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-transform hover:scale-[1.02] cursor-default"
      >
        {/* Avatar Group */}
        <div className="flex -space-x-2.5">
          {avatars.map((src, index) => (
            <div 
              key={index} 
              className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-100"
            >
              <Image
                src={src}
                alt={`Customer avatar ${index + 1}`}
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Rating Text */}
        <div className="flex items-center gap-1.5 ml-1">
          <p className="text-[14px] font-medium text-[#1A1A1A] leading-none">
            <span className="font-bold">4.9</span>/5 from <span className="font-bold">4268</span> customers
          </p>
          
          {/* Gold Star */}
          <div className="flex items-center">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="#FFD700" 
              className="drop-shadow-sm"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;