const PartnerLogos = () => {
    const partnersRow1 = [
        { src: '/redesign/main-page/main-hero/microsoft.png', alt: 'Microsoft' },
        { src: '/redesign/main-page/main-hero/mastercard.png', alt: 'Mastercard' },
        { src: '/redesign/main-page/main-hero/deloitte.png', alt: 'Deloitte' },
        { src: '/redesign/main-page/main-hero/bajaj-finaserv.png', alt: 'Bajaj Finserv' },
        { src: '/redesign/main-page/main-hero/Bank_of_America_logo.png', alt: 'Bank of America' },
    ];

    const partnersRow2 = [
        { src: '/redesign/main-page/main-hero/Philips_logo.png', alt: 'Philips' },
        { src: '/redesign/main-page/main-hero/publicis-sapient.png', alt: 'Publicis Sapient' },
        { src: '/redesign/main-page/main-hero/razorpay.png', alt: 'Razorpay' },
        { src: '/redesign/main-page/main-hero/paisabazaar.png', alt: 'Paisabazaar' },
        { src: '/redesign/main-page/main-hero/india.png', alt: 'India' },
    ];

    const LogoRow = ({ partners, reverse = false }: { partners: any[], reverse?: boolean }) => (
        <div className="relative flex overflow-hidden w-full py-4">
            <div className={`flex gap-12 whitespace-nowrap animate-slide-${reverse ? 'right' : 'left'}`}>
                {[...partners, ...partners, ...partners].map((partner, index) => (
                    <div key={index} className="flex-shrink-0 w-32 md:w-40 h-12 flex items-center justify-center transition-all duration-300">
                        <img
                            src={partner.src}
                            alt={partner.alt}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="w-full  py-16 px-6 md:px-12 lg:px-24 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mt-20 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Side: Title */}
                <div className="w-full lg:w-1/3 text-center lg:text-left z-10 transition-colors duration-300">
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B44] dark:text-white leading-tight transition-colors duration-300">
                        Trusted by <span className="font-bold">2200+</span> Organisations for your AI Career
                    </h2>
                </div>

                {/* Right Side: Animated Logo Sliders */}
                <div className="w-full lg:w-2/3 relative">
                    <div className="mb-6">
                        <h3 className="font-heading text-sm md:text-base font-bold text-[#0D47A1] dark:text-blue-400 uppercase tracking-wider text-center lg:text-left opacity-80 transition-colors duration-300">
                            Our Partners & Hiring Network:
                        </h3>
                    </div>

                    <div className="flex flex-col gap-2 relative">

                        <LogoRow partners={partnersRow1} />
                        <LogoRow partners={partnersRow2} reverse={true} />
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes slide-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(-1 * (12px + 10rem) * 4)); }
                }
                @keyframes slide-right {
                    from { transform: translateX(calc(-1 * (12px + 10rem) * 4)); }
                    to { transform: translateX(0); }
                }
                .animate-slide-left {
                    animation: slide-left 20s linear infinite;
                }
                .animate-slide-right {
                    animation: slide-right 20s linear infinite;
                }
                @media (max-width: 768px) {
                    @keyframes slide-left {
                        from { transform: translateX(0); }
                        to { transform: translateX(calc(-1 * (12px + 8rem) * 4)); }
                    }
                    @keyframes slide-right {
                        from { transform: translateX(calc(-1 * (12px + 8rem) * 4)); }
                        to { transform: translateX(0); }
                    }
                }
            `}</style>
        </section>
    );
};

export default PartnerLogos;
