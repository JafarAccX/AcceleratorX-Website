import { motion } from "framer-motion";
import { programContent } from "./programsData";

export default function CurriculumRoadmap({ program }: { program: any }) {
    const curriculum = programContent[program.label]?.roadmap || [];

    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-gray-400 text-sm font-medium mb-8"
                    >
                        The Curriculum
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white text-4xl md:text-5xl font-bold mb-6"
                    >
                        {programContent[program.label]?.courseDuration || "18-Week"} Roadmap
                    </motion.h2>
                </div>

                {/* Roadmap Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {curriculum.map((item: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`p-10 rounded-[32px] bg-[#0A0A0A] border ${item.glow} hover:bg-[#111] transition-all duration-300 h-full`}
                        >
                            <div className={`text-sm font-bold uppercase tracking-widest mb-4 ${item.color}`}>
                                {item.month}
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-8 leading-tight">
                                {item.title}
                            </h3>
                            <ul className="space-y-4">
                                {item.topics.map((topic: string, tIdx: number) => (
                                    <li key={tIdx} className="flex gap-3 text-gray-400 text-base leading-relaxed">
                                        <span className="text-gray-600 mt-1.5">•</span>
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
