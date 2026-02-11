// Brand Logo Images
const brandLogosData = [
    { name: 'Apple', src: '/images/LOGOTYPE.png' },
    { name: 'Autodesk', src: '/images/LOGOTYPE2.png' },
    { name: 'Amazon', src: '/images/LOGOTYPE3.png' },
    { name: 'Blackberry', src: '/images/LOGOTYPE4.png' },
    { name: 'Bumble', src: '/images/LOGOTYPE5.png' },
    { name: 'Nike', src: '/images/LOGOTYPE6.png' },
];

const FBIntelligenceShowcase = () => {
    const lineColors = ['#3b82f6', '#a855f7', '#ec4899', '#ec4899', '#a855f7', '#3b82f6'];

    return (
        <section className="bg-white py-[100px] md:py-[140px] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-[24px] md:text-[32px] font-bold text-black max-w-[800px] mx-auto leading-[1.15] tracking-tight">
                        AI trained on millions of high-performance Facebook ads
                    </h2>
                </div>

                <div className="relative max-w-[1000px] mx-auto h-auto flex flex-col items-center">
                    
                    {/* User Requested Structure - Framer Icon Stack */}
                    <div className="relative w-full h-16 mb-[-40px] z-30" data-framer-name="Icon Stack">
                        {brandLogosData.map((logo, index) => {
                            // Calculate percentage positions to match SVG x-coordinates
                            // SVG x values: 50, 230, 410, 590, 770, 950 out of 1000
                            const xPositions = [5, 23, 41, 59, 77, 95]; // percentages
                            return (
                                <div 
                                    key={index} 
                                    className="absolute w-12 h-12 md:w-16 md:h-16 flex items-center justify-center z-30 hover:scale-110 transition-transform"
                                    style={{ 
                                        left: `${xPositions[index]}%`,
                                        transform: 'translateX(-50%)',
                                        top: '0'
                                    }}
                                >
                                    <div className="w-8 h-8 md:w-10 md:h-10">
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
                    <div className="relative w-full h-[300px] z-20 pointer-events-none -mt-4">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 300" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="fbLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
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
                    <div className="relative w-full max-w-5xl mx-auto -mt-[20px] z-10">
                        {/* White Mask to hide the top gray icons part of the image */}
                        <div className="absolute top-0 left-0 w-full h-[15%] bg-white z-20 pointer-events-none"
                             style={{ background: 'linear-gradient(to bottom, #ffffff 40%, rgba(255,255,255,0) 100%)' }}
                        />

                        <img
                            src="/images/adona image section AI trained.png"
                            alt="AI training visual"
                            className="w-full h-auto object-cover relative z-10"
                        />
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
        </section>
    );
};

export default FBIntelligenceShowcase;
