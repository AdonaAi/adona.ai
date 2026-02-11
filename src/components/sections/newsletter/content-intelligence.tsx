import React from 'react';
import Image from 'next/image';

const stats = [
  {
    value: "10M+",
    label: "various newsletters\nprocessed",
    color: "text-[#EF5DA8]"
  },
  {
    value: "19,000+",
    label: "high-performing ads\nanalyzed",
    color: "text-[#EF5DA8]"
  },
  {
    value: "27%",
    label: "average CTR lift across\ntested campaigns",
    color: "text-[#8E8FFA]"
  },
  {
    value: "95+",
    label: "languages supported for\nglobal brands",
    color: "text-[#EF5DA8]"
  }
];

const floatingAssets = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/9uwsuptOGy6ylYbYNprJwfRiU-23.png",
    width: 200,
    height: 320,
    className: "absolute left-[22%] top-[340px] z-10 shadow-adona animate-float",
    alt: "Newsletter Example 1",
    style: { animationDelay: '0s' }
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/lxijs3Kcbb6m608IgoM26u5zk4-24.png",
    width: 240,
    height: 380,
    className: "absolute right-[10%] top-[480px] z-10 shadow-adona animate-float",
    alt: "Newsletter Example 2",
    style: { animationDelay: '1.5s' }
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/4dbWnp387xNYOtgBbAoGIfhfw4-25.png",
    width: 220,
    height: 340,
    className: "absolute left-[15%] top-[700px] z-10 shadow-adona animate-float",
    alt: "Newsletter Example 3",
    style: { animationDelay: '3s' }
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/9uwsuptOGy6ylYbYNprJwfRiU-23.png",
    width: 180,
    height: 280,
    className: "absolute right-[25%] top-[850px] z-10 shadow-adona animate-float opacity-80",
    alt: "Newsletter Example 4",
    style: { animationDelay: '4.5s' }
  }
];

export default function ContentIntelligence() {
  return (
    <section className="relative overflow-hidden bg-white pt-[120px] pb-[400px]">
      <div className="container px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-[32px] font-semibold tracking-tight text-[#1A1A1A]">
            This isn't just AI. It's content intelligence.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className={`mb-4 text-[48px] font-bold leading-none tracking-tight ${stat.color}`}>
                {stat.value}
              </span>
              <p className="whitespace-pre-line text-[16px] leading-[1.6] text-[#666666]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements Background Decoration */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {floatingAssets.map((asset, idx) => (
          <div 
            key={idx} 
            className={`${asset.className} rounded-[24px] overflow-hidden border border-[#F2F2F2]`}
            style={asset.style}
          >
            <Image
              src={asset.src}
              width={asset.width}
              height={asset.height}
              alt={asset.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        
        {/* Additional decorative shapes or placeholders based on visual screenshot density */}
        <div className="absolute left-[40%] top-[600px] w-48 h-72 rounded-[24px] bg-[#F9F9F9] border border-[#F2F2F2] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute right-[35%] top-[1000px] w-56 h-80 rounded-[24px] bg-[#F9F9F9] border border-[#F2F2F2] animate-float" style={{ animationDelay: '5s' }}></div>
      </div>

      <style jsx global>{`
        @keyframes customFloat {
          0%, 100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-20px) rotate(1deg);
          }
        }
        .animate-float {
          animation: customFloat 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}