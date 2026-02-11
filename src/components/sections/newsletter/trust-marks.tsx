import React from 'react';
import Image from 'next/image';

/**
 * TrustMarks component
 * Cloned from the section below the hero carousel.
 * Includes VC Backed badge, OpenAI badge, and Customer Rating badge.
 */
const TrustMarks = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto px-6 mb-[120px]">

      {/* Customer Rating Badge */}
      <div 
        className="flex items-center gap-4 px-5 py-2.5 rounded-full border border-[#f2f2f2] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
      >
        {/* Avatars */}
        <div className="flex -space-x-3">
          {[
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hF944J2HOWaKmZLpMGbhJD8cIw-18.jpeg",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8-19.png",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VKINDhjTjVV27N30RcsciHrTtzw-20.png",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/dc8xaTir25CSGKnsIOaEcqnyqI-21.png"
          ].map((url, index) => (
            <div 
              key={index} 
              className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200"
            >
              <Image 
                src={url} 
                alt={`Customer ${index + 1}`} 
                width={32} 
                height={32} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Rating Text */}
        <div className="flex items-center text-[15px] text-[#1a1a1a] font-medium">
          <span className="font-bold">4.9</span>
          <span className="mx-0.5 text-[#666666]">/</span>
          <span className="text-[#666666]">5 from&nbsp;</span>
          <span className="font-bold">4268</span>
          <span className="text-[#666666] ml-1">customers</span>
          
          {/* Star Icon */}
          <svg 
            viewBox="0 0 24 24" 
            fill="#FFD700" 
            className="w-4 h-4 ml-2"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrustMarks;