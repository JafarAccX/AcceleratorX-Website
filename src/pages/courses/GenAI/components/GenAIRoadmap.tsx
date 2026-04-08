import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, LayoutGrid, PenTool, Zap } from "lucide-react";

const CAREER_SWITCH_PATH = [
    {
        title: "Translate Your Existing Domain",
        description: "Map your vertical expertise—whether in PM, Marketing, or Ops—to AI-first opportunities.",
        icon: <Target className="w-6 h-6 text-purple-400" />
    },
    {
        title: "Practice AI-Powered Workflows",
        description: "Learn to automate your existing manual work using LLMs and visual automation tools.",
        icon: <LayoutGrid className="w-6 h-6 text-orange-400" />
    },
    {
        title: "Strategic AI Implementation",
        description: "Learn how to propose and lead high-ROI AI initiatives in your current or next role.",
        icon: <PenTool className="w-6 h-6 text-purple-400" />
    },
    {
        title: "Scaling with Multi-Agent Systems",
        description: "Graduate to managing teams of AI agents that execute complex business processes.",
        icon: <Zap className="w-6 h-6 text-blue-400" />
    },
    {
        title: "Career Transition Strategy",
        description: "Develop a personalized roadmap to pivot into high-growth AI roles within 14 weeks.",
        icon: <Target className="w-6 h-6 text-orange-500" />
    }
];

const FRESHER_PATH = [
    {
        title: "Master the Core AI Logic",
        description: "Develop a first-principles understanding of how transformers and agents operate.",
        icon: <Target className="w-6 h-6 text-green-400" />
    },
    {
        title: "Production-Grade Prompting",
        description: "Go beyond simple chat. Build complex, reliable prompt chains for real-world apps.",
        icon: <PenTool className="w-6 h-6 text-yellow-400" />
    },
    {
        title: "Full-Stack AI Prototyping",
        description: "Learn to build frontend-to-backend AI systems from scratch in weeks, not months.",
        icon: <LayoutGrid className="w-6 h-6 text-red-500" />
    },
    {
        title: "Global Industry Portfolio",
        description: "Launch 3 production-ready projects and join the top 1% of AI-fluent job candidates.",
        icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
        title: "Interview & Career Launch",
        description: "Mock interviews and direct placement support for elite AI-first startups and MNCs.",
        icon: <Zap className="w-6 h-6 text-orange-400" />
    }
];

export default function GenAIRoadmap() {
    const [path, setPath] = useState<"switch" | "fresher">("switch");

    const activeContent = path === "switch" ? CAREER_SWITCH_PATH : FRESHER_PATH;

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Minimal Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <div className="mb-12">
                    <span className="font-heading text-[10px] md:text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 inline-block">
                        PROGRAMS <span className="text-orange-500">ROADMAP</span>
                    </span>
                    <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Gen AI Course Roadmap
                    </h2>
                    <p className="font-sans text-gray-500 max-w-3xl mx-auto leading-relaxed mb-12">
                        2,000+ learners across India — from Bengaluru to Bhilai — are already building real AI skills and getting hired at top companies.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* Figma-Style Capsule Toggle */}
                    <div className="inline-flex p-1.5 bg-[#111] border border-white/5 rounded-full relative mb-12 overflow-hidden shadow-2xl">
                        <motion.div 
                            initial={false}
                            animate={{ x: path === "switch" ? 0 : "100%" }}
                            className="absolute inset-x-1.5 inset-y-1.5 w-[calc(50%-6px)] bg-[#FC6401] rounded-full z-0 shadow-lg"
                        />
                        <button 
                            onClick={() => setPath("switch")}
                            className={`relative z-10 px-10 py-3 rounded-full font-heading font-bold text-sm transition-colors ${path === "switch" ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                        >
                            Career Switch
                        </button>
                        <button 
                            onClick={() => setPath("fresher")}
                            className={`relative z-10 px-10 py-3 rounded-full font-heading font-bold text-sm transition-colors ${path === "fresher" ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                        >
                            Freshers
                        </button>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <span className="font-heading text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            {path === 'switch' ? 'Transition Into AI' : 'Launch Into AI'}
                        </span>
                        <div className="px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-500 text-[10px] font-bold uppercase tracking-widest">
                            {path === 'switch' ? 'CAREER SWITCHERS PATH' : 'FRESHERS PATH'}
                        </div>
                    </div>
                </div>

                {/* The 'Tech' Slanted Grid */}
                <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto mt-20">
                    <AnimatePresence mode="wait">
                        {activeContent.map((item, idx) => {
                            const isLeft = idx % 2 === 0;
                            const isLast = idx === activeContent.length - 1;
                            
                            // Figma Slant Logic Refined:
                            // Top Row: Left leans right heavily, Right leans left heavily.
                            // To match Figma exactly, we use more pronounced (15%) insets.
                            let clipPolygon = isLeft 
                                ? "polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)" 
                                : "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)";

                            // The last card (centered) should have a symmetrical tech shape with 10% insets
                            if (isLast) {
                                clipPolygon = "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)";
                            }

                            return (
                                <motion.div
                                    key={`${path}-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className={`relative group cursor-default ${isLast ? 'md:col-span-2 md:max-w-3xl md:mx-auto w-full' : ''}`}
                                >
                                    {/* Border Wrapper to fix clip-path border issue - 10% opacity white border */}
                                    <div 
                                        className="p-[1px] bg-white/10 hover:bg-orange-500/30 transition-all duration-500"
                                        style={{ clipPath: clipPolygon }}
                                    >
                                        <div 
                                            className="h-[111px] px-8 py-6 bg-gradient-to-r from-[#0A0A0A] to-[#141414] flex items-center gap-6 text-left group-hover:from-[#111] group-hover:to-[#1a1a1a] transition-all"
                                            style={{ clipPath: clipPolygon }}
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="font-heading text-base font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                                                    {item.title}
                                                </h4>
                                                <p className="font-sans text-gray-500 text-xs leading-relaxed max-w-sm line-clamp-2">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
