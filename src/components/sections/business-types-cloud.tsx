"use client";

import React from 'react';
import Image from 'next/image';

const BusinessTypesCloud = () => {
  return (
    <section className="bg-white py-[120px] overflow-hidden">
      {/* Works for any business type - Floating Tags Cloud */}
      <div className="container relative flex flex-col items-center mb-[180px]">
        <div className="relative w-full max-w-[900px] h-[300px] flex items-center justify-center">
          {/* Main Heading positioned in the center of the cloud */}
          <h2 className="text-[48px] font-bold tracking-[-0.02em] text-[#000000] z-10 text-center">
            Works for any business type
          </h2>

          {/* Floating Pill Tags - Absolute positioning to mimic the 'cloud' effect */}
          
          {/* SaaS - Blue text */}
          <div className="absolute top-[180px] left-[15%] rotate-[-12deg] px-[32px] py-[10px] bg-white border border-[#EDEDED] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform hover:scale-105">
            <span className="text-[18px] font-semibold text-[#3B82F6]">SaaS</span>
          </div>

          {/* Digital products - Purple text */}
          <div className="absolute top-[-40px] left-[20%] rotate-[8deg] px-[32px] py-[10px] bg-white border border-[#EDEDED] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform hover:scale-105">
            <span className="text-[18px] font-semibold text-[#A855F7]">Digital products</span>
          </div>

          {/* Agencies - Pink text */}
          <div className="absolute top-[-20px] left-[65%] rotate-[-5deg] px-[32px] py-[10px] bg-white border border-[#EDEDED] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform hover:scale-105">
            <span className="text-[18px] font-semibold text-[#EC4899]">Agencies</span>
          </div>

          {/* Mobile apps - Red text */}
          <div className="absolute top-[200px] left-[45%] rotate-[10deg] px-[32px] py-[10px] bg-white border border-[#EDEDED] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform hover:scale-105">
            <span className="text-[18px] font-semibold text-[#EF4444]">Mobile apps</span>
          </div>

          {/* Services - Orange/Red text */}
          <div className="absolute top-[180px] left-[75%] rotate-[-15deg] px-[32px] py-[10px] bg-white border border-[#EDEDED] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform hover:scale-105">
            <span className="text-[18px] font-semibold text-[#F97316]">Services</span>
          </div>

          {/* Decorative floating icons */}
          <div className="absolute top-[120px] left-[5%] opacity-40 rotate-[15deg]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#A855F7" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute top-[210px] left-[60%] opacity-40 rotate-[-10deg]">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="#EC4899" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content Calendar Section with Tinder-style Card Illustration */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
          {/* Left Text Block */}
          <div className="flex flex-col max-w-[500px]">
            <span className="text-[14px] font-medium text-[#666666] tracking-[0.05em] uppercase mb-4">
              Unlimited Ads and Social Media Post Ideas
            </span>
            <h2 className="text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#000000] mb-6">
              Fill Your Content Calendar,<br /> 3 Months In Advance
            </h2>
            <p className="text-[18px] leading-[1.6] text-[#666666] mb-10">
              You rest. adona.ai doesn&apos;t. It works in the background to generate marketing visuals while you sleep. So you can swipe in the morning and launch just before lunch.
            </p>

            {/* Sub-badge / Highlight */}
            <div className="bg-[#F7F7F7] border border-[#EDEDED] rounded-[24px] p-6 flex items-start gap-4">
              <div className="w-[60px] h-[60px] relative flex-shrink-0 bg-white rounded-full overflow-hidden shadow-sm flex items-center justify-center">
                {/* Placeholder for the adona.ai character icon */}
                <div className="text-[32px]">🤖</div>
              </div>
              <div>
                <span className="text-[14px] font-semibold text-[#F97316]">Like Tinder, but for content.</span>
                <p className="text-[16px] text-[#666666] mt-1">
                  Swipe to skip, save, or generate what you like best.
                </p>
              </div>
            </div>
          </div>

          {/* Right Illustration Block (Tinder-style Cards Mockup) */}
          <div className="relative h-[550px] flex items-center justify-center">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8a9aee10] to-[#e9567810] rounded-[48px] -z-10" />
            
            {/* Card Stack Illustration */}
            <div className="relative w-full max-w-[400px]">
              {/* Bottom Card (Shifted/Rotated) */}
              <div className="absolute top-4 left-4 w-full h-[400px] bg-white border border-[#EDEDED] rounded-[24px] shadow-sm rotate-[-4deg] opacity-60 z-0" />
              
              {/* Middle Card (Shifted/Rotated) */}
              <div className="absolute top-2 left-2 w-full h-[400px] bg-white border border-[#EDEDED] rounded-[24px] shadow-md rotate-[-2deg] opacity-80 z-10" />
              
              {/* Top Active Card */}
              <div className="relative w-full h-[400px] bg-white border border-[#EDEDED] rounded-[24px] shadow-xl z-20 overflow-hidden flex flex-col">
                <div className="h-[280px] bg-[#F7F7F7] flex items-center justify-center relative">
                   <div className="w-[80%] h-[180px] bg-white rounded-lg shadow-sm border border-[#EDEDED] flex flex-col items-center justify-center p-4">
                      <div className="w-12 h-12 rounded-full bg-holo-gradient mb-3" />
                      <div className="w-full h-2 bg-[#F1F1F1] rounded-full mb-2" />
                      <div className="w-2/3 h-2 bg-[#F1F1F1] rounded-full" />
                   </div>
                   {/* Swipe Action Floating Tooltip */}
                   <div className="absolute top-8 right-8 bg-[#4CAF50] text-white px-4 py-1 rounded-full text-[12px] font-bold rotate-[12deg] shadow-lg">
                     KEEP THIS IT&apos;S GOOD
                   </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#000000] mb-2">Product Lifestyle Shot</h3>
                  <p className="text-[14px] text-[#666666]">AI generated visual for your Instagram feed.</p>
                </div>
              </div>

              {/* Tinder-style Control Buttons below card */}
              <div className="absolute -bottom-16 left-0 w-full flex justify-center gap-6 z-30">
                <button className="w-16 h-16 rounded-full bg-white border border-[#EDEDED] shadow-lg flex items-center justify-center text-[#e95678] hover:scale-110 transition-transform">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <button className="w-16 h-16 rounded-full bg-white border border-[#EDEDED] shadow-lg flex items-center justify-center text-[#4CAF50] hover:scale-110 transition-transform">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypesCloud;