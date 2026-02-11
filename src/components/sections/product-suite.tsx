import React from 'react';

const ProductSuite: React.FC = () => {
  const tools = [
    { name: 'AI Influencer Generator', url: '#' },
    { name: 'Instagram Ad Generator', url: '#' },
    { name: 'AI Ad Generator', url: '#' },
    { name: 'AI UGC Video Generator', url: '#' },
    { name: 'AI Tiktok Generator', url: '#' },
    { name: 'AI Newsletter Generator', url: '#' },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[120px] md:py-[160px]">
      {/* Decorative Circular Graphic Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="relative flex items-center justify-center">
          {/* Inner Circle */}
          <div className="h-[400px] w-[400px] rounded-full border border-[#f1f1f1] opacity-[0.4]" />
          {/* Middle Circle */}
          <div className="absolute h-[600px] w-[600px] rounded-full border border-[#f1f1f1] opacity-[0.3]" />
          {/* Outer Circle */}
          <div className="absolute h-[800px] w-[800px] rounded-full border border-[#f1f1f1] opacity-[0.2]" />
          
          {/* Gradient Blur Orbs */}
          <div 
            className="absolute left-[20%] top-[20%] h-[300px] w-[300px] rounded-full opacity-[0.03] blur-[80px]" 
            style={{ background: 'linear-gradient(90deg, #8e8ffa 0%, #ef5a6f 100%)' }} 
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto max-w-[1200px]">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#f1f1f1] bg-[#f9f9f9] px-4 py-1.5">
            <span className="text-[14px] font-medium leading-none text-[#666666]">
              Powered by adona.ai
            </span>
          </div>
          
          <h2 className="font-display text-[40px] font-bold tracking-tight text-[#121212] md:text-[48px] lg:text-[56px] leading-[1.1] mb-6">
            Explore our suite of AI marketing tools
          </h2>
          
          <p className="mx-auto max-w-[640px] text-[18px] leading-[1.6] text-[#666666]">
            Forget boring templates. adona.ai dives deep into your brand&rsquo;s DNA and generates unique ads that feel unmistakably you.
          </p>
        </div>

        {/* Tools Grid / Pills */}
        <div className="mx-auto flex max-w-[900px] flex-wrap justify-center gap-3">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              className="group relative inline-flex items-center justify-center rounded-full border border-[#121212] bg-white px-7 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
            >
              <span className="relative z-10 font-sans text-[16px] font-semibold text-[#121212] transition-colors duration-300">
                {tool.name}
              </span>
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 -z-0 rounded-full bg-[#f9f9f9] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;