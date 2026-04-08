import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, Award, Zap } from "lucide-react";

const REGULAR_CURRICULUM = [
    {
        week: "1",
        topics: ["Product Foundations & Strategy"],
        goal: "Master the core principles of product building and strategic alignment.",
        skills: ["Market Analysis", "Competitive Landscape", "Product Vision", "Success Metrics"],
        outcome: "A comprehensive Product Strategy for your chosen domain."
    },
    {
        week: "2",
        topics: ["User Research & Design Thinking"],
        goal: "Understand your users deeply and design solutions that solve real pain points.",
        skills: ["User Interviews", "Personas", "Journey Mapping", "Problem Statement"],
        outcome: "Verified User Insights and a defined Problem Space."
    },
    {
        week: "3",
        topics: ["Product Requirement Doc (PRD) & Roadmap"],
        goal: "Learn to document requirements and plan the growth of your product.",
        skills: ["PRD Writing", "Prioritization Frameworks", "Roadmapping", "Stakeholder Alignment"],
        outcome: "A production-ready PRD and a 6-month product roadmap."
    }
    // ... Simplified for brevity, will add more as needed
];

const IBM_PREMIUM_CURRICULUM = [
    {
        week: "1",
        topics: ["AI-Powered Product Foundations (IBM)"],
        goal: "Integrate IBM's Enterprise AI frameworks into your product strategy.",
        skills: ["Enterprise AI Basics", "IBM Watson Fundamentals", "AI Strategy", "ROI for AI"],
        outcome: "Enterprise AI Strategy aligned with IBM Best Practices."
    },
    {
        week: "2",
        topics: ["User Research with AI Agents"],
        goal: "Use Gen AI to automate user research and synthesize insights at scale.",
        skills: ["AI User Personas", "Synthetic Research", "AI Data Analysis", "Prompting for Research"],
        outcome: "Detailed User Research report generated and verified by AI."
    },
    {
        week: "3",
        topics: ["AI-Driven PRD & Roadmap Generation"],
        goal: "Leverage LLMs to write complex PRDs and optimize roadmaps dynamically.",
        skills: ["AI Documentation", "Dynamic Roadmapping", "Feature Scoring", "Assisted Specification"],
        outcome: "AI-Generated PRD with automated prioritization logic."
    }
];

const AccordionItem = ({ item, isOpen, onClick, isPremium }: { item: any; isOpen: boolean; onClick: () => void; isPremium: boolean }) => {
    return (
        <div className={`overflow-hidden transition-all duration-300 rounded-3xl border ${isOpen ? 'bg-white/5 border-white/20' : 'bg-white/[0.02] border-white/5 hover:border-white/10'} mb-4`}>
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-8 text-left group"
            >
                <div className="flex items-center gap-8">
                    <span className={`font-heading text-6xl md:text-7xl font-bold text-white/5 group-hover:text-white/10 transition-colors ${isPremium ? 'group-hover:text-orange-500/10' : ''}`}>
                        {item.week.padStart(2, '0')}
                    </span>
                    <div>
                        <span className={`font-sans text-[10px] uppercase tracking-widest font-bold mb-2 inline-block ${isPremium ? 'text-orange-500' : 'text-blue-500'}`}>
                            Week {item.week} {isPremium && "• IBM Premium"}
                        </span>
                        <h4 className={`font-heading text-xl md:text-2xl font-bold text-white transition-colors ${isPremium ? 'group-hover:text-orange-400' : 'group-hover:text-blue-400'}`}>
                            {item.topics.join(" & ")}
                        </h4>
                    </div>
                </div>
                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-white text-black rotate-180' : 'text-white'}`}>
                    <ChevronDown size={24} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-8 pb-10 border-t border-white/5 pt-8 ml-[112px]">
                            <p className="font-sans text-gray-400 text-base mb-8 max-w-xl leading-relaxed">
                                {item.goal}
                            </p>
                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h5 className="font-heading text-xs font-bold uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                                        <CheckCircle2 size={14} className={isPremium ? "text-orange-500" : "text-blue-500"} />
                                        Core Modules
                                    </h5>
                                    <ul className="space-y-3">
                                        {item.skills.map((skill: string, sIdx: number) => (
                                            <li key={sIdx} className="font-sans text-sm text-gray-400 leading-relaxed flex items-center gap-3">
                                                <div className={`w-1 h-1 rounded-full ${isPremium ? 'bg-orange-500' : 'bg-blue-500'}`} />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {item.outcome && (
                                    <div className={`${isPremium ? 'bg-orange-500/5 border-orange-500/10' : 'bg-blue-500/5 border-blue-500/10'} p-6 rounded-2xl border self-start`}>
                                        <h5 className={`font-heading text-xs font-bold uppercase tracking-widest mb-2 ${isPremium ? 'text-orange-400' : 'text-blue-400'}`}>Project Outcome</h5>
                                        <p className="font-sans text-sm text-gray-300">{item.outcome}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function GenAICurriculum() {
    const [path, setPath] = useState<"ibm" | "regular">("ibm");
    const [openIndex, setOpenIndex] = useState(0);

    const curriculum = path === "ibm" ? IBM_PREMIUM_CURRICULUM : REGULAR_CURRICULUM;

    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] blur-[150px] rounded-full -z-0 pointer-events-none transition-all duration-1000 ${path === 'ibm' ? 'bg-orange-500/5' : 'bg-blue-500/5'}`} />

            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
                <div className="mb-20 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6 uppercase tracking-widest text-[10px] font-bold">
                        <span className="text-orange-500">PROGRAM</span>
                        <span className="text-gray-500">SYLLABUS</span>
                    </div>
                    <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        Dynamic <span className="text-orange-500 italic">Curriculum</span>
                    </h2>
                    
                    {/* Toggle Button */}
                    <div className="inline-flex p-1.5 bg-[#111] border border-white/5 rounded-2xl relative mb-12 overflow-hidden shadow-2xl">
                        <motion.div 
                            initial={false}
                            animate={{ x: path === "ibm" ? 0 : "100%" }}
                            className="absolute inset-x-1.5 inset-y-1.5 w-[calc(50%-6px)] bg-[#FC6401] rounded-[14px] z-0 shadow-lg"
                        />
                        <button 
                            onClick={() => setPath("ibm")}
                            className={`relative z-10 px-10 py-3 rounded-[14px] font-heading font-bold text-sm transition-colors flex items-center gap-2 ${path === "ibm" ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                        >
                            <Award size={16} />
                            IBM + AcceX
                        </button>
                        <button 
                            onClick={() => setPath("regular")}
                            className={`relative z-10 px-10 py-3 rounded-[14px] font-heading font-bold text-sm transition-colors flex items-center gap-2 ${path === "regular" ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                        >
                            <Zap size={16} />
                            Regular
                        </button>
                    </div>

                    <p className="font-sans text-gray-500 max-w-2xl mx-auto">
                        {path === 'ibm' 
                            ? "An elite, co-certified curriculum with IBM, focusing on enterprise-grade AI applications and advanced strategy."
                            : "Our standard high-impact curriculum designed for mastering the core fundamentals of AI-powered product building."}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {curriculum.map((item, idx) => (
                        <AccordionItem
                            key={`${path}-${idx}`}
                            item={item}
                            isPremium={path === 'ibm'}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
