import { motion } from "framer-motion";
import { TrendingUp, Briefcase, Target } from "lucide-react";

export default function GENWhoIsThisContentForPMEIE() {
    const stats = [
        {
            icon: TrendingUp,
            iconColor: "text-green-600",
            iconBg: "bg-green-100",
            value: "$25B+",
            label: "AI PM Market Size",
            description: "The market for AI-powered product management tools and services is growing 3x faster than traditional PM."
        },
        {
            icon: Briefcase,
            iconColor: "text-blue-600",
            iconBg: "bg-blue-100",
            value: "80%",
            label: "AI Adoption by PMs",
            description: "Leading tech companies now require product managers to have high AI literacy to lead initiatives."
        },
        {
            icon: Target,
            iconColor: "text-purple-600",
            iconBg: "bg-purple-100",
            value: "50%",
            label: "Faster Development",
            description: "PMs using GenAI report up to 50% faster cycles for documentation, research, and roadmapping."
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-[#000000] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs tracking-widest px-3 py-1 rounded mb-6 uppercase transition-colors duration-300">
                        GenAI for PM - Market Scope
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif text-[#0A0F1E] dark:text-white mb-6 transition-colors duration-300">
                        The Future of Product Management is AI-First
                    </h2>

                    <p className="max-w-3xl mx-auto text-gray-500 dark:text-gray-400 text-lg mb-16 leading-relaxed transition-colors duration-300">
                        Product Management has entered the AI era. Tomorrow's leaders aren't just managing features; they are orchestrating intelligent agents and leveraging GenAI to automate the tedious parts of the PM role, allowing more time for strategic vision and user empathy.
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
                            className="bg-white dark:bg-[#171717] rounded-2xl p-8 border border-gray-100 dark:border-[#848484]/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_4px_25px_rgba(0,0,0,0.3)] transition-all duration-300 text-left"
                        >
                            <div className={`w-12 h-12 rounded-lg ${stat.iconBg} dark:bg-opacity-20 ${stat.iconColor} flex items-center justify-center mb-6 transition-colors duration-300`}>
                                <stat.icon size={24} />
                            </div>

                            <h3 className="text-4xl font-serif text-[#0A0F1E] dark:text-white font-medium mb-3 transition-colors duration-300">
                                {stat.value}
                            </h3>

                            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
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
