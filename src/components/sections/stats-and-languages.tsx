import React from 'react';
import Image from 'next/image';

const StatsAndLanguages = () => {
  const stats = [
    {
      value: "10M+",
      label: "various content assets processed",
      color: "text-[#FF4D6D]",
    },
    {
      value: "19,000+",
      label: "high-performing ads analyzed",
      color: "text-[#7B61FF]",
    },
    {
      value: "27%",
      label: "average CTR lift across tested campaigns",
      color: "text-[#FF4D6D]",
    },
    {
      value: "95+",
      label: "languages supported for global brands",
      color: "text-[#7B61FF]",
    },
  ];

  // Based on the screenshot grid, providing a representative set of flags from standard assets or placeholders
  // The original has around 80-90 flags in a grid.
  const flags = Array.from({ length: 90 }).map((_, i) => ({
    id: i,
    src: i === 0 ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/ds0gjjp6jiKAirdsuFd6ufdiU-19.png" : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/zDOwxSWhNTga6kROlzhHlvDfHY-20.png",
  }));

  return (
    <section className="bg-white py-[120px] overflow-hidden">
      <div className="container mx-auto px-10">
        {/* Section Heading */}
        <div className="text-center mb-24">
          <h2 className="text-[20px] font-semibold text-[#1a1a1a] mb-12">
            This isn't just AI. It's content intelligence.
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[1100px] mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className={`text-[48px] font-bold tracking-tight mb-2 ${stat.color}`}>
                  {stat.value}
                </span>
                <p className="text-[#666666] text-[16px] leading-snug max-w-[180px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Languages Grid */}
        <div className="relative mt-32 max-w-[900px] mx-auto">
          {/* Flag Grid */}
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-x-4 gap-y-6 justify-items-center opacity-90">
            {flags.map((flag, i) => (
              <div 
                key={flag.id} 
                className="w-[44px] h-[32px] relative rounded-[4px] overflow-hidden shadow-sm"
              >
                {/* Centered text instead of flags since we only have 2 specific assets but grid needs many */}
                <Image
                  src={flag.src}
                  alt="Country flag"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Centered Overlay Label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/95 px-8 py-3 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#f0f0f0] backdrop-blur-sm">
              <span className="text-[24px] font-bold text-[#1a1a1a]">99+ languages</span>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-32">
          <h3 className="text-[32px] font-bold text-[#1a1a1a] mb-4">
            Works seamlessly with your stack
          </h3>
          <p className="text-[#666666] text-[18px]">
            Post across every major platform, without switching tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsAndLanguages;