import React from 'react';
import Image from 'next/image';

const NewsletterPreviews = () => {
  // Mapping based on the fan-carousel and masonry screenshots which showcase these various newsletter samples.
  const previewItems = [
    {
      id: 1,
      src: "https://framerusercontent.com/images/Fz6qv5QZmds6Qh39sMvSXt9Ol8.png?width=290&height=460",
      alt: "Newsletter Preview 1",
      rotate: -12,
      translateY: 40,
    },
    {
      id: 2,
      src: "https://framerusercontent.com/images/2lDhebMM5B7y6CvPiEmlG1f9M.png?width=326&height=475",
      alt: "Newsletter Preview 2",
      rotate: -6,
      translateY: 20,
    },
    {
      id: 3,
      src: "https://framerusercontent.com/images/aL9C5ltzqcFiPCa5DVrGq4FIs.png?width=327&height=476",
      alt: "Newsletter Preview 3",
      rotate: -3,
      translateY: 0,
    },
    {
      id: 4,
      src: "https://framerusercontent.com/images/eWIjVW4b0TLuuUHmH6rHF9reY.png?width=290&height=460",
      alt: "Newsletter Preview 4",
      rotate: 0,
      translateY: -10,
    },
    {
      id: 5,
      src: "https://framerusercontent.com/images/aWQFal57NcVXySF19O04KNVVBnY.png?width=327&height=476",
      alt: "Newsletter Preview 5",
      rotate: 3,
      translateY: 0,
    },
    {
      id: 6,
      src: "https://framerusercontent.com/images/VnWgMsLfKGF3zHUeddMZaVj49k.png?width=290&height=460",
      alt: "Newsletter Preview 6",
      rotate: 6,
      translateY: 20,
    },
    {
      id: 7,
      src: "https://framerusercontent.com/images/sMpDBAvPuoJepzHCTaELdXuxI.png?width=290&height=460",
      alt: "Newsletter Preview 7",
      rotate: 12,
      translateY: 40,
    },
  ];

  return (
    <section className="section-padding bg-[#FAFAFA] overflow-hidden">
      <div className="container px-6 mx-auto text-center mb-16">
        <h2 className="font-display font-bold text-[48px] leading-[1.15] tracking-[-0.02em] text-black mb-6">
          What your next newsletter could look like
        </h2>
        <div className="max-w-[680px] mx-auto">
          <p className="text-[18px] leading-[1.6] text-[#666666]">
            Promotional drops, welcome flows, product spotlights, editorial stories - whatever your brand needs, adona.ai designs and writes it in your exact tone.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden pb-20 pt-10">
        <div className="flex justify-center items-end gap-0 md:gap-[-40px] px-10">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="relative transition-transform duration-500 hover:z-10 hover:scale-105"
              style={{
                transform: `rotate(${item.rotate}deg) translateY(${item.translateY}px)`,
                minWidth: '220px',
                width: '16vw',
                maxWidth: '300px',
                marginLeft: '-40px',
                marginRight: '-40px',
              }}
            >
              <div className="bg-white rounded-[24px] shadow-soft overflow-hidden border border-[#E5E5E5] aspect-[2/3] w-full relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 150px, 300px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Blur Gradients if applicable to match the airy modern tech clean feel */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent-purple/5 blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent-coral/5 blur-[100px] pointer-events-none" />
    </section>
  );
};

export default NewsletterPreviews;