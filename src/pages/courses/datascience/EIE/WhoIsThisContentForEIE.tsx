import { motion } from "framer-motion";
import { TrendingUp, Briefcase, Zap } from "lucide-react";

export default function WhoIsThisContentForEIE() {
    const metrics = [
        {
            icon: TrendingUp,
            iconColor: "text-green-600 dark:text-green-400",
            iconBg: "bg-green-100 dark:bg-green-900/30",
            value: "$536B",
            label: "AI-Driven Economy",
            description: "Companies are prioritizing Data Scientists who can build production AI systems."
        },
        {
            icon: Briefcase,
            iconColor: "text-blue-600 dark:text-blue-400",
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            value: "200k+",
            label: "Vacant DS Roles",
            description: "High demand for specialists who can handle uncertainty and production pipelines."
        },
        {
            icon: Zap,
            iconColor: "text-yellow-600 dark:text-yellow-400",
            iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
            value: "75%",
            label: "Deployment Gap",
            description: "Closing the gap between local notebooks and scalable production environments."
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-[#000000] transition-colors duration-300 relative overflow-hidden">

            <img src="/redesign/ai-da/numpy.png" alt="slack" className="h-16 w-16 absolute top-96 md:top-40 right-0 md:right-40" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block text-[#3B82F6] font-bold text-xs tracking-widest px-3 py-1 rounded mb-6 uppercase transition-colors duration-300">
                        Data Science Hiring Has Changed
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif text-[#0A0F1E] dark:text-white mb-6 transition-colors duration-300">
                        The Growing Data Science Industry</h2>

                    <div className="max-w-5xl mx-auto text-gray-500 dark:text-gray-400 text-lg mb-16 leading-relaxed transition-colors duration-300">
                        <p className="mb-8">
                            After this program, you will frame real business problems as DS problems, build and evaluate ML models correctly, handle uncertainty and failure cases, deploy and monitor ML pipelines, and explain decisions to stakeholders, so you can think like a real data scientist.</p>

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

                            <h3 className="text-5xl font-serif text-[#0A0F1E] dark:text-white font-medium mb-3 transition-colors duration-300">
                                {stat.value}
                            </h3>

                            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                                {stat.label}
                            </h4>

                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
