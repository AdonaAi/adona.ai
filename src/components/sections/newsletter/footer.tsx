import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white font-sans overflow-hidden">
      {/* CTA Section */}
      <section className="container mx-auto px-6 pt-[120px] pb-[160px] text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[48px] md:text-[64px] font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] mb-4">
            Ready to create agency-like content?
          </h2>
          <p className="text-[20px] text-[#666666] mb-10 leading-relaxed font-medium">
            (Without the fees)
          </p>
          <a
            href="#"
            className="btn-capsule bg-holo-gradient text-white hover:opacity-90 transition-all duration-300"
            style={{ padding: '16px 48px', fontSize: '18px' }}
          >
            Buy now
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Main Footer Section */}
      <section className="container mx-auto px-6 pb-20 border-t border-[#F2F2F2] pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left: Contact Info */}
          <div className="lg:col-span-4">
            <div className="mb-1">
              <a 
                href="mailto:support@adona.ai" 
                className="text-[24px] font-bold text-[#1A1A1A] hover:text-[#8e8ffa] transition-colors"
                style={{ letterSpacing: '-0.02em' }}
              >
                support@adona.ai
              </a>
            </div>
            <p className="text-[16px] text-[#666666] font-medium">
              Let&apos;s talk
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-[16px] font-bold text-[#1A1A1A]">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[14px] text-[#666666] hover:text-[#1A1A1A] transition-colors">Refund policy</a></li>
                <li><a href="#" className="text-[14px] text-[#666666] hover:text-[#1A1A1A] transition-colors">Privacy policy</a></li>
                <li><a href="#" className="text-[14px] text-[#666666] hover:text-[#1A1A1A] transition-colors">Terms of service</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[16px] font-bold text-[#1A1A1A]">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[14px] text-[#666666] hover:text-[#1A1A1A] transition-colors">Login</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[16px] font-bold text-[#1A1A1A]">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[14px] text-[#666666] hover:text-[#1A1A1A] transition-colors">How it works</a></li>
                <li><a href="#" className="text-[14px] text-[#666666] hover:text-[#1A1A1A] transition-colors">Affiliate</a></li>
                <li><a href="#" className="text-[14px] text-[#666666] hover:text-[#1A1A1A] transition-colors">Meet the team</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[16px] font-bold text-[#1A1A1A]">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[14px] text-[#666666] hover:text-[#1A1A1A] transition-colors">Blog</a></li>
                <li><a href="#" className="text-[14px] text-[#666666] hover:text-[#1A1A1A] transition-colors">Use cases</a></li>
              </ul>
            </div>
          </div>

          {/* Right: Social & Gift CTA */}
          <div className="lg:col-span-3 lg:text-right flex flex-col items-start lg:items-end justify-between">
            <div className="space-y-6 w-full flex flex-col items-start lg:items-end">
              <p className="text-[16px] font-semibold text-[#1A1A1A]">Want a mystery gift ?</p>
              <button 
                className="bg-holo-gradient text-white rounded-full px-6 py-2.5 font-bold text-[14px] hover:scale-105 transition-transform"
                style={{ boxShadow: '0 4px 15px rgba(239, 93, 168, 0.2)' }}
              >
                Yes please
              </button>
            </div>
            
            <div className="mt-12 lg:mt-0 space-y-3">
              <a href="#" className="flex items-center lg:justify-end gap-2 text-[14px] font-semibold text-[#1A1A1A] group">
                Instagram <ArrowRight size={14} className="rotate-[-45deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#" className="flex items-center lg:justify-end gap-2 text-[14px] font-semibold text-[#1A1A1A] group">
                LinkedIn <ArrowRight size={14} className="rotate-[-45deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-[#F2F2F2] flex flex-col md:flex-row items-center justify-between text-[#666666]">
          <p className="text-[12px]">© 2025 All Rights Reserved</p>
          <div className="mt-4 md:mt-0">
            <div className="px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm flex items-center justify-center">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/4cdbd617-1711-439d-a5f5-7af24b9a4f0b/WhatsApp-Image-2026-01-23-at-5.11.01-AM-1769699643506.png?width=8000&height=8000&resize=contain"
                alt="Adona Logo"
                width={100}
                height={32}
                className="object-contain h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;