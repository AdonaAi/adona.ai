import React from 'react';
import Image from 'next/image';

const SocialProof = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-6 sm:px-10 bg-[#fafafa]">

      <div className="flex items-center bg-white/50 backdrop-blur-sm px-6 py-2.5 rounded-full border border-[#e6e6e6] shadow-sm">
        <div className="flex -space-x-3 mr-4">
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hF944J2HOWaKmZLpMGbhJD8cIw-17.jpeg"
              alt="Customer"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8-18.png"
              alt="Customer"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VKINDhjTjVV27N30RcsciHrTtzw-19.png"
              alt="Customer"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/dc8xaTir25CSGKnsIOaEcqnyqI-20.png"
              alt="Customer"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-[14px] text-black">
          <span className="font-bold">4.9</span>
          <span className="text-black/60 mx-0.5">/5</span> from <span className="font-bold">4268</span> customers
        </div>

        <div className="ml-2 flex text-yellow-400">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
