import React from 'react';
import Image from 'next/image';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  const competitors = [
    { name: 'Adona', logo: '/images/WhatsApp%20Image%202026-02-02%20at%2000.58.37.jpeg', width: 40 },
    { name: 'ChatGPT', logo: 'https://framerusercontent.com/images/yY9pNxu0qpUr4niCLBCBcK6M0c.png', width: 32 },
    { name: 'Canva', logo: 'https://framerusercontent.com/images/qfpwTgf9Tt70RobBBWrrhF9cRCc.webp', width: 32 },
    { name: 'Midjourney', logo: 'https://framerusercontent.com/images/vSg08TS5xbEVFX0Ql5O2HlF8pQM.png', width: 32 },
  ];

  const features = [
    {
      name: 'Effortless, adaptive design',
      values: [true, false, false, false],
    },
    {
      name: 'Tailored to your brand',
      values: [true, true, false, false],
    },
    {
      name: 'Built to work while you rest',
      values: [true, false, false, false],
    },
    {
      name: 'Easy-to-use, engaging platform',
      values: [true, true, false, true],
    },
    {
      name: 'International language support',
      values: [true, false, false, false],
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold text-black mb-4 tracking-tight">
            One Tool For Complete Marketing Coverage
          </h2>
          <p className="text-[18px] md:text-[20px] text-gray-500 font-medium">
            Save up to $500/month in marketing costs with Adona
          </p>
        </div>

        {/* Table Container */}
        <div className="max-w-[1000px] mx-auto bg-white rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 md:p-12 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="pb-8 text-left w-[40%]"></th>
                {competitors.map((comp, i) => (
                  <th key={i} className="pb-8 text-center w-[15%]">
                    <div className="flex items-center justify-center h-12">
                      <Image
                        src={comp.logo}
                        alt={comp.name}
                        width={comp.width}
                        height={comp.width}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className={i !== features.length - 1 ? 'border-b border-gray-50' : ''}>
                  <td className="py-6 text-[16px] md:text-[18px] font-medium text-gray-800">
                    {feature.name}
                  </td>
                  {feature.values.map((isChecked, j) => (
                    <td key={j} className="py-6 text-center">
                      <div className="flex items-center justify-center">
                        {isChecked ? (
                          <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center">
                            <Check className="w-4 h-4 text-white stroke-[3px]" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-[#dc2626] flex items-center justify-center">
                            <X className="w-4 h-4 text-white stroke-[3px]" />
                          </div>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;