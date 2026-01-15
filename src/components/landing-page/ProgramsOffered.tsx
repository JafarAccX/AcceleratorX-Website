import { useState, useEffect, useRef } from "react";

const PROGRAMS = [
    {
        id: "ai-product-management",
        label: "AI IN PRODUCT MANAGEMENT",
        title: "AI Product Management",
        description: "Dive into AI Product Management, leverage product management tools, gain real-world experience, Build Your Own Product and take your product management career to the next level.",
        image: "/assets/week1.webp"
    },
    {
        id: "ai-data-analytics",
        label: "AI IN DATA ANALYTICS",
        title: "AI in Data Analytics",
        description: "Build an AI-powered dashboard, a data analyst portfolio that helps you get hired in data analyst, business analyst, financial analyst, market analyst, and HR analyst roles.",
        image: "/assets/week2.webp"
    },
    {
        id: "generative-ai",
        label: "GENERATIVE AI",
        title: "Generative AI",
        description: "Gen AI and Agentic AI specialisation is designed for beginners, providing a no-code pathway to mastering generative AI, AI Agents, and the powerful tools of automation. Secure your expertise with India's first solution-based AI automation program.",
        image: "/assets/week3.webp"
    },
    {
        id: "ai-digital-marketing",
        label: "AI DIGITAL MARKETING",
        title: "AI in Digital Marketing",
        description: "Nano-Degree in AI Digital Marketing teaches you how to utilise AI growth, AI marketing automation, and AI performance marketing through live classes, hands-on projects, and a real capstone challenge.",
        image: "/assets/week7.webp"
    }
];

export default function ProgramsOffered() {
    const [activeSection, setActiveSection] = useState(PROGRAMS[0].id);
    const [isFixed, setIsFixed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const sidebarRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current && sidebarRef.current) {
                const containerTop = containerRef.current.offsetTop;
                const containerBottom = containerTop + containerRef.current.offsetHeight;
                const sidebarHeight = sidebarRef.current.offsetHeight;
                const viewportCenter = window.scrollY + window.innerHeight / 2;
                const sidebarCenter = containerTop + sidebarHeight / 2;

                const shouldStartFixed = viewportCenter > sidebarCenter;
                const sidebarBottom = window.scrollY + window.innerHeight / 2 + sidebarHeight / 2;
                const shouldStopFixed = sidebarBottom > containerBottom;

                setIsFixed(shouldStartFixed && !shouldStopFixed);

                if (!isFixed) {
                    setSidebarWidth(sidebarRef.current.offsetWidth);
                }
            }

            // Improved active section detection
            const viewportMiddle = window.scrollY + window.innerHeight / 2;

            for (const program of PROGRAMS) {
                const element = document.getElementById(program.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    const elementBottom = elementTop + rect.height;

                    // Check if the viewport middle is within this section
                    if (viewportMiddle >= elementTop && viewportMiddle < elementBottom) {
                        setActiveSection(program.id);
                        break;
                    }
                }
            }
        };

        if (sidebarRef.current) {
            setSidebarWidth(sidebarRef.current.offsetWidth);
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [isFixed]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900 py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">


                <div ref={containerRef} className="flex flex-col lg:flex-row gap-16 relative">
                    {/* Placeholder to maintain layout when sidebar is fixed */}
                    {isFixed && <div className="lg:w-1/4 flex-shrink-0" style={{ width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px` }} />}

                    {/* Sticky Sidebar */}
                    <aside
                        ref={sidebarRef}
                        className={`lg:w-1/4 self-start flex-shrink-0 transition-all duration-200 ${isFixed ? 'lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:z-10' : ''
                            }`}
                        style={isFixed ? {
                            width: `${sidebarWidth}px`,
                            maxWidth: `${sidebarWidth}px`,
                            maxHeight: 'calc(100vh - 4rem)'
                        } : {}}
                    >
                        <div className={isFixed ? 'lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)] lg:pr-4' : ''}>
                            <nav className="flex flex-col space-y-6">
                                {PROGRAMS.map((program) => (
                                    <button
                                        key={program.id}
                                        onClick={() => scrollToSection(program.id)}
                                        className={`flex items-center gap-4 text-left transition-all duration-500 group`}
                                    >
                                        <div className={`w-3 h-3 rounded-none transition-all duration-500 ${activeSection === program.id
                                                ? 'bg-[#1a71f6] scale-110 shadow-[0_0_10px_rgba(26,113,246,0.5)]'
                                                : 'bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-400 dark:group-hover:bg-gray-500'
                                            }`} />
                                        <span className={`text-[11px] font-extrabold tracking-[0.15em] transition-all duration-500 uppercase ${activeSection === program.id ? 'text-[#1a71f6]' : 'text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400'
                                            }`}>
                                            {program.label}
                                        </span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Content Sections */}
                    <main className="lg:w-3/4 space-y-0">

                        {/* Header */}
                        <div className=" flex flex-col items-start gap-4 justify-start">
                            <p className="text-[#3b82f6] dark:text-blue-400 font-bold text-xs tracking-[0.2em] uppercase mb-4 opacity-80 transition-colors duration-300">
                                PROGRAMS WE OFFER
                            </p>


                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-[#1A2B44] dark:text-white leading-[1.1] max-w-4xl text-center lg:text-left transition-colors duration-300">
                                AI Programs that helps to become a <span className="italic">Professional</span>
                            </h2>

                        </div>
                        {PROGRAMS.map((program) => (
                            <section
                                key={program.id}
                                id={program.id}
                                className="border-t border-gray-100 dark:border-gray-800 py-24 md:py-32 flex flex-col md:flex-row gap-12 items-center md:items-start scroll-mt-20 transition-colors duration-300"
                            >
                                <div className="w-full md:w-1/2 md:pr-12">
                                    <h3 className="text-3xl md:text-4xl font-serif font-medium text-[#1A2B44] dark:text-white mb-8 transition-colors duration-300">
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg font-light lg:text-xl transition-colors duration-300">
                                        {program.description}
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2 relative group">
                                    {/* Glassmorphic Shadow Background */}
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

                                    <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] bg-gradient-to-br from-[#4facfe] to-[#00f2fe] p-[1.5px]">
                                        <div className="rounded-[1.9rem] overflow-hidden bg-white/20 backdrop-blur-3xl aspect-[1.4/1] relative">
                                            {/* Representing the mock/code UI in the screenshot */}
                                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                                <div className="w-full h-full bg-[#0B0D11] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/5">
                                                    {/* Browser Header */}
                                                    <div className="h-8 bg-[#1A1D23] flex items-center px-4 gap-2 flex-shrink-0 border-b border-white/5">
                                                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                                                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                                                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                                                        {program.id === 'ai-data-analytics' && (
                                                            <div className="ml-auto text-[10px] font-mono text-gray-500 opacity-60">Stable Diffusion Cold Starts</div>
                                                        )}
                                                    </div>
                                                    <div className="p-6 font-mono text-[13px] md:text-[14px] text-white/90 leading-relaxed selection:bg-blue-500/30">
                                                        {program.id === 'ai-product-management' && (
                                                            <pre className="whitespace-pre-wrap">
                                                                <span className="text-pink-400">01</span>  inference_image = (<br />
                                                                <span className="text-pink-400">02</span>      Image.debian_slim()<br />
                                                                <span className="text-pink-400">03</span>      .uv_pip_install(<br />
                                                                <span className="text-pink-400">04</span>          <span className="text-green-400">"torch==2.7.1"</span>,<br />
                                                                <span className="text-pink-400">05</span>          <span className="text-green-400">"transformers==4.53.2"</span>,<br />
                                                                <span className="text-pink-400">06</span>      )<br />
                                                                <span className="text-pink-400">07</span>  )<br />
                                                                <span className="text-pink-400">08</span>  @app.function(image=inference_image, gpu=<span className="text-green-400">"B200"</span>)<br />
                                                                <span className="text-pink-400">09</span>  <span className="text-blue-400">def</span> <span className="text-yellow-400">inference</span>():<br />
                                                                <span className="text-pink-400">10</span>  ...
                                                            </pre>
                                                        )}
                                                        {program.id === 'ai-data-analytics' && (
                                                            <div className="space-y-4 pt-2">
                                                                <div className="flex justify-between items-center text-green-400">
                                                                    <span>Modal (with memory snapshots)</span>
                                                                    <span className="text-white/60">0.08s</span>
                                                                </div>
                                                                <div className="flex justify-between items-center text-green-400">
                                                                    <span>Modal</span>
                                                                    <span className="text-white/60">0.08s</span>
                                                                </div>
                                                                <div className="flex justify-between items-center text-white/70">
                                                                    <span>Provider A</span>
                                                                    <span className="text-white/60">8s</span>
                                                                </div>
                                                                <div className="flex justify-between items-center text-white/70">
                                                                    <span>Provider B</span>
                                                                    <span className="text-white/60">8s</span>
                                                                </div>
                                                                <div className="flex justify-between items-center text-white/70">
                                                                    <span>Kubernetes + EC2</span>
                                                                    <span className="text-white/60">8s</span>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {program.id === 'generative-ai' && (
                                                            <div className="space-y-6 pt-2">
                                                                <div className="flex items-center gap-4">
                                                                    <span className="bg-white/5 py-1 px-3 rounded-md text-[11px] text-gray-400">gpu= <span className="text-white">"B200"</span></span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-pink-400">01</span>
                                                                    <span className="text-blue-400">@app.function</span>(
                                                                    <span className="bg-white/10 py-1 px-4 rounded-md text-[11px] text-green-400 border border-white/10">gpu=<span className="text-white">"A100"</span></span>
                                                                    )
                                                                </div>
                                                                <div className="flex items-center gap-4 pl-8">
                                                                    <span className="bg-white/5 py-1 px-3 rounded-md text-[11px] text-gray-400">gpu= <span className="text-white">"H100"</span></span>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/5">
                                                                    <div>
                                                                        <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Capacity</div>
                                                                        <div className="text-green-400 text-xs bg-green-400/10 px-2 py-0.5 rounded inline-block">1,500+</div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Regions</div>
                                                                        <div className="flex flex-wrap gap-1 text-[9px] text-gray-400">
                                                                            <span className="bg-white/5 px-2 py-0.5 rounded">eu-west</span>
                                                                            <span className="bg-white/5 px-2 py-0.5 rounded">us-east</span>
                                                                            <span className="bg-white/5 px-2 py-0.5 rounded">...</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {program.id === 'ai-digital-marketing' && (
                                                            <div className="space-y-6">
                                                                <div className="flex justify-between items-center">
                                                                    <div className="flex items-center gap-1.5 font-sans">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                                        <span className="text-[11px] text-gray-300">Live Usage</span>
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-8 pt-4">
                                                                    <div className="space-y-1">
                                                                        <div className="text-[10px] text-gray-500">Time <span className="ml-1 text-white">00:00am</span></div>
                                                                        <div className="text-[10px] text-gray-500">Containers <span className="ml-1 text-white">4</span></div>
                                                                        <div className="text-[10px] text-gray-500">GPU Utilization <span className="ml-1 text-white">87%</span></div>
                                                                    </div>
                                                                </div>
                                                                {/* Visual Graph Mock */}
                                                                <div className="h-28 w-full flex items-end gap-[2px] pt-4 relative">
                                                                    <svg className="absolute inset-x-0 bottom-0 w-full h-full text-green-500/80" preserveAspectRatio="none" viewBox="0 0 100 100">
                                                                        <path d="M0 80 L15 100 L30 85 L45 95 L60 65 L75 75 L90 50 L100 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                                                        <path d="M0 80 L15 100 L30 85 L45 95 L60 65 L75 75 L90 50 L100 60 V100 H0 Z" fill="url(#graph-gradient)" opacity="0.15" />
                                                                        <defs>
                                                                            <linearGradient id="graph-gradient" x1="0" x2="0" y1="0" y2="1">
                                                                                <stop offset="0%" stopColor="currentColor" />
                                                                                <stop offset="100%" stopColor="transparent" />
                                                                            </linearGradient>
                                                                        </defs>
                                                                    </svg>
                                                                    <div className="absolute bottom-8 right-8 bg-[#1A1D23] rounded-md px-3 py-1 border border-white/5 shadow-xl">
                                                                        <span className="text-[10px] text-gray-400">1028 GPUs</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </main>
                </div>
            </div>
        </section>
    );
}
