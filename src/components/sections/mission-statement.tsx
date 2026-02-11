"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

/**
 * MissionStatement Component
 * A text-heavy section with a scroll-triggered highlight/fade-in animation.
 * Features large typography and a "progressive reveal" effect as the user scrolls.
 */
export default function MissionStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // High-level design: Massive breathing room between sections (140px vertical)
  // Section Padding is defined in globals.css as .section-padding { padding-top: 140px; padding-bottom: 140px; }
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Content segments for progressive highlighting
  const lines = [
    {
      text: "At adona.ai we're revolutionizing how founders create content.",
      isFirst: true,
    },
    {
      text: "Using the latest AI models we capture your brand's essence to deliver agency-like content across all platforms.",
      isFirst: false,
    },
    {
      text: "So you can do the work of a full team without hiring one.",
      isFirst: false,
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center section-padding bg-background overflow-hidden"
    >
      <div className="container px-6 md:px-12 lg:px-24 max-w-[1100px] mx-auto">
        <div className="flex flex-col gap-10 md:gap-16">
          {lines.map((line, index) => (
            <div key={index} className="relative">
              <LineReveal 
                text={line.text} 
                progress={smoothProgress} 
                index={index} 
                total={lines.length}
                isFirst={line.isFirst}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface LineRevealProps {
  text: string;
  progress: any;
  index: number;
  total: number;
  isFirst: boolean;
}

const LineReveal = ({ text, progress, index, total, isFirst }: LineRevealProps) => {
  const words = text.split(" ");
  
  // Calculate range for this specific block of text
  const start = index / total;
  const end = (index + 1) / total;

  return (
    <div className="flex flex-wrap items-center justify-start gap-x-[0.25em] gap-y-1">
      {words.map((word, i) => {
        // Calculate range for each word within the block
        const wordStart = start + (i / words.length) * (end - start);
        const wordEnd = start + ((i + 1) / words.length) * (end - start);
        
        return (
          <Word 
            key={i} 
            word={word} 
            range={[wordStart, wordEnd]} 
            progress={progress}
            isAdona={word === "adona.ai" && isFirst}
          />
        );
      })}
    </div>
  );
};

interface WordProps {
  word: string;
  range: [number, number];
  progress: any;
  isAdona?: boolean;
}

const Word = ({ word, range, progress, isAdona }: WordProps) => {
  // Compute text color based on scroll progress
  // We go from #E6E6E6 (muted/inactive) to #1F1F1F (active)
  const opacity = useTransform(progress, range, [0.15, 1]);
  
  // Computed styles based on screenshots:
  // Typography: H2 style (Bold, ~48px, line-height 1.2, letter-spacing -0.02em)
  // Color tokens: #1F1F1F for active, #666666 for muted (but visually lighter inactive state)
  
  return (
    <span className="relative inline-block overflow-hidden">
      <motion.span
        style={{ opacity }}
        className={`font-display text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] font-bold leading-[1.1] tracking-[-0.03em] ${
          isAdona ? "text-[#1F1F1F]" : "text-[#1F1F1F]"
        }`}
      >
        {word}
      </motion.span>
    </span>
  );
};