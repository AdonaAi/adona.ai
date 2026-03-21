import React from 'react';
import Image from 'next/image';

/**
 * AI Training Brands Section
 * 
 * FEATURES:
 * - Headline: "AI trained on millions of marketing assets from top ecommerce brands"
 * - Monochromatic brand logos (Apple, Amazon, Nike, etc.)
 * - Stylized converging lines (root-like structure) meeting at a central point.
 * - Minimal, high-contrast light theme design.
 */

const AITrainingBrands = () => {
  // Mapping of assets based on provided list and visual identification
  const brandLogos = [
    {
      name: 'Apple',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/TB0iaXEOimB4w985KL59x8Yqac-13.png',
      width: 32,
      height: 38,
    },
    {
      name: 'Allbirds',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Fn01ZJFwqDXKKhz5yJzgvYK4BLw-14.png',
      width: 44,
      height: 24,
    },
    {
      name: 'Amazon',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/pb6g8Sx6fWVKqgz8ob7zqFXZWWc-15.png',
      width: 38,
      height: 38,
    },
    {
      name: 'Blackberry',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VaGhYIlCjricGWnHisivyig9Ok-16.png',
      width: 42,
      height: 32,
    },
    {
      name: 'Bumble',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/HAFgG65Xh515eO6eEtCCRkOo2AM-17.png',
      width: 36,
      height: 36,
    },
    {
      name: 'Nike',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/S1qpQvKTIyupla3TrirFPI4Ybs-18.png',
      width: 48,
      height: 18,
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] section-padding flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Headline */}
        <h2 className="max-w-[800px] mb-20 text-[#1F1F1F] font-bold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.02em]">
          AI trained on millions of marketing <br className="hidden md:block" />
          assets from top ecommerce brands
        </h2>

        {/* Brand Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-12 opacity-80 mix-blend-multiply">
          {brandLogos.map((brand) => (
            <div key={brand.name} className="relative group transition-transform hover:scale-110 duration-300">
              <Image
                src={brand.src}
                alt={`${brand.name} logo`}
                width={brand.width}
                height={brand.height}
                className="w-auto h-[32px] md:h-[40px] objeect-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-padding {
          padding-top: 140px;
          padding-bottom: 140px;
        }
        @media (max-width: 768px) {
          .section-padding {
            padding-top: 80px;
            padding-bottom: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default AITrainingBrands;