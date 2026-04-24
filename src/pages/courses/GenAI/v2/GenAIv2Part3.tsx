import {
    ibmModules,
    regularModules,
    MENTORS
} from "./GenAIv2Constants";
import { GradientLabel } from "./GenAIv2Part1";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// ── Component: Curriculum.tsx ───────────────────────────────────────────────────
export const Curriculum = () => {
    const [currMode, setCurrMode] = useState<"ibm" | "regular">("ibm");
    const [openModule, setOpenModule] = useState<number | null>(null);
    const currModules = currMode === "ibm" ? ibmModules : regularModules;

    return (
        <section id="programs" className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="PROGRAM CURRICULUM" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-6 sm:mb-8">What You Will Learn in This Generative AI Course</h2>

                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[950px] mx-auto mb-10 sm:mb-16 leading-relaxed">
                    This program covers everything from fundamentals to advanced AI workflows, tools, and automation systems.
                </p>

                <div className="inline-flex bg-[#111] p-1.5 rounded-full mb-10 sm:mb-16">
                    <button onClick={() => setCurrMode("ibm")} className={`px-5 sm:px-8 py-2.5 sm:py-3 border-none rounded-full text-[13px] sm:text-sm font-bold cursor-pointer transition-all duration-300 ${currMode === "ibm" ? "bg-[#FF6701] text-white" : "bg-transparent text-white"}`}>IBM + AcceX</button>
                    <button onClick={() => setCurrMode("regular")} className={`px-5 sm:px-8 py-2.5 sm:py-3 border-none rounded-full text-[13px] sm:text-sm font-bold cursor-pointer transition-all duration-300 ${currMode === "regular" ? "bg-[#FF6701] text-white" : "bg-transparent text-white"}`}>Regular</button>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 max-w-[1276px] mx-auto">
                    {currModules.map((m: any, i) => (
                        <div
                            key={i}
                            onClick={() => setOpenModule(openModule === i ? null : i)}
                            className="group relative p-4 sm:p-[24px] bg-[#111] transition-all duration-300 rounded-[12px] sm:rounded-[16px] flex flex-col gap-[12px] sm:gap-[16px] text-left cursor-pointer overflow-hidden border border-white/5 hover:border-white/10"
                            style={{ minHeight: openModule === i ? 'auto' : '80px' }}
                        >
                            <div className="flex items-start justify-between w-full">
                                <div className="flex gap-[8px] sm:gap-[15px] items-center">
                                    <span className="text-[16px] sm:text-[20px] font-bold text-[#FC6401] leading-[28px] opacity-70">
                                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                                    </span>
                                    <p className="text-[18px] sm:text-[20px] font-medium text-white leading-[24px] sm:leading-[28px] font-['Inter',sans-serif]">
                                        {m.week}: {m.title}
                                    </p>
                                </div>
                                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-white/40 group-hover:text-white transition-transform duration-300 flex-shrink-0 ${openModule === i ? 'rotate-180' : ''}`} />
                            </div>

                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openModule === i ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pl-[28px] sm:pl-[40px] flex flex-col gap-6 pb-4">
                                    {m.goal && (
                                        <div>
                                            <h4 className="text-[#FC6401] text-[12px] font-bold uppercase tracking-wider mb-2">Goal</h4>
                                            <p className="text-[#E0E0E0] text-[14px] sm:text-[16px] leading-relaxed max-w-[800px]">
                                                {m.goal}
                                            </p>
                                        </div>
                                    )}

                                    {m.sessions && (
                                        <div>
                                            <h4 className="text-[#FC6401] text-[12px] font-bold uppercase tracking-wider mb-3">Sessions</h4>
                                            <ul className="flex flex-col gap-3">
                                                {m.sessions.map((session: string, sIdx: number) => (
                                                    <li key={sIdx} className="flex items-start gap-3 text-[#C2C2C2] text-[14px] sm:text-[15px]">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FC6401] mt-2 flex-shrink-0" />
                                                        <span>{session}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {m.miniProject && (
                                        <div className="mt-2 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                                            <h4 className="text-white text-[13px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                                <span className="text-[#FC6401]">🚀</span> Mini Project
                                            </h4>
                                            <p className="text-[#C2C2C2] text-[14px] leading-relaxed italic">
                                                {m.miniProject}
                                            </p>
                                        </div>
                                    )}
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
export const MentorCard = ({ mentor }: { mentor: typeof MENTORS[0] }) => (
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
    <section className="py-16 sm:py-24 bg-[#0A0A0A] flex flex-col items-center overflow-hidden relative">
        <style>{`
            @keyframes mentor-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-mentor-scroll {
                animation: mentor-scroll 50s linear infinite;
            }
        `}</style>


        <div className="w-full max-w-[1440px] flex flex-col items-center z-10">
            <div className="px-4 sm:px-6 text-center">
                <GradientLabel text="MENTORS" />
                <h2 className="text-[32px] sm:text-[32px] md:text-[32px] font-medium text-white mb-4">
                    Learn from Industry AI Experts
                </h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[950px] mx-auto mb-10 sm:mb-16 leading-relaxed">
                    Get mentored by professionals with 10+ years of experience working in AI roles across top companies.
                </p>

            </div>

            <div className="w-full relative" style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            }}>
                <div className="flex w-max gap-8 sm:gap-12 animate-mentor-scroll py-8 px-4">
                    {[...MENTORS, ...MENTORS, ...MENTORS, ...MENTORS].map((mentor, i) => (
                        <div key={i} className="flex-shrink-0">
                            <MentorCard mentor={mentor} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
