"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getBrandCompletionStatus } from '@/lib/brand-store';

export default function DashboardPage() {
  const [brandStatus, setBrandStatus] = useState({ product: false, context: false, moodboard: false, total: 0 });

  useEffect(() => {
    setBrandStatus(getBrandCompletionStatus());
  }, []);

  return (
    <>

      {/* Main Content */}
      <div className="flex flex-col items-center p-4 sm:p-5 pt-15 mt-5 w-full gap-5 relative overflow-y-auto flex-1">
        {/* Background gradient */}
        <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none bg-white overflow-hidden h-screen rounded-[20px]" aria-hidden="true">
          <Image alt="" draggable={false} width={2560} height={1440} className="w-full h-full object-cover object-top opacity-90" src="/dashboard/gradient.png.svg" />
        </div>

        <div className="flex flex-col justify-center items-center gap-5 w-full max-w-[1080px]">
          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full relative z-10 mb-5">
            {/* Start Here Card */}
            <div className="relative rounded-[20px] p-5 transition-all bg-white overflow-hidden flex flex-col h-[310px] cursor-pointer">
              <div className="flex flex-col justify-between h-full gap-5">
                <h3 className="text-[26px] font-bold text-[#03045e] mb-0">Start here</h3>
                <div className="flex flex-col gap-2.5 mb-4">
                  {/* Product */}
                  <Link href="/dashboard/dna" className={`backdrop-blur-sm rounded-[12px] transition-all cursor-pointer overflow-hidden relative hover:opacity-80 ${brandStatus.product ? 'bg-[#E8F5E8] border border-[#42A93E]/20' : 'bg-[#FBFBFB]'}`}>
                    <div className="flex relative overflow-hidden h-full gap-[10px]">
                      <div className="pointer-events-none absolute left-0 top-0 z-0">
                        <Image alt="" aria-hidden={true} width={57} height={58} className="-translate-x-1 -translate-y-1 mt-[10px] opacity-90" src="/icons/dashboard/start-here/product.svg" />
                      </div>
                      <div className="flex-1 flex items-center justify-between pt-[10px] pl-[60px] pr-[10px] pb-[10px]">
                        <div className="flex flex-col">
                          <span className="text-[16px] text-[#03045e] font-medium">Product</span>
                          <span className="text-[12px] font-medium line-clamp-1 text-[#6e6e73] tracking-[0.24px]">Define what you sell</span>
                        </div>
                        {brandStatus.product ? (
                          <Image alt="" width={20} height={20} src="/icons/checkmark-green.svg" />
                        ) : (
                          <div className="backdrop-blur-[25px] bg-white border-b border-[#e6e6e7] p-2 rounded-[30px] hover:opacity-80 transition-all cursor-pointer flex items-center justify-center">
                            <Image alt="" width={20} height={20} src="/icons/arrow-right-gray.svg" />
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                  {/* Context */}
                  <Link href="/dashboard/dna" className={`backdrop-blur-sm rounded-[12px] transition-all cursor-pointer overflow-hidden relative hover:opacity-80 ${brandStatus.context ? 'bg-[#E8F5E8] border border-[#42A93E]/20' : 'bg-[#FBFBFB]'}`}>
                    <div className="flex relative overflow-hidden h-full gap-[10px]">
                      <div className="pointer-events-none absolute left-0 top-0 z-0">
                        <Image alt="" aria-hidden={true} width={57} height={58} className="translate-x-1 -translate-y-1 mt-[10px] opacity-90" src="/icons/dashboard/start-here/context.svg" />
                      </div>
                      <div className="flex-1 flex items-center justify-between pt-[10px] pl-[60px] pr-[10px] pb-[10px]">
                        <div className="flex flex-col">
                          <span className="text-[16px] text-[#03045e] font-medium">Context</span>
                          <span className="text-[12px] font-medium line-clamp-1 text-[#6e6e73] tracking-[0.24px]">Define your brand</span>
                        </div>
                        {brandStatus.context ? (
                          <Image alt="" width={20} height={20} src="/icons/checkmark-green.svg" />
                        ) : (
                          <div className="backdrop-blur-[25px] bg-white border-b border-[#e6e6e7] p-2 rounded-[30px] hover:opacity-80 transition-all cursor-pointer flex items-center justify-center">
                            <Image alt="" width={20} height={20} src="/icons/arrow-right-gray.svg" />
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                  {/* Moodboard */}
                  <Link href="/dashboard/dna/moodboard" className={`backdrop-blur-sm rounded-[12px] transition-all cursor-pointer overflow-hidden relative hover:opacity-80 ${brandStatus.moodboard ? 'bg-[#E8F5E8] border border-[#42A93E]/20' : 'bg-[#FBFBFB]'}`}>
                    <div className="flex relative overflow-hidden h-full gap-[10px]">
                      <div className="pointer-events-none absolute left-0 top-0 z-0">
                        <Image alt="" aria-hidden={true} width={57} height={58} className="-translate-x-1 -translate-y-2 scale-[0.9] mt-[10px] opacity-90" src="/icons/dashboard/start-here/moodboard.svg" />
                      </div>
                      <div className="flex-1 flex items-center justify-between pt-[10px] pl-[60px] pr-[10px] pb-[10px]">
                        <div className="flex flex-col">
                          <span className="text-[16px] text-[#03045e] font-medium">Moodboard</span>
                          <span className="text-[12px] font-medium line-clamp-1 text-[#6e6e73] tracking-[0.24px]">Define your style</span>
                        </div>
                        {brandStatus.moodboard ? (
                          <Image alt="" width={20} height={20} src="/icons/checkmark-green.svg" />
                        ) : (
                          <div className="backdrop-blur-[25px] bg-white border-b border-[#e6e6e7] p-2 rounded-[30px] hover:opacity-80 transition-all cursor-pointer flex items-center justify-center">
                            <Image alt="" width={20} height={20} src="/icons/arrow-right-gray.svg" />
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Idea Swipe Card */}
            <div className="rounded-[20px] transition-all cursor-pointer overflow-visible">
              <div
                className="relative p-5 transition-all bg-white overflow-visible flex flex-col h-[310px] rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: "url(/dashboard/card_bgs/idea_swipe_card.png.svg)", boxShadow: "rgba(232, 232, 232, 0.376) 0px 0px 4px 1px inset" }}
              >
                {/* Popular Badge */}
                <div className="absolute top-[4px] right-[-20px] z-10" style={{ transform: "rotate(15deg)" }}>
                  <div className="flex items-center px-2 py-1 rounded-full" style={{ background: "linear-gradient(90deg, #03045e 0%, #0077b6 40%, #00b4d8 100%)", boxShadow: "rgba(0, 119, 182, 0.3) 0px 5px 10px 0px, rgb(255, 255, 255) -2px 2px 10px 0px inset" }}>
                    <svg width="18" height="18" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "-1px" }}>
                      <path d="M14.9887 4.33688L15.6919 7.83181C15.7855 8.31715 16.2314 8.87813 16.6797 9.08278L19.3281 10.2903C21.0215 11.0634 21.0912 12.4723 19.4705 13.4095L16.7324 15.0054C16.2687 15.2757 15.8786 15.932 15.8554 16.4706L15.7516 19.3266C15.6677 21.5867 14.3256 22.1101 12.755 20.4963L10.5717 18.2486C10.1774 17.8424 9.40379 17.6351 8.85056 17.7874L5.83588 18.6423C3.67747 19.2569 2.77056 18.1215 3.82564 16.131L5.16374 13.6058C5.41295 13.1277 5.40324 12.3643 5.13679 11.8984L3.56348 9.14721C2.63725 7.52759 3.39335 6.33995 5.24644 6.51711L8.14377 6.79559C8.6256 6.84016 9.29228 6.57731 9.61597 6.20376L11.9725 3.52868C13.2555 2.07831 14.6115 2.44166 14.9887 4.33688Z" fill="white" />
                    </svg>
                    <span style={{ color: "white", fontWeight: 700, fontSize: "16px", lineHeight: 1.35, marginLeft: "2px" }}>Popular</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-[26px] font-bold text-[#03045e] mb-0">Idea swipe</h3>
                    <p className="text-[16px] text-[#6E6E73] font-medium mb-4">Create branded content for every platform</p>
                  </div>
                  {/* Gradient Border Button */}
                  <div className="relative w-full">
                    <button className="w-full h-[37px] flex items-center justify-center gap-2.5 px-2 py-[7px] rounded-full transition-opacity duration-200 font-medium text-[16px] relative cursor-pointer hover:opacity-80 bg-[#FBFBFB] overflow-visible" style={{ lineHeight: "1.35em", boxShadow: "rgba(0, 119, 182, 0.15) 0px 5px 10px 0px, rgb(255, 255, 255) -2px 2px 10px 0px inset" }}>
                      <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(to right, #03045e, #0077b6, #00b4d8)", padding: "1px", pointerEvents: "none", zIndex: 0, maskImage: "linear-gradient(transparent 0%, transparent 45%, black 55%, black 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", maskComposite: "intersect", WebkitMaskComposite: "source-in" as never }}>
                        <div className="w-full h-full bg-[#FBFBFB] rounded-full" />
                      </div>
                      <div className="absolute top-0 left-0 right-0 bg-[#FBFBFB] rounded-full" style={{ height: "90%", pointerEvents: "none", zIndex: 1 }} />
                      <span className="relative z-10 flex items-center justify-center w-full bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #03045e 0%, #0077b6 50%, #00b4d8 100%)" }}>Create swipes</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Card (Moodboard / Chat / Video / Integrations) */}
            <div className="relative select-none rounded-[20px] overflow-hidden h-[310px]">
              <div className="w-full h-full overflow-auto scrollbar-hide flex flex-row snap-x snap-mandatory cursor-grab select-none" style={{ gap: 0 }}>
                {/* Slide: Moodboard */}
                <div className="flex-shrink-0 w-full snap-start snap-always">
                  <div className="w-full h-full bg-white flex flex-col group">
                    <div className="relative h-[190px] overflow-hidden rounded-b-[16px]">
                      <Image alt="Moodboard" fill className="object-cover object-bottom" src="/dashboard/card_bgs/moodboard_card.svg" />
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-4 bg-white">
                      <p className="text-[16px] font-medium text-[#6E6E73] leading-snug">
                        <span className="font-bold text-[#03045e]">Moodboard.</span> Curate your brand&apos;s visual identity
                      </p>
                      <span className="inline-flex items-center w-fit text-[14px] font-medium text-[#03045e] hover:opacity-80 transition-opacity cursor-pointer">Create moodboard →</span>
                    </div>
                  </div>
                </div>
                {/* Slide: Chat */}
                <div className="flex-shrink-0 w-full snap-start snap-always">
                  <div className="w-full h-full bg-white flex flex-col group">
                    <div className="relative h-[190px] overflow-hidden rounded-b-[16px]">
                      <Image alt="Chat with adona.ai" fill className="object-cover object-center" src="/dashboard/card_bgs/chat_card.svg" />
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-4 bg-white">
                      <p className="text-[16px] font-medium text-[#6E6E73] leading-snug">
                        <span className="font-bold text-[#03045e]">Chat with adona.ai.</span> AI-powered creative assistant
                      </p>
                      <span className="inline-flex items-center w-fit text-[14px] font-medium text-[#03045e] hover:opacity-80 transition-opacity cursor-pointer">Start chatting →</span>
                    </div>
                  </div>
                </div>
                {/* Slide: Video */}
                <div className="flex-shrink-0 w-full snap-start snap-always">
                  <div className="w-full h-full bg-white flex flex-col group">
                    <div className="relative h-[190px] overflow-hidden rounded-b-[16px]">
                      <Image alt="Video Creation" fill className="object-cover object-center" src="/dashboard/card_bgs/video_card.svg" />
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-4 bg-white">
                      <p className="text-[16px] font-medium text-[#6E6E73] leading-snug">
                        <span className="font-bold text-[#03045e]">Video Creation.</span> Clone, B-Roll &amp; Script to video
                      </p>
                      <span className="inline-flex items-center w-fit text-[14px] font-medium text-[#03045e] hover:opacity-80 transition-opacity cursor-pointer">Create video →</span>
                    </div>
                  </div>
                </div>
                {/* Slide: Integrations */}
                <div className="flex-shrink-0 w-full snap-start snap-always">
                  <div className="w-full h-full bg-white flex flex-col group">
                    <div className="relative h-[190px] overflow-hidden rounded-b-[16px]">
                      <Image alt="Integrations" fill className="object-cover object-center" src="/dashboard/card_bgs/integrations_card.svg" />
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-4 bg-white">
                      <p className="text-[16px] font-medium text-[#6E6E73] leading-snug">
                        <span className="font-bold text-[#03045e]">Integrations.</span> Link platforms like Meta and email tools to publish faster.
                      </p>
                      <span className="inline-flex items-center w-fit text-[14px] font-medium text-[#03045e] hover:opacity-80 transition-opacity cursor-pointer">Connect →</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Most Popular Section */}
          <div className="w-full relative z-30 mb-5">
            <h2 className="text-[24px] font-bold text-[#03045e] mb-5">Most popular</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              {[
                { name: "Concept", desc: "Describe your idea", bg: "/dashboard/card_bgs/concept.svg" },
                { name: "Clone", desc: "Recreate others' content", bg: "/dashboard/card_bgs/clone.svg" },
                { name: "Variations", desc: "Try something new", bg: "/dashboard/card_bgs/variations.svg" },
                { name: "Animate", desc: "Turn images into videos", bg: "/dashboard/card_bgs/animate.svg" },
              ].map((item) => (
                <div key={item.name} className="rounded-[20px] transition-all cursor-pointer hover:opacity-90">
                  <div
                    className="relative py-3.5 pr-4 transition-all bg-white h-[84px] flex flex-row justify-start items-center overflow-hidden rounded-[20px] bg-cover"
                    style={{ /* backgroundImage: `url(${item.bg})`, */ boxShadow: "rgba(232, 232, 232, 0.376) 0px 0px 4px 1px inset" }}
                  >
                    <div className="pl-[38%]">
                      <h3 className="text-[16px] font-bold text-[#03045e] mb-0">{item.name}</h3>
                      <p className="text-xs text-[#6E6E73] font-medium tracking-wide">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image / Video / Email Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { name: "Image", desc: "Create high-performing ads on demand", bg: "/dashboard/card_bgs/image_card.svg", href: "/dashboard/images" },
                { name: "Video", desc: "Create engaging video ads and stories", bg: "/dashboard/card_bgs/video_card.svg", href: "" },
                { name: "Email", desc: "Create emails that work, faster", bg: "/dashboard/card_bgs/email_card.svg", href: "" },
              ].map((item) => {
                const CardContent = (
                  <div
                    className="relative p-5 transition-all bg-white overflow-hidden flex flex-col h-[200px] rounded-[20px] bg-cover bg-center"
                    style={{ /* backgroundImage: `url(${item.bg})`, */ boxShadow: "rgba(232, 232, 232, 0.376) 0px 0px 4px 1px inset" }}
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <h3 className="text-[26px] font-bold text-[#03045e] mb-2">{item.name}</h3>
                        <p className="text-[16px] text-[#6E6E73] font-medium mb-4 max-w-[70%]">{item.desc}</p>
                      </div>
                      {/* Arrow Button with gradient border */}
                      <div className="relative w-fit px-0">
                        <button className="w-full h-[37px] flex items-center justify-center gap-2.5 px-2 py-[7px] rounded-full transition-opacity duration-200 font-medium text-[16px] relative cursor-pointer hover:opacity-80 bg-[#FBFBFB] overflow-visible" style={{ lineHeight: "1.35em", boxShadow: "rgba(0, 119, 182, 0.15) 0px 5px 10px 0px, rgb(255, 255, 255) -2px 2px 10px 0px inset" }}>
                          <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(to right, #03045e, #0077b6, #00b4d8)", padding: "1px", pointerEvents: "none", zIndex: 0, maskImage: "linear-gradient(transparent 0%, transparent 45%, black 55%, black 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", maskComposite: "intersect", WebkitMaskComposite: "source-in" as never }}>
                            <div className="w-full h-full bg-[#FBFBFB] rounded-full" />
                          </div>
                          <div className="absolute top-0 left-0 right-0 bg-[#FBFBFB] rounded-full" style={{ height: "90%", pointerEvents: "none", zIndex: 1 }} />
                          <span className="relative z-10 flex items-center justify-center w-full">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <g transform="rotate(180 10 10)">
                                <path d="M4.16699 10L16.667 9.9998" stroke="#03045e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.49967 5.83301L4.04011 9.29257C3.70678 9.6259 3.54011 9.79257 3.54011 9.99967C3.54011 10.2068 3.70678 10.3734 4.04011 10.7068L7.49967 14.1663" stroke="#03045e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <Link key={item.name} href={item.href} className="rounded-[20px] transition-all cursor-pointer h-full hover:opacity-90">
                    {CardContent}
                  </Link>
                ) : (
                  <div key={item.name} className="rounded-[20px] transition-all cursor-pointer h-full hover:opacity-90">
                    {CardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

