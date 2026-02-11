import React from 'react';
import Image from 'next/image';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "High-performing design",
      holo: true,
      chatgpt: false,
      canva: false,
      copyai: false,
    },
    {
      feature: "Personalised for your brand",
      holo: true,
      chatgpt: true,
      canva: false,
      copyai: false,
    },
    {
      feature: "Works while you sleep",
      holo: true,
      chatgpt: false,
      canva: false,
      copyai: false,
    },
    {
      feature: "Easy-to-use, fun platform",
      holo: true,
      chatgpt: true,
      canva: false,
      copyai: false,
    },
    {
      feature: "Multi-language support",
      holo: true,
      chatgpt: false,
      canva: false,
      copyai: false,
    }
  ];

  return (
    <section className="section-padding bg-[#fafafa]">
      <div className="container px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[48px] font-bold tracking-tight text-black font-display leading-[1.15]">
            1 tool to do it all
          </h2>
          <p className="text-[20px] text-[#666666] font-sans">
            Save $400/month. Just get adona.ai.
          </p>
        </div>

        {/* Comparison Card */}
        <div className="max-w-[1000px] mx-auto bg-white rounded-[24px] border border-[#e5e5e5] shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="py-12 px-8 w-[40%]"></th>
                  <th className="py-10 px-4 text-center align-middle">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 relative mb-2">
                        <Image 
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/fXJpy9T5cU7DjR8QWJYviZTLuI-28.png"
                          alt="adona.ai"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </th>
                  <th className="py-10 px-4 text-center align-middle opacity-60">
                    <div className="flex justify-center">
                      {/* ChatGPT Placeholder - replicating visual from screenshot */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </div>
                  </th>
                  <th className="py-10 px-4 text-center align-middle opacity-60">
                    <div className="flex justify-center">
                      {/* Canva Placeholder */}
                      <div className="w-6 h-6 rounded-md bg-[#00C4CC] flex items-center justify-center text-white font-bold text-[10px]">C</div>
                    </div>
                  </th>
                  <th className="py-10 px-4 text-center align-middle opacity-60">
                    <div className="flex justify-center">
                      {/* Copy AI Placeholder */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-[#f5f5f5] last:border-none">
                    <td className="py-7 px-8 text-[16px] font-medium text-black">
                      {row.feature}
                    </td>
                    <td className="py-7 px-4 text-center">
                      <div className="flex justify-center">
                        <div className="w-6 h-6 bg-[#4ade80] rounded-full flex items-center justify-center">
                          <Check className="text-white w-4 h-4" strokeWidth={3} />
                        </div>
                      </div>
                    </td>
                    <td className="py-7 px-4 text-center">
                      <div className="flex justify-center">
                        {row.chatgpt ? (
                          <div className="w-6 h-6 bg-[#4ade80] rounded-full flex items-center justify-center">
                            <Check className="text-white w-4 h-4" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-6 h-6 bg-[#ef4444] rounded-full flex items-center justify-center">
                            <X className="text-white w-4 h-4" strokeWidth={3} />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-7 px-4 text-center">
                      <div className="flex justify-center">
                        {row.canva ? (
                          <div className="w-6 h-6 bg-[#4ade80] rounded-full flex items-center justify-center">
                            <Check className="text-white w-4 h-4" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-6 h-6 bg-[#ef4444] rounded-full flex items-center justify-center">
                            <X className="text-white w-4 h-4" strokeWidth={3} />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-7 px-4 text-center">
                      <div className="flex justify-center relative">
                        {row.copyai ? (
                          <div className="w-6 h-6 bg-[#4ade80] rounded-full flex items-center justify-center">
                            <Check className="text-white w-4 h-4" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-6 h-6 bg-[#ef4444] rounded-full flex items-center justify-center">
                            <X className="text-white w-4 h-4" strokeWidth={3} />
                          </div>
                        )}
                        {/* "Generated with adona.ai" Floating Badge Logic - Positioned on the last few rows */}
                        {index === 2 && (
                          <div className="absolute top-2 left-1/2 ml-4 flex flex-col items-center pointer-events-none z-10 w-[240px]">
                            <span className="text-[14px] font-bold text-black mb-1">Generated with</span>
                            <div className="relative">
                              <span className="text-[44px] font-extrabold tracking-tight bg-mesh-gradient bg-clip-text text-transparent italic leading-tight">
                                adona.ai
                              </span>
                              {/* Soft glow behind the logo branding */}
                              <div className="absolute -inset-4 bg-mesh-gradient opacity-10 blur-[20px] rounded-full -z-10"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;