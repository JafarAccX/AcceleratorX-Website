import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import * as Constants from "./ProductManagementv2Constants";
import EnrollmentModalADS from "../../allprograms-ads/EnrollmentModalADS";

const {
    ASSETS,
    ALUMNI_LOGOS,
    switchPath,
    freshersPath,
    ibmModules,
    regularModules,
    MENTORS,
    TOOLS_LIST,
    PM_PHASES,
    CAREER_ROLES,
    PRICING_PLANS,
    FAQS,
} = Constants;

// ── Global Styles (Matching GenAI & AIDM) ───────────────────────────
const GlobalStyles = () => (
    <style>{`
        @keyframes borderFlow {
            0% { stroke-dashoffset: 1000; }
            100% { stroke-dashoffset: 0; }
        }
        @keyframes infinite-scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll-left {
            animation: infinite-scroll-left 40s linear infinite;
        }
        .hover-glow-path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            transition: stroke 0.3s ease, stroke-width 0.3s ease, filter 0.3s ease;
        }
        .group:hover .hover-glow-path {
            animation: borderFlow 15s linear infinite;
        }
    `}</style>
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
            style={{ backgroundImage: "linear-gradient(90deg, #45E4C9 0%, #2DD4BF 33%, #22D3EE 66%, #06B6D4 100%)" }}
        >
            {highlight ? (
                <>
                    <span>{text.split(highlight)[0].trim()}</span>
                    <span className="text-[#45E4C9]">{highlight}</span>
                    <span>{text.split(highlight)[1].trim()}</span>
                </>
            ) : (
                text
            )}
        </div>
    </div>
);


// ── Component: Hero ───────────────────────────────────────────────────────
const Hero = ({ onDownloadBrochure }: { onDownloadBrochure: () => void }) => {
    return (
        <section className="relative min-h-[600px] lg:min-h-[850px] bg-[#0A0A0A] overflow-hidden flex items-center justify-center pt-[80px]">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
                backgroundSize: "32px 32px",
            }} />

            <div className="w-full max-w-[1295px] mx-auto relative flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-6 lg:px-0 z-10 gap-10 lg:gap-0">
                <div className="w-full lg:w-[612px] flex flex-col gap-6 sm:gap-8 lg:mt-[60px] text-center lg:text-left">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[1.1] tracking-tight max-w-[612px] text-white mx-auto lg:mx-0">
                            4 Month Nano-Degree in <br className="hidden lg:block" />
                            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#45E4C9] to-[#2DD4BF] bg-clip-text text-transparent">
                                AI Product Management
                            </span>
                        </h1>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[26px] text-[#C2C2C2] font-normal max-w-[569px] opacity-80 mx-auto lg:mx-0">
                            Learn AI Product Management, automation systems, and AI-driven product thinking through real-world projects with no coding background.
                        </p>
                    </div>

                    <div className="w-full max-w-[500px] h-auto rounded-[24px] backdrop-blur-[20px] flex flex-col sm:flex-row items-center p-4 sm:p-6 gap-4 sm:gap-6 self-center lg:self-start relative overflow-hidden border-t border-t-white/10 border-b border-b-white/5 border-x-0">
                        <div className="absolute inset-0 z-0 opacity-40" style={{ background: "linear-gradient(90deg, rgba(10, 10, 10, 0.4) 0%, rgba(20, 20, 20, 0.6) 100%)" }} />
                        <div className="flex-1 flex items-center gap-4 z-10">
                            <div className="w-12 h-12 rounded-xl bg-transparent flex items-center justify-center flex-shrink-0">
                                <img src={ASSETS.bagIcon} alt="Jobs" className="w-6 h-6 object-contain" />
                            </div>
                            <div className="text-left">
                                <div className="text-[20px] sm:text-[22px] font-bold leading-tight">2000+</div>
                                <div className="text-[13px] text-[#EAEAEA]">Learners</div>
                            </div>
                        </div>
                        <div className="w-full sm:w-[1px] h-[1px] sm:h-10 bg-white/[0.1] z-10" />
                        <div className="flex-1 flex items-center gap-4 z-10">
                            <div className="w-12 h-12 rounded-xl bg-transparent flex items-center justify-center flex-shrink-0">
                                <img src={ASSETS.rupeeIcon} alt="CTC" className="w-6 h-6 object-contain" />
                            </div>
                            <div className="text-left">
                                <div className="text-[20px] sm:text-[22px] font-bold leading-tight">4.8/5</div>
                                <div className="text-[13px] text-[#EAEAEA]">Average Rating</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[679px] flex flex-col gap-5 items-center lg:items-start overflow-hidden">
                        <div className="text-[10px] sm:text-[11px] font-bold text-white tracking-[0.1em] uppercase opacity-60">
                            TOP COMPANIES HIRING RIGHT NOW (INDIA & ABROAD)
                        </div>
                        <div className="relative w-full overflow-hidden" style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        }}>
                            <div className="flex w-max gap-8 sm:gap-12 animate-infinite-scroll-left py-2">
                                {[1, 2, 3, 4].map((group) => (
                                    <div key={group} className="flex items-center gap-8 sm:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                        {ALUMNI_LOGOS.map((logo) => (
                                            <img key={logo.name} src={logo.url} alt={logo.name} className="h-[24px] sm:h-[32px] object-contain" />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
                        <a href="#programs" className="group flex items-center cursor-pointer">
                            <button className="h-[48px] sm:h-[54px] px-5 sm:px-8 bg-[#45E4C9] border-2 border-transparent rounded-full font-bold text-black text-[14px] sm:text-[16px] transition-all duration-300 group-hover:bg-transparent group-hover:border-[#45E4C9] group-hover:text-white">
                                Explore Our Programs
                            </button>
                            <div className="-ml-[1px] w-[48px] sm:w-[54px] h-[48px] sm:h-[54px] rounded-full bg-[#45E4C9] border-2 border-transparent flex items-center justify-center transition-all duration-300 group-hover:bg-transparent group-hover:border-[#45E4C9]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:stroke-white">
                                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                                </svg>
                            </div>
                        </a>
                        <div 
                            onClick={onDownloadBrochure}
                            className="flex items-center text-[14px] sm:text-[16px] font-bold text-white group whitespace-nowrap cursor-pointer"
                        >
                            <span className="border-b-2 border-white/40 group-hover:border-white transition-all">Download Brochure</span>
                            <span className="ml-2 text-lg">→</span>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[649px] h-auto relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[350px] sm:max-w-[500px] lg:max-w-[649px] lg:w-[649px] aspect-[649/683] lg:h-[683px] bg-gradient-to-b from-[#000000] to-[#45E4C9] rounded-[32px] sm:rounded-[48px] border-t border-t-black border-b border-b-white/5 border-x-0 overflow-hidden mt-6 lg:mt-0">
                        <img src={ASSETS.heroImage} alt="Accelerator Student" className="absolute bottom-[-28px] left-[55%] -translate-x-1/2 h-full w-auto object-contain scale-[1.05] z-10" />
                        <div className="absolute top-[4%] sm:top-[6%] right-[2%] sm:right-[4%] z-30">
                            <img src={ASSETS.ibmLogo} alt="IBM" className="h-[40px] sm:h-[54px] lg:h-[74px] brightness-200" />
                        </div>
                        <div className="absolute top-[4%] sm:top-[6%] left-[4%] sm:left-[6%] z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                            <img src={ASSETS.studentsGrp} alt="Happy Students" className="w-[120px] sm:w-[150px] lg:w-[190px] h-auto object-contain" />
                        </div>

                        {/* Floating Pills */}
                        <div className="absolute top-[38%] left-[-2%] sm:left-[4%] flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-black/5 z-30 hover:scale-105 transition-transform duration-300">
                            <img src="/assets/liveclasses.png" alt="Live Classes" className="w-3.5 sm:w-4 h-3.5 sm:h-4 object-contain" />
                            <span className="text-[11px] sm:text-[14px] font-semibold text-[#1CA425] whitespace-nowrap">Live Classes</span>
                        </div>
                        <div className="absolute top-[52%] right-[-2%] sm:right-[0%] flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-black/5 z-30 hover:scale-105 transition-transform duration-300">
                            <img src="/assets/mentorconnect.png" alt="Mentor Connect" className="w-3.5 sm:w-4 h-3.5 sm:h-4 object-contain" />
                            <span className="text-[11px] sm:text-[14px] font-semibold text-[#F96736] whitespace-nowrap">Mentor Connect</span>
                        </div>
                        <div className="absolute bottom-[12%] left-[-2%] sm:left-[4%] flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-black/5 z-30 hover:scale-105 transition-transform duration-300">
                            <img src="/assets/careersupport.png" alt="Career Support" className="w-3.5 sm:w-4 h-3.5 sm:h-4 object-contain" />
                            <span className="text-[11px] sm:text-[14px] font-semibold text-[#4C5BFA] whitespace-nowrap">Career Support</span>
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
        <GradientLabel text="SOCIAL PROOF" highlight="PROOF" />
        <p className="text-center text-[#F5F7FF] text-xl sm:text-2xl md:text-[32px] font-medium mb-3 px-4">Our Alumni Are Working across 1700+ Top MNCs</p>
        <p className="text-center text-[#94A3B8] text-sm sm:text-base md:text-[16px] font-medium mb-10 sm:mb-12 lg:mb-16 max-w-[1047px] mx-auto leading-relaxed px-4">
            Our learners are building AI-powered dashboards, automated systems, and data-driven decision models across top companies in India.
        </p>
        <div className="relative w-full overflow-hidden" style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}>
            <div className="flex w-max gap-6 sm:gap-8 animate-infinite-scroll-left hover:[animation-play-state:paused]">
                {[...ALUMNI_LOGOS, ...ALUMNI_LOGOS, ...ALUMNI_LOGOS, ...ALUMNI_LOGOS].map((brand, idx) => (
                    <div key={`${brand.name}-${idx}`} className="flex items-center justify-center brightness-110 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer px-4 sm:px-8">
                        <img src={brand.url} alt={brand.name} style={{ height: `${Math.round(brand.height * 0.75)}px` }} className="object-contain" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ── Component: Roadmap ───────────────────────────────────────────────────────
const Roadmap = () => {
    const [roadmapPath, setRoadmapPath] = useState<"switch" | "freshers">("switch");
    const currentPath = roadmapPath === "freshers" ? freshersPath : switchPath;

    return (
        <section className="min-h-[500px] lg:min-h-[815px] py-12 sm:py-16 lg:py-24 px-4 md:px-8 lg:px-[70px] bg-[#0A0A0A]">
            <div className="max-w-[1440px] mx-auto text-center">
                <GradientLabel text="PROGRAMS ROADMAP" highlight="ROADMAP" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 px-2">AI Product Management Roadmap for Working Professionals & Freshers</h2>
                <p className="text-[#94A3B8] text-[14px] sm:text-[16px] max-w-[1047px] mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-2">
                    2,000+ learners across India are transitioning into AI Product roles by building real products and applying AI in product decision-making.
                </p>

                <div className="inline-flex items-center p-[6px] rounded-full mb-10 sm:mb-16 bg-[#0D0D0D] border border-white/10">
                    <button onClick={() => setRoadmapPath("switch")} className={`px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${roadmapPath === "switch" ? "bg-[#45E4C9] text-black" : "text-[#9CA3AF] hover:text-white"}`}>Career Switch</button>
                    <button onClick={() => setRoadmapPath("freshers")} className={`px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${roadmapPath === "freshers" ? "bg-[#45E4C9] text-black" : "text-[#9CA3AF] hover:text-white"}`}>Freshers</button>
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="text-white font-medium text-[16px] sm:text-[18px] mb-4 tracking-tight">Transition into AI Product Roles with a Structured Learning Path</h2>
                    <div className="inline-flex items-center justify-center px-3 py-[4px] rounded-[30px] border border-[#45E4C9] bg-white/5 text-[#45E4C9] text-[11px] sm:text-[12px] font-bold leading-[20px] uppercase mb-[40px] sm:mb-[90px]">
                        {roadmapPath === "freshers" ? "FRESHERS PATH" : "CAREER SWITCHERS PATH"}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-4 sm:gap-y-6 w-full max-w-[1288px] mb-4 sm:mb-6 mx-auto">
                    {currentPath.slice(0, 4).map((item, idx) => (
                        <div key={idx} className={`relative group w-full max-w-[664px] h-[100px] sm:h-[111px] mx-auto cursor-pointer ${idx % 2 !== 0 ? 'md:ml-[-1px]' : ''}`}>
                            <svg width="100%" height="100%" viewBox="0 0 664 111" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
                                <path
                                    d={idx % 2 === 0
                                        ? "M588 0H24C10.7452 0 0 10.7452 0 24V87C0 100.255 10.7452 111 24 111H588C600 111 608 105 612 95L660 16C664 6 656 0 644 0H588Z"
                                        : "M76 0H640C653.255 0 664 10.7452 664 24V87C664 100.255 653.255 111 640 111H20C8 111 0 105 4 95L52 16C56 6 64 0 76 0Z"
                                    }
                                    className="fill-[#0A0A0A] stroke-white/10 transition-all duration-300 group-hover:stroke-white/30"
                                    strokeWidth="1.5"
                                />
                            </svg>
                            <div className={`relative flex flex-col gap-1 h-full justify-center ${idx % 2 === 0 ? 'pl-6 sm:pl-10 pr-12 sm:pr-20' : 'pl-[50px] sm:pl-[88px] pr-6 sm:pr-10'}`}>
                                <div className="flex items-center gap-3 sm:gap-5">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                                        <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="text-[13px] sm:text-[14px] font-bold text-[#ECECEC] leading-[24px] sm:leading-[28px]">{item.title}</h3>
                                </div>
                                <div className="pl-8 sm:pl-11">
                                    <p className="text-[12px] sm:text-[14px] text-[#CFCFCF] font-normal leading-[20px] sm:leading-[24px] text-left">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full flex justify-center mt-2 sm:mt-4">
                    {currentPath[4] && (
                        <div className="relative group w-full max-w-[664px] h-[100px] sm:h-[111px] cursor-pointer">
                            <svg width="100%" height="100%" viewBox="0 0 664 111" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
                                <path
                                    d="M588 0H24C10.7452 0 0 10.7452 0 24V87C0 100.255 10.7452 111 24 111H588C600 111 608 105 612 95L660 16C664 6 656 0 644 0H588Z"
                                    className="fill-[#0A0A0A] stroke-white/10 transition-all duration-300 group-hover:stroke-white/30"
                                    strokeWidth="1.5"
                                />
                            </svg>
                            <div className="relative pl-6 sm:pl-10 pr-12 sm:pr-20 flex flex-col gap-1 h-full justify-center">
                                <div className="flex items-center gap-3 sm:gap-5">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                                        <img src={currentPath[4].icon} alt={currentPath[4].title} className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="text-[13px] sm:text-[14px] font-bold text-[#ECECEC] leading-[24px] sm:leading-[28px]">{currentPath[4].title}</h3>
                                </div>
                                <div className="pl-8 sm:pl-11">
                                    <p className="text-[12px] sm:text-[14px] text-[#CFCFCF] font-normal leading-[20px] sm:leading-[24px] text-left">{currentPath[4].desc}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

// ── Component: ProgramDesign ───────────────────────────────────────────────────
const programBenefits = [
    {
        icon: <img src="/assets/COMPUTER.png" alt="Mentorship" className="w-8 h-8 object-contain" />,
        title: "1:1 Mentorship from Product Leaders",
        desc: <>Learn directly from professionals working in <span className="text-white font-bold">product, AI, and growth roles.</span></>
    },
    {
        icon: <img src="/assets/COMPUTER.png" alt="Live Project-Based Learning" className="w-8 h-8 object-contain" />,
        title: "Live Product Case-Based Learning",
        desc: <>Build <span className="text-white font-bold">product workflows, AI use cases, and real product decisions in real-time.</span></>
    },
    {
        icon: <img src="/assets/COMPUTER.png" alt="Industry-Relevant AI PM Curriculum" className="w-8 h-8 object-contain" />,
        title: "Industry-Relevant AI Product Curriculum",
        desc: <>Stay updated with <span className="text-white font-bold">AI in product, automation trends, and real-world applications.</span></>
    },
    {
        icon: <img src="/assets/COMPUTER.png" alt="Career-Focused Learning Path" className="w-8 h-8 object-contain" />,
        title: "Career-Focused Learning Path",
        desc: <>Move from learning to <span className="text-white font-bold">job-ready PM skills and real product execution.</span></>
    }
];

const ProgramDesign = () => {
    const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);
    const [isReturning, setIsReturning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBenefitIndex((prev) => {
                const next = (prev + 1) % 4;
                if (next === 0) setIsReturning(true);
                else setIsReturning(false);
                return next;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="PROGRAM BENEFITS" highlight="BENEFITS" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Designed for Real-World AI Execution</h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[800px] mx-auto mb-12 sm:mb-20 leading-relaxed font-medium">
                    You learn by building AI-powered product strategies, solving user problems, and executing real-world business applications.
                </p>

                <div className="flex flex-col lg:flex-row gap-6 sm:gap-[40px] items-center justify-center max-w-[1188px] mx-auto">
                    <div className="relative flex-shrink-0 w-full max-w-[605px] aspect-[605/351] rounded-[5px] overflow-hidden border border-white/[0.08] bg-[#0D0D0D]">
                        <div className="w-full h-full relative">
                            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-[10px] sm:text-[11px] font-bold text-white/90 tracking-wide uppercase">Live Class</span>
                            </div>
                            <img src="/assets/programdesign.png" alt="Program Design" className="w-full h-full object-contain" />
                            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 w-[140px] sm:w-[180px] p-3 sm:p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl text-left">
                                <p className="text-[11px] sm:text-[13px] font-bold text-white leading-tight">Mentored by<br />Top 1% Industry Experts</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6 flex-shrink-0 w-full max-w-[543px]">
                        <div className="relative w-full aspect-[543/334] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 bg-[#0A0A0A]/60 backdrop-blur-xl shadow-2xl">
                             <div className={`flex w-full h-full transition-transform ${isReturning ? "duration-1000 ease-in-out" : "duration-[450ms] ease-out"}`} style={{ transform: `translateX(-${activeBenefitIndex * 100}%)` }}>
                                {programBenefits.map((benefit, idx) => (
                                    <div key={idx} className="min-w-full h-full p-8 sm:p-10 text-left flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="flex-shrink-0">{benefit.icon}</div>
                                            <h3 className="text-[15px] sm:text-[18px] font-bold text-white tracking-tight">{benefit.title}</h3>
                                        </div>
                                        <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] leading-[1.6] font-medium">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeBenefitIndex ? "bg-[#45E4C9] w-6" : "bg-white/20"}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ── Component: Curriculum ─────────────────────────────────────────────────────
const Curriculum = () => {
    const [currMode, setCurrMode] = useState<"ibm" | "regular">("ibm");
    const [openModule, setOpenModule] = useState<number | null>(null);
    const currModules = currMode === "ibm" ? ibmModules : regularModules;

    return (
        <section id="programs" className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="CURRICULUM" highlight="CURRICULUM" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-6">Program Curriculum</h2>
                <div className="inline-flex bg-[#111] p-1.5 rounded-full border border-white/[0.08] mb-12">
                    <button onClick={() => setCurrMode("ibm")} className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${currMode === "ibm" ? "bg-[#45E4C9] text-black" : "text-white"}`}>IBM + AcceX</button>
                    <button onClick={() => setCurrMode("regular")} className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${currMode === "regular" ? "bg-[#45E4C9] text-black" : "text-white"}`}>Regular</button>
                </div>

                <div className="flex flex-col gap-4 max-w-[1000px] mx-auto">
                    {currModules.map((m, i) => (
                        <div key={i} onClick={() => setOpenModule(openModule === i ? null : i)} className="p-6 bg-[#0D0D0D] border border-white/5 rounded-xl text-left cursor-pointer transition-all hover:bg-[#111]">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <span className="text-[#45E4C9] font-bold">0{i + 1}</span>
                                    <h3 className="text-white font-bold">{m.title}</h3>
                                </div>
                                <ChevronDown className={`transition-transform duration-300 ${openModule === i ? 'rotate-180' : ''}`} />
                            </div>
                            {openModule === i && <p className="mt-4 text-[#A0A8B8] pl-10 text-sm leading-relaxed">{m.desc}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ── Component: Mentors ────────────────────────────────────────────────────────
const MentorCard = ({ mentor }: { mentor: any }) => (
    <div className="relative w-[210px] sm:w-[260px] h-[220px] sm:h-[300px] flex-shrink-0">
        {/* Inner Card with Mentor Image */}
        <div className="absolute inset-x-0 top-0 bottom-10 rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-[#1E3A3A] to-[#0D0D0D] overflow-hidden">
            <img src={mentor.image} alt={mentor.name} className="absolute inset-x-0 bottom-0 mx-auto h-[95%] w-auto object-contain" />
        </div>
        
        {/* Floating Logo Top-Right */}
        <div className="absolute top-[-10px] -right-3 z-40 drop-shadow-[0_4px_10px_rgba(45,212,191,0.3)]">
            <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center bg-white border border-white/20">
                <img src={mentor.companyLogo} alt="" className="w-full h-full object-contain" />
            </div>
        </div>

        {/* Floating Info Box at Bottom (Data Science Style) */}
        <div className="absolute bottom-[1px] left-1/2 -translate-x-1/2 w-[85%] sm:w-[95%] h-[65px] sm:h-[80px] rounded-[24px] flex flex-col items-center justify-center text-center z-50 p-3 sm:p-4 border border-white/10 shadow-[0_0_20px_rgba(69,228,201,0.25)] bg-[#0A0A0A]/95 backdrop-blur-md">
            <div className="text-white text-[12px] sm:text-[14px] font-bold tracking-tight">{mentor.name}</div>
            <div className="text-white text-[10px] sm:text-[11px] opacity-70 mt-0.5 leading-tight">{mentor.designation}</div>
        </div>
    </div>
);

const Mentors = () => (
    <section className="py-16 sm:py-24 bg-[#050505] flex flex-col items-center relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute left-[-150px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#45E4C9]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#45E4C9]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-full relative flex flex-col items-center z-10 px-4">
            <GradientLabel text="MENTORS" highlight="MENTORS" />
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-16 text-center tracking-tight px-4">Learn from Industry Product & AI Experts</h2>
            
            <div className="relative w-full overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                <div className="flex flex-nowrap w-fit gap-12 sm:gap-24 animate-infinite-scroll-left py-8 px-12">
                    {[...MENTORS, ...MENTORS, ...MENTORS, ...MENTORS].map((m, i) => <MentorCard key={i} mentor={m} />)}
                </div>
            </div>
        </div>
    </section>
);

// ── Component: Tools ──────────────────────────────────────────────────────────
const Tools = () => (
    <section className="py-20 sm:py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#45E4C9]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1267px] mx-auto text-center px-4 relative z-10">
            <GradientLabel text="PROGRAMS TOOLS" highlight="PROGRAMS TOOLS" />
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">Tools</h2>
            <p className="text-[#94A3B8] text-[14px] sm:text-[16px] max-w-[950px] mx-auto mb-16 leading-relaxed">
                2,000+ learners across India — from Bengaluru to Bhilai — are already building real AI skills
                and getting hired at top tech companies. Master the industry-standard tools and AI frameworks used by top product teams to design, build, and scale intelligent products.
            </p>
            
            <div className="relative w-full overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                <div className="flex flex-nowrap w-fit gap-20 sm:gap-32 animate-infinite-scroll-left items-center py-8">
                    {[...TOOLS_LIST, ...TOOLS_LIST, ...TOOLS_LIST, ...TOOLS_LIST, ...TOOLS_LIST, ...TOOLS_LIST, ...TOOLS_LIST, ...TOOLS_LIST].map((t, i) => (
                        <div key={i} className="flex flex-col items-center flex-shrink-0">
                            <img src={t.logo} alt={t.name} className="h-10 sm:h-14 w-auto object-contain opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ── Component: Checklist ──────────────────────────────────────────────────────
const Checklist = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-[1267px] mx-auto text-center px-4">
            <GradientLabel text="CURRICULUM" highlight="CURRICULUM" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-16">AI Product Management Skill Checklist</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {PM_PHASES.map((phase, i) => (
                    <div key={i} className="flex flex-col items-center group">
                        <div className="w-20 h-20 rounded-full bg-[#0D0D0D] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#45E4C9] transition-all duration-300">
                            <img src={phase.icon} alt={phase.title} className="w-10 h-10 object-contain" />
                        </div>
                        <h4 className="text-white text-base font-bold mb-1">{phase.title}</h4>
                        <p className="text-[#A0A8B8] text-[11px] mb-2 px-2 leading-tight">{phase.description}</p>
                        <span className="text-[#45E4C9] text-[10px] font-bold tracking-widest uppercase">{phase.phase}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ── Component: SkillGapChart (Added for Animation) ────────────────────
const SkillGapChart = () => {
    return (
        <div className="relative bg-[#0D0D0D] rounded-[32px] border border-[#1f1f1f] shadow-[0_0_100px_rgba(69,228,201,0.1)] overflow-hidden w-full max-w-[1100px] mx-auto p-8 lg:p-16 mt-20">
            <style>
                {`
                    @keyframes draw-chart-line {
                        0% { stroke-dashoffset: 1500; }
                        40% { stroke-dashoffset: 0; }
                        100% { stroke-dashoffset: 0; }
                    }
                    @keyframes dot-appear {
                        0%, 15% { transform: scale(0); opacity: 0; }
                        25%, 100% { transform: scale(1); opacity: 1; }
                    }
                    @keyframes glow-pulse {
                        0%, 100% { opacity: 0.3; }
                        20% { opacity: 0.8; }
                    }
                    .draw-path-teal {
                        stroke-dasharray: 1500;
                        stroke-dashoffset: 1500;
                        animation: draw-chart-line 6s ease-in-out infinite;
                    }
                    .chart-dot {
                        transform-origin: center;
                        animation: dot-appear 6s ease-out infinite;
                    }
                    .chart-glow {
                        animation: glow-pulse 6s ease-in-out infinite;
                    }
                `}
            </style>

            <div className="relative w-full aspect-[2/1] min-h-[300px]">
                {/* Header Legend */}
                <div className="absolute top-0 left-0 lg:left-10 flex gap-8 items-center text-[10px] lg:text-[12px] font-bold tracking-widest uppercase">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-[2px] border-b-[2px] border-dashed border-[#555]"></div>
                        <span className="text-[#7A7A7A]">Traditional PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-[3px] bg-[#45E4C9]"></div>
                        <span className="text-white">AI-Powered PM</span>
                    </div>
                </div>

                {/* Chart Grid Lines */}
                <div className="absolute top-[60px] bottom-8 left-[40px] lg:left-[50px] right-0 flex flex-col justify-between">
                    {["30L", "24L", "18L", "12L", "6L", "0L"].map((val) => (
                        <div key={val} className="relative w-full border-t border-white/5 h-0">
                            <span className="absolute -top-3 -left-[35px] lg:-left-[45px] w-8 text-right text-[10px] lg:text-[11px] font-medium text-[#7A7A7A]">
                                {val}
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
                    {/* Teal Line Ambient Glow */}
                    <path
                        d="M 0,350 C 125,350 125,250 250,250 C 375,250 375,180 500,180 C 625,180 625,80 750,80 C 875,80 875,20 1000,20"
                        fill="none" stroke="#45E4C9" strokeWidth="12" className="chart-glow blur-xl" strokeLinecap="round"
                    />

                    {/* Average Grey Dashed Path */}
                    <path
                        d="M 0,433 L 250,416 L 500,400 L 750,383 L 1000,366"
                        fill="none" stroke="#555" strokeWidth="2" strokeDasharray="8 8"
                    />

                    {/* Performance Teal Path */}
                    <path
                        d="M 0,350 C 125,350 125,250 250,250 C 375,250 375,180 500,180 C 625,180 625,80 750,80 C 875,80 875,20 1000,20"
                        fill="none" stroke="#45E4C9" strokeWidth="4" className="draw-path-teal" strokeLinecap="round"
                    />

                    {/* Grey Background Dots */}
                    {[
                        { cx: 0, cy: 433 }, { cx: 250, cy: 416 }, { cx: 500, cy: 400 }, { cx: 750, cy: 383 }, { cx: 1000, cy: 366 }
                    ].map((point, i) => (
                        <circle key={`g-${i}`} cx={point.cx} cy={point.cy} r="4" fill="#0D0D0D" stroke="#555" strokeWidth="2" />
                    ))}

                    {/* Glowing Teal Dots */}
                    {[
                        { cx: 0, cy: 350 }, { cx: 250, cy: 250 }, { cx: 500, cy: 180 }, { cx: 750, cy: 80 }, { cx: 1000, cy: 20 }
                    ].map((point, i) => (
                        <circle
                            key={`b-${i}`}
                            cx={point.cx}
                            cy={point.cy}
                            r="6"
                            fill="#fff"
                            stroke="#45E4C9"
                            strokeWidth="3"
                            className="chart-dot"
                            style={{ animationDelay: `${i * 0.4}s` }}
                        />
                    ))}
                </svg>
            </div>
        </div>
    );
};

// ── Component: RoleCard ───────────────────────────────────────────────────
const RoleCard = ({ role, idx }: { role: any, idx: number }) => (
    <div className="relative group w-full max-w-[550px] h-[90px] sm:h-[105px] cursor-pointer">
        <svg width="100%" height="100%" viewBox="0 0 632 140" preserveAspectRatio="none" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
            <path
                d={idx % 2 === 0
                    ? "M556 0H24C10.7452 0 0 10.7452 0 24V116C0 129.255 10.7452 140 24 140H556C568 140 576 134 580 124L628 16C632 6 624 0 612 0H556Z"
                    : "M76 0H608C621.255 0 632 10.7452 632 24V116C632 129.255 621.255 140 608 140H76C64 140 56 134 52 124L4 16C0 6 8 0 20 0H76Z"
                }
                className="fill-[#0A0A0A] transition-all duration-300 group-hover:[filter:drop-shadow(0_0_4px_rgba(255,255,255,0.1))] hover-glow-path"
                stroke="#45E4C9"
                strokeWidth="0.5"
                opacity="0.3"
            />
        </svg>

        <div className={`relative flex flex-col justify-center h-full z-10 ${idx % 2 === 0 ? 'pl-5 sm:pl-8 lg:pl-12 pr-6 sm:pr-8 lg:pr-20' : 'pl-[40px] sm:pl-[64px] lg:pl-[76px] pr-5 sm:pr-8 lg:pr-12'}`}>
            <div className="flex items-center justify-between gap-2 sm:gap-4 mb-1">
                <h4 className="text-white text-[14px] sm:text-[16px] lg:text-[18px] font-medium tracking-tight leading-snug whitespace-nowrap">{role.title}</h4>
                <div
                    className="px-[6px] sm:px-[10px] h-[22px] sm:h-[26px] flex items-center justify-center rounded-[4px] text-center flex-shrink-0"
                    style={{
                        background: "linear-gradient(#0A0A0A,#0A0A0A) padding-box, linear-gradient(90deg, #45E4C9, #2DD4BF, #22D3EE) border-box",
                        border: "1px solid transparent"
                    }}
                >
                    <span className="text-[#45E4C9] text-[10px] sm:text-[12px] font-semibold tracking-[0.5px] whitespace-nowrap">{role.salary}</span>
                </div>
            </div>
            <p className="text-[#94A3B8] text-[11px] sm:text-[13px] font-medium leading-snug w-[95%]">{role.description}</p>
        </div>
    </div>
);

// ── Component: CareerRoles ────────────────────────────────────────────────────
const CareerRoles = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16 sm:mb-24">
                <GradientLabel text="CAREER" highlight="ER" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Career Opportunities After This AI Course</h2>
                <p className="text-[#94A3B8] text-[14px] sm:text-[16px] max-w-[900px] mx-auto leading-relaxed font-medium">
                    Our learners are building AI-powered products and leading product teams at top companies globally.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
                <div className="flex-1 flex flex-col items-center lg:items-start w-full gap-3 sm:gap-5">
                    {CAREER_ROLES.map((role, idx) => (
                        <RoleCard key={idx} role={role} idx={idx} />
                    ))}
                </div>

                <div className="flex-1 relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[400px] sm:max-w-[654px]" style={{ aspectRatio: '654/507' }}>
                        <img src={ASSETS.roles} alt="Career Opportunities" className="w-full h-full object-contain relative z-20" />
                    </div>
                </div>
            </div>
            
            <div className="mt-20">
                <SkillGapChart />
            </div>
        </div>
    </section>
);

// ── Component: BYDP ───────────────────────────────────────────────────────────
const BYDP = () => (
    <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
        <div className="max-w-[1047px] mx-auto text-center">
            <GradientLabel text="PROGRAMS DESCRIPTION" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-10 sm:mb-16">Build Your Digital Product (BYDP)</h2>
            <div className="flex flex-col gap-12 items-center">
                <div className="max-w-[950px]">
                    <h3 className="text-white font-bold text-[18px] mb-4">What is BYDP?</h3>
                    <p className="text-[#94A3B8] text-[14px] sm:text-[16px] leading-[1.6] font-medium">Build Your Growth Engine (BYGE) is a structured design and development process that turns raw ideas into usable, market-ready digital products-fast, focused, and without guesswork.</p>
                </div>
                <div className="max-w-[950px]">
                    <h3 className="text-white font-bold text-[18px] mb-4">Why BYDP?</h3>
                    <p className="text-[#94A3B8] text-[14px] sm:text-[16px] leading-[1.6] font-medium">Because building the wrong product is more expensive than building it right. BYDP aligns strategy, design, and execution so you ship something users actually want, not just something that looks good.</p>
                </div>
            </div>
        </div>
    </section>
);

// ── Component: Pricing ────────────────────────────────────────────────────────
const Pricing = () => (
    <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A] border-t border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-14">
                <GradientLabel text="PROGRAMS DESCRIPTION" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Choose Your AI Product Management Learning Path</h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[800px] mx-auto leading-relaxed">
                    Flexible pricing options designed for professionals who want to lead AI-driven products and teams.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch max-w-[900px] mx-auto pb-8 sm:pb-12">
                {PRICING_PLANS.map((plan, i) => (
                    <div
                        key={i}
                        className={`relative rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 border transition-all duration-300 flex flex-col h-full ${plan.highlighted
                            ? "border-white/10 shadow-[0_0_80px_rgba(69,228,201,0.25)]"
                            : "bg-[#111] border-white/[0.08]"
                            }`}
                        style={plan.highlighted ? {
                            background: "radial-gradient(circle at 100% 0%, rgba(69, 228, 201, 0.35) 0%, rgba(69, 228, 201, 0.08) 40%, rgba(5, 5, 5, 1) 75%), #050505"
                        } : {}}
                    >
                        {plan.badge && (
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#45E4C9] text-black text-[9px] sm:text-[10px] font-bold tracking-[1.5px] uppercase px-4 sm:px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap z-10">
                                {plan.badge}
                            </div>
                        )}

                        <h3 className="text-[#E4E4E4] font-bold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] mb-3 flex items-center gap-2">
                            {plan.title}
                            {plan.highlighted && (
                                <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="1.5 5 4.5 8 10.5 2" />
                                    </svg>
                                </div>
                            )}
                        </h3>
                        <p className="text-[#A0A8B8] text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] font-normal mb-6 sm:mb-8">{plan.subtitle}</p>

                        <div className="text-[30px] sm:text-[40px] font-black text-white mb-2 leading-none tracking-tight">{plan.price}</div>
                        <div className={`text-[12px] sm:text-[14px] font-normal leading-[20px] tracking-[0.7px] uppercase mb-6 sm:mb-10 ${plan.highlighted ? "text-[#45E4C9]" : "text-[#7B7B7B]"}`}>
                            {plan.track}
                        </div>

                        <ul className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 flex-1">
                            {plan.features.map((f, j) => (
                                <li key={j} className="flex items-start gap-3 sm:gap-4 text-[13px] sm:text-[14px] font-medium leading-[20px] sm:leading-[22.5px] text-[#CFCFCF]">
                                    <div className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlighted ? "bg-[#45E4C9]" : "border border-white/20"}`}>
                                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none" stroke={plan.highlighted ? "black" : "white"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="1.5 5 4.5 8 10.5 2" />
                                        </svg>
                                    </div>
                                    <span className="flex-1">{f}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/sign-up" className="w-full mt-auto">
                            <button
                                className={`w-full py-3 sm:py-4 rounded-[10px] sm:rounded-[12px] font-bold text-[14px] sm:text-[15px] transition-all duration-300 tracking-[0.5px] ${plan.highlighted
                                    ? "bg-[#45E4C9] text-black hover:brightness-110 shadow-xl shadow-[#45E4C9]/25"
                                    : "border-2 border-[#45E4C9] text-[#45E4C9] hover:bg-[#45E4C9]/5"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ── Component: FAQ ────────────────────────────────────────────────────────────
const FAQ = () => {
    const [open, setOpen] = useState<number | null>(0);
    const [showAll, setShowAll] = useState(false);

    const visibleFaqs = showAll ? FAQS : FAQS.slice(0, 5);

    return (
        <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A] border-t border-white/[0.05]">
            <div className="max-w-[800px] mx-auto text-center">
                <div className="mb-10 sm:mb-14">
                    <GradientLabel text="SUPPORT" />
                    <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-3 sm:mb-4">Frequently Asked Questions</h2>
                    <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] leading-relaxed">
                        Everything you need to know about the program.
                    </p>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3 text-left">
                    {visibleFaqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-xl overflow-hidden backdrop-blur-[20px] transition-all duration-500 ease-in-out ${open === i
                                ? "drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                                : "hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)]"
                                }`}
                            style={{
                                background: open === i
                                    ? "linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.08) 100%)"
                                    : "linear-gradient(90deg, rgba(10, 10, 10, 0.2) 0%, rgba(255, 255, 255, 0.03) 100%)",
                                borderLeft: "none",
                                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                                borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                                borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
                                boxShadow: "inset -10px 0 20px rgba(255, 255, 255, 0.01)"
                            }}
                        >
                            <button
                                className={`w-full text-left px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between font-semibold text-[14px] sm:text-[17px] transition-all duration-500 ${open === i ? "text-white bg-white/[0.02]" : "text-[#F5F7FF] hover:text-white"}`}
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                <span className="pr-4">{faq.q}</span>
                                <span className={`text-xl sm:text-2xl font-extralight transition-transform duration-500 flex-shrink-0 ml-2 sm:ml-4 text-white ${open === i ? "rotate-45 text-[#45E4C9]" : ""}`}>
                                    +
                                </span>
                            </button>
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${open === i ? "max-h-[500px] opacity-100 pb-4 sm:pb-6" : "max-h-0 opacity-0"}`}>
                                <div className="px-4 sm:px-6 text-[#CFCFCF] text-[14px] sm:text-[16px] leading-relaxed border-t border-white/[0.05] pt-4 sm:pt-5 mx-2">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {FAQS.length > 5 && (
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="mt-12 px-8 py-3 rounded-full border border-[#45E4C9]/30 text-[#45E4C9] text-[14px] font-bold hover:bg-[#45E4C9]/10 transition-all duration-300 tracking-wide flex items-center gap-2 mx-auto group"
                    >
                        {showAll ? "See Less" : "See More Questions"}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
                    </button>
                )}
            </div>
        </section>
    );
};

// ── Component: CTABanner ───────────────────────────────────────────────────
const CTABanner = ({ onDownloadBrochure }: { onDownloadBrochure: () => void }) => (
    <section className="w-full max-w-[1440px] mx-auto mt-10 sm:mt-16 lg:mt-24 py-6 sm:py-10 px-4 md:px-8 lg:px-[70px]" style={{ overflow: "visible" }}>
        <div className="relative mx-auto flex flex-col lg:block w-full max-w-[1296px] h-auto lg:h-[318px]" style={{ overflow: "visible" }}>
            <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black border border-white/5">
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 1% 1%, #45E4C9 -10%, #064e40 25%, #000000 35%)" }} />
                <div className="absolute top-[-370px] left-[-290px] w-[450px] h-[450px] border-[6px] border-white/40 rounded-full z-10 hidden sm:block" />
            </div>

            <div className="relative lg:absolute top-0 left-0 bottom-0 z-30 flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 lg:py-0 lg:px-[72px] gap-3 sm:gap-4 max-w-[750px]">
                <h2 className="text-[#FFFFFF] font-semibold text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.3] sm:leading-[48px] tracking-tight max-w-[697px]">
                    Start Your AI Career Before You're Forced To Catch Up
                </h2>
                <p className="text-[#C2C2C2] font-medium text-[14px] sm:text-[16px] leading-normal max-w-[650px]">
                    Join professionals who are building AI-powered careers using AI Product Management, automation, and real-world projects.
                </p>
                <div className="mt-4 sm:mt-6">
                    <div onClick={onDownloadBrochure} className="cursor-pointer">
                        <button className="w-[140px] sm:w-[174px] h-[42px] sm:h-[50px] text-white font-semibold bg-[#45E4C9]/5 border border-[#45E4C9] rounded-[9px] text-[14px] sm:text-[16px] cursor-pointer backdrop-blur-[100px] hover:bg-[#45E4C9]/10 transition-all duration-300">
                            Apply Now
                        </button>
                    </div>
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


export default function ProductManagementPageV2() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white font-['Inter',sans-serif] overflow-x-hidden">
            <GlobalStyles />
            <Hero onDownloadBrochure={() => setIsModalOpen(true)} />
            <AlumniLogos />
            <Roadmap />
            <ProgramDesign />
            <Curriculum />
            <Mentors />
            <Tools />
            <Checklist />
            <CareerRoles />
                <BYDP />
                <Pricing />
                <FAQ />
            <CTABanner onDownloadBrochure={() => setIsModalOpen(true)} />

            <EnrollmentModalADS 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                program={{
                    title: "Product Management",
                    label: "AI PM",
                    description: "Learn AI Product Management, automation systems, and AI-driven product thinking",
                    color: "#45E4C9",
                    link: "",
                    hoverBorder: ""
                }}
            />
        </div>
    );
}
