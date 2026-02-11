import React from 'react';
import Image from 'next/image';

/**
 * ValuePropsSection
 * 
 * This component clones the "Why founders choose adona.ai TikTok video generator" section.
 * It features a 3-column grid of cards with 3D illustrations.
 * 
 * Assets:
 * - Cost savings illustration: eeAkLhMwUYfUXu7pq7REOtAhKI-22.png
 * - Beat Creative Burnout illustration: Q7ROj4NWRiMd4gkRN3cwpfkIQ-23.png
 * - Multi-language illustration: 3ufBHvRGDA3ObZGtXhm6PN3Aao-24.png
 */

const ValuePropsSection: React.FC = () => {
  const valueProps = [
    {
      title: "Cost savings",
      description: "No agencies, no freelancers, no waiting.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/eeAkLhMwUYfUXu7pq7REOtAhKI-22.png",
      alt: "3D Illustration of a wallet with money",
      bgColor: "#FFFFFF"
    },
    {
      title: "Beat Creative Burnout",
      description: "Unlimited variations to keep things fresh.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Q7ROj4NWRiMd4gkRN3cwpfkIQ-23.png",
      alt: "3D Illustration of a glowing brain",
      bgColor: "#FFFFFF"
    },
    {
      title: "Multi-language, global ready",
      description: "Multi-language video generation included.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/3ufBHvRGDA3ObZGtXhm6PN3Aao-24.png",
      alt: "3D Illustration of various flags",
      bgColor: "#FFFFFF"
    }
  ];

  return (
    <section className="bg-white py-[120px] overflow-hidden" id="value-props">
      <div className="container mx-auto px-6 max-w-[1248px]">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#1A1A1A] leading-[1.2] max-w-[500px] mx-auto">
            Why founders choose adona.ai <br className="hidden md:block" /> TikTok video generator
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-[#E5E5E5] flex flex-col h-full min-h-[460px] group transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Text Content */}
              <div className="p-10 pb-0 z-10 relative">
                <h3 className="text-[24px] font-semibold text-[#1A1A1A] leading-[1.3] mb-3">
                  {prop.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-[#666666] max-w-[240px]">
                  {prop.description}
                </p>
              </div>

              {/* Image Container - Positioned at bottom */}
              <div className="mt-auto relative w-full h-[280px]">
                <Image
                  src={prop.image}
                  alt={prop.alt}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;