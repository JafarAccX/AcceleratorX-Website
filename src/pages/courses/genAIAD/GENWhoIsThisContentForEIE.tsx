import { motion } from "framer-motion";
import { TrendingUp, Briefcase, Target } from "lucide-react";

export default function GENWhoIsThisContentForEIE() {
    const stats = [
        {
            icon: TrendingUp,
            iconColor: "text-green-600 dark:text-green-400",
            iconBg: "bg-green-100 dark:bg-green-900/30",
            value: "$1.3T",
            label: "AI market by 2030",
            description: "Generative AI is projected to add trillions to the global economy by 2030."
        },
        {
            icon: Briefcase,
            iconColor: "text-[#FC6401] dark:text-[#FC6401]",
            iconBg: "bg-orange-100 dark:bg-orange-900/30",
            value: "97M+",
            label: "new AI & data jobs",
            description: "Over 100 million jobs will be transformed or created by Generative AI integration."
        },
        {
            icon: Target,
            iconColor: "text-purple-600 dark:text-purple-400",
            iconBg: "bg-purple-100 dark:bg-purple-900/30",
            value: "40%",
            label: "productivity gains using AI systems",
            description: "Companies are achieving up to 45% reduction in operational costs using AI automation."
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-[#000000] transition-colors duration-300 relative overflow-hidden">
            {/* Rocket Icon - Left Side */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FC6401] dark:text-[#FC6401] opacity-60 rotate-45">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="font-sans inline-block bg-orange-50 dark:bg-orange-900/30 text-[#FC6401] dark:text-[#FC6401] font-bold text-xs tracking-widest px-3 py-1 rounded mb-6 uppercase transition-colors duration-300">
                        Generative AI - Market Scope
                    </div>

                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A0F1E] dark:text-white mb-6 transition-colors duration-300">
                        The Growing Generative AI Industry
                    </h2>

                    <p className="font-sans max-w-5xl mx-auto text-gray-500 dark:text-gray-400 text-lg mb-16 leading-relaxed transition-colors duration-300">
                        Generative AI is no longer experimental. Companies are actively adopting LLMs, AI agents, and automation systems to replace manual workflows, scale decision-making, and build intelligent products.
                    </p>
                    <img
                        src="/redesign/gen-ai/chatgpt.png"
                        alt="Langchain"
                        className="absolute -right-24 top-24 w-16 h-16 object-contain opacity-80 hidden lg:block animate-float"
                    />
                    <img
                        src="/redesign/gen-ai/ast2.png"
                        alt="Langchain"
                        className="absolute -right-24 top-44  object-contain opacity-80 hidden lg:block animate-float"
                    />
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

                            <h3 className="font-heading text-4xl font-medium text-[#0A0F1E] dark:text-white mb-3 transition-colors duration-300">
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
