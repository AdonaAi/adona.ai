import React from 'react';
import Image from 'next/image';

const BrandIntelligence = () => {
  const brandLogos = [
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Q7ROj4NWRiMd4gkRN3cwpfkIQ-21.png', alt: 'Apple', width: 44, height: 44 },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/3ufBHvRGDA3ObZGtXhm6PN3Aao-22.png', alt: 'Arc', width: 44, height: 44 },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hBgjPOVFMXZJiS9KXy4JPkC4ww-23.png', alt: 'Amazon', width: 44, height: 44 },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/pUdeWa2H4mWg5sXM3wMPvjiTME-24.png', alt: 'Blackberry', width: 44, height: 44 },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/V1G4AX2hq92Nj1DPrLCAuRcN4-25.png', alt: 'Nike', width: 44, height: 44 },
  ];

  const intelligenceStats = [
    { label: 'various content assets processed', value: '10M+' },
    { label: 'high-performing ads analyzed', value: '19,000+' },
    { label: 'average CTR lift across tested campaigns', value: '27%' },
    { label: 'languages supported for global brands', value: '95+' },
  ];

  const optimizationBubbles = [
    { text: 'Value-first copy detected', subtext: 'Opening with benefit boosts click-through rate.', position: 'top-[-40px] left-[-220px]', icon: '✏️' },
    { text: 'Best-performing hooks saved', subtext: 'Templates with 38% higher CTR.', position: 'top-[40px] right-[-240px]', icon: '⚡' },
    { text: 'Social proof integration tested', subtext: 'Adding reviews increased clicks by 21%.', position: 'bottom-[80px] left-[-260px]', icon: '👥' },
    { text: 'Visual hierarchy optimized', subtext: 'Hero image placement increases engagement by 22%.', position: 'top-[220px] right-[-280px]', icon: '🎯' },
    { text: 'Emotional triggers analyzed', subtext: 'Content with emotion-driven headlines converts 2x better.', position: 'bottom-[-60px] left-[-180px]', icon: '❤️' },
    { text: 'Urgency tag verified', subtext: 'Limited-time offers double ad response rate.', position: 'bottom-[20px] right-[-220px]', icon: '⏰' },
  ];

  return (
    <section className="bg-white py-[120px] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Headline Section */}
        <div className="text-center max-w-[800px] mx-auto mb-[80px]">
          <h2 className="text-[48px] font-bold leading-[1.2] tracking-tight mb-6 text-[#1A1A1A]">
            AI trained on winning influencer campaigns
          </h2>
          <p className="text-[18px] text-[#666666] leading-[1.6]">
            adona.ai doesn’t guess. It’s built on millions of high-performing ads, so your AI influencer videos don’t just look authentic, they’re optimized to convert.
          </p>
        </div>

        {/* Brand Logos Row */}
        <div className="flex justify-center items-center gap-[60px] mb-[120px]">
          {brandLogos.map((logo, index) => (
            <div key={index} className="opacity-80 hover:opacity-100 transition-opacity">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={logo.width} 
                height={logo.height} 
                className="grayscale object-contain"
              />
            </div>
          ))}
        </div>

        {/* Central Graphic Area */}
        <div className="relative max-w-[900px] mx-auto mb-[160px]">
          {/* Connecting Lines (Simulated with SVGs) */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Lines from brands to phone */}
              <path d="M200 50 Q 500 150 500 250" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M350 50 Q 500 150 500 250" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M500 50 Q 500 150 500 250" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M650 50 Q 500 150 500 250" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M800 50 Q 500 150 500 250" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Optimization Info Bubbles */}
            <div className="absolute inset-0 w-full h-full hidden lg:block">
              {optimizationBubbles.map((bubble, idx) => (
                <div 
                  key={idx} 
                  className={`absolute ${bubble.position} bg-white rounded-[16px] p-4 border border-[#F3F4F6] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] max-w-[240px] z-10 transition-transform hover:scale-105`}
                >
                  <div className="flex gap-2 items-start">
                    <span className="text-[16px] mt-1">{bubble.icon}</span>
                    <div>
                      <h4 className="text-[14px] font-semibold text-[#1A1A1A] leading-tight mb-1">{bubble.text}</h4>
                      <p className="text-[12px] text-[#666666] leading-snug">{bubble.subtext}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Smartphone Graphic */}
            <div className="relative w-[280px] h-[580px] bg-[#1A1A1A] rounded-[48px] p-3 border-[8px] border-[#1A1A1A] shadow-2xl z-20">
              <div className="w-full h-full bg-white rounded-[36px] overflow-hidden relative flex flex-col items-center justify-center p-6 text-center">
                <div className="w-[120px] h-[120px] rounded-full border-[6px] border-[#10B981] flex items-center justify-center mb-6 relative">
                   <div className="text-[32px] font-bold text-[#1A1A1A]">99%</div>
                   <div className="absolute bottom-[-10px] bg-white px-2 text-[12px] font-semibold text-[#10B981]">loaded</div>
                </div>
                <div className="text-[16px] font-bold text-[#1A1A1A] mb-2">Your visuals are</div>
                <div className="mt-8">
                  <span className="inline-block bg-[#F3F4F6] rounded-full px-4 py-1 text-[12px] font-medium text-[#666666]">Content Intelligence Active</span>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[60px] h-[60px]">
                   <div className="text-[40px]">😊</div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-[#1A1A1A] rounded-b-[20px]"></div>
            </div>
          </div>
        </div>

        {/* Content Intelligence Header */}
        <div className="text-center mb-[60px]">
           <h3 className="text-[24px] font-semibold text-[#1A1A1A]">
             This isn’t just AI. It’s content intelligence.
           </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1000px] mx-auto text-center">
          {intelligenceStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-[40px] font-bold text-gradient mb-2">{stat.value}</span>
              <p className="text-[14px] text-[#666666] leading-snug max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandIntelligence;