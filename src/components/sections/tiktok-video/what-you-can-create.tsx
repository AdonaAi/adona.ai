"use client";

import React from 'react';
import Image from 'next/image';

const WhatYouCanCreate = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#1D1D1F] tracking-tight">
            What You Can Create
          </h2>
        </div>

        {/* Cards Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Row 1 */}
          {/* Card 1: Unboxings */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E5] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="mb-4 text-center">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-1">Unboxings</h3>
              <p className="text-[15px] text-[#6E6E73] leading-snug">Authentic product reveals that hook viewers.</p>
            </div>
            <div className="flex gap-2 justify-center items-end h-[160px] pb-[-10px]">
              <div className="relative w-[105px] h-[150px] rounded-xl overflow-hidden shadow-sm translate-y-2">
                <Image 
                  src="https://framerusercontent.com/images/G6GcsOwj3EOGSYR8C7j3fOoFM.gif" 
                  alt="Unboxing 1" 
                  fill 
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative w-[105px] h-[150px] rounded-xl overflow-hidden shadow-sm translate-y-2">
                <Image 
                  src="https://framerusercontent.com/images/4NkdibXB5TZKPncmVXiIFu70M.gif" 
                  alt="Unboxing 2" 
                  fill 
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative w-[105px] h-[150px] rounded-xl overflow-hidden shadow-sm translate-y-2">
                <Image 
                  src="https://framerusercontent.com/images/B8prO4GuENDN2x2lEm5VweOYo.gif" 
                  alt="Unboxing 3" 
                  fill 
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Card 2: Testimonials & Reviews */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E5] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="mb-4 text-center">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-1">Testimonials & Reviews</h3>
              <p className="text-[15px] text-[#6E6E73] leading-snug">Customer-style content that builds trust.</p>
            </div>
            <div className="relative h-[160px] w-full">
              {/* Star Left */}
              <div className="absolute w-[90px] h-[120px] left-[10%] bottom-[10px] opacity-90" style={{ transform: 'rotate(-15deg)' }}>
                <Image 
                  src="https://framerusercontent.com/images/vpfsijpkL3BZYyFkTeze5rpJdJg.png" 
                  alt="Star Left" 
                  fill 
                  className="object-contain"
                  unoptimized
                />
              </div>
              {/* Star Middle (bottom) */}
              <div className="absolute w-[80px] h-[110px] left-[40%] text-center -bottom-2 z-10" style={{ transform: 'rotate(10deg)' }}>
                 <Image 
                  src="https://framerusercontent.com/images/rXbhzKNxKPcmDzL0t217k42tT4.png" 
                  alt="Star Middle" 
                  fill 
                  className="object-contain"
                  unoptimized
                />
              </div>
              {/* Star Right (top) */}
              <div className="absolute w-[110px] h-[140px] right-[10%] top-[0px]" style={{ transform: 'rotate(15deg)' }}>
                <Image 
                  src="https://framerusercontent.com/images/X0OSNr4H9Zq4RCl593xdOnqRzc.png" 
                  alt="Star Right" 
                  fill 
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          {/* Card 3: Ad-Ready TikToks */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E5] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="mb-4">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-1">Ad-Ready TikToks</h3>
              <p className="text-[15px] text-[#6E6E73] leading-snug max-w-[200px]">Feed, story, and trend-style videos optimized for campaigns.</p>
            </div>
            <div className="relative flex justify-center items-end h-[220px] mt-[-40px] overflow-visible group cursor-pointer perspective-1000">
              {/* Center Card - Front */}
              <div className="absolute w-[75px] h-[110px] rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 ease-out z-30 group-hover:scale-110 group-hover:-translate-y-4" 
                   style={{ left: '50%', bottom: '30px', transform: 'translateX(-50%) rotate(0deg)' }}>
                 <Image src="https://framerusercontent.com/images/vE4chq7D4p7jcefXeN4KrDlMw9o.gif" alt="Ad Center" fill className="object-cover" unoptimized />
              </div>

              {/* Inner Left */}
              <div className="absolute w-[70px] h-[100px] rounded-lg overflow-hidden shadow-md transform transition-all duration-500 ease-out z-20 group-hover:-translate-x-12 group-hover:-rotate-12 group-hover:scale-105" 
                   style={{ left: '50%', bottom: '30px', transform: 'translateX(-140%) rotate(-15deg)' }}>
                 <Image src="https://framerusercontent.com/images/I2EDfFF6E1folOogZhTQz4IvS48.gif" alt="Ad Left Inner" fill className="object-cover" unoptimized />
              </div>

              {/* Inner Right */}
              <div className="absolute w-[70px] h-[100px] rounded-lg overflow-hidden shadow-md transform transition-all duration-500 ease-out z-20 group-hover:translate-x-12 group-hover:rotate-12 group-hover:scale-105" 
                   style={{ left: '50%', bottom: '30px', transform: 'translateX(40%) rotate(15deg)' }}>
                 <Image src="https://framerusercontent.com/images/PIKe5YFAuUO77cDuomVbolOAY.gif" alt="Ad Right Inner" fill className="object-cover" unoptimized />
              </div>

              {/* Outer Left */}
              <div className="absolute w-[70px] h-[100px] rounded-lg overflow-hidden shadow-md transform transition-all duration-500 ease-out z-10 group-hover:-translate-x-20 group-hover:-rotate-25" 
                   style={{ left: '50%', bottom: '20px', transform: 'translateX(-220%) rotate(-30deg)' }}>
                 <Image src="https://framerusercontent.com/images/B8prO4GuENDN2x2lEm5VweOYo.gif" alt="Ad Left Outer" fill className="object-cover" unoptimized />
              </div>

              {/* Outer Right */}
              <div className="absolute w-[70px] h-[100px] rounded-lg overflow-hidden shadow-md transform transition-all duration-500 ease-out z-10 group-hover:translate-x-20 group-hover:rotate-25" 
                   style={{ left: '50%', bottom: '20px', transform: 'translateX(120%) rotate(30deg)' }}>
                 <Image src="https://framerusercontent.com/images/3V2MDzKWR5nSCNEUkR7UmNoezc.gif" alt="Ad Right Outer" fill className="object-cover" unoptimized />
              </div>
            </div>
          </div>

          {/* Card 4: Organic-Style TikToks */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E5] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="mb-4 text-center">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-1">Organic-Style TikToks</h3>
              <p className="text-[15px] text-[#6E6E73] leading-snug">Native-looking videos that blend into the feed.</p>
            </div>
            <div className="relative h-[200px] w-full flex items-center justify-center">
               {/* Leaves/Wave */}
               <div className="absolute w-full h-[120px] bottom-0 left-0 transition-transform duration-500 hover:scale-105">
                <Image 
                  src="https://framerusercontent.com/images/8VHencKJ3cAFKTm6ixH48qthfs.png" 
                  alt="Leaves" 
                  fill 
                  className="object-contain object-bottom"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          {/* Card 5: Product Demos - Circular Grid */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E5] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="mb-4">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-1">Product Demos</h3>
              <p className="text-[15px] text-[#6E6E73] leading-snug">Short, scroll-stopping demos of your product in action.</p>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-8 place-items-center">
              {/* Circles Row 1 */}
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden shadow-sm border border-gray-100">
                <Image src="https://framerusercontent.com/images/W1KcToVNIwYeJSZMZrMWXstVuk.jpeg" alt="Product 1" fill className="object-cover scale-150" unoptimized />
              </div>
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden shadow-sm border border-gray-100">
                <Image src="https://framerusercontent.com/images/Sirt23zD3WJV9l9PRH1KOneNQ8.jpeg" alt="Product 2" fill className="object-cover scale-150" unoptimized />
              </div>
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden shadow-sm border border-gray-100">
                <Image src="https://framerusercontent.com/images/y2FggE3GqERWm86e7am5W6cZBHY.jpg" alt="Product 3" fill className="object-cover scale-150" unoptimized />
              </div>
               <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden shadow-sm border border-gray-100">
                <Image src="https://framerusercontent.com/images/MzExkersrvOrpJTK0km82UDaFXY.png" alt="Product 4" fill className="object-cover scale-150" unoptimized />
              </div>
              {/* Circles Row 2 */}
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden shadow-sm border border-gray-100">
                <Image src="https://framerusercontent.com/images/btvGpKFeqYvGPM6G2TWdBQx2vU.webp" alt="Product 5" fill className="object-cover scale-150" unoptimized />
              </div>
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden shadow-sm border border-gray-100">
                <Image src="https://framerusercontent.com/images/RAP3T198gn2Ph1D4ywMgAjb4tEk.jpeg" alt="Product 6" fill className="object-cover scale-150" unoptimized />
              </div>
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden shadow-sm border border-gray-100">
                <Image src="https://framerusercontent.com/images/cIg92829bRARV7I1FSLJCtHGFA.jpeg" alt="Product 7" fill className="object-cover scale-150" unoptimized />
              </div>
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden shadow-sm border border-gray-100">
                <Image src="https://framerusercontent.com/images/0epfXm8saZDWh5uGjxoMEJmdFJo.png" alt="Product 8" fill className="object-cover scale-150" unoptimized />
              </div>
            </div>
          </div>

          {/* Card 6: Lifestyle clips */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E5E5] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-row justify-between items-center pr-0 pb-0">
             <div className="flex flex-col justify-center h-full mb-12 max-w-[50%]">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-1">Lifestyle clips</h3>
              <p className="text-[15px] text-[#6E6E73] leading-snug">Relatable everyday content featuring your brand.</p>
            </div>
            <div className="relative w-[220px] h-[250px] mt-4 self-end">
               <div className="absolute right-[-10px] bottom-[-40px] w-[240px] h-[300px] rounded-[40px] overflow-hidden shadow-2xl border-[6px] border-[#1D1D1F] bg-black">
                <Image 
                  src="https://framerusercontent.com/images/Za9VvYca7njDvTZN8yGiNYrzM.gif" 
                  alt="Lifestyle" 
                  fill 
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanCreate;
