"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type PlanType = 'yearly' | 'quarterly' | 'monthly';

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('yearly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 310;
      carouselRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  const plans = {
    yearly: {
      label: 'Pay yearly',
      originalPrice: '$33/month',
      price: '$9.70',
      period: '/month',
      savings: 'Save 70%',
      popular: true,
    },
    quarterly: {
      label: 'Pay quarterly',
      originalPrice: '$44/month',
      price: '$11.70',
      period: '/month',
      savings: 'Save 73%',
      popular: false,
    },
    monthly: {
      label: 'Pay monthly',
      originalPrice: '$59/month',
      price: '$21.70',
      period: '/month',
      savings: '70% OFF',
      popular: false,
    },
  };

  const features = [
    { image: '/video/WhatsApp Video 2026-02-01 at 22.20.28.mp4', title: 'Your brand identity', description: 'Captured and learned in minutes.' },
    { image: 'https://framerusercontent.com/images/gbPXQNwLYZmsKC97Q06KQ1Rtg.gif', title: 'Swipe through fresh content ideas', description: 'ready to use.' },
    { image: 'https://framerusercontent.com/images/rT77PaiCArW0ZC8UuaTQeyaCY5A.gif', title: 'Manage multiple brands', description: 'in one place.' },
    { image: 'https://framerusercontent.com/images/v0rsQklNarczzCSb6NWVHMczCo.gif', title: 'Available on Desktop and Mobile', description: 'Wherever You Work.' },
    { image: 'https://framerusercontent.com/images/xS3RSNDS3bUD5uopjKFXCur4uCg.gif', title: 'Simple Customization', description: 'Professional Results.' },
  ];

  const contentTypes = [
    {
      title: 'Automated Ad Creatives',
      description: 'Create fully branded, high-performing ads instantly.',
      icon: 'ad-creative',
    },
    {
      title: 'Unified Social Content Management',
      description: 'Plan, create, and manage social posts from one dashboard.',
      icon: 'social-content',
    },
    {
      title: 'AI-Powered Email Marketing',
      description: 'Generate branded, conversion-focused emails in minutes.',
      icon: 'email-marketing',
    },
    {
      title: 'Designed for Real Marketing Results',
      description: '',
      icon: 'divider',
    },
    {
      title: 'Your brand identity, captured and learned in minutes.',
      description: '',
      icon: 'brand-identity',
    },
    {
      title: 'Swipe through fresh content ideas, ready to use.',
      description: '',
      icon: 'swipe-content',
    },
    {
      title: 'Manage multiple brands in one place.',
      description: '',
      icon: 'multi-brand',
    },
    {
      title: 'Available on Desktop and Mobile. Wherever You Work.',
      description: '',
      icon: 'desktop-mobile',
    },
    {
      title: 'Simple Customization. Professional Results.',
      description: '',
      icon: 'simple-custom',
    },
  ];

  const faqs = [
    {
      question: 'What Is an AI Facebook Ad Maker?',
      answer: 'An AI Facebook Ad Maker is a tool that uses artificial intelligence to automatically create ad copy, visuals, and creative concepts. Instead of spending hours brainstorming, writing, and designing, you can generate high-performing, scroll-stopping Facebook ads in minutes — ready to launch and optimized for results.'
    },
    {
      question: 'How Does Adona’s Facebook Ad Generator Work?',
      answer: 'Start by entering your website link, and Adona’s AI will analyze your brand voice, visual style, and target audience. It then generates unique, high-performing ad ideas that you can easily edit, customize, and launch in minutes.'
    },
    {
      question: 'What Types of Facebook Ads Can I Create with Adona?',
      answer: 'Adona can generate all major types of Facebook ads, including static image ads, carousel ads, and video ads. This gives you the flexibility to create high-performing campaigns for any objective — from awareness to conversions.'
    },
    {
      question: 'Do I need design or copywriting skills to generate ads?',
      answer: 'No, Adona\'s AI Facebook ad generator is designed to make your life easier. All you need is a website URL, and our AI will take it from there.'
    },
    {
      question: 'How Do I Create Facebook Ads with Adona?',
      answer: 'Getting started is simple. Paste your website URL, choose an ad concept, and customize the content to match your goals. No complex setup, no technical skills — just fast, high-quality ads ready to launch.'
    },
    {
      question: 'Can I Use an Ad Maker for Free? How Much Does Adona Cost?',
      answer: 'Adona does not offer a free plan, but pricing starts at just $9.70 per month on the annual plan. Every subscription is backed by a 14-day money-back guarantee, so you can try Adona risk-free. You get one transparent price with no hidden fees and full access to all features.'
    },
    {
      question: 'What Makes Adona Different from other ad creation tools?',
      answer: 'Adona is built for real marketing performance — not generic, one-size-fits-all content. Every feature is designed to help you create campaigns that drive measurable results. Here’s how we stand apart:\n\n1. Built-In Brand Intelligence\nAdona learns your brand voice, visual style, and audience preferences, ensuring every campaign looks and feels like it was created by your internal team.\n\n2. Performance-Tested Creative Intelligence\nPowered by insights from millions of high-performing campaigns, Adona generates conversion-focused creatives designed to deliver real business impact — not just fill space.\n\n3. Global-Ready by Design\nWith support for 95+ languages, Adona helps you launch consistent, on-brand campaigns in any market, anywhere in the world.'
    },
    {
      question: 'Does Adona Improve Ad Performance?',
      answer: 'Yes. Adona uses insights from millions of high-performing marketing assets to understand what drives engagement and conversions. This allows it to generate Facebook ads designed to attract attention, increase clicks, and deliver better results.'
    },
  ];

  // Timer state
  const [timeLeft, setTimeLeft] = useState({ hours: 19, minutes: 54, seconds: 27 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Reset or stop
              hours = 23;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-white text-[#03045e]">
      {/* Sale Banner Header */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[50px] flex items-center justify-center text-white font-medium shadow-md"
        style={{
          background: 'linear-gradient(90deg, #03045e 0%, #0077b6 50%, #00b4d8 100%)',
          fontFamily: 'Satoshi, sans-serif'
        }}
      >
        <div className="flex items-center gap-2 text-[14px] md:text-[16px]">
          <span><strong>New Years Sale 50% OFF</strong></span>
          <span className="opacity-80">|</span>
          <span className="font-bold font-mono tracking-widest">
            {formatTime(timeLeft.hours)}
            <span className="text-[0.8em] font-normal mx-[2px]">h</span>
            {formatTime(timeLeft.minutes)}
            <span className="text-[0.8em] font-normal mx-[2px]">m</span>
            {formatTime(timeLeft.seconds)}
            <span className="text-[0.8em] font-normal ml-[2px]">s</span>
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16 md:pt-20 lg:pt-24">
        {/* Pricing Options Section - Hidden by default */}
        <section className="max-w-[380px] mx-auto px-4 md:px-5 py-6 md:py-10 hidden">
          <div className="bg-white rounded-[24px] border border-[#e5e5e7] shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-6">
            <h2 className="text-[24px] font-bold text-[#1d1d1f] mb-6">Pricing options</h2>

            {/* Pricing Cards */}
            <div className="space-y-4 mb-6">
              {(Object.keys(plans) as PlanType[]).map((planKey) => {
                const plan = plans[planKey];
                const isSelected = selectedPlan === planKey;

                return (
                  <button
                    key={planKey}
                    onClick={() => setSelectedPlan(planKey)}
                    className={`relative w-full p-4 rounded-[16px] text-left transition-all duration-200 ${isSelected
                      ? 'border-2 border-[#0077b6] bg-white shadow-[0_4px_12px_rgba(0,119,182,0.15)]'
                      : 'border border-[#e5e5e7] bg-white hover:border-[#0077b6]/50'
                      }`}
                  >
                    {/* Best Value Badge */}
                    {plan.popular && (
                      <div className="inline-block mb-2">
                        <span className="px-2 py-0.5 border-2 border-[#6366f1] text-[#6366f1] rounded-md text-[11px] font-bold uppercase">
                          Best value
                        </span>
                      </div>
                    )}

                    {/* Price Badge for Monthly */}
                    {planKey === 'monthly' && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-[#ef4444] text-white rounded-md text-[11px] font-bold uppercase">
                          70% OFF
                        </span>
                      </div>
                    )}

                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[#86868b] line-through text-[18px]">{plan.originalPrice}</span>
                      <span className="text-[32px] font-bold text-[#1d1d1f]">{plan.price}</span>
                      <span className="text-[16px] text-[#6e6e73]">/month</span>
                    </div>

                    <div className="text-[14px] text-[#6e6e73]">{plan.label}</div>
                  </button>
                );
              })}
            </div>

            {/* Buy Button */}
            <button className="w-full py-4 bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f97316] text-white rounded-[12px] font-bold text-[16px] hover:shadow-lg transition-all mb-4">
              Buy now for {plans[selectedPlan].price}/m
            </button>

            {/* Footer Text */}
            <div className="flex items-center justify-center gap-2 text-[13px] text-[#6e6e73]">
              <span>Subscription covers your whole team</span>
              <div className="w-4 h-4 bg-[#10b981] rounded-sm flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section - Premium Aesthetic Design */}
        <section className="max-w-[700px] mx-auto px-4 md:px-5 py-8 md:py-12">
          {/* Main Hero Card */}
          <div className="relative bg-gradient-to-br from-white via-[#f8fafc] to-[#f0f9ff] rounded-[28px] md:rounded-[36px] border border-[#e0f2fe] shadow-[0_8px_40px_rgba(0,119,182,0.08)] overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#00b4d8]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gradient-to-tr from-[#03045e]/5 to-transparent rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative p-6 md:p-8 lg:p-10">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
                {/* Left: Branding + Price */}
                <div className="w-full md:w-auto">
                  <div className="flex flex-col items-start mb-4">
                    <Image
                      src="/images/black logo logo no bg adona.ai  2.png"
                      width={60}
                      height={60}
                      alt="adona.ai logo"
                      className="relative h-[48px] w-[48px] md:h-[56px] md:w-[56px] lg:h-[64px] lg:w-[64px] rounded-2xl object-contain mb-3"
                    />
                    <div className="flex items-baseline gap-2">
                      <span className="text-[14px] md:text-[16px] text-[#64748b] italic">Starting from</span>
                      <span className="text-[24px] md:text-[28px] font-bold bg-gradient-to-r from-[#03045e] to-[#0077b6] bg-clip-text text-transparent">$29</span>
                      <span className="text-[16px] text-[#64748b] font-medium">/month</span>
                    </div>
                  </div>
                </div>

                {/* Right: Video with glow effect */}
                <div className="w-full md:w-[200px] lg:w-[220px] relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0077b6]/20 to-[#00b4d8]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-[200px] md:h-[140px] lg:h-[160px] rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5">
                    <video
                      src="/video/hero section video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Main Features - Compact */}
              <div className="space-y-2.5 mb-5">
                {[
                  { gradient: 'from-[#03045e] to-[#0077b6]', title: 'Automated Ad Creatives', desc: 'Create fully branded, high-performing ads instantly.', iconPath: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z' },
                  { gradient: 'from-[#0077b6] to-[#00b4d8]', title: 'Unified Social Content Management', desc: 'Plan, create, and manage social posts from one dashboard.', iconPath: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5' },
                  { gradient: 'from-[#00b4d8] to-[#48cae4]', title: 'AI-Powered Email Marketing', desc: 'Generate branded, conversion-focused emails in minutes.', iconPath: 'M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75' },
                ].map((item, index) => (
                  <div key={index} className="group flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-[#e2e8f0] hover:border-[#0077b6]/30 hover:shadow-md transition-all duration-200">
                    <div className="w-9 h-9 rounded-lg bg-[#f5f5f7] flex items-center justify-center shrink-0">
                      <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="#1d1d1f" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[13px] md:text-[14px] text-[#1e293b]">{item.title}</h4>
                      <p className="text-[12px] md:text-[13px] text-[#64748b]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>



              {/* Compact eCommerce + Trust row */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#e5e5e7] to-transparent mb-4" />
              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', title: 'Top Brands', sub: 'Proven performance' },
                  { icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3', title: '99+ Languages', sub: 'Global reach' },
                  { icon: 'M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84', title: 'Ready Ideas', sub: 'Launch fast' },
                ].map((item, index) => (
                  <div key={index} className="text-center p-3 rounded-xl bg-[#f5f5f7] hover:bg-[#e8e8ed] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mx-auto mb-1.5 shadow-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#1d1d1f" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <h4 className="font-bold text-[11px] md:text-[12px] text-[#1e293b]">{item.title}</h4>
                    <p className="text-[10px] text-[#64748b]">{item.sub}</p>
                  </div>
                ))}
              </div>

              {/* Trust badges inline */}
              <div className="flex items-center justify-center gap-4 py-3 px-4 rounded-xl bg-[#f5f5f7]">
                {[
                  { icon: 'M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z', label: 'Fast Support' },
                  { icon: 'M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z', label: 'Private' },
                  { icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z', label: 'Secure' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    <span className="text-[12px] font-medium text-[#1d1d1f]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Powered by AI Section */}
        <section className="max-w-[650px] mx-auto px-4 md:px-5 py-4 md:py-6">
          <div className="bg-linear-to-r from-[#03045e] to-[#0077b6] rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-[18px] md:text-[22px] lg:text-[26px] font-bold italic">
                <span className="bg-linear-to-r from-[#caf0f8] via-[#90e0ef] to-[#00b4d8] bg-clip-text text-transparent">
                  Powered by the latest AI,
                </span>
              </h3>
              <h3 className="text-[18px] md:text-[22px] lg:text-[26px] font-bold italic text-white">
                that creates content when you sleep.
              </h3>
            </div>
            <div className="w-full md:w-[280px] lg:w-[320px] h-[180px] md:h-[200px] rounded-[16px] md:rounded-[20px] overflow-hidden">
              <Image
                src="/images/image.png"
                alt="AI Robot"
                width={320}
                height={200}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Not Just Another AI Tool - Features Carousel */}
        <section className="py-10 md:py-12 lg:py-16" id="features">
          <div className="max-w-[650px] mx-auto px-4 md:px-5">
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-center text-[#1d1d1f] mb-8 md:mb-10 lg:mb-12">Designed for Real Marketing Results</h2>

            {/* Features Carousel */}
            <div className="relative">
              <div
                ref={carouselRef}
                className="flex gap-4 md:gap-5 overflow-x-auto pb-4 md:pb-6 scrollbar-hide snap-x snap-mandatory cursor-grab scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-[260px] md:w-[290px] bg-[#f5f5f7] rounded-[16px] md:rounded-[20px] overflow-hidden snap-start"
                  >
                    {/* Media (Video or Image) */}
                    <div className="h-[260px] md:h-[290px] overflow-hidden bg-white relative">
                      {feature.image.endsWith('.mp4') ? (
                        <video
                          src={feature.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                    {/* Text */}
                    <div className="p-4 md:p-5">
                      <p className="text-[16px] md:text-[18px] leading-7 tracking-[0.2px]">
                        <span className="font-medium text-[#1d1d1f]">{feature.title}.</span>{' '}
                        <span className="text-[#6e6e73]">{feature.description}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows - Framer Style */}
              <div className="flex justify-center gap-4 md:gap-5 mt-6 md:mt-8">
                <button
                  type="button"
                  onClick={() => scrollCarousel('left')}
                  className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] rounded-full bg-[#e6e6e7] hover:bg-[#d1d1d6] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                >
                  <img
                    src="https://framerusercontent.com/images/ZOaVMFinwyGanwZYIqVYV7HhxQ.svg"
                    alt="Previous"
                    width={20}
                    height={20}
                    className="pointer-events-none md:w-6 md:h-6"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel('right')}
                  className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] rounded-full bg-[#e6e6e7] hover:bg-[#d1d1d6] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                >
                  <img
                    src="https://framerusercontent.com/images/tCe5fAeGAbaNrHq7anRgKs0CY.svg"
                    alt="Next"
                    width={24}
                    height={24}
                    className="pointer-events-none"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - "Also..." */}
        <section className="max-w-[650px] mx-auto px-5 py-6">
          <h2 className="text-[36px] md:text-[44px] font-bold text-center text-[#03045e] mb-8">Also…</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '15+', label: 'Different niches.' },
              { value: '∞', label: 'Unlimited ideas.' },
              { value: '0', label: 'Design skills required' },
              { value: '10k+', label: 'Data points' },
            ].map((stat, index) => (
              <div key={index} className="bg-[#f5f5f7] rounded-[24px] p-8 text-center hover:bg-[#e5e5e7] transition-colors">
                <div className="text-[40px] font-bold text-[#1d1d1f]">
                  {stat.value}
                </div>
                <div className="text-[15px] text-[#86868b] mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Works with your stack */}
        <section className="max-w-[650px] mx-auto px-5 py-10">
          <div className="bg-white rounded-[24px] border border-[#e5e5e7] shadow-sm p-8 text-center">
            <h3 className="text-[24px] md:text-[28px] font-bold text-[#1d1d1f] mb-3">Works seamlessly with your stack.</h3>
            <p className="text-[16px] text-[#6e6e73] mb-8">Meta, Instagram, Klaviyo, Mailchimp and more.</p>
            <div className="w-full overflow-hidden rounded-xl">
              <Image
                src="/images/WhatsApp%20Image%202026-02-02%20at%2000.19.26.jpeg?v=2"
                alt="Integrations"
                width={600}
                height={300}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-[650px] mx-auto px-5 py-16">
          <h2 className="text-[36px] md:text-[44px] font-bold text-center text-[#03045e] mb-10">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#caf0f8]/30 rounded-[20px] border border-[#90e0ef] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <h3 className="font-bold text-[15px] text-[#03045e] pr-4">{faq.question}</h3>
                  <div className={`w-8 h-8 rounded-full bg-[#03045e] flex items-center justify-center flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-[14px] text-[#0077b6]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Final CTA Button */}
      <div className="w-full pb-6 pt-4 px-5 sticky bottom-0 z-50 pointer-events-none">
        <div className="max-w-[400px] mx-auto pointer-events-auto">
          <button
            type="button"
            onClick={() => {
              console.log('Button clicked!');
              setShowPricingModal(true);
            }}
            className="w-full py-4 bg-gradient-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8] text-white rounded-full font-bold text-[18px] shadow-[0_10px_30px_rgba(0,119,182,0.5)] hover:shadow-[0_15px_40px_rgba(0,119,182,0.6)] hover:scale-[1.05] active:scale-95 transition-all cursor-pointer animate-bounce duration-[2000ms]"
            aria-label="redeem 70% off"
          >
            <strong>Redeem 50% OFF</strong>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#e5e5e7] py-12 bg-white mb-10 overflow-visible">
        <div className="max-w-[650px] mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-6 overflow-visible">
          <div className="flex flex-col items-center md:items-start gap-2 overflow-visible">
            <Image
              src="/video/logo.png"
              width={400}
              height={200}
              alt="adona.ai"
              style={{ height: '200px', width: 'auto' }}
              className="h-[200px]"
              unoptimized
            />
            <p className="text-[13px] text-[#86868b]">© 2026 adona.ai. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms-of-service" className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Terms</Link>
            <Link href="/privacy-policy" className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Privacy</Link>
            <Link href="/refund-policy" className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Refund</Link>
            <Link href="mailto:support@adona.ai" className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Support</Link>
          </div>
        </div>
      </footer>

      {/* Pricing Options Modal */}
      {showPricingModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setShowPricingModal(false)}>
          <div className="max-w-[400px] w-full animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-[24px] shadow-2xl p-6 relative overflow-visible">
              {/* Close Button */}
              <button
                onClick={() => setShowPricingModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f5f5f7] hover:bg-[#e5e5e7] flex items-center justify-center transition-colors z-10"
              >
                <svg className="w-5 h-5 text-[#1d1d1f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-[20px] font-bold text-[#1d1d1f] mb-6">Pricing options</h2>

              {/* Pricing Cards */}
              <div className="space-y-4 mb-8">
                {(Object.keys(plans) as PlanType[]).map((planKey) => {
                  const plan = plans[planKey];
                  const isSelected = selectedPlan === planKey;

                  return (
                    <div key={planKey} className="relative">
                      {/* Best Value Sticker - Floating Outside */}
                      {plan.popular && (
                        <div className="absolute -top-3 -left-2 z-20">
                          <div className="bg-white border text-[#0077b6] border-[#0077b6] px-3 py-1 rounded-[8px] text-[12px] font-bold shadow-sm -rotate-6 transform">
                            Best value
                          </div>
                        </div>
                      )}

                      <button
                        onClick={() => setSelectedPlan(planKey)}
                        className={`relative w-full p-4 rounded-[16px] text-left transition-all duration-200 flex flex-col justify-center ${isSelected
                          ? 'border-2 border-[#0077b6] bg-white ring-1 ring-[#0077b6]/20'
                          : 'border border-[#e5e5e7] bg-white hover:border-[#0077b6]/50'
                          }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <div className="flex items-baseline gap-2">
                            <span className="text-gray-400 line-through text-[16px] font-medium decoration-gray-400">{plan.originalPrice}</span>
                            <span className="text-[28px] font-bold text-[#1d1d1f]">{plan.price}</span>
                            <span className="text-[14px] text-[#6e6e73] font-medium">/month</span>
                          </div>

                          {/* 70% OFF Badge */}
                          {planKey === 'monthly' && (
                            <span className="bg-[#ef4444] text-white text-[12px] font-bold px-2 py-1 rounded-[6px]">
                              70% OFF
                            </span>
                          )}
                        </div>

                        <div className="text-[14px] text-[#86868b] font-medium">{plan.label}</div>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Buy Button */}
              <button
                type="button"
                onClick={() => {
                  console.log('Buy now clicked for plan:', selectedPlan);
                  alert(`Processing payment for ${plans[selectedPlan].label} - ${plans[selectedPlan].price}/month`);
                }}
                className="w-full py-4 bg-gradient-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8] text-white rounded-full font-bold text-[18px] hover:shadow-[0_8px_25px_rgba(0,119,182,0.4)] hover:scale-[1.02] transition-all mb-6 shadow-lg shadow-[#0077b6]/20"
              >
                Buy now for {plans[selectedPlan].price}/m
              </button>

              {/* Footer Text */}
              <div className="flex items-center justify-center gap-2 text-[13px] text-[#6e6e73]">
                <span>Subscription covers your whole team</span>
                <div className="w-4 h-4 bg-[#10b981] rounded-[4px] flex items-center justify-center text-white">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPage;
