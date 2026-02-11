"use client";

import React, { useState, useRef, useMemo } from "react";
import Image from "next/image";

type SettingsTab = "workspace" | "brands" | "team" | "integrations" | "account";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tabs: { id: SettingsTab; label: string; iconOn: string; iconOff: string }[] = [
  { id: "workspace", label: "Workspace", iconOn: "/settings/workspaceON.svg", iconOff: "/settings/workspaceOFF.svg" },
  { id: "brands", label: "Brands", iconOn: "/settings/brandsON.svg", iconOff: "/settings/brandsOFF.svg" },
  { id: "team", label: "Team", iconOn: "/settings/membersON.svg", iconOff: "/settings/membersOFF.svg" },
  { id: "integrations", label: "Integrations", iconOn: "/settings/integrationsON.svg", iconOff: "/settings/integrationsOFF.svg" },
  { id: "account", label: "Account", iconOn: "/settings/accountON.svg", iconOff: "/settings/accountOFF.svg" },
];

// Generate contribution graph data for the current year
function generateContributionData() {
  const now = new Date();
  const year = now.getFullYear();
  const startOfYear = new Date(year, 0, 1);
  const startDay = startOfYear.getDay(); // 0=Sun

  const weeks: { date: Date; count: number }[][] = [];
  let currentWeek: { date: Date; count: number }[] = [];

  // Pad first week
  for (let i = 0; i < startDay; i++) {
    currentWeek.push({ date: new Date(year, 0, 1 - (startDay - i)), count: -1 }); // -1 = empty
  }

  const daysInYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 366 : 365;
  for (let d = 0; d < daysInYear; d++) {
    const date = new Date(year, 0, d + 1);
    if (date > now) break;
    currentWeek.push({ date, count: 0 });
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks;
}

function getContributionColor(count: number) {
  if (count < 0) return "transparent";
  if (count === 0) return "#F7F7F7";
  if (count <= 2) return "#9BE9A8";
  if (count <= 5) return "#40C463";
  if (count <= 9) return "#30A14E";
  return "#216E39";
}

// Tooltip SVG icon component
function InfoTooltip() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="cursor-help">
      <circle cx="12" cy="12" r="11" fill="white" />
      <circle cx="12" cy="12" r="10.5" stroke="#E6E6E7" strokeWidth="1" />
      <path
        d="M12 5.5C9.79086 5.5 8 7.29086 8 9.5C8 10.0523 8.44772 10.5 9 10.5C9.55229 10.5 10 10.0523 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5C14 10.2557 13.5809 10.9149 12.958 11.2559C12.5267 11.492 12.0587 11.8211 11.6875 12.2539C11.3119 12.6918 11 13.2816 11 14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14C13 13.89 13.0442 13.7454 13.2061 13.5566C13.3724 13.3627 13.6236 13.1724 13.9189 13.0107C15.157 12.3329 16 11.0155 16 9.5C16 7.29086 14.2091 5.5 12 5.5Z"
        fill="#A1A1A1"
      />
      <circle cx="12" cy="17.75" r="1.25" fill="#A1A1A1" />
    </svg>
  );
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [activeTab, setActiveTab] = useState<SettingsTab>("workspace");
  const [brandName, setBrandName] = useState("roseskin");
  const [brandLogo, setBrandLogo] = useState("https://media.brand.dev/fc254919-4e7b-48d5-8b79-b79b90bc0f19.jpg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const contributionWeeks = useMemo(() => generateContributionData(), []);
  const currentYear = new Date().getFullYear();

  if (!isOpen) return null;

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBrandLogo(url);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative w-full max-w-[850px] h-[560px] bg-white border border-[#E6E6E7] flex rounded-[20px] shadow-[0px_0px_50px_0px_rgba(0,0,0,0.08)] overflow-hidden p-[10px] pointer-events-auto"
        >
          {/* Sidebar */}
          <div className="flex flex-col w-[190px] bg-[#FBFBFB] rounded-[16px] h-full shrink-0">
            {/* Close Button */}
            <div className="flex items-center px-[16px] py-[16px]">
              <button
                type="button"
                onClick={onClose}
                className="hover:opacity-70 cursor-pointer transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5L15 15" stroke="#6E6E73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-col gap-[4px] px-[10px] flex-1">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center cursor-pointer gap-[10px] px-[12px] py-[10px] rounded-full w-full transition-all relative overflow-visible ${
                      isActive ? "bg-white" : "hover:bg-white/50"
                    }`}
                  >
                    {/* Active border effect */}
                    {isActive && (
                      <div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                          background: "linear-gradient(to right, rgb(200, 200, 200), rgb(200, 200, 200))",
                          padding: "1px",
                          zIndex: 0,
                          maskImage: "linear-gradient(transparent 0%, transparent 45%, black 55%, black 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                          maskComposite: "intersect",
                          WebkitMaskComposite: "source-in" as never,
                        }}
                      >
                        <div className="w-full h-full rounded-full bg-white" />
                      </div>
                    )}
                    <div className="relative z-10 flex items-center gap-[10px]">
                      <div className="flex items-center justify-center w-[20px] h-[20px]">
                        <Image
                          alt={tab.label}
                          width={20}
                          height={20}
                          src={isActive ? tab.iconOn : tab.iconOff}
                        />
                      </div>
                      <span className={`font-medium text-[16px] leading-[20px] ${isActive ? "text-[#1D1D1F]" : "text-[#6E6E73]"}`}>
                        {tab.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === "workspace" && (
              <div className="flex flex-col gap-[24px] py-[12px] px-[12px] flex-1 overflow-y-auto">
                {/* Top Row: Streak + Plan Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] px-[12px] py-[6px] rounded-full bg-[#FCF5EB]">
                    <Image alt="Fire" width={20} height={20} src="/fireIcon.svg" />
                    <span className="text-[16px] font-medium text-[#F05427]">Start your streak!</span>
                  </div>
                  <div
                    className="flex items-center gap-[6px] px-[12px] py-[7px] rounded-full bg-[#F7F7F7]"
                    style={{ borderColor: "#F1F1F1" }}
                  >
                    <span className="text-[14px] font-medium tracking-[0.02em] text-[#1D1D1F]">Starter 🌱</span>
                  </div>
                </div>

                {/* Brand Logo + Name */}
                <div className="flex items-center gap-[20px]">
                  <div
                    className="relative w-[72px] h-[72px] rounded-full bg-[#E8F0FE] flex items-center justify-center shadow-sm cursor-pointer overflow-hidden group"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      accept="image/jpeg,image/jpg,image/png,image/webp,image/heic,image/heif,image/svg+xml"
                      className="hidden"
                      type="file"
                      onChange={handleLogoUpload}
                    />
                    {brandLogo ? (
                      <img alt="Brand logo" className="w-full h-full object-cover rounded-full" src={brandLogo} />
                    ) : (
                      <span className="text-2xl text-[#0077b6]">+</span>
                    )}
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center gap-1.5 transition-opacity duration-200 rounded-full opacity-0 group-hover:opacity-100">
                      <svg className="w-4 h-4" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path
                          d="M6.85546 9.99817H11.3555M2.35547 9.99816H3.19274C3.43733 9.99816 3.55963 9.99816 3.67471 9.97053C3.77675 9.94603 3.87429 9.90563 3.96377 9.8508C4.06468 9.78896 4.15116 9.70248 4.32411 9.52953L10.6055 3.24816C11.0197 2.83395 11.0197 2.16237 10.6055 1.74816C10.1913 1.33395 9.51969 1.33395 9.10548 1.74816L2.8241 8.02953C2.65115 8.20248 2.56467 8.28896 2.50283 8.38987C2.448 8.47935 2.4076 8.57689 2.3831 8.67893C2.35547 8.79402 2.35547 8.91631 2.35547 9.1609V9.99816Z"
                          stroke="#1D1D1F"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-[14px] font-medium text-[#1D1D1F]">Edit</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px] flex-1">
                    <label className="text-[16px] text-[#1D1D1F] font-medium">Brand name</label>
                    <div className="relative w-full h-[47px]">
                      <input
                        className="w-full h-full font-medium text-[18px] text-[#6E6E73] bg-[#FBFBFB] border border-[#E6E6E7] rounded-full px-[12px] py-[4px] outline-none transition-all duration-200 focus:border-[#1D1D1F]"
                        placeholder="Enter brand name"
                        type="text"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="flex gap-[16px]">
                  {[
                    { label: "Assets created", value: "0", bg: "rgb(255, 247, 237)", color: "rgb(234, 88, 12)" },
                    { label: "Saved time", value: "0m", bg: "rgb(239, 246, 255)", color: "rgb(37, 99, 235)", hasTooltip: true },
                    { label: "Saved money", value: "$0", bg: "rgb(253, 242, 248)", color: "rgb(236, 72, 153)", hasTooltip: true },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center gap-[8px] px-[10px] py-[10px] rounded-[16px] flex-1 relative"
                      style={{ border: "3px dashed rgb(235, 235, 235)" }}
                    >
                      <div className="flex items-center gap-[4px]">
                        <span className="text-[16px] text-[#6E6E73] font-medium">{stat.label}</span>
                        {stat.hasTooltip && <InfoTooltip />}
                      </div>
                      <div
                        className="rounded-[16px] px-[12px] py-[8px] w-full flex items-center justify-center"
                        style={{ backgroundColor: stat.bg }}
                      >
                        <span className="text-[28px] font-bold" style={{ color: stat.color }}>
                          {stat.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contribution Graph */}
                <div className="flex flex-col gap-[8px] w-full overflow-hidden">
                  {/* Legend */}
                  <div className="flex items-center justify-between flex-wrap gap-[4px]">
                    <span className="text-[14px] text-[#6E6E73] font-medium">
                      0 contributions in {currentYear} (adona.ai improves with each creation)
                    </span>
                    <div className="flex items-center gap-[3px]">
                      <span className="text-[14px] text-[#6E6E73] font-medium pr-1">Less</span>
                      {[
                        { bg: "#F7F7F7", title: "0 contributions" },
                        { bg: "#9BE9A8", title: "1-2 contributions" },
                        { bg: "#40C463", title: "3-5 contributions" },
                        { bg: "#30A14E", title: "6-9 contributions" },
                        { bg: "#216E39", title: "10+ contributions" },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="w-[8px] h-[8px] rounded-[2px]"
                          title={item.title}
                          style={{ backgroundColor: item.bg }}
                        />
                      ))}
                      <span className="text-[14px] text-[#6E6E73] font-medium pl-1">More</span>
                    </div>
                  </div>

                  {/* Grid */}
                  <div className="w-full overflow-hidden">
                    <div className="flex gap-[2px]">
                      {contributionWeeks.map((week, wi) => (
                        <div key={wi} className="flex flex-col gap-[2px] flex-1 min-w-0">
                          {week.map((day, di) => (
                            <div
                              key={di}
                              className="rounded-[2px] w-full cursor-pointer"
                              style={{
                                backgroundColor: getContributionColor(day.count),
                                boxShadow: "none",
                                aspectRatio: "1 / 1",
                                minWidth: "10px",
                                minHeight: "10px",
                              }}
                              title={day.count >= 0 ? `${day.date.toLocaleDateString()}: ${day.count} contributions` : ""}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "brands" && (
              <div className="flex flex-col items-center justify-center h-full text-center px-8">
                <div className="w-16 h-16 rounded-2xl bg-[#F7F7F7] flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6E6E73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-[#1D1D1F] mb-2">Manage Brands</h3>
                <p className="text-[14px] text-[#6E6E73] max-w-[300px]">Add and manage multiple brands. Each brand gets its own DNA profile and content style.</p>
              </div>
            )}

            {activeTab === "team" && (
              <div className="flex flex-col items-center justify-center h-full text-center px-8">
                <div className="w-16 h-16 rounded-2xl bg-[#F7F7F7] flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6E6E73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-[#1D1D1F] mb-2">Team Members</h3>
                <p className="text-[14px] text-[#6E6E73] max-w-[300px]">Invite team members to collaborate on content creation and brand management.</p>
              </div>
            )}

            {activeTab === "integrations" && (
              <div className="flex flex-col items-center justify-center h-full text-center px-8">
                <div className="w-16 h-16 rounded-2xl bg-[#F7F7F7] flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6E6E73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-[#1D1D1F] mb-2">Integrations</h3>
                <p className="text-[14px] text-[#6E6E73] max-w-[300px]">Connect your favorite tools and platforms to streamline your workflow.</p>
              </div>
            )}

            {activeTab === "account" && (
              <div className="flex flex-col items-center justify-center h-full text-center px-8">
                <div className="w-16 h-16 rounded-2xl bg-[#F7F7F7] flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6E6E73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-[#1D1D1F] mb-2">Account Settings</h3>
                <p className="text-[14px] text-[#6E6E73] max-w-[300px]">Manage your account details, subscription plan, and billing information.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
