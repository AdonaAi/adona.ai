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
    </div>
  );
};

export default BrandTrust;