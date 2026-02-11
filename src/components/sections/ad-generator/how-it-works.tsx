import React from 'react';

/**
 * HowItWorks component clones the vertical timeline section.
 * Uses the light theme as specified.
 * References exact video assets from the provided list.
 */

const steps = [
  {
    id: '01',
    title: 'Drop your URL',
    description: 'adona.ai analyses your website, learns your tone, style, and audience.',
    videoSrc: 'https://framerusercontent.com/assets/xraB9gTdokcD9EEBke0DIbvXzXU.mp4',
  },
  {
    id: '02',
    title: 'Generate instantly',
    description: 'Facebook, TikTok, and Instagram ads in seconds.',
    videoSrc: 'https://framerusercontent.com/assets/s9If74dnp3LTbVF2LYWmlmvaN8.mp4',
  },
  {
    id: '03',
    title: 'Customize easily',
    description: 'Edit copy, visuals, and hooks right in the platform.',
    videoSrc: 'https://framerusercontent.com/assets/0uCEojyWXbdNzE6zejj75lnC4.mp4',
  },
  {
    id: '04',
    title: 'Publish & test',
    description: 'Pump out unlimited variations for faster A/B testing.',
    videoSrc: null, // As per HTML, 04 doesn't have a video sibling in the structure
  },
];

export default function HowItWorks() {
  return (
    <section 
      className="bg-[#FCFCFC] pt-[120px] pb-[120px] px-6 overflow-hidden" 
      data-framer-name="Integrations"
    >
      <div className="max-width-[1200px] mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <div className="mb-[80px] text-center">
          <h2 className="text-[clamp(32px,6vw,48px)] font-bold tracking-[-0.02em] text-[#1A1A1A] leading-[1.2]">
            How adona.ai ad creator works:
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="w-full max-w-[1000px] flex flex-col relative">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="flex items-start group relative min-h-[160px]"
              id={`row-${step.id === '03' ? '02-1' : step.id === '04' ? '02-2' : step.id}`}
            >
              {/* Vertical Metric/Line Column */}
              <div className="hidden md:flex flex-col items-center mr-12 relative h-full">
                {/* Step Number Circle */}
                <div className="w-[84px] h-[84px] rounded-full bg-white border border-[#f1f1f1] flex items-center justify-center z-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                  <span className="text-[40px] font-bold text-[#1A1A1A] leading-none">
                    {step.id}
                  </span>
                </div>
                
                {/* Connecting Line (Gradient Line) */}
                {index !== steps.length - 1 && (
                  <div 
                    className="absolute top-[84px] bottom-0 w-[2px]"
                    style={{
                      background: 'linear-gradient(to bottom, #a855f7, #ec4899, #ef4444)',
                    }}
                  />
                )}
              </div>

              {/* Content Column */}
              <div className="flex-1 flex flex-col md:flex-row gap-10 md:gap-20 items-center md:items-start pb-20 md:pb-[120px]">
                <div className="flex-1 text-center md:text-left pt-2">
                  <h3 className="text-[32px] md:text-[40px] font-bold text-[#1A1A1A] mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[18px] md:text-[20px] text-[#666666] leading-[1.6] max-w-[400px]">
                    {step.description}
                  </p>
                </div>

                {/* Video Preview */}
                <div className="flex-1 w-full max-w-[480px]">
                  {step.videoSrc ? (
                    <div className="aspect-video bg-white rounded-[32px] overflow-hidden border border-[#f1f1f1] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                      <video 
                        src={step.videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    /* Placeholder for 04 or when no video exists */
                    <div className="h-0 md:h-20" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        #integrations {
          scroll-margin-top: 80px;
        }
      `}</style>
    </section>
  );
}