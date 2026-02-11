import React from 'react';

const videos = [
  'https://framerusercontent.com/assets/LdXMxDlJ2xi8prEhoQt44qTqTvQ.mp4',
  'https://framerusercontent.com/assets/UldvemZGbQK0sArzVPlw6acHh4.mp4',
  'https://framerusercontent.com/assets/p48AUwhRxn6b5nP7jjsX5TjEGs.mp4',
  'https://framerusercontent.com/assets/ymE1vWkO2mwxLlaG3t2r1ugO1o.mp4',
  'https://framerusercontent.com/assets/1iQjUFtSzRbmpvWEEmtuUQaa74.mp4',
  'https://framerusercontent.com/assets/hJ8aMY55nYplxXOnroUOXMHSzo.mp4'
];

export default function VideoGallery() {
  return (
    <section className="bg-[#FFFFFF] py-[120px] px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-[1200px] w-full text-center mb-16">
        <h2 className="text-[#1A1A1A] font-bold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.02em] font-display">
          See adona.ai in action
        </h2>
      </div>

      <div className="w-full max-w-[1400px]">
        {/* Dense Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="relative aspect-[9/16] rounded-[24px] overflow-hidden bg-[#F3F4F6] shadow-ambient transition-transform duration-500 hover:scale-[1.02]"
            >
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for realism */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-only text or bottom spacing if needed per original layout */}
      <div className="mt-12 text-center md:hidden">
        <p className="text-[#666666] font-medium text-[14px]">
          Authentic influencer content generated in seconds.
        </p>
      </div>
    </section>
  );
}