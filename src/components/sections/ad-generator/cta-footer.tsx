import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  // Asset: Using the provided logo/branding asset
  const logoAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/svgs/C1y074ZGnmu0GpvRia8SOfOfls-3.svg";

  return (
    <footer className="w-full bg-[#fcfcfc] overflow-hidden">
      {/* Final CTA Section */}
      <div className="container px-6 py-[120px] text-center">
        <div className="max-w-[800px] mx-auto space-y-4">
          <h2 className="text-[48px] md:text-[64px] font-bold tracking-tight text-[#1a1a1a] leading-[1.1]">
            Ready to create agency-like content?
          </h2>
          <p className="text-[20px] md:text-[24px] text-[#666666] font-medium opacity-60">
            (Without the fees)
          </p>
          <div className="pt-8">
            <a
              href="https://www.adona.ai/pricing"
              className="btn-pill bg-mesh-gradient text-white flex items-center gap-2 group mx-auto"
              style={{ padding: '14px 42px', fontSize: '18px' }}
            >
              Buy now
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="container px-6 py-20 border-t border-[#f1f1f1]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Support Email Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <a 
                href="mailto:support@adona.ai" 
                className="text-[20px] font-semibold text-[#1a1a1a] hover:opacity-70 transition-opacity"
              >
                support@adona.ai
              </a>
              <p className="text-[14px] text-[#666666]">Let&apos;s talk</p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <h4 className="text-[16px] font-semibold text-[#1a1a1a]">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[15px] text-[#666666] hover:text-[#1a1a1a] transition-colors">Refund policy</a></li>
                <li><a href="#" className="text-[15px] text-[#666666] hover:text-[#1a1a1a] transition-colors">Privacy policy</a></li>
                <li><a href="#" className="text-[15px] text-[#666666] hover:text-[#1a1a1a] transition-colors">Terms of service</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[16px] font-semibold text-[#1a1a1a]">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[15px] text-[#666666] hover:text-[#1a1a1a] transition-colors">Login</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[16px] font-semibold text-[#1a1a1a]">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[15px] text-[#666666] hover:text-[#1a1a1a] transition-colors">How it works</a></li>
                <li><a href="#" className="text-[15px] text-[#666666] hover:text-[#1a1a1a] transition-colors">Affiliate</a></li>
                <li><a href="#" className="text-[15px] text-[#666666] hover:text-[#1a1a1a] transition-colors">Meet the team</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[16px] font-semibold text-[#1a1a1a]">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[15px] text-[#666666] hover:text-[#1a1a1a] transition-colors">Blog</a></li>
                <li><a href="#" className="text-[15px] text-[#666666] hover:text-[#1a1a1a] transition-colors">Use cases</a></li>
              </ul>
            </div>
          </div>

          {/* Social Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-1.5 text-[15px] text-[#666666] font-medium hover:text-[#1a1a1a] transition-colors">
                Instagram <ArrowUpRight size={14} className="opacity-50" />
              </a>
              <a href="#" className="flex items-center gap-1.5 text-[15px] text-[#666666] font-medium hover:text-[#1a1a1a] transition-colors">
                LinkedIn <ArrowUpRight size={14} className="opacity-50" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[14px] text-[#666666] opacity-60">
            © 2025 All Rights Reserved
          </p>
          <div className="flex items-center grayscale opacity-90">
            <img 
              src={logoAsset} 
              alt="adona.ai Logo" 
              width={64} 
              height={32} 
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;