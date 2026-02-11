import React from 'react';
import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Aleksandras Urbanavičius',
      role: 'Co-Founder',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/HAFgG65Xh515eO6eEtCCRkOo2AM-17.png'
    },
    {
      name: 'Deividas Kovger',
      role: 'Co-Founder',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/S1qpQvKTIyupla3TrirFPI4Ybs-18.png'
    },
    {
      name: 'Karolis Vaiginis',
      role: 'Lead Designer',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/ds0gjjp6jiKAirdsuFd6ufdiU-19.png'
    },
    {
      name: 'Arnas Puidokas',
      role: 'CTO',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/zDOwxSWhNTga6kROlzhHlvDfHY-20.png'
    }
  ];

  return (
    <section className="section-padding bg-white" id="team">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Founders Grid */}
          <div className="lg:w-1/3 grid grid-cols-1 gap-4">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between bg-white border border-[#f1f5f9] rounded-[24px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:translate-y-[-2px] transition-transform duration-300"
              >
                <div className="flex flex-col">
                  <h4 className="text-[16px] font-bold text-black font-sans leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-[14px] text-[#666666] font-sans mt-1">
                    {member.role}
                  </p>
                </div>
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#f1f5f9]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bio Description Box */}
          <div className="lg:w-2/3 bg-white border border-[#f1f5f9] rounded-[32px] p-8 lg:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-center">
            <h2 className="text-[32px] lg:text-[40px] font-bold text-black mb-8 leading-tight tracking-tight">
              Hi! We&apos;re the team behind adona.ai.
            </h2>
            
            <div className="space-y-6 text-[#666666] text-[18px] lg:text-[20px] leading-[1.6] font-sans">
              <p>
                Some of us started building online stores in high school.
              </p>
              <p>
                Others were launching software before we turned 21.
              </p>
              <p>
                We&apos;ve always liked building things that work and grow. That&apos;s how we ended up working together.
              </p>
              <p>
                Over the past few years, we helped grow brands like Sintra, Pulsetto, Burga, and Moerie. We were inside those companies, doing growth, writing copy, setting up systems.
              </p>
              <p>
                Now, we&apos;re building the tool we always wished we had.
              </p>
              <p className="font-medium text-black">
                adona.ai is everything we learned – turned into a platform that helps founders move faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;