import React from 'react';
import { motion } from 'framer-motion';

const tools = [
    { name: "Gemini", src: "/redesign/dm-ads-page/gemini.webp" },
    { name: "Llama", src: "/redesign/dm-ads-page/lama.webp" },
    { name: "Deepseek", src: "/redesign/dm-ads-page/deepseek.webp" },
    { name: "ChatGPT", src: "/redesign/dm-ads-page/chatgpt.webp" },
    { name: "Github", src: "/redesign/dm-ads-page/github.webp" },
    { name: "Langchain", src: "/redesign/dm-ads-page/langchain.webp" },
    { name: "Claude", src: "/redesign/dm-ads-page/claude.webp" },
];

const AICrashCourseHero: React.FC<{ onEnroll: () => void }> = ({ onEnroll }) => {
    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col justify-between pt-10 pb-20 px-4 md:px-0">
            {/* Background Dots */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: 'radial-gradient(#333333 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    opacity: 0.6
                }}
            />



            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-auto mb-auto">
                {/* Left Side: Title */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <h1 className="text-4xl sm:text-6xl  font-sans font-medium text-white leading-[1.1] tracking-tight">
                        Advanced Agentic <br />
                        AI Crash Course
                    </h1>
                </motion.div>

                {/* Right Side: Description & CTA */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col gap-8 max-w-md lg:ml-auto text-left"
                >
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        Build Real AI Agents. Not Just Prompts. Master sessions to take you from basics to advanced AI agent workflows.
                    </p>

                    <div className="flex flex-col gap-2 w-full">
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
            </div>

            {/* Bottom Tools Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="relative z-10 w-full flex flex-col items-center gap-8 mb-28"
            >
                <div className="border border-blue-500/20 bg-blue-900/10 px-8 py-2.5 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    <span className="text-blue-400 font-mono text-xs md:text-sm tracking-widest uppercase">The Tools You'll Learn</span>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 px-4">
                    {tools.map((tool) => (
                        <motion.div
                            key={tool.name}
                            className="w-8 h-8 md:w-10 md:h-10 relative group cursor-pointer"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <img src={tool.src} alt={tool.name} className="w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default AICrashCourseHero;
