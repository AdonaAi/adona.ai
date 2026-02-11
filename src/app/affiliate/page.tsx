"use client";

import React, { useState } from "react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  UserPlus,
  Link as LinkIcon,
  Share2,
  DollarSign,
  Gift,
  Zap,
  LifeBuoy,
  Lock,
  Mail,
  Megaphone,
  Wallet,
  Plus,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function AffiliatePage() {
  const [referrals, setReferrals] = useState([50]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // Earning calculation logic
  const estimatedEarnings = Math.round(referrals[0] * 1368).toLocaleString() + "";

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        {/* --- Hero Section --- */}
        {/* --- Hero Section --- */}
        <section className="container mx-auto px-4 md:px-6 mb-24 pt-12 max-w-7xl relative">
            <div className="flex flex-col gap-6 text-left max-w-4xl">
              <h1 className="text-[56px] md:text-[72px] font-black leading-[1.05] tracking-tight text-[#1d1d1f]">
                Earn 50% Recurring Commission with Adona - Coming Soon
              </h1>
              <p className="text-[22px] font-medium text-[#6e6e73] leading-relaxed max-w-2xl">
                Promote one of the fastest-growing AI tools and earn a monthly
                income. 50% recurring commissions for up to 12 months and
                exclusive perks.
              </p>
            </div>
        </section>

        {/* --- How it works (Timeline) --- */}
        <section className="container mx-auto px-4 md:px-6 mb-32 max-w-6xl">
          <h2 className="text-[48px] font-black text-center mb-24 text-[#1d1d1f]">
            How it works?
          </h2>

          <div className="relative">
            {/* Central Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#e5e5e5] -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12 md:space-y-0">
               
               {/* Step 1: Image Left, Text Right, Number Center */}
               <div className="flex flex-col md:flex-row items-center w-full mb-0 md:mb-32 relative">
                  <div className="w-full md:w-1/2 md:pr-16 flex justify-center md:justify-end mb-6 md:mb-0">
                     {/* Icon/Visual LEFT */}
                      <div className="relative w-full max-w-[400px] aspect-[4/3] transform hover:scale-105 transition-transform duration-500">
                         <Image 
                           src="https://framerusercontent.com/images/lVUuVrHe22GmelhOE3C2TGZJw.gif?scale-down-to=1024" 
                           alt="Join for free"
                           fill
                           className="object-contain scale-125"
                           unoptimized
                         />
                      </div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black rounded-full items-center justify-center text-white font-bold text-lg shadow-[0_0_0_8px_white]">
                      01
                  </div>
                  <div className="md:hidden w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">01</div>

                  <div className="w-full md:w-1/2 md:pl-16 text-center md:text-left">
                     <h3 className="text-[32px] font-bold text-[#1d1d1f] mb-3">Join for free</h3>
                     <p className="text-[18px] text-[#6e6e73]">
                        Head over to our <strong>affiliate portal</strong> and create your free account in minutes.
                     </p>
                  </div>
               </div>

               {/* Step 2: Text Left, Image Right, Number Center */}
               <div className="flex flex-col md:flex-row-reverse items-center w-full mb-0 md:mb-32 relative">
                  <div className="w-full md:w-1/2 md:pl-16 flex justify-center md:justify-start mb-6 md:mb-0">
                      {/* Icon/Visual RIGHT */}
                      <div className="relative w-full max-w-[400px] aspect-square transform hover:scale-105 transition-transform duration-500">
                         <Image 
                           src="https://framerusercontent.com/images/hnmEXoclL3UCYP2JgR62J4Vsa8.gif" 
                           alt="Get your link"
                           fill
                           className="object-contain scale-110"
                           unoptimized
                         />
                      </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black rounded-full items-center justify-center text-white font-bold text-lg shadow-[0_0_0_8px_white]">
                      02
                  </div>
                  <div className="md:hidden w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">02</div>

                  <div className="w-full md:w-1/2 md:pr-16 text-center md:text-right">
                     <h3 className="text-[32px] font-bold text-[#1d1d1f] mb-3">Get your link</h3>
                     <p className="text-[18px] text-[#6e6e73]">
                        Complete your profile and grab your unique tracking link.
                     </p>
                  </div>
               </div>

               {/* Step 3: Image Left, Text Right, Number Center */}
               <div className="flex flex-col md:flex-row items-center w-full mb-0 md:mb-32 relative">
                  <div className="w-full md:w-1/2 md:pr-16 flex justify-center md:justify-end mb-6 md:mb-0">
                       {/* Icon/Visual LEFT */}
                      <div className="relative w-full max-w-[400px] aspect-square transform hover:scale-105 transition-transform duration-500">
                         <Image 
                           src="https://framerusercontent.com/images/IMzAhTafghQzBdM7vOHmijakrBg.gif" 
                           alt="Share Adona"
                           fill
                           className="object-contain scale-110"
                           unoptimized
                         />
                      </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black rounded-full items-center justify-center text-white font-bold text-lg shadow-[0_0_0_8px_white]">
                      03
                  </div>
                  <div className="md:hidden w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">03</div>

                  <div className="w-full md:w-1/2 md:pl-16 text-center md:text-left">
                     <h3 className="text-[32px] font-bold text-[#1d1d1f] mb-3">Share Adona</h3>
                     <p className="text-[18px] text-[#6e6e73]">
                        Promote Adona through reviews, tutorials, newsletters, or social posts using your link.
                     </p>
                  </div>
               </div>

               {/* Step 4: Text Left, Image Right, Number Center */}
               <div className="flex flex-col md:flex-row-reverse items-center w-full relative">
                  <div className="w-full md:w-1/2 md:pl-16 flex justify-center md:justify-start mb-6 md:mb-0">
                       {/* Icon/Visual RIGHT */}
                      <div className="relative w-full max-w-[400px] aspect-square transform hover:scale-105 transition-transform duration-500">
                         <Image 
                           src="https://framerusercontent.com/images/o4ASQMuLcCSaHgl6pso5MCYxg.gif" 
                           alt="Get paid"
                           fill
                           className="object-contain scale-110"
                           unoptimized
                         />
                      </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black rounded-full items-center justify-center text-white font-bold text-lg shadow-[0_0_0_8px_white]">
                      04
                  </div>
                  <div className="md:hidden w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">04</div>

                  <div className="w-full md:w-1/2 md:pr-16 text-center md:text-right">
                     <h3 className="text-[32px] font-bold text-[#1d1d1f] mb-3">Get paid 50% of sales!</h3>
                     <p className="text-[18px] text-[#6e6e73]">
                        Get paid 50% of every subscription you drive - every month, for up to 12 months per customer.
                     </p>
                  </div>
               </div>

            </div>
          </div>
        </section>





        {/* --- FAQ --- */}
        <section className="container mx-auto px-4 md:px-6 mb-32 max-w-3xl" id="faq">
           <h2 className="h2 mb-12 text-center text-primary font-bold">FAQ</h2>
           
           <div className="flex flex-col gap-3">
              {[
                {
                  question: "Does the Adona program pay recurring commissions?",
                  answer: "Yes. Earn 50% of every sale, including recurring payments, for up to 12 months per customer."
                },
                {
                  question: "When and how often will I get paid?",
                  answer: "Payouts are processed monthly, with commissions cleared after 30 days from the original sale."
                },
                {
                  question: "Do I need a website or a blog to be part of Adona affiliate program?",
                  answer: "No. Promote Adona wherever your audience is - YouTube, LinkedIn, newsletters, or even word of mouth."
                },
                {
                  question: "What payout methods are available?",
                  answer: "We pay directly to your bank account. PayPal is not supported at this time."
                },
                {
                  question: "What kind of support and resources will I get as an affiliate?",
                  answer: "Everything you need to win: media kits, templates, tested creatives, feature comparisons, and direct support from our team."
                },
                {
                  question: "What is the cookie duration?",
                  answer: "Cookies last 30 days. If someone clicks your link and converts within that time, you get the commission."
                },
                {
                  question: "Can I run paid traffic to my partner link?",
                  answer: "Paid campaigns on Meta, LinkedIn, or other social platforms are welcome. Search ads on Bing or Google - especially on branded terms or domain names - are strictly prohibited."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-[#f1f5f9] rounded-[24px] overflow-hidden transition-all duration-300"
                  style={{ 
                    boxShadow: openIndex === index ? "0 10px 30px rgba(0,0,0,0.05)" : "none" 
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left flex items-center justify-between p-6 focus:outline-none group"
                  >
                    <span className="text-[16px] md:text-[18px] font-bold text-primary pr-4 leading-tight">
                      {item.question}
                    </span>
                    <div 
                      className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-transform duration-300",
                        openIndex === index ? "rotate-45" : "rotate-0"
                      )}
                    >
                      <Plus className="w-5 h-5 text-white" />
                    </div>
                  </button>
                  
                  <div 
                    className={cn(
                      "transition-all duration-300 ease-in-out opacity-0 overflow-hidden",
                      openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0"
                    )}
                  >
                    <div className="px-6 pb-6 text-[#666666] text-[16px] leading-[1.6]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </section>

        {/* --- Post-FAQ Contact --- */}
        <section className="container mx-auto px-4 md:px-6 mb-24 text-center">
            <h2 className="text-2xl font-bold mb-4">Have more questions?</h2>
            <p className="text-[#6e6e73] text-lg">
                Reach out to our affiliate manager <a href="mailto:support@adona.ai" className="text-blue-500 underline">support@adona.ai</a>
            </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
