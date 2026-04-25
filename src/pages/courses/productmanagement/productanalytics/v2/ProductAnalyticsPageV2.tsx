import { useState } from "react";
import { Link } from "react-router-dom";
import MentorCard from "../../../../components/ui/MentorCard";
import { ChevronDown } from "lucide-react";
import * as Constants from "./ProductAnalyticsv2Constants";
import EnrollmentModalADS from "../../../allprograms-ads/EnrollmentModalADS";
import { useCoursePurchase } from "../../../../../hooks/useCoursePurchase";
import { COURSE_IDS } from "../../../../../utils/constants_price";
import InfiniteScrollTools from "../../../../../components/ui/InfiniteScrollTools";

const {
    ASSETS,
    ALUMNI_LOGOS,
    switchPath,
    freshersPath,
    ibmModules,
    regularModules,
    MENTORS,
    TOOLS_LIST,
    PA_PHASES,
    CAREER_ROLES,
    PRICING_PLANS,
    FAQS,
} = Constants;

// ── Global Styles ───────────────────────────────────────────────────────
const GlobalStyles = () => (
    <style>
        {`
            .animate-infinite-scroll-right { animation: infinite-scroll-right 30s linear infinite; }
            .g-draw-path-green {
                stroke-dasharray: 1500;
                stroke-dashoffset: 1500;
                animation: draw-chart-line 6s ease-in-out infinite;
            }
            .g-chart-dot {
                transform-origin: center;
                animation: dot-appear 6s ease-out infinite;
            }
            .g-chart-glow {
                animation: glow-pulse 6s ease-in-out infinite;
            }
            @keyframes borderFlow {
                0% { stroke-dashoffset: 1000; }
                100% { stroke-dashoffset: 0; }
            }
            .hover-glow-path {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                transition: stroke 0.3s ease, stroke-width 0.3s ease, filter 0.3s ease;
            }
            .group:hover .hover-glow-path {
                animation: borderFlow 15s linear infinite;
            }
        `}
    </style>
);

// ── Shared UI ─────────────────────────────────────────────────────────────
type GradientLabelProps = {
    text: string;
    highlight?: string;
};

const GradientLabel = ({ text, highlight }: GradientLabelProps) => (
    <div className="flex justify-center mb-4">
        <div
            className={`font-['Open_Sans',sans-serif] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase bg-clip-text text-transparent flex ${highlight ? 'gap-1' : 'gap-0'}`}
            style={{ backgroundImage: "linear-gradient(90deg, #FFFFFF 0%, #16A44A 33%, #16A44A 66%, #FFFFFF 100%)" }}
        >
            {highlight ? (
                <>
                    <span>{text.split(highlight)[0].trim()}</span>
                    <span className="text-[#16A44A]">{highlight}</span>
                    <span>{text.split(highlight)[1].trim()}</span>
                </>
            ) : (
                text
            )}
        </div>
    </div>
);



// ── Component: Hero ───────────────────────────────────────────────────
const Hero = ({ onDownloadBrochure }: { onDownloadBrochure: () => void }) => {
    return (
        <section className="relative min-h-[600px] lg:min-h-[850px] bg-[#0A0A0A] overflow-hidden flex items-center justify-center pt-[80px]">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
            <div className="w-full max-w-[1440px] mx-auto relative flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-6 lg:px-[70px] z-10 gap-10 lg:gap-0">
                <div className="w-full lg:max-w-[45%] flex flex-col gap-6 sm:gap-8 lg:mt-[60px] text-center lg:text-left">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[1.1] tracking-tight max-w-[612px] text-white mx-auto lg:mx-0">
                            AI-Powered <span className="bg-gradient-to-r from-[#FFFFFF] via-[#16A44A] to-[#16A44A] bg-clip-text text-transparent">Product Analytics Program</span> for Career Edge
                        </h1>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[26px] text-[#C2C2C2] font-normal max-w-[569px] opacity-80 mx-auto lg:mx-0">
                            Master product metrics, user behaviour, and data-driven strategy using AI tools, SQL, and automation. Build a career in scaleable product roles.
                        </p>
                    </div>

                    <div className="w-full max-w-[500px] h-auto rounded-[24px] backdrop-blur-[20px] flex flex-col sm:flex-row items-center p-4 sm:p-6 gap-4 sm:gap-6 self-center lg:self-start relative overflow-hidden border-t border-t-white/10 border-b border-b-white/5 border-x-0">
                        <div className="absolute inset-0 z-0 opacity-40" style={{ background: "linear-gradient(90deg, rgba(22, 164, 74, 0.1) 0%, rgba(22, 164, 74, 0.05) 100%)" }} />
                        <div className="flex-1 flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-6 z-10 w-full">
                            <div className="flex flex-col items-start sm:items-center sm:flex-row gap-4 sm:gap-6 mx-auto sm:mx-0">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-transparent flex items-center justify-center flex-shrink-0">
                                        <img src={ASSETS.bagIcon} alt="Jobs" className="w-6 h-6 object-contain" />
                                    </div>
                                    <div className="text-left font-['Inter',sans-serif]">
                                        <div className="text-[20px] sm:text-[22px] font-bold leading-tight">1800+</div>
                                        <div className="text-[13px] text-[#EAEAEA]">Learners</div>
                                    </div>
                                </div>
                                <div className="hidden sm:block w-[1px] h-10 bg-white/[0.1]" />
                                <div className="sm:hidden w-full h-[1px] bg-white/[0.1] my-1" />
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-transparent flex items-center justify-center flex-shrink-0">
                                        <img src={ASSETS.rupeeIcon} alt="CTC" className="w-6 h-6 object-contain" />
                                    </div>
                                    <div className="text-left font-['Inter',sans-serif]">
                                        <div className="text-[20px] sm:text-[22px] font-bold leading-tight">15 LPA+</div>
                                        <div className="text-[13px] text-[#EAEAEA]">Average CTC</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[679px] flex flex-col gap-5 items-center lg:items-start overflow-hidden mt-8 lg:mt-0">
                        <div className="text-[10px] sm:text-[11px] font-bold text-white tracking-[0.1em] uppercase opacity-60">
                            TOP PRODUCT COMPANIES HIRING (INDIA & ABROAD)
                        </div>

                        <div className="relative w-full overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                            <div className="flex w-max gap-8 sm:gap-12 animate-infinite-scroll-left py-2">
                                {[1, 2, 3, 4].map((group) => (
                                    <div key={group} className="flex items-center gap-8 sm:gap-12 opacity-60">
                                        {ALUMNI_LOGOS.map((logo) => (
                                            <img key={logo.name} src={logo.url} alt={logo.name} className="h-[16px] sm:h-[20px] object-contain" />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-14 pt-2">
                        <div className="group flex items-center cursor-pointer">
                            <button className="h-[48px] sm:h-[54px] px-5 sm:px-8 bg-[#16A44A] border-2 border-transparent rounded-full font-bold text-white text-[14px] sm:text-[16px] transition-all duration-300 group-hover:bg-transparent group-hover:border-[#16A44A]">
                                Explore Our Programs
                            </button>
                            <div className="-ml-[1px] w-[48px] sm:w-[54px] h-[48px] sm:h-[54px] rounded-full bg-[#16A44A] border-2 border-transparent flex items-center justify-center transition-all duration-300 group-hover:bg-transparent group-hover:border-[#16A44A]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                            </div>
                        </div>
                        <div
                            onClick={onDownloadBrochure}
                            className="flex items-center text-[14px] sm:text-[16px] font-bold text-white group whitespace-nowrap cursor-pointer"
                        >
                            <span className="border-b-2 border-white/40 group-hover:border-white transition-all">Download Brochure</span>
                            <span className="ml-2 text-lg">→</span>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:flex-1 h-auto relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[350px] sm:max-w-[500px] lg:max-w-[649px] lg:w-[649px] aspect-[649/683] lg:h-[683px] bg-gradient-to-b from-[#000000] to-[#16A44A] rounded-[32px] sm:rounded-[48px] border-t border-t-black border-b border-b-white/5 border-x-0 overflow-hidden mt-6 lg:mt-0">
                        <img src={ASSETS.heroImage} alt="Accelerator Student" className="absolute bottom-[-28px] left-[55%] -translate-x-1/2 h-full w-auto object-contain scale-[1.05] z-10" />
                        <div className="absolute top-[4%] sm:top-[6%] right-[2%] sm:right-[4%] z-30">
                            <img src={ASSETS.ibmLogo} alt="IBM" className="h-[35px] sm:h-[48px] lg:h-[64px] brightness-200" />
                        </div>
                        <div className="absolute top-[4%] sm:top-[6%] left-[4%] sm:left-[6%] z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                            <img src={ASSETS.studentsGrp} alt="Happy Students" className="w-[110px] sm:w-[140px] md:w-[165px] lg:w-[190px] h-auto object-contain" />
                        </div>

                        {/* Floating Pills */}
                        <div className="absolute top-[38%] left-[-2%] sm:left-[4%] flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-black/5 z-30 hover:scale-105 transition-transform duration-300">
                            <img src="/assets/liveclasses.png" alt="Live Classes" className="w-3.5 sm:w-4 h-3.5 sm:h-4 object-contain" />
                            <span className="text-[11px] sm:text-[14px] font-semibold text-[#1CA425] whitespace-nowrap">Live Sessions</span>
                        </div>

                        <div className="absolute top-[52%] right-[-2%] sm:right-[4%] flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-black/5 z-30 hover:scale-105 transition-transform duration-300">
                            <img src="/assets/mentorconnect.png" alt="Mentor Connect" className="w-3.5 sm:w-4 h-3.5 sm:h-4 object-contain" />
                            <span className="text-[11px] sm:text-[14px] font-semibold text-[#16A44A] whitespace-nowrap">PM Connect</span>
                        </div>

                        <div className="absolute bottom-[20%] left-[-2%] sm:left-[4%] flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-black/5 z-30 hover:scale-105 transition-transform duration-300">
                            <img src="/assets/careersupport.png" alt="Career Support" className="w-3.5 sm:w-4 h-3.5 sm:h-4 object-contain" />
                            <span className="text-[11px] sm:text-[14px] font-semibold text-[#4C5BFA] whitespace-nowrap">Hiring Partners</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ── Component: AlumniLogos ───────────────────────────────────────────────
const AlumniLogos = () => (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[70px] py-12 sm:py-16 lg:py-24 pb-16 sm:pb-20 lg:pb-32 overflow-hidden">
        <GradientLabel text="SUCCESS STORIES" highlight="STORIES" />
        <p className="text-center text-[#F5F7FF] text-xl sm:text-2xl md:text-[32px] font-medium mb-3 px-4">Our Alumni Are Leaders in Product Across 1700+ Top MNCs</p>
        <p className="text-center text-[#94A3B8] text-sm sm:text-base md:text-[16px] font-medium mb-10 sm:mb-12 lg:mb-16 max-w-[1047px] mx-auto leading-relaxed px-4">Our learners are building AI-powered product dashboards, automated systems, and data-driven decision models across top tech companies.</p>
        <div className="relative w-full overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
            <div className="flex w-max gap-6 sm:gap-8 animate-infinite-scroll-left">
                {[...ALUMNI_LOGOS, ...ALUMNI_LOGOS].map((brand, idx) => (
                    <div key={`${brand.name}-${idx}`} className="flex items-center justify-center brightness-110 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer px-4 sm:px-8">
                        <img src={brand.url} alt={brand.name} loading="lazy" style={{ height: `${brand.height * 0.75}px` }} className="object-contain" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ── Component: Roadmap ───────────────────────────────────────────────────
const Roadmap = () => {
    const [roadmapPath, setRoadmapPath] = useState<"switch" | "freshers">("switch");
    const currentPath = roadmapPath === "freshers" ? freshersPath : switchPath;

    return (
        <section className="min-h-[500px] lg:min-h-[815px] py-12 sm:py-16 lg:py-24 px-4 md:px-8 lg:px-[70px] bg-[#0A0A0A]">
            <div className="max-w-[1440px] mx-auto text-center">
                <GradientLabel text="PROGRAMS ROADMAP" highlight="ROADMAP" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 px-2">AI Product Analytics Roadmap for Professionals & Freshers</h2>
                <div className="inline-flex items-center p-[6px] rounded-full mb-10 sm:mb-16 bg-[#0D0D0D] border border-white/10">
                    <button onClick={() => setRoadmapPath("switch")} className={`px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${roadmapPath === "switch" ? "bg-[#16A44A] text-white" : "text-[#9CA3AF] hover:text-white"}`}>Career Switch</button>
                    <button onClick={() => setRoadmapPath("freshers")} className={`px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${roadmapPath === "freshers" ? "bg-[#16A44A] text-white" : "text-[#9CA3AF] hover:text-white"}`}>Freshers</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-4 sm:gap-y-6 w-full max-w-[1288px] mx-auto">
                    {currentPath.slice(0, 5).map((item, idx) => (
                        <div key={idx} className="relative group w-full max-w-[664px] min-h-[100px] sm:min-h-[111px] h-auto py-[10px] sm:py-4 mx-auto cursor-pointer">
                            <svg width="100%" height="100%" viewBox="0 0 664 111" preserveAspectRatio="none" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
                                <path
                                    d={idx % 2 === 0
                                        ? "M588 0H24C10.7452 0 0 10.7452 0 24V87C0 100.255 10.7452 111 24 111H588C600 111 608 105 612 95L660 16C664 6 656 0 644 0H588Z"
                                        : "M76 0H640C653.255 0 664 10.7452 664 24V87C664 100.255 653.255 111 640 111H20C8 111 0 105 4 95L52 16C56 6 64 0 76 0Z"
                                    }
                                    className="fill-[#0D0D0D] stroke-white/10 stroke-[1.5px] transition-all duration-300 group-hover:stroke-[#16A44A]/50"
                                />
                            </svg>
                            <div className={`relative flex flex-col gap-1 h-full justify-center ${idx % 2 === 0 ? 'pl-6 sm:pl-10 text-left' : 'pl-[50px] sm:pl-[88px] text-left'}`}>
                                <div className="flex items-center gap-3">
                                    <img src={item.icon} alt={item.title} loading="lazy" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                                    <h3 className="text-white text-[14px] font-bold">{item.title}</h3>
                                </div>
                                <p className="text-[#CFCFCF] text-[12px] sm:text-[13px] ml-8 sm:ml-9 max-w-[80%]">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ── Component: Curriculum ───────────────────────────────────────────────────
const Curriculum = () => {
    const [currMode, setCurrMode] = useState<"ibm" | "regular">("ibm");
    const [openModule, setOpenModule] = useState<number | null>(null);
    const currModules = currMode === "ibm" ? ibmModules : regularModules;

    return (
        <section id="programs" className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="CURRICULUM" highlight="CURRICULUM" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4">AI-Driven Product Analytics Curriculum</h2>
                <div className="inline-flex bg-[#111] p-1.5 rounded-full border border-white/[0.08] mb-12">
                    <button onClick={() => setCurrMode("ibm")} className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${currMode === "ibm" ? "bg-[#16A44A] text-white" : "text-white"}`}>IBM + AcceX</button>
                    <button onClick={() => setCurrMode("regular")} className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${currMode === "regular" ? "bg-[#16A44A] text-white" : "text-white"}`}>Regular</button>
                </div>
                <div className="flex flex-col gap-4 max-w-[1000px] mx-auto" style={{ overflowAnchor: 'none' }}>
                    {currModules.map((m, i) => (
                        <div
                            key={i}
                            id={`module-${i}`}
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
                            className="p-6 bg-[#0D0D0D] border border-white/5 rounded-xl text-left cursor-pointer transition-all duration-300 hover:bg-[#111] scroll-mt-navbar"
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-[#16A44A] font-bold mr-4">0{i + 1}</span>
                                <h3 className="text-white font-bold flex-1">{m.title}</h3>
                                <ChevronDown className={`transition-transform duration-300 ${openModule === i ? 'rotate-180' : ''}`} />
                            </div>
                            <div className={`grid-rows-collapse ${openModule === i ? 'grid-rows-expand' : ''}`}>
                                <div className="overflow-hidden">
                                    <div className="pt-6 space-y-6 opacity-0 transition-opacity duration-500 delay-100 data-[active=true]:opacity-100" data-active={openModule === i}>
                                        <p className="text-[#A0A8B8] pl-10 text-sm leading-relaxed">{m.desc}</p>
                                        <div className="space-y-6 pl-10">
                                            {m.sessions.map((session, sIdx) => (
                                                <div key={sIdx} className="space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#16A44A]" />
                                                        <h4 className="text-white font-semibold">{session.title}</h4>
                                                    </div>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 pl-4">
                                                        {session.topics.map((topic, tIdx) => (
                                                            <li key={tIdx} className="text-gray-400 text-sm flex items-start gap-2">
                                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 flex-shrink-0" />
                                                                {topic}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
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



const Mentors = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
        <div className="w-full max-w-[1285px] relative flex flex-col items-center px-4 z-10">
            <GradientLabel text="MENTORS" highlight="ORS" />
            <h2 className="text-[32px] sm:text-[32px] md:text-[32px] font-medium text-white mb-12 text-center">Learn from Global Product Analytics Experts</h2>
            <div className="w-full flex flex-wrap justify-center items-center gap-12 sm:gap-24 mt-12 px-4">
                {MENTORS.map((m, i) => <MentorCard key={i} mentor={m} accentColor="#16A44A" />)}
            </div>
        </div>
    </section>
);

// ── Component: Tools ───────────────────────────────────────────────────
const Tools = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-12">Tools</h2>
            <InfiniteScrollTools tools={TOOLS_LIST} accentColor="#16A44A" speed={40} />
        </div>
    </section>
);

// ── Component: Checklist ───────────────────────────────────────────────────
const Checklist = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-[1267px] mx-auto text-center px-4 sm:px-6">
            <GradientLabel text="PROGRAMS DESCRIPTION" highlight="DESCRIPTION" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Product Analytics Skill Checklist</h2>

            <div className="relative min-h-[300px]">
                <div className="absolute top-10 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/15 to-transparent hidden md:block pointer-events-none" />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 sm:gap-y-12 gap-x-3 sm:gap-x-4">
                    {PA_PHASES.map((p, i) => (
                        <div key={i} className="flex flex-col items-center text-center group cursor-default h-full">
                            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#111] border-2 border-[#16A44A]/20 flex items-center justify-center mb-4 sm:mb-6 relative z-10 group-hover:border-[#16A44A]/60 group-hover:bg-[#16A44A]/5 transition-all duration-500 shadow-[0_0_15px_rgba(22,164,74,0.05)]">
                                <div
                                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundColor: '#16A44A',
                                        maskImage: `url("${p.icon}")`,
                                        WebkitMaskImage: `url("${p.icon}")`,
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain',
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskPosition: 'center',
                                        WebkitMaskPosition: 'center'
                                    }}
                                />
                            </div>

                            <h3 className="text-white text-[14px] sm:text-[18px] font-bold mb-1 sm:mb-2 tracking-tight">{p.title}</h3>
                            <p className="text-[#A0A8B8] text-[12px] sm:text-[14px] leading-snug mb-3 sm:mb-4 max-w-[200px] font-regular">{p.description}</p>
                            <span className="mt-auto text-[#16A44A] text-[9px] sm:text-[10px] font-bold tracking-[0.1em] uppercase">{p.phase}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ── Component: SkillGapChart (Indigo themed) ────────────────────
const SkillGapChart = () => {
    return (
        <div className="relative bg-[#0D0D0D] rounded-[32px] border border-[#1f1f1f] shadow-[0_0_100px_rgba(22, 164, 74, 0.1)] overflow-hidden w-full max-w-[1100px] mx-auto p-8 lg:p-16 mt-20">
            <div className="relative w-full aspect-[2/1] min-h-[300px]">
                {/* Header Legend */}
                <div className="absolute top-0 left-0 lg:left-10 flex gap-8 items-center text-[10px] lg:text-[12px] font-bold tracking-widest uppercase">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-[2px] border-b-[2px] border-dashed border-[#555]"></div>
                        <span className="text-[#7A7A7A]">Average Analyst</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-[3px] bg-[#16A44A]"></div>
                        <span className="text-white">AI-Powered Analyst</span>
                    </div>
                </div>

                {/* Chart Grid Lines */}
                <div className="absolute top-[60px] bottom-8 left-[40px] lg:left-[50px] right-0 flex flex-col justify-between">
                    {[16, 12, 8, 4, 0].map((val) => (
                        <div key={val} className="relative w-full border-t border-white/5 h-0">
                            <span className="absolute -top-3 -left-[35px] lg:-left-[45px] w-8 text-right text-[10px] lg:text-[11px] font-medium text-[#7A7A7A]">
                                {val}x
                            </span>
                        </div>
                    ))}
                </div>

                {/* Chart X-axis Labels */}
                <div className="absolute bottom-0 left-[40px] lg:left-[50px] right-0 flex justify-between px-0 text-[10px] lg:text-[11px] font-medium text-[#7A7A7A] transform translate-y-1/2">
                    <span className="-ml-3">2026</span>
                    <span>2028</span>
                    <span>2030</span>
                    <span>2032</span>
                    <span className="-mr-3">2035</span>
                </div>

                {/* Chart Vectors */}
                <svg className="absolute top-[60px] bottom-8 left-[40px] lg:left-[50px] right-0 w-full h-[calc(100%-60px-32px)] overflow-visible" viewBox="0 0 1000 500" preserveAspectRatio="none">
                    <path
                        d="M 0,350 C 125,350 125,250 250,250 C 375,250 375,180 500,180 C 625,180 625,80 750,80 C 875,80 875,20 1000,20"
                        fill="none" stroke="#16A44A" strokeWidth="12" className="g-chart-glow blur-xl" strokeLinecap="round"
                    />
                    <path
                        d="M 0,433 L 250,416 L 500,400 L 750,383 L 1000,366"
                        fill="none" stroke="#555" strokeWidth="2" strokeDasharray="8 8"
                    />
                    <path
                        d="M 0,350 C 125,350 125,250 250,250 C 375,250 375,180 500,180 C 625,180 625,80 750,80 C 875,80 875,20 1000,20"
                        fill="none" stroke="#16A44A" strokeWidth="4" className="g-draw-path-green" strokeLinecap="round"
                    />
                    {[
                        { cx: 0, cy: 433 }, { cx: 250, cy: 416 }, { cx: 500, cy: 400 }, { cx: 750, cy: 383 }, { cx: 1000, cy: 366 }
                    ].map((point, i) => (
                        <circle key={`g-${i}`} cx={point.cx} cy={point.cy} r="4" fill="#0D0D0D" stroke="#555" strokeWidth="2" />
                    ))}
                    {[
                        { cx: 0, cy: 350 }, { cx: 250, cy: 250 }, { cx: 500, cy: 180 }, { cx: 750, cy: 80 }, { cx: 1000, cy: 20 }
                    ].map((point, i) => (
                        <circle key={`b-${i}`} cx={point.cx} cy={point.cy} r="6" fill="#fff" stroke="#16A44A" strokeWidth="3" className="g-chart-dot" style={{ animationDelay: `${i * 0.4}s` }} />
                    ))}
                </svg>
            </div>
        </div>
    );
};

// ── Component: CareerRoles ───────────────────────────────────────────────────
const RoleCard = ({ role, idx }: { role: typeof CAREER_ROLES[0], idx: number }) => (
    <div className="relative group w-full max-w-[632px] h-[100px] sm:h-[120px] cursor-pointer">
        <svg width="100%" height="100%" viewBox="0 0 632 140" preserveAspectRatio="none" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
            <path
                d={idx % 2 === 0
                    ? "M556 0H24C10.7452 0 0 10.7452 0 24V116C0 129.255 10.7452 140 24 140H556C568 140 576 134 580 124L628 16C632 6 624 0 612 0H556Z"
                    : "M76 0H608C621.255 0 632 10.7452 632 24V116C632 129.255 621.255 140 608 140H76C64 140 56 134 52 124L4 16C0 6 8 0 20 0H76Z"
                }
                className="fill-[#0D0D0D] transition-all duration-300 group-hover:[filter:drop-shadow(0_0_4px_rgba(255,255,255,0.1))] hover-glow-path"
                stroke="none"
                strokeWidth="0"
            />
        </svg>

        <div className={`relative flex flex-col justify-center h-full z-10 ${idx % 2 === 0 ? 'pl-5 sm:pl-8 lg:pl-12 pr-6 sm:pr-8 lg:pr-20' : 'pl-[40px] sm:pl-[64px] lg:pl-[76px] pr-5 sm:pr-8 lg:pr-12'}`}>
            <div className="flex items-center justify-between gap-2 sm:gap-4 mb-1">
                <h4 className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold tracking-tight leading-snug whitespace-nowrap">{role.title}</h4>
                <div
                    className="px-[10px] sm:px-[14px] h-[26px] sm:h-[30px] flex items-center justify-center rounded-[4px] text-center flex-shrink-0"
                    style={{
                        background: "linear-gradient(#0D0D0D,#0D0D0D) padding-box, linear-gradient(90deg, #16A44A, #1CA425, #22C55E) border-box",
                        border: "1px solid transparent"
                    }}
                >
                    <span className="text-[#16A44A] text-[12px] sm:text-[14px] font-bold tracking-[0.5px] whitespace-nowrap">{role.salary}</span>
                </div>
            </div>
            <p className="text-[#94A3B8] text-[12px] sm:text-[13px] font-medium leading-snug w-[95%]">{role.description}</p>
        </div>
    </div>
);

const CareerRoles = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-16">High-Impact Roles After This Program</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {CAREER_ROLES.map((role, idx) => (
                    <RoleCard key={idx} role={role} idx={idx} />
                ))}
            </div>

            <SkillGapChart />
        </div>
    </section>
);

// ── Component: Pricing ───────────────────────────────────────────────────
const Pricing = ({ onEnroll }: { onEnroll: (amount: number, batchId?: string) => Promise<void> }) => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-12">Enroll in Product Analytics Learning Track</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                {PRICING_PLANS.map((p, i) => (
                    <div
                        key={i}
                        className={`relative p-8 sm:p-10 rounded-[28px] border flex flex-col transition-all duration-300 ${p.highlighted ? "border-white/10 shadow-[0_0_80px_rgba(22,164,74,0.25)]" : "border-white/5 bg-[#111]"} text-left`}
                        style={p.highlighted ? {
                            background: "radial-gradient(circle at 100% 0%, rgba(22, 164, 74, 0.35) 0%, rgba(22, 164, 74, 0.08) 40%, rgba(5, 5, 5, 1) 75%), #050505"
                        } : {}}
                    >
                        {p.badge && (
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#16A44A] text-white text-[10px] font-bold tracking-[1.5px] uppercase px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap z-10">
                                {p.badge}
                            </div>
                        )}
                        <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                        <p className="text-[#A0A8B8] text-sm mb-6 leading-relaxed">{p.subtitle}</p>
                        <div className="text-4xl font-bold text-white mb-2 tracking-tight">{p.price}</div>
                        <div className={`text-xs font-bold mb-10 tracking-widest uppercase ${p.highlighted ? "text-[#16A44A]" : "text-[#7B7B7B]"}`}>{p.track}</div>
                        <ul className="space-y-4 mb-12 flex-1">
                            {p.features.map((f, j) => (
                                <li key={j} className="text-[#CFCFCF] text-sm flex items-start gap-4 font-medium">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${p.highlighted ? "bg-[#16A44A]" : "border border-white/20"}`}>
                                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="1.5 5 4.5 8 10.5 2" />
                                        </svg>
                                    </div>
                                    <span className="flex-1">{f}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => {
                                const amount = p.highlighted ? 49999 : 34999;
                                onEnroll(amount);
                            }}
                            className={`w-full py-4 rounded-[12px] font-bold transition-all ${p.highlighted ? "bg-[#16A44A] text-white hover:brightness-110 shadow-xl shadow-[#16A44A]/25 border-2 border-transparent" : "border-2 border-[#16A44A] text-[#16A44A] hover:bg-[#16A44A]/5"}`}
                        >
                            {p.cta}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ── Component: FAQ ───────────────────────────────────────────────────
const FAQ = () => {
    const [open, setOpen] = useState<number | null>(0);
    const [limit, setLimit] = useState(5);
    const displayedFAQs = FAQS.slice(0, limit);
    return (
        <section className="py-16 sm:py-24 bg-[#0A0A0A] border-t border-white/5">
            <div className="max-w-[850px] mx-auto px-4">
                <GradientLabel text="SUPPORT" />
                <h2 className="text-3xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {displayedFAQs.map((f, i) => (
                        <div key={i} className="border border-white/5 bg-[#0D0D0D] rounded-2xl overflow-hidden">
                            <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 text-white font-bold flex justify-between items-center hover:bg-white/5 transition-colors">
                                <span className="pr-8">{f.q}</span>
                                <ChevronDown className={`flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`transition-all duration-300 overflow-hidden ${open === i ? 'max-h-[300px]' : 'max-h-0'}`}>
                                <p className="p-6 pt-0 text-[#A0A8B8] text-base leading-relaxed">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4 sm:gap-6">
                    {limit > 5 && (
                        <button
                            onClick={() => setLimit(5)}
                            className="px-8 py-3 rounded-full border border-[#16A44A]/30 text-[#16A44A] text-[14px] font-bold hover:bg-[#16A44A]/10 transition-all duration-300 tracking-wide flex items-center justify-center gap-2 group"
                        >
                            See Less Questions
                            <ChevronDown className="w-4 h-4 transition-transform duration-300 rotate-180" />
                        </button>
                    )}
                    {limit < FAQS.length && (
                        <button
                            onClick={() => setLimit(prev => Math.min(prev + 5, FAQS.length))}
                            className="px-8 py-3 rounded-full border border-[#16A44A]/30 text-[#16A44A] text-[14px] font-bold hover:bg-[#16A44A]/10 transition-all duration-300 tracking-wide flex items-center justify-center gap-2 group"
                        >
                            See More Questions
                            <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

// ── Component: CTABanner ───────────────────────────────────────────────────
const CTABanner = ({ onDownloadBrochure }: { onDownloadBrochure: () => void }) => (
    <section className="w-full max-w-[1440px] mx-auto mt-10 sm:mt-16 lg:mt-24 py-12 sm:py-20 px-4 md:px-8 lg:px-[70px]" style={{ overflow: "visible" }}>
        <div className="relative mx-auto flex flex-col lg:block w-full max-w-[1296px] h-auto lg:h-[318px]" style={{ overflow: "visible" }}>
            <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black border border-white/5">
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 1% 1%, #16A44A -10%, #052C14 25%, #000000 35%)" }} />
                <div className="absolute top-[-370px] left-[-290px] w-[450px] h-[450px] border-[6px] border-white/40 rounded-full z-10 hidden sm:block" />
            </div>

            <div className="relative lg:absolute top-0 left-0 bottom-0 z-30 flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 lg:py-0 lg:px-[72px] gap-3 sm:gap-4 max-w-[750px]">
                <h2 className="text-[#FFFFFF] font-semibold text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.3] sm:leading-[48px] tracking-tight max-w-[697px]">
                    Master User Behavior. Scale Your Product Impact.
                </h2>
                <p className="text-[#C2C2C2] font-medium text-[14px] sm:text-[16px] leading-normal max-w-[650px]">
                    Join professionals who are building data-driven product careers with AcceleratorX.
                </p>
                <div className="mt-4 sm:mt-6 flex gap-4">
                    <button
                        onClick={onDownloadBrochure}
                        className="w-[140px] sm:w-[174px] h-[42px] sm:h-[50px] text-white font-semibold bg-[#16A44A]/5 border border-[#16A44A] rounded-[9px] text-[14px] sm:text-[16px] cursor-pointer backdrop-blur-[100px] hover:bg-[#16A44A]/10 transition-all duration-300"
                    >
                        Apply Now
                    </button>
                    <button
                        onClick={onDownloadBrochure}
                        className="w-full sm:w-auto border border-white/10 text-white px-8 h-[42px] sm:h-[50px] rounded-[9px] font-semibold text-[14px] sm:text-[16px] hover:bg-white/5 transition-all"
                    >
                        Download Brochure
                    </button>
                </div>
            </div>

            <div className="hidden lg:block absolute right-0 bottom-0 top-[-80px] w-[600px] h-full z-20 pointer-events-none" style={{ overflow: "visible" }}>
                <img
                    src={ASSETS.ctaperson}
                    alt="Student Success"
                    className="absolute right-[-60px] bottom-[-130px] h-[486px] w-auto object-contain z-30 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
            </div>
        </div>
    </section>
);

const Certificate = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16 sm:mb-20">
                <GradientLabel text="CERTIFICATION" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">The Certificate Recognized By The Industry</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                <div className="flex-1 flex justify-center lg:justify-end w-full">
                    <div className="relative w-full max-w-[517px]">
                        <img
                            src="/assets/certificate/AI PRODUCTMANAGMENT.png"
                            alt="AI Product Analytics Certificate"
                            className="w-full h-auto object-contain relative z-20 mix-blend-lighten"
                            width={517}
                            height={731}
                        />
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h3 className="text-white font-bold text-[24px] sm:text-[32px] leading-tight mb-4">
                        Get Your Nano-Degree in AI Product Analytics
                    </h3>
                    <p className="text-[#A0A8B8] text-[14px] sm:text-[16px] leading-relaxed mb-8 max-w-[500px]">
                        Show the world your expertise in AI Product Analytics, stand out in a competitive job market and get hired easily.
                    </p>

                    <ul className="flex flex-col gap-4 sm:gap-5 text-left w-full max-w-[500px]">
                        {[
                            "Industry-recognized Nano Degree in AI Product Analytics.",
                            "Verified badge + unique verification ID",
                            "Trusted by 2500+ companies and agencies",
                            "AI Product Analytics Projects portfolio",
                            "Lifetime exclusive alumni community access"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 sm:gap-4">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#16A44A] flex-shrink-0" />
                                <span className="text-[#CFCFCF] text-[14px] sm:text-[15px] font-medium leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);


export default function ProductAnalyticsPageV2() {
    const { handleBuyCourse } = useCoursePurchase(COURSE_IDS.PRODUCT_ANALYTICS, "AI-Powered Product Analytics Program");
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white font-['Inter',sans-serif] overflow-x-hidden">
            <GlobalStyles />
            <Hero onDownloadBrochure={() => setIsModalOpen(true)} />
            <AlumniLogos />
            <Roadmap />
            <Curriculum />
            <Mentors />
            <Tools />
            <Checklist />
            <Certificate />
            <CareerRoles />
            <Pricing onEnroll={handleBuyCourse} />
            <FAQ />
            <CTABanner onDownloadBrochure={() => setIsModalOpen(true)} />

            <EnrollmentModalADS
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                program={{
                    title: "Product Analytics",
                    label: "AI PA", // Note: The label in EnrollmentModalADS might need to be AI DA or similar if AI PA isn't defined there
                    description: "Master product metrics, user behaviour, and data-driven strategy",
                    color: "#16A44A",
                    link: "",
                    hoverBorder: ""
                }}
            />
        </div>
    );
}
