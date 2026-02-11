import React from 'react';
import Image from 'next/image';

/**
 * Navbar section for adona.ai.
 * Contains the logo on the left and a "Buy now" gradient button on the right.
 * The navbar is sticky with a glassblureffect.
 */
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-[80px] w-full flex items-center justify-center pointer-events-none">
      <div className="container px-6 flex items-center justify-between pointer-events-auto h-full max-w-[1240px]">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center outline-none">
              <div className="relative px-4 h-[40px] md:h-[48px] bg-white rounded-full shadow-soft flex items-center justify-center border border-[#F1F1F1] overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/4cdbd617-1711-439d-a5f5-7af24b9a4f0b/WhatsApp-Image-2026-01-23-at-5.11.01-AM-1769699643506.png?width=8000&height=8000&resize=contain"
                  alt="Adona Logo"
                  width={100}
                  height={32}
                  className="h-6 md:h-8 w-auto object-contain"
                  priority
                />
              </div>
            </a>
          </div>

        {/* Right: Buy Now Button */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.adona.ai/pricing"
            id="buy-now-sticky"
            className="group relative flex items-center justify-center"
          >
            <div className="bg-mesh-gradient hover:scale-[1.02] transition-transform duration-200 ease-out flex items-center justify-center h-[38px] px-6 md:h-[42px] md:px-8 rounded-full shadow-[0_4px_12px_rgba(236,72,153,0.3)]">
              <span className="text-white font-semibold text-[14px] md:text-[16px] tracking-tight">
                Buy now
              </span>
            </div>
            
            {/* Subtle hover shadow overlay if needed, usually the gradient is enough */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </a>
        </div>
      </div>

      {/* Background Blur Overlay - only active when scrolled or as desired */}
      {/* Based on the high-level design: "Transparent to White blur on scroll" */}
      <div className="absolute inset-0 -z-10 bg-[rgba(252,252,252,0.8)] backdrop-blur-md border-b border-[#F1F1F1]"></div>
    </nav>
  );
}