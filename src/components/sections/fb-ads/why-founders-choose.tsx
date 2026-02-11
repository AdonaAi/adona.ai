"use client";

import { useState } from 'react';

const WhyFoundersChoose = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const features = [
        {
            title: "Time saving",
            description: "Launch 10x more Facebook ads, 75% faster.",
            image: "https://framerusercontent.com/images/Q7ROj4NWRiMd4gkRN3cwpfkIQ.png",
            bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
        },
        {
            title: "Cost-effective",
            description: "Get agency-quality ads without agency fees.",
            image: "https://framerusercontent.com/images/3ufBHvRGDA3ObZGtXhm6PN3Aao.png",
            bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
        },
        {
            title: "Unlimited ideas",
            description: "Daily ad concepts, so you'll never run out of inspiration.",
            image: "https://framerusercontent.com/images/hBgjPOVFMXZJiS9KXy4JPkC4ww.png",
            bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
        },
        {
            title: "Multi-language",
            description: "Reach new markets with 95+ languages supported.",
            image: "https://framerusercontent.com/images/q0sCyTmvjFrbvCrozgc4I547Deo.png",
            bgColor: "bg-gradient-to-br from-orange-50 to-amber-100",
        },
        {
            title: "High Performance",
            description: "adona's ads are built to sell, not just to look good.",
            image: "https://framerusercontent.com/images/V1G4AX2hq92Nj1DPrLCAuRcN4.png",
            bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
        },
        {
            title: "Professional & on-brand",
            description: "Stand out with unique ads, not generic templates.",
            image: "https://framerusercontent.com/images/ikLfjOCIRa6fs3UsOxaFfwN2izI.png",
            bgColor: "bg-gradient-to-br from-cyan-50 to-teal-100",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    };

    return (
        <section className="bg-white py-[80px] md:py-[120px] overflow-hidden" id="features">
            <div className="container mx-auto px-4">
                {/* Headline */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[28px] md:text-[40px] font-bold text-[#1D1D1F] leading-tight tracking-tight">
                        Why founders choose adona Facebook Ad Generator
                    </h2>
                </div>

                {/* Carousel */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Cards Container */}
                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-out gap-5"
                            style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
                        >
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className={`flex-shrink-0 w-full md:w-[calc(33.333%-14px)] ${feature.bgColor} rounded-3xl border border-[#E5E5E5] overflow-hidden`}
                                >
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-[20px] md:text-[24px] font-bold text-[#1D1D1F] mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[14px] md:text-[16px] text-[#6E6E73] leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                    <div className="relative h-[200px] md:h-[280px]">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-[#E5E5E5] flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                    >
                        <svg className="w-5 h-5 text-[#1D1D1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-[#E5E5E5] flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                    >
                        <svg className="w-5 h-5 text-[#1D1D1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {features.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    currentSlide === index 
                                        ? 'bg-[#0077b6] w-6' 
                                        : 'bg-[#E5E5E5] hover:bg-[#CCCCCC]'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyFoundersChoose;
