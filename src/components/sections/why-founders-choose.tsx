import React from 'react';
import Image from 'next/image';

const WhyFoundersChoose = () => {
  const features = [
    {
      title: "Multi-language",
      description: "Create newsletters in multiple languages.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hp3KbujC1qQfv7JVhnPOrbnoM-26.png",
      alt: "Multi-language flags illustration"
    },
    {
      title: "High Performance",
      description: "Optimized subject lines, visuals, and CTAs trained on millions of top emails.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/YnaVvK3aMCl4NuIExgBW2qDjPuY-27.png",
      alt: "Performance optimization visualization"
    },
    {
      title: "Professional & on-brand",
      description: "Every layout and sentence fits your tone and visuals perfectly.",
      image: "https://framerusercontent.com/images/VnWgMsLfKGF3zHUeddMZaVj49k.png", // Fallback for the third card visual style from context
      alt: "On-brand newsletter design mockup"
    }
  ];

  return (
    <section className="section-padding bg-[#fafafa]">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="h2 mb-6">
            Why founders choose adona.ai newsletter generator
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-feature flex flex-col h-full overflow-hidden"
              style={{ padding: '48px 40px 0px 40px' }}
            >
              <div className="mb-8">
                <h3 className="text-[24px] font-bold leading-[1.2] tracking-tight text-black mb-4 font-display">
                  {feature.title}
                </h3>
                <p className="text-[17px] leading-relaxed text-[#666666]">
                  {feature.description}
                </p>
              </div>
              
              <div className="flex-grow flex items-end justify-center mt-auto">
                <div className="relative w-full aspect-square max-w-[280px]">
                  {feature.image && (
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                  {index === 2 && !feature.image && (
                    <div className="w-full h-full flex flex-col gap-2 p-6 bg-white rounded-t-xl shadow-sm border border-slate-100">
                       <div className="w-2/3 h-2 bg-slate-50 rounded" />
                       <div className="w-full h-32 bg-slate-50 rounded flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-mesh-gradient opacity-20" />
                       </div>
                       <div className="w-1/2 h-2 bg-slate-50 rounded" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card-feature {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-feature:hover {
          transform: translateY(-4px);
          box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </section>
  );
};

export default WhyFoundersChoose;