import React from 'react';

/**
 * StatsSection component
 * 
 * Clones the content intelligence statistics section showing metrics like 
 * "10M+ content assets processed" and "95+ languages supported" 
 * with a clean grid layout based on the design instructions and visual references.
 */
const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "10M+",
      label: "various content assets processed",
      gradient: "from-[#8a84ff] to-[#ff5a7a]"
    },
    {
      value: "19,000+",
      label: "high-performing ads analyzed",
      gradient: "from-[#ff5a7a] to-[#8a84ff]"
    },
    {
      value: "27%",
      label: "average CTR lift across tested campaigns",
      gradient: "from-[#8a84ff] via-[#ff5a7a] to-[#8a84ff]"
    },
    {
      value: "95+",
      label: "languages supported for global brands",
      gradient: "from-[#ff5a7a] to-[#8a84ff]"
    }
  ];

  return (
    <section className="bg-white py-[140px] px-6 select-none">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[20px] font-bold text-[#1f1f1f] tracking-tight sm:text-[24px]">
            This isn&apos;t just AI. It&apos;s content intelligence.
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Animated/Gradient Number */}
              <div 
                className={`text-[48px] font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient} tracking-tighter`}
                style={{ 
                  lineHeight: '1.1',
                  fontFamily: 'var(--font-display, "Inter", sans-serif)'
                }}
              >
                {stat.value}
              </div>
              
              {/* Description Label */}
              <p className="text-[14px] text-[#666666] leading-relaxed max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Label shown in the screenshots (99+ languages) */}
      <div className="mt-[200px] text-center">
        <div className="inline-block">
            <h3 className="text-[32px] font-bold text-[#1f1f1f] tracking-tight">
                99+ languages
            </h3>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;