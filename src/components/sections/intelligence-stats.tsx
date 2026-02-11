"use client";

import React from 'react';

/**
 * IntelligenceStats Component
 * 
 * Clones the "This isn't just AI. It's content intelligence." section 
 * with statistical counters and a dense grid of national flag icons.
 * 
 * Constraints:
 * - Theme: Light
 * - Stats: 10M+, 19,000+, 27%, 95+
 * - Grid: 99+ flag icons (using generic flag structure as specific assets aren't provided)
 */

const IntelligenceStats: React.FC = () => {
  // Stat data based on screenshots and instructions
  const stats = [
    {
      value: "10M+",
      label: "various content assets processed",
    },
    {
      value: "19,000+",
      label: "high-performing ads analyzed",
    },
    {
      value: "27%",
      label: "average CTR lift across tested campaigns",
    },
    {
      value: "95+",
      label: "languages supported for global brands",
    },
  ];

  // Array to generate a dense grid of flag-like placeholders since specific flag assets aren't in the input
  // In a real production environment, these would be individual SVG or Image components.
  // We'll use a mix of colors to simulate the vibrant flag grid seen in screenshots.
  const flagColors = [
    '#FF4B4B', '#4B79FF', '#FFB84B', '#4BCBFF', '#7ED321', '#BD10E0', '#F5A623', '#4A90E2', '#50E3C2', '#D0021B',
    '#9013FE', '#B8E986', '#000000', '#F8E71C', '#7800FF', '#007AFF', '#FF2D55', '#4CD964', '#5AC8FA', '#FF9500'
  ];

  const flagGrid = Array.from({ length: 99 }).map((_, i) => ({
    id: i,
    color: flagColors[i % flagColors.length],
    secondary: flagColors[(i * 3) % flagColors.length]
  }));

  return (
    <section className="bg-white py-[120px] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mb-4">
            This isn't just AI. It's content intelligence.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center mb-32 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-[40px] md:text-[48px] font-bold text-holo-gradient mb-2 tracking-tighter">
                {stat.value}
              </span>
              <p className="text-[14px] md:text-[16px] text-[#666666] leading-snug max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Global Language Support Section */}
        <div className="relative">
          {/* Flag Grid Background */}
          <div className="grid grid-cols-7 sm:grid-cols-9 md:grid-cols-11 lg:grid-cols-13 gap-3 opacity-20 transform -rotate-1 scale-105">
            {flagGrid.map((flag) => (
              <div 
                key={flag.id} 
                className="aspect-[3/2] rounded-sm overflow-hidden border border-[#ededed] shadow-sm transform transition-transform hover:scale-110 duration-300"
                style={{
                    background: `linear-gradient(135deg, ${flag.color} 50%, ${flag.secondary} 50%)`
                }}
              />
            ))}
          </div>

          {/* Centered Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/90 backdrop-blur-md px-10 py-5 rounded-full border border-[#ededed] shadow-adona z-10">
              <span className="text-[20px] md:text-[24px] font-bold text-black whitespace-nowrap">
                99+ languages
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-20">
          <h3 className="text-[28px] md:text-[32px] font-bold text-black tracking-tight mb-2">
            adona.ai works all over the world.
          </h3>
          <p className="text-[18px] text-[#666666]">
            Unlock global scaling, without the manual work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceStats;