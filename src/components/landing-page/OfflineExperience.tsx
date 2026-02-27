
const OfflineExperience = () => {
    const images = [
        { src: '/testimonials/test1.jpeg', alt: 'Offline Experience 1' },
        { src: '/testimonials/test2.jpeg', alt: 'Offline Experience 2' },
        { src: '/testimonials/test3.jpeg', alt: 'Offline Experience 3' },
        { src: '/testimonials/test4.jpeg', alt: 'Offline Experience 4' },
        { src: '/testimonials/test5.jpeg', alt: 'Offline Experience 5' },
        { src: '/testimonials/test6.jpeg', alt: 'Offline Experience 6' },
        { src: '/testimonials/test7.jpeg', alt: 'Offline Experience 7' },
        { src: '/testimonials/test8.jpeg', alt: 'Offline Experience 8' },
        { src: '/testimonials/test9.jpeg', alt: 'Offline Experience 9' },
        { src: '/testimonials/test10.jpeg', alt: 'Offline Experience 10' },
        { src: '/testimonials/test11.jpeg', alt: 'Offline Experience 11' },
        { src: '/testimonials/test12.jpeg', alt: 'Offline Experience 12' },
        { src: '/testimonials/test13.jpeg', alt: 'Offline Experience 13' },
    ];

    // Split images across 4 columns (cycling through)
    const numCols = 4;
    const columns: typeof images[] = Array.from({ length: numCols }, () => []);
    images.forEach((img, i) => columns[i % numCols].push(img));

    return (
        <section className="w-full py-20 bg-black text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">

                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
                    Hear from the learners
                </h2>
            </div>

            {/* Vertical marquee grid — 800px tall, overflow hidden, with top/bottom fade */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative" style={{ height: '600px' }}>
                    {/* Top fade */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

                    <div
                        className="flex gap-3 md:gap-4 overflow-hidden h-full"
                    >
                        {columns.map((col, colIdx) => {
                            const reverse = colIdx % 2 !== 0;
                            return (
                                <div
                                    key={colIdx}
                                    className="flex-1 min-w-0 flex flex-col gap-3 md:gap-4"
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div
                                        className={`flex flex-col gap-3 md:gap-4 ${reverse ? 'animate-scroll-up-reverse' : 'animate-scroll-up'}`}
                                    >
                                        {/* Triple for seamless loop */}
                                        {[...col, ...col, ...col].map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex-shrink-0 w-full rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300"
                                            >
                                                <img
                                                    src={item.src}
                                                    alt={item.alt}
                                                    className="w-full h-auto block object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <style>{`
                @keyframes scroll-up {
                    0%   { transform: translateY(0); }
                    100% { transform: translateY(-33.333%); }
                }
                @keyframes scroll-up-reverse {
                    0%   { transform: translateY(-33.333%); }
                    100% { transform: translateY(0); }
                }
                .animate-scroll-up {
                    animation: scroll-up 20s linear infinite;
                }
                .animate-scroll-up-reverse {
                    animation: scroll-up-reverse 20s linear infinite;
                }
            `}</style>
            </div>
        </section>
    );
};

export default OfflineExperience;
