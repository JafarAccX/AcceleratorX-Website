import React from "react";
import { motion } from "framer-motion";

const curriculumData = [
    {
        id: "01",
        title: "Building AI agents",
        category: "Foundations",
        description:
            "Understand the core architecture of AI agents and how to construct them from scratch.",
        icon: "/redesign/dm-ads-page/wpf_skip-to-start.webp",
        color: "text-purple-400",
    },
    {
        id: "02",
        title: "Modern AI frameworks",
        category: "Frameworks",
        description:
            "Master the latest tools and libraries essential for robust AI development.",
        icon: "/redesign/dm-ads-page/mingcute_target-organe.webp",
        color: "text-orange-400",
    },
    {
        id: "03",
        title: "Real-world AI workflows",
        category: "Applications",
        description:
            "Implement AI solutions that solve actual business problems and streamline operations.",
        icon: "/redesign/dm-ads-page/streamline-ultimate_work-from-home-user-pet-cat-green.webp",
        color: "text-emerald-400",
    },
    {
        id: "04",
        title: "Multi-agent systems",
        category: "Advanced",
        description:
            "Orchestrate complex interactions between multiple autonomous agents for sophisticated tasks.",
        icon: "/redesign/dm-ads-page/mingcute_robot-blue.webp",
        color: "text-blue-400",
    },
];

const AICrashCourseCurriculum: React.FC = () => {
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

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Header Pill */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <div className="border border-blue-500/30 bg-blue-900/10 px-6 py-2 rounded-full backdrop-blur-sm">
                        <span className="text-blue-400 font-mono text-xs md:text-sm tracking-widest uppercase">
                            The Only Curriculum You Need
                        </span>
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-medium text-center mb-16 leading-tight max-w-4xl"
                >
                    What You'll Actually Learn
                </motion.h2>

                {/* Grid Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    // New Styles implementation
                    // Outer Container: width: 1098(max), border-radius: 15px, background: #2F2F2F, border: 1px solid #4E4E4E
                    // Padded by 6px roughly to create the gap for inner cards
                    className="w-full max-w-[1098px] bg-[#2F2F2F] border border-[#4E4E4E] rounded-[15px] p-[6px] grid grid-cols-1 md:grid-cols-2 gap-[6px]"
                >
                    {curriculumData.map((module) => (
                        <div
                            key={module.id}
                            // Inner Card Styles:
                            // min-height: 175px, width: ~540px(flex), border-radius: 13px, padding: 24px, gap: 30px, background: #0C0C0C, border: 1px solid #4E4E4E
                            className="bg-[#0C0C0C] border border-[#4E4E4E] rounded-[13px] p-6 flex flex-col justify-between min-h-[175px] gap-[30px] hover:bg-[#111111] transition-colors duration-300"
                        >
                            {/* Top Content: Icon + Title/Category */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={module.icon}
                                        alt={module.category}
                                        className="w-6 h-6 object-contain"
                                    />
                                    <span className={`text-sm md:text-base font-bold ${module.color}`}>
                                        {module.category}
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-medium">
                                    Module {module.id}: {module.title}
                                </h3>
                            </div>

                            {/* Bottom Content: Description */}
                            <div>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {module.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AICrashCourseCurriculum;
