import { motion } from "framer-motion";
import { Lightbulb, Layout, Share2, Rocket } from "lucide-react";

const STEPS = [
    {
        title: "Ideation & Problem Solving",
        description: "Translate complex business problems into viable AI-driven solutions.",
        icon: <Lightbulb className="w-8 h-8 text-orange-500" />
    },
    {
        title: "Agentic Prototype",
        description: "Build a functional multi-agent system using CrewAI or LangGraph.",
        icon: <Layout className="w-8 h-8 text-blue-500" />
    },
    {
        title: "Production Deployment",
        description: "Deploy your AI system to the cloud and prepare it for real users.",
        icon: <Share2 className="w-8 h-8 text-purple-500" />
    },
    {
        title: "Market Ready Product",
        description: "Launch your product and showcase your new domain expertise.",
        icon: <Rocket className="w-8 h-8 text-green-500" />
    }
];

export default function GenAIBYDP() {
    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FC6401]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <div className="mb-24">
                    <div className="flex items-center justify-center gap-3 mb-8 uppercase tracking-[0.4em] text-[10px] font-bold">
                        <span className="w-8 h-px bg-orange-500" />
                        <span className="text-orange-500">THE BYDP FRAMEWORK</span>
                        <span className="w-8 h-px bg-orange-500" />
                    </div>
                    <h2 className="font-heading text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                        Build Your <br />
                        <span className="text-[#FC6401] italic">Dream Product</span>
                    </h2>
                    <p className="font-sans text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        Go beyond simple coding. Our BYDP framework ensures you build high-quality, production-ready AI products that solve real business problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Connecting line for desktop */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent hidden lg:block -z-10" />

                    {STEPS.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-12 rounded-[56px] bg-[#111]/50 border border-white/5 backdrop-blur-xl hover:border-[#FC6401]/30 transition-all group flex flex-col items-center h-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        >
                            <div className="relative mb-10">
                                <div className="absolute inset-0 bg-[#FC6401]/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                                <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center relative z-10 border border-white/10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 group-hover:bg-[#FC6401]/10">
                                    {step.icon}
                                </div>
                                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-xs font-bold text-gray-500 group-hover:text-[#FC6401] group-hover:border-[#FC6401]/30 transition-all">
                                    {String(idx + 1).padStart(2, '0')}
                                </div>
                            </div>
                            <h4 className="font-heading text-2xl font-bold text-white mb-6 leading-tight">
                                {step.title}
                            </h4>
                            <p className="font-sans text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
