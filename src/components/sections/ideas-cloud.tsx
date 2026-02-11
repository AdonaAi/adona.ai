import React from 'react';

const IdeasCloud = () => {
  const row1 = [
    { text: "Features", color: "text-[#03045e]" },
    { text: "Us vs Them", color: "text-[#666666]" },
    { text: "Testimonials", color: "text-[#03045e]" },
    { text: "Best-sellers", color: "text-[#0077b6]" },
    { text: "Media", color: "text-[#B197FC]" },
    { text: "Negative Hook", color: "text-[#F06595]" },
    { text: "Mythbuster", color: "text-[#03045e]" },
    { text: "Features", color: "text-[#666666]" },
  ];

  const row2 = [
    { text: "What's Inside", color: "text-[#03045e]" },
    { text: "FAQ", color: "text-[#03045e]" },
    { text: "Before & After", color: "text-[#03045e]" },
    { text: "Top X Reasons", color: "text-[#B197FC]" },
    { text: "Problem-solution", color: "text-[#03045e]" },
    { text: "Statistics", color: "text-[#0077b6]" },
    { text: "Notes", color: "text-[#03045e]" },
  ];

  return (
    <section className="bg-white py-[120px] overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-[24px] font-bold text-black font-sans leading-tight tracking-[-0.03em] mb-4">Access Thousands of Creative Concepts</h2>

          <div className="flex flex-col gap-6 w-full max-w-[1000px]">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-center gap-4">
              {row1.map((item, idx) => (
                <div
                  key={`r1-${idx}`}
                  className={`
                    px-6 py-2.5 rounded-full border border-[#f1f5f9] 
                    bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                    text-[16px] font-semibold transition-transform hover:scale-105
                    ${item.color}
                  `}
                >
                  {item.text}
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap justify-center gap-4">
              {row2.map((item, idx) => (
                <div
                  key={`r2-${idx}`}
                  className={`
                    px-6 py-2.5 rounded-full border border-[#f1f5f9] 
                    bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                    text-[16px] font-semibold transition-transform hover:scale-105
                    ${item.color}
                  `}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeasCloud;