import React from 'react';
import { Zap } from 'lucide-react';

const IntelligenceFeature = () => {
  const brandLogos = [
    { name: 'Apple', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/TB0iaXEOimB4w985KL59x8Yqac-13.png' },
    { name: 'Arc', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/Fn01ZJFwqDXKKhz5yJzgvYK4BLw-14.png' },
    { name: 'Amazon', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/pb6g8Sx6fWVKqgz8ob7zqFXZWWc-15.png' },
    { name: 'Blackberry', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VaGhYIlCjricGWnHisivyig9Ok-16.png' },
    { name: 'Bumble', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/HAFgG65Xh515eO6eEtCCRkOo2AM-17.png' },
    { name: 'Nike', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/S1qpQvKTIyupla3TrirFPI4Ybs-18.png' },
  ];

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.2] tracking-tight text-black">
            AI trained on millions of high-performance Facebook ads
          </h2>
        </div>

        <div className="relative flex flex-col items-center max-w-[1000px] mx-auto h-auto">
          {/* Icon Stack Row - Narrower to match background image */}
          <div className="flex justify-between w-full max-w-[640px] px-4 md:px-8 mb-24 z-10">
            {brandLogos.map((brand, i) => (
              <div key={brand.name} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center grayscale opacity-60 hover:opacity-100 transition-all duration-300">
                <img src={brand.src} alt={brand.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>

          {/* Curved Connection Lines - Converging to single point */}
          <div className="absolute top-[48px] inset-0 w-full h-[320px] pointer-events-none">
            <svg viewBox="0 0 1000 320" className="w-full h-full preserve-3d overflow-visible">
              <g>
                {[200, 320, 440, 560, 680, 800].map((x, i) => (
                  <g key={i}>
                    {/* Main Path */}
                    <path 
                      d={`M ${x} 0 C ${x} 140 500 140 500 220`} 
                      stroke="#F1F5F9" 
                      strokeWidth="1.5" 
                      fill="transparent" 
                      strokeLinecap="round"
                    />
                    {/* Animated Dash Path */}
                    <path 
                      d={`M ${x} 0 C ${x} 140 500 140 500 220`} 
                      stroke="#3E86C6" 
                      strokeWidth="1.5" 
                      fill="transparent" 
                      strokeLinecap="round"
                      strokeDasharray="30 150"
                      className="animate-dash"
                      style={{ animationDelay: `${i * 0.4}s` }}
                      opacity="0.6"
                    />
                  </g>
                ))}
                {/* Short central vertical lead-in line */}
                <path 
                  d="M 500 220 L 500 240" 
                  stroke="#3E86C6" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>

          {/* Composite Image Visualization below connections */}
          <div className="relative w-full max-w-5xl mx-auto rounded-[32px] overflow-hidden -mt-16">
            <img 
              src="https://framerusercontent.com/images/CYeh8KtNSfRChnrkpljZzWBO4.webp?width=1945&height=1129" 
              alt="AI training visual" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-dash {
          stroke-dashoffset: 200;
          animation: dash-animation 5s linear infinite;
        }
        @keyframes dash-animation {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default IntelligenceFeature;
