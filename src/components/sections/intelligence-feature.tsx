import React from 'react';
import Image from 'next/image';
import { Apple, Zap, Search, Fingerprint, MousePointer2, Layout, Maximize2, Heart, Clock } from 'lucide-react';

/**
 * IntelligenceFeature Component
 * 
 * Clones the "AI trained on millions of high-performance Facebook ads" section.
 * Features:
 * - Brand icon stack (Apple, Nike, Amazon, etc.)
 * - SVG connecting paths to a central mobile mockup
 * - Mobile UI mockup with "visuals loaded" indicator
 * - Floating intelligence indicator cards with specific metrics
 */

const IntelligenceFeature = () => {
  return (
    <section className="relative w-full py-20 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.01em] text-black">
            AI trained on millions of high-performance Facebook ads
          </h2>
        </div>

        {/* Content Wrapper */}
        <div className="relative flex flex-col items-center">
          
          {/* Brand Icons Stack */}
          <div className="flex items-center justify-center gap-12 mb-12">
            <div className="w-10 h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
              <Apple className="w-8 h-8 fill-black" strokeWidth={0} />
            </div>
            <div className="w-12 h-12 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
               <svg viewBox="0 0 24 24" className="w-10 h-10 fill-black"><path d="M21 16.5c-3.1 0-8.2-2.1-10.4-3.1L3 20c4.1-1.2 13.9-3.5 18-3.5zM3 4c3.1 0 8.2 2.1 10.4 3.1L21 0.5c-4.1 1.2-13.9 3.5-18 3.5z"/></svg>
            </div>
            <div className="w-10 h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity font-bold text-2xl italic font-serif">
              a
            </div>
            <div className="w-10 h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
               <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 9h-2v2h-1v-2h-3v-1h3V7h1v2h2v2z"/></svg>
            </div>
            <div className="w-10 h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
               <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div className="w-14 h-14 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
               <svg viewBox="0 0 24 24" className="w-12 h-12 fill-black"><path d="M21 8.35a6 6 0 0 0-4.52-1.95 6 6 0 0 0-4.43 1.95 6 6 0 0 0-4.43-1.95 6 6 0 0 0-4.52 1.95c-1.34 1.35-2.1 3.19-2.1 5.14s.76 3.79 2.1 5.13l10.95 5.38 10.95-5.38a7.28 7.28 0 0 0 2.1-5.13 7.28 7.28 0 0 0-2.1-5.14z"/></svg>
            </div>
          </div>

          {/* Central Visualization Area */}
          <div className="relative w-full max-w-[900px] h-[600px] flex justify-center items-end pb-10">
            
            {/* Background SVG Connectors - Paths from brands to phone */}
            <div className="absolute inset-0 z-0 flex justify-center">
              <svg width="400" height="300" viewBox="0 0 400 300" fill="none" className="mt-[-40px]">
                <path d="M50,0 Q100,150 200,220" stroke="#e6e6e6" strokeWidth="1" />
                <path d="M120,0 Q150,150 200,220" stroke="#e6e6e6" strokeWidth="1" />
                <path d="M180,0 Q190,150 200,220" stroke="#e6e6e6" strokeWidth="1" />
                <path d="M220,0 Q210,150 200,220" stroke="#e6e6e6" strokeWidth="1" />
                <path d="M280,0 Q250,150 200,220" stroke="#e6e6e6" strokeWidth="1" />
                <path d="M350,0 Q300,150 200,220" stroke="#e6e6e6" strokeWidth="1" />
                {/* Gradient focal point */}
                <circle cx="200" cy="220" r="2" fill="url(#grad1)" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#7f66ff', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#ff66a3', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Mobile UI Mockup */}
            <div className="relative z-10 w-[240px] h-[480px] bg-white rounded-[40px] border-[12px] border-black shadow-[0px_40px_80px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-b-[16px] z-20"></div>
              
              <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                <p className="text-[#2d8659] font-semibold mb-4 text-sm">Your visuals are</p>
                <div className="relative inline-flex items-center justify-center p-6 bg-[#ebf9f1] rounded-[24px]">
                  <span className="text-[48px] font-black text-[#2d8659]">99</span>
                  <div className="ml-2 flex flex-col items-center">
                     <Zap className="fill-[#2d8659] text-[#2d8659]" size={28} />
                  </div>
                </div>
                <p className="mt-4 font-bold text-black opacity-60">loaded</p>
                
                {/* Small character placeholder */}
                <div className="absolute bottom-0 w-32 h-32 opacity-20">
                  <div className="w-full h-full bg-slate-200 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>

            {/* Floating Cards - Performance Data */}
            
            {/* Card 1: Value-first copy */}
            <div className="absolute top-[180px] left-[40px] card-modern p-4 max-w-[220px] shadow-sm animate-in fade-in slide-in-from-left-4 duration-1000">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-slate-50 border border-slate-100 rounded-lg">
                  <MousePointer2 className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-black">Value-first copy detected</h4>
                  <p className="text-[11px] text-[#666666] leading-snug mt-1">Opening with benefit boosts click-through rate.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Social proof */}
            <div className="absolute top-[280px] left-[-30px] card-modern p-4 max-w-[240px] shadow-sm animate-in fade-in slide-in-from-left-6 duration-1000 delay-200">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-[#f0f1ff] border border-[#e6e9ff] rounded-lg">
                  <Fingerprint className="w-4 h-4 text-[#7f66ff]" />
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-black">Social proof integration tested</h4>
                  <p className="text-[11px] text-[#666666] leading-snug mt-1">Adding reviews increased clicks by 27%.</p>
                </div>
              </div>
            </div>

            {/* Card 3: CTA contrast */}
            <div className="absolute top-[400px] left-[20px] card-modern p-4 max-w-[220px] shadow-sm animate-in fade-in slide-in-from-left-8 duration-1000 delay-400">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-slate-50 border border-slate-100 rounded-lg">
                  <Maximize2 className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-black">CTA contrast optimized</h4>
                  <p className="text-[11px] text-[#666666] leading-snug mt-1">High-contrast buttons increase through by 19%.</p>
                </div>
              </div>
            </div>

            {/* Card 4: Hooks saved */}
            <div className="absolute top-[180px] right-[40px] card-modern p-4 max-w-[220px] shadow-sm animate-in fade-in slide-in-from-right-4 duration-1000">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-[#fff7e6] border border-[#ffecb3] rounded-lg">
                  <Zap className="w-4 h-4 text-[#f39c12] fill-[#f39c12]" />
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-black">Best-performing hooks saved</h4>
                  <p className="text-[11px] text-[#666666] leading-snug mt-1">Templates with 38% higher CTR.</p>
                </div>
              </div>
            </div>

            {/* Card 5: Visual hierarchy */}
            <div className="absolute top-[340px] right-[-10px] card-modern p-4 max-w-[220px] shadow-sm animate-in fade-in slide-in-from-right-6 duration-1000 delay-200">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-slate-50 border border-slate-100 rounded-lg">
                  <Layout className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-black">Visual hierarchy optimized</h4>
                  <p className="text-[11px] text-[#666666] leading-snug mt-1">Hero image placement increases engagement by 22%.</p>
                </div>
              </div>
            </div>

            {/* Card 6: Whitespace usage */}
            <div className="absolute top-[440px] right-[60px] card-modern p-4 max-w-[220px] shadow-sm animate-in fade-in slide-in-from-right-8 duration-1000 delay-400">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-slate-50 border border-slate-100 rounded-lg">
                  <Search className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-black">Whitespace usage optimized</h4>
                  <p className="text-[11px] text-[#666666] leading-snug mt-1">Balanced spacing increases conversion.</p>
                </div>
              </div>
            </div>
            
            {/* Lower-floating overflow cards */}
            <div className="absolute top-[520px] left-[100px] card-modern p-4 max-w-[200px] shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
               <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-[#ffeff2] border border-[#ffcfd8] rounded-lg">
                  <Heart className="w-4 h-4 text-[#ff66a3] fill-[#ff66a3]" />
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-black">Emotional triggers</h4>
                </div>
               </div>
            </div>

            <div className="absolute top-[530px] right-[100px] card-modern p-4 max-w-[200px] shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
               <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-[#f0f1ff] border border-[#e6e9ff] rounded-lg">
                  <Clock className="w-4 h-4 text-[#7f66ff]" />
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-black">Urgency tags</h4>
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