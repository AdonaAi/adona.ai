import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Input your URL",
      description: "Drop your website link and adona.ai’s AI will get to know your brand.",
      videoUrl: "https://framerusercontent.com/assets/xraB9gTdokcD9EEBke0DIbvXzXU.mp4",
      id: "row-01"
    },
    {
      number: "02",
      title: "Choose an idea",
      description: "adona.ai delivers multiple design to choose from. Edit and tweak to your liking.",
      videoUrl: "https://framerusercontent.com/assets/s9If74dnp3LTbVF2LYWmlmvaN8.mp4",
      id: "row-02"
    },
    {
      number: "03",
      title: "Edit & launch",
      description: "Complete, on-brand newsletters ready to edit or export.",
      videoUrl: "https://framerusercontent.com/assets/0uCEojyWXbdNzE6zejj75lnC4.mp4",
      id: "row-02-1"
    }
  ];

  return (
    <section 
      className="w-full flex flex-col items-center justify-start bg-white" 
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="container px-6 max-w-[1200px]">
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-[#1a1a1a] font-bold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.02em]">
            How adona.ai newsletter creator works:
          </h2>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col gap-0 max-w-[1000px] mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="flex flex-row items-start gap-8 md:gap-16 relative"
            >
              {/* Left Side: Number & Line */}
              <div className="flex flex-col items-center min-w-[48px] md:min-w-[64px]">
                <div className="flex items-center justify-center w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-full bg-white border border-[#f2f2f2] shadow-[0px_2px_10px_rgba(0,0,0,0.02)] z-10 transition-transform duration-300 hover:scale-105">
                  <span className="text-[#1a1a1a] font-semibold text-[20px] md:text-[24px]">
                    {step.number}
                  </span>
                </div>
                
                {/* Connecting Line */}
                {index !== steps.length - 1 && (
                  <div 
                    className="w-[2px] h-[calc(100%+80px)] md:h-[calc(100%+120px)] absolute top-8 md:top-12 z-0"
                    style={{
                      background: 'linear-gradient(to bottom, #8e8ffa, #ef5da8)',
                      opacity: 0.8
                    }}
                  />
                )}
              </div>

              {/* Right Side: Content */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 pb-24 md:pb-32 w-full">
                {/* Text Content */}
                <div className="flex-1 max-w-[400px]">
                  <h3 className="text-[#1a1a1a] font-semibold text-[24px] md:text-[32px] leading-[1.3] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#666666] text-[16px] md:text-[18px] leading-[1.6]">
                    {step.description}
                  </p>
                </div>

                {/* Video Demonstration */}
                <div className="flex-1 w-full md:w-auto">
                  <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#f9f9f9] border border-[#f2f2f2] shadow-adona aspect-video lg:aspect-[1.6/1]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      src={step.videoUrl}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;