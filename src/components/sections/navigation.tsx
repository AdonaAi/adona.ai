"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Navigation Component
 * 
 * Features:
 * - Fixed/Sticky top positioning
 * - Glassmorphism background effect on scroll
 * - Minimal logo on the left
 * - "Buy now" CTA button with pill-shape on the right
 */
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ease-in-out ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 md:px-10 max-w-[1200px] flex items-center justify-between">
        {/* Logo Section */}
        <a 
          href="/" 
          className="flex items-center transition-opacity hover:opacity-80 focus:outline-none"
          aria-label="adona.ai Home"
        >
          <div className="w-[40px] h-[40px] relative overflow-hidden flex items-center justify-center">
            {/* Using the provided logo/app icon asset */}
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/DJ2WgfbrpFTTA9x8SnBl04H97hg-1.png"
              alt="adona.ai Logo"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
          </div>
        </a>

        {/* CTA Button Section */}
        <div className="flex items-center">
          <a
            href="https://www.adona.ai/pricing"
            id="buy-now-sticky"
            className="group relative"
          >
            <button
              className="btn-pill bg-white border border-[#f0f0f0] text-[#1a1a1a] hover:bg-[#f9fafb] shadow-sm transform transition-all active:scale-95"
              style={{
                padding: "8px 24px",
                fontSize: "14px",
                fontWeight: 600,
                borderRadius: "9999px",
                border: "1px solid #EDEDED",
                boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.05)"
              }}
            >
              Buy now
            </button>
          </a>
        </div>
      </div>

      <style jsx global>{`
        .glass-nav {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(240, 240, 240, 0.5);
        }
        
        @media (max-width: 809.98px) {
          .container {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>
    </nav>
  );
}