"use client";

import React from 'react';

const BusinessTypesSection: React.FC = () => {
  return (
    <section
      className="relative w-full bg-[#f7f7f8] overflow-hidden py-16 sm:py-20 md:py-0 md:h-[350px] lg:h-[400px] xl:h-[450px]"
      id="business-types"
    >
      {/* Checkmark Icon - Top Left */}
      <div
        className="absolute hidden lg:block"
        style={{
          left: '12%',
          top: '18%',
          transform: 'rotate(9deg)',
        }}
      >
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
          <circle cx="22.5" cy="22.5" r="20" fill="url(#checkBg)" />
          <path d="M13 22l6 6 13-13" stroke="url(#checkStroke)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <defs>
            <linearGradient id="checkBg" x1="0.25" y1="0" x2="0.75" y2="1">
              <stop offset="0%" stopColor="#fff1ed" />
              <stop offset="100%" stopColor="#ff9f85" />
            </linearGradient>
            <linearGradient id="checkStroke" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#f6a791" />
              <stop offset="100%" stopColor="#f05427" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Cursor/Send Icon - Left side */}
      <div
        className="absolute hidden lg:block"
        style={{
          left: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <svg width="40" height="40" viewBox="0 0 46 46" fill="none">
          <path d="M6 13L40 7L28 41L21 25L6 19V13Z" fill="url(#cursorGrad)" />
          <defs>
            <linearGradient id="cursorGrad" x1="0.14" y1="0" x2="0.86" y2="1">
              <stop offset="0%" stopColor="#fee8ff" />
              <stop offset="100%" stopColor="#a666aa" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Title - Center */}
      <div className="relative md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-[#1d1d1f] leading-[1.1]">
          Compatible with All Business Models
        </h1>
      </div>

      {/* Agencies - Top Right */}
      <div
        className="absolute hidden md:block"
        style={{
          right: '8%',
          top: '22%',
          transform: 'rotate(9deg)'
        }}
      >
        <div className="bg-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <span className="text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold italic" style={{ color: 'rgb(236, 68, 146)' }}>
            Agencies
          </span>
        </div>
      </div>

      {/* Digital products - Left */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '10%',
          top: '32%',
          transform: 'rotate(8deg)'
        }}
      >
        <div className="bg-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <span className="text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold italic" style={{ color: 'rgb(166, 102, 170)' }}>
            Digital products
          </span>
        </div>
      </div>

      {/* SaaS - Bottom Left */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '15%',
          bottom: '22%',
          transform: 'rotate(-13deg)'
        }}
      >
        <div className="bg-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <span className="text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold italic" style={{ color: 'rgb(62, 134, 198)' }}>
            SaaS
          </span>
        </div>
      </div>

      {/* Mobile apps - Bottom Center */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '38%',
          bottom: '18%',
          transform: 'rotate(11deg)'
        }}
      >
        <div className="bg-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <span className="text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold italic" style={{ color: 'rgb(238, 68, 84)' }}>
            Mobile apps
          </span>
        </div>
      </div>

      {/* Services - Bottom Right */}
      <div
        className="absolute hidden md:block"
        style={{
          right: '12%',
          bottom: '25%',
          transform: 'rotate(-16deg)'
        }}
      >
        <div className="bg-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <span className="text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold italic" style={{ color: 'rgb(240, 84, 39)' }}>
            Services
          </span>
        </div>
      </div>

      {/* Briefcase Icon - Bottom Left */}
      <div
        className="absolute hidden lg:block"
        style={{
          left: '8%',
          bottom: '18%',
          transform: 'rotate(15deg)',
        }}
      >
        <svg width="42" height="38" viewBox="0 0 42 38" fill="none">
          <path d="M3 17C3 13 5 11 9 11H33C37 11 39 13 39 17V21L21 27L3 21V17Z" fill="#c5e3ff" />
          <path d="M3 21V31C3 35 5 37 9 37H33C37 37 39 35 39 31V21L21 27L3 21Z" fill="url(#briefBottom)" />
          <rect x="13" y="3" width="16" height="9" rx="2" stroke="#3e86c6" strokeWidth="2" fill="none" />
          <defs>
            <linearGradient id="briefBottom" x1="0.28" y1="0" x2="0.72" y2="1">
              <stop offset="0%" stopColor="#e4f3ff" />
              <stop offset="100%" stopColor="#3e86c6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Shopping Bag Icon - Right side */}
      <div
        className="absolute hidden lg:block"
        style={{
          right: '6%',
          top: '45%',
          transform: 'rotate(12deg)',
        }}
      >
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
          <path d="M10 15C10 12 11 11 14 11H31C34 11 35 12 35 15V35C35 38 34 39 31 39H14C11 39 10 38 10 35V15Z" fill="url(#bagBody)" />
          <path d="M16 11V8C16 5 18 3 22.5 3C27 3 29 5 29 8V11" stroke="#ec4492" strokeWidth="3" strokeLinecap="round" fill="none" />
          <defs>
            <linearGradient id="bagBody" x1="0.3" y1="0" x2="0.7" y2="1">
              <stop offset="0%" stopColor="#ffdded" />
              <stop offset="100%" stopColor="#ec4492" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mobile Labels - Below title on small screens */}
      <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3 px-4 md:hidden">
        <div className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md" style={{ transform: 'rotate(-3deg)' }}>
          <span className="text-xs sm:text-[13px] font-semibold italic" style={{ color: 'rgb(166, 102, 170)' }}>Digital products</span>
        </div>
        <div className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md" style={{ transform: 'rotate(5deg)' }}>
          <span className="text-xs sm:text-[13px] font-semibold italic" style={{ color: 'rgb(236, 68, 146)' }}>Agencies</span>
        </div>
        <div className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md" style={{ transform: 'rotate(-5deg)' }}>
          <span className="text-xs sm:text-[13px] font-semibold italic" style={{ color: 'rgb(62, 134, 198)' }}>SaaS</span>
        </div>
        <div className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md" style={{ transform: 'rotate(3deg)' }}>
          <span className="text-xs sm:text-[13px] font-semibold italic" style={{ color: 'rgb(238, 68, 84)' }}>Mobile apps</span>
        </div>
        <div className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md" style={{ transform: 'rotate(-4deg)' }}>
          <span className="text-xs sm:text-[13px] font-semibold italic" style={{ color: 'rgb(240, 84, 39)' }}>Services</span>
        </div>
      </div>

    </section>
  );
};

export default BusinessTypesSection;