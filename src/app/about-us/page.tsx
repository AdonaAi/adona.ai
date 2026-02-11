"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FinalCTA from "@/components/sections/final-cta";
import { ArrowRight, Sparkles, Globe, Zap, Shield, Target, Heart } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center pt-[140px] md:pt-[160px] lg:pt-[180px] pb-[60px] md:pb-[80px] overflow-hidden bg-white">
          <div className="container relative z-10 mx-auto px-6 text-center max-w-[900px]">
            {/* Badge */}
            <div className="mb-6 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="rounded-full bg-gradient-to-r from-[#caf0f8] to-[#90e0ef] border border-[#48cae4] px-6 py-2.5 shadow-sm mx-auto flex items-center justify-center">
                <span className="text-[14px] font-bold text-[#03045e] leading-none pt-[1px]">About Adona</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-[40px] md:text-[56px] lg:text-[72px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#03045e] animate-in fade-in slide-in-from-bottom-6 duration-1000">
              We&apos;re building the future of AI marketing
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-10 max-w-[650px] text-[17px] md:text-[20px] leading-[1.6] text-[#0077b6] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Adona empowers brands of all sizes to create agency-quality ads, videos, and content — without the agency fees.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-[#fafafa] py-[80px] md:py-[120px]">
          <div className="container mx-auto px-6 max-w-[1000px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <h2 className="text-[28px] md:text-[40px] font-bold text-[#1D1D1F] leading-[1.15] tracking-tight mb-6">
                  Our mission
                </h2>
                <p className="text-[16px] md:text-[18px] text-[#6E6E73] leading-[1.7] mb-4">
                  We believe every business deserves world-class marketing. Not just the ones with six-figure budgets and full creative teams.
                </p>
                <p className="text-[16px] md:text-[18px] text-[#6E6E73] leading-[1.7]">
                  Adona was built to level the playing field — giving solopreneurs, startups, and growing brands the same caliber of content that top agencies deliver, powered entirely by AI.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#E5E5E5]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/video/hero section video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-[60px] md:py-[80px] overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto border-t border-[#F1F1F1] pt-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center px-4">
                {[
                  { value: "10M+", label: "content assets generated" },
                  { value: "19,000+", label: "brands trust Adona" },
                  { value: "95+", label: "languages supported" },
                  { value: "75%", label: "faster than traditional methods" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-[36px] md:text-[52px] font-black bg-gradient-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent leading-none mb-3 px-1 pb-1">
                      {item.value}
                    </span>
                    <p className="text-[14px] md:text-[16px] text-[#6E6E73] leading-snug lg:max-w-[200px] font-medium">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="bg-[#fafafa] py-[80px] md:py-[120px]">
          <div className="container mx-auto px-6 max-w-[1100px]">
            <div className="text-center mb-16">
              <h2 className="text-[28px] md:text-[40px] font-bold text-[#1D1D1F] leading-tight tracking-tight mb-4">
                What Adona does
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#6E6E73] max-w-[600px] mx-auto leading-relaxed">
                One platform. Every content type. All powered by AI trained on millions of high-performing assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Facebook & Instagram Ads",
                  description: "Generate scroll-stopping feed, story, and carousel ads that convert — based on your website alone.",
                },
                {
                  icon: Zap,
                  title: "TikTok Videos",
                  description: "Create viral-ready TikTok content with trending hooks, captions, and pacing built in.",
                },
                {
                  icon: Sparkles,
                  title: "AI UGC Content",
                  description: "Produce authentic user-generated style content without hiring creators or influencers.",
                },
                {
                  icon: Heart,
                  title: "AI Influencers",
                  description: "Build consistent AI personas for your brand. No scheduling conflicts, no fees.",
                },
                {
                  icon: Globe,
                  title: "Newsletters",
                  description: "Create brand-consistent email newsletters in minutes, not hours.",
                },
                {
                  icon: Shield,
                  title: "Brand-Safe AI",
                  description: "Every piece of content is generated with your brand DNA — colors, tone, and style stay consistent.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-3xl border border-[#E5E5E5] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#caf0f8] to-[#90e0ef] flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-[#03045e]" />
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#1D1D1F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-[#6E6E73] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white py-[80px] md:py-[120px]">
          <div className="container mx-auto px-6 max-w-[900px]">
            <div className="text-center mb-16">
              <h2 className="text-[28px] md:text-[40px] font-bold text-[#1D1D1F] leading-tight tracking-tight">
                What we believe
              </h2>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "Great marketing shouldn't cost a fortune",
                  description: "We built Adona so that a solo founder can compete with billion-dollar brands. Your budget shouldn't limit your creativity.",
                },
                {
                  title: "AI should amplify, not replace",
                  description: "Our AI doesn't replace your vision — it accelerates it. You stay in control of your brand while we handle the heavy lifting.",
                },
                {
                  title: "Speed is a superpower",
                  description: "In marketing, timing matters. Adona lets you go from idea to published content in minutes, not weeks.",
                },
                {
                  title: "Your brand is sacred",
                  description: "Every ad, video, and email we generate respects your brand identity. No generic templates, no off-brand surprises.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#03045e] to-[#0077b6] flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-[16px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#1D1D1F] mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[16px] md:text-[18px] text-[#6E6E73] leading-[1.7]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
