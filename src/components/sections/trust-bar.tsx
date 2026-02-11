import React from 'react'
import Image from 'next/image'

const TrustBar = () => {
  const avatars = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hF944J2HOWaKmZLpMGbhJD8cIw-4.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8-5.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VKINDhjTjVV27N30RcsciHrTtzw-6.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/dc8xaTir25CSGKnsIOaEcqnyqI-7.png"
  ]

  return (
    <div className="flex items-center justify-center py-4 md:py-10 px-4">
      <div 
        className="flex flex-col sm:flex-row items-center gap-2 px-4 py-2 bg-white border border-[#f1f5f9] rounded-2xl sm:rounded-full shadow-soft"
      >
        {/* Avatar Stack */}
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

        {/* Rating Text */}
        <div className="flex items-center gap-1.5 text-[13px] md:text-sm font-sans text-black whitespace-nowrap">
          <span className="flex items-center">
            <strong className="font-bold">4.9</strong>
            <span className="text-[#636363] mx-px">/</span>
            <span className="text-[#636363]">5 from</span>
          </span>
          <strong className="font-bold">4268</strong>
          <span className="text-[#636363]">customers</span>
          
          {/* Star Icon */}
          <div className="ml-0.5 flex items-center justify-center">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="#F9D423" 
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustBar