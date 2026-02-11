import React from 'react';
import Image from 'next/image';
import { Apple, Heart, Zap, ShieldCheck, BarChart3, MessageSquare, Target, Clock, MousePointer2, MoveDown } from 'lucide-react';

const AITrainingSection = () => {
  return (
    <section 
      id="integrations" 
      className="relative flex flex-col items-center justify-center w-full px-6 overflow-hidden bg-[#fcfcfc] py-[120px]"
    >
      {/* Header Content */}
      <div className="max-w-[700px] text-center mb-16 px-4">
        <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight text-[#1a1a1a] leading-[1.2] mb-6">
          AI trained on millions of high-performance ads
        </h2>
        <p className="text-[18px] text-[#666666] leading-[1.6]">
          adona.ai isn’t guessing. It’s trained on millions of high-performing ads - so every output isn’t just pretty, it’s built to drive clicks, conversions, and sales.
        </p>
      </div>

      {/* Brand Icons Row */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
        <Apple className="w-8 h-8 text-[#1a1a1a]" fill="currentColor" />
        <div className="w-10 h-10 flex items-center justify-center">
            <span className="font-black text-2xl italic tracking-tighter">M</span>
        </div>
        <div className="font-bold text-2xl">a</div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-black"></div>
          <div className="w-2 h-2 rounded-full bg-black"></div>
          <div className="w-2 h-2 rounded-full bg-black"></div>
          <div className="w-2 h-2 rounded-full bg-black"></div>
        </div>
        <div className="relative">
            <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-bold text-xs">J</div>
        </div>
        <div className="w-10 h-4 bg-black rounded-sm skew-x-[-20deg]"></div>
      </div>

      {/* Central Visual Area */}
      <div className="relative w-full max-w-[1000px] flex justify-center items-center h-[600px] lg:h-[700px]">
        
        {/* Connection Lines (Simulated with curved SVG) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] pointer-events-none opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M500 300C500 200 100 200 100 50" stroke="#1a1a1a" strokeWidth="1" />
                <path d="M500 300C500 200 260 200 260 50" stroke="#1a1a1a" strokeWidth="1" />
                <path d="M500 300C500 200 420 200 420 50" stroke="#1a1a1a" strokeWidth="1" />
                <path d="M500 300C500 200 580 200 580 50" stroke="#1a1a1a" strokeWidth="1" />
                <path d="M500 300C500 200 740 200 740 50" stroke="#1a1a1a" strokeWidth="1" />
                <path d="M500 300C500 200 900 200 900 50" stroke="#1a1a1a" strokeWidth="1" />
            </svg>
        </div>

        {/* The Phone Mockup */}
        <div className="relative z-10 w-[280px] h-[580px] bg-white rounded-[40px] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col items-center pt-10">
            <div className="w-32 h-6 bg-[#1a1a1a] rounded-full absolute top-2"></div>
            
            <div className="mt-20 flex flex-col items-center">
                <p className="text-[14px] font-medium text-[#22c55e] mb-2">Your visuals are</p>
                <div className="w-24 h-24 rounded-2xl bg-[#f0fdf4] border-2 border-[#dcfce7] flex items-center justify-center flex-col shadow-sm">
                    <span className="text-[36px] font-bold text-[#22c55e] leading-none">99</span>
                    <Zap className="w-5 h-5 text-[#22c55e] fill-[#22c55e]" />
                </div>
                <p className="text-[12px] text-gray-400 mt-2">loaded</p>
            </div>

            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2">
                {/* Character hand/head - using provided asset as best fit or placeholder */}
                <div className="w-32 h-32 relative">
                    <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/XOexoQ4jGG3cPCKAtaketvIDRg-16.png"
                        alt="adona.ai Character"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>

        {/* Floating Glass Tooltips */}
        
        {/* Left Side Tooltips */}
        <div className="absolute left-[5%] top-[25%] glass-tooltip p-4 max-w-[220px] transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gray-50">
                    <MousePointer2 className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                    <h4 className="text-[14px] font-semibold text-[#1a1a1a]">Value-first copy detected</h4>
                    <p className="text-[12px] text-[#666666] leading-tight mt-1">Opening with benefit boosts click-through rate.</p>
                </div>
            </div>
        </div>

        <div className="absolute left-0 bottom-[30%] glass-tooltip p-4 max-w-[240px] transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#eff6ff]">
                    <MessageSquare className="w-4 h-4 text-[#3b82f6]" />
                </div>
                <div>
                    <h4 className="text-[14px] font-semibold text-[#1a1a1a]">Social proof integration tested</h4>
                    <p className="text-[12px] text-[#666666] leading-tight mt-1">Adding reviews increased clicks by 27%.</p>
                </div>
            </div>
        </div>

        <div className="absolute left-[10%] bottom-[8%] glass-tooltip p-4 max-w-[220px] transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#fef2f2]">
                    <Heart className="w-4 h-4 text-[#ef4444] fill-[#ef4444]" />
                </div>
                <div>
                    <h4 className="text-[14px] font-semibold text-[#1a1a1a]">Emotional triggers analyzed</h4>
                    <p className="text-[12px] text-[#666666] leading-tight mt-1">Content with emotion-driven headlines converts 2x better.</p>
                </div>
            </div>
        </div>

        {/* Right Side Tooltips */}
        <div className="absolute right-[5%] top-[25%] glass-tooltip p-4 max-w-[220px] transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#fffbeb]">
                    <Zap className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                </div>
                <div>
                    <h4 className="text-[14px] font-semibold text-[#1a1a1a]">Best-performing hooks saved</h4>
                    <p className="text-[12px] text-[#666666] leading-tight mt-1">Templates with 38% higher CTR.</p>
                </div>
            </div>
        </div>

        <div className="absolute right-0 top-[45%] glass-tooltip p-4 max-w-[220px] transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gray-50">
                    <Target className="w-4 h-4 text-gray-500" />
                </div>
                <div>
                    <h4 className="text-[14px] font-semibold text-[#1a1a1a]">Visual hierarchy optimized</h4>
                    <p className="text-[12px] text-[#666666] leading-tight mt-1">Hero image placement increases engagement by 22%.</p>
                </div>
            </div>
        </div>

        <div className="absolute right-[10%] bottom-[35%] glass-tooltip p-4 max-w-[220px] transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gray-50">
                    <BarChart3 className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                    <h4 className="text-[14px] font-semibold text-[#1a1a1a]">Whitespace usage optimized</h4>
                    <p className="text-[12px] text-[#666666] leading-tight mt-1">Balanced spacing increases conversion.</p>
                </div>
            </div>
        </div>

        <div className="absolute right-[5%] bottom-[10%] glass-tooltip p-4 max-w-[220px] transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gray-50">
                    <Clock className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                    <h4 className="text-[14px] font-semibold text-[#1a1a1a]">Urgency tag verified</h4>
                    <p className="text-[12px] text-[#666666] leading-tight mt-1">Limited-time offers double ad response rate.</p>
                </div>
            </div>
        </div>

      </div>

      {/* Decorative center pill */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <p className="text-[20px] font-semibold text-[#1a1a1a] mb-8">This isn’t just AI. It’s content intelligence.</p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-start justify-items-center w-full max-w-[1000px]">
            <div className="flex flex-col items-center text-center">
                <span className="text-[32px] md:text-[40px] font-extrabold text-[#1a1a1a] leading-none mb-2">10M+</span>
                <p className="text-[14px] text-[#666666] leading-tight">various data points<br/>processed</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <span className="text-[32px] md:text-[40px] font-extrabold text-[#1a1a1a] leading-none mb-2">19,000+</span>
                <p className="text-[14px] text-[#666666] leading-tight">high-performing ads<br/>analyzed</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <span className="text-[32px] md:text-[40px] font-extrabold text-[#ec4899] leading-none mb-2">27%</span>
                <p className="text-[14px] text-[#666666] leading-tight">average CTR lift across<br/>tested campaigns</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <span className="text-[32px] md:text-[40px] font-extrabold text-[#1a1a1a] leading-none mb-2">95+</span>
                <p className="text-[14px] text-[#666666] leading-tight">languages supported for<br/>global brands</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AITrainingSection;