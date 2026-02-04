import { motion } from "framer-motion";
import { programContent } from "./programsData";

const tagColors = [
    "bg-emerald-900/50 border-emerald-500/30 text-emerald-200",
    "bg-purple-900/50 border-purple-500/30 text-purple-200",
    "bg-blue-900/50 border-blue-500/30 text-blue-200",
    "bg-orange-900/50 border-orange-500/30 text-orange-200",
    "bg-rose-900/50 border-rose-500/30 text-rose-200",
    "bg-indigo-900/50 border-indigo-500/30 text-indigo-200",
    "bg-teal-900/50 border-teal-500/30 text-teal-200",
    "bg-amber-900/50 border-amber-500/30 text-amber-200"
];

export default function MasterToolsSection({ program }: { program: any }) {
    const content = programContent[program.label]?.masterTools;
    const tools = content?.tools || [];
    const caseStudies = content?.caseStudies || [];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-gray-400 text-sm font-medium mb-8"
                >
                    What You'll Master
                </motion.div>

                {/* Heading Tools */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white text-4xl md:text-5xl font-bold mb-16"
                >
                    Master 20+ Tools
                </motion.h2>

                {/* Tools Logo Grid */}
                <div className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto mb-24">
                    {tools.map((tool: any, idx: number) => {
                        const name = typeof tool === 'string' ? tool : tool.name;
                        const icon = typeof tool === 'object' ? tool.icon : null;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.05 * idx }}
                                className={`relative group flex flex-col items-center justify-center gap-3 rounded-2xl  transition-all duration-300 ${icon ? 'w-28 h-28 p-4' : 'px-6 py-3'}`}
                            >


                                <img
                                    src={icon}
                                    alt={name}
                                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                                />


                            </motion.div>
                        );
                    })}
                </div>

                {/* Heading Case-Studies */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white text-4xl md:text-5xl font-bold mb-16"
                >
                    Weekly Product Case-Studies
                </motion.h2>
            </div>

            {/* Marquee Section */}
            <div className="flex flex-col gap-6 w-full relative max-w-7xl mx-auto">
                {/* Left Gradient Blur */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none backdrop-blur-[1px]" />

                {/* Right Gradient Blur */}
                <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none backdrop-blur-[1px]" />

                <div className="relative flex overflow-hidden w-full">
                    <motion.div
                        className="flex flex-nowrap gap-4"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...caseStudies, ...caseStudies, ...caseStudies].map((tag, idx) => (
                            <div
                                key={idx}
                                className={`px-8 py-4 rounded-full border whitespace-nowrap text-sm font-medium ${tagColors[idx % tagColors.length]} shadow-lg backdrop-blur-md`}
                            >
                                {tag}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full -z-0 pointer-events-none" />
        </section>
    );
}
