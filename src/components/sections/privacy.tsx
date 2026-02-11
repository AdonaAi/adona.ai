import React from 'react';

/**
 * Privacy Section
 * Featuring "Great powers come with great privacy."
 * Minimalist design with a lock/check icon and text descriptions.
 */

const PrivacySection: React.FC = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container px-6 mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          {/* Lock Icon Wrapper */}
          <div className="mb-8 flex justify-center items-center">
            {/* Custom SVG for the Lock with integrated check as seen in screenshots */}
            <svg
              width="54"
              height="54"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#1f1f1f]"
            >
              <rect x="5" y="11" width="14" height="10" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              <path d="M10 16l2 2 4-4" className="text-accent" style={{ stroke: '#8a84ff' }} />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-[40px] md:text-[48px] font-bold tracking-tight text-[#1f1f1f] leading-[1.2] mb-12 max-w-[600px]">
            Great powers come <br />
            with great <span className="text-holo-gradient">privacy.</span>
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 text-left max-w-[800px] w-full">
            <div className="flex flex-col space-y-3">
              <p className="text-[16px] leading-[1.6] text-[#666666]">
                Your brand is your greatest asset. We protect it with full encryption, zero sharing, and absolute control in your hands.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="text-[16px] leading-[1.6] text-[#666666]">
                Stay in control - from your first post to your hundredth campaign, and everything after.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual styling for gradients if needed */}
      <style jsx global>{`
        .text-holo-gradient {
          background: linear-gradient(90deg, #03045e 0%, #0077b6 50%, #00b4d8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default PrivacySection;