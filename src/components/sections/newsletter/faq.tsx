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
    question: "What Is an AI Newsletter Maker?",
    answer: "An AI Newsletter Maker is a tool that uses artificial intelligence to automatically create email copy, designs, and creative concepts. Instead of spending hours writing and designing, you can generate high-performing, engaging newsletters in minutes — ready to send and optimized for results.",
  },
  {
    question: "How Does Adona's Newsletter Generator Work?",
    answer: "Start by entering your website link, and Adona's AI will analyze your brand voice, visual style, and target audience. It then generates unique, high-performing newsletter ideas that you can easily edit, customize, and send in minutes.",
  },
  {
    question: "What Types of Newsletters Can I Create with Adona?",
    answer: "Adona can generate all major types of newsletters, including promotional emails, welcome sequences, and retention campaigns. This gives you the flexibility to create high-performing email campaigns for any objective — from awareness to conversions.",
  },
  {
    question: "Do I need design or copywriting skills to generate newsletters?",
    answer: "No, Adona's AI newsletter generator is designed to make your life easier. All you need is a website URL, and our AI will take it from there.",
  },
  {
    question: "How Do I Create Newsletters with Adona?",
    answer: "Getting started is simple. Paste your website URL, choose an email concept, and customize the content to match your goals. No complex setup, no technical skills — just fast, high-quality newsletters ready to send.",
  },
  {
    question: "Can I Use a Newsletter Maker for Free? How Much Does Adona Cost?",
    answer: "Adona does not offer a free plan, but pricing starts at just $9.70 per month on the annual plan. Every subscription is backed by a 14-day money-back guarantee, so you can try Adona risk-free. You get one transparent price with no hidden fees and full access to all features.",
  },
  {
    question: "What Makes Adona Different from other newsletter creation tools?",
    answer: "Adona is built for real marketing performance — not generic, one-size-fits-all content. Every feature is designed to help you create campaigns that drive measurable results. Here's how we stand apart:\n\n1. Built-In Brand Intelligence\nAdona learns your brand voice, visual style, and audience preferences, ensuring every campaign looks and feels like it was created by your internal team.\n\n2. Performance-Tested Creative Intelligence\nPowered by insights from millions of high-performing campaigns, Adona generates conversion-focused creatives designed to deliver real business impact — not just fill space.\n\n3. Global-Ready by Design\nWith support for 95+ languages, Adona helps you launch consistent, on-brand campaigns in any market, anywhere in the world.",
  },
  {
    question: "Does Adona Improve Newsletter Performance?",
    answer: "Yes. Adona uses insights from millions of high-performing marketing assets to understand what drives engagement and conversions. This allows it to generate newsletters designed to attract attention, increase open rates, and deliver better results.",
  },
];

export default function NewsletterFAQ() {
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