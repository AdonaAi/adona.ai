"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SettingsModal from '@/components/dashboard/settings-modal';
import { Home, MessageCircle, CalendarDays, FolderOpen, Dna, Sparkles, Settings, CircleHelp, Globe, Copy, ChevronsUpDown, Menu, X } from 'lucide-react';

export default function DashboardPage() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Profile/Mobile Menu Backdrop */}
      {(profileMenuOpen || mobileMenuOpen) && (
        <div
          className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
          onClick={() => {
            setProfileMenuOpen(false);
            setMobileMenuOpen(false);
          }}
        />
      )}

      <div className="bg-white text-[#03045e] min-h-screen flex transition-colors duration-300">

        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-[220px] bg-white border-r border-[#e2e8f0] flex-col shrink-0">
          <SidebarContent setProfileMenuOpen={setProfileMenuOpen} profileMenuOpen={profileMenuOpen} setSettingsOpen={setSettingsOpen} />
        </aside>

        {/* Mobile Sidebar (Drawer) */}
        <aside className={`fixed inset-y-0 left-0 z-[100] w-[260px] bg-white border-r border-[#e2e8f0] flex flex-col transition-transform duration-300 transform md:hidden ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="absolute top-4 right-4">
            <button onClick={() => setMobileMenuOpen(false)} className="p-1 hover:bg-gray-100 rounded-md">
              <X size={20} className="text-[#03045e]" />
            </button>
          </div>
          <SidebarContent setProfileMenuOpen={setProfileMenuOpen} profileMenuOpen={profileMenuOpen} setSettingsOpen={setSettingsOpen} />
        </aside>

        <main className="flex-1 flex flex-col relative overflow-hidden bg-white">
          {/* Header Bar */}
          <div className="w-full relative overflow-hidden h-auto min-h-[56px] rounded-3xl" style={{ background: "#FBFBFB" }}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center h-full px-4 gap-3 py-[10px] rounded-2xl">

              {/* Mobile Menu Button - Top Row on Mobile */}
              <div className="flex w-full sm:w-auto justify-between items-center sm:hidden">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-2 -ml-2 text-[#03045e] hover:bg-gray-100 rounded-lg"
                >
                  <Menu size={24} />
                </button>
                {/* Optional: Add Logo here if needed for mobile header */}
              </div>

              {/* Desktop Menu Button (Hidden on Mobile, visible if needed logic changes) - actually keeping previous logic but moved out of flex-col flow if needed */}
              {/* Since we have a flex-col, the Menu button is now inside the top row div above. */}

              <div className="flex items-center gap-2.5 px-2.5 p-0.5 bg-[#caf0f8] rounded-full w-full sm:w-auto">
                <span className="text-[#0077b6] tracking-[0.02em] mt-1">
                  <span className="inline-flex items-center gap-1 text-[16px] font-medium whitespace-nowrap">
                    <Image alt="Fire" width={20} height={20} src="/fireIcon.svg" />
                    Start your streak!
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-5 flex-1 justify-between sm:justify-center w-full sm:w-auto flex-wrap">
                <span className="hidden lg:inline text-[16px] font-medium text-[#03045e] tracking-[0.02em]">
                  adona.ai <span className="font-bold">improves</span> with every piece <span className="font-bold">created:</span>
                </span>
                {/* Progress Bar */}
                <div className="relative w-full sm:w-[225px] h-2.5 rounded-full border border-white flex-1 sm:flex-none">
                  <div className="absolute inset-0 flex">
                    {[
                      { bg: "rgba(3, 4, 94, 0.1)", fill: "#03045e" },
                      { bg: "rgba(0, 119, 182, 0.1)", fill: "#0077b6" },
                      { bg: "rgba(0, 180, 216, 0.1)", fill: "#00b4d8" },
                      { bg: "rgba(144, 224, 239, 0.15)", fill: "#90e0ef" },
                      { bg: "rgba(202, 240, 248, 0.2)", fill: "#caf0f8" },
                    ].map((seg, i) => (
                      <div key={i} className="relative flex-1">
                        <div className="absolute inset-0 backdrop-blur-[10px]" style={{ backgroundColor: seg.bg, boxShadow: "rgb(255,255,255) 1px -1px 5px 0px inset, rgb(255,255,255) -2px 2px 5px 0px inset" }} />
                        <div className="absolute inset-0 backdrop-blur-[10px] transition-[width] duration-300" style={{ width: "0%", backgroundColor: seg.fill, boxShadow: "rgb(255,255,255) 1px -1px 5px 0px inset, rgb(255,255,255) -2px 2px 5px 0px inset" }} />
                      </div>
                    ))}
                  </div>
                </div>
                <span className="text-xs font-medium text-[#03045e] tracking-[0.02em]"><span className="font-bold">0</span>/25</span>
              </div>

              <div className="flex items-center gap-2.5 px-2.5 py-[7px] rounded-full whitespace-nowrap bg-[#caf0f8]/40 border border-[#90e0ef]/30 w-full sm:w-auto justify-center sm:justify-start">
                <span className="text-md font-medium tracking-[0.02em] text-[#0077b6]">Starter 🌱</span>
              </div>
            </div>
          </div>

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
                      <div className="backdrop-blur-sm rounded-[12px] transition-all cursor-pointer overflow-hidden relative bg-[#FBFBFB] hover:opacity-80">
                        <div className="flex relative overflow-hidden h-full gap-[10px]">
                          <div className="pointer-events-none absolute left-0 top-0 z-0">
                            <Image alt="" aria-hidden={true} width={57} height={58} className="-translate-x-1 -translate-y-1 mt-[10px] opacity-90" src="/icons/dashboard/start-here/product.svg" />
                          </div>
                          <div className="flex-1 flex items-center justify-between pt-[10px] pl-[60px] pr-[10px] pb-[10px]">
                            <div className="flex flex-col">
                              <span className="text-[16px] text-[#03045e] font-medium">Product</span>
                              <span className="text-[12px] font-medium line-clamp-1 text-[#6e6e73] tracking-[0.24px]">Define what you sell</span>
                            </div>
                            <button className="backdrop-blur-[25px] bg-white border-b border-[#e6e6e7] p-2 rounded-[30px] hover:opacity-80 transition-all cursor-pointer flex items-center justify-center">
                              <Image alt="" width={20} height={20} src="/icons/arrow-right-gray.svg" />
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Context (completed) */}
                      <div className="backdrop-blur-sm rounded-[12px] transition-all cursor-pointer overflow-hidden relative bg-[#E8F5E8] border border-[#42A93E]/20">
                        <div className="flex relative overflow-hidden h-full gap-[10px]">
                          <div className="pointer-events-none absolute left-0 top-0 z-0">
                            <Image alt="" aria-hidden={true} width={57} height={58} className="translate-x-1 -translate-y-1 mt-[10px] opacity-90" src="/icons/dashboard/start-here/context.svg" />
                          </div>
                          <div className="flex-1 flex items-center justify-between pt-[10px] pl-[60px] pr-[10px] pb-[10px]">
                            <div className="flex flex-col">
                              <span className="text-[16px] text-[#03045e] font-medium">Context</span>
                              <span className="text-[12px] font-medium line-clamp-1 text-[#6e6e73] tracking-[0.24px]">Define your brand</span>
                            </div>
                            <Image alt="" width={20} height={20} src="/icons/checkmark-green.svg" />
                          </div>
                        </div>
                      </div>
                      {/* Moodboard */}
                      <div className="backdrop-blur-sm rounded-[12px] transition-all cursor-pointer overflow-hidden relative bg-[#FBFBFB] hover:opacity-80">
                        <div className="flex relative overflow-hidden h-full gap-[10px]">
                          <div className="pointer-events-none absolute left-0 top-0 z-0">
                            <Image alt="" aria-hidden={true} width={57} height={58} className="-translate-x-1 -translate-y-2 scale-[0.9] mt-[10px] opacity-90" src="/icons/dashboard/start-here/moodboard.svg" />
                          </div>
                          <div className="flex-1 flex items-center justify-between pt-[10px] pl-[60px] pr-[10px] pb-[10px]">
                            <div className="flex flex-col">
                              <span className="text-[16px] text-[#03045e] font-medium">Moodboard</span>
                              <span className="text-[12px] font-medium line-clamp-1 text-[#6e6e73] tracking-[0.24px]">Define your style</span>
                            </div>
                            <button className="backdrop-blur-[25px] bg-white border-b border-[#e6e6e7] p-2 rounded-[30px] hover:opacity-80 transition-all cursor-pointer flex items-center justify-center">
                              <Image alt="" width={20} height={20} src="/icons/arrow-right-gray.svg" />
                            </button>
                          </div>
                        </div>
                      </div>
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
                        style={{ backgroundImage: `url(${item.bg})`, boxShadow: "rgba(232, 232, 232, 0.376) 0px 0px 4px 1px inset" }}
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
                    { name: "Image", desc: "Create high-performing ads on demand", bg: "/dashboard/card_bgs/image_card.svg" },
                    { name: "Video", desc: "Create engaging video ads and stories", bg: "/dashboard/card_bgs/video_card.svg" },
                    { name: "Email", desc: "Create emails that work, faster", bg: "/dashboard/card_bgs/email_card.svg" },
                  ].map((item) => (
                    <div key={item.name} className="rounded-[20px] transition-all cursor-pointer h-full hover:opacity-90">
                      <div
                        className="relative p-5 transition-all bg-white overflow-hidden flex flex-col h-[200px] rounded-[20px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.bg})`, boxShadow: "rgba(232, 232, 232, 0.376) 0px 0px 4px 1px inset" }}
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
}

// Extracted Sidebar Content Component for reuse in Desktop and Mobile Sidebars
function SidebarContent({ setProfileMenuOpen, profileMenuOpen, setSettingsOpen }: any) {
  return (
    <>
      <div className="p-6 pb-2">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[18px] font-extrabold tracking-tight text-[#03045e]">adona.ai</span>
        </Link>
      </div>
      <div className="px-3 pt-4 space-y-6 flex-1 text-left">
        <div>
          <p className="px-3 text-[11px] font-semibold text-[#0077b6]/60 uppercase tracking-[0.15em] mb-2">Workspace</p>
          <nav className="space-y-0.5">
            <Link className="flex items-center gap-3 px-3 py-2.5 bg-gradient-to-r from-[#caf0f8]/60 to-transparent text-[#03045e] font-semibold rounded-xl transition-all" href="/dashboard">
              <Home size={18} strokeWidth={2} className="text-[#0077b6]" />
              <span className="text-[14px]">Home</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 text-[#666666] hover:text-[#03045e] hover:bg-[#caf0f8]/30 rounded-xl transition-all group" href="/dashboard/chat">
              <MessageCircle size={18} strokeWidth={1.8} className="text-[#666666] group-hover:text-[#0077b6]" />
              <span className="text-[14px]">Chat</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 text-[#666666] hover:text-[#03045e] hover:bg-[#caf0f8]/30 rounded-xl transition-all group" href="/dashboard/calendar">
              <CalendarDays size={18} strokeWidth={1.8} className="text-[#666666] group-hover:text-[#0077b6]" />
              <span className="text-[14px]">Calendar</span>
            </Link>
          </nav>
        </div>
        <div>
          <p className="px-3 text-[11px] font-semibold text-[#0077b6]/60 uppercase tracking-[0.15em] mb-2">Assets</p>
          <nav className="space-y-0.5">
            <Link className="flex items-center gap-3 px-3 py-2.5 text-[#666666] hover:text-[#03045e] hover:bg-[#caf0f8]/30 rounded-xl transition-all group" href="/dashboard/library">
              <FolderOpen size={18} strokeWidth={1.8} className="text-[#666666] group-hover:text-[#0077b6]" />
              <span className="text-[14px]">Library</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 text-[#666666] hover:text-[#03045e] hover:bg-[#caf0f8]/30 rounded-xl transition-all group" href="/dashboard/dna">
              <Dna size={18} strokeWidth={1.8} className="text-[#666666] group-hover:text-[#0077b6]" />
              <span className="text-[14px]">DNA</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 text-[#666666] hover:text-[#03045e] hover:bg-[#caf0f8]/30 rounded-xl transition-all group" href="/dashboard/inspo">
              <Sparkles size={18} strokeWidth={1.8} className="text-[#666666] group-hover:text-[#0077b6]" />
              <span className="text-[14px]">Inspo</span>
            </Link>
          </nav>
        </div>
      </div>
      <div className="p-3 space-y-3 mt-auto">
        <div className="flex items-center gap-3 p-2.5 bg-[#caf0f8]/40 rounded-xl border border-[#90e0ef]/30">
          <div className="w-9 h-9 bg-gradient-to-br from-[#0077b6] to-[#00b4d8] rounded-lg flex items-center justify-center">
            <img alt="Mascot Avatar" className="w-7 h-7 object-contain rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkm7Psj4rCW0cvmKaKYUyeS63mlGQYakavCj643F-mYIpPnz41c8oAcmiXZdjxNml8gSZiknuA_YIPln4IdVViX6M9FdFanBVUU0a0B8PYRXYMB00b9cr-kM6a41MqQ89STyUIcv6v_cJLLOLZB_gdQl3sPDwMEtqTeFyJxYNHGLPDnCDq0dXcdFB_Cw7NKmAaJGor6C-M2N-LHMuYFzd-C-VK-roC9NloL9JdZ5ND7XBfw4HByPOcXLEuhovcqLMk2Gc6vwtaR_b4" />
          </div>
          <div className="text-xs">
            <p className="text-[#03045e] font-semibold">Mascot Helper</p>
            <p className="text-[#0077b6]/60">Ready to help</p>
          </div>
        </div>
        <div className="relative">
          <div
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="flex items-center justify-between p-2.5 bg-[#f8fafc] hover:bg-[#caf0f8]/30 border border-[#e2e8f0] rounded-xl cursor-pointer transition-all"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center text-white text-[13px] font-bold">
                R
              </div>
              <span className="text-[13px] font-semibold text-[#03045e]">roseskin</span>
            </div>
            <ChevronsUpDown size={16} className={`text-[#666666] transition-transform duration-200 ${profileMenuOpen ? 'rotate-180' : ''}`} />
          </div>

          {/* Profile Dropdown Menu */}
          {profileMenuOpen && (
            <div className="absolute bottom-full left-0 mb-2 w-[240px] bg-white rounded-2xl shadow-[0px_4px_40px_0px_rgba(3,4,94,0.12)] border border-[#e2e8f0] py-2 z-[100]">
              {/* Account */}
              <p className="px-4 pt-2 pb-1 text-[11px] font-semibold text-[#0077b6]/60 uppercase tracking-wider">Account</p>
              <button
                onClick={() => { setProfileMenuOpen(false); setSettingsOpen(true); }}
                className="flex items-center gap-2.5 w-full px-4 py-2 hover:bg-[#caf0f8]/30 transition-colors cursor-pointer"
              >
                <Settings size={16} strokeWidth={1.8} className="text-[#03045e]" />
                <span className="text-[14px] font-medium text-[#03045e]">Settings</span>
              </button>

              {/* Support */}
              <div className="border-t border-[#e2e8f0] my-1" />
              <p className="px-4 pt-2 pb-1 text-[11px] font-semibold text-[#0077b6]/60 uppercase tracking-wider">Support</p>
              <button className="flex items-center gap-2.5 w-full px-4 py-2 hover:bg-[#caf0f8]/30 transition-colors cursor-pointer">
                <CircleHelp size={16} strokeWidth={1.8} className="text-[#03045e]" />
                <span className="text-[14px] font-medium text-[#03045e]">Help Center</span>
              </button>

              {/* Recent accounts */}
              <div className="border-t border-[#e2e8f0] my-1" />
              <p className="px-4 pt-2 pb-1 text-[11px] font-semibold text-[#0077b6]/60 uppercase tracking-wider">Recent accounts</p>
              <button className="flex items-center gap-2.5 w-full px-4 py-2 hover:bg-[#caf0f8]/30 transition-colors cursor-pointer">
                <div className="w-5 h-5 rounded-full bg-[#caf0f8] flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-[#0077b6]">A</span>
                </div>
                <span className="text-[14px] font-medium text-[#03045e]">ai products</span>
              </button>
              <button className="flex items-center gap-2.5 w-full px-4 py-2 hover:bg-[#caf0f8]/30 transition-colors cursor-pointer">
                <Globe size={16} strokeWidth={1.8} className="text-[#0077b6]" />
                <span className="text-[14px] font-medium text-[#03045e]">Add new</span>
              </button>

              {/* Current user footer */}
              <div className="border-t border-[#e2e8f0] mt-1" />
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center shrink-0">
                    <span className="text-[13px] font-bold text-white">R</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-medium text-[#03045e]">roseskin</span>
                    <span className="text-[11px] text-[#666666] truncate max-w-[120px]">crystalskinco@gmail...</span>
                  </div>
                </div>
                <button className="w-6 h-6 flex items-center justify-center hover:bg-[#caf0f8]/40 rounded-md transition-colors cursor-pointer">
                  <Copy size={14} className="text-[#666666]" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
