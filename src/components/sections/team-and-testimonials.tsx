import React from 'react';
import Image from 'next/image';
import { BadgeCheck, Plus } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Aleksandras Urbanavičius',
    role: 'Co-Founder',
  },
  {
    name: 'Deividas Kovger',
    role: 'Co-Founder',
  },
  {
    name: 'Karolis Vaiginis',
    role: 'Lead Designer',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/pb6g8Sx6fWVKqgz8ob7zqFXZWWc-29.png',
  },
  {
    name: 'Arnas Puidokas',
    role: 'CTO',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VaGhYIlCjricGWnHisivyig9Ok-30.png',
  },
];

const TESTIMONIALS = [
  {
    name: 'Anna Clark',
    content: 'I run everything solo and adona.ai basically saved my life lol. Content posts, ads, everything ready without babysitting. 10/10.',
    avatar: 'https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg?width=400&height=400',
    media: 'https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png?width=400&height=400',
    location: 'CA - Mar 6, 2025',
  },
  {
    name: 'Luker Lefter',
    verified: true,
    content: 'Getting started was easy, way easier than I thought. Took about 10 min and my brand content was ready to go.',
    avatar: 'https://framerusercontent.com/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png?width=400&height=400',
    media: 'https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png?width=400&height=400',
    location: 'US - Mar 4, 2025',
  },
  {
    author: 'Jonas Bertasius',
    content: 'Posting is simple now Social media posts used to take me HOURS. Now it’s like 10 minutes a day. crazy.',
    avatar: 'https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg?width=400&height=400',
    location: 'LT - Mar 11, 2025',
  },
  {
    name: 'Rachel Green',
    verified: true,
    content: 'I\'m not super techy and this was simple to set up. Content actually matched our style. Would recommend!',
    avatar: 'https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png?width=400&height=400',
    location: 'UK - Mar 5, 2025',
  },
];

export default function TeamAndTestimonials() {
  return (
    <div className="flex flex-col items-center w-full bg-white font-sans overflow-hidden">
      {/* Team Section */}
      <section className="section-padding container max-w-[1200px] py-20 px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 flex items-center justify-between shadow-ambient hover:shadow-md transition-shadow group"
              >
                <div className="flex flex-col">
                  <span className="text-[18px] font-bold text-[#1A1A1A]">{member.name}</span>
                  <span className="text-[14px] font-medium text-[#666666]">{member.role}</span>
                </div>
                {member.image && (
                  <div className="w-16 h-16 rounded-full overflow-hidden relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex-1 bg-white border border-[#E5E7EB] rounded-[32px] p-8 sm:p-12 shadow-ambient">
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1A1A1A] leading-[1.2] mb-8">
              Hi! We're the team behind adona.ai.
            </h2>
            <div className="space-y-6">
              <p className="text-[18px] leading-[1.6] text-[#666666]">
                Some of us started building online stores in high school.
              </p>
              <p className="text-[18px] leading-[1.6] text-[#666666]">
                Others were launching software before we turned 21.
              </p>
              <p className="text-[18px] leading-[1.6] text-[#666666]">
                We've always liked building things that work and grow. That's how we ended up working together.
              </p>
              <p className="text-[18px] leading-[1.6] text-[#666666]">
                Over the past few years, we helped grow brands like Sintra, Pulsetto, Burga, and Moerie. We were inside those companies, doing growth, writing copy, setting up systems.
              </p>
              <p className="text-[18px] leading-[1.6] text-[#666666]">
                Now, we're building the tool we always wished we had.
              </p>
              <p className="text-[18px] leading-[1.6] text-[#666666]">
                adona.ai is everything we learned - turned into a platform that helps founders move faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding container max-w-[1240px] pt-12 pb-32 px-6">
        <h2 className="text-[32px] sm:text-[48px] font-bold text-center text-[#1A1A1A] mb-16">
          Used by founders who move fast
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-[#E5E7EB] rounded-[32px] p-8 shadow-ambient">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[18px] font-bold text-[#1A1A1A]">Anna Clark</span>
              </div>
              <p className="text-[16px] leading-[1.6] text-[#666666] mb-6">
                I run everything solo and adona.ai basically saved my life lol. Content posts, ads, everything ready without babysitting. 10/10.
              </p>
              <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden">
                <Image
                  src="https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png?width=400&height=400"
                  alt="Testimonial media"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-[12px] text-[#999999] uppercase tracking-wider">
                CA - Mar 6, 2025
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-[#E5E7EB] rounded-[32px] p-8 shadow-ambient">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                  <Image src="https://framerusercontent.com/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png?width=400&height=400" alt="Avatar" fill />
                </div>
                <span className="text-[18px] font-bold text-[#1A1A1A]">Luker Lefter</span>
                <BadgeCheck className="w-5 h-5 text-[#3b82f6] fill-[#3b82f6] text-white" />
              </div>
              <p className="text-[16px] leading-[1.6] text-[#666666] mb-6">
                Getting started was easy, way easier than I thought. Took about 10 min and my brand content was ready to go.
              </p>
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
                <Image
                  src="https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png?width=400&height=400"
                  alt="Testimonial media"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-[12px] text-[#999999] uppercase tracking-wider">
                US - Mar 4, 2025
              </div>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-[32px] p-8 shadow-ambient">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                  <Image src="https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg?width=400&height=400" alt="Avatar" fill />
                </div>
                <span className="text-[18px] font-bold text-[#1A1A1A]">Jonas Bertasius</span>
              </div>
              <p className="text-[16px] leading-[1.6] text-[#666666]">
                Posting is simple now Social media posts used to take me HOURS. Now it's like 10 minutes a day. crazy.
              </p>
              <div className="mt-4 text-[12px] text-[#999999] uppercase tracking-wider">
                LT - Mar 11, 2025
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-[#E5E7EB] rounded-[32px] p-8 shadow-ambient">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[18px] font-bold text-[#1A1A1A]">Rachel Green</span>
                <BadgeCheck className="w-5 h-5 text-[#3b82f6] fill-[#3b82f6] text-white" />
              </div>
              <p className="text-[16px] leading-[1.6] text-[#666666]">
                I'm not super techy and this was simple to set up. Content actually matched our style. Would recommend!
              </p>
              <div className="mt-4 text-[12px] text-[#999999] uppercase tracking-wider">
                UK - Mar 5, 2025
              </div>
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-2 px-4 py-2 bg-white border border-[#f1f5f9] rounded-2xl sm:rounded-full shadow-soft">
            <div className="flex -space-x-2.5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden flex-shrink-0" style={{ zIndex: 4 - i }}>
                  <Image
                    src={`https://framerusercontent.com/images/${i === 1 ? 'hF944J2HOWaKmZLpMGbhJD8cIw' : i === 2 ? 'CDSoRipaV9Hpq0zdDkZvdZ5lQe8' : i === 3 ? 'VKINDhjTjVV27N30RcsciHrTtzw' : 'dc8xaTir25CSGKnsIOaEcqnyqI'}.png?width=100`}
                    alt="Reviewer"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-[13px] md:text-sm font-sans text-black whitespace-nowrap">
              <strong className="font-bold">3742+</strong>
              <span className="text-[#636363]">marketers love Adona Ai</span>
              <span className="text-[#636363] mx-2">|</span>
              <a href="#reviews" className="text-[#0077b6] font-medium hover:underline">View More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}