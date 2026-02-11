"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background blurs */}
      <div className="absolute top-[5%] left-[10%] w-[700px] h-[700px] rounded-full bg-[#caf0f8] opacity-40 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#90e0ef] opacity-30 blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#00b4d8] opacity-[0.07] blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-[700px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 mb-16">
          <span className="text-[28px] font-extrabold tracking-tight text-[#03045e]">adona.ai</span>
        </Link>

        {/* 404 number */}
        <div className="relative mb-8">
          <h1
            className="text-[220px] font-extrabold leading-none tracking-tighter select-none"
            style={{
              background: "linear-gradient(135deg, #03045e 0%, #0077b6 40%, #00b4d8 70%, #90e0ef 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </h1>
          <div
            className="absolute inset-0 text-[220px] font-extrabold leading-none tracking-tighter select-none opacity-[0.06] blur-[4px]"
            style={{ color: "#0077b6" }}
          >
            404
          </div>
        </div>

        {/* Message */}
        <h2 className="text-[36px] font-bold text-[#03045e] mb-4">
          Page not found
        </h2>
        <p className="text-[18px] text-[#666666] leading-relaxed mb-12 max-w-[480px]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-[17px] transition-all hover:scale-[1.03] hover:shadow-lg"
            style={{
              background: "linear-gradient(to right, #03045e, #0077b6, #00b4d8)",
              boxShadow: "0 8px 24px rgba(0, 119, 182, 0.25)",
            }}
          >
            <Home size={20} strokeWidth={2} />
            Go home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-[17px] text-[#03045e] bg-[#caf0f8]/50 border border-[#90e0ef]/40 hover:bg-[#caf0f8] transition-all cursor-pointer"
          >
            <ArrowLeft size={20} strokeWidth={2} />
            Go back
          </button>
        </div>

        {/* Decorative dots */}
        <div className="flex items-center gap-2.5 mt-20">
          {[
            "#03045e",
            "#0077b6",
            "#00b4d8",
            "#90e0ef",
            "#caf0f8",
          ].map((color, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: color, opacity: 0.6 + i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
