"use client";

import Link from "next/link";
import Image from "next/image";

const workspaceItems = [
  { name: "Home", icon: "home", href: "/dashboard", active: true },
  { name: "Chat", icon: "chat", href: "/dashboard/chat", active: false },
  { name: "Calendar", icon: "calendar", href: "/dashboard/calendar", active: false },
];

const assetsItems = [
  { name: "Library", icon: "library", href: "/dashboard/library", active: false },
  { name: "DNA", icon: "dna", href: "/dashboard/dna", active: false },
  { name: "Inspo", icon: "inspo", href: "/dashboard/inspo", active: false },
];

export default function Sidebar() {
  return (
    <div className="block z-50 relative" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
      <div className="w-[177px] shrink-0">
        <aside className="fixed left-0 top-0 z-40 h-screen w-[177px] bg-white py-[20px] px-[20px]">
          <div className="flex h-full flex-col w-[137px]">
            <div className="flex flex-col gap-[20px] items-center w-full">
              {/* Workspace Section */}
              <div className="flex flex-col gap-[5px] items-start w-full">
                <div className="flex items-center justify-between px-[5px] py-0 w-full">
                  <p className="font-['Inter',sans-serif] font-medium leading-normal not-italic text-[#666666] text-[12px] whitespace-nowrap tracking-[0.24px]">
                    Workspace
                  </p>
                  <div className="opacity-0 overflow-clip size-[16px]"></div>
                </div>
                <div className="flex flex-col items-start w-full rounded-[20px] bg-[#FBFBFB]">
                  {workspaceItems.map((item) => (
                    <Link key={item.name} className="w-full" href={item.href}>
                      <div
                        className={`flex gap-[5px] h-[37px] items-center px-[10px] py-[7px] rounded-[100px] w-full cursor-pointer transition-all ${
                          item.active
                            ? "border border-[#e2e8f0] bg-white"
                            : "border bg-transparent border-transparent hover:bg-white/50"
                        }`}
                      >
                        <div className="relative shrink-0 size-[20px] flex items-center justify-center">
                          <Image
                            src={`/icons/sidebar_icons/${item.icon}.svg`}
                            alt={item.name}
                            width={20}
                            height={20}
                            className={item.active ? "brightness-0" : "opacity-60"}
                          />
                        </div>
                        <p
                          className={`font-['Inter',sans-serif] font-medium leading-normal not-italic text-[16px] whitespace-nowrap ${
                            item.active ? "text-[#03045e]" : "text-[#666666]"
                          }`}
                        >
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Assets Section */}
              <div className="flex flex-col gap-[5px] items-start w-full">
                <div className="flex items-center justify-between px-[5px] py-0 w-full">
                  <p className="font-['Inter',sans-serif] font-medium leading-normal not-italic text-[#666666] text-[12px] whitespace-nowrap tracking-[0.24px]">
                    Assets
                  </p>
                  <div className="opacity-0 overflow-clip size-[16px]"></div>
                </div>
                <div className="flex flex-col items-start w-full rounded-[20px] bg-[#FBFBFB]">
                  {assetsItems.map((item) => (
                    <Link key={item.name} className="w-full" href={item.href}>
                      <div className="flex gap-[5px] h-[37px] items-center px-[10px] py-[7px] rounded-[100px] w-full cursor-pointer border bg-transparent border-transparent hover:bg-white/50 transition-all">
                        <div className="relative shrink-0 size-[20px] flex items-center justify-center">
                          <Image
                            src={`/icons/sidebar_icons/${item.icon}.svg`}
                            alt={item.name}
                            width={20}
                            height={20}
                            className="opacity-60"
                          />
                        </div>
                        <p className="font-['Inter',sans-serif] font-medium leading-normal not-italic text-[16px] whitespace-nowrap text-[#666666]">
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1"></div>

            {/* User Profile Section */}
            <div className="flex flex-col items-center w-full">
              <div className="h-[91px] relative rounded-full w-[101px] overflow-hidden mb-4">
                <div className="absolute inset-0 pointer-events-none rounded-full">
                  <div className="absolute inset-0 overflow-hidden rounded-full bg-gradient-to-br from-[#0077b6] to-[#00b4d8]">
                    {/* Character mascot placeholder */}
                    <div className="w-full h-full flex items-center justify-center text-4xl">👤</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[5px] items-start w-full">
                <div className="relative w-full">
                  <div className="backdrop-blur-[25px] backdrop-filter bg-[#fbfbfb] border-[#e2e8f0] border-[0px_0px_1px] border-solid flex items-center justify-between overflow-clip px-[10px] py-[7.5px] rounded-[30px] w-full cursor-pointer transition-colors hover:opacity-80">
                    <div className="flex gap-[5px] items-center flex-1 min-w-0 overflow-hidden">
                      <div
                        className="rounded-full flex items-center justify-center shrink-0"
                        style={{
                          width: "21px",
                          height: "21px",
                          minWidth: "21px",
                          minHeight: "21px",
                          backgroundColor: "#caf0f8",
                        }}
                      >
                        <span className="font-medium font-['Inter',sans-serif]" style={{ fontSize: "12px", color: "#0077b6" }}>
                          A
                        </span>
                      </div>
                      <p className="font-['Inter',sans-serif] font-medium leading-normal not-italic text-[#03045e] text-[16px] truncate">
                        adona.ai
                      </p>
                    </div>
                    <div className="overflow-clip shrink-0 size-[20px] flex items-center justify-center transition-transform duration-200">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12.5L10 7.5L15 12.5"
                          stroke="#666666"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
