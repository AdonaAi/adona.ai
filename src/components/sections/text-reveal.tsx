"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * TextRevealSection Component
 * A scroll-driven text reveal section that highlights words as the user scrolls.
 * Based on the adona.ai landing page design system.
 */
const TextRevealSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // This section should have enough scroll height to animate comfortably.
  // We use scroll offset tracking on the container.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const content = [
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

  return (
    <section
      ref={containerRef}
      id="integrations"
      className="relative min-h-[150vh] flex flex-col items-center justify-center bg-white py-[120px] px-10"
    >
      <div className="sticky top-[20%] max-w-[1200px] w-full mx-auto space-y-12">
        <Paragraph
          progress={scrollYProgress}
          range={[0, 0.33]}
          words="Adona is transforming how founders and businesses create marketing content."
          boldWords={["Adona"]}
        />
        <Paragraph
          progress={scrollYProgress}
          range={[0.33, 0.66]}
          words="Using advanced AI models, we capture your brand's identity and deliver agency-quality creatives across every platform."
          boldWords={[]}
        />
        <Paragraph
          progress={scrollYProgress}
          range={[0.66, 1]}
          words="This allows you to scale like a full team — without the cost and complexity of hiring one."
          boldWords={[]} />
      </div>
    </section>
  );
};

interface ParagraphProps {
  words: string;
  progress: MotionValue<number>;
  range: [number, number];
  boldWords: string[];
}

const Paragraph = ({ words, progress, range, boldWords }: ParagraphProps) => {
  const wordsArray = words.split(" ");
  const step = (range[1] - range[0]) / wordsArray.length;

  return (
    <div className="flex flex-wrap justify-center text-center gap-x-[0.5em] gap-y-2">
      {wordsArray.map((word, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        const isBold = boldWords.includes(word.replace(/[.,]/g, ""));

        return (
          <Word
            key={i}
            progress={progress}
            range={[start, end]}
            isBold={isBold}
          >
            {word}
          </Word>
        );
      })}
    </div>
  );
};

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isBold?: boolean;
}

const Word = ({ children, progress, range, isBold }: WordProps) => {
  // Map scroll progress to opacity: 0.1 (faint) to 1 (solid)
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={cn(
        "text-[32px] md:text-[48px] font-sans tracking-tight leading-[1.2]",
        isBold ? "font-bold text-black" : "font-medium text-[#000000]"
      )}
    >
      {children}
    </motion.span>
  );
};

export default TextRevealSection;