"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Facebook, Mail, Instagram, Video, Target, UserCheck, Camera, X } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Close mobile menu on route change (resize to desktop)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const useCases = [
    {
      title: "Facebook Ads Maker",
      description: "Generate high-converting Facebook ad creatives.",
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#03045e]" />,
      href: "/facebook-ad-maker"
    },
    {
      title: "Instagram Ads Maker",
      description: "Create scroll-stopping Instagram ad creatives.",
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#0077b6]" />,
      href: "/instagram-ad-maker"
    },
    {
      title: "TikTok Video Generator",
      description: "Make viral TikTok ads and organic content.",
      icon: <Video className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b4d8]" />,
      href: "/ai-tiktok-video-generator"
    },
    {
      title: "AI UGC Generator",
      description: "Generate authentic user-generated content.",
      icon: <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-[#90e0ef]" />,
      href: "/ai-ugc-video-generator"
    },
    {
      title: "AI Newsletter Generator",
      description: "Create brand-consistent newsletters in minutes.",
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#03045e]" />,
      href: "/ai-newsletter-generator"
    },
    {
      title: "AI Influencer Generator",
      description: "Create realistic AI influencers for your brand.",
      icon: <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#0077b6]" />,
      href: "/ai-influencer-generator"
    },
    {
      title: "AI Ad Generator",
      description: "All-in-one AI advertising solution.",
      icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b4d8]" />,
      href: "/ai-ad-generator"
    }
  ];

  const { scrollY } = useScroll();

  // State to track window width for pixel-based animation
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive values
  // Mobile: 90% (calculated) -> 100% (calculated)
  // Desktop: 800px -> 100% (calculated)

  // We avoid mixing px and % by using windowWidth.
  // Although % works fine if both are %, mixing px and % crashes the transform or makes it jump.

  // Mobile: 90% -> windowWidth - 24px (margin)
  const mobileStart = windowWidth * 0.9;
  const mobileEnd = Math.max(0, windowWidth - 24);

  // Desktop: 1000px -> windowWidth - 64px (margin)
  // Desktop: 1150px -> windowWidth - 64px (margin)
  const desktopStart = 1150;
  const desktopEnd = Math.max(0, windowWidth - 64);

  // Smoother animation: increase scroll range to 600px
  const widthMobile = useTransform(scrollY, [0, 600], [mobileStart, mobileEnd]);
  const widthDesktop = useTransform(scrollY, [0, 600], [desktopStart, desktopEnd]);

  // If windowWidth is 0 (SSR/initial), default to 'auto' or '100%' string to avoid flash,
  // but framer motion handles numbers better. We'll wait for hydration basically.
  const animatedWidth = windowWidth === 0 ? "100%" : (isMobile ? widthMobile : widthDesktop);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] p-3 sm:p-4 md:p-5 lg:p-6 pointer-events-none">
        <motion.div
          style={{ width: animatedWidth }}
          className="flex items-center justify-between mx-auto px-4 sm:px-6 md:px-8 relative"
        >

          {/* Logo */}
          <div className="relative z-50 pointer-events-auto flex-shrink-0">
            <Link
              href="/"
              className="flex items-center transition-transform hover:scale-105 active:scale-95"
            >
              <Image
                src="/images/BLACK (1).png"
                alt="adona.ai"
                width={180}
                height={50}
                // Optimized logo size for mobile
                className="object-contain h-[32px] sm:h-[48px] md:h-[56px] w-auto"
                priority
                unoptimized
              />
            </Link>
          </div>

          {/* Desktop Menu - Flexible in flow (removed absolute) */}
          <div className="hidden md:flex items-center justify-center h-[72px] bg-white/90 backdrop-blur-2xl border border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-full px-6 lg:px-8 pointer-events-auto mx-4">
            <div className="flex items-center gap-6">
              <div
                ref={dropdownRef}
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  // Increased font size to 17px
                  className="flex items-center gap-1.5 text-[17px] font-semibold text-[#03045e] hover:text-[#0077b6] transition-colors py-2"
                >
                  Use cases <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Desktop Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80">
                    <div className="bg-white rounded-[28px] shadow-[0_30px_90px_rgba(0,0,0,0.18)] border border-gray-100 p-3 animate-in fade-in zoom-in-95 duration-300">
                      <div className="grid grid-cols-1 gap-1">
                        {useCases.map((useCase) => (
                          <Link
                            key={useCase.href}
                            href={useCase.href}
                            className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#caf0f8]/30 transition-all duration-200 group/item"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <div className="mt-1 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110">{useCase.icon}</div>
                            <div>
                              <div className="font-bold text-[14px] text-[#03045e]">{useCase.title}</div>
                              <div className="text-[12px] text-gray-500 line-clamp-1">{useCase.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/affiliate" className="text-[17px] font-semibold text-[#03045e] hover:text-[#0077b6] transition-colors">
                Affiliate
              </Link>
              <Link href="/blog" className="text-[17px] font-semibold text-[#03045e] hover:text-[#0077b6] transition-colors">
                Blog
              </Link>
              <Link href="/about-us" className="text-[17px] font-semibold text-[#03045e] hover:text-[#0077b6] transition-colors">
                About us
              </Link>
              <Link href="/login" className="text-[17px] font-semibold text-[#03045e] hover:text-[#0077b6] transition-colors">
                Login
              </Link>
            </div>
          </div>

          {/* Right Side: Hamburger + Buy Now */}
          <div className="relative z-50 pointer-events-auto flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full transition-all hover:scale-105 active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`w-4 sm:w-5 h-0.5 bg-[#03045e] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px] sm:translate-y-1.5' : ''}`} />
              <span className={`w-4 sm:w-5 h-0.5 bg-[#03045e] my-[3px] sm:my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-4 sm:w-5 h-0.5 bg-[#03045e] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px] sm:-translate-y-1.5' : ''}`} />
            </button>

            {/* Buy Now Button */}
            <Link
              href="/pricing"
              className="group relative inline-flex items-center justify-center px-3 sm:px-6 md:px-8 py-1.5 sm:py-2.5 md:py-3 lg:py-3.5 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,119,182,0.4)] active:scale-95 bg-linear-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8]"
            >
              <span className="relative z-10 font-bold text-[12px] sm:text-[15px] md:text-[16px] text-white tracking-wide whitespace-nowrap">
                Buy now
              </span>
            </Link>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      {
        isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[998] pointer-events-auto"
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <div
              ref={mobileMenuRef}
              className="md:hidden fixed top-0 right-0 w-full max-w-[340px] h-full bg-white z-[999] pointer-events-auto shadow-[-20px_0_60px_rgba(0,0,0,0.15)] animate-in slide-in-from-right duration-300 flex flex-col"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100">
                <span className="text-[16px] font-bold text-[#03045e]">Menu</span>
                <button
                  onClick={closeMobileMenu}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-[#1D1D1F]" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
                {/* Use Cases Section */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 mb-2">Use Cases</div>
                  <div className="flex flex-col gap-0.5">
                    {useCases.map((useCase) => (
                      <Link
                        key={useCase.href}
                        href={useCase.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#caf0f8]/30 active:bg-[#caf0f8]/50 transition-all duration-200"
                        onClick={closeMobileMenu}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#f0f9ff] flex items-center justify-center">
                          {useCase.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-[13px] text-[#03045e] truncate">{useCase.title}</div>
                          <div className="text-[11px] text-gray-500 truncate">{useCase.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-3" />

                {/* Other Links */}
                <div className="flex flex-col gap-0.5">
                  <Link
                    href="/affiliate"
                    className="block px-3 py-3 text-[14px] font-semibold text-[#03045e] hover:bg-[#caf0f8]/30 active:bg-[#caf0f8]/50 rounded-xl transition-all"
                    onClick={closeMobileMenu}
                  >
                    Affiliate
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-3 py-3 text-[14px] font-semibold text-[#03045e] hover:bg-[#caf0f8]/30 active:bg-[#caf0f8]/50 rounded-xl transition-all"
                    onClick={closeMobileMenu}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about-us"
                    className="block px-3 py-3 text-[14px] font-semibold text-[#03045e] hover:bg-[#caf0f8]/30 active:bg-[#caf0f8]/50 rounded-xl transition-all"
                    onClick={closeMobileMenu}
                  >
                    About us
                  </Link>
                  <Link
                    href="/login"
                    className="block px-3 py-3 text-[14px] font-semibold text-[#03045e] hover:bg-[#caf0f8]/30 active:bg-[#caf0f8]/50 rounded-xl transition-all"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </div>
              </div>

              {/* Menu Footer - CTA */}
              <div className="px-4 py-4 border-t border-gray-100">
                <Link
                  href="/pricing"
                  className="flex items-center justify-center w-full py-3 rounded-full bg-linear-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8] text-white font-bold text-[14px] transition-all hover:shadow-[0_4px_20px_rgba(0,119,182,0.4)] active:scale-[0.98]"
                  onClick={closeMobileMenu}
                >
                  Buy now
                </Link>
              </div>
            </div>
          </>
        )
      }
    </>
  );
}
