import React from "react";
import { motion } from "framer-motion";

const AICrashCoursePricing: React.FC<{ onEnroll: () => void }> = ({ onEnroll }) => {
    return (
        <section className="relative py-20 bg-black text-white overflow-hidden">
            {/* Background Dots */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: 'radial-gradient(#333333 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    opacity: 0.6
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Pricing Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">
                        Simple, Transparent <span className="text-blue-500">Pricing</span>
                    </h2>

                    <div className="mb-12">
                        <p className="text-gray-400 text-lg mb-2">For just</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl md:text-7xl font-bold tracking-tight">₹ 4,999</span>
                            <span className="text-2xl md:text-4xl text-gray-400 font-normal">+ GST</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-xs">
                        <button onClick={onEnroll} className="group relative flex items-center justify-between w-full border-b border-gray-700 pb-3 text-white hover:text-white transition-colors cursor-pointer">
                            <span className="uppercase tracking-widest text-xs md:text-sm font-medium">GET YOUR SEAT</span>
                            <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></div>
                        </button>
                        <p className="text-[#3b82f6] text-xs font-medium mt-1 tracking-wide">
                            The only program you need.
                        </p>
                    </div>
                </motion.div>

                {/* Right Side: Image Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    // Container style mirroring the curriculum/target-audience wrapper
                    className="w-full max-w-[600px] border border-[#373737] rounded-[25px] p-2 bg-[#2F2F2F] mx-auto md:ml-auto"
                >
                    <div className="rounded-[20px] overflow-hidden w-full h-full relative">
                        <img
                            src="/redesign/dm-ads-page/Group 95.webp"
                            alt="Happy Student"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AICrashCoursePricing;
