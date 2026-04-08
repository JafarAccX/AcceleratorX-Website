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
                <GradientLabel text="PROGRAMS DESCRIPTION" highlight="DESCRIPTION" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6 leading-tight">Program Curriculum</h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[1000px] mx-auto mb-10 sm:mb-12 leading-relaxed">
                    This program covers everything from AI fundamentals to advanced AI systems, AI agents, automation workflows, and real-world deployment.
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
                                    <span className="text-[18px] sm:text-[20px] font-bold text-[#EA580C] opacity-80 min-w-[30px]">0{i+1}</span>
                                    <div className="flex flex-col gap-1 overflow-hidden">
                                        <h3 className="text-[16px] sm:text-[22px] font-bold text-white tracking-tight leading-tight">{m.title}</h3>
                                        <div className={`transition-all duration-500 ease-in-out ${openModule === i ? 'max-h-[200px] mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                                             <p className="text-[#CFCFCF] text-[13px] sm:text-[15px] leading-relaxed opacity-80">
                                                {m.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-white/40 group-hover:text-white transition-transform duration-300 flex-shrink-0 ${openModule === i ? 'rotate-180' : ''}`} />
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
        {/* Inner Card with Mentor Image */}
        <div className="absolute inset-x-0 top-0 bottom-12 rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-[#4D240E] to-[#0D0D0D] overflow-hidden">
            <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="absolute inset-x-0 bottom-0 mx-auto h-[95%] w-auto object-contain grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
            />
        </div>
        
        {/* Floating Logo Top-Right */}
        <div className="absolute top-[-10px] -right-3 z-40 drop-shadow-[0_4px_10px_rgba(234,88,12,0.3)]">
            <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center bg-white border border-white/20">
                <img src={mentor.companyLogo} alt="" className="w-full h-full object-contain p-1 rounded-full" />
            </div>
        </div>

        {/* Floating Info Box at Bottom */}
        <div className="absolute bottom-[1px] left-1/2 -translate-x-1/2 w-[90%] sm:w-[95%] h-[70px] sm:h-[85px] rounded-[24px] flex flex-col items-center justify-center text-center z-50 p-3 sm:p-4 border border-white/10 shadow-[0_0_20px_rgba(234,88,12,0.25)] bg-[#0A0A0A]/95 backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
            <div className="text-white text-[12px] sm:text-[14px] font-bold tracking-tight">{mentor.name}</div>
            <div className="text-white text-[10px] sm:text-[11px] opacity-70 mt-0.5 leading-tight">{mentor.designation}</div>
            <div className="text-[#EA580C] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mt-1">@ {mentor.company}</div>
        </div>
    </div>
);

export const Mentors = () => (
    <section className="py-20 sm:py-32 bg-[#0A0A0A] flex flex-col items-center overflow-hidden">
        <GradientLabel text="MENTORS" highlight="ORS" />
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-white mb-20 text-center px-4 tracking-tight">
            Learn from Industry AI Experts
        </h2>
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-10">
            <div className="flex flex-wrap justify-center gap-y-24 sm:gap-y-32 gap-x-6 sm:gap-x-12">
                {MENTORS.map((mentor, i) => (
                    <MentorCard key={i} mentor={mentor} />
                ))}
            </div>
        </div>
    </section>
);
