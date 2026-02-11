"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Facebook, Mail, Layout, Users, Instagram, Video, Target, UserCheck, Camera } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const useCases = [
    {
      title: "Facebook Ads Maker",
      description: "Generate high-converting Facebook ad creatives.",
      icon: <Facebook className="w-5 h-5 text-blue-500" />,
      href: "/facebook-ad-maker",
    },
    {
      title: "AI Newsletter Generator",
      description: "Create brand-consistent newsletters in minutes.",
      icon: <Mail className="w-5 h-5 text-pink-500" />,
      href: "/ai-newsletter-generator",
    },
    {
      title: "Instagram Ads Maker",
      description: "Create scroll-stopping Instagram ad creatives.",
      icon: <Instagram className="w-5 h-5 text-[#E95678]" />,
      href: "/instagram-ad-maker",
    },
    {
      title: "AI UGC Generator",
      description: "Generate authentic user-generated content.",
      icon: <Camera className="w-5 h-5 text-purple-500" />,
      href: "/#ugc",
    },
    {
      title: "TikTok Video Generator",
      description: "Make viral TikTok ads and organic content.",
      icon: <Video className="w-5 h-5 text-black" />,
      href: "/#tiktok",
    },
    {
      title: "Ad Generator",
      description: "All-in-one platform for all your ad needs.",
      icon: <Target className="w-5 h-5 text-red-500" />,
      href: "/#ads",
    },
    {
      title: "Influencer Generator",
      description: "Create AI-powered influencer campaigns.",
      icon: <UserCheck className="w-5 h-5 text-green-500" />,
      href: "/#influencers",
    },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[95%] max-w-[1200px]">
      <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="px-4 h-10 relative bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-sm overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/4cdbd617-1711-439d-a5f5-7af24b9a4f0b/WhatsApp-Image-2026-01-23-at-5.11.01-AM-1769699643506.png?width=8000&height=8000&resize=contain"
              alt="Adona Logo"
              width={80}
              height={24}
              className="object-contain h-6 w-auto"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <div 
            ref={dropdownRef}
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors py-2"
            >
              Use cases <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-0 w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 animate-in fade-in zoom-in-95 duration-200"
              >
                <div className="flex flex-col gap-2">
                  {useCases.map((useCase) => (
                    <Link
                      key={useCase.href}
                      href={useCase.href}
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="mt-1">{useCase.icon}</div>
                      <div>
                        <div className="font-bold text-sm text-gray-900">{useCase.title}</div>
                        <div className="text-xs text-gray-500 line-clamp-1">{useCase.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/#manifesto" className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors">Manifesto</Link>
          <Link href="/#how-it-works" className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors">How it works</Link>
          <Link href="/#teams" className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors">Meet the team</Link>
          <Link href="/#faq" className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors">FAQ</Link>
        </div>

        {/* Action Button */}
        <Link
          href="https://www.adona.ai/pricing"
          className="bg-white border-2 border-indigo-50/50 p-[2px] rounded-full group hover:scale-105 transition-transform"
        >
          <div className="bg-white px-6 py-2 rounded-full border border-indigo-100 flex items-center justify-center">
            <span className="font-bold text-sm bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Buy now
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
