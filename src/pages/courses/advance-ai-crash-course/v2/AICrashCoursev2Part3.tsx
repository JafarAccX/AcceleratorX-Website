import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
    ibmModules,
    regularModules,
    MENTORS,
} from "./AICrashCoursev2Constants";
import { GradientLabel } from "./AICrashCoursev2Part1";

// ── Component: Curriculum.tsx ───────────────────────────────────────────────────
export const Curriculum = () => {
    const [path, setPath] = useState<"ibm" | "regular">("ibm");
    const [openModule, setOpenModule] = useState<number | null>(null);
    const modules = path === "ibm" ? ibmModules : regularModules;

    return (
        <section id="programs" className="py-12 sm:py-20 lg:py-[100px] px-4 sm:px-6 bg-[#0A0A0A] border-t border-white/5">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="PROGRAMS CURRICULUM" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6 leading-tight">What You Will Learn in This Advanced AI Course</h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[1000px] mx-auto mb-10 sm:mb-12 leading-relaxed">
                    This program covers everything from fundamentals to advanced AI agents, workflows, and automation systems.
                </p>

                <div className="inline-flex items-center p-[6px] rounded-full mb-10 sm:mb-16 bg-[#0D0D0D] border border-white/10">
                    <button
                        onClick={() => setPath("ibm")}
                        className={`px-4 sm:px-8 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${path === "ibm" ? "bg-[#EA580C] text-white" : "text-[#9CA3AF] hover:text-white"}`}
                    >
                        IBM + AcceX
                    </button>
                    <button
                        onClick={() => setPath("regular")}
                        className={`px-4 sm:px-8 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${path === "regular" ? "bg-[#EA580C] text-white" : "text-[#9CA3AF] hover:text-white"}`}
                    >
                        Regular
                    </button>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 max-w-[1276px] mx-auto">
                    {modules.map((m, i) => (
                        <div
                            key={i}
                            onClick={() => setOpenModule(openModule === i ? null : i)}
                            className="group relative p-6 sm:p-8 bg-[#111] transition-all duration-300 rounded-[20px] sm:rounded-[24px] flex flex-col gap-2 text-left cursor-pointer overflow-hidden border border-white/5 hover:border-[#EA580C]/20"
                        >
                            <div className="flex items-center justify-between w-full">
                                <div className="flex gap-4 sm:gap-8 items-center">
                                    <span className="text-[18px] sm:text-[20px] font-bold text-[#EA580C] opacity-80 min-w-[30px]">{m.id}</span>
                                    <div className="flex flex-col gap-1 overflow-hidden">
                                        <p className="text-[18px] sm:text-[20px] font-regular text-white tracking-tight leading-tight font-['Inter',sans-serif]">
                                            {m.title} <span className="text-[#EA580C] text-[14px] font-regular ml-2">{(m as any).weeks}</span>
                                        </p>
                                        <div className={`transition-all duration-500 ease-in-out ${openModule === i ? 'max-h-[300px] mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="text-[#CFCFCF] text-[13px] sm:text-[15px] leading-relaxed opacity-80">
                                                {Array.isArray(m.desc) ? (
                                                    <div className="flex flex-col gap-1">
                                                        {m.desc.map((item, idx) => (
                                                            <p key={idx}>{item}</p>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p>{m.desc}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {m.desc && <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-white/40 group-hover:text-white transition-transform duration-300 flex-shrink-0 ${openModule === i ? 'rotate-180' : ''}`} />}
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
    <div className="relative w-[180px] xs:w-[210px] sm:w-[260px] h-[210px] xs:h-[230px] sm:h-[310px] flex-shrink-0 group">
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
        <div className="absolute top-[-15px] -right-7 z-30">
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-black border-[2.5px] border-[#1a1a1e] shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110">
                <img src={mentor.companyLogo} alt="" className="w-full h-full object-cover" />
            </div>
        </div>

        {/* Info Pill — bottom */}
        <div
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[85%] z-50 
            rounded-full px-5 py-4 text-center 
            border-l border-r border-b border-[#EA580C]/100 border-t-0
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
            bg-gradient-to-r from-transparent via-[#EA580C] to-transparent 
            rounded-full" />
        </div>
    </div>
);

export const Mentors = () => (
    <section className="py-20 sm:py-32 bg-[#0A0A0A] flex flex-col items-center overflow-hidden">
        <GradientLabel text="MENTORS" />
        <h2 className="text-[32px] sm:text-[32px] md:text-[32px] font-medium text-white mb-4 text-center px-4 tracking-tight">
            Learn from Industry AI Experts
        </h2>
        <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] max-w-[1000px] mx-auto mb-10 sm:mb-12 leading-relaxed">
            Get mentored by professionals with 10+ years of experience working in AI and automation roles across top companies.
        </p>
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-10">
            <div className="flex flex-wrap justify-center gap-y-24 sm:gap-y-32 gap-x-6 sm:gap-x-12">
                {MENTORS.map((mentor, i) => (
                    <MentorCard key={i} mentor={mentor} />
                ))}
            </div>
        </div>
    </section>
);
