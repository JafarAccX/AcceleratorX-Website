import { motion } from "framer-motion";

const BuildrXSection = () => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div
                    className="relative w-full rounded-[3rem] overflow-hidden min-h-[600px] flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/redesign/main-page/buildrx-section.webp')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 space-y-8 w-full max-w-4xl">

                        {/* Logo */}
                        <motion.img
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src="/redesign/main-page/BX-final-logo-white-bc.png"
                            alt="BuildrX Logo"
                            className="h-16 md:h-20 object-contain mb-4"
                        />

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide uppercase drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200" style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}>
                                BUILD. UPLOAD. GET HIRED.
                            </span>
                        </motion.h2>

                        {/* Subheading Link */}
                        <motion.p

                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="font-sans text-white/90 text-xl md:text-2xl decoration-blue-400/50 cursor-default transition-all duration-300"
                        >
                            Let The World See What You Can Build
                        </motion.p>

                        {/* CTA Button */}
                        <motion.a
                            href="https://buildrx.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="font-sans inline-block mt-8 px-10 py-5 bg-[#5b36f0] hover:bg-[#4a25e1] text-white text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_-10px_rgba(91,54,240,0.5)]"
                        >
                            Start Building Your Modern Resume
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuildrXSection;
