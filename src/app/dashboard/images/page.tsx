"use client";

import Link from "next/link";
import Image from "next/image";

const IMAGE_TOOLS = [
    {
        name: "Content Swipe",
        description: "Swipe through AI-generated branded content and save what you like.",
        href: "/dashboard/images/content-swipe",
        image: "/dashboard/card_bgs/content_swipe.svg",
        badge: "Best",
    },
    {
        name: "Concept",
        description: "Create images from a specific concept or idea.",
        href: "/dashboard/canvas",
        image: "/dashboard/card_bgs/concept_card.svg",
    },
    {
        name: "Clone Template",
        description: "Use proven templates and customize them for your brand.",
        href: "/dashboard/canvas",
        image: "/dashboard/card_bgs/clone_template.svg",
    },
    {
        name: "Variations",
        description: "Generate variations of an existing image.",
        href: "/dashboard/canvas",
        image: "/dashboard/card_bgs/variations_card.svg",
    },
    {
        name: "Photoshoot",
        description: "Create product photoshoot-style images.",
        href: "/dashboard/canvas",
        image: "/dashboard/card_bgs/photoshoot.svg",
    },
    {
        name: "Translate",
        description: "Translate text in your images to different languages.",
        href: "/dashboard/canvas",
        image: "/dashboard/card_bgs/translate.svg",
    },
];

export default function ImagesPage() {
    return (
        <div className="px-5 pt-5 flex-1 flex flex-col overflow-y-auto min-h-screen bg-white relative">
            {/* Background gradient */}
            <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none bg-white overflow-hidden h-screen rounded-[20px]" aria-hidden="true">
                <Image alt="" draggable={false} width={2560} height={1440} className="w-full h-full object-cover object-top opacity-90" src="/dashboard/gradient.png.svg" />
            </div>
            {/* Header with Back button */}
            <div className="shrink-0 flex items-center w-full mb-6 relative z-10">
                <div className="flex items-center">
                    <Link
                        href="/dashboard"
                        className="flex items-center bg-white rounded-full px-3 py-[7px] hover:opacity-80 transition-opacity cursor-pointer group"
                        style={{
                            boxShadow:
                                "0px 5px 10px 0px rgba(230,230,231,0.15), inset -2px 2px 10px 0px rgba(255,255,255,0.8)",
                        }}
                    >
                        <div className="flex items-center gap-2.5 pr-1 pt-[1px]">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.16699 10L16.667 9.9998"
                                    stroke="#03045e"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.49967 5.83301L4.04011 9.29257C3.70678 9.6259 3.54011 9.79257 3.54011 9.99967C3.54011 10.2068 3.70678 10.3734 4.04011 10.7068L7.49967 14.1663"
                                    stroke="#03045e"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <span className="text-[16px] font-medium leading-normal text-[#03045e]">
                            Back
                        </span>
                    </Link>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="w-full flex-col items-center relative z-10 flex-1 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full max-w-[900px] mx-auto">
                    {IMAGE_TOOLS.map((tool) => (
                        <Link
                            key={tool.name}
                            href={tool.href}
                            className="group relative p-[1px] rounded-[30px] cursor-pointer transition-all duration-200"
                        >
                            {/* Default border */}
                            <div
                                className="absolute inset-0 rounded-[30px] transition-opacity duration-200 border border-[#e2e8f0]"
                            />
                            {/* Hover gradient border */}
                            <div
                                className="absolute inset-0 rounded-[30px] transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #03045e, #0077b6, #00b4d8)",
                                    padding: "1px",
                                    WebkitMask:
                                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor" as never,
                                    maskComposite: "exclude",
                                    borderRadius: "30px",
                                }}
                            />

                            <div
                                className="relative flex items-center gap-[20px] bg-white rounded-[30px] transition-all duration-300"
                                style={{
                                    boxShadow:
                                        "0px 5px 10px 0px rgba(230,230,231,0.15), inset -2px 2px 10px 0px rgba(255,255,255,0.8)",
                                }}
                            >
                                {/* Badge */}
                                {tool.badge && (
                                    <div
                                        className="absolute -top-3 -right-3 z-10"
                                        style={{
                                            transform: "rotate(15deg)",
                                            transformOrigin: "center center",
                                        }}
                                    >
                                        <div
                                            className="flex items-center px-2 py-1 rounded-full"
                                            style={{
                                                background: "rgb(238, 68, 84)",
                                                border: "2px solid white",
                                                boxShadow:
                                                    "rgba(238, 68, 84, 0.3) 0px 5px 10px 0px",
                                            }}
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 23 23"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ marginLeft: "-1px" }}
                                            >
                                                <path
                                                    d="M14.9887 4.33688L15.6919 7.83181C15.7855 8.31715 16.2314 8.87813 16.6797 9.08278L19.3281 10.2903C21.0215 11.0634 21.0912 12.4723 19.4705 13.4095L16.7324 15.0054C16.2687 15.2757 15.8786 15.932 15.8554 16.4706L15.7516 19.3266C15.6677 21.5867 14.3256 22.1101 12.755 20.4963L10.5717 18.2486C10.1774 17.8424 9.40379 17.6351 8.85056 17.7874L5.83588 18.6423C3.67747 19.2569 2.77056 18.1215 3.82564 16.131L5.16374 13.6058C5.41295 13.1277 5.40324 12.3643 5.13679 11.8984L3.56348 9.14721C2.63725 7.52759 3.39335 6.33995 5.24644 6.51711L8.14377 6.79559C8.6256 6.84016 9.29228 6.57731 9.61597 6.20376L11.9725 3.52868C13.2555 2.07831 14.6115 2.44166 14.9887 4.33688Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <span
                                                style={{
                                                    color: "white",
                                                    fontWeight: 700,
                                                    fontSize: "16px",
                                                    lineHeight: 1.35,
                                                    marginLeft: "2px",
                                                }}
                                            >
                                                {tool.badge}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center gap-[20px] w-full transition-all duration-300 overflow-hidden rounded-[30px]">
                                    {/* Thumbnail */}
                                    <div className="w-[100px] h-[100px] rounded-[10px] flex items-center justify-center bg-cover bg-center p-2 shrink-0">
                                        <div className="relative w-full h-full rounded-[8px] overflow-hidden bg-gradient-to-br from-[#caf0f8]/40 to-[#90e0ef]/20">
                                            <Image
                                                alt={tool.name}
                                                fill
                                                className="object-cover"
                                                src={tool.image}
                                            />
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="flex flex-col gap-[5px] flex-1 pt-[10px] pr-[10px] pb-[10px]">
                                        <h3 className="font-bold text-[22px] sm:text-[26px] leading-[1.23] tracking-[-0.01em] text-[#03045e]">
                                            {tool.name}
                                        </h3>
                                        <p className="font-medium text-[14px] sm:text-[16px] leading-[1.5] text-[#6E6E73]">
                                            {tool.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
