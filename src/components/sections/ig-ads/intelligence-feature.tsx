import React from 'react';
import { Apple, Zap, MousePointer2, Instagram } from 'lucide-react';

const IntelligenceFeature = () => {
  return (
    <section className="relative w-full py-20 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.01em] text-black">
            AI trained on millions of high-performance Instagram ads
          </h2>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="flex items-center justify-center gap-12 mb-12">
            <div className="w-10 h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
              <Apple className="w-8 h-8 fill-black" strokeWidth={0} />
            </div>
            <div className="w-12 h-12 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
               <Instagram className="w-10 h-10 text-black" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity font-bold text-2xl italic font-serif">
              a
            </div>
          </div>

          <div className="relative w-full max-w-[900px] h-[600px] flex justify-center items-end pb-10">
            <div className="relative z-10 w-[240px] h-[480px] bg-white rounded-[40px] border-[12px] border-black shadow-[0px_40px_80px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-b-[16px] z-20"></div>
              <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                <p className="text-[#E95678] font-semibold mb-4 text-sm">Your visuals are</p>
                <div className="relative inline-flex items-center justify-center p-6 bg-[#FEF2F2] rounded-[24px]">
                  <span className="text-[48px] font-black text-[#E95678]">99</span>
                  <div className="ml-2 flex flex-col items-center">
                     <Zap className="fill-[#E95678] text-[#E95678]" size={28} />
                  </div>
                </div>
                <p className="mt-4 font-bold text-black opacity-60">loaded</p>
              </div>
            </div>

            <div className="absolute top-[180px] left-[40px] card-modern p-4 max-w-[220px] shadow-sm animate-in fade-in slide-in-from-left-4 duration-1000">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-slate-50 border border-slate-100 rounded-lg">
                  <MousePointer2 className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-black">Instagram-native layout</h4>
                  <p className="text-[11px] text-[#666666] leading-snug mt-1">Vertical formats optimized for Reels and Stories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceFeature;
