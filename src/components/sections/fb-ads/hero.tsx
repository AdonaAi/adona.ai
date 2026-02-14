import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  // Interaction state for parallax
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25; // Sensitivity
    const y = (e.clientY - top - height / 2) / 25;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // All cards with CONSISTENT sizing
  const cards = [
    { src: "https://framerusercontent.com/images/vSIWDCl1KFWkknKz9u5rSJCy9s.png", width: 200, height: 280, label: "Bag" },
    { src: "https://framerusercontent.com/images/OtG3QVd556Y1CNpNusIXZNhnmDQ.png", width: 200, height: 280, label: "Dark" },
    { src: "https://framerusercontent.com/images/QSukwCnm3IX5CelwsmlRSf6gos.gif", width: 200, height: 280, label: "Face" },
    { src: "https://framerusercontent.com/images/AYxUD1n5EQO20TcUSIP3tbEhcfQ.png", width: 200, height: 280, label: "Laptop" },
    { src: "https://framerusercontent.com/images/qbgOlVGaRxzJzyt9aocYHHa88.gif", width: 200, height: 280, label: "Mirror" },
    { src: "https://framerusercontent.com/images/5rgWxZbDWthM93WudATG5sNQk.jpg", width: 200, height: 280, label: "Jeans" },
    { src: "https://framerusercontent.com/images/lE5HMh2nitqhOXN3G633S2UfAFc.gif", width: 200, height: 280, label: "Purple" }
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col items-center pt-[120px] pb-[40px] md:pt-[140px] lg:pt-[160px] overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
      style={{ minHeight: '950px' }}
    >
      {/* Heading Section */}
      <div className="container relative z-10 mx-auto px-6 text-center max-w-[900px]">
        {/* Badge */}
        <div className="mb-6 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="rounded-full bg-gradient-to-r from-[#caf0f8] to-[#90e0ef] border border-[#48cae4] px-5 py-2 shadow-sm">
            <span className="text-[14px] font-bold text-[#03045e]">Facebook Ad Maker</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1D1D1F] animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Create Facebook ad creatives 75% faster
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-[650px] text-[17px] md:text-[19px] leading-[1.6] text-[#6E6E73] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          adona.ai&apos;s Facebook Ad Maker creates feed, story, and video ads based on your website. No design hassle, just great ads every time.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <a
            href="https://adona.ai/pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-[#1D1D1F] px-7 py-3.5 text-[16px] font-semibold text-white transition-all hover:bg-[#333] hover:shadow-lg"
          >
            <span>Try now</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* 3D Carousel Section */}
      <div className="relative mt-12 w-full h-[400px] md:h-[500px] overflow-hidden">
        <Carousel3D cards={cards} mousePos={mousePos} />
      </div>

      {/* Trust Badges Section */}
      <div className="relative z-20 mt-8 flex items-center justify-center w-full px-4">
        {/* Customer Rating Badge */}
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#E6E6E6] shadow-sm">
          <div className="flex -space-x-2.5">
            {[
              "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/hF944J2HOWaKmZLpMGbhJD8cIw-17.jpeg",
              "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/CDSoRipaV9Hpq0zdDkZvdZ5lQe8-18.png",
              "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/VKINDhjTjVV27N30RcsciHrTtzw-19.png",
              "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/dc8xaTir25CSGKnsIOaEcqnyqI-20.png"
            ].map((src, index) => (
              <div
                key={index}
                className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden flex-shrink-0"
                style={{ zIndex: 4 - index }}
              >
                <Image
                  src={src}
                  alt={`Customer ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-[13px] font-sans text-[#1D1D1F] whitespace-nowrap">
            <strong className="font-bold">3742+</strong>
            <span className="text-[#666666] mx-1">marketers love Adona Ai</span>
            <span className="text-[#666666] mx-2">|</span>
            <a href="#reviews" className="text-[#0077b6] font-medium hover:underline">View More</a>
          </div>
        </div>
      </div>

    </section>
  );
};

// Internal Carousel Component - Simple Horizontal Scroll with Depth
const Carousel3D = ({ cards, mousePos }: { cards: any[], mousePos: { x: number, y: number } }) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  // Auto-scroll animation
  React.useEffect(() => {
    let lastTime = performance.now();
    let frameId: number;

    const animate = () => {
      const now = performance.now();
      const delta = (now - lastTime) / 1000;

      if (delta > 0.1) {
        lastTime = now;
        frameId = requestAnimationFrame(animate);
        return;
      }
      lastTime = now;

      // Scroll 0.25 cards per second (slower = smoother)
      setScrollPosition(prev => prev + delta * 0.25);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Configuration - Clean spacing for 200px cards
  const CARD_SPACING = 240; // px between card centers (200px card + 40px gap)
  const VISIBLE_CARDS = 5; // Show fewer cards for cleaner look

  // Mouse interaction
  const mouseOffset = mousePos.x * 0.03;
  const totalScroll = scrollPosition + mouseOffset;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        perspective: '1200px',
        perspectiveOrigin: '50% 50%',
      }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
        }}
      >
        {cards.map((card, index) => {
          const count = cards.length;

          // Calculate position offset (infinite loop)
          let offset = (index - totalScroll) % count;
          if (offset < -count / 2) offset += count;
          if (offset > count / 2) offset -= count;

          // Only render visible range
          const halfVisible = VISIBLE_CARDS / 2;
          if (Math.abs(offset) > halfVisible) return null;

          // Position calculations
          const xPos = offset * CARD_SPACING;
          const zPos = -Math.abs(offset) * 40; // Slight depth effect
          const rotateY = offset * -5; // Subtle rotation toward center
          const scale = 1; // Consistent size for all cards
          const opacity = 1 - Math.abs(offset) * 0.08; // Slight fade toward edges

          // Z-index: center on top
          const zIndex = 100 - Math.abs(Math.round(offset * 10));

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                width: `${card.width}px`,
                height: `${card.height}px`,
                marginLeft: `-${card.width / 2}px`,
                marginTop: `-${card.height / 2}px`,
                transform: `translateX(${xPos}px) translateZ(${zPos}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex: zIndex,
                opacity: Math.max(0.4, opacity),
              }}
            >
              <div
                className="relative w-full h-full overflow-hidden rounded-[20px] shadow-xl bg-white transition-transform duration-200 hover:scale-105"
                style={{
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
                }}
              >
                <Image
                  src={card.src}
                  alt={card.label}
                  fill
                  className="object-cover"
                  sizes="200px"
                  priority={Math.abs(offset) < 2}
                  unoptimized
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
