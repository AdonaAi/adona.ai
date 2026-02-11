"use client";

import React from 'react';
import Image from 'next/image';

const BrandDNAGrid = () => {
  return (
    <section className="bg-white py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Header Tag */}
        <div className="inline-flex items-center justify-center px-4 py-1 mb-8 border border-[#ededed] rounded-full bg-white shadow-sm">
          <span className="text-[14px] font-medium text-holo-gradient">Powered By</span>
        </div>

        {/* Headline */}
        <h2 className="text-[48px] font-bold tracking-tight text-black mb-6">
          Your Brand DNA
        </h2>
        
        {/* Description */}
        <p className="max-w-[700px] mx-auto text-[18px] text-[#666666] leading-relaxed mb-[80px]">
          From brand tone to audience pain points. adona.ai&apos;s AI learns what makes you unique. Then builds with it.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[120px] gap-y-12 text-left">
          
          {/* Card 1: Captures Your Style */}
          <div className="card-adona border-[#ededed] bg-white p-8 rounded-[24px] shadow-adona flex flex-col justify-between h-full">
            <div>
              <h3 className="text-[24px] font-semibold text-black mb-4">Captures Your Style</h3>
              <p className="text-[16px] text-[#666666] leading-relaxed mb-8">
                Understands your creative vision. So every asset feels like it came from inside your team.
              </p>
            </div>
            {/* Style Indicator Elements */}
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-[#00b4d8]"></div>
              <div className="w-6 h-6 rounded-full bg-[#90e0ef]"></div>
              <div className="w-6 h-6 rounded-full bg-[#00b4d8] opacity-60"></div>
              <div className="w-6 h-6 rounded-full bg-[#90e0ef] opacity-60"></div>
              <div className="w-6 h-6 rounded-full bg-[#FF7F50]"></div>
            </div>
          </div>

          {/* Card 2: Knows Your Audience */}
          <div className="card-adona border-[#ededed] bg-white p-8 rounded-[24px] shadow-adona flex flex-col justify-between h-full">
            <div>
              <h3 className="text-[24px] font-semibold text-black mb-4">Knows Your Audience</h3>
              <p className="text-[16px] text-[#666666] leading-relaxed mb-8">
                Learns your customer&apos;s mindset, habits, and pain points, then builds content they actually care about.
              </p>
            </div>
            {/* Social Signal Icons */}
            <div className="flex gap-3 items-center opacity-80">
              <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-sm">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg>
              </div>
              <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-sm">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#ig-grad)" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line><defs><linearGradient id="ig-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#00b4d8" /><stop offset="100%" stopColor="#90e0ef" /></linearGradient></defs></svg>
              </div>
              <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#69C9D0"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.7-.54 3.51-1.76 4.75-1.28 1.34-3.21 1.96-5.06 1.83-1.68-.05-3.38-.72-4.51-1.95-1.28-1.39-1.81-3.41-1.47-5.26.24-1.35 1.02-2.58 2.14-3.37 1.05-.75 2.37-1.11 3.66-1.01.01 1.38.01 2.76.01 4.13-1.4-.24-2.95.12-3.83 1.25-.87 1.12-.83 2.87.16 3.86.84.84 2.13 1.07 3.22.68.96-.32 1.61-1.18 1.79-2.18.06-2.9.04-5.81.04-8.71z"/></svg>
              </div>
            </div>
          </div>

          {/* Card 3: Learns Buying Triggers */}
          <div className="card-adona border-[#ededed] bg-white p-8 rounded-[24px] shadow-adona flex flex-col justify-between h-full">
            <div>
              <h3 className="text-[24px] font-semibold text-black mb-4">Learns Buying Triggers</h3>
              <p className="text-[16px] text-[#666666] leading-relaxed mb-8">
                It goes beyond tone. Our AI ad make learns how your customers think when they&apos;re ready to buy.
              </p>
            </div>
            {/* Progress/Trigger Bar */}
            <div className="relative pt-6">
              <div className="flex justify-between mb-2">
                <div className="text-[12px] opacity-60">🎯</div>
                <div className="text-[12px] opacity-60">🤝</div>
                <div className="text-[12px] opacity-60">💰</div>
              </div>
              <div className="flex h-3 w-full rounded-full overflow-hidden">
                <div className="bg-[#90e0ef] opacity-70 w-2/5"></div>
                <div className="bg-[#f1c40f] opacity-70 w-1/5"></div>
                <div className="bg-[#4CAF50] opacity-70 w-2/5"></div>
              </div>
            </div>
          </div>

          {/* Card 4: Keeps Data Private */}
          <div className="card-adona border-[#ededed] bg-white p-8 rounded-[24px] shadow-adona flex flex-col justify-between h-full">
            <div>
              <h3 className="text-[24px] font-semibold text-black mb-4">Keeps Data Private</h3>
              <p className="text-[16px] text-[#666666] leading-relaxed mb-8">
                Your brand data stays private. It&apos;s never shared, trained on, or reused.
              </p>
            </div>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f7f7f7] rounded-full border border-[#ededed] w-fit">
              <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <span className="text-[12px] font-semibold text-black whitespace-nowrap">100% guarantee</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandDNAGrid;