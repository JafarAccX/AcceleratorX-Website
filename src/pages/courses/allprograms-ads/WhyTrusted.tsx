import { motion } from "framer-motion";

const tags = [
    { text: "Built by Experienced AI Professional", color: "bg-emerald-900/50 border-emerald-500/30 text-emerald-200" },
    { text: "100% Live Sessions", color: "bg-purple-900/50 border-purple-500/30 text-purple-200" },
    { text: "Small Batch Size", color: "bg-blue-900/50 border-blue-500/30 text-blue-200" },
    { text: "Expert Interaction", color: "bg-yellow-900/50 border-yellow-700/30 text-yellow-200" },
    { text: "Fast-Track AI Career", color: "bg-teal-900/50 border-teal-500/30 text-teal-200" },
    { text: "Beginner-Friendly", color: "bg-orange-900/50 border-orange-500/30 text-orange-200" },
    { text: "Get Hired 10x Faster", color: "bg-rose-900/50 border-rose-500/30 text-rose-200" },
    { text: "Flexible for Working Professionals", color: "bg-cyan-900/50 border-cyan-500/30 text-cyan-200" },
    { text: "Practical Applied Learning", color: "bg-indigo-900/50 border-indigo-500/30 text-indigo-200" },
    { text: "Industry-Relevant Tools", color: "bg-amber-900/50 border-amber-500/30 text-amber-200" },
    { text: "Job-Ready Skills", color: "bg-sky-900/50 border-sky-500/30 text-sky-200" },
    { text: "Automation & AI Tools Training", color: "bg-fuchsia-900/50 border-fuchsia-500/30 text-fuchsia-200" },
    { text: "Custom AI Projects", color: "bg-lime-900/50 border-lime-500/30 text-lime-200" },
    { text: "See Results from Day One", color: "bg-violet-900/50 border-violet-500/30 text-violet-200" },
    { text: "Interview Prep", color: "bg-pink-900/50 border-pink-500/30 text-pink-200" },
    { text: "100% Job Assistance", color: "bg-emerald-800/50 border-emerald-400/30 text-emerald-100" },
    { text: "Exclusive AI Community", color: "bg-blue-800/50 border-blue-400/30 text-blue-100" }
];

export default function WhyTrusted() {
    const firstRow = tags.slice(0, 9);
    const secondRow = tags.slice(9);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mb-16">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-8"
                >
                    Why AcceleratorX
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white text-4xl md:text-5xl font-bold mb-8"
                >
                    Why AcceleratorX is Trusted by AI Leaders
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
                >
                    We don't just "teach" AI. We help you understand how to use AI to solve real business problems.
                    Our build-first, mentor-led programs focus on practical AI career outcomes that help you transition
                    into AI product manager, AI data analyst, AI marketer, and various other AI job roles.
                </motion.p>
            </div>

            {/* Marquee Section */}
            <div className="flex flex-col gap-6 w-full">
                {/* Row 1: Right to Left */}
                <div className="relative flex overflow-hidden w-full">
                    <motion.div
                        className="flex flex-nowrap gap-4"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...firstRow, ...firstRow, ...firstRow].map((tag, idx) => (
                            <div
                                key={`r1-${idx}`}
                                className={`px-8 py-4 rounded-full border whitespace-nowrap text-sm font-medium ${tag.color} shadow-lg backdrop-blur-md`}
                            >
                                {tag.text}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Left to Right */}
                <div className="relative flex overflow-hidden w-full">
                    <motion.div
                        className="flex flex-nowrap gap-4"
                        animate={{ x: [-1000, 0] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...secondRow, ...secondRow, ...secondRow].map((tag, idx) => (
                            <div
                                key={`r2-${idx}`}
                                className={`px-8 py-4 rounded-full border whitespace-nowrap text-sm font-medium ${tag.color} shadow-lg backdrop-blur-md`}
                            >
                                {tag.text}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full -z-0 pointer-events-none" />
        </section>
    );
}
