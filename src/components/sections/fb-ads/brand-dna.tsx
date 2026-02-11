import React from 'react';
import Image from 'next/image';

const BrandDNA = () => {
  return (
    <section className="bg-[#fafafa] py-[160px] px-6">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center mb-[80px]">
          <div className="badge-pill mb-6 border border-[#e6e6e6] px-4 py-1 rounded-full text-xs font-semibold text-[#666666] tracking-wide uppercase">
            Powered By
          </div>
          <h2 className="text-[48px] font-bold leading-[1.2] mb-6 tracking-tight text-[#000000]">
            Your Brand DNA, in Every Campaign
          </h2>
          <p className="text-[20px] text-[#666666] max-w-[700px] leading-[1.6]">
            Say goodbye to cookie-cutter templates. adona.ai’s AI learns your brand’s DNA and delivers ads that look, feel, and sound unmistakably you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          <div className="card-modern bg-white p-10 rounded-[24px] border border-[#e6e6e6] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col justify-between h-full min-h-[300px]">
            <div>
              <h3 className="text-[24px] font-bold mb-3 text-[#000000]">Captures Your Style</h3>
              <p className="text-[16px] text-[#666666] leading-[1.6] mb-8">
                Understands your creative vision. So every asset feels like it came from inside your team.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-[#4A90E2]"></div>
              <div className="w-8 h-8 rounded-full bg-[#7B61FF]"></div>
              <div className="w-8 h-8 rounded-full bg-[#FF4D94]"></div>
              <div className="w-8 h-8 rounded-full bg-[#FF6B6B]"></div>
              <div className="w-8 h-8 rounded-full bg-[#FF9F43]"></div>
            </div>
          </div>

          <div className="card-modern bg-white p-10 rounded-[24px] border border-[#e6e6e6] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col justify-between h-full min-h-[300px]">
            <div>
              <h3 className="text-[24px] font-bold mb-3 text-[#000000]">Knows Your Audience</h3>
              <p className="text-[16px] text-[#666666] leading-[1.6] mb-8">
                Learns your customer’s mindset, habits, and pain points, then builds content they actually care about.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/7qN846lbl3sfBP6AMiIrid0zNNE-29.jpg" width={24} height={24} alt="Platform" className="rounded-sm" />
              </div>
              <div className="w-10 h-10 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/images/tdt7Go8IrFw0XWZyMto0fAu1c-30.jpg" width={24} height={24} alt="Platform" className="rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandDNA;
