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
    const modules = activeTab === "ibm" ? ibmModules : regularModules;

    return (
        <section id="programs" className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="PROGRAMS DESCRIPTION" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Program Curriculum</h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[800px] mx-auto mb-10 sm:mb-14 leading-relaxed">
                    This program covers everything from fundamentals to advanced AI agents, workflows, and automation systems
                </p>

                {/* Tabs */}
                <div className="inline-flex items-center p-[6px] rounded-full mb-12 sm:mb-20 bg-[#0D0D0D] border border-white/10">
                    <button
                        onClick={() => setActiveTab("ibm")}
                        className={`px-6 sm:px-8 py-[10px] sm:py-[12px] rounded-full text-[13px] sm:text-[14px] font-bold transition-all duration-300 ${activeTab === "ibm" ? "bg-[#FC6401] text-white" : "text-[#9CA3AF] hover:text-white"}`}
                    >
                        IBM + AcceX
                    </button>
                    <button
                        onClick={() => setActiveTab("regular")}
                        className={`px-6 sm:px-8 py-[10px] sm:py-[12px] rounded-full text-[13px] sm:text-[14px] font-bold transition-all duration-300 ${activeTab === "regular" ? "bg-[#FC6401] text-white" : "text-[#9CA3AF] hover:text-white"}`}
                    >
                        Regular
                    </button>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6 max-w-[1000px] mx-auto">
                    {modules.map((m, i) => (
                        <div
                            key={i}
                            className="group relative p-6 sm:p-[32px] bg-[#111]/50 backdrop-blur-xl border border-white/5 transition-all duration-300 rounded-[16px] sm:rounded-[24px] flex flex-col gap-[12px] sm:gap-[16px] text-left cursor-default hover:bg-[#111]/80 hover:border-[#FC6401]/20"
                        >
                            <div className="flex items-start justify-between w-full">
                                <div className="flex gap-[16px] sm:gap-[24px] items-start">
                                    <span className="text-[18px] sm:text-[22px] font-bold text-[#FC6401] opacity-60 mt-1">{m.id}</span>
                                    <div className="flex flex-col">
                                        <h3 className="text-[16px] sm:text-[22px] font-medium text-white mb-2 leading-tight">{m.title}</h3>
                                        <p className="text-[#94A3B8] text-[13px] sm:text-[15px] leading-relaxed">
                                            {m.desc}
                                        </p>
                                    </div>
                                </div>
                                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white/20 transition-transform duration-300" />
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
        <div className="absolute top-[-10px] -right-3 z-40 drop-shadow-[0_4px_10px_rgba(252,100,1,0.3)]">
            <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center bg-white border border-white/20">
                <img src={mentor.companyLogo} alt="" className="w-full h-full object-contain p-1 rounded-full" />
            </div>
        </div>

        {/* Floating Info Box at Bottom */}
        <div className="absolute bottom-[1px] left-1/2 -translate-x-1/2 w-[90%] sm:w-[95%] h-[70px] sm:h-[85px] rounded-[24px] flex flex-col items-center justify-center text-center z-50 p-3 sm:p-4 border border-white/10 shadow-[0_0_20px_rgba(252,100,1,0.25)] bg-[#0A0A0A]/95 backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
            <div className="text-white text-[12px] sm:text-[14px] font-bold tracking-tight">{mentor.name}</div>
            <div className="text-white text-[10px] sm:text-[11px] opacity-70 mt-0.5 leading-tight">{mentor.designation}</div>
            <div className="text-[#FC6401] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mt-1">@ {mentor.company}</div>
        </div>
    </div>
);

export const Mentors = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] flex flex-col items-center overflow-hidden">
        <div className="w-full relative flex flex-col items-center">
            <div
                className="hidden lg:block absolute z-50 pointer-events-none w-[60px] lg:w-[80px] xl:w-[104px] h-[200px] lg:h-[260px] xl:h-[336px]"
                style={{
                    left: "0",
                    top: "195px",
                    background: "linear-gradient(90deg, #FC6401 0%, rgba(252, 100, 1, 0) 100%)",
                    borderTopLeftRadius: "16px",
                    borderBottomLeftRadius: "16px",
                    opacity: 0.5
                }}
            />
            <div
                className="hidden lg:block absolute z-50 pointer-events-none w-[60px] lg:w-[80px] xl:w-[104px] h-[200px] lg:h-[260px] xl:h-[336px]"
                style={{
                    right: "0",
                    top: "195px",
                    background: "linear-gradient(270deg, #FC6401 0%, rgba(252, 100, 1, 0) 100%)",
                    borderTopRightRadius: "16px",
                    borderBottomRightRadius: "16px",
                    opacity: 0.5
                }}
            />

            <div className="w-full flex flex-col items-center z-10 px-4 sm:px-6">
                <GradientLabel text="MENTORS" highlight="ORS" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-white mb-2 text-center">
                    Learn from Industry AI Architects
                </h2>
                <p className="text-[#94A3B8] text-[14px] sm:text-[16px] max-w-[800px] mx-auto text-center mb-12 sm:mb-20 leading-relaxed font-medium">
                    Get mentored by professionals with 10+ years of experience working in AI roles across top companies.
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
