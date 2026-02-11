import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

const testimonials = [
  {
    name: "Anna Clark",
    handle: "Co-Founder",
    avatar: "https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg?width=400&height=400",
    quote: "I run everything solo and adona.ai basically saved my life lol. Content posts, ads, everything ready without babysitting. 10/10.",
    image: "https://framerusercontent.com/images/xbAN3vfAFtKikDsnNHzeVSB7TMU.png?width=1024&height=1536",
    location: "CA - Mar 6, 2025",
    isVerified: false
  },
  {
    name: "Luker Lefter",
    handle: "",
    avatar: "https://framerusercontent.com/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png?width=400&height=400",
    quote: "Getting started was easy, way easier than I thought. Took about 10 min and my brand content was ready to go.",
    image: "https://framerusercontent.com/images/Lnp1H9cixbDGJ6RmbNwxJQ43Ss.jpg?width=1024&height=1536",
    location: "US - Mar 4, 2025",
    isVerified: true,
    extraReview: {
      avatar: "https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png?width=400&height=400",
      name: "Jonas Bertasius",
      quote: "Posting is simple now Social media posts used to take me HOURS. Now it's like 10 minutes a day. crazy.",
      location: "LT - Mar 11, 2025"
    }
  },
  {
    name: "Rachel Green",
    handle: "",
    avatar: "https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png?width=400&height=400",
    quote: "I'm not super techy and this was simple to set up. Content actually matched our style. Would recommend!",
    location: "UK - Mar 5, 2025",
    isVerified: true
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#fcfcfc] py-[120px] overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold tracking-tight text-[#1a1a1a] leading-[1.2] mb-4">
            Used by founders who move fast
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-[#f1f1f1] rounded-[32px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src={testimonials[0].avatar} 
                  alt={testimonials[0].name} 
                  width={44} 
                  height={44} 
                  className="rounded-full bg-gray-100"
                />
                <div>
                  <h4 className="text-[16px] font-semibold text-[#1a1a1a] leading-tight">
                    {testimonials[0].name}
                  </h4>
                  <p className="text-[14px] text-[#666666]">{testimonials[0].handle}</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666666] leading-[1.6] mb-6">
                {testimonials[0].quote}
              </p>
              {testimonials[0].image && (
                <div className="rounded-[24px] overflow-hidden mb-4 bg-gray-50 aspect-[4/5] relative">
                  <Image 
                    src={testimonials[0].image} 
                    alt="Testimonial proof" 
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-[12px] text-[#999999]">{testimonials[0].location}</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-[#f1f1f1] rounded-[32px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src={testimonials[1].avatar} 
                  alt={testimonials[1].name} 
                  width={44} 
                  height={44} 
                  className="rounded-full bg-gray-100"
                />
                <div className="flex items-center gap-1">
                  <h4 className="text-[16px] font-semibold text-[#1a1a1a] leading-tight">
                    {testimonials[1].name}
                  </h4>
                  {testimonials[1].isVerified && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#a855f7]">
                      <path d="M21.9936 12C21.9936 12.5937 21.6967 13.155 21.2062 13.488L13.4062 18.788C12.9157 19.121 12.28 19.121 11.7894 18.788L3.98944 13.488C3.49893 13.155 3.20199 12.5937 3.20199 12C3.20199 11.4063 3.49893 10.845 3.98944 10.512L11.7894 5.212C12.28 4.879 12.9157 4.879 13.4062 5.212L21.2062 10.512C21.6967 10.845 21.9936 11.4063 21.9936 12Z" fill="currentColor" opacity="0.1"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                    </svg>
                  )}
                </div>
              </div>
              <p className="text-[16px] text-[#666666] leading-[1.6] mb-6">
                {testimonials[1].quote}
              </p>
              <div className="rounded-[24px] overflow-hidden mb-4 bg-gray-50 aspect-[4/3] relative">
                <Image 
                  src={testimonials[1].image!} 
                  alt="Testimonial proof" 
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[12px] text-[#999999]">{testimonials[1].location}</p>
            </div>

            {testimonials[1].extraReview && (
              <div className="bg-white border border-[#f1f1f1] rounded-[32px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-[1.01]">
                <div className="flex items-center gap-3 mb-4">
                  <Image 
                    src={testimonials[1].extraReview.avatar} 
                    alt={testimonials[1].extraReview.name} 
                    width={44} 
                    height={44} 
                    className="rounded-full bg-gray-100"
                  />
                  <h4 className="text-[16px] font-semibold text-[#1a1a1a] leading-tight">
                    {testimonials[1].extraReview.name}
                  </h4>
                </div>
                <p className="text-[16px] text-[#666666] leading-[1.6] mb-4">
                  {testimonials[1].extraReview.quote}
                </p>
                <p className="text-[12px] text-[#999999]">{testimonials[1].extraReview.location}</p>
              </div>
            )}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-[#f1f1f1] rounded-[32px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src={testimonials[2].avatar} 
                  alt={testimonials[2].name} 
                  width={44} 
                  height={44} 
                  className="rounded-full bg-gray-100"
                />
                <div className="flex items-center gap-1">
                  <h4 className="text-[16px] font-semibold text-[#1a1a1a] leading-tight">
                    {testimonials[2].name}
                  </h4>
                  {testimonials[2].isVerified && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#a855f7]">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                    </svg>
                  )}
                </div>
              </div>
              <p className="text-[16px] text-[#666666] leading-[1.6] mb-6">
                {testimonials[2].quote}
              </p>
              <p className="text-[12px] text-[#999999]">{testimonials[2].location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-4 bg-white border border-[#f1f1f1] px-6 py-3 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <div className="flex -space-x-2">
              {[
                "https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg?width=400&height=400",
                "https://framerusercontent.com/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png?width=400&height=400",
                "https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png?width=400&height=400",
                "https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png?width=400&height=400"
              ].map((src, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                  <Image src={src} alt="User" width={32} height={32} />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-medium text-[#1a1a1a]">
                <strong className="font-bold">4268+</strong> founders love adona.ai
              </span>
              <div className="w-[1px] h-4 bg-[#f1f1f1]" />
              <button className="flex items-center gap-2 group cursor-pointer">
                <span className="text-[14px] font-medium text-[#1a1a1a]">View more</span>
                <div className="bg-[#1a1a1a] rounded-full p-1 transition-transform group-hover:rotate-45">
                  <Plus size={12} className="text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}