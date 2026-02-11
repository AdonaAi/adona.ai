"use client";

import { useState, useEffect } from 'react';

const PerfectAdsCarousel = () => {
    const [activeTab, setActiveTab] = useState('images');
    const [rotation, setRotation] = useState(0);

    const tabs = [
        { id: 'images', label: 'Images' },
        { id: 'videos', label: 'Videos' },
        { id: 'ugc', label: 'UGC' },
    ];

    const images = [
        { src: "https://framerusercontent.com/images/2a3fOHZgcmcwLyul1UEBdP1ks.jpg", angle: 0 },
        { src: "https://framerusercontent.com/images/UBs9Z4wq4GqpuHp5XswtK5u1zI.png", angle: 30 },
        { src: "https://framerusercontent.com/images/BtCYw5IEfKEvSTzUP8zCYFYrNTg.jpg", angle: 60 },
        { src: "https://framerusercontent.com/images/5aMi9Gnq1PhKd6ZM0RY6YJGywc8.jpg", angle: 90 },
        { src: "https://framerusercontent.com/images/OaOuuXKhY89xa9oFiBMUsuopm9Y.jpg", angle: 120 },
        { src: "https://framerusercontent.com/images/840hnzwHlCM71jxNtiDmhaG9Qk.png", angle: 150 },
        { src: "https://framerusercontent.com/images/fRbOMsdzs9ey9gSiSeEb3dBYw.png", angle: 180 },
        { src: "https://framerusercontent.com/images/01GK1HpOxrQvuD0pOyV9VNhE.jpg", angle: 210 },
        { src: "https://framerusercontent.com/images/Boan9cVWntU0fjJecpozQpHC8.jpg", angle: 240 },
        { src: "https://framerusercontent.com/images/l6CKJaxzTnMWCArrBlA1B87SCs.png", angle: 270 },
        { src: "https://framerusercontent.com/images/oVd6aKPPJITTZT3c9njaifA8.jpg", angle: 300 },
        { src: "https://framerusercontent.com/images/eFxJTKmTDzGytOJfXnxmpAJCcY.jpg", angle: 330 },
    ];

    const videos = [
        { src: "https://framerusercontent.com/assets/cPoxwPrfQe535BzYPdrUG2IrYo.mp4", angle: 0 },
        { src: "https://framerusercontent.com/assets/hZmTTO270tJZSqHYDc0P5hE.mp4", angle: 30 },
        { src: "https://framerusercontent.com/assets/6zXnZfX0tWUWGs2i9Ma9DHuUOR8.mp4", angle: 60 },
        { src: "https://framerusercontent.com/assets/JHe3IfMChQfx9GV0zSUgnhC4k.mp4", angle: 90 },
        { src: "https://framerusercontent.com/assets/y6wcHk059F60gMARGnzybbYaM0.mp4", angle: 120 },
        { src: "https://framerusercontent.com/assets/f6z2UZTszeOzTiGNZ4U5rihkTk.mp4", angle: 150 },
        { src: "https://framerusercontent.com/assets/clfGmNE9xSl9opF4fFTgDvHpUCs.mp4", angle: 180 },
        { src: "https://framerusercontent.com/assets/ki7Bl6jwVjb5VbHZfU5hCd9O30M.mp4", angle: 210 },
        { src: "https://framerusercontent.com/assets/cKXuNzYchvswzgoB3iUCKh6SGLQ.mp4", angle: 240 },
        { src: "https://framerusercontent.com/assets/XFjo9dNq32NqIhVxrw2LvyH0.mp4", angle: 270 },
        { src: "https://framerusercontent.com/assets/a2K4rySizlcHuybQgUqjfaBO3M.mp4", angle: 300 },
        { src: "https://framerusercontent.com/assets/3fgFXybyDM70Awd975qpCpSkQI.mp4", angle: 330 },
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
            <div className="container mx-auto px-4">
                {/* Headline */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-[28px] md:text-[40px] font-bold text-[#1D1D1F] leading-tight tracking-tight mb-4">
                        Perfect ads everytime with adona
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
                        From feeds ads to carousel ads, adona's AI helps you step up your Facebook ads game. No more ads that look templated.
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
                            <span className={`text-[18px] md:text-[22px] font-bold transition-colors ${
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

export default PerfectAdsCarousel;
