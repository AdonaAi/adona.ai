import React from 'react';
import Image from 'next/image';

/**
 * LanguagesGrid Section
 * 
 * Clones the dense grid of national flag icons surrounding the "99+ languages" text.
 * Based on the visual analysis of provided screenshots and design system.
 */

const flagUrls = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/pb6g8Sx6fWVKqgz8ob7zqFXZWWc-15.png"
];

const LanguagesGrid: React.FC = () => {
  // Creating a dense grid representation. The original has a gap in the middle for text.
  // We'll use a CSS grid with 11 columns and about 10 rows.
  // The center 3x1 area is reserved for the text label.
  
  const totalFlags = 110; // Approx count based on visual
  
  return (
    <section className="section-padding flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />

      <div className="w-full px-4 md:px-0 relative z-10">
        <div className="w-full flex justify-center py-10 relative">
          <Image
            src="https://framerusercontent.com/images/UXeVdoBzDwbXAlHHkls74MgE6Z0.png"
            alt="Supported Languages"
            width={1813}
            height={1555}
            className="w-full h-auto max-w-[700px] object-contain"
            priority
            unoptimized
          />
          
          {/* Centered Floating Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
             <div className="bg-white/90 backdrop-blur-sm py-2 px-5 xs:py-3 xs:px-8 md:py-4 md:px-10 rounded-full shadow-lg md:shadow-2xl shadow-blue-100/50 border border-blue-50 z-10 transition-all duration-300">
                <h3 className="text-[16px] xs:text-[20px] md:text-[32px] font-bold tracking-tight text-black whitespace-nowrap">
                  99+ languages
                </h3>
             </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default LanguagesGrid;