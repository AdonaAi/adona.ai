"use client";

import React from 'react';
import Image from 'next/image';

const BrandLogosTraining = () => {
  // Brand logos used in the training section
  const brandLogos = [
    { name: 'Apple', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/TB0iaXEOimB4w985KL59x8Yqac-13.png' },
    { name: 'Adidas', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Fn01ZJFwqDXKKhz5yJzgvYK4BLw-14.png' },
    { name: 'Amazon', icon: 'custom-amazon' },
    { name: 'Blackberry', icon: 'custom-blackberry' },
    { name: 'Bumble', icon: 'custom-bumble' },
    { name: 'Nike', icon: 'custom-nike' },
  ];

  // Helper to render brand icons when provided URL is not available or it's a placeholder
  const renderBrandIcon = (logo: any) => {
    if (logo.icon.startsWith('http')) {
      return (
        <Image 
          src={logo.icon} 
          alt={logo.name} 
          width={32} 
          height={32} 
          className="object-contain opacity-80"
        />
      );
    }
    
    // Fallback for symbols not in specific assets but present in screenshots
    const iconMap: Record<string, React.ReactNode> = {
      'custom-amazon': (
        <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-80" fill="currentColor">
          <path d="M18.71 19.5c-1.12.72-2.88 1.13-4.4 1.13-2.6 0-4.9-.82-6.52-2.11-.14-.11-.11-.27.05-.22 1.95.53 4.25.82 6.33.82 1.58 0 3.29-.2 4.67-.85.15-.07.26.11.12.23zM15.4 17.07c-3.13 1.9-8.47 1.05-11.4-.33-.2-.1-.23-.39-.03-.54 2.21-1.6 6-1.99 10-.73.2.06.24.4.03.6l1.4 1z" />
        </svg>
      ),
      'custom-blackberry': (
        <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-80" fill="currentColor">
          <circle cx="7" cy="7" r="2.5" /><circle cx="12" cy="7" r="2.5" /><circle cx="17" cy="7" r="2.5" />
          <circle cx="7" cy="12" r="2.5" /><circle cx="12" cy="12" r="2.5" /><circle cx="17" cy="12" r="2.5" />
          <circle cx="12" cy="17" r="2.5" />
        </svg>
      ),
      'custom-bumble': (
        <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-80" fill="currentColor">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
        </svg>
      ),
      'custom-nike': (
        <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-80" fill="currentColor">
          <path d="M21 7.28a113.84 113.84 0 01-14.7 6.43c-2.43.76-4.63 1.15-6.6 1.15-.15 0-.25 0-.25-.09C-.15 14 .75 12.18 2.05 10.12 3.84 7.28 6.4 5 10.32 5c2.47 0 5.48.97 8.35 2.15l2.33.13z" />
        </svg>
      )
    };
    return iconMap[logo.icon] || <span className="font-bold text-xl">{logo.name[0]}</span>;
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-[120px] px-6">
      <div className="container mx-auto max-w-[1200px]">
        {/* Header Text */}
        <div className="mb-16 text-center">
          <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.02em] text-[#000000] max-w-[800px] mx-auto text-balance">
            AI trained on millions of marketing assets from top ecommerce brands
          </h2>
        </div>

        {/* Neural Connections Visualization */}
        <div className="relative mx-auto mt-20 flex flex-col items-center">
          {/* Top Row: Logos */}
          <div className="mb-8 flex w-full max-w-[800px] items-end justify-between px-4">
            {brandLogos.map((logo, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center p-2 transition-opacity hover:opacity-100">
                  {renderBrandIcon(logo)}
                </div>
              </div>
            ))}
          </div>

          {/* Lines Connecting to Phone */}
          <div className="relative h-[200px] w-full max-w-[800px]">
             <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              preserveAspectRatio="none"
              viewBox="0 0 800 200"
            >
              <g stroke="#EDEDED" strokeWidth="1" fill="none">
                {/* Connections from top logos to center target */}
                <path d="M60,0 C60,100 400,100 400,200" opacity="0.4" />
                <path d="M200,0 C200,100 400,100 400,200" opacity="0.4" />
                <path d="M340,0 C340,100 400,100 400,200" opacity="0.6" />
                <path d="M460,0 C460,100 400,100 400,200" opacity="0.6" />
                <path d="M600,0 C600,100 400,100 400,200" opacity="0.4" />
                <path d="M740,0 C740,100 400,100 400,200" opacity="0.4" />
              </g>
            </svg>
          </div>

          {/* Central Mockup Integration */}
          <div className="relative z-10 -mt-2">
            <div className="relative w-[300px] h-[600px] border-[12px] border-[#000000] rounded-[52px] bg-white shadow-[0_24px_48px_rgba(0,0,0,0.12)] overflow-hidden">
              {/* Phone Content */}
              <div className="p-6 h-full flex flex-col items-center justify-start pt-20">
                <div className="text-center">
                   <p className="text-[#4CAF50] font-semibold text-sm mb-2">Your visuals are</p>
                   <div className="inline-flex items-center justify-center bg-[#F1FFF1] text-[#4CAF50] rounded-2xl px-6 py-4 mb-2">
                     <span className="text-[52px] font-bold leading-none">99+</span>
                     <svg className="w-8 h-8 ml-2" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                     </svg>
                   </div>
                   <p className="text-[#666666] text-sm font-medium tracking-wide">loaded</p>
                </div>
                
                {/* Character/Icon at bottom of phone */}
                <div className="mt-auto mb-10">
                   <div className="w-20 h-20 bg-[#F7F7F7] rounded-full flex items-center justify-center transform scale-x-[-1]">
                      <div className="relative w-12 h-12">
                        <div className="absolute top-1 left-2 w-2 h-2 bg-black rounded-full" />
                        <div className="absolute top-1 right-2 w-2 h-2 bg-black rounded-full" />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-2 border-b-2 border-black rounded-full" />
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Floating Tags around the phone */}
            <div className="absolute top-0 -left-48 w-44 card-adona p-3 flex items-center gap-3 transform -translate-y-4">
              <span className="bg-[#f0f2ff] p-2 rounded-lg text-blue-500">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <div>
                <p className="text-[12px] font-semibold leading-tight">Social proof integration tested</p>
                <p className="text-[10px] text-[#666666]">Adding reviews increased clicks by 27%</p>
              </div>
            </div>

            <div className="absolute top-32 -right-48 w-44 card-adona p-3 flex items-center gap-3">
              <span className="bg-[#fff9f0] p-2 rounded-lg text-orange-500">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
              </span>
              <div>
                <p className="text-[12px] font-semibold leading-tight">Visual hierarchy optimized</p>
                <p className="text-[10px] text-[#666666]">Hero image placement increases engagement by 22%</p>
              </div>
            </div>

            <div className="absolute bottom-40 -left-36 w-44 card-adona p-3 flex items-center gap-3">
               <span className="bg-[#f2f2f2] p-2 rounded-lg text-[#000000]">
                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
               </span>
               <div>
                <p className="text-[12px] font-semibold leading-tight">CTA contrast optimized</p>
                <p className="text-[10px] text-[#666666]">High-contrast buttons increase click-through by 19%</p>
              </div>
            </div>

            <div className="absolute bottom-20 -right-40 w-44 card-adona p-3 flex items-center gap-3">
               <span className="bg-[#ffeff4] p-2 rounded-lg text-pink-500">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
               </span>
               <div>
                <p className="text-[12px] font-semibold leading-tight">Emotional triggers analyzed</p>
                <p className="text-[10px] text-[#666666]">Content with emotion-driven headlines converts 2x better.</p>
              </div>
            </div>
            
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 card-adona p-3 flex items-center gap-3">
               <span className="bg-[#f0fff4] p-2 rounded-lg text-green-500">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
               </span>
               <div>
                <p className="text-[12px] font-semibold leading-tight">Urgency tag verified</p>
                <p className="text-[10px] text-[#666666]">Limited-time offers double ad response rate.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Intelligence Stats */}
        <div className="mt-40 text-center">
          <p className="text-[24px] font-semibold mb-12 text-[#000000]">This isn't just AI. It's content intelligence.</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-[48px] font-extrabold text-holo-gradient">10M+</span>
              <p className="text-[16px] text-[#666666] mt-2 max-w-[150px]">various content assets processed</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[48px] font-extrabold text-holo-gradient">19,000+</span>
              <p className="text-[16px] text-[#666666] mt-2 max-w-[150px]">high-performing ads analyzed</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[48px] font-extrabold text-holo-gradient">27%</span>
              <p className="text-[16px] text-[#666666] mt-2 max-w-[150px]">average CTR lift across tested campaigns</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[48px] font-extrabold text-holo-gradient">95+</span>
              <p className="text-[16px] text-[#666666] mt-2 max-w-[150px]">languages supported for global brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogosTraining;