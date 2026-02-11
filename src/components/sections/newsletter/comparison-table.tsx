import React from 'react';
import Image from 'next/image';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  const comparisonData = [
    {
      feature: "High-performing design",
      holo: true,
      standardAi: false,
      agencies: false,
      manual: false,
    },
    {
      feature: "Personalised for your brand",
      holo: true,
      standardAi: true,
      agencies: false,
      manual: false,
    },
    {
      feature: "Works while you sleep",
      holo: true,
      standardAi: false,
      agencies: false,
      manual: false,
    },
    {
      feature: "Easy-to-use, fun platform",
      holo: true,
      standardAi: true,
      agencies: false,
      manual: false,
    },
    {
      feature: "Multi-language support",
      holo: true,
      standardAi: false,
      agencies: false,
      manual: false,
    },
  ];

  const assets = {
    holoIcon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/P4wlPWYPjrII0beqkU9OTtayv0-29.jpg",
  };

  return (
    <section className="bg-white py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold tracking-tight text-[#1a1a1a] leading-[1.2] mb-4">
            1 tool to do it all
          </h2>
          <p className="text-[18px] text-[#666666] font-medium">
            Save $400/month. Just get adona.ai.
          </p>
        </div>

        <div className="bg-[#ffffff] border border-[#f2f2f2] rounded-[32px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="w-[35%] py-10 px-8"></th>
                  <th className="w-[16%] py-10 px-4 text-center">
                    <div className="flex justify-center">
                      <Image 
                        src={assets.holoIcon} 
                        alt="adona.ai" 
                        width={48} 
                        height={48} 
                        className="rounded-full"
                      />
                    </div>
                  </th>
                  <th className="w-[16%] py-10 px-4 text-center">
                    <div className="flex justify-center">
                      <div className="w-10 h-10 flex items-center justify-center grayscale">
                        {/* Standard AI Icon Representation */}
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[#666]">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="w-[16%] py-10 px-4 text-center">
                    <div className="flex justify-center">
                      <div className="w-10 h-10 flex items-center justify-center grayscale">
                        {/* Agencies Icon Representation */}
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[#666]">
                          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="w-[16%] py-10 px-4 text-center">
                    <div className="flex justify-center">
                      <div className="w-10 h-10 flex items-center justify-center grayscale">
                        {/* Manual Icon Representation */}
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[#666]">
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        </svg>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f2f2f2]">
                {comparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-8 px-8 text-[16px] font-medium text-[#666666]">
                      {row.feature}
                    </td>
                    <td className="py-8 px-4 text-center">
                      <div className="flex justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#4ade80]/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-[#4ade80]" strokeWidth={3} />
                        </div>
                      </div>
                    </td>
                    <td className="py-8 px-4 text-center">
                      <div className="flex justify-center">
                        {row.standardAi ? (
                          <div className="w-6 h-6 rounded-full bg-[#4ade80]/10 flex items-center justify-center">
                            <Check className="w-4 h-4 text-[#4ade80]" strokeWidth={3} />
                          </div>
                        ) : (
                          <X className="w-4 h-4 text-[#ef4444]" strokeWidth={2.5} />
                        )}
                      </div>
                    </td>
                    <td className="py-8 px-4 text-center">
                      <div className="flex justify-center">
                        {row.agencies ? (
                          <div className="w-6 h-6 rounded-full bg-[#4ade80]/10 flex items-center justify-center">
                            <Check className="w-4 h-4 text-[#4ade80]" strokeWidth={3} />
                          </div>
                        ) : (
                          <X className="w-4 h-4 text-[#ef4444]" strokeWidth={2.5} />
                        )}
                      </div>
                    </td>
                    <td className="py-8 px-4 text-center">
                      <div className="flex justify-center">
                        {row.manual ? (
                          <div className="w-6 h-6 rounded-full bg-[#4ade80]/10 flex items-center justify-center">
                            <Check className="w-4 h-4 text-[#4ade80]" strokeWidth={3} />
                          </div>
                        ) : (
                          <X className="w-4 h-4 text-[#ef4444]" strokeWidth={2.5} />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="relative p-10 flex flex-col items-end">
            <div className="text-right">
              <span className="text-[14px] font-semibold text-[#666666] block mb-2 opacity-50">Generated with</span>
              <div className="text-[40px] font-extrabold tracking-tighter leading-none bg-holo-gradient bg-clip-text text-transparent italic">
                adona.ai
              </div>
            </div>
            {/* Visual glow element like in screenshot */}
            <div className="absolute right-0 bottom-0 w-[200px] h-[100px] bg-holo-pink opacity-5 blur-[80px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;