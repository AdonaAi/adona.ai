"use client";

import React from 'react';

/**
 * ProcessSteps Component
 * A pixel-perfect clone of the "How Our AI Marketing Tool Works" vertical timeline.
 * Features numbered steps connected by a gradient vertical line.
 */
const ProcessSteps: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Input your URL',
      description: "Drop your website link and adona.ai's AI will learn your brand in minutes.",
      lineGradient: 'linear-gradient(180deg, #00b4d8 0%, #6E7DBF 100%)',
    },
    {
      number: '02',
      title: 'Swipe ideas',
      description: 'Our AI content creator delivers fresh ideas every single day',
      lineGradient: 'linear-gradient(180deg, #6E7DBF 0%, #90e0ef 100%)',
    },
    {
      number: '03',
      title: 'Edit & customize',
      description: 'Change anything, no design skills needed.',
      lineGradient: 'linear-gradient(180deg, #90e0ef 0%, #C84664 100%)',
    },
    {
      number: '04',
      title: 'Download & publish',
      description: 'Launch 10x more content, 75% faster.',
      lineGradient: 'linear-gradient(180deg, #C84664 0%, #B03A55 100%)',
    },
  ];

  return (
    <section className="bg-background w-full py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-[20px] font-semibold text-primary mb-[80px] tracking-tight text-center">
          How Our AI Marketing Tool Works
        </h2>

        {/* Timeline Container */}
        <div className="w-full max-w-[540px] flex flex-col items-start relative pb-10">
          {steps.map((step, index) => (
            <div key={step.number} className="w-full flex items-start group relative">
              {/* Left Column: Number and Vertical Line */}
              <div className="flex flex-col items-center mr-12 min-h-[160px]">
                {/* Number Wrapper */}
                <div className="relative flex items-center justify-center">
                   <span className="text-[32px] font-bold text-primary leading-none z-10 transition-transform duration-300 group-hover:scale-105">
                    {step.number}
                  </span>
                </div>

                {/* Vertical Line Connector (not for the last step) */}
                {index !== steps.length - 1 && (
                  <div 
                    className="w-[1.5px] flex-grow my-4"
                    style={{ 
                        background: step.lineGradient,
                        minHeight: '100px'
                    }}
                  />
                )}
                {/* Visual stub for the last step's vertical alignment */}
                {index === steps.length - 1 && <div className="h-4" />}
              </div>

              {/* Right Column: Content */}
              <div className="flex flex-col pt-1">
                <h3 className="text-[32px] font-bold text-primary leading-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-[16px] text-[#666666] leading-relaxed max-w-[340px] font-medium opacity-80">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;