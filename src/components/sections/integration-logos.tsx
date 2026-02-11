import React from 'react';
import Image from 'next/image';

const IntegrationLogos = () => {
  // Brand logos data inspired by screenshots and list
  const brands = [
    { name: 'Apple', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Fn01ZJFwqDXKKhz5yJzgvYK4BLw-14.png' },
    { name: 'Arc', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/pb6g8Sx6fWVKqgz8ob7zqFXZWWc-15.png' },
    { name: 'Amazon', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VaGhYIlCjricGWnHisivyig9Ok-16.png' },
    { name: 'Blackberry', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/HAFgG65Xh515eO6eEtCCRkOo2AM-17.png' },
    { name: 'Nike', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/S1qpQvKTIyupla3TrirFPI4Ybs-18.png' },
  ];

  // Tooltips/Floaters around the phone
  const floaters = [
    { text: "Value-first copy detected", subtext: "Opening with benefit boosts click-through rate.", icon: "✍️", position: "top-left", x: -280, y: -200 },
    { text: "Social proof integration tested", subtext: "Adding reviews increased clicks by 27%.", icon: "👥", position: "left", x: -240, y: -20 },
    { text: "CTA contrast optimized", subtext: "High-contrast buttons increase click-through by 19%.", icon: "🎯", position: "bottom-left", x: -220, y: 160 },
    { text: "Emotional triggers analyzed", subtext: "Content with emotion-driven headlines converts 2x better.", icon: "❤️", position: "bottom-left", x: -180, y: 320 },
    { text: "Best-performing hooks saved", subtext: "Templates with 38% higher CTR.", icon: "⚡", position: "top-right", x: 280, y: -180 },
    { text: "Visual hierarchy optimized", subtext: "Hero image placement increases engagement by 22%.", icon: "👁️", position: "right", x: 240, y: 20 },
    { text: "Whitespace usage optimized", subtext: "Balanced spacing increases conversion.", icon: "📏", position: "bottom-right", x: 260, y: 180 },
    { text: "Urgency tag verified", subtext: "Limited-time offers double ad response rate.", icon: "⏰", position: "bottom-right", x: 200, y: 340 },
  ];

  return (
    <section className="bg-white py-[120px] overflow-hidden flex flex-col items-center">
      {/* Heading Group */}
      <div className="container max-w-[1200px] text-center mb-16 px-10">
        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.2] tracking-[-0.03em] text-[#1A1A1A] max-w-[800px] mx-auto">
          AI trained on millions of marketing assets from top ecommerce brands
        </h2>
      </div>

      {/* Composite Image Visualization */}
      <div className="relative w-full max-w-5xl mx-auto mb-16 rounded-[32px] overflow-hidden border border-[#F1F5F9] shadow-soft">
        <img 
          src="https://framerusercontent.com/images/CYeh8KtNSfRChnrkpljZzWBO4.webp?scale-down-to=1024&width=1945&height=1129" 
          alt="AI training visualization" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content Intelligence Stats */}
      <div className="container max-w-[1200px] mt-12 text-center">
        <p className="text-[18px] font-semibold text-[#1A1A1A] mb-12">This isn't just AI. It's content intelligence.</p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-[32px] font-bold text-gradient">10M+</span>
            <span className="text-[14px] text-[#666666] mt-2 max-w-[150px]">various content assets processed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[32px] font-bold text-gradient">19,000+</span>
            <span className="text-[14px] text-[#666666] mt-2 max-w-[150px]">high-performing ads analyzed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[32px] font-bold text-gradient">27%</span>
            <span className="text-[14px] text-[#666666] mt-2 max-w-[150px]">average CTR lift across tested campaigns</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[32px] font-bold text-gradient">95+</span>
            <span className="text-[14px] text-[#666666] mt-2 max-w-[150px]">languages supported for global brands</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationLogos;