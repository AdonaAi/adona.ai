"use client";

export default function ProgressBanner() {
  const progress = 0;
  const maxProgress = 25;

  const colors = [
    { bg: "rgba(3, 4, 94, 0.1)", fill: "rgb(3, 4, 94)" },
    { bg: "rgba(0, 119, 182, 0.1)", fill: "rgb(0, 119, 182)" },
    { bg: "rgba(0, 180, 216, 0.1)", fill: "rgb(0, 180, 216)" },
    { bg: "rgba(144, 224, 239, 0.1)", fill: "rgb(144, 224, 239)" },
    { bg: "rgba(202, 240, 248, 0.1)", fill: "rgb(202, 240, 248)" },
  ];

  return (
    <div className="w-full relative overflow-hidden rounded-3xl mb-5" style={{ height: "60px" }}>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${colors[0].bg} 0%, ${colors[1].bg} 25%, ${colors[2].bg} 50%, ${colors[3].bg} 75%, ${colors[4].bg} 100%)`,
        }}
      />
      <div className="relative flex justify-between items-center h-full px-6 gap-5">
        {/* Left Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#caf0f8] rounded-full shadow-sm">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2L12.5 7.5L18 8.5L14 13L15 18.5L10 15.5L5 18.5L6 13L2 8.5L7.5 7.5L10 2Z" fill="#0077b6" />
          </svg>
          <span className="text-[#0077b6] font-semibold text-[15px]">Start your journey!</span>
        </div>

        {/* Center Progress */}
        <div className="flex items-center gap-4 flex-1 justify-center">
          <span className="text-[15px] font-medium text-[#03045e]">
            Adona.AI <span className="font-bold">improves</span> with every piece <span className="font-bold">created:</span>
          </span>
          <div className="relative w-[200px] h-2.5 rounded-full bg-white/50 border border-white shadow-inner">
            <div className="absolute inset-0 flex rounded-full overflow-hidden">
              {colors.map((color, index) => (
                <div key={index} className="relative flex-1">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: color.bg,
                      boxShadow: "inset 1px -1px 3px rgba(255, 255, 255, 0.3)",
                    }}
                  />
                  <div
                    className="absolute inset-0 transition-[width] duration-300"
                    style={{
                      width: "0%",
                      backgroundColor: color.fill,
                      boxShadow: "inset 1px -1px 3px rgba(255, 255, 255, 0.3)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <span className="text-sm font-semibold text-[#03045e] min-w-[40px]">
            <span className="font-bold">{progress}</span>/{maxProgress}
          </span>
        </div>

        {/* Right Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-[#e2e8f0]">
          <span className="text-[15px] font-semibold text-[#03045e]">Starter 🌱</span>
        </div>
      </div>
    </div>
  );
}
