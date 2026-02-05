import { motion } from "framer-motion";
import { Video, GitBranch, User, MessageCircle, Target } from "lucide-react";

const upskillFeatures = [
    {
        icon: <Video className="h-6 w-6 text-purple-400" />,
        title: "Mentor-led live sessions",
        delay: 0
    },
    {
        icon: <GitBranch className="h-6 w-6 text-orange-400" />,
        title: "Project-First Curriculum",
        delay: 0.1
    },
    {
        icon: <User className="h-6 w-6 text-blue-400" />,
        title: "Real business use cases",
        delay: 0.2
    },
    {
        icon: <MessageCircle className="h-6 w-6 text-teal-400" />,
        title: "Regular Feedback & reviews",
        delay: 0.3
    },
    {
        icon: <Target className="h-6 w-6 text-yellow-400" />,
        title: "Career-Focused Upskilling",
        delay: 0.4
    }
];

export default function HowYouUpskill() {
    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-white/80 text-sm font-medium mb-8"
                >
                    Learning Module
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white text-4xl md:text-5xl font-bold mb-16"
                >
                    How You Upskill at AcceleratorX
                </motion.h2>
                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-7xl my-8 mx-auto leading-relaxed"
                >
                    At AcceleratorX, our mentor-led learning model is designed to support a practical AI upskilling
                    A program that aligns with real industry needs. Through live sessions and a project-first AI
                    curriculum, learners gain hands-on experience in AI product management, generative AI, AI
                    automation, AI data analytics, and AI digital marketing. Each program focuses on applying AI to
                    real business use cases, helping learners understand workflows such as AI product lifecycle
                    management, AI-led data analysis, AI workflow automation, and the use of AI tools for digital
                    marketing. With continuous feedback, structured reviews, and career-focused guidance, these AI
                    certification programs help working professionals and freshers build job-ready AI skills with
                    confidence

                </motion.p>

                {/* Features Grid */}
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {/* First Row: 3 items */}
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        {upskillFeatures.slice(0, 3).map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: feature.delay }}
                                className="w-full md:w-[320px] p-8 rounded-2xl bg-[#111] border border-white/5 flex flex-col items-start gap-4 hover:border-blue-500/30 transition-all group"
                            >
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-white text-xl font-semibold text-left leading-relaxed">
                                    {feature.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>

                    {/* Second Row: 2 items */}
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        {upskillFeatures.slice(3, 5).map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: feature.delay }}
                                className="w-full md:w-[320px] p-8 rounded-2xl bg-[#111] border border-white/5 flex flex-col items-start gap-4 hover:border-blue-500/30 transition-all group"
                            >
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-white text-xl font-semibold text-left leading-relaxed">
                                    {feature.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
