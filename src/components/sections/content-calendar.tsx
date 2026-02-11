import React from 'react';
import Image from 'next/image';

/**
 * ContentCalendarSection Component
 * 
 * Clones the "Fill Your Content Calendar" section of the adona.ai website.
 * Features a split layout with a "Like Tinder, but for content" gif/card 
 * on the left and descriptive text on the right.
 */
const ContentCalendarSection: React.FC = () => {
  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container py-[140px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Visual Preview Card */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            {/* The "Tinder for content" preview container */}
            <div className="relative w-full max-w-[540px]">
              {/* Main Content GIF/Image */}
              <div className="rounded-[32px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#f0f0f0] bg-white">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/4UZO9Ldwd2eIpiw8du2WL4CyJpA-12.gif"
                  alt="Content generation card interface showing swipe functionality"
                  width={540}
                  height={300}
                  className="w-full h-auto object-cover"
                  unoptimized // Recommended for GIFs in Next.js
                />
              </div>

              {/* Floating "Tinder-like" Badge/Info Card */}
              <div className="absolute -bottom-10 left-6 right-6 lg:-right-10 lg:left-auto lg:w-[320px] bg-white p-6 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-[#f0f0f0] flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0 bg-[#F9F9FB] rounded-full flex items-center justify-center overflow-hidden">
                  {/* adona.ai Mascot Placeholder Icon as per design screenshots */}
                  <div className="relative w-12 h-12">
                     <Image 
                        src="https://framerusercontent.com/images/DJ2WgfbrpFTTA9x8SnBl04H97hg.png?width=1080&height=1080" 
                        alt="adona.ai Mascot" 
                        fill
                        className="object-contain"
                     />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-[#f1c40f] uppercase tracking-wider mb-1">
                    Like Tinder, but for content.
                  </span>
                  <p className="text-[14px] leading-tight text-[#1f1f1f] font-medium">
                    Swipe to skip, save, or generate what you like best.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Textual Content */}
          <div className="order-1 lg:order-2 flex flex-col max-w-[540px]">
            <span className="text-caption text-muted-foreground mb-4">
              Unlimited Ads and Social Media Post Ideas
            </span>
            <h2 className="h2 text-[#1f1f1f] mb-6">
              Fill Your Content Calendar, <br />
              3 Months In Advance
            </h2>
            <p className="text-large text-muted-foreground mb-8">
              You rest. adona.ai doesn’t. It works in the background to generate marketing visuals 
              while you sleep. So you can swipe in the morning and launch just before lunch.
            </p>
            
            {/* Minimal Stat/Benefit markers if needed, based on visuals */}
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="badge-pill flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-holo-gradient"></span>
                <span>Automatic generation</span>
              </div>
              <div className="badge-pill flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-holo-gradient"></span>
                <span>One-click approval</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContentCalendarSection;