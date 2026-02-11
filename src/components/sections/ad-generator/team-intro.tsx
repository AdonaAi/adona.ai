import React from 'react';
import Image from 'next/image';

/**
 * TeamIntro Component
 * Clones the "Hi! We're the team behind adona.ai" section.
 * Features a grid of team member headshots and a professional bio text block.
 * Adheres to the light theme and design system tokens.
 */

const teamMembers = [
  {
    name: "Aleksandras Urbanavičius",
    role: "Co-Founder",
    image: "https://framerusercontent.com/images/hF944J2HOWaKmZLpMGbhJD8cIw.jpeg?width=400&height=400",
  },
  {
    name: "Deividas Kovger",
    role: "Co-Founder",
    image: "https://framerusercontent.com/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8.png?width=400&height=400",
  },
  {
    name: "Karolis Vaiginis",
    role: "Lead Designer",
    image: "https://framerusercontent.com/images/VKINDhjTjVV27N30RcsciHrTtzw.png?width=400&height=400",
  },
  {
    name: "Arnas Puidokas",
    role: "CTO",
    image: "https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png?width=400&height=400",
  },
];

const TeamIntro: React.FC = () => {
  return (
    <section className="section-spacing bg-[#FCFCFC] py-[120px]">
      <div className="container px-6">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-8">
          
          {/* Team Member Grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full lg:max-w-[420px]">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[32px] border border-[#F1F1F1] p-0 flex items-center justify-between overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] h-[96px]"
              >
                <div className="px-8 flex flex-col justify-center">
                  <h3 className="text-[18px] font-bold text-[#1A1A1A] leading-tight m-0">
                    {member.name}
                  </h3>
                  <p className="text-[14px] text-[#666666] mt-1 m-0">
                    {member.role}
                  </p>
                </div>
                <div className="relative w-[110px] h-full flex items-end justify-center bg-[#F3F4F6] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={110}
                    height={110}
                    className="object-cover absolute bottom-0 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bio Text Block */}
          <div className="flex-1 bg-white rounded-[48px] border border-[#F1F1F1] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-center">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A1A] mb-8 leading-[1.2]">
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
              <p className="text-[18px] leading-[1.6] text-[#1A1A1A] font-medium italic">
                adona.ai is everything we learned - turned into a platform that helps founders move faster.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamIntro;