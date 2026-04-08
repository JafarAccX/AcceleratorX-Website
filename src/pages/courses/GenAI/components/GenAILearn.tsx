import { CheckCircle2, Zap, Target, Rocket, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
    {
        title: "Model Foundations",
        description: "Master LLMs like GPT-4, Claude, and Gemini from the inside out.",
        icon: <Cpu className="w-6 h-6 text-blue-500" />
    },
    {
        title: "AI Agent Engineering",
        description: "Build autonomous agents that can reason, use tools, and execute tasks.",
        icon: <Target className="w-6 h-6 text-orange-500" />
    },
    {
        title: "Multi-Agent Systems",
        description: "Design collaborative agent squads using CrewAI and LangGraph.",
        icon: <Zap className="w-6 h-6 text-yellow-500" />
    },
    {
        title: "AI Workflows",
        description: "Automate complex business processes with n8n and Zapier AI.",
        icon: <Rocket className="w-6 h-6 text-purple-500" />
    },
    {
        title: "Vibe Coding",
        description: "Build production apps at 10x speed using AI-assisted coding tools.",
        icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
    },
    {
        title: "Responsible AI",
        description: "Learn ethics, bias detection, and security for AI deployments.",
        icon: <ShieldCheck className="w-6 h-6 text-red-500" />
    }
];

export default function GenAILearn() {
    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff05_0%,transparent_70%)] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 italic">
                        What you will learn
                    </h2>
                    <p className="font-sans text-gray-400 max-w-2xl mx-auto">
                        This is no theoretical course. You will build, deploy, and scale real-world AI systems using the 2025 industry stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURES.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/[0.05] flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="font-heading text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="font-sans text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
