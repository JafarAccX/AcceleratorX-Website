import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import * as Constants from "./DataAnalyticsv2Constants";
import EnrollmentModalADS from "../../allprograms-ads/EnrollmentModalADS";


const {
    ASSETS,
    ALUMNI_LOGOS,
    MAIN_LOGOS,
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
            style={{ backgroundImage: "linear-gradient(90deg, #3B82F6 0%, #2DD4BF 33%, #22D3EE 66%, #06B6D4 100%)" }}
        >
            {highlight ? (
                <>
                    <span>{text.split(highlight)[0].trim()}</span>
                    <span className="text-[#3B82F6]">{highlight}</span>
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
                            6 Month <span className="bg-gradient-to-r from-[#FFFFFF] via-[#3B82F6] to-[#2DD4BF] bg-clip-text text-transparent">AI Data Analytics Course</span>
                        </h1>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[26px] text-[#C2C2C2] font-normal max-w-[569px] opacity-80 mx-auto lg:mx-0">
                            Learn AI-powered data analytics, SQL, Python, dashboards, and automation systems for working professionals and beginners with no coding background.
                        </p>
                    </div>

                    <div className="w-full max-w-[500px] h-auto rounded-[24px] backdrop-blur-[20px] flex flex-col sm:flex-row items-center p-4 sm:p-6 gap-4 sm:gap-6 self-center lg:self-start relative overflow-hidden border-t border-t-white/10 border-b border-b-white/5 border-x-0">
                        <div className="absolute inset-0 z-0 opacity-40" style={{ background: "linear-gradient(90deg, rgba(10, 10, 10, 0.4) 0%, rgba(20, 20, 20, 0.6) 100%)" }} />
                        <div className="flex-1 flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-6 z-10 w-full">
                            <div className="flex flex-col items-start sm:items-center sm:flex-row gap-4 sm:gap-6 mx-auto sm:mx-0">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-transparent flex items-center justify-center flex-shrink-0">
                                        <img src={ASSETS.bagIcon} alt="Jobs" className="w-6 h-6 object-contain" />
                                    </div>
                                    <div className="text-left font-['Inter',sans-serif]">
                                        <div className="text-[20px] sm:text-[22px] font-bold leading-tight">2000+</div>
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
                                        <div className="text-[20px] sm:text-[22px] font-bold leading-tight">4.8/5</div>
                                        <div className="text-[13px] text-[#EAEAEA]">Average Rating</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[679px] flex flex-col gap-5 items-center lg:items-start overflow-hidden mt-8 lg:mt-0">
                        <div className="text-[10px] sm:text-[11px] font-bold text-white tracking-[0.1em] uppercase opacity-60">
                            Learners working across 1700+ companies
                        </div>

                        <div className="relative w-full overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                            <style>{`@keyframes slide-logos { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-logos { animation: slide-logos 80s linear infinite; }`}</style>
                            <div className="flex w-max gap-8 sm:gap-12 animate-logos py-2">
                                {[1, 2, 3, 4].map((group) => (
                                    <div key={group} className="flex items-center gap-8 sm:gap-12 opacity-60">
                                        {MAIN_LOGOS.map((logo) => (
                                            <img key={logo.name} src={logo.url} alt={logo.name} className="h-[24px] sm:h-[32px] object-contain" />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-14 pt-2">
                        <a href="#programs" className="group flex items-center cursor-pointer">
                            <button className="h-[48px] sm:h-[54px] px-5 sm:px-8 bg-[#3B82F6] border-2 border-transparent rounded-full font-bold text-white text-[14px] sm:text-[16px] transition-all duration-300 group-hover:bg-transparent group-hover:border-[#3B82F6]">
                                Explore Our Programs
                            </button>
                            <div className="-ml-[1px] w-[48px] sm:w-[54px] h-[48px] sm:h-[54px] rounded-full bg-[#3B82F6] border-2 border-transparent flex items-center justify-center transition-all duration-300 group-hover:bg-transparent group-hover:border-[#3B82F6]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                            </div>
                        </a>
                        <div
                            onClick={onDownloadBrochure}
                            className="flex items-center text-[14px] sm:text-[16px] font-bold text-white group whitespace-nowrap cursor-pointer"
                        >
                            <span className="flex items-center pb-[10px] border-b-2 border-[#3B82F6] transition-all">
                                Download Brochure
                                <span className="ml-2 text-lg relative top-[1px]">→</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:flex-1 h-auto relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[350px] sm:max-w-[500px] lg:max-w-[649px] lg:w-[649px] aspect-[649/683] lg:h-[683px] bg-gradient-to-b from-[#000000] to-[#3B82F6] rounded-[32px] sm:rounded-[48px] border-t border-t-black border-b border-b-white/5 border-x-0 overflow-hidden mt-6 lg:mt-0">
                        <img src={ASSETS.heroImage} alt="Accelerator Student" className="absolute bottom-[-28px] left-[50%] -translate-x-1/2 h-full w-auto object-contain scale-[1.05] z-1" />
                        <div className="absolute top-[4%] sm:top-[6%] right-[2%] sm:right-[4%] z-30">
                            <img src={ASSETS.ibmLogo} alt="IBM" className="h-[35px] sm:h-[48px] lg:h-[64px] brightness-200" />
                        </div>
                        <div className="absolute top-[4%] sm:top-[6%] left-[4%] sm:left-[6%] z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                            <img src={ASSETS.studentsGrp} alt="Happy Students" className="w-[110px] sm:w-[140px] md:w-[165px] lg:w-[190px] h-auto object-contain" />
                        </div>

                        {/* Floating Pills */}
                        <div className="absolute top-[38%] left-[-2%] sm:left-[4%] flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-black/5 z-30 hover:scale-105 transition-transform duration-300">
                            <img src="/assets/liveclasses.png" alt="Live Classes" className="w-3.5 sm:w-4 h-3.5 sm:h-4 object-contain" />
                            <span className="text-[11px] sm:text-[14px] font-semibold text-[#1CA425] whitespace-nowrap">Live Classes</span>
                        </div>

                        <div className="absolute top-[52%] right-[-2%] sm:right-[4%] flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-black/5 z-30 hover:scale-105 transition-transform duration-300">
                            <img src="/assets/mentorconnect.png" alt="Mentor Connect" className="w-3.5 sm:w-4 h-3.5 sm:h-4 object-contain" />
                            <span className="text-[11px] sm:text-[14px] font-semibold text-[#F96736] whitespace-nowrap">Mentor Connect</span>
                        </div>

                        <div className="absolute bottom-[20%] left-[-2%] sm:left-[4%] flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-black/5 z-30 hover:scale-105 transition-transform duration-300">
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
        <GradientLabel text="SOCIAL PROOF" />
        <p className="text-center text-[#F5F7FF] text-xl sm:text-2xl md:text-[32px] font-medium mb-3 px-4">Our Alumni Are Working Across 1700+ Top MNCs</p>
        <p className="text-center text-[#C2C2C2] text-[16px] font-medium mb-10 sm:mb-12 lg:mb-16 max-w-[1047px] mx-auto leading-none px-4">
            Our learners are building AI-powered dashboards, automated systems, and data-driven decision models across top companies in India.
        </p>
        <div className="relative w-full overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
            <div className="flex w-max gap-6 sm:gap-8 animate-infinite-scroll-left">
                {[...ALUMNI_LOGOS, ...ALUMNI_LOGOS, ...ALUMNI_LOGOS, ...ALUMNI_LOGOS].map((brand, idx) => (
                    <div key={`${brand.name}-${idx}`} className="flex items-center justify-center brightness-110 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer px-4 sm:px-8">
                        <img src={brand.url} alt={brand.name} style={{ height: `${brand.height * 0.75}px` }} className="object-contain" />
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
                <GradientLabel text="PROGRAMS ROADMAP" />
                <p className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 px-2">AI Data Analytics Roadmap for Working Professionals & Freshers</p>
                <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] max-w-[1047px] mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-2">2,000+ learners across India are transitioning into AI-driven data analytics roles by building real projects and applying AI in their work.</p>
                <div className="inline-flex items-center p-[6px] rounded-full mb-10 sm:mb-16 bg-[#0D0D0D] border border-white/10">
                    <button onClick={() => setRoadmapPath("switch")} className={`px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${roadmapPath === "switch" ? "bg-[#3B82F6] text-white" : "text-[#9CA3AF] hover:text-white"}`}>Career Switch</button>
                    <button onClick={() => setRoadmapPath("freshers")} className={`px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${roadmapPath === "freshers" ? "bg-[#3B82F6] text-white" : "text-[#9CA3AF] hover:text-white"}`}>Freshers</button>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-white font-medium text-[16px] sm:text-[18px] mb-4 tracking-tight">
                        {roadmapPath === "freshers"
                            ? "Start Your Career in Ai Data Analytics From zero"
                            : "Transition into AI Data Analytics Roles"}
                    </p>
                    <div className="inline-flex items-center justify-center px-3 py-[4px] rounded-[30px] border border-[#3B82F6] bg-white/5 text-[#3B82F6] text-[11px] sm:text-[12px] font-bold leading-[20px] uppercase mb-[40px] sm:mb-[90px]">
                        {roadmapPath === "freshers" ? "FRESHERS PATH" : "CAREER SWITCHERS PATH"}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-4 sm:gap-y-6 w-full max-w-[1288px] mx-auto mb-4 sm:mb-6">
                    {currentPath.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="relative group w-full max-w-[664px] min-h-[100px] sm:min-h-[111px] h-auto py-[10px] sm:py-4 mx-auto cursor-pointer">
                            <svg width="100%" height="100%" viewBox="0 0 664 111" preserveAspectRatio="none" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
                                <path
                                    d={idx % 2 === 0
                                        ? "M588 0H24C10.7452 0 0 10.7452 0 24V87C0 100.255 10.7452 111 24 111H588C600 111 608 105 612 95L660 16C664 6 656 0 644 0H588Z"
                                        : "M76 0H640C653.255 0 664 10.7452 664 24V87C664 100.255 653.255 111 640 111H20C8 111 0 105 4 95L52 16C56 6 64 0 76 0Z"
                                    }
                                    className="fill-[#0D0D0D] stroke-white/10 stroke-[1.5px] transition-all duration-300 group-hover:stroke-white/30"
                                />
                            </svg>
                            <div className={`relative flex flex-col gap-1 h-full justify-center ${idx % 2 === 0 ? 'pl-6 sm:pl-10 text-left' : 'pl-[50px] sm:pl-[88px] text-left'}`}>
                                <div className="flex items-center gap-3">
                                    <img src={item.icon} alt={item.title} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                                    <h3 className="text-white text-[14px] font-bold">{item.title}</h3>
                                </div>
                                <p className="text-[#C2C2C2] text-[12px] sm:text-[13px] ml-8 sm:ml-9 max-w-[80%]">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {currentPath[4] && (
                    <div className="w-full flex justify-center mt-2 sm:mt-4">
                        <div className="relative group w-full max-w-[664px] min-h-[100px] sm:min-h-[111px] h-auto py-[10px] sm:py-4 cursor-pointer">
                            <svg width="100%" height="100%" viewBox="0 0 664 111" preserveAspectRatio="none" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
                                <path
                                    d="M588 0H24C10.7452 0 0 10.7452 0 24V87C0 100.255 10.7452 111 24 111H588C600 111 608 105 612 95L660 16C664 6 656 0 644 0H588Z"
                                    className="fill-[#0D0D0D] stroke-white/10 stroke-[1.5px] transition-all duration-300 group-hover:stroke-white/30"
                                />
                            </svg>
                            <div className="relative pl-6 sm:pl-10 flex flex-col gap-1 h-full justify-center text-left">
                                <div className="flex items-center gap-3">
                                    <img src={currentPath[4].icon} alt={currentPath[4].title} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                                    <h3 className="text-white text-[14px] font-bold">{currentPath[4].title}</h3>
                                </div>
                                <p className="text-[#C2C2C2] text-[12px] sm:text-[13px] ml-8 sm:ml-9 max-w-[80%]">{currentPath[4].desc}</p>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </section>
    );
};

const PROGRAM_BENEFITS = [
    {
        icon: <img src="/assets/COMPUTER.png" alt="1:1 Mentorship" className="w-8 h-8 object-contain" />,
        title: "1:1 Mentorship from Data Experts",
        desc: <>Learn from professionals working in <span className="text-white font-bold">data analytics, BI, and AI-driven roles.</span></>
    },
    {
        icon: <img src="/assets/COMPUTER.png" alt="Live Project-Based Learning" className="w-8 h-8 object-contain" />,
        title: "Live Project-Based Learning",
        desc: <>Build <span className="text-white font-bold">dashboards, SQL queries, and AI-powered analytics systems</span> in real-time.</>
    },
    {
        icon: <img src="/assets/COMPUTER.png" alt="Industry-Relevant Curriculum" className="w-8 h-8 object-contain" />,
        title: "Industry-Relevant Curriculum",
        desc: <>Stay updated with the latest <span className="text-white font-bold">Data Science tools, automation trends, and real-world use cases.</span></>
    },
    {
        icon: <img src="/assets/COMPUTER.png" alt="Career-Focused Learning" className="w-8 h-8 object-contain" />,
        title: "Career-Focused Learning Path",
        desc: <>Move from learning to earning with <span className="text-white font-bold">job-ready data skills and project portfolios.</span></>
    }
];

// ── Component: ProgramDesign ───────────────────────────────────────────────
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
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="PROGRAM BENEFITS" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Designed for Real-World Data Analytics Execution</h2>
                <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] leading-relaxed max-w-[700px] mx-auto mb-12 sm:mb-12">
                    You learn by building AI-powered dashboards, analytics systems, and real business reports.
                </p>

                <div className="flex flex-col lg:flex-row gap-6 sm:gap-[40px] items-center justify-center max-w-[1188px] mx-auto">
                    <div className="relative flex-shrink-0 w-full max-w-[605px] aspect-[605/351] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0D0D0D]">
                        <div className="w-full h-full relative">
                            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-[10px] sm:text-[11px] font-bold text-white/90 tracking-wide uppercase">Live Class</span>
                            </div>
                            <img src="/assets/programdesign.png" alt="Program Benefits" className="w-full h-full object-contain" />
                            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 w-[140px] sm:w-[180px] p-3 sm:p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl text-left font-['Inter',sans-serif]">
                                <p className="text-[11px] sm:text-[13px] font-bold text-white leading-tight">Mentored by<br />Top 1% Industry Experts</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6 flex-shrink-0 w-full max-w-[543px]">
                        <div className="relative w-full aspect-[543/334] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 bg-[#0D0D0D]/60 backdrop-blur-xl shadow-2xl">
                            <div
                                className={`flex w-full h-full transition-transform ${isReturning ? "duration-1000 ease-in-out" : "duration-[450ms] ease-out"}`}
                                style={{ transform: `translateX(-${activeBenefitIndex * 100}%)` }}
                            >
                                {PROGRAM_BENEFITS.map((benefit, idx) => (
                                    <div key={idx} className="min-w-full h-full p-8 sm:p-10 text-left flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="flex-shrink-0">{benefit.icon}</div>
                                            <h3 className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight">{benefit.title}</h3>
                                        </div>
                                        <p className="text-[#C2C2C2] text-[15px] sm:text-[16px] leading-[1.6] font-medium font-['Inter',sans-serif]">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeBenefitIndex ? "bg-[#3B82F6] w-8" : "bg-white/10"}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ── Component: Curriculum ───────────────────────────────────────────────────
const Curriculum = () => {
    const [currMode, setCurrMode] = useState<"ibm" | "regular">("ibm");
    const [openModule, setOpenModule] = useState<number | null>(0);
    const currModules = currMode === "ibm" ? ibmModules : regularModules;

    return (
        <section id="programs" className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="PROGRAM CURRICULUM" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium mt-4 text-white mb-4 sm:mb-6">What You Will Learn In This AI Data Analytics Course</h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[900px] mx-auto mb-10 leading-relaxed">This program covers everything from fundamentals to advanced AI analytics, dashboards, and automation systems.</p>

                <div className="inline-flex bg-[#111] p-1.5 rounded-full border border-white/[0.08] mb-12">
                    <button
                        onClick={() => setCurrMode("ibm")}
                        className={`px-6 py-2.5 rounded-full text-[13px] font-bold transition-all ${currMode === "ibm" ? "bg-[#3B82F6] text-black" : "text-white hover:text-[#3B82F6]"}`}
                    >
                        IBM + AcceX
                    </button>
                    <button
                        onClick={() => setCurrMode("regular")}
                        className={`px-6 py-2.5 rounded-full text-[13px] font-bold transition-all ${currMode === "regular" ? "bg-[#3B82F6] text-black" : "text-white hover:text-[#3B82F6]"}`}
                    >
                        Regular
                    </button>
                </div>

                <div className="flex flex-col gap-4 max-w-[1100px] mx-auto">
                    {currModules.map((m: any, i) => (
                        <div
                            key={i}
                            className={`group relative border transition-all duration-300 rounded-[20px] overflow-hidden ${openModule === i ? 'bg-[#111] border-[#3B82F6]/30' : 'bg-[#0D0D0D] border-white/5 hover:border-white/10'}`}
                        >
                            <div
                                onClick={() => setOpenModule(openModule === i ? null : i)}
                                className="p-6 sm:p-8 flex items-center justify-between cursor-pointer"
                            >
                                <div className="flex items-center gap-6 text-left">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-[18px] transition-all duration-300 ${openModule === i ? 'bg-[#3B82F6] text-black' : 'bg-white/5 text-[#3B82F6]'}`}>
                                        0{i + 1}
                                    </div>
                                    <h3 className="text-white text-[18px] sm:text-[22px] font-bold tracking-tight leading-tight group-hover:text-[#3B82F6] transition-colors">
                                        {m.title}
                                    </h3>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${openModule === i ? 'border-[#3B82F6] bg-[#3B82F6]/10 text-[#3B82F6] rotate-180' : 'border-white/10 text-white/40'}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </div>

                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openModule === i ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-6 sm:p-8 pt-0 border-t border-white/5 text-left">
                                    {/* Goal Section */}
                                    <div className="mb-8 p-4 rounded-xl bg-[#3B82F6]/5 border-l-4 border-[#3B82F6]">
                                        <span className="text-[#3B82F6] text-[11px] font-black tracking-widest uppercase block mb-1">Learning Goal</span>
                                        <p className="text-white text-[15px] sm:text-[16px] leading-relaxed font-medium">
                                            {m.goal}
                                        </p>
                                    </div>

                                    {/* Sessions List */}
                                    <div className="grid grid-cols-1 gap-6">
                                        {m.sessions.map((session: any, sIdx: number) => (
                                            <div key={sIdx} className="bg-white/[0.02] rounded-xl p-5 border border-white/5">
                                                <h4 className="text-white text-[16px] sm:text-[18px] font-bold mb-4 flex items-center gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
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
                                                {(session.project || session.handsOn || session.skills || session.tools) && (
                                                    <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                                                        {session.project && (
                                                            <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[12px] font-medium italic">
                                                                <span className="font-bold not-italic mr-2">Project:</span> {session.project}
                                                            </div>
                                                        )}
                                                        {session.skills && (
                                                            <div className="px-3 py-1.5 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-[12px] font-medium italic">
                                                                <span className="font-bold not-italic mr-2">Skills:</span> {session.skills}
                                                            </div>
                                                        )}
                                                        {session.tools && (
                                                            <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[12px] font-medium italic">
                                                                <span className="font-bold not-italic mr-2">Tools:</span> {session.tools}
                                                            </div>
                                                        )}
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

// ── Component: Mentors ───────────────────────────────────────────────────
const Mentors = () => (
    <section className="py-8 sm:py-16 bg-[#0A0A0A] flex flex-col items-center overflow-hidden relative">
        <GradientLabel text="MENTORS" />

        <h2 className="text-[32px] sm:text-[32px] md:text-[32px] font-medium text-white mb-6 text-center relative z-10 px-4">Learn from Industry Data Experts</h2>
        <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[990px] mx-auto mb-10 sm:mb-14 leading-relaxed">
            Get mentored by professionals with 10+ years of experience in data analytics, business intelligence, and AI-driven roles.</p>
        <div className="relative w-full overflow-hidden z-10" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="flex w-max gap-12 sm:gap-24 animate-infinite-scroll-left py-4 px-8">
                {[...MENTORS, ...MENTORS, ...MENTORS, ...MENTORS].map((mentor, i) => (
                    <div key={i} className="relative w-[180px] xs:w-[210px] sm:w-[260px] h-[210px] xs:h-[230px] sm:h-[310px] flex-shrink-0 group">
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
                            border-l border-r border-b border-[#3b82f6]/100 border-t-0
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
                            bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent 
                            rounded-full" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ── Component: Tools ───────────────────────────────────────────────────
const Tools = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] flex flex-col items-center overflow-hidden border-t border-white/5">
        <div className="max-w-[1285px] flex flex-col items-center relative px-4 sm:px-6 md:px-0">
            <GradientLabel text="TOOLS" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6 text-center">Tools You Will Work With</h2>

            <div className="w-full relative mt-12 mb-16 overflow-hidden" style={{ height: "120px" }}>
                <div className="absolute inset-y-0 left-0 w-20 sm:w-60 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 sm:w-60 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

                <div className="flex w-max gap-12 sm:gap-24 animate-infinite-scroll-left items-center py-4 px-10 z-20 relative">
                    {[...TOOLS_LIST, ...TOOLS_LIST, ...TOOLS_LIST].map((tool, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer flex-shrink-0">
                            <div className="relative">
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="h-8 sm:h-12 w-auto object-contain transition-all duration-500 group-hover:scale-110 relative z-10"
                                />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-0"
                                    style={{ backgroundColor: `${tool.color || '#3B82F6'}30` }} />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest duration-500">
                                    {tool.name}
                                </span>
                                <div className="h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"
                                    style={{ backgroundColor: tool.color || '#3B82F6' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

        <div className="w-full h-[1px] bg-white/10 mt-8 sm:mt-12" />
    </section>
);

// ── Component: Checklist ───────────────────────────────────────────────────
const Checklist = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-[1267px] mx-auto text-center px-4 sm:px-6">
            <GradientLabel text="SKILLSET" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-10 sm:mb-14">AI Data Analytics Skill Checklist</h2>
            <div className="relative min-h-[300px]">
                <div className="absolute top-10 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/15 to-transparent hidden md:block pointer-events-none" />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 sm:gap-y-12 gap-x-3 sm:gap-x-4">
                    {PM_PHASES.map((p, i) => (
                        <div key={i} className="flex flex-col items-center text-center group cursor-default h-full">
                            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#111] border-2 border-[#3B82F6]/20 flex items-center justify-center mb-4 sm:mb-6 relative z-10 group-hover:border-[#3B82F6]/60 group-hover:bg-[#3B82F6]/5 transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
                                <div
                                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundColor: '#3B82F6',
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
                            <span className="mt-auto text-[#3B82F6] text-[9px] sm:text-[10px] font-bold tracking-[0.1em] uppercase">{p.phase}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ── Component: CareerRoles ───────────────────────────────────────────────────

// ── Component: SkillGapChart (Added for Animation) ────────────────────
// ── Component: SkillGapChart ────────────────────
const SkillGapChart = () => {
    return (
        <div className="relative bg-[#0D0D0D] rounded-[40px] border border-white/5 shadow-[0_0_100px_rgba(59,130,246,0.05)] overflow-hidden w-full max-w-[1100px] mx-auto p-8 lg:p-16 mt-20">
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
                        0%, 100% { opacity: 0.2; }
                        50% { opacity: 0.5; }
                    }
                    .draw-path-blue {
                        stroke-dasharray: 1500;
                        stroke-dashoffset: 1500;
                        animation: draw-chart-line 7s ease-in-out infinite;
                    }
                    .chart-dot {
                        transform-origin: center;
                        animation: dot-appear 7s ease-out infinite;
                    }
                    .chart-glow {
                        animation: glow-pulse 4s ease-in-out infinite;
                    }
                `}
            </style>

            <div className="relative w-full aspect-[2/1] min-h-[350px]">
                {/* Header Legend */}
                <div className="absolute top-0 left-0 flex gap-8 items-center text-[10px] lg:text-[12px] font-bold tracking-widest uppercase mb-12">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-[2px] border-b-[2px] border-dashed border-[#555]"></div>
                        <span className="text-[#64748B]">AVERAGE ANALYTICS</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-[3px] bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                        <span className="text-white">PERFORMANCE ANALYTICS</span>
                    </div>
                </div>

                {/* Chart Grid Lines */}
                <div className="absolute top-[80px] bottom-10 left-[50px] lg:left-[60px] right-0 flex flex-col justify-between">
                    {["₹75L", "₹60L", "₹45L", "₹30L", "₹15L", "₹0L"].map((val) => (
                        <div key={val} className="relative w-full border-t border-white/[0.03] h-0">
                            <span className="absolute -top-3 -left-[45px] lg:-left-[55px] w-10 text-right text-[10px] lg:text-[11px] font-medium text-[#64748B]">
                                {val}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Chart X-axis Labels */}
                <div className="absolute bottom-0 left-[50px] lg:left-[60px] right-0 flex justify-between px-0 text-[10px] lg:text-[11px] font-medium text-[#64748B] pt-4">
                    <span className="-ml-2">2026</span>
                    <span>2028</span>
                    <span>2030</span>
                    <span>2032</span>
                    <span className="-mr-2">2035</span>
                </div>

                {/* Chart Vectors */}
                <svg className="absolute top-[80px] bottom-10 left-[50px] lg:left-[60px] right-0 w-full h-[calc(100%-80px-40px)] overflow-visible" viewBox="0 0 1000 500" preserveAspectRatio="none">
                    {/* Blue Line Ambient Glow */}
                    <path
                        d="M 0,400 C 125,400 125,300 250,300 C 375,300 375,230 500,230 C 625,230 625,120 750,120 C 875,120 875,40 1000,40"
                        fill="none" stroke="#3B82F6" strokeWidth="20" className="chart-glow blur-3xl" strokeLinecap="round" opacity="0.3"
                    />

                    {/* Average Grey Dashed Path */}
                    <path
                        d="M 0,466 L 250,450 L 500,433 L 750,416 L 1000,400"
                        fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="8 8"
                    />

                    {/* Performance Blue Path */}
                    <path
                        d="M 0,400 C 125,400 125,300 250,300 C 375,300 375,230 500,230 C 625,230 625,120 750,120 C 875,120 875,40 1000,40"
                        fill="none" stroke="#3B82F6" strokeWidth="4" className="draw-path-blue" strokeLinecap="round"
                    />

                    {/* Grey Background Dots */}
                    {[
                        { cx: 0, cy: 466 }, { cx: 250, cy: 450 }, { cx: 500, cy: 433 }, { cx: 750, cy: 416 }, { cx: 1000, cy: 400 }
                    ].map((point, i) => (
                        <circle key={`g-${i}`} cx={point.cx} cy={point.cy} r="4" fill="#0D0D0D" stroke="#334155" strokeWidth="2" />
                    ))}

                    {/* Glowing Blue Dots */}
                    {[
                        { cx: 0, cy: 400 }, { cx: 250, cy: 300 }, { cx: 500, cy: 230 }, { cx: 750, cy: 120 }, { cx: 1000, cy: 40 }
                    ].map((point, i) => (
                        <g key={`b-group-${i}`} className="chart-dot" style={{ animationDelay: `${i * 0.5}s` }}>
                            <circle cx={point.cx} cy={point.cy} r="8" fill="#3B82F6" className="animate-pulse opacity-40" />
                            <circle cx={point.cx} cy={point.cy} r="5" fill="#fff" stroke="#3B82F6" strokeWidth="3" />
                        </g>
                    ))}
                </svg>
            </div>
        </div>
    );
};

// ── Component: RoleCard ────────────────────
const RoleCard = ({ role, idx }: { role: any, idx: number }) => (
    <div className="relative group w-full max-w-[550px] h-[90px] sm:h-[105px] cursor-pointer">
        <svg width="100%" height="100%" viewBox="0 0 632 140" preserveAspectRatio="none" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
            <path
                d={idx % 2 === 0
                    ? "M556 0H24C10.7452 0 0 10.7452 0 24V116C0 129.255 10.7452 140 24 140H556C568 140 576 134 580 124L628 16C632 6 624 0 612 0H556Z"
                    : "M76 0H608C621.255 0 632 10.7452 632 24V116C632 129.255 621.255 140 608 140H76C64 140 56 134 52 124L4 16C0 6 8 0 20 0H76Z"
                }
                className="fill-[#0D0D0D] stroke-[#3B82F6]/30 stroke-[1.5px] transition-all duration-300 group-hover:stroke-[#3B82F6]/60"
            />
        </svg>

        <div className={`relative flex flex-col justify-center h-full z-10 ${idx % 2 === 0 ? 'pl-6 sm:pl-10 pr-6 sm:pr-20' : 'pl-[40px] sm:pl-[64px] pr-6'}`}>
            <div className="flex items-center justify-between gap-4 mb-1">
                <h4 className="text-white text-[16px] sm:text-[18px] font-bold tracking-tight">{role.title}</h4>
                <div className="px-3 py-1 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-lg whitespace-nowrap">
                    <span className="text-[#3B82F6] font-bold text-[12px] sm:text-[14px]">{role.salary}</span>
                </div>
            </div>
            <p className="text-[#94A3B8] text-[12px] sm:text-[13px] font-medium leading-snug w-[90%]">{role.description}</p>
        </div>
    </div>
);

const CareerRoles = () => (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4">
            <div className="text-center mb-16 sm:mb-24">
                <GradientLabel text="CAREER" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6 leading-tight">Career Opportunities After This Data Analytics Course</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-8">
                {/* Roles List */}
                <div className="flex-1 flex flex-col items-center lg:items-start w-full gap-4 max-w-[550px]">
                    {CAREER_ROLES.map((role, idx) => (
                        <RoleCard key={idx} role={role} idx={idx} />
                    ))}
                </div>

                {/* Right Side Illustration */}
                <div className="flex-1 relative flex justify-center lg:justify-end w-full">
                    <div className="relative w-full max-w-[654px] aspect-[654/507]">
                        <img
                            src="/assets/dataanalytics/roles.png"
                            alt="Career Network Illustration"
                            className="w-full h-full object-contain relative z-20"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#3B82F6]/30 blur-[100px] rounded-full z-10 pointer-events-none" />
                    </div>
                </div>
            </div>

            <SkillGapChart />
        </div>
    </section>
);

// ── Component: Pricing ───────────────────────────────────────────────────
const Pricing = () => (
    <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A] border-t border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-14">
                <GradientLabel text="PRICING" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Choose Your AI Data Analytics Learning Path</h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[900px] mx-auto leading-relaxed">
                    Flexible pricing options designed for professionals who want to build AI-powered data solutions and real-world applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch max-w-[900px] mx-auto pb-8 sm:pb-12">
                {PRICING_PLANS.map((plan, i) => (
                    <div
                        key={i}
                        className={`relative rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 border transition-all duration-300 flex flex-col h-full ${plan.highlighted
                            ? "border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.25)]"
                            : "bg-[#111] border-white/[0.08]"
                            }`}
                        style={plan.highlighted ? {
                            background: "radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.35) 0%, rgba(59, 130, 246, 0.08) 40%, rgba(5, 5, 5, 1) 75%), #050505"
                        } : {}}
                    >
                        {plan.badge && (
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#3B82F6] text-white text-[9px] sm:text-[10px] font-bold tracking-[1.5px] uppercase px-4 sm:px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap z-10">
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
                        <p className="text-[#A0A8B8] text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] font-normal mb-6 sm:mb-8 min-h-[88px] sm:min-h-[104px]">{plan.subtitle}</p>

                        <div className="text-[30px] sm:text-[40px] font-black text-white mb-2 leading-none tracking-tight">{plan.price}</div>
                        <div className={`text-[12px] sm:text-[14px] font-normal leading-[20px] tracking-[0.7px] uppercase mb-6 sm:mb-10 ${plan.highlighted ? "text-[#3B82F6]" : "text-[#7B7B7B]"}`}>
                            {plan.track}
                        </div>

                        <ul className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 flex-1">
                            {plan.features.map((f, j) => (
                                <li key={j} className="flex items-start gap-3 sm:gap-4 text-[13px] sm:text-[14px] font-medium leading-[20px] sm:leading-[22.5px] text-[#CFCFCF]">
                                    <div className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlighted ? "bg-[#3B82F6]" : "border border-white/20"}`}>
                                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none" stroke={plan.highlighted ? "white" : "white"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                                    ? "bg-[#3B82F6] text-white hover:brightness-110 shadow-xl shadow-[#3B82F6]/25 border-2 border-transparent"
                                    : "border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/5"
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
                            src="/assets/certificate/AI DATA ANALYTICS.png"
                            alt="AI Data Analytics Certificate"
                            className="w-full h-auto object-contain relative z-20 mix-blend-lighten"
                            width={517}
                            height={731}
                        />
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h3 className="text-white font-bold text-[24px] sm:text-[32px] leading-tight mb-4">
                        Get Your Nano-Degree in AI Data Analytics
                    </h3>
                    <p className="text-[#A0A8B8] text-[14px] sm:text-[16px] leading-relaxed mb-8 max-w-[500px]">
                        Show the world your expertise in AI Data Analytics, stand out in a competitive Ai job market and get hired easily.
                    </p>

                    <ul className="flex flex-col gap-4 sm:gap-5 text-left w-full max-w-[500px]">
                        {[
                            "Industry-recognized Nano Degree in AI Data Analytics.",
                            "Verified badge + unique verification ID",
                            "Trusted by 2500+ companies and agencies",
                            "AI Data Analytics Projects portfolio",
                            "Lifetime exclusive alumni community access"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 sm:gap-4">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                                <span className="text-[#C2C2C2] text-[14px] sm:text-[15px] font-medium leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// ── Main Page Component ───────────────────────────────────────────────────────
const FAQ = () => {
    const [open, setOpen] = useState<number | null>(0);
    const [limit, setLimit] = useState(5);

    const visibleFaqs = FAQS.slice(0, limit);

    return (
        <section className="py-16 sm:py-24 bg-[#0A0A0A] border-t border-white/5">
            <div className="max-w-[850px] mx-auto px-4">

                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium font-inter text-white leading-tight text-center mb-4">
                    FAQs
                </h2>

                <div className="space-y-4 mt-10">
                    {visibleFaqs.map((f, i) => (
                        <div key={i} className="border border-white/5 bg-[#0D0D0D] rounded-2xl overflow-hidden shadow-xl shadow-black/20 transition-all duration-300">
                            <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 text-white font-medium flex justify-between items-center hover:bg-white/5 transition-colors">
                                <span className="pr-8">{f.q}</span>
                                <ChevronDown className={`flex-shrink-0 transition-transform ${open === i ? 'rotate-180 text-[#3B82F6]' : ''}`} />
                            </button>
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${open === i ? 'max-h-[500px]' : 'max-h-0'}`}>
                                <p className="p-6 text-[#C2C2C2] font-regular text-base leading-relaxed border-t border-white/5 pt-4 mt-2 mx-2">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4 sm:gap-6">
                    {limit > 5 && (
                        <button
                            onClick={() => setLimit(5)}
                            className="px-8 py-3 rounded-full border border-[#3B82F6]/30 text-[#3B82F6] text-[14px] font-bold hover:bg-[#3B82F6]/10 transition-all duration-300 tracking-wide flex items-center justify-center gap-2 group"
                        >
                            See Less Questions
                            <ChevronDown className="w-4 h-4 transition-transform duration-300 rotate-180" />
                        </button>
                    )}
                    {limit < FAQS.length && (
                        <button
                            onClick={() => setLimit(prev => Math.min(prev + 5, FAQS.length))}
                            className="px-8 py-3 rounded-full border border-[#3B82F6]/30 text-[#3B82F6] text-[14px] font-bold hover:bg-[#3B82F6]/10 transition-all duration-300 tracking-wide flex items-center justify-center gap-2 group"
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
    <section className="w-full max-w-[1440px] mx-auto mt-10 sm:mt-16 lg:mt-24 py-6 sm:py-10 px-4 md:px-8 lg:px-[70px]" style={{ overflow: "visible" }}>
        <div className="relative mx-auto flex flex-col lg:block w-full max-w-[1296px] h-auto lg:h-[318px]" style={{ overflow: "visible" }}>
            <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black border border-white/5">
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 1% 1%, #3B82F6 -10%, #001f4d 25%, #000000 35%)" }} />
                <div className="absolute top-[-370px] left-[-290px] w-[450px] h-[450px] border-[6px] border-white/40 rounded-full z-10 hidden sm:block" />
            </div>

            <div className="relative lg:absolute top-0 left-0 bottom-0 z-30 flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 lg:py-0 lg:px-[72px] gap-3 sm:gap-4 max-w-[900px]">
                <h2 className="text-[#FFFFFF] font-semibold text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.3] sm:leading-[48px] tracking-tight max-w-[778px]">
                    Start Your Data Career Before You’re Left Behind
                </h2>
                <p className="text-[#C2C2C2] font-medium text-[14px] sm:text-[16px] leading-normal max-w-[650px]">
                    Join professionals building careers using AI-powered data analytics and real-world projects.
                </p>
                <div className="mt-4 sm:mt-6">
                    <div onClick={onDownloadBrochure} className="cursor-pointer">
                        <button className="w-[180px] sm:w-[214px] h-[42px] sm:h-[50px] text-white font-semibold bg-[#3B82F6]/5 border border-[#3B82F6] rounded-[9px] text-[14px] sm:text-[16px] cursor-pointer backdrop-blur-[100px] hover:bg-[#3B82F6]/10 transition-all duration-300">
                            Claim Your Scholarship
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



// ── Component: BYDP ───────────────────────────────────────────────────────
const BYDP = () => (
    <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A] border-t border-white/[0.05]">
        <div className="max-w-[1047px] mx-auto text-center">
            <GradientLabel text="PROJECTS" />
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-10 sm:mb-16">Build Real Data Projects That Get You Hired</h2>

            <div className="flex flex-col gap-8 sm:gap-12 items-center">
                <div className="max-w-[950px]">
                    <p className="text-[#C2C2C2] text-[16px] sm:text-[18px] leading-[1.6] font-medium mb-2">
                        Instead of just completing assignments, you build:
                    </p>
                    <p className="text-white text-[18px] sm:text-[22px] font-medium mb-6">
                        Dashboards | SQL Projects | AI-powered analytics | Business reports
                    </p>
                    <p className="text-[#C2C2C2] text-[14px] sm:text-[16px] leading-[1.6] font-medium italic opacity-70">
                        This becomes your proof of work. What recruiters actually care about.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default function DataAnalyticsPageV2() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white font-['Inter',sans-serif]">
            <GlobalStyles />
            <Hero onDownloadBrochure={() => setIsModalOpen(true)} />
            <AlumniLogos />
            <Roadmap />
            <ProgramDesign />
            <Curriculum />
            <Mentors />
            <Tools />
            <Checklist />
            <Certificate />
            <CareerRoles />
            <BYDP />
            <Pricing />
            <FAQ />
            <CTABanner onDownloadBrochure={() => setIsModalOpen(true)} />

            <EnrollmentModalADS
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                program={{
                    title: "Data Analytics",
                    label: "AI DA",
                    description: "Learn AI-powered data analytics, SQL, Python, dashboards, and automation systems",
                    color: "#3B82F6",
                    link: "",
                    hoverBorder: ""
                }}
            />
        </div>
    );
}

