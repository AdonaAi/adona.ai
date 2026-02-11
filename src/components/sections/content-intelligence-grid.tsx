import React from 'react';
import Image from 'next/image';

const ContentIntelligenceGrid = () => {
  const stats = [
    {
      value: "10M+",
      label: "various ad performance points",
      color: "text-[#FF66A3]"
    },
    {
      value: "19,000+",
      label: "high-performing ads analyzed",
      color: "text-[#FF66A3]"
    },
    {
      value: "27%",
      label: "average CTR lift across tested campaigns",
      color: "text-[#FF66A3]"
    },
    {
      value: "95+",
      label: "languages supported for global brands",
      color: "text-[#FF66A3]"
    }
  ];

  const floatingAds = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/CYeh8KtNSfRChnrkpljZzWBO4-21.webp",
      width: 240,
      height: 320,
      className: "top-[-40px] left-[5%]",
      rotate: "-2deg"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/XOexoQ4jGG3cPCKAtaketvIDRg-22.png",
      width: 280,
      height: 400,
      className: "top-[20px] right-[15%]",
      rotate: "1deg"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/7UEUoJYXn1fxkrAYDN77XSu4iE-23.jpg",
      width: 220,
      height: 300,
      className: "top-[320px] left-[0%]",
      rotate: "3deg"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/ErAnOHo4KtVnTg9BQ5UNN9yMRqU-24.png",
      width: 200,
      height: 280,
      className: "top-[400px] right-[5%]",
      rotate: "-1deg"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/w15iNhxoYNNieEQIzQclCTByw-27.jpg",
      width: 260,
      height: 360,
      className: "top-[600px] left-[20%]",
      rotate: "2deg"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/WPxyDxn3qU8gfWLLiyGEsqJnxY8-28.gif",
      width: 220,
      height: 320,
      className: "top-[750px] right-[25%]",
      rotate: "-3deg"
    },
    {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hWAIkNsnNxJrnIrsErnYRJCHZiQ-25.gif",
        width: 200,
        height: 280,
        className: "top-[1000px] left-[10%]",
        rotate: "1deg"
    },
    {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/lDBW3YacAzpOU5LqjXJ1unBaY4-26.gif",
        width: 240,
        height: 340,
        className: "top-[1150px] right-[10%]",
        rotate: "-2deg"
    }
  ];

  return (
    <section className="relative w-full py-[120px] overflow-hidden bg-[#FAFAFA]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-[80px]">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight mb-12">
            This isn’t just AI. It’s content intelligence.
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className={`text-[36px] md:text-[48px] font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </span>
                <p className="text-[#666666] text-sm md:text-base leading-snug max-w-[180px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Creative Grid Container */}
        <div className="relative h-[1600px] md:h-[1800px] w-full mt-[100px]">
          {floatingAds.map((ad, idx) => (
            <div
              key={idx}
              className={`absolute hidden md:block transition-transform duration-700 hover:scale-105 ${ad.className}`}
              style={{
                transform: `rotate(${ad.rotate})`,
              }}
            >
              <div className="relative overflow-hidden rounded-[24px] shadow-card border border-[#E6E6E6] bg-white">
                <Image
                  src={ad.src}
                  alt="Generated Ad Creative"
                  width={ad.width}
                  height={ad.height}
                  className="object-cover w-full h-auto"
                  unoptimized // For gifs and webp quality preservation
                />
              </div>
            </div>
          ))}

          {/* Simple Grid for Mobile fallback */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {floatingAds.slice(0, 6).map((ad, idx) => (
              <div key={`m-${idx}`} className="rounded-[24px] overflow-hidden shadow-card border border-[#E6E6E6] bg-white">
                <Image
                  src={ad.src}
                  alt="Generated Ad Creative"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background radial gradient to soften the edges */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#FAFAFA_100%)] opacity-30" />
    </section>
  );
};

export default ContentIntelligenceGrid;