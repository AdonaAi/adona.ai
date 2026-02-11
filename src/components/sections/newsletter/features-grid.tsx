import React from 'react';
import Image from 'next/image';

/**
 * FeaturesGrid Component
 * Clones the "Why founders choose adona.ai" section with three cards.
 * 
 * Design Details:
 * - Title: Why founders choose adona.ai newsletter generator
 * - Columns: 3 equal width columns on desktop
 * - Cards: White background, subtle grey border (rgba(242, 242, 242, 1)), radius 32px
 * - Typography: Inter font, primary text #1A1A1A, secondary text #666666
 * - Assets: 3D effect illustrative icons for Brain (Unlimited ideas), Flags (Multi-language), and Rainbow Prism (High Performance)
 */

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div className="flex flex-col bg-white border border-[#f2f2f2] rounded-[32px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-6">
        <h3 className="text-[28px] font-bold tracking-tight text-[#1A1A1A] mb-3">
          {title}
        </h3>
        <p className="text-[18px] leading-[1.5] text-[#666666] max-w-[280px]">
          {description}
        </p>
      </div>
      <div className="mt-auto flex justify-center items-center h-[240px] relative overflow-hidden">
        <div className="relative w-full h-full transform scale-110">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain pointer-events-none select-none"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

const FeaturesGrid: React.FC = () => {
  // Mapping assets based on screenshots and provided URLs
  // Based on assets: 
  // 1. hp3Kbuj... -> Brain (Unlimited ideas)
  // 2. YnaVvK3... -> Flags (Multi-language)
  // 3. fXJpy9T... -> Prism (High Performance)
  const features = [
    {
      title: "Unlimited ideas",
      description: "New angles and campaign concepts generated instantly.",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hp3KbujC1qQfv7JVhnPOrbnoM-26.png",
      imageAlt: "3D Brain Illustration"
    },
    {
      title: "Multi-language",
      description: "Create newsletters in multiple languages.",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/YnaVvK3aMCl4NuIExgBW2qDjPuY-27.png",
      imageAlt: "3D Flag Orbs Illustration"
    },
    {
      title: "High Performance",
      description: "Optimized subject lines, visuals, and CTAs trained on millions of top emails.",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/fXJpy9T5cU7DjR8QWJYviZTLuI-28.png",
      imageAlt: "3D Prism Illustration"
    }
  ];

  return (
    <section className="py-[120px] bg-white">
      <div className="container mx-auto max-w-[1248px] px-6">
        <div className="text-center mb-16 max-w-[700px] mx-auto">
          <h2 className="text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
            Why founders choose adona.ai newsletter generator
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;