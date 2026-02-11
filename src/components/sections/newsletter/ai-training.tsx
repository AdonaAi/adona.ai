import React from 'react';
import Image from 'next/image';

/**
 * AI Training Section Component
 * 
 * Features:
 * - Headline and brand icon integration
 * - Smartphone mockup with floating tooltips
 * - Animated/elegant lines connecting brand icons to the smartphone
 * - Light theme consistent with the design system
 */
const AiTraining = () => {
  const brandIcons = [
    { name: 'Apple', icon: 'https://framerusercontent.com/images/DJ2WgfbrpFTTA9x8SnBl04H97hg.png' }, // Fallback to logo if specific icon missing
    { name: 'Amazon', content: 'a' },
    { name: 'Nike', content: '✔' },
    { name: 'Blackberry', content: '::' },
    { name: 'Bee', content: '🐝' },
    { name: 'Meta', content: '∞' },
  ];

  const tooltips = [
    {
      id: 1,
      title: 'Value-first copy detected',
      description: 'Opening with benefit boosts click-through rate.',
      icon: '✍️',
      position: 'top-left',
      className: 'top-[10%] -left-[180px]',
    },
    {
      id: 2,
      title: 'Social proof integration tested',
      description: 'Adding reviews increased clicks by 27%.',
      icon: '👥',
      position: 'mid-left',
      className: 'top-[35%] -left-[200px]',
    },
    {
      id: 3,
      title: 'CTA contrast optimized',
      description: 'High-contrast buttons increase clicks by 19%.',
      icon: '🖱️',
      position: 'bottom-left',
      className: 'top-[65%] -left-[160px]',
    },
    {
      id: 4,
      title: 'Emotional triggers analyzed',
      description: 'Content with emotion-driven headlines converts 2x better.',
      icon: '❤️',
      position: 'far-bottom-left',
      className: 'top-[85%] -left-[220px]',
    },
    {
      id: 5,
      title: 'Best-performing hooks saved',
      description: 'Templates with 38% higher CTR.',
      icon: '⚡',
      position: 'top-right',
      className: 'top-[10%] -right-[180px]',
    },
    {
      id: 6,
      title: 'Visual hierarchy optimized',
      description: 'Hero image placement increases engagement by 22%.',
      icon: '👁️',
      position: 'mid-right',
      className: 'top-[45%] -right-[200px]',
    },
    {
      id: 7,
      title: 'Whitespace usage optimized',
      description: 'Balanced spacing increases conversion.',
      icon: '⬜',
      position: 'bottom-right',
      className: 'top-[75%] -right-[180px]',
    },
    {
      id: 8,
      title: 'Urgency tag verified',
      description: 'Limited-time offers double ad response rate.',
      icon: '⏰',
      position: 'far-bottom-right',
      className: 'top-[92%] -right-[140px]',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-[120px]" id="integrations">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Headline */}
        <div className="max-w-[800px] text-center mb-16">
          <h2 className="text-[48px] font-bold tracking-tight text-[#1A1A1A] leading-[1.2] mb-12">
            AI trained on millions of high-performance Facebook ads
          </h2>
        </div>

        {/* Brand Icons Row */}
        <div className="flex justify-center items-center gap-12 mb-20 opacity-80">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M17.05 20.28c-.96.95-2.26 1.51-3.71 1.51-3.23 0-5.85-2.62-5.85-5.85s2.62-5.85 5.85-5.85c1.45 0 2.75.56 3.71 1.51l2.45-2.45C17.7 7.35 15.5 6.3 13.05 6.3 7.6 6.3 3.1 10.8 3.1 16.25s4.5 9.95 9.95 9.95c3.34 0 6.26-1.66 8.01-4.2l-4.01-1.72z" />
          </svg>
          <div className="text-2xl font-bold italic tracking-tighter">N</div>
          <div className="text-2xl font-serif font-bold">a</div>
          <div className="flex gap-0.5">
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          </div>
          <div className="text-[20px] font-bold tracking-widest"></div>
          <div className="text-2xl font-black rotate-[-15deg]">✓</div>
        </div>

        {/* Mockup & Tooltips Container */}
        <div className="relative mt-20 w-fit">
          {/* Animated Connecting Lines (SVG Layer) */}
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[150px] pointer-events-none z-0">
            <svg width="100%" height="100%" viewBox="0 0 600 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* This draws the elegant convergent lines from above the phone */}
              <path d="M100 0 Q 300 150 300 150" stroke="#F2F2F2" strokeWidth="1" />
              <path d="M200 0 Q 300 150 300 150" stroke="#F2F2F2" strokeWidth="1" />
              <path d="M300 0 L 300 150" stroke="#F2F2F2" strokeWidth="1" />
              <path d="M400 0 Q 300 150 300 150" stroke="#F2F2F2" strokeWidth="1" />
              <path d="M500 0 Q 300 150 300 150" stroke="#F2F2F2" strokeWidth="1" />
            </svg>
          </div>

          {/* Smartphone Mockup */}
          <div className="relative z-10 w-[300px] h-[610px] bg-[#1A1A1A] rounded-[48px] p-4 shadow-2xl border-[8px] border-[#333]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1A1A1A] rounded-b-2xl"></div>
            <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              <p className="text-[#666] text-sm font-medium mb-4">Your visuals are</p>
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full border-[10px] border-[#4ADE80] border-opacity-20 flex items-center justify-center">
                   <div className="text-[48px] font-bold text-[#4ADE80]">99<span className="text-2xl">⚡</span></div>
                </div>
              </div>
              <p className="text-[#4ADE80] font-bold text-lg mb-8">loaded</p>
              <div className="w-16 h-16 bg-[#F9F9F9] rounded-full flex items-center justify-center">
                <span className="text-2xl">☝️</span>
              </div>
            </div>
          </div>

          {/* Floating Tooltips */}
          {tooltips.map((tooltip) => (
            <div
              key={tooltip.id}
              className={`absolute z-20 w-[240px] p-4 rounded-2xl glass-card transition-all duration-500 hover:scale-105 hover:z-30 hidden xl:block ${tooltip.className}`}
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)' }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-[#F2F2F2] flex items-center justify-center text-sm shadow-sm">
                  {tooltip.icon}
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#1A1A1A] leading-tight mb-1">
                    {tooltip.title}
                  </h4>
                  <p className="text-[12px] text-[#666] leading-snug">
                    {tooltip.description}
                  </p>
                </div>
              </div>
              
              {/* Connector dots/lines for visual flair */}
              <div 
                className={`absolute w-2 h-2 rounded-full bg-[#8E8FFA] opacity-40 top-1/2 -translate-y-1/2 ${
                  tooltip.className.includes('-left') ? '-right-1' : '-left-1'
                }`}
              />
            </div>
          ))}

          {/* Mobile Tooltips Grid (Only shown on small screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 xl:hidden w-full max-w-[600px]">
             {tooltips.slice(0, 4).map((tooltip) => (
                <div key={tooltip.id} className="p-4 rounded-2xl border border-[#F2F2F2] bg-white shadow-sm flex items-start gap-3">
                   <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm">{tooltip.icon}</div>
                   <div>
                      <h4 className="text-[14px] font-semibold text-[#1A1A1A] leading-tight mb-1">{tooltip.title}</h4>
                      <p className="text-[12px] text-[#666] leading-snug">{tooltip.description}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>

        {/* Content Intelligence Header Below */}
        <div className="mt-32 text-center">
            <h3 className="text-[32px] font-semibold text-[#1A1A1A]">This isn&apos;t just AI. It&apos;s content intelligence.</h3>
        </div>
      </div>
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8E8FFA] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default AiTraining;