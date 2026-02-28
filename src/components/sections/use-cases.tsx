import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

/**
 * UseCaseCard component representing individual use-cases
 */
interface UseCaseCardProps {
  title: string;
  description: string;
  videoSrc?: string;
  children?: React.ReactNode;
  className?: string;
  videoClassName?: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  description,
  videoSrc,
  children,
  className = "",
  videoClassName = ""
}) => {
  return (
    <div className={`card-premium relative overflow-hidden flex flex-col items-center text-center !p-8 border border-[#e5e7eb] rounded-[24px] bg-white shadow-ambient ${className}`}>
      <h3 className="h3 mb-2 text-[#1a1a1a]">{title}</h3>
      <p className="text-[18px] leading-[1.4] text-[#666666] mb-8 max-w-[320px]">
        {description}
      </p>
      <div className={`relative w-full rounded-[24px] overflow-hidden ${videoClassName}`}>
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[24px]"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
};

/**
 * 3D Carousel Component
 */
const Carousel3D: React.FC<{ videos: string[] }> = ({ videos }) => {
  const [rotation, setRotation] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const animate = () => {
      setRotation((prev) => (prev + 0.2) % 360);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const angleStep = 360 / videos.length;

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-visible">
      <div
        ref={carouselRef}
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: `perspective(1200px) rotateY(${rotation}deg)`,
          willChange: 'transform',
        }}
      >
        {videos.map((videoSrc, index) => {
          const angle = angleStep * index;
          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotateY(${angle}deg) translateZ(400px)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                style={{
                  transform: 'rotateY(-90deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[280px] h-[400px] md:w-[320px] md:h-[480px] object-cover rounded-[16px] shadow-2xl"
                  style={{
                    cursor: 'auto',
                    display: 'block',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * TabGroup component for content type selection
 */
const TabGroup: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Videos');

  const tabs = [
    { name: 'Videos', hasGradient: true },
    { name: 'Ads', hasGradient: false },
    { name: 'Socials', hasGradient: false },
    { name: 'Emails', hasGradient: false }
  ];

  const videosByTab: Record<string, string[]> = {
    Videos: [
      'https://framerusercontent.com/assets/atJu9yiIxWsCyaNh4njvIoNJ58A.mp4',
      'https://framerusercontent.com/assets/oJ4quBVvE16v32CEg8huqY7sIQ.mp4',
      'https://framerusercontent.com/assets/Ns2GbroiHxvq7u0kyGBzckqCWGU.mp4',
      'https://framerusercontent.com/assets/XfoGiuFqT2FPLtYXPTJQ4Gca6k.mp4',
      'https://framerusercontent.com/assets/2Sv2SsEaYbQTzuNiMP2j69zR0w.mp4',
      'https://framerusercontent.com/assets/XLsVUWixlZwNcQ9q7AmUbleaOpI.mp4',
      'https://framerusercontent.com/assets/0yco9aVMxEaMw6TCtvnHdWlY.mp4',
      'https://framerusercontent.com/assets/FTi6NNbNzmL5CwmMmlResvlxc.mp4',
      'https://framerusercontent.com/assets/SPeCEAHu2em9JMalRJd7unubVw.mp4',
      'https://framerusercontent.com/assets/6ieB5PaFzvb7bkjnAhMqX9FGDs.mp4',
      'https://framerusercontent.com/assets/UZE9LN0jsduGhjtigH2nfAvVRBg.mp4',
      'https://framerusercontent.com/assets/CwA8wnhsDj6XgFNkqjfVZ8qa8ew.mp4',
    ],
    Ads: [
      'https://framerusercontent.com/assets/atJu9yiIxWsCyaNh4njvIoNJ58A.mp4',
      'https://framerusercontent.com/assets/oJ4quBVvE16v32CEg8huqY7sIQ.mp4',
      'https://framerusercontent.com/assets/Ns2GbroiHxvq7u0kyGBzckqCWGU.mp4',
      'https://framerusercontent.com/assets/XfoGiuFqT2FPLtYXPTJQ4Gca6k.mp4',
      'https://framerusercontent.com/assets/2Sv2SsEaYbQTzuNiMP2j69zR0w.mp4',
      'https://framerusercontent.com/assets/XLsVUWixlZwNcQ9q7AmUbleaOpI.mp4',
      'https://framerusercontent.com/assets/0yco9aVMxEaMw6TCtvnHdWlY.mp4',
      'https://framerusercontent.com/assets/FTi6NNbNzmL5CwmMmlResvlxc.mp4',
      'https://framerusercontent.com/assets/SPeCEAHu2em9JMalRJd7unubVw.mp4',
      'https://framerusercontent.com/assets/6ieB5PaFzvb7bkjnAhMqX9FGDs.mp4',
      'https://framerusercontent.com/assets/UZE9LN0jsduGhjtigH2nfAvVRBg.mp4',
      'https://framerusercontent.com/assets/CwA8wnhsDj6XgFNkqjfVZ8qa8ew.mp4',
    ],
    Socials: [
      'https://framerusercontent.com/assets/atJu9yiIxWsCyaNh4njvIoNJ58A.mp4',
      'https://framerusercontent.com/assets/oJ4quBVvE16v32CEg8huqY7sIQ.mp4',
      'https://framerusercontent.com/assets/Ns2GbroiHxvq7u0kyGBzckqCWGU.mp4',
      'https://framerusercontent.com/assets/XfoGiuFqT2FPLtYXPTJQ4Gca6k.mp4',
      'https://framerusercontent.com/assets/2Sv2SsEaYbQTzuNiMP2j69zR0w.mp4',
      'https://framerusercontent.com/assets/XLsVUWixlZwNcQ9q7AmUbleaOpI.mp4',
      'https://framerusercontent.com/assets/0yco9aVMxEaMw6TCtvnHdWlY.mp4',
      'https://framerusercontent.com/assets/FTi6NNbNzmL5CwmMmlResvlxc.mp4',
      'https://framerusercontent.com/assets/SPeCEAHu2em9JMalRJd7unubVw.mp4',
      'https://framerusercontent.com/assets/6ieB5PaFzvb7bkjnAhMqX9FGDs.mp4',
      'https://framerusercontent.com/assets/UZE9LN0jsduGhjtigH2nfAvVRBg.mp4',
      'https://framerusercontent.com/assets/CwA8wnhsDj6XgFNkqjfVZ8qa8ew.mp4',
    ],
    Emails: [
      'https://framerusercontent.com/assets/atJu9yiIxWsCyaNh4njvIoNJ58A.mp4',
      'https://framerusercontent.com/assets/oJ4quBVvE16v32CEg8huqY7sIQ.mp4',
      'https://framerusercontent.com/assets/Ns2GbroiHxvq7u0kyGBzckqCWGU.mp4',
      'https://framerusercontent.com/assets/XfoGiuFqT2FPLtYXPTJQ4Gca6k.mp4',
      'https://framerusercontent.com/assets/2Sv2SsEaYbQTzuNiMP2j69zR0w.mp4',
      'https://framerusercontent.com/assets/XLsVUWixlZwNcQ9q7AmUbleaOpI.mp4',
      'https://framerusercontent.com/assets/0yco9aVMxEaMw6TCtvnHdWlY.mp4',
      'https://framerusercontent.com/assets/FTi6NNbNzmL5CwmMmlResvlxc.mp4',
      'https://framerusercontent.com/assets/SPeCEAHu2em9JMalRJd7unubVw.mp4',
      'https://framerusercontent.com/assets/6ieB5PaFzvb7bkjnAhMqX9FGDs.mp4',
      'https://framerusercontent.com/assets/UZE9LN0jsduGhjtigH2nfAvVRBg.mp4',
      'https://framerusercontent.com/assets/CwA8wnhsDj6XgFNkqjfVZ8qa8ew.mp4',
    ],
  };

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex gap-4 justify-center items-center flex-wrap mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className="flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
            tabIndex={0}
          >
            <div className="px-6 py-3">
              <p className={`text-[16px] font-medium transition-colors ${activeTab === tab.name ? 'text-[#1a1a1a]' : 'text-[#666666]'
                }`}>
                {tab.name}
              </p>
            </div>
            <div
              className={`h-[3px] w-full rounded-full transition-all ${activeTab === tab.name ? '' : 'bg-[#dbdbdb]'
                }`}
              style={
                activeTab === tab.name
                  ? {
                    background:
                      'radial-gradient(50% 50% at 50% 50%, rgb(62, 134, 198) 0%, rgb(166, 102, 170) 34.49%, rgb(236, 68, 146) 57.17%, rgb(238, 68, 84) 80.66%, rgb(240, 84, 39) 100%)',
                    opacity: 1,
                  }
                  : { opacity: 1 }
              }
            />
          </button>
        ))}
      </div>

      {/* 3D Carousel */}
      <Carousel3D videos={videosByTab[activeTab]} />
    </div>
  );
};

export default function UseCasesSection() {
  return (
    <section className="section-padding bg-white" id="use-cases">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="h2 text-[#1a1a1a] mb-4">What You Can Create</h2>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Unboxings */}
          <UseCaseCard
            title="Unboxings"
            description="Authentic product reveal moments that drive trust."
            className="h-full"
          >
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-[4/5] rounded-[16px] overflow-hidden">
                <video src="https://framerusercontent.com/assets/PrQYypIOc9BMvyvYIt9MrkyMKKc.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/5] rounded-[16px] overflow-hidden">
                <video src="https://framerusercontent.com/assets/6hKDSAEtUDFybHd08ba6SUx0w.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/5] rounded-[16px] overflow-hidden">
                <video src="https://framerusercontent.com/assets/p0mBfAnGYPA6Q1dcrY8pF2Q7aPk.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
            </div>
          </UseCaseCard>

          {/* Card 2: Testimonials */}
          <UseCaseCard
            title="Testimonials"
            description="Videos that look like real customer reviews & recommendations."
            className="h-full"
          >
            <div className="relative h-[240px] w-full flex items-center justify-center">
              {/* Floating star assets logic */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="grid grid-cols-3 gap-8 opacity-20 transform scale-150">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <svg key={i} width="40" height="40" viewBox="0 0 24 24" fill="#a855f7" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="z-10 bg-[#f9fafb] p-6 rounded-2xl border border-dashed border-[#e5e7eb]">
                <p className="italic text-[#1a1a1a] font-medium text-lg leading-snug">
                  "I was skeptical output would be this good. It matches my brand perfectly."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-candy" />
                  <span className="text-sm font-semibold text-[#1a1a1a]">Verified Founder</span>
                </div>
              </div>
            </div>
          </UseCaseCard>

          {/* Card 3: Product Demos */}
          <UseCaseCard
            title="Product demos"
            description="Show your product in action, simplified for attention."
            className="h-full"
          >
            <div className="relative aspect-video w-full rounded-2xl bg-[#f9fafb] flex items-center justify-center p-8">
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src={`https://framerusercontent.com/images/dc8xaTir25CSGKnsIOaEcqnyqI.png?width=400&height=400`}
                      alt="Product icon"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </UseCaseCard>

          {/* Card 4: Lifestyle clips */}
          <UseCaseCard
            title="Lifestyle clips"
            description="Relatable, everyday moments featuring your product."
            className="h-full"
            videoSrc="https://framerusercontent.com/assets/GXAz4JpM1OQqXk3JXsIyIBHQOCw.mp4"
            videoClassName="aspect-[3/4] max-w-[280px] mx-auto shadow-2xl border-4 border-[#1a1a1a] rounded-[32px]"
          />
        </div>

        {/* The All-in-One Marketing Tool Section */}
        <div className="mt-32 text-center">
          <h2 className="text-[48px] md:text-[56px] font-bold text-[#00134d] mb-6 leading-tight">
            The All-in-One Marketing Tool
          </h2>
          <p className="text-[20px] md:text-[24px] text-[#4a90e2] mb-16 max-w-[800px] mx-auto leading-relaxed">
            Skip the tools, templates, and tabs. This is your AI for marketing, built to scale. From ads, emails and social posts. Core marketing areas? Covered.
          </p>

          {/* Tab Group with 3D Carousel */}
          <TabGroup />
        </div>
      </div>
    </section>
  );
}