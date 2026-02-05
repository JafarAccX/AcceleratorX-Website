import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Star } from "lucide-react";

interface DataScienceFBHeroProps {
    onEnroll: () => void;
}

const DataScienceFBHero: React.FC<DataScienceFBHeroProps> = ({ onEnroll }) => {
    return (
        <section className="relative min-h-[90vh] max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-20">

            {/* Top Blob */}
            <div
                className="absolute rounded-full pointer-events-none z-0"
                style={{
                    width: '869px',
                    height: '455px',
                    top: '-194px',
                    left: '50%',
                    transform: 'translateX(-50%)', // Centering responsive equivalent of left: 285px on 1440px
                    background: 'linear-gradient(90deg, #0400FF 9.03%, #0077FF 86.51%)',
                    filter: 'blur(200px)', // using filter instead of backdrop-filter for the glow effect usually
                    opacity: 1
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center text-center">

                {/* Main Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-2 font-['Plus_Jakarta_Sans']">
                        Become a Production-Ready
                    </h1>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0077FF] font-['Plus_Jakarta_Sans']">
                        Data Scientist
                    </h1>
                </motion.div>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-lg border border-[#FACC15]/20 bg-[#FACC15]/5 backdrop-blur-sm">
                        <Star className="text-[#FACC15] fill-[#FACC15]" size={16} />
                        <span className="text-white font-medium text-lg">Master Sessions</span>
                        <Star className="text-[#FACC15] fill-[#FACC15]" size={16} />
                    </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-6 mb-16"
                >
                    <button
                        onClick={onEnroll}
                        className="group relative px-8 py-4 bg-black rounded-full border border-[#0077FF] shadow-[0_0_20px_rgba(0,119,255,0.3)] hover:shadow-[0_0_30px_rgba(0,119,255,0.5)] transition-all duration-300"
                    >
                        <div className="flex items-center gap-2 text-white font-semibold text-lg">
                            Enroll Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </button>

                    <button
                        onClick={onEnroll}
                        className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-lg font-medium border-b border-gray-600 hover:border-white pb-0.5"
                    >
                        Download Detailed Brochure <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </motion.div>

                {/* Pricing Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-[#0077FF] blur-[40px] opacity-20 rounded-2xl"></div>
                    <div className="relative rounded-2xl px-12 py-6 flex flex-col items-center">
                        <span className="text-gray-400 text-sm mb-1">in just</span>
                        <div className="text-3xl font-bold text-white">₹19,999 + GST</div>
                    </div>
                </motion.div>

            </div>

            {/* Side Images */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block z-0 w-[300px] h-[80%]">
                <img
                    src="/redesign/datascience-fb/hero-left.webp"
                    alt="AI Tools Left"
                    className="w-full h-full object-contain object-left"
                />
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block z-0 w-[300px] h-[80%]">
                <img
                    src="/redesign/datascience-fb/hero-right.webp"
                    alt="AI Tools Right"
                    className="w-full h-full object-contain object-right"
                />
            </div>

        </section>
    );
};

export default DataScienceFBHero;
