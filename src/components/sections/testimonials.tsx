import React from 'react';
import Image from 'next/image';
import { BadgeCheck, Plus } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-[36px] md:text-[56px] font-bold text-black tracking-tight leading-[1.1]">
            Built for people who get things done
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Trusted by teams, founders, and marketers worldwide.
          </p>
        </div>

        {/* Masonry Grid - Manually controlled columns for visual match */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px] relative">

          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <TestimonialCard
              name="Anna Clark"
              handle="CA - Mar 6, 2025"
              avatar="https://framerusercontent.com/images/XATpK44C5QAZu9lJrFxccT6yM0.png"
              content="I run everything solo and adona.ai basically saved my life lol. Content posts, ads, everything ready without babysitting. 10/10."
              image="https://framerusercontent.com/images/XX7bmvFdF1LpqpvkxQ7a4nMUYc.webp"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <TestimonialCard
              name="Luker Lefter"
              handle="US - Mar 4, 2025"
              avatar="https://framerusercontent.com/images/uUDh9iL9XtPtaDL9gyPahadivV4.jpg"
              content="Getting started was easy, way easier than I thought. Took about 10 min and my brand content was ready to go."
              image="https://framerusercontent.com/images/Uf0fNtJVNU29N0m0FtdgQp5X668.jpeg"
              verified
            />
            <TestimonialCard
              name="Jonas Bertasius"
              handle="LT - Mar 11, 2025"
              avatar="https://framerusercontent.com/images/En4MDD7bdBTT7WSJNCOWrsyEGZ0.jpeg"
              content="Posting is simple now Social media posts used to take me HOURS. Now it’s like 10 minutes a day. crazy."
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <TestimonialCard
              name="Rachel Green"
              handle="UK - Feb 17, 2025"
              avatar="https://framerusercontent.com/images/35RHTpuahX1vBZEn4OAxzwjkE.png"
              content="I’m not super techy and this was simple to set up. Content actually matched our style. Would recommend!"
              image="https://framerusercontent.com/images/ecRF2423mWpfblLOSsegj5PXoIw.png"
              verified
            />
          </div>

          {/* Heavy Fade Gradient Overlay at the bottom of the grid */}
          <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent z-20 pointer-events-none" />
        </div>

        {/* Floating CTA Pill */}
        <div className="mt-8 relative z-30">
          <button className="bg-[#F2F2F2] pl-2 pr-5 py-2 rounded-full flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <div className="flex -space-x-3">
              {[
                'https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg',
                'https://framerusercontent.com/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png',
                'https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png',
                'https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png'
              ].map((src, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-[#F2F2F2] overflow-hidden relative shadow-sm">
                  <Image src={src} alt="User" fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[15px] font-semibold text-[#1d1d1f]">
                <span className="font-bold">4268+</span> founders love adona.ai
              </span>
              <div className="w-px h-4 bg-gray-300"></div>
              <span className="text-[14px] font-medium text-[#1d1d1f] flex items-center gap-1">
                View more <Plus className="w-4 h-4 bg-black text-white rounded-full p-0.5" />
              </span>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

// Sub-component for individual cards
const TestimonialCard = ({ name, handle, avatar, content, image, verified }: any) => (
  <div className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] h-fit">
    <div className="flex items-center gap-3 mb-3">
      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div>
        <div className="flex items-center gap-1">
          <h4 className="font-bold text-[15px] text-[#1D1D1F]">{name}</h4>
          {verified && (
            <BadgeCheck className="w-4 h-4 text-[#007AFF] fill-[#007AFF] text-white" />
          )}
        </div>
      </div>
    </div>

    <p className="text-[15px] leading-[1.5] text-[#424245] mb-4 font-normal">
      {content}
    </p>

    {image && (
      <div className="relative w-full rounded-[18px] overflow-hidden bg-gray-50 mb-3 border border-gray-100">
        <Image
          src={image}
          alt="Testimonial attachment"
          width={500}
          height={600}
          className="w-full h-auto object-cover block"
          unoptimized
        />
      </div>
    )}

    <div className="text-[13px] text-[#86868b] font-medium mt-1">
      {handle}
    </div>
  </div>
);

export default Testimonials;
