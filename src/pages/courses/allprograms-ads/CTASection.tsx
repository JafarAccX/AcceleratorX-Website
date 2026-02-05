import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(40, 122, 246, 0.2) 100%)' }}>
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at center, #3B82F6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                {/* Background Vector Image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full -z-10 opacity-40 pointer-events-none">
                    <img
                        src="/all-programs-amit-camp/Vector.png"
                        alt=""
                        className="w-full h-auto object-contain"
                    />
                </div>
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-gray-400 text-sm font-medium mb-8"
                >
                    Trusted by 12700+ Professionals
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight"
                >
                    Take First Step Towards Your AI Career Before It's Too Late
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-blue-400 text-xl md:text-2xl font-semibold mb-12"
                >
                    Seats are limited to 25 for a better learning experience.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <button className="px-10 py-4 rounded-xl border border-blue-500 bg-black text-blue-400 font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        Enroll Now
                    </button>
                </motion.div>
            </div>

            {/* Subtle bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-blue-600/10 blur-[100px] pointer-events-none" />
        </section>
    );
}
