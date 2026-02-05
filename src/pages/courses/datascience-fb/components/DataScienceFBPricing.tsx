import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

interface DataScienceFBPricingProps {
    onEnroll: () => void;
}

const DataScienceFBPricing: React.FC<DataScienceFBPricingProps> = ({ onEnroll }) => {
    return (
        <section className="bg-black py-20 px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans']">
                        The <span className="text-[#0077FF]">pricing</span> solution
                    </h2>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Price Box */}
                    <div className="rounded-2xl p-6 md:p-8 max-w-md mx-auto mb-10 relative">
                        {/* Subtle purple glow */}
                        <div className="absolute inset-0 bg-[#AC0AE7]/10 blur-[30px] rounded-2xl"></div>

                        <div className="relative z-10">
                            <p className="text-gray-400 text-sm mb-2">Become Data Scientist in</p>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                                <span className="text-[#0077FF]">₹19,999</span> + GST
                            </h3>
                            <p className="text-[#0077FF] text-sm font-medium">
                                That's ₹943 per session
                            </p>
                        </div>
                    </div>

                    {/* "NO" Section */}
                    <div className="mb-10">
                        <p className="text-white font-bold text-lg mb-6">NO</p>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                            {["Fake discounts", "Upsells", "Hidden costs"].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#0077FF]"></div>
                                    <span className="text-gray-300 text-sm md:text-base">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button
                            onClick={onEnroll}
                            className="group relative px-8 py-3.5 bg-black rounded-full border border-[#0077FF] shadow-[0_0_20px_rgba(0,119,255,0.4)] hover:shadow-[0_0_30px_rgba(0,119,255,0.6)] transition-all duration-300"
                        >
                            <div className="flex items-center gap-2 text-white font-semibold text-base">
                                Enroll Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>

                        <button
                            onClick={onEnroll}
                            className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-base font-medium border-b border-gray-600 hover:border-white pb-0.5"
                        >
                            Download Detailed Brochure <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default DataScienceFBPricing;
