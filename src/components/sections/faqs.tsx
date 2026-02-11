"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-[#e6e6e6] last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-[24px] px-[32px] text-left hover:bg-gray-50/50 transition-colors duration-200"
      >
        <span className="text-[18px] font-semibold text-[#000000] leading-[1.4]">
          {question}
        </span>
        <div
          className={cn(
            "flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#000000] text-white transition-transform duration-200",
            isOpen && "rotate-45"
          )}
        >
          <Plus size={20} strokeWidth={2.5} />
        </div>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out px-[32px]",
          isOpen ? "grid-rows-[1fr] pb-[24px] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-[16px] text-[#666666] leading-[1.6]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is an AI Facebook ad maker?",
      answer: "An AI Facebook ad maker is a tool that uses artificial intelligence to automatically generate ad creative, copy, and headlines for your Facebook marketing campaigns. By analyzing your brand’s DNA and high-performing ad patterns, it creates optimized content in seconds.",
    },
    {
      question: "How does adona.ai’s Facebook Ad Generator work?",
      answer: "Simply enter your website URL. adona.ai's AI crawls your site to understand your products, brand voice, and visual style. It then combines this with data from millions of high-performing ads to generate dozens of custom ad ideas ready for launch.",
    },
    {
      question: "What types of Facebook ads can I create with adona.ai?",
      answer: "You can create a wide variety of formats including Single Image ads, Video ads, Carousel ads, and UGC-style content. adona.ai handles the creative, the primary text, and the headlines for each format.",
    },
    {
      question: "Do I need design or copywriting skills to generate ads?",
      answer: "Not at all. adona.ai is designed for founders and marketers who want professional results without the technical overhead. The AI handles the high-performance design principles and persuasive copywriting for you.",
    },
    {
      question: "How do I make my own Facebook ads using the adona.ai tool?",
      answer: "After logging in, paste your landing page link. Choose from the daily generated ad concepts, customize the text or images using our intuitive editor if needed, and export them directly to your Facebook Ads Manager.",
    },
    {
      question: "Can I use an ad maker for free? How much does adona.ai cost?",
      answer: "We offer various plans to suit different business sizes. While we focus on providing premium, agency-quality results, our pricing is a fraction of the cost of hiring a creative agency. Check our pricing page for current offers.",
    },
    {
      question: "What makes adona.ai different from other ad creation tools?",
      answer: "Unlike generic templates, adona.ai's Content Intelligence engine understands your brand's unique style. It doesn't just put text on a box; it creates unique compositions based on what’s actually converting in your specific industry.",
    },
    {
      question: "Does adona.ai improve ad performance?",
      answer: "Yes. adona.ai is trained on millions of data points from successful campaigns. By using AI to optimize for hooks, visual hierarchy, and emotional triggers, users often see a significant lift in CTR and ROAS compared to basic templates.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fafafa] py-[160px] px-6" id="faqs">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-[64px]">
          <h2 className="text-[48px] font-bold text-[#000000] tracking-tight leading-[1.2]">
            Facebook Ad Maker FAQs
          </h2>
        </div>

        <div className="bg-white rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-[#e6e6e6] overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}