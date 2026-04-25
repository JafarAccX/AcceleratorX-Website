import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
    ibmModules,
    regularModules,
    MENTORS,
} from "./AICrashCoursev2Constants";
import { GradientLabel } from "./AICrashCoursev2Part1";
import MentorCard from "../../../../components/ui/MentorCard";

// ── Component: Curriculum.tsx ───────────────────────────────────────────────────
export const Curriculum = ({ onDownloadBrochure }: { onDownloadBrochure?: () => void }) => {
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

                <div className="flex flex-col gap-3 sm:gap-4 max-w-[1276px] mx-auto" style={{ overflowAnchor: 'none' }}>
                    {modules.map((m, i) => (
                        <div
                            key={i}
                            id={`module-${i}`}
                            className={`group relative border transition-all duration-300 rounded-[20px] overflow-hidden scroll-mt-navbar ${openModule === i ? 'bg-[#111] border-[#EA580C]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-[#0D0D0D] border-white/5 hover:border-white/10'}`}
                        >
                            <div
                                onClick={() => {
                                    if (openModule === i) {
                                        setOpenModule(null);
                                        return;
                                    }
                                    
                                    const prevIdx = openModule;
                                    const isBelow = prevIdx !== null && i > prevIdx;

                                    if (isBelow) {
                                        setOpenModule(i);
                                        setTimeout(() => {
                                            const target = document.getElementById(`module-${i}`);
                                            if (target) {
                                                const top = target.getBoundingClientRect().top + window.pageYOffset - 110;
                                                window.scrollTo({ top, behavior: 'smooth' });
                                            }
                                        }, 320);
                                    } else {
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
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-[18px] transition-all duration-300 ${openModule === i ? 'bg-[#EA580C] text-white shadow-[0_0_20px_rgba(234,88,12,0.3)]' : 'bg-white/5 text-[#EA580C]'}`}>
                                        0{i + 1}
                                    </div>
                                    <h3 className="text-white text-[18px] sm:text-[22px] font-bold tracking-tight leading-tight group-hover:text-white transition-colors">
                                        {m.title}
                                    </h3>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${openModule === i ? 'border-[#EA580C] bg-[#EA580C]/10 text-[#EA580C] rotate-180' : 'border-white/10 text-white/40'}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </div>

                            <div className={`grid transition-all duration-300 ease-in-out ${openModule === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="p-6 sm:p-8 pt-0 border-t border-white/5 text-left opacity-0 transition-opacity duration-500 delay-100 data-[active=true]:opacity-100" data-active={openModule === i}>
                                        {m.goal && (
                                            <div className="mb-8 p-4 rounded-xl bg-[#EA580C]/5 border-l-4 border-[#EA580C]">
                                                <span className="text-[#EA580C] text-[11px] font-black tracking-widest uppercase block mb-1">Learning Goal</span>
                                                <p className="text-white text-[15px] sm:text-[16px] leading-relaxed font-medium">
                                                    {m.goal}
                                                </p>
                                            </div>
                                        )}

                                        <div className="space-y-6">
                                            {m.sessions && m.sessions.map((session: any, sIdx: number) => (
                                                <div key={sIdx} className="space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                                                        <h4 className="text-white font-semibold text-[15px] sm:text-[16px]">{session.title || session}</h4>
                                                    </div>
                                                    {session.topics && (
                                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 pl-4">
                                                            {session.topics.map((topic: string, tIdx: number) => (
                                                                <li key={tIdx} className="text-[#9CA3AF] text-[13px] sm:text-[14px] flex items-center gap-2">
                                                                    <div className="w-1 h-1 rounded-full bg-white/20" />
                                                                    {topic}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                <div className="mt-12 sm:mt-16 flex justify-center">
                    <button
                        onClick={onDownloadBrochure}
                        className="group flex items-center gap-2 text-white font-bold text-[18px] sm:text-[22px] transition-all duration-300 hover:gap-4"
                    >
                        <span className="border-b-2 border-[#EA580C] pb-1">Download Brochure</span>
                        <span className="text-[#EA580C] text-2xl">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

// ── Component: Mentors.tsx ───────────────────────────────────────────────────

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
                    <MentorCard key={i} mentor={mentor} accentColor="#EA580C" />
                ))}
            </div>
        </div>
    </section>
);
