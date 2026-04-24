import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
    regularModules,
    ibmModules,
    MENTORS,
} from "./AdvanceGenAIv2Constants";
import { GradientLabel } from "./AdvanceGenAIv2Part1";

// ── Component: Curriculum.tsx ───────────────────────────────────────────────────
export const Curriculum = () => {
    const [activeTab, setActiveTab] = useState<"ibm" | "regular">("ibm");
    const [openModule, setOpenModule] = useState<number | null>(0);
    const modules = activeTab === "ibm" ? ibmModules : regularModules;

    return (
        <section id="programs" className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="PROGRAM CURRICULUM" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium mt-4 text-white mb-4 sm:mb-6">What You Will Learn in This Advanced AI Course</h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[900px] mx-auto mb-10 leading-relaxed">
                    This program covers everything from fundamentals to advanced AI agents, workflows, and automation systems
                </p>

                {/* Tabs */}
                <div className="inline-flex items-center p-[6px] rounded-full mb-12 sm:mb-16 bg-[#111] border border-white/5">
                    <button
                        onClick={() => setActiveTab("ibm")}
                        className={`px-8 py-3 rounded-full text-[13px] sm:text-[14px] font-bold transition-all duration-300 ${activeTab === "ibm" ? "bg-[#FC6401] text-white" : "text-[#9CA3AF] hover:text-white"}`}
                    >
                        IBM + AcceX
                    </button>
                    <button
                        onClick={() => setActiveTab("regular")}
                        className={`px-8 py-3 rounded-full text-[13px] sm:text-[14px] font-bold transition-all duration-300 ${activeTab === "regular" ? "bg-[#FC6401] text-white" : "text-[#9CA3AF] hover:text-white"}`}
                    >
                        Regular
                    </button>
                </div>

                <div className="flex flex-col gap-4 max-w-[1100px] mx-auto">
                    {modules.map((m: any, i) => (
                        <div
                            key={i}
                            className={`group relative border transition-all duration-300 rounded-[24px] overflow-hidden ${openModule === i ? 'bg-[#111] border-[#FC6401]/30' : 'bg-[#0D0D0D] border-white/5 hover:border-white/10'}`}
                        >
                            <div
                                onClick={() => setOpenModule(openModule === i ? null : i)}
                                className="p-6 sm:p-8 flex items-center justify-between cursor-pointer"
                            >
                                <div className="flex items-center gap-6 text-left">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-[18px] transition-all duration-300 ${openModule === i ? 'bg-[#FC6401] text-white' : 'bg-white/5 text-[#FC6401]'}`}>
                                        0{i + 1}
                                    </div>
                                    <h3 className="text-white text-[18px] sm:text-[22px] font-bold tracking-tight leading-tight group-hover:text-[#FC6401] transition-colors">
                                        {m.title}
                                    </h3>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${openModule === i ? 'border-[#FC6401] bg-[#FC6401]/10 text-[#FC6401] rotate-180' : 'border-white/10 text-white/40'}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </div>

                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openModule === i ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-6 sm:p-8 pt-0 border-t border-white/5 text-left">
                                    {/* Goal Section */}
                                    <div className="mb-8 p-4 rounded-xl bg-[#FC6401]/5 border-l-4 border-[#FC6401]">
                                        <span className="text-[#FC6401] text-[11px] font-black tracking-widest uppercase block mb-1">Learning Goal</span>
                                        <p className="text-white text-[15px] sm:text-[16px] leading-relaxed font-medium">
                                            {m.goal}
                                        </p>
                                    </div>

                                    {/* Sessions List */}
                                    <div className="grid grid-cols-1 gap-6">
                                        {m.sessions.map((session: any, sIdx: number) => (
                                            <div key={sIdx} className="bg-white/[0.02] rounded-xl p-5 border border-white/5">
                                                <h4 className="text-white text-[16px] sm:text-[18px] font-bold mb-4 flex items-center gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FC6401]" />
                                                    {session.title}
                                                </h4>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 pl-4">
                                                    {session.topics.map((topic: string, tIdx: number) => (
                                                        <li key={tIdx} className="text-[#94A3B8] text-[14px] leading-relaxed flex items-start gap-2">
                                                            <span className="mt-2 w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                                                            {topic}
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Practical Highlight */}
                                                {session.handsOn && (
                                                    <div className="mt-4 pt-4 border-t border-white/5">
                                                        <div className="px-3 py-1.5 rounded-lg bg-[#FC6401]/10 border border-[#FC6401]/20 text-[#FC6401] text-[12px] font-medium italic inline-block">
                                                            <span className="font-bold not-italic mr-2">Lab:</span> {session.handsOn}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ── Component: Mentors.tsx ───────────────────────────────────────────────────
export const MentorCard = ({ mentor }: { mentor: any }) => (
    <div className="relative w-[210px] sm:w-[260px] h-[230px] sm:h-[310px] flex-shrink-0 group">
        {/* Main Card with Left-Fade */}
        <div
            className="absolute inset-x-0 top-0 bottom-12 rounded-[28px] overflow-hidden border-t border-r border-b border-white/[0.08] backdrop-blur-md z-10"
            style={{ background: "linear-gradient(90deg, transparent 0%, #1a1a1e 40%, #1a1a1e 100%)" }}
        >
            <img
                src={mentor.image}
                alt={mentor.name}
                className="absolute inset-x-0 bottom-0 mx-auto h-[95%] w-auto object-contain transition-all duration-700 group-hover:scale-105"
            />
        </div>

        {/* Floating Logo Top-Right */}
        <div className="absolute top-[-15px] -right-7 z-10">
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-black border-[2.5px] border-[#1a1a1e] shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110">
                <img src={mentor.companyLogo} alt="" className="w-full h-full object-cover" />
            </div>
        </div>

        {/* Info Pill — bottom */}
        <div
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[85%] z-50 
            rounded-full px-5 py-4 text-center 
            border-l border-r border-b border-[#FC6401]/100 border-t-0
            bg-black/5 backdrop-blur-md
            transition-all duration-300"
        >
            {/* Name */}
            <div className="text-white text-[13px] sm:text-[14px] font-semibold tracking-tight mb-1 mt-[-10px]
            drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]">
                {mentor.name}
            </div>

            {/* designation */}
            <div className="text-white/60 text-[10px] sm:text-[11px] font-medium leading-tight">
                {mentor.designation} - {mentor.company}
            </div>

            {/* Accent line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
            w-[85%] h-[2px] 
            bg-gradient-to-r from-transparent via-[#FC6401] to-transparent 
            rounded-full" />
        </div>
    </div>
);

export const Mentors = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] flex flex-col items-center overflow-hidden">
        <div className="w-full relative flex flex-col items-center">
            <div className="w-full flex flex-col items-center z-10 px-4 sm:px-6">
                <GradientLabel text="MENTORS" />
                <h2 className="text-[32px] sm:text-[32px] md:text-[32px] font-medium text-white mb-4 text-center">
                    Learn from Industry AI Experts
                </h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[999px] mx-auto mb-10 sm:mb-14 leading-relaxed">
                    Get mentored by professionals with 10+ years of experience working in AI and automation roles across top companies.
                </p>


                <div className="w-full relative">
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-[60px] py-8 sm:py-12">
                        {MENTORS.map((mentor, i) => (
                            <div key={i} className="mb-8 sm:mb-12">
                                <MentorCard mentor={mentor} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);
