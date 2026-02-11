import React from 'react';
import Image from 'next/image';

/**
 * Assets mapping based on the provided section-specific assets:
 * https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/ds0gjjp6jiKAirdsuFd6ufdiU-19.png -> Instagram (likely)
 * https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/zDOwxSWhNTga6kROlzhHlvDfHY-20.png -> TikTok / Meta (likely)
 * https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/vAmDKxAewlD2VfNUg3sqeOHHw-21.png -> Google Ads (likely)
 * https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/UoQeU7lV0WfE98U8Ynxnviyi2A-22.png -> Email/Other (likely)
 */

const integrations = [
  {
    name: 'Instagram',
    url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/ds0gjjp6jiKAirdsuFd6ufdiU-19.png',
  },
  {
    name: 'TikTok',
    url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/zDOwxSWhNTga6kROlzhHlvDfHY-20.png',
  },
  {
    name: 'Google Ads',
    url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/vAmDKxAewlD2VfNUg3sqeOHHw-21.png',
  },
  {
    name: 'Facebook',
    url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/UoQeU7lV0WfE98U8Ynxnviyi2A-22.png',
  },
];

// Double the list for seamless infinite scroll
const scrollingIntegrations = [...integrations, ...integrations, ...integrations, ...integrations];

export default function IntegrationsSection() {
  return (
    <section className="bg-white section-padding overflow-hidden" id="integrations">
      <div className="container px-6 mx-auto text-center mb-16">
        <h2 className="h2 mb-4 text-[#1F1F1F]">
          Works seamlessly with your stack
        </h2>
        <p className="text-large text-[#666666] max-w-[600px] mx-auto">
          Post across every major platform, without switching tools.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Infinite Horizontal Scroll Container */}
        <div className="flex animate-infinite-scroll whitespace-nowrap gap-12 py-4">
          {scrollingIntegrations.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[80px] md:min-w-[120px]"
            >
              <div className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] bg-white rounded-[24px] border border-[#F0F0F0] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-center p-4 transition-transform hover:scale-105">
                <Image
                  src={item.url}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays to fade icons at edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}