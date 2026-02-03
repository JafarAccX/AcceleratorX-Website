import { motion } from "framer-motion";
import { FolderKanban, GitBranch, UserCheck, Target } from "lucide-react";
import { programContent } from "./programsData";

const icons = [FolderKanban, GitBranch, UserCheck, Target];
const colors = ["text-purple-400", "text-orange-400", "text-blue-400", "text-yellow-400"];
const iconBgs = ["bg-purple-500/10", "bg-orange-500/10", "bg-blue-500/10", "bg-yellow-500/10"];

export default function ProgramOutcomeSection({ program }: { program: any }) {
    const outcomesList = programContent[program.label]?.outcomes || [];

    // Map string outcomes to the visual structure
    const outcomes = outcomesList.map((title: string, idx: number) => ({
        icon: icons[idx % icons.length],
        title,
        color: colors[idx % colors.length],
        iconBg: iconBgs[idx % iconBgs.length],
        delay: idx * 0.1
    }));

    // Split outcomes into initial blocks of 3 and the remainder
    const initialOutcomes = outcomes.slice(0, outcomes.length - (outcomes.length % 3 === 1 ? 1 : 0));
    const lastOutcome = outcomes.length % 3 === 1 ? outcomes[outcomes.length - 1] : null;

    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-gray-400 text-sm font-medium mb-8"
                >
                    Program Outcome
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white text-4xl md:text-5xl font-bold mb-16"
                >
                    What would be the Program's Outcomes
                </motion.h2>

                {/* Outcomes Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
                    {/* Standard Grid Items */}
                    {initialOutcomes.map((outcome: any, idx: number) => {
                        const OutcomeIcon = outcome.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: outcome.delay }}
                                className="bg-[#111] border border-white/5 rounded-2xl p-8 text-left hover:border-white/10 transition-colors h-full min-h-[180px] flex flex-col justify-between"
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${outcome.iconBg}`}>
                                    <OutcomeIcon size={20} className={outcome.color} />
                                </div>
                                <h3 className="text-white text-xl font-medium leading-normal">
                                    {outcome.title}
                                </h3>
                            </motion.div>
                        )
                    })}

                    {/* Last item centered if it's the only one in the row */}
                    {lastOutcome && (
                        <div className="md:col-span-2 lg:col-span-3 flex justify-center mt-6 lg:mt-0">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: lastOutcome.delay }}
                                className="bg-[#111] border border-white/5 rounded-2xl p-8 text-left hover:border-white/10 transition-colors w-full md:w-1/2 lg:w-1/3 min-h-[180px] flex flex-col justify-between"
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${lastOutcome.iconBg}`}>
                                    {(() => {
                                        const Icon = lastOutcome.icon;
                                        return <Icon size={20} className={lastOutcome.color} />
                                    })()}
                                </div>
                                <h3 className="text-white text-xl font-medium leading-normal">
                                    {lastOutcome.title}
                                </h3>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>

            {/* Background grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>
        </section>
    );
}
