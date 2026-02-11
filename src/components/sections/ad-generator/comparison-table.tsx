import React from 'react';
import Image from 'next/image';

const ComparisonTable = () => {
  const comparisonData = [
    {
      feature: "High-performing design",
      holo: true,
      chatgpt: false,
      canva: false,
      midjourney: false,
    },
    {
      feature: "Personalised for your brand",
      holo: true,
      chatgpt: true,
      canva: false,
      midjourney: false,
    },
    {
      feature: "Works while you sleep",
      holo: true,
      chatgpt: false,
      canva: false,
      midjourney: false,
    },
    {
      feature: "Easy-to-use, fun platform",
      holo: true,
      chatgpt: true,
      canva: true,
      midjourney: false,
    },
    {
      feature: "Multi-language support",
      holo: true,
      chatgpt: false,
      canva: false,
      midjourney: false,
    },
  ];

  const CheckIcon = () => (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#22C55E]/10">
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5L5 9L13 1"
          stroke="#22C55E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  const CrossIcon = () => (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#EF4444]/10">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 1L1 9M1 1L9 9"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  return (
    <section className="bg-[#FCFCFC] py-[120px] px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-bold tracking-[-0.02em] leading-[1.2] text-[#1A1A1A] mb-4">
            1 tool to do it all
          </h2>
          <p className="text-[18px] text-[#666666] font-medium">
            Save $400/month. Just get adona.ai.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white border border-[#F1F1F1] rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
              {/* Table Header */}
              <div className="p-8 border-b border-[#F1F1F1]" />
              <div className="p-8 border-b border-[#F1F1F1] flex justify-center items-center">
                <div className="w-12 h-12 relative flex items-center justify-center">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/pUdeWa2H4mWg5sXM3wMPvjiTME-29.png"
                    alt="adona.ai Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-8 border-b border-[#F1F1F1] flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M22.28 7.53a9.99 9.99 0 0 0-4.305-3.878 10.15 10.15 0 0 0-6.19-.387 10.3 10.3 0 0 0-5.353 3.12 10.3 10.3 0 0 0-2.347 5.736A10.2 10.2 0 0 0 5.176 18.2a9.99 9.99 0 0 0 4.305 3.878c.373.167.761.299 1.157.393a5.57 5.57 0 0 1 .158-4.665l-2.072-1.197a.2.2 0 0 1-.073-.274l1.197-2.073c.036-.062.115-.084.177-.048l2.073 1.197c.567.327 1.25.437 1.889.31L13.98 9.53a.2.2 0 0 1 .273-.073l2.073 1.197c.567.327.935.918 1.018 1.564a5.5 5.5 0 0 1 1.012 3.824l1.197 2.072a.2.2 0 0 1-.073.274l-2.072 1.197c-.37.214-.795.347-1.233.393a10.04 10.04 0 0 0 6.196-12.448Z" fill="#1A1A1A"/>
                </svg>
              </div>
              <div className="p-8 border-b border-[#F1F1F1] flex justify-center items-center">
                <div className="w-6 h-6 rounded-md bg-[#00C2CB] flex items-center justify-center font-bold text-white text-[12px]">C</div>
              </div>
              <div className="p-8 border-b border-[#F1F1F1] flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" fill="#1A1A1A"/>
                </svg>
              </div>

              {/* Rows */}
              {comparisonData.map((row, idx) => (
                <React.Fragment key={idx}>
                  <div className="p-8 border-b border-[#F1F1F1] flex items-center">
                    <span className="text-[16px] text-[#666666] font-medium">{row.feature}</span>
                  </div>
                  <div className="p-8 border-b border-[#F1F1F1] flex justify-center items-center bg-[#FCFCFC]/50">
                    {row.holo ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <div className="p-8 border-b border-[#F1F1F1] flex justify-center items-center">
                    {row.chatgpt ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <div className="p-8 border-b border-[#F1F1F1] flex justify-center items-center">
                    {row.canva ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <div className="p-8 border-b border-[#F1F1F1] flex justify-center items-center">
                    {row.midjourney ? <CheckIcon /> : <CrossIcon />}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Floating adona.ai Badge */}
          <div className="absolute right-[-40px] bottom-[-20px] bg-white border border-[#F1F1F1] rounded-[24px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 max-w-[260px] transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center gap-3">
              <span className="text-[14px] font-bold text-[#1A1A1A] tracking-tight">Generated with</span>
              <div className="text-[48px] font-extrabold tracking-tighter bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#EF4444] bg-clip-text text-transparent">
                adona.ai
              </div>
              <div className="flex gap-2 mt-2">
                <div className="w-10 h-10 rounded-full bg-[#FF7E82]/20 blur-[12px] absolute -z-1" />
                <div className="w-10 h-10 rounded-full bg-[#A855F7]/20 blur-[12px] absolute translate-x-12 -z-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;