import React from 'react';
import Image from 'next/image';

const SocialProofBanner = () => {
  // Avatars from the provided assets list
  const avatars = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hF944J2HOWaKmZLpMGbhJD8cIw-17.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8-18.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VKINDhjTjVV27N30RcsciHrTtzw-19.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/dc8xaTir25CSGKnsIOaEcqnyqI-20.png"
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center pt-[40px] pb-[80px] bg-white">

      {/* Customer Rating */}
      <div className="flex items-center justify-center gap-4 py-3 px-6 rounded-full border border-[#F1F1F1] bg-white shadow-adona">
        {/* Avatars Overlap */}
        <div className="flex -space-x-2.5">
          {avatars.map((avatar, index) => (
            <div 
              key={index} 
              className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden"
            >
              <Image
                src={avatar}
                alt={`Customer avatar ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Rating Text */}
        <div className="flex items-center gap-2">
          <p className="text-[15px] font-medium text-[#121212] font-sans">
            <span className="font-bold">4.9</span>/5 from <span className="font-bold">4268</span> customers
          </p>
          <div className="flex items-center">
             <svg 
              viewBox="0 0 24 24" 
              className="w-4 h-4 text-[#f1c40f] fill-current"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBanner;