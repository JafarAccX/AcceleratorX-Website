import {
    ibmModules,
    regularModules,
    MENTORS
} from "./GenAIv2Constants";
import { GradientLabel } from "./GenAIv2Part1";
import MentorCard from "../../../../components/ui/MentorCard";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// ── Component: Curriculum.tsx ───────────────────────────────────────────────────
export const Curriculum = ({ onDownloadBrochure }: { onDownloadBrochure?: () => void }) => {
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

                <div className="flex flex-col gap-3 sm:gap-4 max-w-[1276px] mx-auto" style={{ overflowAnchor: 'none' }}>
                    {currModules.map((m: any, i) => (
                        <div
                            key={i}
                            id={`module-${i}`}
                            className={`group relative border transition-all duration-300 rounded-[20px] overflow-hidden scroll-mt-navbar ${openModule === i ? 'bg-[#111] border-[#FF6701]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-[#0D0D0D] border-white/5 hover:border-white/10'}`}
                        >
                            <div
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (openModule === i) {
                                        setOpenModule(null);
                                        return;
                                    }
                                    
                                    const prevIdx = openModule;
                                    const isBelow = prevIdx !== null && i > prevIdx;

                                    if (isBelow) {
                                        // Collapse + expand happen simultaneously — no double-scroll
                                        setOpenModule(i);

                                        // After CSS transition completes, scroll once to the correct position
                                        setTimeout(() => {
                                            const target = document.getElementById(`module-${i}`);
                                            if (target) {
                                                const top = target.getBoundingClientRect().top + window.pageYOffset - 110;
                                                window.scrollTo({ top, behavior: 'smooth' });
                                            }
                                        }, 320);
                                    } else {
                                        // Opening above or first open — scroll immediately after mount
                                        setOpenModule(i);
                                        setTimeout(() => {
                                            const el = document.getElementById(`module-${i}`);
                                            if (el) {
                                                const top = el.getBoundingClientRect().top + window.pageYOffset - 110;
                                                window.scrollTo({ top, behavior: 'smooth' });
                                            }
                                        }, 50);
                                    }
                                }}
                                className="p-6 sm:p-8 flex items-center justify-between cursor-pointer"
                            >
                                <div className="flex items-center gap-6 text-left">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-[18px] transition-all duration-300 ${openModule === i ? 'bg-[#FF6701] text-black shadow-[0_0_20px_rgba(255,103,1,0.3)]' : 'bg-white/5 text-[#FF6701]'}`}>
                                        0{i + 1}
                                    </div>
                                    <h3 className="text-white text-[18px] sm:text-[22px] font-bold tracking-tight leading-tight group-hover:text-white transition-colors">
                                        {m.week && <span className="text-[#FF6701] mr-2">{m.week}:</span>}
                                        {m.title}
                                    </h3>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${openModule === i ? 'border-[#FF6701] bg-[#FF6701]/10 text-[#FF6701] rotate-180' : 'border-white/10 text-white/40'}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </div>

                            <div className={`grid transition-all duration-300 ease-in-out ${openModule === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="p-6 sm:p-8 pt-0 border-t border-white/5 text-left opacity-0 transition-opacity duration-500 delay-100 data-[active=true]:opacity-100" data-active={openModule === i}>
                                        {m.goal && (
                                            <div className="mb-8 p-4 rounded-xl bg-[#FF6701]/5 border-l-4 border-[#FF6701]">
                                                <span className="text-[#FF6701] text-[11px] font-black tracking-widest uppercase block mb-1">Learning Goal</span>
                                                <p className="text-white text-[15px] sm:text-[16px] leading-relaxed font-medium">
                                                    {m.goal}
                                                </p>
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 gap-4">
                                            <span className="text-white/30 text-[11px] font-black tracking-widest uppercase block mb-2 pl-2">Key Sessions</span>
                                            {m.sessions && m.sessions.map((session: string, sIdx: number) => (
                                                <div key={sIdx} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group/session">
                                                    <div className="w-2 h-2 rounded-full bg-[#FF6701] mt-2 shadow-[0_0_8px_rgba(255,103,1,0.6)] group-hover/session:scale-125 transition-transform" />
                                                    <span className="text-[#94A3B8] text-[15px] sm:text-[16px] leading-relaxed group-hover/session:text-white transition-colors font-medium">{session}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {m.miniProject && (
                                            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-[#FF6701]/10 to-transparent border border-[#FF6701]/20">
                                                <h4 className="text-white text-[14px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                                    <span className="text-[#FF6701]">🚀</span> Mini Project
                                                </h4>
                                                <p className="text-[#CFCFCF] text-[15px] leading-relaxed italic">
                                                    {m.miniProject}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 flex justify-center">
                    <button
                        onClick={onDownloadBrochure}
                        className="group flex items-center gap-2 text-white font-bold text-[18px] sm:text-[22px] transition-all duration-300 hover:gap-4"
                    >
                        <span className="border-b-2 border-[#FF6701] pb-1">Download Brochure</span>
                        <span className="text-[#FF6701] text-2xl">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

// ── Component: Mentors.tsx ───────────────────────────────────────────────────

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
                <div className="flex w-max gap-8 sm:gap-12 animate-mentor-scroll pause-on-hover py-8 px-4">
                    {[...MENTORS, ...MENTORS, ...MENTORS, ...MENTORS].map((m, i) => (
                        <div key={i} className="flex-shrink-0">
                            <MentorCard mentor={m} accentColor="#FC6401" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
