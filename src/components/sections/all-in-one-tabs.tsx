"use client";

import React from "react";
import Image from "next/image";

export default function AllInOneMarketingTabs() {
  const tabs = ['Videos', 'Ads', 'Socials', 'Emails'];
  const [activeTab, setActiveTab] = React.useState('Videos');

  const carouselData = {
    Videos: [
      { type: 'video', url: 'https://framerusercontent.com/assets/atJu9yiIxWsCyaNh4njvIoNJ58A.mp4', rotation: 0 },
      { type: 'video', url: 'https://framerusercontent.com/assets/oJ4quBVvE16v32CEg8huqY7sIQ.mp4', rotation: 30 },
      { type: 'video', url: 'https://framerusercontent.com/assets/Ns2GbroiHxvq7u0kyGBzckqCWGU.mp4', rotation: 60 },
      { type: 'video', url: 'https://framerusercontent.com/assets/XfoGiuFqT2FPLtYXPTJQ4Gca6k.mp4', rotation: 90 },
      { type: 'video', url: 'https://framerusercontent.com/assets/2Sv2SsEaYbQTzuNiMP2j69zR0w.mp4', rotation: 120 },
      { type: 'video', url: 'https://framerusercontent.com/assets/XLsVUWixlZwNcQ9q7AmUbleaOpI.mp4', rotation: 150 },
      { type: 'video', url: 'https://framerusercontent.com/assets/0yco9aVMxEaMw6TCtvnHdWlY.mp4', rotation: 180 },
      { type: 'video', url: 'https://framerusercontent.com/assets/FTi6NNbNzmL5CwmMmlResvlxc.mp4', rotation: 210 },
      { type: 'video', url: 'https://framerusercontent.com/assets/SPeCEAHu2em9JMalRJd7unubVw.mp4', rotation: 240 },
      { type: 'video', url: 'https://framerusercontent.com/assets/6ieB5PaFzvb7bkjnAhMqX9FGDs.mp4', rotation: 270 },
      { type: 'video', url: 'https://framerusercontent.com/assets/UZE9LN0jsduGhjtigH2nfAvVRBg.mp4', rotation: 300 },
      { type: 'video', url: 'https://framerusercontent.com/assets/CwA8wnhsDj6XgFNkqjfVZ8qa8ew.mp4', rotation: 330 },
    ],
    Ads: [
      { type: 'image', url: 'https://framerusercontent.com/images/iUStjBsDFrJVUv1CDQyW7Sv0.webp', rotation: 0 },
      { type: 'image', url: 'https://framerusercontent.com/images/XExvNpmDLVlIJmKAe33PFgRWJKE.webp', rotation: 30 },
      { type: 'image', url: 'https://framerusercontent.com/images/2VTZndnfh23XWnoA7sbs2rzyqUw.webp', rotation: 60 },
      { type: 'image', url: 'https://framerusercontent.com/images/u56AnbgMpS8s9cIrIDR75BJa0WY.webp', rotation: 90 },
      { type: 'image', url: 'https://framerusercontent.com/images/4qXNDQuJmatdQe6jU7QOJ21BBo.webp', rotation: 120 },
      { type: 'image', url: 'https://framerusercontent.com/images/kARPt7WrJEUKTDnSqXL2yYcq4bY.webp', rotation: 150 },
      { type: 'image', url: 'https://framerusercontent.com/images/2YcbAgsihELzEesoKCeVvkGaE.webp', rotation: 180 },
      { type: 'image', url: 'https://framerusercontent.com/images/RvSTd8Rcyai4XliaoDeYLcfDA.webp', rotation: 210 },
      { type: 'image', url: 'https://framerusercontent.com/images/8nQ0W4qQrq9MunPfkIGKWYYa1g.webp', rotation: 240 },
      { type: 'image', url: 'https://framerusercontent.com/images/yxiImfDZI8hzZSnnZF4EdmsgDPI.webp', rotation: 270 },
      { type: 'image', url: 'https://framerusercontent.com/images/pP2pbFcHrLDUnDRc0O7MjcUikA.webp', rotation: 300 },
      { type: 'image', url: 'https://framerusercontent.com/images/r4teJrxd2bhCXsM7UvVitm8GZE.webp', rotation: 330 },
    ],
    Socials: [
      { type: 'image', url: 'https://framerusercontent.com/images/u2FqocyLnd42JB1zL2rYM9n9wHs.webp', rotation: 0 },
      { type: 'image', url: 'https://framerusercontent.com/images/ztxvCPEXwNmvvJBYMufxMUzFG8.webp', rotation: 30 },
      { type: 'image', url: 'https://framerusercontent.com/images/p87MCHRgAPZsQiZrerQbhPuXpUM.webp', rotation: 60 },
      { type: 'image', url: 'https://framerusercontent.com/images/OfEj9hmOxvoV6AtX9S4SOYsNH0.webp', rotation: 90 },
      { type: 'image', url: 'https://framerusercontent.com/images/UGVYEpnU4Q8eTE5Vs4mdArswg.webp', rotation: 120 },
      { type: 'image', url: 'https://framerusercontent.com/images/wXtzVz9HpShok8V8FNHmony9eM.webp', rotation: 150 },
      { type: 'image', url: 'https://framerusercontent.com/images/W2VDrs6FO41SfKxEIu36zxYA3o.webp', rotation: 180 },
      { type: 'image', url: 'https://framerusercontent.com/images/aZHRpUmdoUWSOcN09FMAMWByro.webp', rotation: 210 },
      { type: 'image', url: 'https://framerusercontent.com/images/M87VoNdqLbr4jWAJy16JLbEL2k.webp', rotation: 240 },
      { type: 'image', url: 'https://framerusercontent.com/images/BsNQ8p8UOisxnYhR4t0o3uxobM.webp', rotation: 270 },
      { type: 'image', url: 'https://framerusercontent.com/images/020aqxfjISSvmYPKLmk2OyOyQg.webp', rotation: 300 },
      { type: 'image', url: 'https://framerusercontent.com/images/4wxj3KSCAPQs1QtyeetBUsBJ4U.webp', rotation: 330 },
    ],
    Emails: [
      { type: 'image', url: 'https://framerusercontent.com/images/M8GupQLcrPfBikFDQltYAHGn8.webp', rotation: 0 },
      { type: 'image', url: 'https://framerusercontent.com/images/mGA45jMbdw6ZiWIjLkeCSnODDA.webp', rotation: 30 },
      { type: 'image', url: 'https://framerusercontent.com/images/HXbGcXKoNhg8jzLvpYoLoeePo.webp', rotation: 60 },
      { type: 'image', url: 'https://framerusercontent.com/images/qQvWo8JHSeB76rmM2lF0UEz3HnM.webp', rotation: 90 },
      { type: 'image', url: 'https://framerusercontent.com/images/OenDwgvqP9xRRfFmFsrKtjD1pw.webp', rotation: 120 },
      { type: 'image', url: 'https://framerusercontent.com/images/Lq9KXWiO8O4DyMiQ9Zb0oYoB7o.webp', rotation: 150 },
      { type: 'image', url: 'https://framerusercontent.com/images/l9V9P1RaLcjj2uO8Xgg473EHQuM.webp', rotation: 180 },
      { type: 'image', url: 'https://framerusercontent.com/images/8WERocN5VZ7GRDsVHDbW3t5SA.webp', rotation: 210 },
      { type: 'image', url: 'https://framerusercontent.com/images/ctodv4S0DFSJyweAW0Ds0P2Fx30.webp', rotation: 240 },
      { type: 'image', url: 'https://framerusercontent.com/images/FVn8sD1BOZ204QYFX9g2xkJot8g.webp', rotation: 270 },
      { type: 'image', url: 'https://framerusercontent.com/images/14QNryJKiZaUnD1tiqRVN55Gk.webp', rotation: 300 },
      { type: 'image', url: 'https://framerusercontent.com/images/tpfMuT3fQcgzowsLeVruBw24yw4.webp', rotation: 330 },
    ]
  };

  const currentItems = carouselData[activeTab as keyof typeof carouselData] || carouselData['Videos'];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 md:px-10">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14 md:mb-16 space-y-4 sm:space-y-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground max-w-4xl px-4 tracking-tight">
            The Complete AI-Powered Marketing Platform
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl px-4 leading-relaxed font-medium">
            Adona's AI-powered engine delivers high-quality marketing content for ads, social posts, emails, and campaign management — all in one integrated system.
          </p>

          {/* 3D Video/Image Carousel */}
          <div className="w-full max-w-7xl mx-auto mt-10 sm:mt-12 md:mt-14 px-4 mb-14 sm:mb-16 md:mb-18">
            <div
              className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center"
              style={{
                borderRadius: '24px',
                opacity: 1
              }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  willChange: 'transform',
                  opacity: 1,
                  transform: 'perspective(1200px) rotateY(0deg)',
                  transformStyle: 'preserve-3d',
                  animation: 'rotate3dCarousel 60s linear infinite'
                }}
              >
                {currentItems.map((item, index) => (
                  <div
                    key={`${activeTab}-${index}`}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      opacity: 1,
                      transform: `translate(-50%, -50%) rotateY(${item.rotation}deg) translateZ(350px) scale(0.75)`,
                      transformStyle: 'preserve-3d',
                      width: '180px',
                      height: '260px'
                    }}
                  >
                    <div style={{ transform: 'rotateY(180deg)', opacity: 1, width: '100%', height: '100%' }}>
                      {item.type === 'video' ? (
                        <video
                          src={item.url}
                          loop
                          preload="auto"
                          playsInline
                          autoPlay
                          muted
                          style={{
                            cursor: 'auto',
                            width: '100%',
                            height: '100%',
                            borderRadius: '16px',
                            display: 'block',
                            objectFit: 'cover',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            objectPosition: '50% 50%',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                          }}
                        />
                      ) : (
                        <div className="w-full h-full relative rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                          <Image
                            src={item.url}
                            alt="Carousel item"
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style jsx global>{`
            @keyframes rotate3dCarousel {
              from {
                transform: perspective(1200px) rotateY(0deg);
              }
              to {
                transform: perspective(1200px) rotateY(360deg);
              }
            }
          `}</style>

          {/* Tabs Navigation */}
          <div className="w-full max-w-4xl mx-auto border-b border-gray-200">
            <div className="flex justify-between items-center w-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                            relative py-4 sm:py-5 px-2 sm:px-4 md:px-6 lg:px-10 text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 w-full
                            ${activeTab === tab ? 'text-black' : 'text-gray-500 hover:text-gray-700'}
                        `}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8]" />
                  )}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
