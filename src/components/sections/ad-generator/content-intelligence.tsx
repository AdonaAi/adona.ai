import React from 'react';
import Image from 'next/image';

/**
 * ContentIntelligence Section
 * 
 * This component clones the "It's content intelligence" section with key metrics
 * (10M+, 19,000+, 27%, 95+) and a grid of ad mockups for brands like Rhode, Brez, etc.
 * 
 * Theme: Light
 * Design System: Modern Clean SaaS, 32px radius cards, Inter font.
 */

const ContentIntelligence = () => {
  // Mockups data based on provided assets and screenshots
  const adMockups = [
    {
      id: 1,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/eFxJTKmTDzGytOJfXnxmpAJCcY-17.jpg",
      brand: "Brez",
      style: "translate-y-12 rotate-[-4deg]",
      zIndex: "z-10"
    },
    {
      id: 2,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/8ZFwpZq7TB0GxIgZ6AL98L5Rps-18.jpg",
      brand: "Rhode",
      style: "translate-y-24 rotate-[2deg]",
      zIndex: "z-20"
    },
    {
      id: 3,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/ZX7LUJ65kUO2GZAsMpRXXpkwn8o-20.jpg",
      brand: "Marketing",
      style: "translate-y-8 rotate-[-2deg]",
      zIndex: "z-10"
    },
    {
      id: 4,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/TUXdjvKB6VzfYePEfqgQ7TsXLkM-21.jpg",
      brand: "Curology",
      style: "translate-y-32 rotate-[4deg]",
      zIndex: "z-30"
    },
    {
      id: 5,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/2a3fOHZgcmcwLyul1UEBdP1ks-23.jpg",
      brand: "Burrow",
      style: "translate-y-4 rotate-[-6deg]",
      zIndex: "z-10"
    }
  ];

  const metrics = [
    {
      value: "10M+",
      label: "various ads analyzed",
      subLabel: "across categories",
    },
    {
      value: "19,000+",
      label: "high-performing ads",
      subLabel: "manually curated",
    },
    {
      value: "27%",
      label: "average CTR lift across",
      subLabel: "tested campaigns",
    },
    {
      value: "95+",
      label: "languages supported for",
      subLabel: "global brands",
    }
  ];

  return (
    <section className="bg-[#fcfcfc] py-[120px] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight text-[#1a1a1a] mb-4">
            This isn’t just AI. It’s content intelligence.
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-[40px] md:text-[52px] font-extrabold text-gradient mb-2">
                {metric.value}
              </span>
              <p className="text-[#666666] text-sm md:text-base leading-tight font-medium">
                {metric.label}
              </p>
              <p className="text-[#666666] text-sm md:text-base leading-tight">
                {metric.subLabel}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Gallery / Ad Mockups Grid */}
        {/* We use a complex layout with offsets and rotations to match the artistic "fan-out" appearance in the screenshots */}
        <div className="relative h-[600px] md:h-[800px] w-full mt-20 flex justify-center">
          <div className="relative w-full max-w-[1400px] flex justify-center items-start gap-4 md:gap-12">
            
            {/* Brez Mockup */}
            <div className={`relative transition-transform duration-500 hover:scale-105 z-10 translate-y-12 rotate-[-4deg]`}>
              <div className="w-[180px] md:w-[260px] overflow-hidden rounded-[24px] shadow-soft border border-[#f1f1f1] bg-white">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/eFxJTKmTDzGytOJfXnxmpAJCcY-17.jpg"
                  alt="Brez Ad Mockup"
                  width={260}
                  height={460}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Rhode Mockup (Centered focus) */}
            <div className={`relative transition-transform duration-500 hover:scale-105 z-20 translate-y-32 rotate-[2deg]`}>
              <div className="w-[180px] md:w-[320px] overflow-hidden rounded-[32px] shadow-soft border border-[#f1f1f1] bg-white">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/8ZFwpZq7TB0GxIgZ6AL98L5Rps-18.jpg"
                  alt="Rhode Ad Mockup"
                  width={320}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Burrow Mockup */}
            <div className={`relative transition-transform duration-500 hover:scale-105 z-10 translate-y-8 rotate-[-2deg] hidden md:block`}>
              <div className="w-[240px] overflow-hidden rounded-[24px] shadow-soft border border-[#f1f1f1] bg-white">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/2a3fOHZgcmcwLyul1UEBdP1ks-23.jpg"
                  alt="Furniture Ad Mockup"
                  width={240}
                  height={420}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Curology Mockup */}
            <div className={`relative transition-transform duration-500 hover:scale-105 z-30 translate-y-48 rotate-[5deg] hidden lg:block`}>
              <div className="w-[240px] overflow-hidden rounded-[24px] shadow-soft border border-[#f1f1f1] bg-white">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/ZX7LUJ65kUO2GZAsMpRXXpkwn8o-20.jpg"
                  alt="Curology Ad Mockup"
                  width={240}
                  height={420}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Additional Decorative Mockups for Depth */}
            <div className={`absolute top-[400px] left-[15%] opacity-50 z-0 scale-75 rotate-[-12deg] hidden xl:block`}>
                <div className="w-[200px] overflow-hidden rounded-[24px] shadow-soft border border-[#f1f1f1] bg-white">
                    <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/TUXdjvKB6VzfYePEfqgQ7TsXLkM-21.jpg"
                    alt="Skin care mockup"
                    width={200}
                    height={350}
                    className="w-full h-auto"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #ef4444 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .shadow-soft {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </section>
  );
};

export default ContentIntelligence;