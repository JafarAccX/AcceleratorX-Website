import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { programContent } from "./programsData";

interface ProgramDetailHeroProps {
    program: {
        label: string;
        title: string;
        description: string;
        color: string;
        link: string;
    };
    onBack: () => void;
}

// Helper to get random colors for tags
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

export default function ProgramDetailHero({ program, onBack }: ProgramDetailHeroProps) {
    const content = programContent[program.label]?.hero;

    if (!content) return null;

    return (
        <section className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center px-4 py-20 pb-40">
            {/* Purple glow background */}
            <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at center, #3B82F6 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            {/* Back Button */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={onBack}
                className="absolute top-10 left-10 mt-20 flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all z-20"
            >
                <ArrowLeft size={18} />
                <span>Back</span>
            </motion.button>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                {/* Intake Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-white/80 text-sm font-medium mb-12"
                >
                    {content.badge}
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-white text-4xl md:text-6xl font-bold mb-8 leading-tight"
                >
                    {content.title.includes("Nano Degree in") ? (
                        <>
                            Nano Degree in <span className={program.color}>{content.title.replace("Nano Degree in", "")}</span>
                        </>
                    ) : (
                        <span className={program.color}>{content.title}</span>
                    )}
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed"
                >
                    {content.description}
                </motion.p>

                {/* Duration Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center px-8 py-3 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 font-semibold mb-12"
                >
                    {content.duration}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <button className="px-12 py-4 rounded-xl border border-blue-500 text-blue-400 font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        Enroll Now
                    </button>
                </motion.div>
            </div>

            {/* Bottom Marquee Tags */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden py-10 opacity-70">
                <div className="flex flex-col gap-4">
                    <motion.div
                        animate={{ x: [0, -2000] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="flex gap-4 whitespace-nowrap"
                    >
                        {[...content.tags, ...content.tags].map((tag: string, idx: number) => (
                            <span
                                key={idx}
                                className={`px-5 py-2 rounded-full border text-xs font-semibold ${tagColors[idx % tagColors.length]}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                    <motion.div
                        animate={{ x: [-2000, 0] }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="flex gap-4 whitespace-nowrap"
                    >
                        {[...content.tags, ...content.tags].reverse().map((tag: string, idx: number) => (
                            <span
                                key={idx}
                                className={`px-5 py-2 rounded-full border text-xs font-semibold ${tagColors[(idx + 3) % tagColors.length]}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
