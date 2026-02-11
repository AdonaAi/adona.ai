import React from 'react';
import Image from 'next/image';

/**
 * BrandTrust Component
 * 
 * Customer rating section with avatars
 * 
 * Theme: Light
 */

const BrandTrust: React.FC = () => {
  // Avatar images from the HTML structure references
  const avatars = [
    "https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg?width=400&height=400",
    "https://framerusercontent.com/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png?width=400&height=400",
    "https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png?width=400&height=400",
    "https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png?width=400&height=400"
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12 w-full max-w-[1200px] mx-auto">

      {/* Customer Rating Section */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white border border-[#E5E5E5] rounded-[100px] px-6 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          {/* Avatar Pile */}
          <div className="flex -space-x-3">
            {avatars.map((src, index) => (
              <div 
                key={index} 
                className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-[#F9F9F9] relative z-[1]"
                style={{ zIndex: avatars.length - index }}
              >
                <Image
                  src={src}
                  alt={`Customer avatar ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="h-6 w-[1px] bg-[#E5E5E5] hidden md:block" />
            
            <div className="flex flex-col md:flex-row items-center gap-1.5">
              <div className="flex items-center text-[16px] text-[#1A1A1A]">
                <span className="font-bold underline decoration-2 decoration-[#8A79F2] underline-offset-2">4.9</span>
                <span className="mx-0.5 opacity-40">/</span>
                <span>5 from</span>
                <span className="font-bold ml-1 text-[#1A1A1A]">4268</span>
                <span className="ml-1 text-[#666666]">customers</span>
              </div>
              
              <div className="flex items-center gap-0.5 ml-1">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-4 h-4 text-[#F1C40F]" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandTrust;