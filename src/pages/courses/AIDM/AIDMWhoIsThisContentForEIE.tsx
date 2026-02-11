import { motion } from "framer-motion";
import { TrendingUp, Briefcase, Target } from "lucide-react";

export default function AIDMWhoIsThisContentForEIE() {
    const stats = [
        {
            icon: TrendingUp,
            iconColor: "text-green-600 dark:text-green-400",
            iconBg: "bg-green-100 dark:bg-green-900/30",
            value: "40-60%",
            label: "Efficiency Increase",
            description: "Marketers using AI tools report massive time savings in content and campaign workflows."
        },
        {
            icon: Briefcase,
            iconColor: "text-blue-600 dark:text-blue-400",
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            value: "2500+",
            label: "Alumni Network",
            description: "Join a growing community of AI-powered marketers leading at top global firms."
        },
        {
            icon: Target,
            iconColor: "text-purple-600 dark:text-purple-400",
            iconBg: "bg-purple-100 dark:bg-purple-900/30",
            value: "70%",
            label: "Higher ROI",
            description: "AI-driven performance marketing consistently outperforms traditional methods in conversion."
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-[#000000] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <img src="/redesign/ai-dm/claude.png" alt="claude" className="h-16 w-16 absolute -bottom-20 right-20" />
                <img src="/redesign/ai-dm/copilot.png" alt="copilot" className="h-24 w-24 absolute -top-20 md:top-20 right-40" />
                <img src="/redesign/ai-dm/make.png" alt="make" className="h-24 w-24 absolute top-48 md:top-5 left-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="font-sans inline-block text-[#9EFF1F]  font-bold text-xs tracking-widest px-3 py-1 rounded mb-6 uppercase transition-colors duration-300">
                        Why Digital Marketing Now
                    </div>

                    <h2 className="font-heading text-4xl md:text-5xl relative z-10 font-bold text-[#0A0F1E] dark:text-white mb-6 transition-colors duration-300">
                        Marketing Is Being Rebuilt with AI
                    </h2>

                    <div className="font-sans max-w-3xl mx-auto text-gray-500 dark:text-gray-400 text-lg mb-16 leading-relaxed transition-colors duration-300">


                        <p>
                            This program prepares you for how marketing actually works in 2025.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white dark:bg-[#171717] rounded-2xl p-8 border border-gray-100 dark:border-[#848484]/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_4px_25px_rgba(0,0,0,0.3)] transition-all duration-300 text-left"
                        >
                            <div className={`w-12 h-12 rounded-lg ${stat.iconBg} ${stat.iconColor} flex items-center justify-center mb-6 transition-colors duration-300`}>
                                <stat.icon size={24} />
                            </div>

                            <h3 className="font-heading text-4xl text-[#0A0F1E] dark:text-white font-medium mb-3 transition-colors duration-300">
                                {stat.value}
                            </h3>

                            <h4 className="font-heading text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
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
