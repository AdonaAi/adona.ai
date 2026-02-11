import React from 'react';
import Image from 'next/image';

/**
 * BrandDNA Section
 * 
 * This component clones the "Your Brand DNA. Every Ad." section of the adona.ai website.
 * It features a grid of four cards with specific visual treatments for style capture,
 * audience learning, buying triggers, and data privacy.
 */
const BrandDNA = () => {
  return (
    <section className="bg-[#fcfcfc] py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-[800px] mx-auto">
          <div className="mb-4">
            <span className="px-4 py-1.5 rounded-full border border-[#f1f1f1] bg-white text-[14px] font-semibold text-[#666666] shadow-sm">
              Powered by
            </span>
          </div>
          <h2 className="text-[48px] font-bold tracking-tight text-[#1a1a1a] mb-6 leading-[1.2]">
            Your Brand DNA. Every Ad.
          </h2>
          <p className="text-[18px] text-[#666666] leading-[1.6]">
            Most ad tools rely on templates - resulting in repetitive, off-brand creatives that fail to connect. 
            adona.ai does the opposite: it studies your brand&apos;s style, and audience, then generates ads that feel 
            authentic, and are optimized to perform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Feature 1: Captures Your Style */}
          <div className="bg-white rounded-[32px] border border-[#f1f1f1] p-10 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:transform hover:translate-y-[-4px] transition-all duration-300">
            <div>
              <h3 className="text-[24px] font-semibold text-[#1a1a1a] mb-4">Captures Your Style</h3>
              <p className="text-[18px] text-[#666666] leading-[1.6] mb-8">
                Understands your creative vision. So every asset feels like it came from inside your team.
              </p>
            </div>
            <div className="flex space-x-2 mt-auto">
              {/* Style dots visual */}
              <div className="w-8 h-8 rounded-full bg-[#4facfe]" />
              <div className="w-8 h-8 rounded-full bg-[#8e2de2]" />
              <div className="w-8 h-8 rounded-full bg-[#ff0844]" />
              <div className="w-8 h-8 rounded-full bg-[#fa709a]" />
              <div className="w-8 h-8 rounded-full bg-[#f6d365]" />
            </div>
          </div>

          {/* Feature 2: Knows Your Audience */}
          <div className="bg-white rounded-[32px] border border-[#f1f1f1] p-10 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:transform hover:translate-y-[-4px] transition-all duration-300">
            <div>
              <h3 className="text-[24px] font-semibold text-[#1a1a1a] mb-4">Knows Your Audience</h3>
              <p className="text-[18px] text-[#666666] leading-[1.6] mb-8">
                Learns your customer&apos;s mindset, habits, and pain points, then builds content they actually care about.
              </p>
            </div>
            <div className="flex space-x-3 mt-auto grayscale opacity-50">
              {/* Platform icons visual */}
              {/* We avoid SVGs as per instructions and use simple representation or text if icons not available */}
              <div className="w-8 h-8 flex items-center justify-center font-bold text-[#1a1a1a]">f</div>
              <div className="w-8 h-8 flex items-center justify-center font-bold text-[#1a1a1a]">𝕏</div>
              <div className="w-8 h-8 flex items-center justify-center font-bold text-[#1a1a1a]">ig</div>
              <div className="w-8 h-8 flex items-center justify-center font-bold text-[#1a1a1a]">tk</div>
            </div>
          </div>

          {/* Feature 3: Learns Buying Triggers */}
          <div className="bg-white rounded-[32px] border border-[#f1f1f1] p-10 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:transform hover:translate-y-[-4px] transition-all duration-300">
            <div>
              <h3 className="text-[24px] font-semibold text-[#1a1a1a] mb-4">Learns Buying Triggers</h3>
              <p className="text-[18px] text-[#666666] leading-[1.6] mb-8">
                It goes beyond tone. Our AI ad maker learns how your customers think when they&apos;re ready to buy.
              </p>
            </div>
            <div className="mt-auto">
              {/* Buying triggers visualization */}
              <div className="flex items-end space-x-2 h-4 w-full">
                <div className="h-[60%] w-1/4 bg-[#ef4444] rounded-sm opacity-60" />
                <div className="h-[80%] w-1/4 bg-[#f59e0b] rounded-sm opacity-60" />
                <div className="h-[100%] w-1/4 bg-[#22c55e] rounded-sm opacity-100" />
                <div className="h-[90%] w-1/4 bg-[#22c55e] rounded-sm opacity-70" />
              </div>
            </div>
          </div>

          {/* Feature 4: Keeps Data Private */}
          <div className="bg-white rounded-[32px] border border-[#f1f1f1] p-10 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:transform hover:translate-y-[-4px] transition-all duration-300">
            <div>
              <h3 className="text-[24px] font-semibold text-[#1a1a1a] mb-4">Keeps Data Private</h3>
              <p className="text-[18px] text-[#666666] leading-[1.6] mb-8">
                Your brand data stays private. It&apos;s never shared, trained on, or reused.
              </p>
            </div>
            <div className="mt-auto">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#f1f1f1] bg-[#fdfdfd] shadow-sm">
                <div className="w-4 h-4 rounded-full bg-[#22c55e] flex items-center justify-center">
                  <span className="text-white text-[10px]">✓</span>
                </div>
                <span className="text-[14px] font-semibold text-[#1a1a1a]">100% guarantee</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandDNA;