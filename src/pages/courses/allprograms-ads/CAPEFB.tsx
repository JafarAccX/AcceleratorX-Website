import { Lightbulb, Calculator, ClipboardCheck, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const capeSteps = [
    {
        icon: <Lightbulb className="h-6 w-6 text-blue-400" />,
        title: "AI Fundamentals",
        description: "Master the core concepts of AI and its application in modern business.",
        duration: "Module 1",
    },
    {
        icon: <BarChart className="h-6 w-6 text-blue-400" />,
        title: "Strategic Application",
        description: "Learn how to bridge the gap between AI technology and business strategy.",
        duration: "Module 2",
    },
    {
        icon: <Calculator className="h-6 w-6 text-blue-400" />,
        title: "Hands-on Development",
        description: "Build and deploy AI-powered solutions using industry-standard tools.",
        duration: "Module 3",
    },
    {
        icon: <ClipboardCheck className="h-6 w-6 text-blue-400" />,
        title: "Capstone Project",
        description: "Complete a custom, real-world project to showcase your AI expertise.",
        duration: "Final Phase",
    },
];

export default function CAPEFB() {
    return (
        <div className="relative py-24 overflow-hidden bg-black" id="learning-journey">
            {/* Background decoration */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-[120px]"></div>
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full filter blur-[120px]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6"
                    >
                        Your Learning Journey
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Build Your AI Career Portfolio
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
                        A portfolio that speaks for you – build the specialized skills that top product companies search for.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {capeSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-blue-500/30 transition-all duration-500 group backdrop-blur-sm hover:transform hover:-translate-y-2"
                        >
                            <div className="inline-block p-4 bg-blue-500/10 rounded-2xl mb-6 transform transition-transform duration-500 group-hover:scale-110">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-blue-400/20 rounded-xl filter blur-md group-hover:blur-lg transition-all duration-500"></div>
                                    <div className="relative z-10">{step.icon}</div>
                                </div>
                            </div>
                            <p className="text-xl font-bold bg-white text-transparent bg-clip-text mb-3">
                                {step.title}
                            </p>
                            <p className="text-gray-400 mb-4 text-sm leading-relaxed">{step.description}</p>
                            <p className="text-sm text-blue-400 font-medium">{step.duration}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 p-12 rounded-[40px] bg-gradient-to-b from-[#111] to-black border border-white/5 relative overflow-hidden"
                >
                    {/* Subtle inner glow */}
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full" />

                    <p className="text-3xl font-bold mb-10 text-center text-white relative z-10">
                        What You'll Achieve
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        <motion.div
                            className="text-center group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-3xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                                Portfolio
                            </div>
                            <p className="text-gray-400">Industry-ready projects that demonstrate your ability to solve real AI problems.</p>
                        </motion.div>
                        <motion.div
                            className="text-center group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-3xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                                Experience
                            </div>
                            <p className="text-gray-400">
                                End-to-end development journey from problem discovery to final AI-powered implementation.
                            </p>
                        </motion.div>
                        <motion.div
                            className="text-center group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-3xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                                Network
                            </div>
                            <p className="text-gray-400">Direct access to industry mentors and a curated community of AI professionals.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
