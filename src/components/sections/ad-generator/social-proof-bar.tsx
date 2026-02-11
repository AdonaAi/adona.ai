import React from 'react';
import Image from 'next/image';

const SocialProofBar = () => {
  // Avatars from Assets list
  const avatars = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hF944J2HOWaKmZLpMGbhJD8cIw-12.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8-13.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VKINDhjTjVV27N30RcsciHrTtzw-14.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/dc8xaTir25CSGKnsIOaEcqnyqI-15.png"
  ];

  return (
    <div className="flex flex-col items-center gap-8 py-12">

      {/* Trust Rating Bar */}
      <div className="flex items-center gap-4 px-6 py-2 border border-[#F1F1F1] rounded-full bg-white shadow-soft">
        <div className="flex -space-x-2">
          {avatars.map((src, i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-[#F3F4F6]">
              <img src={src} alt={`Customer ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[14px] leading-none text-[#1A1A1A]">
            <span className="font-bold">4.9</span>/5 from <span className="font-bold">4268</span> customers
          </p>
          <div className="flex text-[#FFC107]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBar;