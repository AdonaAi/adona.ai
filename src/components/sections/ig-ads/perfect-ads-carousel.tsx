"use client";

import { useState, useEffect } from 'react';

const IGPerfectAdsCarousel = () => {
    const [activeTab, setActiveTab] = useState('videos');
    const [rotation, setRotation] = useState(0);

    const tabs = [
        { id: 'images', label: 'Images' },
        { id: 'ugc', label: 'UGC' },
        { id: 'videos', label: 'Videos' },
    ];

    const images = [
        { src: "https://framerusercontent.com/images/ua617sOhLSuWMAFTIzRVkpFTw.jpg", angle: 0 },
        { src: "https://framerusercontent.com/images/h6emetNVPHBenRRxii5mkjXhcE.jpg", angle: 30 },
        { src: "https://framerusercontent.com/images/2VTZndnfh23XWnoA7sbs2rzyqUw.webp", angle: 60 },
        { src: "https://framerusercontent.com/images/nZaH6jO1GawBG81nxBkr3D8F8GY.png", angle: 90 },
        { src: "https://framerusercontent.com/images/hrLOkV2MnGHrTYWFckSK43fBEuI.jpg", angle: 120 },
        { src: "https://framerusercontent.com/images/1Fp19OWUK7XLfl6aiqeTWi4V7w.jpg", angle: 150 },
        { src: "https://framerusercontent.com/images/3EO0hdqO3Dr8ve0bPVWf9PXbBo.png", angle: 180 },
        { src: "https://framerusercontent.com/images/vef3NFFJlwRC7rJo0qFXp3ZJ1BM.png", angle: 210 },
        { src: "https://framerusercontent.com/images/81KWN8JG5GPJIZJoVuGnVqKevGg.png", angle: 240 },
        { src: "https://framerusercontent.com/images/2a3fOHZgcmcwLyul1UEBdP1ks.jpg", angle: 270 },
        { src: "https://framerusercontent.com/images/jKx448va3KMNF3oe9QfNC8o52xA.jpg", angle: 300 },
        { src: "https://framerusercontent.com/images/wCC3PWzXz2zJ0afbHDNxXY3pV4.jpg", angle: 330 },
    ];

    // Videos from Framer reference
    const videos = [
        { src: "https://framerusercontent.com/assets/x0ylpgsBtKR92VCW4k0u4yQZLdU.mp4", angle: 0 },
        { src: "https://framerusercontent.com/assets/a2K4rySizlcHuybQgUqjfaBO3M.mp4", angle: 30 },
        { src: "https://framerusercontent.com/assets/FYd5Xhk5gYf2n9Gd6Qv3Bi7LBuo.mp4", angle: 60 },
        { src: "https://framerusercontent.com/assets/8NQsj7omf2heVxDnXXupyXLjWw.mp4", angle: 90 },
        { src: "https://framerusercontent.com/assets/6KghsHmjDa24x8l7brKy604Bfg.mp4", angle: 120 },
        { src: "https://framerusercontent.com/assets/TOEFQEWfru9Xg7KIfL3qqLMDy0.mp4", angle: 150 },
        { src: "https://framerusercontent.com/assets/rgWZXqSf3531cLTt9wZiLHIAAc.mp4", angle: 180 },
        { src: "https://framerusercontent.com/assets/mR24hwA0k1VrKIrqcVGFS79oTE.mp4", angle: 210 },
        { src: "https://framerusercontent.com/assets/V3RNRK7YuLqMV14xhofvrfEDBg.mp4", angle: 240 },
        { src: "https://framerusercontent.com/assets/rPOtO0xFILaRsV4ryp4jIUiT30.mp4", angle: 270 },
        { src: "https://framerusercontent.com/assets/HiZufTH6uiqhRUCkriwfW4bNowI.mp4", angle: 300 },
        { src: "https://framerusercontent.com/assets/ogaYsQTP33nytdnAVYlogIerRo.mp4", angle: 330 },
    ];

    const ugc = [
        { src: "https://framerusercontent.com/assets/6hKDSAEtUDFybHd08ba6SUx0w.mp4", angle: 0 },
        { src: "https://framerusercontent.com/assets/9NZSp2r6iVLrms8WiD8QhwF5X4.mp4", angle: 30 },
        { src: "https://framerusercontent.com/assets/545eCuIKFTpF7WlcAHamqNTuUnA.mp4", angle: 60 },
        { src: "https://framerusercontent.com/assets/4GnIpCLZqhLt0sDCgblMlz5ib4s.mp4", angle: 90 },
        { src: "https://framerusercontent.com/assets/LdXMxDlJ2xi8prEhoQt44qTqTvQ.mp4", angle: 120 },
        { src: "https://framerusercontent.com/assets/p0mBfAnGYPA6Q1dcrY8pF2Q7aPk.mp4", angle: 150 },
        { src: "https://framerusercontent.com/assets/7RacCiwmybnhxbXXrns0aHyHrQ.mp4", angle: 180 },
        { src: "https://framerusercontent.com/assets/1iQjUFtSzRbmpvWEEmtuUQaa74.mp4", angle: 210 },
        { src: "https://framerusercontent.com/assets/Qs7eK2Oc711i9XLPi8jwEhnLDs.mp4", angle: 240 },
        { src: "https://framerusercontent.com/assets/rhUXmFOXi55ATsTxNAREJZvOT6k.mp4", angle: 270 },
        { src: "https://framerusercontent.com/assets/B5XwmvVgdvuUJHOMcqv5UmpBwXE.mp4", angle: 300 },
        { src: "https://framerusercontent.com/assets/CW6PrhPSUtiz3y3u1y2f0XON4Q.mp4", angle: 330 },
    ];

    const getCurrentContent = () => {
        switch (activeTab) {
            case 'videos': return { items: videos, type: 'video' };
            case 'ugc': return { items: ugc, type: 'video' };
            default: return { items: images, type: 'image' };
        }
    };

    // Auto-rotate the carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => prev - 0.3);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const content = getCurrentContent();

    return (
        <section className="bg-white py-[80px] md:py-[120px] overflow-hidden" id="integrations-2">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Headline */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-[28px] md:text-[40px] font-bold text-[#1D1D1F] leading-tight tracking-tight mb-4">
                        Perfect ads everytime with adona.ai
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
                        From feeds ads to carousel ads, adona.ai&apos;s AI helps you step up your Instagram ads game. No more ads that look templated.
                    </p>
                </div>

                {/* 3D Carousel Container */}
                <div className="relative h-[400px] md:h-[500px] mb-12 rounded-3xl overflow-hidden">
                    {/* 3D Space */}
                    <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                            perspective: '1200px',
                        }}
                    >
                        <div 
                            className="relative w-full h-full"
                            style={{
                                transformStyle: 'preserve-3d',
                                transform: `rotateY(${rotation}deg)`,
                            }}
                        >
                            {content.items.map((item, index) => (
                                <div
                                    key={`${activeTab}-${index}`}
                                    className="absolute left-1/2 top-1/2"
                                    style={{
                                        transform: `translateX(-50%) translateY(-50%) rotateY(${item.angle}deg)`,
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    <div
                                        className="w-[100px] md:w-[145px] h-[175px] md:h-[254px] rounded-2xl overflow-hidden shadow-2xl"
                                        style={{
                                            transform: 'rotateY(90deg) translateZ(320px)',
                                            backfaceVisibility: 'hidden',
                                        }}
                                    >
                                        {content.type === 'image' ? (
                                            <img
                                                src={item.src}
                                                alt={`Ad example ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                draggable="false"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <video
                                                src={item.src}
                                                className="w-full h-full object-cover"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                preload="auto"
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-8 md:gap-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className="flex flex-col items-center gap-2 group"
                        >
                            <span className={`text-[18px] md:text-[22px] font-medium transition-colors ${
                                activeTab === tab.id ? 'text-[#1D1D1F]' : 'text-[#6E6E73]'
                            }`}>
                                {tab.label}
                            </span>
                            <div className={`h-[3px] w-full rounded-full transition-all ${
                                activeTab === tab.id 
                                    ? 'bg-gradient-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8]' 
                                    : 'bg-[#DBDBDB]'
                            }`} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IGPerfectAdsCarousel;
