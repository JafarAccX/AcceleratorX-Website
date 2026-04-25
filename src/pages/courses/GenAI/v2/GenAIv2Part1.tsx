import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
    NAV_LINKS,
    ASSETS,
    ALUMNI_LOGOS,
    MAIN_LOGOS
} from "./GenAIv2Constants";
import { Link } from "react-router-dom";

// ── Shared UI ─────────────────────────────────────────────────────────────
type GradientLabelProps = {
    text: string;
    highlight?: string;
};

export const GradientLabel = ({ text, highlight }: GradientLabelProps) => (
    <div className="flex justify-center mb-4">
        <div
            className="font-['Open_Sans',sans-serif] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase bg-clip-text text-transparent flex gap-0"
            style={{ backgroundImage: "linear-gradient(90deg, #3E38E0 0%, #5B46C1 33%, #BF7759 66%, #F7921E 100%)" }}
        >
            {highlight ? (
                <>
                    <span>{text.split(highlight)[0]}</span>
                    <span className="text-[#FC6401]">{highlight}</span>
                    <span>{text.split(highlight)[1]}</span>
                </>
            ) : (
                text
            )}
        </div>
    </div>
);

// ── Component: Navbar.tsx ───────────────────────────────────────────────────
export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md py-3 sm:py-4 border-b border-white/5" : "bg-transparent py-5 sm:py-7"}`}>
            <nav className="w-full max-w-[1300px] mx-auto flex items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-3 sm:gap-6">
                    <Link to="/" className="flex items-center">
                        <img src="/assets/accelerator.png" alt="AcceleratorX" className="h-[20px] sm:h-[30px] lg:h-[40px] w-auto object-contain" />
                    </Link>
                    <div className="hidden sm:block w-[1px] h-[24px] bg-white/20" />
                    <img src="/assets/a2n.png" alt="A2N Technologies" className="hidden sm:block h-[34px] sm:h-[44px] w-auto object-contain opacity-90" />
                </div>

                <div className="hidden lg:flex items-center gap-8 xl:gap-10">
                    <Link to="/" className="text-white text-[14px] font-medium transition-all relative group">
                        Home
                        <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#FC6401] rounded-full" />
                    </Link>
                    <div className="relative group cursor-pointer">
                        <span className="text-[#ADAAAA] group-hover:text-white text-[14px] font-medium transition-colors flex items-center gap-1.5">
                            Programs <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                        </span>
                    </div>
                    <Link to="/about-us" className="text-[#ADAAAA] hover:text-white text-[14px] font-medium transition-colors">About</Link>
                    <Link to="/blogs" className="text-[#ADAAAA] hover:text-white text-[14px] font-medium transition-colors">Blog</Link>
                    <Link to="/jobs" className="text-[#ADAAAA] hover:text-white text-[14px] font-medium transition-colors">Job Portal</Link>
                </div>

                <div className="flex items-center gap-4 sm:gap-8">
                    <Link to="/sign-in" className="hidden sm:block text-[#ADAAAA] hover:text-white text-[14px] font-medium transition-colors">Log In</Link>

                    <Link to="/sign-up" className="hidden sm:flex group items-center cursor-pointer">
                        <div className="h-[36px] px-6 bg-black border border-[#FC6401] rounded-l-full flex items-center justify-center text-[14px] font-bold text-white transition-all duration-300 group-hover:bg-[#FC6401]/5 active:scale-[0.98]">
                            Sign up
                        </div>
                        <div className="-ml-[1px] w-[36px] h-[36px] rounded-full border border-[#FC6401] bg-black flex items-center justify-center transition-all duration-300 group-hover:bg-[#FC6401] group-hover:shadow-[0_0_20px_rgba(252,100,1,0.4)] active:scale-[0.98]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                            </svg>
                        </div>
                    </Link>

                    <button className="lg:hidden flex items-center" onClick={() => setMobileOpen(true)}>
                        <Menu size={24} className="text-white" />
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-[200] bg-black transition-all duration-300 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <img src="/assets/accelerator.png" alt="AcceleratorX" className="h-[20px] object-contain" />
                        <div className="w-[1px] h-6 bg-white/20" />
                        <img src="/assets/a2n.png" alt="Partners" className="h-[32px] object-contain" />
                    </div>
                    <button onClick={() => setMobileOpen(false)}>
                        <X size={28} className="text-white" />
                    </button>
                </div>

                <div className="flex flex-col p-8 gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link}
                            to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                            onClick={() => setMobileOpen(false)}
                            className="text-[24px] font-medium text-[#ADAAAA] hover:text-white transition-colors flex items-center justify-between"
                        >
                            {link}
                            {link === "Programs" && <ChevronDown size={20} />}
                        </Link>
                    ))}

                    <div className="mt-8 flex flex-col gap-4">
                        <Link to="/sign-in" onClick={() => setMobileOpen(false)} className="w-full h-[52px] rounded-xl border border-white/10 flex items-center justify-center text-white text-[16px] font-semibold">Log In</Link>
                        <Link to="/sign-up" onClick={() => setMobileOpen(false)} className="w-full h-[52px] rounded-xl bg-[#FC6401] flex items-center justify-center text-white text-[16px] font-bold">Sign up</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};


// ── Component: Hero.tsx ───────────────────────────────────────────────────
export const Hero = ({ onDownloadBrochure }: { onDownloadBrochure?: () => void }) => {
    return (
        <section className="relative min-h-[600px] lg:min-h-[850px] bg-[#0A0A0A] overflow-hidden flex items-center justify-center pt-[80px]">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
                backgroundSize: "32px 32px",
            }} />

            <div className="w-full max-w-[1440px] mx-auto relative flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-6 lg:px-[70px] z-10 gap-10 lg:gap-0">
                <div className="w-full lg:max-w-[45%] flex flex-col gap-6 sm:gap-8 lg:mt-[60px] text-center lg:text-left">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[1.1] tracking-tight max-w-[555px] text-white mx-auto lg:mx-0">
                            4 Month {" "}
                            <span className="bg-gradient-to-r from-[#F1F1F1] via-[#cf9772] to-[#fc6401] bg-clip-text text-transparent">
                                Generative AI & AI Agent Course
                            </span>
                        </h1>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[26px] text-[#C2C2C2] font-normal max-w-[569px] opacity-80 mx-auto lg:mx-0">
                            Learn Generative AI, ChatGPT, and automation systems through real-world projects. For working professionals and beginners with no coding background.
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

                    <div className="w-full lg:w-[679px] flex flex-col gap-5 items-center lg:items-start overflow-hidden">
                        <div className="text-[10px] sm:text-[11px] font-bold text-white tracking-[0.1em] uppercase opacity-60 flex items-center gap-2">
                            LEARNERS WORKING ACROSS 1700+ COMPANIES
                        </div>

                        <div className="relative w-full overflow-hidden" style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        }}>
                            <style>{`
                                @keyframes slide-logos {
                                    0% { transform: translateX(0); }
                                    100% { transform: translateX(-50%); }
                                }
                                .animate-logos {
                                    animation: slide-logos 80s linear infinite;
                                }
                            `}</style>
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
                            <button className="h-[48px] sm:h-[54px] px-5 sm:px-8 bg-[#FC6401] border-2 border-transparent rounded-full font-bold text-white text-[14px] sm:text-[16px] transition-all duration-300 group-hover:bg-transparent group-hover:border-[#FC6401]">
                                Explore Our Programs
                            </button>
                            <div className="-ml-[1px] w-[48px] sm:w-[54px] h-[48px] sm:h-[54px] rounded-full bg-[#FC6401] border-2 border-transparent flex items-center justify-center transition-all duration-300 group-hover:bg-transparent group-hover:border-[#FC6401]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                                </svg>
                            </div>
                        </a>
                        <div
                            onClick={onDownloadBrochure}
                            className="flex items-center text-[14px] sm:text-[16px] font-bold text-white group whitespace-nowrap cursor-pointer"
                        >
                            <span className="flex items-center pb-[10px] border-b-2 border-[#FC6401] transition-all">
                                Download Brochure
                                <span className="ml-2 text-lg relative top-[1px]">→</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:flex-1 h-auto relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[649px] lg:w-[649px] aspect-[649/683] lg:h-[683px] bg-gradient-to-b from-[#000000] to-[#FC6401] rounded-[32px] sm:rounded-[48px] border-t border-t-black border-b border-b-white/5 border-x-0 overflow-hidden mt-6 lg:mt-0">
                        <img src={ASSETS.heroImage} alt="Accelerator Student" className="absolute bottom-[-28px] left-[50%] -translate-x-1/2 h-full w-auto object-contain scale-[1.05] z-1" />

                        <div className="absolute top-[4%] sm:top-[6%] right-[2%] sm:right-[4%] z-30">
                            <img src={ASSETS.ibmLogo} alt="IBM" className="h-[35px] sm:h-[48px] lg:h-[64px] brightness-200" />
                        </div>

                        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                            <img src={ASSETS.studentsGrp} alt="Happy Students" className="w-[110px] sm:w-[140px] md:w-[170px] lg:w-[208px] h-auto object-contain" />
                        </div>

                        <div className="absolute top-[40%] sm:top-[200px] lg:top-[300px] left-[-10px] sm:left-[-20px] lg:left-[45px] flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-black/5 z-20 hover:scale-105 transition-transform duration-300">
                            <img src="/assets/liveclasses.png" alt="Live Classes" className="w-4 sm:w-5 h-4 sm:h-5 object-contain" />
                            <span className="text-[12px] sm:text-[15px] font-semibold text-[#1CA425] whitespace-nowrap">Live Classes</span>
                        </div>

                        <div className="absolute top-[55%] sm:top-[310px] lg:top-[385px] right-[-10px] sm:right-[-20px] lg:right-[2px] flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-black/5 z-20 hover:scale-105 transition-transform duration-300">
                            <img src="/assets/mentorconnect.png" alt="Mentor Connect" className="w-4 sm:w-5 h-4 sm:h-5 object-contain" />
                            <span className="text-[12px] sm:text-[15px] font-semibold text-[#F96736] whitespace-nowrap">Mentor Connect</span>
                        </div>

                        <div className="absolute bottom-[8%] sm:bottom-[40px] lg:bottom-[85px] left-[-10px] sm:left-[-10px] lg:left-[45px] flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-black/5 z-20 hover:scale-105 transition-transform duration-300">
                            <img src="/assets/careersupport.png" alt="Career Support" className="w-4 sm:w-5 h-4 sm:h-5 object-contain" />
                            <span className="text-[12px] sm:text-[15px] font-semibold text-[#4C5BFA] whitespace-nowrap">Career Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ── Component: AlumniLogos.tsx ───────────────────────────────────────────────────
export const AlumniLogos = () => (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[70px] py-12 sm:py-16 lg:py-24 pb-16 sm:pb-20 lg:pb-32 overflow-hidden">
        <style>{`
            @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-scroll { animation: scroll 40s linear infinite; }
        `}</style>

        <GradientLabel text="SOCIAL PROOF" />
        <p className="text-center text-[#F5F7FF] text-xl sm:text-2xl md:text-[32px] font-medium mb-3 px-4">Our Alumni Are Working Across 1700+ Top MNCs</p>
        <p className="text-center text-[#94A3B8] text-sm sm:text-base md:text-[16px] font-medium mb-10 sm:mb-12 lg:mb-16 max-w-[1047px] mx-auto leading-relaxed px-4">
            Our learners are building AI-powered workflows, automation systems, and real-world applications across top companies.
        </p>

        <div className="relative w-full overflow-hidden" style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}>
            <div className="flex w-max gap-6 sm:gap-8 animate-scroll">
                {[...ALUMNI_LOGOS, ...ALUMNI_LOGOS].map((brand, idx) => (
                    <div key={`${brand.name}-${idx}`} className="flex items-center justify-center brightness-110 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer px-4 sm:px-8">
                        <img src={brand.url} alt={brand.name} loading="lazy" style={{ height: `${Math.round(brand.height * 0.75)}px` }} className="object-contain sm:[height:unset]" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);
