"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Adona.ai?",
    answer: "Adona is your all-in-one AI-powered marketing platform. It creates ads, social posts, and emails that match your brand voice and visual style — as if they were produced by your in-house team. No templates. No generic content. Just high-quality, on-brand campaigns, ready to launch.",
  },
  {
    question: "What Makes Adona Different?",
    answer: "Adona is built for real marketing performance — not generic, one-size-fits-all content. Every feature is designed to help you create campaigns that drive measurable results. Here’s how we stand apart:\n\n1. Built-In Brand Intelligence\nAdona learns your brand voice, visual style, and audience preferences, ensuring every campaign looks and feels like it was created by your internal team.\n\n2. Performance-Tested Creative Intelligence\nPowered by insights from millions of high-performing campaigns, Adona generates conversion-focused creatives designed to deliver real business impact — not just fill space.\n\n3. Global-Ready by Design\nWith support for 95+ languages, Adona helps you launch consistent, on-brand campaigns in any market, anywhere in the world.",
  },
  {
    question: "Do I Need Technical or Marketing Skills to Use Adona?",
    answer: "No. Adona is built for founders, creators, and marketers who want speed and results — not a steep learning curve. The platform is intuitive, guided, and ready to use from day one, so you can launch high-performing campaigns without prior experience.",
  },
  {
    question: "What Kind of Content Can Adona Generate?",
    answer: "Everything you need to grow your business — all in one platform:\n\n• High-performing ad creatives (static and video)\n• Social media posts for every major platform\n• Conversion-focused email sequences\n• Integrated promotional campaigns\n• And more — always aligned with your brand voice",
  },
  {
    question: "Can I Run Multiple Brands?",
    answer: "Yes. With Adona, you can manage up to five brands under a single account. Each brand has its own workspace, brand profile, and creative settings — so you can keep campaigns fully organized and on-brand.",
  },
  {
    question: "Do I Need Design or Editing Skills to Use Adona?",
    answer: "No. Adona handles the creative process for you, from design to formatting and optimization. You can focus on launching and scaling your campaigns — without worrying about technical or design work.",
  },
  {
    question: "Is Adona Better Than ChatGPT?",
    answer: "General AI tools are powerful, but they are not built specifically for marketing. Adona is designed for one purpose: helping you create high-performing campaigns quickly and consistently.\n\nWith general AI tools, you spend time writing prompts, refining outputs, and manually aligning visuals with your brand. Adona removes that complexity. It automatically creates branded, campaign-ready ads, emails, and social content — no prompt engineering, no trial and error, just results you can launch in minutes.",
  },
  {
    question: "Do You Offer a Free Trial?",
    answer: "Not currently. But you’re covered by our 14-day money-back guarantee — try Adona risk-free.",
  },
  {
    question: "Will Adona Work for My Business?",
    answer: "Yes. Adona supports a wide range of business types and helps you produce professional content with speed and consistency.",
  },
  {
    question: "Does Adona Work If I Don’t Have a Website?",
    answer: "Yes. You can use any valid URL during onboarding and update your brand information later. Adona is designed to adapt as your business grows, even if you’re just getting started.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-background" id="faq">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-center">
          <h2 className="h2 mb-8 sm:mb-10 md:mb-12 text-center text-primary font-bold">FAQ</h2>

          <div className="w-full max-auto" style={{ maxWidth: "700px" }}>
            <div className="flex flex-col gap-3 sm:gap-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#f1f5f9] rounded-2xl sm:rounded-[24px] overflow-hidden transition-all duration-300"
                  style={{
                    boxShadow: openIndex === index ? "0 10px 30px rgba(0,0,0,0.05)" : "none"
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left flex items-center justify-between p-4 sm:p-5 md:p-6 focus:outline-none group"
                  >
                    <span className="text-sm sm:text-base md:text-lg lg:text-[18px] font-bold text-primary pr-3 sm:pr-4 leading-tight">
                      {item.question}
                    </span>
                    <div
                      className={cn(
                        "flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center transition-transform duration-300",
                        openIndex === index ? "rotate-45" : "rotate-0"
                      )}
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </button>

                  <div
                    className={cn(
                      "transition-all duration-300 ease-in-out opacity-0 overflow-hidden",
                      openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0"
                    )}
                  >
                    <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-[#666666] text-sm sm:text-base md:text-[16px] leading-[1.6]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .section-padding {
          padding-top: 60px;
          padding-bottom: 60px;
        }
        @media (min-width: 640px) {
          .section-padding {
            padding-top: 80px;
            padding-bottom: 80px;
          }
        }
        @media (min-width: 768px) {
          .section-padding {
            padding-top: 100px;
            padding-bottom: 100px;
          }
        }
        @media (min-width: 1024px) {
          .section-padding {
            padding-top: 120px;
            padding-bottom: 120px;
          }
        }
        .h2 {
          font-family: var(--font-sans);
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.03em;
        }
      `}</style>
    </section>
  );
}