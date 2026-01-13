import { motion } from "framer-motion";
import { TrendingUp, Briefcase, Target } from "lucide-react";

export default function GENWhoIsThisContentForEIE() {
    const stats = [
        {
            icon: TrendingUp,
            iconColor: "text-green-600",
            iconBg: "bg-green-100",
            value: "$1.8T",
            label: "Market Size by 2030",
            description: "Generative AI is projected to add trillions to the global economy by 2030."
        },
        {
            icon: Briefcase,
            iconColor: "text-blue-600",
            iconBg: "bg-blue-100",
            value: "100M+",
            label: "AI-Augmented Jobs",
            description: "Over 100 million jobs will be transformed or created by Generative AI integration."
        },
        {
            icon: Target,
            iconColor: "text-purple-600",
            iconBg: "bg-purple-100",
            value: "45%",
            label: "Operational Savings",
            description: "Companies are achieving up to 45% reduction in operational costs using AI automation."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block bg-blue-50 text-blue-600 font-bold text-xs tracking-widest px-3 py-1 rounded mb-6 uppercase">
                        Generative AI - Market Scope
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif text-[#0A0F1E] mb-6">
                        The Explosive Growth of Generative AI
                    </h2>

                    <p className="max-w-3xl mx-auto text-gray-500 text-lg mb-16 leading-relaxed">
                        Generative AI is the fastest-growing technology in history. From creative arts to enterprise automation, GenAI and AI Agents are redefining how we work, build, and innovate. Professionals with AI skills are now the most sought-after talent globally.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)] transition-shadow text-left"
                        >
                            <div className={`w-12 h-12 rounded-lg ${stat.iconBg} ${stat.iconColor} flex items-center justify-center mb-6`}>
                                <stat.icon size={24} />
                            </div>

                            <h3 className="text-4xl font-serif text-[#0A0F1E] font-medium mb-3">
                                {stat.value}
                            </h3>

                            <h4 className="text-lg font-bold text-gray-800 mb-2">
                                {stat.label}
                            </h4>

                            <p className="text-gray-500 leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
