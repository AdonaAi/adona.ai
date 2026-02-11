"use client";

import React from "react";
import Link from "next/link";

export default function DashboardGrid() {
  return (
    <div className="flex flex-col items-center p-5 pt-10 w-full gap-8 relative pb-20">
      {/* Background Gradient */}
      <div
        className="absolute top-0 left-0 right-0 z-0 pointer-events-none overflow-hidden h-[800px] rounded-[20px]"
        aria-hidden="true"
        style={{
          background: "linear-gradient(180deg, rgba(202, 240, 248, 0.3) 0%, rgba(144, 224, 239, 0.2) 25%, rgba(0, 180, 216, 0.1) 50%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      <div className="flex flex-col justify-center items-start gap-8 w-full max-w-[1080px] relative z-10">
        {/* Top 3 Cards */}
        <div className="grid grid-cols-3 gap-5 w-full">
          <StartHereCard />
          <IdeaSwipeCard />
          <MoodboardCard />
        </div>

        {/* Most Popular Section */}
        <div className="w-full">
          <h2 className="text-[26px] font-bold text-[#03045e] mb-5">Most popular</h2>
          <div className="grid grid-cols-4 gap-5">
            <PopularCard
              title="Concept"
              description="Describe your idea"
              bgImage="/dashboard/card_bgs/concept.png"
            />
            <PopularCard
              title="Clone"
              description="Recreate others' content"
              bgImage="/dashboard/card_bgs/clone.png"
            />
            <PopularCard
              title="Variations"
              description="Try something new"
              bgImage="/dashboard/card_bgs/variations.png"
            />
            <PopularCard
              title="Animate"
              description="Turn images into videos"
              bgImage="/dashboard/card_bgs/animate.png"
            />
          </div>
        </div>

        {/* Large Cards Section */}
        <div className="grid grid-cols-3 gap-5 w-full">
          <LargeCard
            title="Image"
            description="Create high-performing ads on demand"
            bgImage="/dashboard/card_bgs/image_card.png"
            href="/dashboard/image"
          />
          <LargeCard
            title="Video"
            description="Create engaging video ads and stories"
            bgImage="/dashboard/card_bgs/video_card.png"
            href="/dashboard/video"
          />
          <LargeCard
            title="Email"
            description="Create emails that work, faster"
            bgImage="/dashboard/card_bgs/email_card.png"
            href="/dashboard/email"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

/*
 * Adona.ai Vibrant Blue Glass Dashboard — Next.js Page
 *
 * SETUP INSTRUCTIONS:
 * 1. Install dependencies:
 *    npx create-next-app@latest adona-dashboard --tailwind --app
 *    cd adona-dashboard
 *
 * 2. Add Google Fonts in app/layout.js:
 *    import { Manrope } from "next/font/google";
 *    const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
 *    ...className={`${manrope.variable} ...`}
 *
 * 3. Add to tailwind.config.js under theme.extend:
 *    colors: {
 *      "vibrant-blue": "#2563EB",
 *      "deep-blue": "#1E40AF",
 *      "glass-bg": "rgba(255, 255, 255, 0.12)",
 *    },
 *    fontFamily: {
 *      display: ["var(--font-manrope)", "sans-serif"],
 *    },
 *
 * 4. Add Material Symbols to app/layout.js <head>:
 *    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
 *
 * 5. Replace app/page.js with this file.
 */

const sidebarNavItems = [
  { icon: "dashboard", label: "Home", active: true },
  { icon: "bolt", label: "Chat", active: false },
  { icon: "event_repeat", label: "Plan", active: false },
  { icon: "auto_stories", label: "Library", active: false },
  { icon: "experiment", label: "DNA", active: false },
  { icon: "flare", label: "Inspo", active: false },
];

const fastActions = [
  { icon: "auto_fix_high", title: "Concept", subtitle: "Ideate fast" },
  { icon: "dynamic_feed", title: "Clone", subtitle: "Match style" },
  { icon: "layers", title: "Variations", subtitle: "New takes" },
  { icon: "play_circle", title: "Animate", subtitle: "Motion art" },
];

const mediaCards = [
  {
    icon: "photo_library",
    title: "Image",
    subtitle: "High-fidelity visuals",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgmQUx6SneoZ3aFozUPJMY6MVWx_zhjYd-SdtXQuQI39faauiytRDqxIow3KI2vJCPKXirAs4q8JIQXu5SicCM4o2SRXL0TFxndDAui9MaHn5vWptUaFrJyAifK8e4lkuBFb7ZpJsNz5RowKF0ZeaLxOiqIsBUX6rDQUy1JH2jjC59R1tcGSv_5jR-yhg3t6CX2WRGS_BpqFYpVTH2YpDRN8hHX9Y1B_DfLCo6pibrJqH5m8RE4WxSahwJ1sbkSwsf8DRdM-RmISCV",
  },
  {
    icon: "video_stable",
    title: "Video",
    subtitle: "Cinematic motion",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYKIUtiSpaa3WsN8lTYonPIkdEtZ2-jx_pW_4TQ5Lu4BHw-dyD01Y9YBs3sNYC8tcOGCfnZWWBv-11KWq8BW5aHgEqIz-Wv-gg6RGW2YD7Qkj0rf2lXWldgOtTLB8ACtuxMA78HE059Znp3RltimIgQINKZ2aWlbO6CtXUpv4EklfVsjy9bGvdyo5KLTtYuKG6w5pFXBf4b1kAGshRI7UIVQrN7m_XCW19dvWFJQJ3VTnFCSNvBHbO-NuWBNyokjcnl8g6oyecbffX",
  },
  {
    icon: "alternate_email",
    title: "Email",
    subtitle: "Copy & design",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWqpsMwf6zcpT-nbVUcgVedSOOuS5ohVCl9sIbiQ5GRZKxtu-el_dOLi2Mhl0cZLHcubpH0lvCSzoHX7clLU4eclLbFP6ypXMu-AVb7n53OycxgJpAnpMMlxGsT5TAi15a7Guf8MpMFqUeYJRA4GJ1EuttKv6QWxS7iqNvtbCmLdVHrmwMr_hyJwWYttY2ysGj1BQS68z6WhgpjM4noaasAdsfRL0-xNGI3qKPUvQmXXneh38wiv1upKEx7roCkjp1KT9btN4rH1nC",
  },
];

export default function AdonaDashboard() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      {/* Inline critical styles for glass effects */}
      <style jsx global>{`
        body {
          font-family: var(--font-manrope, "Manrope", sans-serif);
          color: white;
          -webkit-font-smoothing: antialiased;
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
          background-attachment: fixed;
          margin: 0;
          padding: 0;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 32px 0 rgba(0, 31, 63, 0.2);
        }
        .glass-card:hover {
          border-color: rgba(255, 255, 255, 0.45);
          background: rgba(255, 255, 255, 0.18);
        }
        .glass-sidebar {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border-right: 1px solid rgba(255, 255, 255, 0.15);
        }
        .glow-blob {
          position: fixed;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          filter: blur(100px);
          z-index: -1;
          opacity: 0.3;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
      `}</style>

      <div className="min-h-screen overflow-x-hidden">
        {/* Glow Blobs */}
        <div className="glow-blob bg-blue-300" style={{ top: "-10%", left: "-10%" }} />
        <div className="glow-blob bg-sky-400" style={{ bottom: "-10%", right: "-10%" }} />
        <div className="glow-blob bg-indigo-500 opacity-20" style={{ top: "20%", right: "10%" }} />

        <div className="flex h-screen w-full overflow-hidden">
          {/* ───────────────── Sidebar ───────────────── */}
          <aside className="glass-sidebar w-24 flex flex-col items-center py-8 gap-10 shrink-0">
            {/* Logo */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white rounded-xl p-2.5" style={{ boxShadow: "0 0 25px rgba(255,255,255,0.4)" }}>
                <span className="material-symbols-outlined text-3xl font-bold" style={{ color: "#2563EB" }}>
                  bubble_chart
                </span>
              </div>
              <span className="text-[10px] font-black text-white tracking-tighter uppercase">adona.ai</span>
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-8">
              {sidebarNavItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex flex-col items-center gap-1 group cursor-pointer transition-all ${
                    item.active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </nav>

            {/* Bottom */}
            <div className="mt-auto flex flex-col gap-6 items-center">
              <div className="flex flex-col items-center gap-1 group cursor-pointer text-white/60 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[28px]">settings_heart</span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 overflow-hidden border-2 border-white/40 hover:border-white transition-all cursor-pointer shadow-lg">
                <img
                  alt="User profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEz2taSM6s3fJ9LHDUJC2a_NyllH-itGA-mp4IPTb4YNpdhZUuWketwPC_RPOLc2cqPZe7WDRP6ysWvDwBlwxB0stdGL2qAbOY_OClFursyL0wCs8AVinjGKyNQ4_xz1dTmfdP0hFxfE0Y6AOaDL2zBOFNzHs00n9MOjrm4S_JgkL23aYITDNrrvYAwXQq7yjhao4lORnulQWsYYLU3JugY_58IZuClFbJ7JtxMAcVE45-a74DXlA7zMPkAAeLWDLaIy9ER06019kR"
                />
              </div>
            </div>
          </aside>

          {/* ───────────────── Main Content ───────────────── */}
          <main className="flex-1 flex flex-col overflow-y-auto p-10 relative custom-scrollbar">
            {/* Streak Progress */}
            <div className="mb-10 w-full">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-1.5 rounded-lg border border-white/30">
                    <span className="material-symbols-outlined text-white leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                      local_fire_department
                    </span>
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">Start your streak!</h2>
                </div>
                <span className="text-sm font-semibold text-white">65% complete</span>
              </div>
              <div className="bg-white/10 h-3.5 rounded-full w-full overflow-hidden border border-white/20 p-0.5">
                <div
                  className="h-full bg-white rounded-full transition-all"
                  style={{ width: "65%", boxShadow: "0 0 15px rgba(255,255,255,0.6)" }}
                />
              </div>
              <p className="text-xs text-white/80 mt-3 font-medium uppercase tracking-widest">
                adona.ai improves with every piece created: Complete 3 more tasks to unlock advanced styles.
              </p>
            </div>

            {/* ───── Grid ───── */}
            <div className="grid grid-cols-12 gap-6" style={{ gridAutoRows: "180px" }}>
              {/* Getting Started Card */}
              <div className="col-span-12 md:col-span-5 row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-white/20 transition-all duration-700" />
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-white text-xl">rocket_launch</span>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Getting Started</span>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-6 tracking-tight">Start here</h3>
                  <ul className="space-y-5">
                    <li className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-white text-2xl">task_alt</span>
                      <span className="text-white font-medium">Define Product</span>
                    </li>
                    <li className="flex items-center gap-4 opacity-60">
                      <span className="material-symbols-outlined text-white text-2xl">radio_button_unchecked</span>
                      <span className="text-white font-medium">Project Context</span>
                    </li>
                    <li className="flex items-center gap-4 opacity-60">
                      <span className="material-symbols-outlined text-white text-2xl">radio_button_unchecked</span>
                      <span className="text-white font-medium">Visual Moodboard</span>
                    </li>
                  </ul>
                </div>
                <button
                  className="bg-white font-extrabold py-4 rounded-2xl hover:bg-sky-50 transition-all"
                  style={{ color: "#2563EB", boxShadow: "0 10px 30px rgba(255,255,255,0.2)" }}
                >
                  Initialize Workflow
                </button>
              </div>

              {/* Idea Swipe Card */}
              <div className="col-span-12 md:col-span-7 row-span-1 glass-card rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to right, rgba(30,64,175,0.8), rgba(30,64,175,0.4), transparent)" }} />
                  <img
                    alt="Inspiration"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASPqLtUlbriJz9uatvXJ6QbMs_Kxsz5I0yZKkPb9hRGDhbX8N_3p8VmU-im2jmAc7TZXyE6qiZlVCewlYPJAQHDJDs9HDMQqHWqfjYLzHABjZbyRpusrEN9HD-34luYvfQybuOX3bLpn2lw7fv8JYtvhP3ZzJUmJDSITf1eAoApxZ9wxzZBAS5W_VelWvg32vVRo2o8osLN2DRVMD6kwnZ3sZY9lM4orddpfjayJ921QJozLcCbM0bzyKxf5eidomFZP8aG0N8CUBq"
                  />
                </div>
                <div className="relative z-20 h-full flex flex-col justify-between">
                  <div>
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest uppercase mb-3 inline-block border border-white/40">
                      Popular
                    </span>
                    <h3 className="text-3xl font-extrabold tracking-tight">Idea swipe</h3>
                  </div>
                  <p className="text-base text-white font-medium">Browse curated creative direction trends</p>
                </div>
              </div>

              {/* Chat with adona.ai Card */}
              <div className="col-span-12 md:col-span-7 row-span-1 glass-card rounded-3xl p-8 flex items-center justify-between group">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1 tracking-tight">Chat with adona.ai</h3>
                  <p className="text-base text-white/70 mb-6 font-medium">Your premium creative intelligence</p>
                  <div className="flex gap-3">
                    <span className="text-[11px] font-bold bg-white/10 px-4 py-1.5 rounded-full text-white border border-white/20 tracking-widest uppercase">
                      Strategy
                    </span>
                    <span className="text-[11px] font-bold bg-white/10 px-4 py-1.5 rounded-full text-white border border-white/20 tracking-widest uppercase">
                      Writing
                    </span>
                  </div>
                </div>
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-75 group-hover:scale-110 transition-transform" />
                  <img
                    alt="Adona mascot"
                    className="w-full h-full object-contain relative z-10 group-hover:-translate-y-2 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSWNY877COgnGpuF6gWsdW_bSMEwzzp2utpfE-UGIq_YWjGk7r-dLnow6IyxLjFvcaEQmQnmUFMWq-xrBrGUw_RoRfbueY6TDxP2spynyajytFd6CMXRY90C9B9Ttxt5Om00BEqv2oBa2MPGA9kzRhrweK9ohLmzV7gOdLecMGKhwk0fYQuITWZ4T6ijeR_R-pQm9NntcXWtxWTwavvnq12Mgg-TbY95OmuSokhqKpYQ0mZc9VobAqClatf1tFRCnKmf7KHcm8c0-6"
                  />
                  <div
                    className="absolute bottom-2 right-2 w-5 h-5 bg-green-400 rounded-full border-4"
                    style={{ borderColor: "#2563EB", boxShadow: "0 0 15px rgba(74,222,128,0.5)" }}
                  />
                </div>
              </div>

              {/* Fast Actions */}
              <div className="col-span-12 mt-6">
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/60 mb-6">Fast Actions</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {fastActions.map((action) => (
                    <div
                      key={action.title}
                      className="glass-card rounded-2xl p-6 flex flex-col gap-4 cursor-pointer hover:-translate-y-1 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/30">
                        <span className="material-symbols-outlined text-white text-2xl">{action.icon}</span>
                      </div>
                      <div>
                        <p className="text-lg font-bold">{action.title}</p>
                        <p className="text-xs text-white/70 font-medium">{action.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Media Cards (Image / Video / Email) */}
              {mediaCards.map((card) => (
                <div
                  key={card.title}
                  className="col-span-12 md:col-span-4 row-span-2 rounded-3xl relative overflow-hidden group glass-card"
                >
                  <img
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                    src={card.img}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, #1E40AF, rgba(30,64,175,0.2), transparent)" }}
                  />
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="bg-white/20 backdrop-blur-xl border border-white/40 text-white p-3 rounded-2xl mb-4 inline-block shadow-xl">
                      <span className="material-symbols-outlined block text-3xl">{card.icon}</span>
                    </div>
                    <h4 className="text-3xl font-black mb-2 tracking-tight">{card.title}</h4>
                    <p className="text-base text-white/90 font-medium">{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom spacer */}
            <div className="h-40 shrink-0" />
          </main>

          {/* ───────────────── Floating Search Bar ───────────────── */}
          <div
            className="fixed bottom-10 w-full max-w-2xl px-6 z-50"
            style={{ left: "calc(50% + 48px)", transform: "translateX(-50%)" }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white via-sky-300 to-blue-200 rounded-3xl blur-md opacity-25 group-hover:opacity-60 transition duration-700" />
              <div className="relative bg-white/20 border border-white/40 rounded-2xl px-8 py-5 flex items-center gap-5 shadow-2xl" style={{ backdropFilter: "blur(60px)", WebkitBackdropFilter: "blur(60px)" }}>
                <span className="material-symbols-outlined text-white text-3xl font-bold">magic_button</span>
                <input
                  className="bg-transparent border-none outline-none text-white placeholder-white/60 flex-1 text-xl font-medium"
                  style={{ boxShadow: "none" }}
                  placeholder="What would you like to create?"
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 bg-white/20 rounded-lg border border-white/30 text-xs text-white font-bold tracking-widest font-mono">
                    ⌘ K
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function IdeaSwipeCard() {
  return (
    <Link href="/dashboard/idea-swipe">
      <div className="rounded-[20px] cursor-pointer overflow-hidden h-[310px] relative group shadow-[0_0_0_1px_rgba(226,232,240,0.5)] hover:shadow-lg transition-all">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/dashboard/card_bgs/idea_swipe_card.png.svg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Popular Badge */}
        <div className="absolute top-[4px] right-[-20px] z-20" style={{ transform: "rotate(15deg)" }}>
          <div
            className="flex items-center px-2.5 py-1.5 rounded-full shadow-lg"
            style={{
              background: "linear-gradient(90deg, #03045e 0%, #0077b6 25%, #00b4d8 50%, #90e0ef 75%, #caf0f8 100%)",
              boxShadow: "0px 5px 15px rgba(0, 119, 182, 0.3), inset -2px 2px 10px rgba(255, 255, 255, 0.3)",
            }}
          >
            <img
              src="/fireIcon.svg"
              alt="Fire"
              className="w-4 h-4"
            />
            <span className="text-white font-bold text-[14px] ml-1">Popular</span>
          </div>
        </div>

        <div className="relative p-5 flex flex-col h-full justify-between bg-white/60 backdrop-blur-sm">
          <div>
            <h3 className="text-[26px] font-bold text-[#03045e] mb-2">Idea swipe</h3>
            <p className="text-[16px] text-[#666666] font-medium">Create branded content for every platform</p>
          </div>
          <div className="relative w-full">
            <button
              className="w-full h-[40px] flex items-center justify-center px-4 py-2 rounded-full font-medium text-[16px] relative cursor-pointer hover:opacity-90 transition-all"
              style={{
                background: "white",
                boxShadow: "0px 2px 8px rgba(0, 119, 182, 0.15), inset -1px 1px 5px rgba(255, 255, 255, 0.8)",
              }}
            >
              <span
                className="bg-clip-text text-transparent font-semibold"
                style={{
                  backgroundImage: "linear-gradient(90deg, #03045e 0%, #0077b6 40%, #00b4d8 70%, #90e0ef 100%)",
                }}
              >
                Create swipes
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

function MoodboardCard() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    {
      title: "Moodboard",
      description: "Curate your brand's visual identity",
      bgImage: "/dashboard/card_bgs/moodboard_card.png",
      buttonText: "Create moodboard",
      href: "/dashboard/moodboard",
    },
    {
      title: "Chat",
      description: "Collaborate with your AI creative assistant",
      bgImage: "/dashboard/card_bgs/chat_card.png",
      buttonText: "Start chatting",
      href: "/dashboard/chat",
    },
    {
      title: "Video Creation",
      description: "Transform ideas into engaging video content",
      bgImage: "/dashboard/card_bgs/video_card.png",
      buttonText: "Create video",
      href: "/dashboard/video",
    },
    {
      title: "Integrations",
      description: "Connect your favorite tools seamlessly",
      bgImage: "/dashboard/card_bgs/integrations_card.png",
      buttonText: "View integrations",
      href: "/dashboard/integrations",
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative rounded-[20px] overflow-hidden h-[310px] bg-white shadow-[0_0_0_1px_rgba(226,232,240,0.5)] hover:shadow-lg transition-all group">
      {/* Slider Container */}
      <div className="relative h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full flex flex-col">
              <div className="relative h-[190px] overflow-hidden">
                <img
                  src={slide.bgImage}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-[120px] pb-8">
                <p className="text-[16px] font-medium text-[#666666] leading-snug">
                  <span className="font-bold text-[#03045e]">{slide.title}.</span> {slide.description}
                </p>
                <Link href={slide.href}>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                    {slide.buttonText} →
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentSlide ? "w-6 bg-[#0077b6]" : "w-1.5 bg-[#e2e8f0]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function PopularCard({ title, description, bgImage }: { title: string; description: string; bgImage: string }) {
  return (
    <div className="relative rounded-[16px] p-4 bg-white shadow-[0_0_0_1px_rgba(226,232,240,0.5)] hover:shadow-lg transition-all cursor-pointer group h-[140px] flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative flex flex-col h-full justify-between">
        <div className="flex-1">
          <h4 className="text-[18px] font-bold text-[#03045e] mb-1">{title}</h4>
          <p className="text-[13px] text-[#666666] font-medium">{description}</p>
        </div>
        <div className="flex justify-end">
          <div className="w-8 h-8 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center group-hover:bg-[#0077b6] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white transition-colors" stroke="#666666">
              <path d="M6 4L10 8L6 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LargeCard({ title, description, bgImage, href }: { title: string; description: string; bgImage: string; href: string }) {
  return (
    <Link href={href}>
      <div className="relative rounded-[20px] p-6 bg-white shadow-[0_0_0_1px_rgba(226,232,240,0.5)] hover:shadow-xl transition-all cursor-pointer group h-[240px] flex flex-col justify-between overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative">
          <h3 className="text-[28px] font-bold text-[#03045e] mb-2">{title}</h3>
          <p className="text-[15px] text-[#666666] font-medium leading-relaxed">{description}</p>
        </div>

        <div className="relative flex items-end justify-end">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all shadow-lg"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
              border: "1px solid rgba(226,232,240,0.8)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors" stroke="#0077b6">
              <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
