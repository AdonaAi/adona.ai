export default function GridShowcase() {
  return (
    <div
      className="relative w-full max-w-[1200px] mx-auto px-4 md:px-6 py-[10px] md:py-[20px] lg:py-[30px]"
      style={{ willChange: 'transform', opacity: 1, transform: 'perspective(1200px)' }}
    >
      <div style={{ opacity: 1, transform: 'none', willChange: 'transform' }}>
        <div className="w-full" style={{ width: '100%', opacity: 1 }}>
          {/* Container */}
          <div
            className="relative w-full"
            style={{
              borderRadius: '20px',
              boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 6px, rgba(173, 181, 190, 0.5) 0px 15px 40px 0px',
              opacity: 1,
            }}
          >
            {/* Play Button */}
            <div
              className="absolute inset-0 z-10 flex items-center justify-center"
              style={{ opacity: 1 }}
            >
              <img
                decoding="auto"
                loading="lazy"
                width={52}
                height={52}
                src="https://framerusercontent.com/images/lvCLJVvbePZax9kaGZgoEKdc8E.svg?width=52&height=52"
                alt="Play"
                className="block w-[52px] h-[52px] md:w-[64px] md:h-[64px] object-contain"
              />
            </div>

            {/* Image */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: '20px',
                border: '1px solid rgb(255, 255, 255)',
                opacity: 1,
              }}
            >
              <img
                decoding="auto"
                loading="lazy"
                width={770}
                height={500}
                sizes="max(calc(min(min(100vw, 810px) - 80px, 1380px) * 0.9258 - 12px), 1px)"
                srcSet="https://framerusercontent.com/images/4UZO9Ldwd2eIpiw8du2WL4CyJpA.gif?scale-down-to=512&width=770&height=500 512w, https://framerusercontent.com/images/4UZO9Ldwd2eIpiw8du2WL4CyJpA.gif?width=770&height=500 770w"
                src="https://framerusercontent.com/images/4UZO9Ldwd2eIpiw8du2WL4CyJpA.gif?width=770&height=500"
                alt="Thumbnail"
                className="block w-full h-full object-cover"
                style={{ borderRadius: 'inherit' }}
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '20px',
                  opacity: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
