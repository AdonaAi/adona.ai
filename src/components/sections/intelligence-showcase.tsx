// Brand Logo Images
const brandLogosData = [
    { name: 'Apple', src: '/images/LOGOTYPE.png' },
    { name: 'Autodesk', src: '/images/LOGOTYPE2.png' },
    { name: 'Amazon', src: '/images/LOGOTYPE3.png' },
    { name: 'Blackberry', src: '/images/LOGOTYPE4.png' },
    { name: 'Bumble', src: '/images/LOGOTYPE5.png' },
    { name: 'Nike', src: '/images/LOGOTYPE6.png' },
];

const IntelligenceShowcase = () => {
    const lineColors = ['#3b82f6', '#a855f7', '#ec4899', '#ec4899', '#a855f7', '#3b82f6'];

    return (
        <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-black max-w-[800px] mx-auto leading-[1.15] tracking-tight px-4">
                        AI built on insights from millions of high-performing marketing assets.
                    </h2>
                </div>

                <div className="relative max-w-[1000px] mx-auto h-auto flex flex-col items-center">

                    {/* User Requested Structure - Framer Icon Stack */}
                    <div className="relative w-full h-12 sm:h-14 md:h-16 mb-[-30px] sm:mb-[-35px] md:mb-[-40px] z-30" data-framer-name="Icon Stack">
                        {brandLogosData.map((logo, index) => {
                            // Calculate percentage positions to match SVG x-coordinates
                            // SVG x values: 50, 230, 410, 590, 770, 950 out of 1000
                            const xPositions = [5, 23, 41, 59, 77, 95]; // percentages
                            return (
                                <div
                                    key={index}
                                    className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center z-30 hover:scale-110 transition-transform"
                                    style={{
                                        left: `${xPositions[index]}%`,
                                        transform: 'translateX(-50%)',
                                        top: '0'
                                    }}
                                >
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10">
                                        <img
                                            src={logo.src}
                                            alt={logo.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* SVG Curved Connections */}
                    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] z-20 pointer-events-none -mt-4">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 300" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#3E86C6" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                            <g transform="translate(0, 40)">
                                {[5, 23, 41, 59, 77, 95].map((x, i) => (
                                    <g key={i}>
                                        {/* Base connection line */}
                                        <path
                                            d={`M ${x} 0 C ${x} 120 50 120 50 240`}
                                            stroke={lineColors[i]}
                                            strokeWidth="0.2"
                                            fill="none"
                                            strokeLinecap="round"
                                            opacity="0.6"
                                        />
                                        {/* Animated pulse line */}
                                        <path
                                            d={`M ${x} 0 C ${x} 120 50 120 50 240`}
                                            stroke={lineColors[i]}
                                            strokeWidth="0.2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeDasharray="2 18"
                                            className="animate-dash"
                                            style={{ animationDelay: `${i * 0.5}s` }}
                                            opacity="1"
                                        />
                                    </g>
                                ))}
                                {/* Central lead-in */}
                                <path
                                    d="M 50 240 L 50 260"
                                    stroke="#3b82f6"
                                    strokeWidth="0.3"
                                    fill="none"
                                    strokeLinecap="round"
                                    opacity="0.5"
                                />
                            </g>
                        </svg>
                    </div>

                    {/* Composite Image Visual with Masking */}
                    <div className="relative w-full max-w-5xl mx-auto -mt-[10px] sm:-mt-[15px] md:-mt-[20px] z-10 px-4 sm:px-0">
                        {/* White Mask to hide the top gray icons part of the image */}
                        <div className="absolute top-0 left-0 w-full h-[15%] bg-white z-20 pointer-events-none"
                            style={{ background: 'linear-gradient(to bottom, #ffffff 40%, rgba(255,255,255,0) 100%)' }}
                        />

                        <img
                            src="/images/adona image section AI trained.png"
                            alt="AI training visual"
                            className="w-full h-auto object-cover relative z-10 rounded-lg sm:rounded-xl"
                        />
                    </div>
                </div>

                {/* Bottom Intelligence Stats Section */}
                <div className="mt-24 sm:mt-32 md:mt-40 lg:mt-48 xl:mt-52 max-w-6xl mx-auto border-t border-[#F1F1F1] pt-12 sm:pt-16 md:pt-20">
                    <p className="text-center text-base sm:text-lg md:text-xl lg:text-[22px] font-semibold text-[#1D1D1F] mb-10 sm:mb-12 md:mb-14 lg:mb-16 tracking-tight px-4">
                        Performance driven content intelligence.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 text-center px-4 sm:px-6">
                        {[
                            { value: '10M+', label: 'various content assets processed' },
                            { value: '19,000+', label: 'high-performing ads analyzed' },
                            { value: '27%', label: 'average CTR lift across tested campaigns' },
                            { value: '95+', label: 'languages supported for global brands' },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-black bg-gradient-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent leading-none mb-2 sm:mb-3 px-1 pb-1">
                                    {item.value}
                                </span>
                                <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-[#6E6E73] leading-snug lg:max-w-[200px] font-medium">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .animate-dash {
                    stroke-dashoffset: 200;
                    animation: dash-animation 5s linear infinite;
                }
                @keyframes dash-animation {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
            `}</style>
        </section >
    );
};

export default IntelligenceShowcase;
