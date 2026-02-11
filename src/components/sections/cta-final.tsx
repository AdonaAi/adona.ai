import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * CtaFinal Section component
 * Clones the final call-to-action section with high precision.
 * Target: Massive headline "Ready to create agency-like content?" and gradient button.
 */
const CtaFinal: React.FC = () => {
  return (
    <section className="section-padding bg-[#fafafa]">
      <div className="container px-[24px]">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <h2 
            className="mb-[16px] max-w-[800px] leading-[1.1] tracking-[-0.04em]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 8vw, 72px)',
              fontWeight: 800,
              color: 'var(--foreground)'
            }}
          >
            Ready to create agency-like content?
          </h2>

          {/* Subtext */}
          <p 
            className="mb-[48px] tracking-tight"
            style={{
              fontSize: '24px',
              fontWeight: 500,
              color: 'var(--muted-foreground)',
              lineHeight: 1.4
            }}
          >
            (Without the fees)
          </p>

          {/* Primary CTA Button */}
          <a
            href="https://www.adona.ai/pricing"
            className="btn-pill bg-accent-gradient text-white group"
            style={{
              padding: '16px 48px',
              fontSize: '18px',
              gap: '10px'
            }}
          >
            <span className="relative z-10">Buy now</span>
            <ArrowRight 
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" 
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>

      {/* Embedded Styles for the specific gradient and layout logic */}
      <style jsx global>{`
        .bg-accent-gradient {
          background: linear-gradient(91deg, #9b51e0 0%, #e84a96 50%, #f77316 100%);
          box-shadow: 0 4px 15px rgba(232, 74, 150, 0.3);
        }
        
        .btn-pill {
          border-radius: 9999px;
          font-weight: 700;
          transition: transform 0.2s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
        }

        .btn-pill:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(232, 74, 150, 0.4);
        }

        .section-padding {
          padding-top: 160px;
          padding-bottom: 160px;
        }

        @media (max-width: 768px) {
          .section-padding {
            padding-top: 100px;
            padding-bottom: 100px;
          }
          
          p {
            font-size: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CtaFinal;