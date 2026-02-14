import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Legal: [
      { label: 'Refund policy', href: '/refund-policy' },
      { label: 'Privacy policy', href: '/privacy-policy' },
      { label: 'Terms of service', href: '/terms-of-service' },
    ],
    Support: [
      { label: 'Login', href: '/login' },
    ],
    Company: [
      { label: 'How it works', href: '#' },
    ],
    Resources: [
      { label: 'Blog', href: '#' },
      { label: 'Use cases', href: '#' },
    ],
  };

  const socialLinks = [
    { label: 'Instagram', href: '#', icon: true },
    { label: 'LinkedIn', href: '#', icon: true },
  ];

  return (
    <footer className="w-full bg-white pt-8 sm:pt-10 md:pt-14 lg:pt-16 pb-8 sm:pb-10 md:pb-14 lg:pb-16 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 sm:mb-10 md:mb-12 gap-6 sm:gap-8 md:gap-10">
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <a
              href="mailto:support@adona.ai"
              className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-foreground hover:opacity-70 transition-opacity"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              support@adona.ai
            </a>
            <p className="text-[#666666] text-[14px] sm:text-[15px] md:text-[16px]">Let&apos;s talk</p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 sm:gap-4">
            <p className="text-foreground text-[16px] sm:text-[17px] md:text-[18px] font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
              Want a mystery gift ?
            </p>
            <a
              href="#"
              className="btn-gradient px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 text-[14px] sm:text-[15px] md:text-[16px] rounded-full inline-flex items-center justify-center hover:scale-[1.03] transition-transform"
            >
              Yes please
            </a>
          </div>
        </div>

        {/* Links Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-y-8 sm:gap-y-10 md:gap-y-12 gap-x-6 sm:gap-x-8 pb-8 sm:pb-10 md:pb-12 border-b border-transparent">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                {category}
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-3.5 md:gap-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#000000] text-[14px] sm:text-[15px] md:text-[16px] hover:opacity-60 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links Column */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 md:col-start-5 lg:col-start-6">
            <ul className="flex flex-col gap-3 sm:gap-3.5 md:gap-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#000000] text-[14px] sm:text-[15px] md:text-[16px] flex items-center gap-1 hover:opacity-60 transition-opacity"
                  >
                    {link.label}
                    <svg
                      width="10"
                      height="10"
                      className="sm:w-[11px] sm:h-[11px] md:w-[12px] md:h-[12px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4 sm:gap-0 pt-8 sm:pt-10 md:pt-12">
          <p className="text-[#666666] text-[12px] sm:text-[13px] md:text-[14px] text-center sm:text-left">
            © 2026 Adona Ai. All rights reserved.
          </p>

          <div className="flex items-center justify-end">
            <span className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#1d1d1f] tracking-tight lowercase">
              adona.ai
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;