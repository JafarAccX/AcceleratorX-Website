import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { 
    ASSETS, 
    ALUMNI_LOGOS, 
    floatingBadges, 
    switchPath, 
    freshersPath, 
    ibmModules, 
    regularModules, 
    MENTORS, 
    TOOLS_LIST, 
    DS_PHASES, 
    CAREER_ROLES, 
    PRICING_PLANS, 
    FAQS, 
} from "./DataSciencev2Constants";
import EnrollmentModalADS from "../../allprograms-ads/EnrollmentModalADS";

// ── Shared UI ─────────────────────────────────────────────────────────────
type GradientLabelProps = {
    text: string;
    highlight?: string;
};

const GradientLabel = ({ text, highlight }: GradientLabelProps) => (
    <div className="flex justify-center mb-4">
        <div
            className={`font-['Open_Sans',sans-serif] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase bg-clip-text text-transparent flex items-center ${highlight ? 'gap-1' : 'gap-0'}`}
            style={{ backgroundImage: "linear-gradient(90deg, #3B82F6 0%, #2563EB 33%, #1D4ED8 66%, #1E40AF 100%)" }}
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

// Navbar and Footer are now handled by MainLayout

// ── Component: Hero.tsx ───────────────────────────────────────────────────

const Hero = ({ onDownloadBrochure }: { onDownloadBrochure: () => void }) => {
    return (
        <section className="relative min-h-[600px] lg:min-h-[850px] bg-[#0A0A0A] overflow-hidden flex items-center justify-center pt-[80px]">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
            <div className="w-full max-w-[1295px] mx-auto relative flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-6 lg:px-0 z-10 gap-10 lg:gap-0">
                <div className="w-full lg:w-[612px] flex flex-col gap-6 sm:gap-8 lg:mt-[60px] text-center lg:text-left">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[1.1] tracking-tight max-w-[612px] text-white mx-auto lg:mx-0">
                            10 Weeks <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">AI Data</span> <br className="hidden lg:block" />
                            <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">Science</span> Course
                        </h1>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[26px] text-[#C2C2C2] font-normal max-w-[569px] opacity-80 mx-auto lg:mx-0">
                            Learn AI-powered data analytics, dashboards, and automation systems using Python, SQL, and modern AI tools through real-world projects.
                        </p>
                    </div>

                    <div className="w-full max-w-[500px] h-auto rounded-[24px] backdrop-blur-[20px] flex flex-col sm:flex-row items-center p-4 sm:p-6 gap-4 sm:gap-6 self-center lg:self-start relative overflow-hidden border-t border-t-white/10 border-b border-b-white/5 border-x-0">
                        <div className="absolute inset-0 z-0 opacity-40" style={{ background: "linear-gradient(90deg, rgba(10, 10, 10, 0.4) 0%, rgba(20, 20, 20, 0.6) 100%)" }} />
                        <div className="flex-1 flex items-center gap-4 z-10">
                            <div className="w-12 h-12 rounded-xl bg-transparent flex items-center justify-center flex-shrink-0"><img src={ASSETS.bagIcon} alt="Jobs" className="w-6 h-6 object-contain" /></div>
                            <div className="text-left"><div className="text-[20px] sm:text-[22px] font-bold leading-tight">2000+</div><div className="text-[13px] text-[#EAEAEA]">Learners</div></div>
                        </div>
                        <div className="w-full sm:w-[1px] h-[1px] sm:h-10 bg-white/[0.1] z-10" />
                        <div className="flex-1 flex items-center gap-4 z-10">
                            <div className="w-12 h-12 rounded-xl bg-transparent flex items-center justify-center flex-shrink-0"><img src={ASSETS.rupeeIcon} alt="CTC" className="w-6 h-6 object-contain" /></div>
                            <div className="text-left"><div className="text-[20px] sm:text-[22px] font-bold leading-tight">4.8/5</div><div className="text-[13px] text-[#EAEAEA]">Average Rating</div></div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[679px] flex flex-col gap-5 items-center lg:items-start overflow-hidden">
                        <div className="text-[10px] sm:text-[11px] font-bold text-white tracking-[0.1em] uppercase opacity-60">TOP COMPANIES HIRING RIGHT NOW (INDIA & ABROAD)</div>
                        <div className="relative w-full overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                            <style>{`@keyframes slide-logos { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-logos { animation: slide-logos 25s linear infinite; }`}</style>
                            <div className="flex w-max gap-8 sm:gap-12 animate-logos py-2">
                                {[1, 2].map((group) => (
                                    <div key={group} className="flex items-center gap-8 sm:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                        {ALUMNI_LOGOS.map((logo) => (
                                            <img key={logo.name} src={logo.url} alt={logo.name} className="h-[16px] sm:h-[20px] object-contain" />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
                        <div className="group flex items-center cursor-pointer">
                            <button className="h-[48px] sm:h-[54px] px-5 sm:px-8 bg-[#3B82F6] border-2 border-transparent rounded-full font-bold text-black text-[14px] sm:text-[16px] transition-all duration-300 group-hover:bg-transparent group-hover:border-[#3B82F6] group-hover:text-white">Explore Our Programs</button>
                            <div className="-ml-[1px] w-[48px] sm:w-[54px] h-[48px] sm:h-[54px] rounded-full bg-[#3B82F6] border-2 border-transparent flex items-center justify-center transition-all duration-300 group-hover:bg-transparent group-hover:border-[#3B82F6]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:stroke-white"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
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

                <div className="pt-[40px] lg:pt-[125px] relative z-10 hidden sm:block">
                    <div className="relative transform scale-[0.6] md:scale-[0.8] lg:scale-100 origin-top" style={{ width: "700px", height: "800px" }}>
                        <div className="absolute inset-0 rounded-[28px] overflow-hidden border border-white/10 bg-[#3B82F6]">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40 opacity-60" />
                            <div className="absolute left-1/2 top-[70%] -translate-x-1/2 w-[120%] h-[70%] bg-[#3b82f6]/30 rounded-full blur-[80px]" />
                            <img src={ASSETS.heroImage} alt="DS Student" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain z-0" draggable={false} fetchPriority="high" />
                        </div>
                        {/* Happy Students Badge */}
                        <div className="absolute top-[30px] left-[30px] z-20 bg-white p-3 rounded-[16px] shadow-xl flex flex-col gap-1 items-center">
                            <img src="/assets/studentgrp.png" className="w-[140px] h-auto rounded-lg" draggable={false} />
                        </div>

                        {/* IBM Collaboration */}
                        <div className="absolute top-[34px] right-[30px] z-20 flex flex-col items-end">
                            <img src="/assets/ibm.png" className="w-[90px] h-auto brightness-200" draggable={false} />
                        </div>
                        {floatingBadges.map((badge, idx) => (
                            <div key={idx} className="absolute z-20 bg-white flex items-center p-2 px-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.05] group/badge" style={{ top: badge.top, left: badge.left }}>
                                <div className="mr-2 flex items-center justify-center"><img src={badge.icon} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" /></div>
                                <span className={`text-[12px] sm:text-[14px] font-bold whitespace-nowrap`} style={{ color: badge.color }}>{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// ── Component: AlumniLogos.tsx ───────────────────────────────────────────────────

const AlumniLogos = () => (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[70px] py-12 sm:py-16 lg:py-24 pb-16 sm:pb-20 lg:pb-32 overflow-hidden">
        <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-scroll { animation: scroll 35s linear infinite; }`}</style>
        <GradientLabel text="SOCIAL PROOF" highlight="PROOF" />
        <p className="text-center text-[#F5F7FF] text-xl sm:text-2xl md:text-[32px] font-medium mb-3 px-4">Our Alumni Are Working across 1700+ Top MNCs</p>
        <p className="text-center text-[#94A3B8] text-sm sm:text-base md:text-[16px] font-medium mb-10 sm:mb-12 lg:mb-16 max-w-[1047px] mx-auto leading-relaxed px-4">Our learners are building AI-powered dashboards, automated systems, and data-driven decision models across top companies in India.</p>
        <div className="relative w-full overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
            <div className="flex w-max gap-6 sm:gap-8 animate-scroll hover:[animation-play-state:paused]">
                {[...ALUMNI_LOGOS, ...ALUMNI_LOGOS].map((brand, idx) => (
                    <div key={`${brand.name}-${idx}`} className="flex items-center justify-center brightness-110 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer px-4 sm:px-8"><img src={brand.url} alt={brand.name} style={{ height: `${Math.round(brand.height * 0.75)}px` }} className="object-contain sm:[height:unset]" /></div>
                ))}
            </div>
        </div>
    </section>
);

// ── Component: Roadmap.tsx ───────────────────────────────────────────────────

const Roadmap = () => {
    const [roadmapPath, setRoadmapPath] = useState<"switch" | "freshers">("switch");
    const currentPath = roadmapPath === "freshers" ? freshersPath : switchPath;

    return (
        <section className="min-h-[500px] lg:min-h-[815px] py-12 sm:py-16 lg:py-24 px-4 md:px-8 lg:px-[70px] bg-[#0A0A0A]">
            <div className="max-w-[1440px] mx-auto text-center">
                <GradientLabel text="PROGRAMS ROADMAP" highlight="ROADMAP" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 px-2">AI Data Science Roadmap for Working Professionals & Freshers</h2>
                <p className="text-[#94A3B8] text-[14px] sm:text-[16px] max-w-[1047px] mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-2">2,000+ learners across India are transitioning into AI Data Science roles by building real products and applying AI in data-driven decision-making.</p>
                <div className="inline-flex items-center p-[6px] rounded-full mb-10 sm:mb-16 bg-[#0D0D0D] border border-white/10">
                    <button onClick={() => setRoadmapPath("switch")} className={`px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${roadmapPath === "switch" ? "bg-[#3B82F6] text-black" : "text-[#9CA3AF] hover:text-white"}`}>Career Switch</button>
                    <button onClick={() => setRoadmapPath("freshers")} className={`px-4 sm:px-6 py-[8px] sm:py-[10px] rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 ${roadmapPath === "freshers" ? "bg-[#3B82F6] text-black" : "text-[#9CA3AF] hover:text-white"}`}>Freshers</button>
                </div>
                <div className="flex flex-col items-center"><h2 className="text-white font-medium text-[16px] sm:text-[18px] mb-4 tracking-tight">Transition into AI Data Science Roles with a Structured Learning Path</h2><div className="inline-flex items-center justify-center px-3 py-[4px] rounded-[30px] border border-[#3B82F6] bg-white/5 text-[#3B82F6] text-[11px] sm:text-[12px] font-bold leading-[20px] uppercase mb-[40px] sm:mb-[90px]">{roadmapPath === "freshers" ? "FRESHERS PATH" : "CAREER SWITCHERS PATH"}</div></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-4 sm:gap-y-6 w-full max-w-[1288px] mb-4 sm:mb-6">
                    {currentPath.slice(0, 4).map((item, idx) => (
                        <div key={idx} className={`relative group w-full max-w-[664px] h-[100px] sm:h-[111px] mx-auto cursor-pointer ${idx % 2 !== 0 ? 'md:ml-[-1px]' : ''}`}>
                            <svg width="100%" height="100%" viewBox="0 0 664 111" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"><defs><linearGradient id={`cardGradient-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#0A0A0A" /><stop offset="100%" stopColor="#141414" /></linearGradient></defs><path d={idx % 2 === 0 ? "M588 0H24C10.7452 0 0 10.7452 0 24V87C0 100.255 10.7452 111 24 111H588C600 111 608 105 612 95L660 16C664 6 656 0 644 0H588Z" : "M76 0H640C653.255 0 664 10.7452 664 24V87C664 100.255 653.255 111 640 111H20C8 111 0 105 4 95L52 16C56 6 64 0 76 0Z"} className="transition-all duration-300 group-hover:stroke-white/60 group-hover:stroke-[1.2px] group-hover:[filter:drop-shadow(0_0_4px_rgba(255,255,255,0.2))] hover-glow-path" fill={`url(#cardGradient-${idx})`} stroke="white" strokeOpacity="0.1" strokeWidth="1.5" /></svg>
                            <div className={`relative flex flex-col gap-1 h-full justify-center ${idx % 2 === 0 ? 'pl-6 sm:pl-10 pr-12 sm:pr-20' : 'pl-[50px] sm:pl-[88px] pr-6 sm:pr-10'}`}><div className="flex items-center gap-3 sm:gap-5"><div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"><img src={item.icon} alt={item.title} className="w-full h-full object-contain" /></div><h3 className="text-[13px] sm:text-[14px] font-bold text-[#ECECEC] leading-[24px] sm:leading-[28px] font-['Inter',sans-serif] tracking-tight">{item.title}</h3></div><div className="pl-8 sm:pl-11"><p className="text-[12px] sm:text-[14px] text-[#CFCFCF] font-normal leading-[20px] sm:leading-[24px] tracking-[-0.36px] font-['Inter',sans-serif] text-left">{item.desc}</p></div></div>
                        </div>
                    ))}
                </div>
                {currentPath[4] && (
                    <div className="w-full flex justify-center mt-2 sm:mt-4">
                        <div className="relative group w-full max-w-[664px] h-[100px] sm:h-[111px] cursor-pointer"><svg width="100%" height="100%" viewBox="0 0 664 111" className="absolute inset-0 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"><defs><linearGradient id="cardGradientCentered" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#0A0A0A" /><stop offset="100%" stopColor="#141414" /></linearGradient></defs><path d="M588 0H24C10.7452 0 0 10.7452 0 24V87C0 100.255 10.7452 111 24 111H588C600 111 608 105 612 95L660 16C664 6 656 0 644 0H588Z" className="transition-all duration-300 group-hover:stroke-white/60 group-hover:stroke-[1.2px] group-hover:[filter:drop-shadow(0_0_4px_rgba(255,255,255,0.2))] hover-glow-path" fill="url(#cardGradientCentered)" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" /></svg><div className="relative pl-6 sm:pl-10 pr-12 sm:pr-20 flex flex-col gap-1 h-full justify-center"><div className="flex items-center gap-3 sm:gap-5"><div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"><img src={currentPath[4].icon} alt={currentPath[4].title} className="w-full h-full object-contain" /></div><h3 className="text-[13px] sm:text-[14px] font-bold text-[#ECECEC] leading-[24px] sm:leading-[28px] font-['Inter',sans-serif] tracking-tight">{currentPath[4].title}</h3></div><div className="pl-8 sm:pl-11"><p className="text-[12px] sm:text-[14px] text-[#CFCFCF] font-normal leading-[20px] sm:leading-[24px] tracking-[-0.36px] font-['Inter',sans-serif] text-left">{currentPath[4].desc}</p></div></div></div>
                    </div>
                )}
            </div>
        </section>
    );
};

// ── Component: ProgramDesign.tsx ───────────────────────────────────────────────────

const programBenefits = [
    { icon: <img src="/assets/COMPUTER.png" alt="1:1" className="w-8 h-8" />, title: "1:1 Mentorship from Data Experts", desc: <>Learn directly from professionals working in <span className="text-white font-bold">data science, analytics, and AI roles.</span></> },
    { icon: <img src="/assets/COMPUTER.png" alt="Live" className="w-8 h-8" />, title: "Live Project-Based Learning", desc: <>Build <span className="text-white font-bold">dashboards, analytics systems, and automation workflows in real-time.</span></> },
    { icon: <img src="/assets/COMPUTER.png" alt="Industry" className="w-8 h-8" />, title: "Industry-Relevant Curriculum", desc: <>Stay updated with <span className="text-white font-bold">AI in data analytics, automation trends, and real-world business use cases.</span></> },
    { icon: <img src="/assets/COMPUTER.png" alt="Career" className="w-8 h-8" />, title: "Career-Focused Learning Path", desc: <>Move from learning to earning with <span className="text-white font-bold">job-ready data science skills and project portfolios.</span></> }
];

const ProgramDesign = () => {
    const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);
    const [isReturning, setIsReturning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBenefitIndex((prev) => {
                const next = (prev + 1) % 4;
                setIsReturning(next === 0);
                return next;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="PROGRAMS BENEFITS" highlight="BENEFITS" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-12 sm:mb-20">Designed for Real-World AI Execution</h2>
                
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-[40px] items-center justify-center max-w-[1188px] mx-auto">
                    {/* Photo Card */}
                    <div className="relative flex-shrink-0 w-full max-w-[605px] aspect-[605/351] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0D0D0D]">
                        <div className="w-full h-full relative">
                            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                <span className="text-[10px] sm:text-[11px] font-bold text-white/90 tracking-wide uppercase">Live Class</span>
                            </div>
                            <img src="/assets/programdesign.png" alt="Program Design" className="w-full h-full object-contain" />
                            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 w-[140px] sm:w-[180px] p-3 sm:p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl text-left font-['Inter',sans-serif]">
                                <p className="text-[11px] sm:text-[13px] font-bold text-white leading-tight">Mentored by<br />Top 1% Industry Experts</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Card */}
                    <div className="flex flex-col items-center gap-6 flex-shrink-0 w-full max-w-[543px]">
                        <div className="relative w-full aspect-[543/334] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 bg-[#0D0D0D]/60 backdrop-blur-xl shadow-2xl">
                            <div
                                className={`flex w-full h-full transition-transform ${isReturning ? "duration-1000 ease-in-out" : "duration-[450ms] ease-out"}`}
                                style={{ transform: `translateX(-${activeBenefitIndex * 100}%)` }}
                            >
                                {programBenefits.map((benefit, idx) => (
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

// ── Component: Curriculum.tsx ───────────────────────────────────────────────────

const Curriculum = () => {
    const [currMode, setCurrMode] = useState<"ibm" | "regular">("ibm");
    const [openModule, setOpenModule] = useState<number | null>(null);
    const currModules = currMode === "ibm" ? ibmModules : regularModules;
    return (
        <section id="programs" className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="WHAT YOU WILL LEARN" highlight="LEARN" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6">Program Curriculum</h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[800px] mx-auto mb-10 leading-relaxed">This program covers everything from data fundamentals to advanced AI-powered analytics, dashboards, and automated machine learning systems.</p>
                <div className="inline-flex bg-[#111] p-1.5 rounded-full border border-white/[0.08] mb-10"><button onClick={() => setCurrMode("ibm")} className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all ${currMode === "ibm" ? "bg-[#3B82F6] text-black" : "text-white"}`}>IBM + AcceX</button><button onClick={() => setCurrMode("regular")} className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all ${currMode === "regular" ? "bg-[#3B82F6] text-black" : "text-white"}`}>Regular</button></div>
                <div className="flex flex-col gap-3 max-w-[1276px] mx-auto">
                    {currModules.map((m, i) => (
                        <div key={i} onClick={() => setOpenModule(openModule === i ? null : i)} className="group relative p-4 sm:p-[24px] bg-gradient-to-b from-[#0A0A0A] to-[#111111] border border-white/10 transition-all duration-300 rounded-[12px] flex flex-col gap-[12px] text-left cursor-pointer overflow-hidden"><div className="flex items-start justify-between w-full"><div className="flex gap-[8px] items-center"><span className="text-[16px] font-bold text-[#3B82F6] opacity-70">0{i + 1}</span><h3 className="text-[15px] sm:text-[20px] font-regular text-white">{m.title}</h3></div><ChevronDown className={`w-5 h-5 text-white/40 group-hover:text-white transition-transform ${openModule === i ? 'rotate-180' : ''}`} /></div><div className={`transition-all duration-500 overflow-hidden ${openModule === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}><div className="pl-[28px]"><p className="text-[#A0A8B8] text-[14px] sm:text-[16px]">{m.desc}</p></div></div></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ── Component: Mentors.tsx ───────────────────────────────────────────────────

const MentorCard = ({ mentor }: { mentor: any }) => (
    <div className="relative w-[210px] sm:w-[260px] h-[230px] sm:h-[310px] flex-shrink-0 group">
        {/* Inner Card with Mentor Image */}
        <div className="absolute inset-x-0 top-0 bottom-12 rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-[#0E1B4D] to-[#0D0D0D] overflow-hidden">
            <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="absolute inset-x-0 bottom-0 mx-auto h-[95%] w-auto object-contain grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
            />
        </div>
        
        {/* Floating Logo Top-Right */}
        {mentor.companyLogo && (
            <div className="absolute top-[-10px] -right-3 z-40 drop-shadow-[0_4px_10px_rgba(59,130,246,0.3)]">
                <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center bg-white border border-white/20">
                    <img src={mentor.companyLogo} alt="" className="w-full h-full object-contain p-1 rounded-full" />
                </div>
            </div>
        )}

        {/* Floating Info Box at Bottom */}
        <div className="absolute bottom-[1px] left-1/2 -translate-x-1/2 w-[90%] sm:w-[95%] h-[70px] sm:h-[85px] rounded-[24px] flex flex-col items-center justify-center text-center z-50 p-3 sm:p-4 border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.25)] bg-[#0A0A0A]/95 backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
            <div className="text-white text-[12px] sm:text-[14px] font-bold tracking-tight">{mentor.name}</div>
            <div className="text-white text-[10px] sm:text-[11px] opacity-70 mt-0.5 leading-tight">{mentor.designation}</div>
            <div className="text-[#3B82F6] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mt-1">@ {mentor.company}</div>
        </div>
    </div>
);

const Mentors = () => (
    <section className="py-16 sm:py-24 bg-[#050505] flex flex-col items-center relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute left-[-150px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#3B82F6]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#3B82F6]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-full relative flex flex-col items-center z-10 px-4">
            <GradientLabel text="MENTORS" highlight="ORS" />
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-16 text-center tracking-tight px-4">Learn from Industry Data Science Experts</h2>
            
            <div className="flex flex-wrap justify-center gap-12 sm:gap-24 py-8 px-12">
                {MENTORS.map((m, i) => <MentorCard key={i} mentor={m} />)}
            </div>
        </div>
    </section>
);

// ── Component: Tools.tsx ───────────────────────────────────────────────────

const Tools = () => (
    <section className="py-16 bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
        {/* Figma Blue Glows */}
        <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3B82F6]/15 blur-[100px] rounded-full pointer-events-none z-0" />
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3B82F6]/15 blur-[100px] rounded-full pointer-events-none z-0" />
        
        <div className="w-full max-w-[1285px] flex flex-col items-center relative px-4 z-10">
            <GradientLabel text="PROGRAMS DESCRIPTION" />
            <h2 className="text-2xl font-medium text-white mb-10">Tools You Will Work With</h2>
            <div className="w-full relative overflow-hidden flex items-center h-[120px]">
                <style>{`
                    @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                    .animate-scroll-left { animation: scroll-left 30s linear infinite; }
                `}</style>
                <div className="flex w-fit items-center animate-scroll-left whitespace-nowrap">
                    {[...TOOLS_LIST, ...TOOLS_LIST].map((t, i) => (
                        <div key={i} className="px-10 flex-shrink-0">
                            <img src={t.logo} alt={t.name} className="h-[45px] sm:h-[55px] object-contain opacity-80 hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ── Component: Checklist.tsx ───────────────────────────────────────────────────

const Checklist = () => (
    <section className="py-16 bg-[#0A0A0A] border-b border-white/5">
        <div className="max-w-[1267px] mx-auto text-center px-4">
            <GradientLabel text="SKILL DESCRIPTION" />
            <h2 className="text-2xl font-medium text-white mb-4">AI Data Science Skill Checklist</h2>
            <div className="relative mt-20"><div className="absolute top-10 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/15 to-transparent hidden md:block" /><div className="grid grid-cols-2 md:grid-cols-6 gap-y-10">{DS_PHASES.map((p, i) => <div key={i} className="flex flex-col items-center text-center px-2 group"><div className="w-14 h-14 rounded-full bg-[#111] border-2 border-[#3B82F6]/20 flex items-center justify-center mb-4 z-10 group-hover:border-[#3B82F6] transition-all"><img src={p.icon} alt="" className="w-4 h-4 object-contain brightness-200" /></div><h3 className="text-white text-[14px] font-bold mb-1">{p.title}</h3><p className="text-[#A0A8B8] text-[12px] max-w-[140px]">{p.description}</p><span className="mt-auto text-[#3B82F6] text-[9px] font-bold uppercase">{p.phase}</span></div>)}</div></div>
        </div>
    </section>
);

// ── Component: CareerRoles.tsx ───────────────────────────────────────────────────

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
                        <div className="w-8 h-[3px] bg-[#3B82F6] shadow-[0_0_100px_rgba(59,130,246,0.5)]"></div>
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

const CareerRoles = () => (

    <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-[1300px] mx-auto px-4">
            <div className="text-center mb-16"><GradientLabel text="CAREER" highlight="ER" /><h2 className="text-2xl font-medium text-white">Career Opportunities After This AI Course</h2></div>
            <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 flex flex-col gap-4 w-full">
                    {CAREER_ROLES.map((role, i) => (
                        <div key={i} className="bg-[#111] p-6 rounded-2xl border border-white/5 flex flex-col gap-2"><div className="flex justify-between items-center"><h4 className="text-white font-bold">{role.title}</h4><span className="text-[#3B82F6] font-bold text-sm">{role.salary}</span></div><p className="text-[#94A3B8] text-sm">{role.description}</p></div>
                    ))}
                </div>
                <div className="flex-1 flex justify-center"><img src="/assets/datascience/roles.png" className="w-full max-w-[500px]" alt="" /></div>
            </div>
            <SkillGapChart />
        </div>
    </section>
);

// ── Component: BYDP.tsx ───────────────────────────────────────────────────

const BYDP = () => (
    <section className="py-20 bg-[#0A0A0A] border-t border-white/5"><div className="max-w-[1047px] mx-auto text-center"><GradientLabel text="BYDP" /><h2 className="text-2xl font-medium text-white mb-12">Build Your Digital Product (BYDP)</h2><div className="flex flex-col gap-8"><div className="max-w-[800px] mx-auto"><h3 className="text-white font-bold mb-4">What is BYDP?</h3><p className="text-[#94A3B8]">BYDP is a structured analytical process that turns raw data into market-ready AI solutions—fast and focused.</p></div></div></div></section>
);

// ── Component: Pricing.tsx ───────────────────────────────────────────────────

const Pricing = () => (
    <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto px-4"><div className="text-center mb-12 gap-2"><GradientLabel text="PRICING" /><h2 className="text-2xl font-medium text-white">Choose Your AI Data Science Learning Path</h2></div><div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {PRICING_PLANS.map((p, i) => (
                <div key={i} className={`p-8 rounded-3xl border ${p.highlighted ? "border-[#3B82F6] bg-gradient-to-br from-[#3B82F6]/10 to-black" : "border-white/10 bg-[#111]"}`}>
                    <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                    <div className="text-4xl font-black mb-10">{p.price}</div>
                    <ul className="flex flex-col gap-4 mb-12">
                        {p.features.map((f, j) => <li key={j} className="text-sm text-[#CFCFCF] flex gap-3"><span className="text-[#3B82F6]">✓</span>{f}</li>)}
                    </ul>
                    <Link to="/sign-up" className="w-full">
                        <button
                            className={`w-full py-4 rounded-xl font-bold ${p.highlighted ? "bg-[#3B82F6] text-white" : "border border-[#3B82F6] text-[#3B82F6]"}`}
                        >
                            {p.cta}
                        </button>
                    </Link>
                </div>
            ))}
        </div></div>
    </section>
);

// ── Component: FAQ.tsx ───────────────────────────────────────────────────

const FAQ = () => {
    const [open, setOpen] = useState(0);
    return (
        <section className="py-20 bg-[#0A0A0A] border-t border-white/5"><div className="max-w-[800px] mx-auto px-4"><div className="text-center mb-12"><GradientLabel text="FAQS" /><h2 className="text-2xl font-medium text-white">Frequently Asked Questions</h2></div><div className="flex flex-col gap-4">{FAQS.slice(0, 5).map((f, i) => <div key={i} className="border border-white/5 rounded-2xl overflow-hidden"><button onClick={() => setOpen(i)} className="w-full p-6 text-left flex justify-between"><span>{f.q}</span><span>{open === i ? "-" : "+"}</span></button>{open === i && <div className="p-6 pt-0 text-[#CFCFCF]">{f.a}</div>}</div>)}</div></div></section>
    );
};

// Footer is now handled by MainLayout

// ── Main Page Component ─────────────────────────────────────────────────────

export default function DataSciencePageV2() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white font-['Inter'] overflow-x-hidden">
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

            <EnrollmentModalADS 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                program={{
                    title: "Data Science",
                    label: "AI DS",
                    description: "Learn AI-powered data analytics, dashboards, and automation systems using Python, SQL",
                    color: "#3B82F6",
                    link: "",
                    hoverBorder: ""
                }}
            />
        </div>
    );
}
