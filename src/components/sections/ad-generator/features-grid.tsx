import React from 'react';
import Image from 'next/image';

const FeaturesGrid = () => {
  const features = [
    {
      title: 'Unlimited ideas',
      description: 'Daily ad concepts, so you’ll never run out of inspiration.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Q7ROj4NWRiMd4gkRN3cwpfkIQ-26.png',
      alt: '3D Brain visualization with colorful particles',
    },
    {
      title: 'Multi-language',
      description: 'Reach new markets with 95+ languages supported.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/3ufBHvRGDA3ObZGtXhm6PN3Aao-27.png',
      alt: '3D Flag icons representing multi-language support',
    },
    {
      title: 'High performance',
      description: 'adona.ai’s ads are built to sell, not just to look good.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hBgjPOVFMXZJiS9KXy4JPkC4ww-28.png',
      alt: '3D abstract geometric shape with prism colors',
    },
  ];

  return (
    <section className="bg-[#FCFCFC] py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center mb-[64px] text-center">
          <h2 className="text-[#1A1A1A] text-[48px] font-bold leading-[1.2] tracking-[-0.02em] mb-4">
            Why founders choose adona.ai ad generator
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-[#F1F1F1] rounded-[32px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] h-[540px] flex flex-col items-center justify-between overflow-hidden text-center transition-transform duration-300 hover:translate-y-[-4px]"
            >
              <div className="w-full">
                <h3 className="text-[#1A1A1A] text-[32px] font-bold leading-[1.3] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#666666] text-[18px] leading-[1.6] px-4">
                  {feature.description}
                </p>
              </div>
              
              <div className="relative w-full h-[300px] mt-8 flex items-end justify-center">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={340}
                  height={300}
                  className="object-contain object-bottom translate-y-4"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="px-6 py-2 rounded-full border border-[#F1F1F1] bg-white text-[#666666] text-sm font-medium shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#A855F7] to-[#EF4444]"></span>
            Powered By
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;