"use client";

import React from 'react';

/**
 * ToolSuite Component
 * 
 * Clones the "Explore our suite of AI marketing tools" section.
 * Features:
 * - Centered "Powered by adona.ai" badge
 * - Large title and subtext
 * - Grid of pill-shaped buttons with hover effects
 * - Background concentric circle aesthetic
 */
const ToolSuite = () => {
  const tools = [
    { name: 'AI Influencer Generator', href: '#' },
    { name: 'Instagram Ad Generator', href: '#' },
    { name: 'AI Ad Generator', href: '#' },
    { name: 'AI UGC Video Generator', href: '#' },
    { name: 'AI Tiktok Generator', href: '#' },
    { name: 'AI Newsletter Generator', href: '#' },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-[120px] md:py-[160px]">
      {/* Background Decorative Circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-[#f0f0f0] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[850px] h-[850px] rounded-full border border-[#f5f5f5] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[1100px] h-[1100px] rounded-full border border-[#fafafa] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-[1200px]">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-[#E5E5E5] px-4 py-1 bg-white shadow-sm">
            <span className="text-[14px] font-medium text-[#666666] leading-none">Powered by adona.ai</span>
          </div>

          {/* Heading */}
          <h2 className="mb-6 max-w-[800px] text-[32px] md:text-[48px] font-bold tracking-tight text-[#121212] leading-[1.2]">
            Explore our suite of AI marketing tools
          </h2>

          {/* Subtext */}
          <p className="mb-12 max-w-[640px] text-[18px] text-[#666666] leading-[1.6]">
            Forget boring templates. adona.ai dives deep into your brand&rsquo;s DNA and generates unique ads that feel unmistakably you.
          </p>

          {/* Tools Grid (Pills) */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-[900px]">
            {tools.map((tool, index) => (
              <a
                key={index}
                href={tool.href}
                className="group relative inline-flex items-center justify-center rounded-full border border-[#E5E5E5] bg-white px-6 py-3 text-[16px] font-semibold text-[#121212] transition-all duration-300 hover:border-transparent hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] overflow-hidden"
              >
                {/* Hover Gradient Border Effect Replacement */}
                <div className="absolute inset-0 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full bg-gradient-to-r from-[#7f7fd5] via-[#86a8e7] to-[#91eae4]">
                   <div className="w-full h-full bg-white rounded-full flex items-center justify-center px-6 py-3">
                     {tool.name}
                   </div>
                </div>
                <span className="relative z-10">{tool.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolSuite;