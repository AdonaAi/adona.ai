"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const MissionText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // We track the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sentences = [
    {
      text: "At adona.ai we're revolutionizing how founders create content.",
      highlight: ["At", "adona.ai"],
    },
    {
      text: "Using the latest AI models we capture your brand's essence to deliver agency-like content across all platforms.",
      highlight: [],
    },
    {
      text: "So you can do the work of a full team without hiring one.",
      highlight: [],
    },
  ];

  // Logic: Split text into words and apply opacity animation to each
  // Since we want a smooth cascade, we calculate based on word index
  const allWords = sentences.flatMap((s) => s.text.split(" "));

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center bg-white py-[120px] px-10 overflow-hidden"
      id="integrations"
    >
      <div className="max-width-[1200px] w-full flex flex-col items-center">
        <div className="flex flex-col gap-12 max-w-[800px] text-center md:text-left">
          {sentences.map((sentence, sIdx) => (
            <div key={sIdx} className="flex flex-wrap items-center justify-center md:justify-start gap-x-[0.35em] gap-y-2">
              {sentence.text.split(" ").map((word, wIdx) => {
                // Determine absolute index for scroll trigger timing
                const absoluteIndex = sentences
                  .slice(0, sIdx)
                  .reduce((acc, s) => acc + s.text.split(" ").length, 0) + wIdx;
                
                const totalWords = allWords.length;
                
                // Opacity range: words light up as we scroll
                // Start lighting up at 0.1, finish by 0.6 of the container's scroll
                const start = 0.1 + (absoluteIndex / totalWords) * 0.4;
                const end = start + 0.1;
                
                const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
                const isHighlighted = sentence.highlight.includes(word.replace(/[.,]/g, ""));

                return (
                  <motion.span
                    key={wIdx}
                    style={{ opacity }}
                    className={`
                      text-[clamp(32px,5vw,48px)] 
                      font-bold 
                      leading-[1.2] 
                      tracking-[-0.03em] 
                      font-sans
                      ${isHighlighted ? "text-[#1A1A1A]" : "text-[#1A1A1A]"}
                    `}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionText;