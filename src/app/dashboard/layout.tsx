"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SettingsModal from "@/components/dashboard/settings-modal";
import {
    Home,
    MessageCircle,
    CalendarDays,
    FolderOpen,
    Dna,
    Sparkles,
    Settings,
    CircleHelp,
    Globe,
    Copy,
    ChevronsUpDown,
    Menu,
    X,
    Bot,
} from "lucide-react";


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
                    <SidebarContent
                        setProfileMenuOpen={setProfileMenuOpen}
                        profileMenuOpen={profileMenuOpen}
                        setSettingsOpen={setSettingsOpen}
                    />
                </aside>

                {/* Mobile Sidebar (Drawer) */}
                <aside
                    className={`fixed inset-y-0 left-0 z-[100] w-[260px] bg-white border-r border-[#e2e8f0] flex flex-col transition-transform duration-300 transform md:hidden ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="absolute top-4 right-4">
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-1 hover:bg-gray-100 rounded-md"
                        >
                            <X size={20} className="text-[#03045e]" />
                        </button>
                    </div>
                    <SidebarContent
                        setProfileMenuOpen={setProfileMenuOpen}
                        profileMenuOpen={profileMenuOpen}
                        setSettingsOpen={setSettingsOpen}
                    />
                </aside>

                <main className="flex-1 flex flex-col relative overflow-hidden bg-white">
                    {/* Header Bar */}
                    <div className="w-full relative overflow-hidden h-auto min-h-[56px] rounded-3xl" style={{ background: "#FBFBFB" }}>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center h-full px-4 gap-3 py-[10px] rounded-2xl">
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
                                    <span className="font-bold">Improve</span> with every piece <span className="font-bold">created:</span>
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
                    {children}
                </main>
            </div>

            <SettingsModal
                isOpen={settingsOpen}
                onClose={() => setSettingsOpen(false)}
            />
        </>
    );
}

// Extracted Sidebar Content Component for reuse in Desktop and Mobile Sidebars
function SidebarContent({
    setProfileMenuOpen,
    profileMenuOpen,
    setSettingsOpen,
}: any) {
    return (
        <>
            <div className="p-6 pb-2 relative z-20">
                <Link href="/" className="relative block h-[45px]">
                    <Image
                        src="/images/BLACK (1).png"
                        alt="adona.ai"
                        width={180}
                        height={50}
                        className="object-contain h-[48px] w-auto absolute top-1/2 -translate-y-1/2 left-0"
                        priority
                        unoptimized
                    />
                </Link>
            </div>
            <div className="px-3 pt-4 space-y-6 flex-1 text-left">
                <div>
                    <p className="px-3 text-[11px] font-semibold text-[#0077b6]/60 uppercase tracking-[0.15em] mb-2">
                        Workspace
                    </p>
                    <nav className="space-y-0.5">
                        <Link
                            className="flex items-center gap-3 px-3 py-2.5 bg-gradient-to-r from-[#caf0f8]/60 to-transparent text-[#03045e] font-semibold rounded-xl transition-all"
                            href="/dashboard"
                        >
                            <Home
                                size={18}
                                strokeWidth={2}
                                className="text-[#0077b6]"
                            />
                            <span className="text-[14px]">Home</span>
                        </Link>
                        <Link
                            className="flex items-center gap-3 px-3 py-2.5 text-[#666666] hover:text-[#03045e] hover:bg-[#caf0f8]/30 rounded-xl transition-all group"
                            href="/dashboard/chat"
                        >
                            <MessageCircle
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#666666] group-hover:text-[#0077b6]"
                            />
                            <span className="text-[14px]">Chat</span>
                        </Link>
                        <Link
                            className="flex items-center gap-3 px-3 py-2.5 text-[#666666] hover:text-[#03045e] hover:bg-[#caf0f8]/30 rounded-xl transition-all group"
                            href="/dashboard/calendar"
                        >
                            <CalendarDays
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#666666] group-hover:text-[#0077b6]"
                            />
                            <span className="text-[14px]">Calendar</span>
                        </Link>
                    </nav>
                </div>
                <div>
                    <p className="px-3 text-[11px] font-semibold text-[#0077b6]/60 uppercase tracking-[0.15em] mb-2">
                        Assets
                    </p>
                    <nav className="space-y-0.5">
                        <Link
                            className="flex items-center gap-3 px-3 py-2.5 text-[#666666] hover:text-[#03045e] hover:bg-[#caf0f8]/30 rounded-xl transition-all group"
                            href="/dashboard/library"
                        >
                            <FolderOpen
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#666666] group-hover:text-[#0077b6]"
                            />
                            <span className="text-[14px]">Library</span>
                        </Link>
                        <Link
                            className="flex items-center gap-3 px-3 py-2.5 text-[#666666] hover:text-[#03045e] hover:bg-[#caf0f8]/30 rounded-xl transition-all group"
                            href="/dashboard/dna"
                        >
                            <Dna
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#666666] group-hover:text-[#0077b6]"
                            />
                            <span className="text-[14px]">DNA</span>
                        </Link>
                        <Link
                            className="flex items-center gap-3 px-3 py-2.5 text-[#666666] hover:text-[#03045e] hover:bg-[#caf0f8]/30 rounded-xl transition-all group"
                            href="/dashboard/copilot"
                        >
                            <Bot
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#666666] group-hover:text-[#0077b6]"
                            />
                            <span className="text-[14px]">AI Copilot</span>
                            <span className="ml-auto text-[10px] font-bold text-white bg-gradient-to-r from-[#0077b6] to-[#00b4d8] rounded-full px-2 py-0.5">NEW</span>
                        </Link>
                        <Link
                            className="flex items-center gap-3 px-3 py-2.5 text-[#666666] hover:text-[#03045e] hover:bg-[#caf0f8]/30 rounded-xl transition-all group"
                            href="/dashboard/inspo"
                        >
                            <Sparkles
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#666666] group-hover:text-[#0077b6]"
                            />
                            <span className="text-[14px]">Inspo</span>
                        </Link>
                    </nav>
                </div>
            </div>

            <div className="p-3 space-y-3 mt-auto">
                <div className="flex items-center gap-3 p-2.5 bg-[#caf0f8]/40 rounded-xl border border-[#90e0ef]/30">
                    <div className="w-9 h-9 bg-gradient-to-br from-[#0077b6] to-[#00b4d8] rounded-lg flex items-center justify-center">
                        <img
                            alt="Mascot Avatar"
                            className="w-7 h-7 object-contain rounded"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkm7Psj4rCW0cvmKaKYUyeS63mlGQYakavCj643F-mYIpPnz41c8oAcmiXZdjxNml8gSZiknuA_YIPln4IdVViX6M9FdFanBVUU0a0B8PYRXYMB00b9cr-kM6a41MqQ89STyUIcv6v_cJLLOLZB_gdQl3sPDwMEtqTeFyJxYNHGLPDnCDq0dXcdFB_Cw7NKmAaJGor6C-M2N-LHMuYFzd-C-VK-roC9NloL9JdZ5ND7XBfw4HByPOcXLEuhovcqLMk2Gc6vwtaR_b4"
                        />
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
                            <span className="text-[13px] font-semibold text-[#03045e]">
                                roseskin
                            </span>
                        </div>
                        <ChevronsUpDown
                            size={16}
                            className={`text-[#666666] transition-transform duration-200 ${profileMenuOpen ? "rotate-180" : ""
                                }`}
                        />
                    </div>

                    {/* Profile Dropdown Menu */}
                    {profileMenuOpen && (
                        <div className="absolute bottom-full left-0 mb-2 w-[240px] bg-white rounded-2xl shadow-[0px_4px_40px_0px_rgba(3,4,94,0.12)] border border-[#e2e8f0] py-2 z-[100]">
                            {/* Account */}
                            <p className="px-4 pt-2 pb-1 text-[11px] font-semibold text-[#0077b6]/60 uppercase tracking-wider">
                                Account
                            </p>
                            <button
                                onClick={() => {
                                    setProfileMenuOpen(false);
                                    setSettingsOpen(true);
                                }}
                                className="flex items-center gap-2.5 w-full px-4 py-2 hover:bg-[#caf0f8]/30 transition-colors cursor-pointer"
                            >
                                <Settings
                                    size={16}
                                    strokeWidth={1.8}
                                    className="text-[#03045e]"
                                />
                                <span className="text-[14px] font-medium text-[#03045e]">
                                    Settings
                                </span>
                            </button>

                            {/* Support */}
                            <div className="border-t border-[#e2e8f0] my-1" />
                            <p className="px-4 pt-2 pb-1 text-[11px] font-semibold text-[#0077b6]/60 uppercase tracking-wider">
                                Support
                            </p>
                            <button className="flex items-center gap-2.5 w-full px-4 py-2 hover:bg-[#caf0f8]/30 transition-colors cursor-pointer">
                                <CircleHelp
                                    size={16}
                                    strokeWidth={1.8}
                                    className="text-[#03045e]"
                                />
                                <span className="text-[14px] font-medium text-[#03045e]">
                                    Help Center
                                </span>
                            </button>

                            {/* Recent accounts */}
                            <div className="border-t border-[#e2e8f0] my-1" />
                            <p className="px-4 pt-2 pb-1 text-[11px] font-semibold text-[#0077b6]/60 uppercase tracking-wider">
                                Recent accounts
                            </p>
                            <button className="flex items-center gap-2.5 w-full px-4 py-2 hover:bg-[#caf0f8]/30 transition-colors cursor-pointer">
                                <div className="w-5 h-5 rounded-full bg-[#caf0f8] flex items-center justify-center shrink-0">
                                    <span className="text-[10px] font-bold text-[#0077b6]">
                                        A
                                    </span>
                                </div>
                                <span className="text-[14px] font-medium text-[#03045e]">
                                    ai products
                                </span>
                            </button>
                            <button className="flex items-center gap-2.5 w-full px-4 py-2 hover:bg-[#caf0f8]/30 transition-colors cursor-pointer">
                                <Globe
                                    size={16}
                                    strokeWidth={1.8}
                                    className="text-[#0077b6]"
                                />
                                <span className="text-[14px] font-medium text-[#03045e]">
                                    Add new
                                </span>
                            </button>

                            {/* Current user footer */}
                            <div className="border-t border-[#e2e8f0] mt-1" />
                            <div className="flex items-center justify-between px-4 py-3">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center shrink-0">
                                        <span className="text-[13px] font-bold text-white">R</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[14px] font-medium text-[#03045e]">
                                            roseskin
                                        </span>
                                        <span className="text-[11px] text-[#666666] truncate max-w-[120px]">
                                            crystalskinco@gmail...
                                        </span>
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
