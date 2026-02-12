"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const BusinessTypesSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#f7f7f8] overflow-hidden py-10 sm:py-12 md:py-0 md:h-[300px] lg:h-[350px] xl:h-[400px]"
      id="business-types"
    >
      {/* Checkmark Icon - Top Left */}
      <SpreadItem scrollYProgress={scrollYProgress} direction="topLeft" className="absolute hidden lg:block left-[12%] top-[18%] rotate-[9deg]">
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
      </SpreadItem>

      {/* Cursor/Send Icon - Left side */}
      <SpreadItem scrollYProgress={scrollYProgress} direction="left" className="absolute hidden lg:block left-[5%] top-[50%] -translate-y-1/2">
        <svg width="40" height="40" viewBox="0 0 46 46" fill="none">
          <path d="M6 13L40 7L28 41L21 25L6 19V13Z" fill="url(#cursorGrad)" />
          <defs>
            <linearGradient id="cursorGrad" x1="0.14" y1="0" x2="0.86" y2="1">
              <stop offset="0%" stopColor="#fee8ff" />
              <stop offset="100%" stopColor="#a666aa" />
            </linearGradient>
          </defs>
        </svg>
      </SpreadItem>

      {/* Title - Center */}
      <div className="relative md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 px-4 sm:px-6 text-center z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-[#1d1d1f] leading-[1.1]">
          Compatible with All Business Models
        </h1>
      </div>

      {/* Agencies - Top Right */}
      <SpreadItem scrollYProgress={scrollYProgress} direction="topRight" className="absolute hidden md:block right-[8%] top-[22%] rotate-[9deg]">
        <div className="bg-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <span className="text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold italic" style={{ color: 'rgb(236, 68, 146)' }}>
            Agencies
          </span>
        </div>
      </SpreadItem>

      {/* Digital products - Left */}
      <SpreadItem scrollYProgress={scrollYProgress} direction="left" className="absolute hidden md:block left-[10%] top-[32%] rotate-[8deg]">
        <div className="bg-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <span className="text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold italic" style={{ color: 'rgb(166, 102, 170)' }}>
            Digital products
          </span>
        </div>
      </SpreadItem>

      {/* SaaS - Bottom Left */}
      <SpreadItem scrollYProgress={scrollYProgress} direction="bottomLeft" className="absolute hidden md:block left-[15%] bottom-[22%] -rotate-[13deg]">
        <div className="bg-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <span className="text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold italic" style={{ color: 'rgb(62, 134, 198)' }}>
            SaaS
          </span>
        </div>
      </SpreadItem>

      {/* Mobile apps - Bottom Center */}
      <SpreadItem scrollYProgress={scrollYProgress} direction="bottom" className="absolute hidden md:block left-[38%] bottom-[18%] rotate-[11deg]">
        <div className="bg-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <span className="text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold italic" style={{ color: 'rgb(238, 68, 84)' }}>
            Mobile apps
          </span>
        </div>
      </SpreadItem>

      {/* Services - Bottom Right */}
      <SpreadItem scrollYProgress={scrollYProgress} direction="bottomRight" className="absolute hidden md:block right-[12%] bottom-[25%] -rotate-[16deg]">
        <div className="bg-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <span className="text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold italic" style={{ color: 'rgb(240, 84, 39)' }}>
            Services
          </span>
        </div>
      </SpreadItem>

      {/* Briefcase Icon - Bottom Left */}
      <SpreadItem scrollYProgress={scrollYProgress} direction="bottomLeft" className="absolute hidden lg:block left-[8%] bottom-[18%] rotate-[15deg]">
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
      </SpreadItem>

      {/* Shopping Bag Icon - Right side */}
      <SpreadItem scrollYProgress={scrollYProgress} direction="right" className="absolute hidden lg:block right-[6%] top-[45%] rotate-[12deg]">
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
      </SpreadItem>

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

// Helper component to handle spread animation logic
const SpreadItem = ({
  children,
  scrollYProgress,
  direction,
  className
}: {
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
  direction: 'topLeft' | 'top' | 'topRight' | 'left' | 'right' | 'bottomLeft' | 'bottom' | 'bottomRight';
  className?: string;
}) => {
  // Map scroll progress to a value that grows as we scroll down into view
  // 0 -> centered (collapsed), 1 -> spread (expanded)
  // We want it to start spreading as it enters, and be fully spread when centered
  const spreadFactor = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]); // Adjust range for timing

  // Dynamic transforms based on direction
  const xMult = direction.includes('Left') ? -100 : direction.includes('Right') ? 100 : 0;
  const yMult = direction.includes('top') ? -80 : direction.includes('bottom') ? 80 : 0;

  // Initial offset (clustered near center)
  // When spreadFactor is 0 (start), we pull items significantly closer to center
  // When spreadFactor is 1 (end of anim), we let them be at their css-defined position (0 translate offset relative to CSS position)

  // Actually, better approach: 
  // Define start position as "Center of container" relative to "Final CSS position".
  // But calculating exact center relative to CSS absolute positions is tricky without fixed px values.
  // Approximation: Animate from `translate(X, Y)` to `translate(0, 0)` where X,Y push it towards center.

  // Example: TopLeft item is at left: 10%, top: 10%. Center is 50%, 50%.
  // So it needs to move roughly +40% X, +40% Y to be center.
  // Let's use simpler relative offsets in pixels for a "pop out" effect.

  const x = useTransform(spreadFactor, [0, 1], [xMult * -1.5, 0]); // From closer to center -> to 0 offset
  const y = useTransform(spreadFactor, [0, 1], [yMult * -1.5, 0]);
  const scale = useTransform(spreadFactor, [0, 1], [0.5, 1]);
  const opacity = useTransform(spreadFactor, [0, 1], [0, 1]);

  return (
    <motion.div
      className={className}
      style={{ x, y, scale, opacity }}
    >
      {children}
    </motion.div>
  );
};

export default BusinessTypesSection;