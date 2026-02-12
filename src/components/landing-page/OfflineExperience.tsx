

const OfflineExperience = () => {
    // Images for the marquee
    const images = [
        { src: '/redesign/main-page/mark/Rectangle.webp', alt: 'Offline Experience 1' },
        { src: '/redesign/main-page/mark/Rectangle2.webp', alt: 'Offline Experience 2' },
        { src: '/redesign/main-page/mark/Rectangle3.webp', alt: 'Offline Experience 3' },
        { src: '/redesign/main-page/mark/Rectangle4.webp', alt: 'Offline Experience 4' },
        { src: '/redesign/main-page/mark/Rectangle5.webp', alt: 'Offline Experience 5' },
        { src: '/redesign/main-page/mark/Rectangle6.webp', alt: 'Offline Experience 6' },
        { src: '/redesign/main-page/mark/Rectangle7.webp', alt: 'Offline Experience 7' },
    ];

    const MarqueeRow = ({ items, reverse = false }: { items: typeof images, reverse?: boolean }) => {
        return (
            <div className="relative flex overflow-hidden w-full p-2">
                <div
                    className={`flex gap-6 whitespace-nowrap ${reverse ? 'animate-slide-right' : 'animate-slide-left'}`}
                    style={{
                        animationDuration: '40s', // Slower animation for larger images
                    }}
                >
                    {/* Triple duplication for seamless loop */}
                    {[...items, ...items, ...items].map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[300px] h-[200px] md:w-[400px] md:h-[260px] rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300"
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section className="w-full py-20 bg-black text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
                <p className="font-sans text-blue-500 font-bold tracking-widest text-xs uppercase mb-2">
                    OFFLINE EXPERIENCE
                </p>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
                    Sneak Peak of Our Offline Experience
                </h2>
            </div>

            <div className="flex flex-col max-w-7xl mx-auto">
                <MarqueeRow items={images} />
                <MarqueeRow items={images} reverse={true} />
            </div>

            <style>{`
                @keyframes slide-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(-1 * (300px + 24px) * 7)); }
                }
                @keyframes slide-right {
                    from { transform: translateX(calc(-1 * (300px + 24px) * 7)); }
                    to { transform: translateX(0); }
                }
                
                @media (min-width: 768px) {
                    @keyframes slide-left {
                        from { transform: translateX(0); }
                        to { transform: translateX(calc(-1 * (400px + 24px) * 7)); }
                    }
                    @keyframes slide-right {
                        from { transform: translateX(calc(-1 * (400px + 24px) * 7)); }
                        to { transform: translateX(0); }
                    }
                }

                .animate-slide-left {
                    animation: slide-left 40s linear infinite;
                }
                .animate-slide-right {
                    animation: slide-right 40s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default OfflineExperience;
