import { motion } from "framer-motion";
import { TrendingUp, Briefcase, Target } from "lucide-react";

export default function WhoIsThisContentForEIE() {
    const stats = [
        {
            icon: TrendingUp,
            iconColor: "text-green-600 dark:text-green-400",
            iconBg: "bg-green-100 dark:bg-green-900/30",
            value: "$1.3T",
            label: "Market Size by 2030",
            description: "The global DA market is projected to reach $1.3T by 2030"
        },
        {
            icon: Briefcase,
            iconColor: "text-blue-600 dark:text-blue-400",
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            value: "97M",
            label: "New Jobs by 2030",
            description: "DA with AI will create 97 million new jobs across industry by 2030"
        },
        {
            icon: Target,
            iconColor: "text-purple-600 dark:text-purple-400",
            iconBg: "bg-purple-100 dark:bg-purple-900/30",
            value: "40%",
            label: "Productivity Boost",
            description: "Companies report up to 40% increase in productivity in DA with AI"
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
                    <div className="font-sans inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs tracking-widest px-3 py-1 rounded mb-6 uppercase transition-colors duration-300">
                        Why Data Analytics Now
                    </div>

                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A0F1E] dark:text-white mb-6 transition-colors duration-300">
                        The Growing Data Analytics Industry
                    </h2>

                    <div className="font-sans max-w-5xl mx-auto text-gray-500 dark:text-gray-400 text-lg mb-16 leading-relaxed transition-colors duration-300">
                        <p className="mb-4">
                            The data analytics sector is experiencing unprecedented growth. It presents significant opportunities in market size, salary, and job openings.</p>
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
