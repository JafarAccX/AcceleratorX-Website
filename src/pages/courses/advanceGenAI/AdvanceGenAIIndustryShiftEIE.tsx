import { motion } from "framer-motion";
import { TrendingUp, Briefcase, Zap } from "lucide-react";

export default function AdvanceGenAIIndustryShiftEIE() {
    const metrics = [
        {
            icon: TrendingUp,
            iconColor: "text-green-600 dark:text-green-400",
            iconBg: "bg-green-100 dark:bg-green-900/30",
            value: "$1.3T",
            label: "AI Economy (2030)",
            description: "Driven by agent-based systems, transforming global productivity and operations."
        },
        {
            icon: Briefcase,
            iconColor: "text-blue-600 dark:text-blue-400",
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            value: "97M",
            label: "New Jobs in AI",
            description: "Opportunities in automation, intelligent systems, and autonomous agent development."
        },
        {
            icon: Zap,
            iconColor: "text-yellow-600 dark:text-yellow-400",
            iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
            value: "40%+",
            label: "Productivity Gains",
            description: "From autonomous AI agents handling complex, multi-step Reasoning and Action workflows."
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-[#000000] transition-colors duration-300 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <img src="/redesign/advance-gen-ai/chatgpt.png" alt="chatgpt" className="h-16 w-16 absolute top-10 right-[10%] opacity-20 animate-pulse" />
            <img src="/redesign/advance-gen-ai/astroid.webp" alt="asteroid" className="w-32 absolute bottom-20 left-[5%] opacity-30 rotate-12" />
            <img src="/redesign/advance-gen-ai/crewai%201.png" alt="crewai" className="h-20 w-auto absolute top-1/2 right-[5%] opacity-20" />
            <img src="/redesign/advance-gen-ai/amazon-web-services%201.png" alt="aws" className="h-14 w-auto absolute bottom-10 right-[15%] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="font-sans inline-block text-[#3B82F6] font-bold text-xs tracking-widest px-3 py-1 rounded mb-6 uppercase transition-colors duration-300">
                        Agentic AI • Industry Shift
                    </div>

                    <h2 className="font-heading text-4xl md:text-6xl text-[#0A0F1E] dark:text-white mb-6 transition-colors duration-300">
                        From AI Models to Autonomous AI Agents
                    </h2>

                    <div className="font-sans max-w-7xl mx-auto text-gray-500 dark:text-gray-400 text-lg mb-16 leading-relaxed transition-colors duration-300">
                        <p>
                            The next wave of AI is not chatbots—it’s agents that think, decide, and act. Agentic systems are transforming how products are built, operations are automated, and decisions are made at scale.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {metrics.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white dark:bg-[#171717] rounded-3xl p-8 border border-gray-100 dark:border-[#848484]/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_4px_25px_rgba(0,0,0,0.3)] transition-all duration-300 text-left"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${stat.iconBg} ${stat.iconColor} flex items-center justify-center mb-8 transition-colors duration-300 shadow-sm`}>
                                <stat.icon size={28} />
                            </div>

                            <h3 className="font-heading text-5xl text-[#0A0F1E] dark:text-white font-medium mb-3 transition-colors duration-300">
                                {stat.value}
                            </h3>

                            <h4 className="font-heading text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                                {stat.label}
                            </h4>

                            <p className="font-sans text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
