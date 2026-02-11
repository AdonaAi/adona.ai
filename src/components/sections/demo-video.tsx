"use client";

import React, { useState, useRef } from "react";
import { Play } from "lucide-react";

/**
 * DemoVideo Component
 * Clones the large-scale video player section with a perspectively tilted container,
 * soft drop shadow, and play overlay as seen in the adona.ai design.
 */
export default function DemoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white pt-[60px] pb-[120px] md:pt-[80px] md:pb-[160px]">
      <div className="container mx-auto px-6 flex justify-center">
        {/* Perspective Wrapper */}
        <div 
          className="relative w-full max-w-[1000px] perspective-[1500px]"
          style={{ perspective: "1500px" }}
        >
          {/* Tilted Container */}
          <div 
            className="group relative overflow-hidden rounded-[24px] border border-[#ededed] bg-white transition-all duration-700 ease-out"
            style={{ 
              transform: "rotateX(15deg)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08), 0 10px 20px rgba(0, 0, 0, 0.04)",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Video Element */}
            <div className="aspect-[16/10] bg-[#f7f7f7] relative w-full h-full">
              <video
                ref={videoRef}
                src="https://framerusercontent.com/assets/u58pzFhEjQ87uMCyL3ZhRBuXqU.mp4"
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                onEnded={() => setIsPlaying(false)}
              />

              {/* Play Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/5 cursor-pointer transition-opacity duration-300 hover:bg-black/10"
                  onClick={handlePlayPause}
                >
                  <div 
                    className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110"
                  >
                    <Play 
                      fill="currentColor" 
                      className="text-black w-6 h-6 md:w-8 md:h-8 ml-1" 
                    />
                  </div>
                </div>
              )}

              {/* Pause Trigger (Visible when playing/hovering) */}
              {isPlaying && (
                <div 
                  className="absolute inset-0 cursor-pointer z-10 opacity-0 hover:opacity-100 transition-opacity bg-black/5 flex items-center justify-center"
                  onClick={handlePlayPause}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-8 bg-black mx-1 rounded-full" />
                    <div className="w-1.5 h-8 bg-black mx-1 rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Glossy Reflection Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-30" />
          </div>

          {/* Perspective Shadow Casting (Floor Shadow) */}
          <div 
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-black/5 blur-[40px] rounded-[100%] pointer-events-none" 
            style={{ zIndex: -1 }}
          />
        </div>
      </div>

      {/* Title Subtext Styling (Consistency with High-Level Design) */}
      <div className="mt-12 text-center px-6">
        <h3 className="text-[#000000] font-sans font-bold text-[20px] md:text-[24px] tracking-tight">
          How Our AI Marketing Tool Works
        </h3>
      </div>
    </section>
  );
}