import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

const teamMembers = [
  {
    name: 'Aleksandras Urbanavičius',
    role: 'Co-Founder',
    image: 'https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg?width=400&height=400',
  },
  {
    name: 'Deividas Kovger',
    role: 'Co-Founder',
    image: 'https://framerusercontent.com/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png?width=400&height=400',
  },
  {
    name: 'Karolis Vaiginis',
    role: 'Lead Designer',
    image: 'https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png?width=400&height=400',
  },
  {
    name: 'Arnas Puidokas',
    role: 'CTO',
    image: 'https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png?width=400&height=400',
  },
];

const testimonials = [
  {
    author: 'Anna Clark',
    content: 'I run everything solo and adona.ai basically saved my life lol. Content posts, ads, everything ready without babysitting. 10/10.',
    avatar: 'https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg?width=400&height=400',
    screenshot: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/tLpgMmR6rQVVlaJTlcJp52rNyN8-30.png',
    location: 'CA - Mar 6, 2025'
  },
  {
    author: 'Luker Lefter',
    verified: true,
    content: 'Getting started was easy, way easier than I thought. Took about 10 min and my brand content was ready to go.',
    avatar: 'https://framerusercontent.com/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png?width=400&height=400',
    screenshot: 'https://framerusercontent.com/images/Fz6qv5QZmds6Qh39sMvSXt9Ol8.png?width=290&height=460',
    location: 'US - Mar 4, 2025',
    subTestimonial: {
      author: 'Jonas Bertasius',
      avatar: 'https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png?width=400&height=400',
      content: 'Posting is simple now Social media posts used to take me HOURS. Now it\'s like 10 minutes a day. crazy.',
      location: 'LT - Mar 11, 2025'
    }
  },
  {
    author: 'Rachel Green',
    verified: true,
    content: 'I\'m not super techy and this was simple to set up. Content actually matched our style. Would recommend!',
    avatar: 'https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png?width=400&height=400',
    location: 'UK - Mar 5, 2025'
  },
];

const TeamTestimonials = () => {
  return (
    <section className="bg-white py-[120px] overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Team Introduction Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch mb-[160px]">
          {/* Vertical Member List */}
          <div className="flex flex-col gap-3 w-full lg:w-[420px]">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#f2f2f2] rounded-[24px] p-4 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              >
                <div className="flex flex-col">
                  <span className="text-[17px] font-semibold text-[#1a1a1a] tracking-tight">{member.name}</span>
                  <span className="text-[14px] text-[#666666]">{member.role}</span>
                </div>
                <div className="w-[64px] h-[64px] rounded-full overflow-hidden border border-[#f2f2f2]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Main Team Card */}
          <div className="flex-1 bg-white border border-[#f2f2f2] rounded-[32px] p-8 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            <h3 className="text-[32px] font-bold text-[#1a1a1a] mb-8">Hi! We&apos;re the team behind adona.ai.</h3>
            <div className="space-y-6 text-[18px] leading-[1.6] text-[#666666]">
              <p>Some of us started building online stores in high school.</p>
              <p>Others were launching software before we turned 21.</p>
              <p>We&apos;ve always liked building things that work and grow. That&apos;s how we ended up working together.</p>
              <p>Over the past few years, we helped grow brands like Sintra, Pulsetto, Burga, and Moerie. We were inside those companies, doing growth, writing copy, setting up systems.</p>
              <p>Now, we&apos;re building the tool we always wished we had.</p>
              <p>adona.ai is everything we learned - turned into a platform that helps founders move faster.</p>
            </div>
          </div>
        </div>

        {/* Foundered Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-[#1a1a1a] tracking-tight mb-12">Used by founders who move fast</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <div className="bg-white border border-[#f2f2f2] rounded-[28px] p-6 text-left shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                      <Image src={t.avatar} width={40} height={40} alt={t.author} className="object-cover" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-[#1a1a1a] text-[15px]">{t.author}</span>
                      {t.verified && (
                        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] text-[#2F80ED]" fill="currentColor">
                          <path d="M22.5 12.5c0-1.58-.88-2.95-2.18-3.66.54-1.27.4-2.73-.39-3.85-1.12-1.12-2.58-1.26-3.85-.39-1.01-1.3-2.38-2.18-3.66-2.18-1.58 0-2.95.88-3.66 2.18-1.27-.54-2.73-.4-3.85.39-1.12 1.12-1.26 2.58-.39 3.85-1.3 1.01-2.18 2.38-2.18 3.66 0 1.58.88 2.95 2.18 3.66-.54 1.27-.4 2.73.39 3.85 1.12 1.12 2.58 1.26 3.85.39 1.01 1.3 2.38 2.18 3.66 2.18 1.58 0 2.95-.88 3.66-2.18 1.27.54 2.73.4 3.85-.39 1.12-1.12 1.26-2.58.39-3.85 1.3-1.01 2.18-2.38 2.18-3.66zM10.4 17l-4.7-4.7 1.4-1.4 3.3 3.3 6.7-6.7 1.4 1.4L10.4 17z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <p className="text-[#666666] text-[15px] leading-[1.6] mb-6 whitespace-pre-wrap">{t.content}</p>

                  {t.screenshot && (
                    <div className="w-full relative mt-auto rounded-xl overflow-hidden mb-6 border border-[#f2f2f2]">
                      <Image
                        src={t.screenshot}
                        alt="Testimonial proof"
                        width={400}
                        height={500}
                        className="w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="mt-auto pt-4 flex justify-between items-center text-[12px] text-[#999999]">
                    <span>{t.location}</span>
                  </div>
                </div>

                {/* Optional nested mini-testimonial */}
                {t.subTestimonial && (
                  <div className="bg-white border border-[#f2f2f2] rounded-[24px] p-5 text-left shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
                        <Image src={t.subTestimonial.avatar} width={32} height={32} alt={t.subTestimonial.author} className="object-cover" />
                      </div>
                      <span className="font-semibold text-[#1a1a1a] text-[14px]">{t.subTestimonial.author}</span>
                    </div>
                    <p className="text-[#666666] text-[14px] leading-[1.5] mb-3">{t.subTestimonial.content}</p>
                    <span className="text-[11px] text-[#999999]">{t.subTestimonial.location}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-center gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-2 px-4 py-2 bg-white border border-[#f1f5f9] rounded-2xl sm:rounded-full shadow-soft">
              <div className="flex -space-x-2.5">
                {[
                  "https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg",
                  "https://framerusercontent.com/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png",
                  "https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png",
                  "https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png"
                ].map((src, index) => (
                  <div key={index} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden flex-shrink-0" style={{ zIndex: 4 - index }}>
                    <Image
                      src={src}
                      alt={`Customer ${index + 1}`}
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
        </div>
      </div>
    </section>
  );
};

export default TeamTestimonials;