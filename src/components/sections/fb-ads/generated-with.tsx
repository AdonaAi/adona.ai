"use client";

const GeneratedWith = () => {
    const galleryImages = [
        // Column 1 (Left)
        { src: "https://framerusercontent.com/images/a2Hf6iYb0zUtARdY6Na19BiJSeE.jpg", rotate: "-5deg" },
        { src: "https://framerusercontent.com/images/HM8YJWZnkMM8UUfXmCrDjdKk5g.png", rotate: "3deg" },
        { src: "https://framerusercontent.com/images/4RFVH9yxU3AuBfintmHaaBVRqHk.png", rotate: "-3deg" },
        { src: "https://framerusercontent.com/images/s16II8C0SZsBzl1KmGglOzIFw.gif", rotate: "4deg" },
        // Column 2 (Left-center)
        { src: "https://framerusercontent.com/images/ow51qYX8qxf0XRsfXr5NkCQdcQ.jpg", rotate: "4deg" },
        { src: "https://framerusercontent.com/images/GN21IT4CfCV4oPGu1fmJpk0u2FM.jpg", rotate: "-2deg" },
        { src: "https://framerusercontent.com/images/vVC8PmeJiy6ZSujNg8FstdQ4UQ.jpg", rotate: "3deg" },
        { src: "https://framerusercontent.com/images/gzMf3xuohe9MXmIked4kQthx1rY.jpg", rotate: "-4deg" },
        // Column 3 (Right-center)
        { src: "https://framerusercontent.com/images/7G36cqhnUUhsPEzzeqHHHdLZPQ.jpg", rotate: "-3deg" },
        { src: "https://framerusercontent.com/images/fo2fJhVrxXMudi5a8xBX5bzM.gif", rotate: "5deg" },
        { src: "https://framerusercontent.com/images/cWYGFmlNYIgPFd7hMEX2WOxvEs.jpg", rotate: "-2deg" },
        { src: "https://framerusercontent.com/images/eeAkLhMwUYfUXu7pq7REOtAhKI.png", rotate: "3deg" },
        // Column 4 (Right)
        { src: "https://framerusercontent.com/images/8ZFwpZq7TB0GxIgZ6AL98L5Rps.jpg", rotate: "4deg" },
        { src: "https://framerusercontent.com/images/7l75680RqRwEqBC5g7feRx2pDs.jpg", rotate: "-5deg" },
        { src: "https://framerusercontent.com/images/Lp8I02Bi5LEPxo1iVCoPZYGqLA.jpg", rotate: "3deg" },
        { src: "https://framerusercontent.com/images/ErMuXOXxUTRCEW9g4K26jEbN98U.gif", rotate: "-4deg" },
    ];

    // Split images into 4 columns
    const columns = [
        galleryImages.slice(0, 4),
        galleryImages.slice(4, 8),
        galleryImages.slice(8, 12),
        galleryImages.slice(12, 16),
    ];

    return (
        <section className="bg-[#fafafa] relative" id="integrations">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex gap-4 md:gap-6">
                    {/* Left Column */}
                    <div className="flex-1 flex flex-col gap-4 md:gap-6 pt-[100px]">
                        {columns[0].map((image, index) => (
                            <div 
                                key={index}
                                className="w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-xl"
                                style={{ transform: `rotate(${image.rotate})` }}
                            >
                                <img
                                    src={image.src}
                                    alt={`Generated content ${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Left-Center Column */}
                    <div className="flex-1 flex flex-col gap-4 md:gap-6 pt-[200px]">
                        {columns[1].map((image, index) => (
                            <div 
                                key={index}
                                className="w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-xl"
                                style={{ transform: `rotate(${image.rotate})` }}
                            >
                                <img
                                    src={image.src}
                                    alt={`Generated content ${index + 5}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Center - Sticky Card */}
                    <div className="flex-[1.5] flex items-start justify-center pt-[300px] pb-[300px]">
                        <div className="sticky top-[40%]">
                            <div 
                                className="rounded-3xl px-8 py-6 md:px-12 md:py-10 border border-white/30"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    backdropFilter: 'blur(16px)',
                                    WebkitBackdropFilter: 'blur(16px)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                                }}
                            >
                                <div className="flex flex-col items-center justify-center text-center">
                                    <h3 className="text-[12px] md:text-[14px] font-semibold text-[#1D1D1F] mb-1 tracking-tight">
                                        Generated with
                                    </h3>
                                    <span 
                                        className="text-[32px] md:text-[56px] font-black leading-[1] tracking-[-0.8px] text-center bg-gradient-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent"
                                    >
                                        adona.ai
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right-Center Column */}
                    <div className="flex-1 flex flex-col gap-4 md:gap-6 pt-[150px]">
                        {columns[2].map((image, index) => (
                            <div 
                                key={index}
                                className="w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-xl"
                                style={{ transform: `rotate(${image.rotate})` }}
                            >
                                <img
                                    src={image.src}
                                    alt={`Generated content ${index + 9}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col gap-4 md:gap-6 pt-[50px]">
                        {columns[3].map((image, index) => (
                            <div 
                                key={index}
                                className="w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-xl"
                                style={{ transform: `rotate(${image.rotate})` }}
                            >
                                <img
                                    src={image.src}
                                    alt={`Generated content ${index + 13}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GeneratedWith;
