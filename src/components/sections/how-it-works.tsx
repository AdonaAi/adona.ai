import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Input your URL',
      description: 'Provide your website link, and our system builds your brand profile in minutes.',
      videoUrl: 'https://framerusercontent.com/assets/xraB9gTdokcD9EEBke0DIbvXzXU.mp4',
    },
    {
      number: '02',
      title: 'Choose a creative concept',
      description: 'Generate high-quality creative ideas refined through performance testing.',
      videoUrl: 'https://framerusercontent.com/assets/s9If74dnp3LTbVF2LYWmlmvaN8.mp4',
    },
    {
      number: '03',
      title: 'Edit & customize',
      description: 'Edit and personalize every detail — no technical skills required.',
      videoUrl: 'https://framerusercontent.com/assets/0uCEojyWXbdNzE6zejj75lnC4.mp4',
    },
    {
      number: '04',
      title: 'Download & Publish',
      description: 'Launch high-performing content and scale 5x faster.',
      videoUrl: 'https://framerusercontent.com/assets/0uCEojyWXbdNzE6zejj75lnC4.mp4',
    },
  ];

  return (
    <section className="bg-[#fafafa] py-[40px] overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-[32px] md:text-[48px] font-bold leading-[1.2] text-[#000000] tracking-tight">
            How Our AI Content Generator Works
          </h2>
        </div>

        <div className="relative max-w-[1000px] mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex group mb-24 last:mb-0">
              <div className="flex flex-col items-center mr-12 md:mr-24 min-w-[40px]">
                <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-white border border-[#e6e6e6] rounded-xl shadow-sm mb-4">
                  <span className="text-[18px] font-bold text-[#000000] leading-none tracking-tighter">
                    {step.number}
                  </span>
                </div>
                {index !== steps.length - 1 && (
                  <div className="flex-1 w-[2px] bg-gradient-to-b from-[#7f66ff] to-[#ff66a3] rounded-full min-h-[120px] md:min-h-[200px]"></div>
                )}
              </div>

              <div className="flex-1 flex flex-col md:flex-row items-start gap-12 md:gap-20">
                <div className={`flex-1 pt-1 ${step.number === '04' ? 'text-justify' : ''}`}>
                  <h3 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[18px] md:text-[20px] text-[#666666] leading-[1.6] max-w-sm">
                    {step.description}
                  </p>
                </div>
                {step.number !== '04' && (
                  <div className="w-full md:w-[540px] aspect-video relative rounded-3xl overflow-hidden shadow-2xl border border-[#e6e6e6] bg-white">
                    <video
                      src={step.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;