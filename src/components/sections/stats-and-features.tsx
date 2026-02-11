import React from 'react';
import Image from 'next/image';

const StatsAndFeatures = () => {
  const stats = [
    {
      value: "10M+",
      label: "various content assets processed",
      color: "text-[#EF4444]",
    },
    {
      value: "19,000+",
      label: "high-performing ads analyzed",
      color: "text-[#EF4444]",
    },
    {
      value: "27%",
      label: "average CTR lift across tested campaigns",
      color: "text-[#EF4444]",
    },
    {
      value: "95+",
      label: "languages supported for global brands",
      color: "text-[#EF4444]",
    },
  ];

  const features = [
    {
      title: "Multi-language, global ready",
      description: "Multi-language video generation included.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/ikLfjOCIRa6fs3UsOxaFfwN2izI-26.png",
      alt: "Global flags and language icons",
    },
    {
      title: "Performance",
      description: "Not templates - real content that reflects your brand DNA.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/TB0iaXEOimB4w985KL59x8Yqac-27.png",
      alt: "DNA helix visualization",
    },
    {
      title: "Trend ready",
      description: "Adapt to social media's fast-moving styles instantly.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Fn01ZJFwqDXKKhz5yJzgvYK4BLw-28.png",
      alt: "Social media post cards",
    },
  ];

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      {/* Content Intelligence Stats Section */}
      <section className="pt-[160px] pb-[80px] md:pt-[240px] md:pb-[120px] px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-[#1a1a1a] text-[32px] md:text-[40px] font-bold tracking-tight mb-[80px]">
            This isn&apos;t just AI. It&apos;s content intelligence.
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className={`text-[48px] md:text-[64px] font-extrabold leading-none mb-4 ${stat.color}`}>
                  {stat.value}
                </span>
                <p className="text-[#666666] text-[16px] md:text-[18px] max-w-[200px] leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Founders Choose adona.ai Section */}
      <section className="py-[120px] px-6 bg-[#ffffff]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-[60px]">
            <h2 className="text-[#1a1a1a] text-[40px] md:text-[48px] font-bold tracking-tight leading-tight">
              Why founders choose adona.ai<br />Instagram ad generator
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="group relative bg-[#F9FAFB] rounded-[32px] border border-[#E5E7EB] overflow-hidden flex flex-col min-h-[520px] transition-all duration-300 hover:shadow-ambient"
              >
                <div className="p-8 pb-4">
                  <h3 className="text-[#1a1a1a] text-[28px] md:text-[32px] font-bold mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#666666] text-[18px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="relative mt-auto w-full flex justify-center items-end overflow-hidden pt-4">
                  <div className="relative w-full aspect-square max-w-[340px] flex items-end">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={340}
                      height={340}
                      className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsAndFeatures;