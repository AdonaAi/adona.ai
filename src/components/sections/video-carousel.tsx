"use client";

import React, { useEffect, useRef } from "react";

const videoAssets = [
  "https://framerusercontent.com/assets/iVY5Ulaz3S8f74iF1MhXGetLWY.mp4",
  "https://framerusercontent.com/assets/RbOaUGzKRgi3iuNsWtswPYfn0w.mp4",
  "https://framerusercontent.com/assets/G6VG0TPT6Jfj6tYOsoEkuAuU3rc.mp4",
  "https://framerusercontent.com/assets/GkdvDR40PvvAmRCmykZWcyNOL0.mp4",
  "https://framerusercontent.com/assets/yvg2anHA4GHKSoKgmbHkiYFVeQ.mp4",
  "https://framerusercontent.com/assets/gxcrFYd0cHYN6yzdCzHXOPL6cOM.mp4",
  "https://framerusercontent.com/assets/eiNCsuySqTzbicT7BedssUJ09w.mp4",
  "https://framerusercontent.com/assets/kx2Bao1VFQ9o3Vh5JbcQ7epO6Y.mp4",
  "https://framerusercontent.com/assets/CGTP7I4leh418qxnnq6AFOkIe0.mp4",
  "https://framerusercontent.com/assets/57w3Ye7cNALnnxXSMAHNtxLBboA.mp4",
  "https://framerusercontent.com/assets/pomRXZysMGEg6vf31dfpK4mFmg.mp4",
  "https://framerusercontent.com/assets/IbGFLO189I8kl2xPi0Z2yP72odA.mp4",
  "https://framerusercontent.com/assets/PkbM342VPz4Xg7BVMoP1zih9BpI.mp4",
  "https://framerusercontent.com/assets/freOwUGH1OC0xDRoWF9VVQCUEc.mp4",
];

const VideoCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Group videos into arms (columns) as seen in the source
  const armsData = [
    { videos: [videoAssets[0], videoAssets[1]], speed: 25 },
    { videos: [videoAssets[2], videoAssets[3]], speed: 35 },
    { videos: [videoAssets[4], videoAssets[5]], speed: 20 },
    { videos: [videoAssets[6], videoAssets[7]], speed: 40 },
    { videos: [videoAssets[8], videoAssets[9]], speed: 15 },
    { videos: [videoAssets[10], videoAssets[11]], speed: 30 },
    { videos: [videoAssets[12], videoAssets[13]], speed: 22 },
  ];

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-white py-10 select-none">
      {/* Container with a slight perspective/rotation feel if desired, 
          though the original uses a straight vertical scroll arrangement */}
      <div 
        ref={containerRef}
        className="flex items-start justify-center gap-4 h-full w-full max-w-[1400px] mx-auto opacity-90"
      >
        {armsData.map((arm, index) => (
          <VideoArm key={index} videos={arm.videos} speed={arm.speed} delay={index * 0.5} />
        ))}
      </div>

      {/* Glossy Overlays for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white z-10" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-transparent to-white z-10" />
    </section>
  );
};

const VideoArm = ({ videos, speed, delay }: { videos: string[]; speed: number; delay: number }) => {
  return (
    <div 
      className="flex flex-col gap-4 flex-none"
      style={{ 
        width: "180px",
        animation: `infinite-scroll-vertical ${speed}s linear infinite`,
        animationDelay: `-${delay}s`,
      }}
    >
      {/* Triple the items to ensure seamless loop */}
      {[...videos, ...videos, ...videos].map((src, i) => (
        <div 
          key={i} 
          className="relative aspect-[9/16] w-full rounded-[24px] overflow-hidden bg-muted border border-border/50 shadow-sm"
        >
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <style jsx global>{`
        @keyframes infinite-scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default VideoCarousel;