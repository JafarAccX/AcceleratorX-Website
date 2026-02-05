import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Bot, Cloud, FileText, Search, Grid, GraduationCap } from "lucide-react";

interface DataScienceFBGraduateProps {
    onEnroll: () => void;
}

const graduateItems = [
    {
        icon: <Bot size={20} />,
        text: "Autonomous Data Analysis Agents"
    },
    {
        icon: <Cloud size={20} />,
        text: "End-to-End Production ML Pipelines"
    },
    {
        icon: <FileText size={20} />,
        text: "GenAI-Assisted Analytics Workflows"
    },
    {
        icon: <Search size={20} />,
        text: "Semantic Search on User Feedback"
    },
    {
        icon: <Grid size={20} />,
        text: "Decision-Grade Classification Models"
    },
    {
        icon: <GraduationCap size={20} />,
        text: "End-to-End Data Science Capstone"
    }
];

const DataScienceFBGraduate: React.FC<DataScienceFBGraduateProps> = ({ onEnroll }) => {
    return (
        <section className="bg-black py-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                {/* Headers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans']">
                        What You’ll Graduate With
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Build an industry-ready portfolio:
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 w-full max-w-5xl">
                    {graduateItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0A0A0A] border border-white/10 rounded-xl px-6 py-4 flex items-center gap-3 hover:border-white/30 transition-colors"
                        >
                            <span className="text-white/80">{item.icon}</span>
                            <span className="text-white font-medium text-sm md:text-base text-left">
                                {item.text}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-6 mb-12"
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Glow behind */}
                    <div className="absolute inset-0 bg-[#AC0AE7]/20 blur-[40px] rounded-2xl"></div>

                    <div className="relative bg-[#0A0A0A] border border-white/20 rounded-2xl px-12 py-6 flex flex-col items-center">
                        <span className="text-gray-400 text-sm mb-1">in just</span>
                        <div className="text-3xl font-bold text-white">₹19,999 + GST</div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default DataScienceFBGraduate;
