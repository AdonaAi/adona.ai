"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * AnimatedManifesto Component
 * 
 * A scroll-revealing text section that highlights sentences as the user scrolls.
 * Based on the "At adona.ai we're revolutionizing..." section design.
 */
const AnimatedManifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // We want to track the scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // The text is split into chunks for incremental highlighting
  // Each paragraph is a chunk of progress
  const content: { text: string; range: [number, number] }[] = [
    {
      text: "At Adona we're revolutionizing how founders create content.",
      range: [0.15, 0.35],
    },
    {
      text: "Using the latest AI models we capture your brand's essence to deliver agency-like content across all platforms.",
      range: [0.4, 0.65],
    },
    {
      text: "So you can do the work of a full team without hiring one.",
      range: [0.7, 0.9],
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-[150vh] py-32 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-[800px] w-full mx-auto space-y-12 text-center">
        {content.map((paragraph, pIdx) => (
          <Paragraph
            key={pIdx}
            text={paragraph.text}
            range={paragraph.range}
            progress={smoothProgress}
          />
        ))}
      </div>
    </section>
  );
};

interface ParagraphProps {
  text: string;
  range: [number, number];
  progress: any;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, range, progress }) => {
  const words = text.split(" ");
  const totalWords = words.length;

  return (
    <p className="flex flex-wrap justify-center text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] tracking-tight">
      {words.map((word, i) => {
        // Calculate the individual word range within the paragraph's range
        const start = range[0] + (i / totalWords) * (range[1] - range[0]);
        const end = range[0] + ((i + 1) / totalWords) * (range[1] - range[0]);

        return (
          <Word key={i} progress={progress} range={[start, end]} isFirst={word === "At" || word === "adona.ai"}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
  isFirst: boolean;
}

const Word: React.FC<WordProps> = ({ children, progress, range, isFirst }) => {
  // Map opacity and color saturation based on scroll position
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["#d1d5db", "#000000"]);

  // We explicitly want the first two words "At adona.ai" to have high initial priority or distinct styling
  // though the original site seems to treat them as parts of the scroll sequence too.

  return (
    <motion.span
      style={{ opacity, color }}
      className="mr-[0.25em] mb-[0.1em]"
    >
      {children}
    </motion.span>
  );
};

export default AnimatedManifesto;