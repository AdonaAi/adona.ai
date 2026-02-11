import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Aleksandras Urbanavičius',
    role: 'Co-Founder',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/UXeVdoBzDwbXAlHHkls74MgE6Z0-24.png',
  },
  {
    name: 'Deividas Kovger',
    role: 'Co-Founder',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/M0yURnVTODSdCSJMA1dOItAl6fo-25.png',
  },
  {
    name: 'Karolis Vaiginis',
    role: 'Lead Designer',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/k8Z9YR5W8ar7eKs6C8ylcZ5jwFY-26.png',
  },
  {
    name: 'Arnas Puidokas',
    role: 'CTO',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/yY9pNxu0qpUr4niCLBCBcK6M0c-27.png',
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="w-full py-[120px] bg-white overflow-hidden">
      <div className="container mx-auto px-10 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left Column: Team Grid */}
          <div className="w-full lg:w-[45%] grid grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#F9FAFB] rounded-[24px] overflow-hidden border border-[#F0F0F0] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="p-6 pb-0 flex flex-col">
                  <span className="text-[14px] font-semibold text-[#1A1A1A] leading-tight mb-1">
                    {member.name}
                  </span>
                  <span className="text-[12px] font-medium text-[#666666] mb-4">
                    {member.role}
                  </span>
                </div>
                <div className="relative aspect-[4/5] w-full px-4 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="object-cover object-top rounded-t-[16px] w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A1A] leading-[1.2] mb-8 tracking-tight">
              Hi! We&apos;re the team behind adona.ai.
            </h2>
            
            <div className="space-y-6 text-[18px] text-[#666666] leading-[1.6]">
              <p>Some of us started building online stores in high school.</p>
              
              <p>Others were launching software before we turned 21.</p>
              
              <p>
                We&apos;ve always liked building things that work and grow. That&apos;s how we ended up working together.
              </p>
              
              <p>
                Over the past few years, we helped grow brands like Sintra, Pulsetto, Burga, and Moerie. We were inside those companies, doing growth, writing copy, setting up systems.
              </p>
              
              <p>Now, we&apos;re building the tool we always wished we had.</p>
              
              <p className="font-medium text-[#1A1A1A]">
                adona.ai is everything we learned — turned into a platform that helps founders move faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;