import { useState, useEffect, useRef } from "react";

const PROGRAMS = [
    {
        id: "ai-product-management",
        label: "AI IN PRODUCT MANAGEMENT",
        title: "AI Product Management",
        description: "Design, build and scale AI-powered products using modern product frameworks, real case studies and hands-on roadmaps",
        subHeading: "What This Means for You:",
        paragraph2: "Step into strategic product roles, lead AI initiatives, and confidently drive product decisions backed by data.",
        image: "/assets/week1.webp"
    },
    {
        id: "ai-data-analytics",
        label: "AI IN DATA ANALYTICS",
        title: "AI in Data Analytics",
        description: "Go beyond dashboards. Learn AI-powered analytics, storytelling and business intelligence that influence real decisions.",
        subHeading: "What This Means for You:",
        paragraph2: "Become the person leadership turns to for insights — and unlock high-growth analytics opportunities.",
        image: "/assets/week2.webp"
    },
    {
        id: "generative-ai",
        label: "GENERATIVE AI",
        title: "Generative AI",
        description: "Master prompt engineering, LLM workflows and AI automation tools — without needing to code.",
        subHeading: "What This Means for You:",
        paragraph2: "Automate workflows, increase productivity, and position yourself as an AI-first professional.",
        image: "/assets/week3.webp"
    },
    {
        id: "ai-digital-marketing",
        label: "AI DIGITAL MARKETING",
        title: "AI in Digital Marketing",
        description: "Use AI to optimize campaigns, scale growth and improve marketing ROI with smarter automation.",
        subHeading: "What This Means for You:",
        paragraph2: "Drive performance, improve acquisition metrics and lead modern marketing strategies.",
        image: "/assets/week7.webp"
    },
    {
        id: "advanced-generative-ai",
        label: "ADVANCED GENERATIVE AI",
        title: "Advanced Generative AI",
        description: "Gen AI and Agentic AI specialisation is designed for beginners, providing a no-code pathway to mastering generative AI, AI Agents, and the powerful tools of automation. Secure your expertise with India’s first solution-based AI automation program.",
        image: "/redesign/main-page/adv-gen-ai.webp"
    },
    {
        id: "data-science",
        label: "DATA SCIENCE",
        title: "Data Science",
        description: "Nano-Degree in AI Digital Marketing teaches you how to utilise AI growth, AI marketing automation, and AI performance marketing through live classes, hands-on projects, and a real capstone challenge.",
        image: "/redesign/main-page/data-science.webp"
    },
    {
        id: "product-analytics",
        label: "PRODUCT ANALYTICS",
        title: "Product Analytics",
        description: "Nano-Degree in AI Digital Marketing teaches you how to utilise AI growth, AI marketing automation, and AI performance marketing through live classes, hands-on projects, and a real capstone challenge.",
        image: "/redesign/main-page/product-analytics.webp"
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
        <section id="programs-offered" className="bg-white dark:bg-[#000000] py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300">
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
                                        <span className={`font-heading text-sm md:text-base font-bold uppercase tracking-wider opacity-80 transition-colors duration-300 ${activeSection === program.id ? 'text-[#1a71f6] dark:text-blue-400' : 'text-[#0D47A1] dark:text-gray-600 group-hover:text-[#1a71f6] dark:group-hover:text-blue-400'
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
                            <h3 className="font-heading text-sm md:text-base font-bold text-[#0D47A1] dark:text-blue-400 uppercase tracking-wider text-center mx-auto opacity-80 transition-colors duration-300">
                                PROGRAMS WE OFFER
                            </h3>


                            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-light text-[#1A2B44] dark:text-white leading-[1.1] max-w-4xl text-center lg:text-left transition-colors duration-300">
                                AI Programs that helps to become a <span className="">Professional</span>
                            </h2>

                        </div>
                        {PROGRAMS.map((program) => (
                            <section
                                key={program.id}
                                id={program.id}
                                className="border-t border-gray-100 dark:border-gray-800 py-24 md:py-32 flex flex-col md:flex-row gap-12 items-center md:items-start scroll-mt-20 transition-colors duration-300"
                            >
                                <div className="w-full md:w-1/2 md:pr-12">
                                    <h3 className="font-heading text-3xl md:text-4xl font-medium text-[#1A2B44] dark:text-white mb-8 transition-colors duration-300">
                                        {program.title}
                                    </h3>
                                    <p className="font-sans text-gray-500 dark:text-gray-400 leading-relaxed text-lg font-light lg:text-xl transition-colors duration-300">
                                        {program.description}
                                    </p>
                                    {(program as any).subHeading && (
                                        <h4 className="font-heading text-xl md:text-2xl font-bold text-[#1A2B44] dark:text-white mt-12 mb-4 transition-colors duration-300">
                                            {(program as any).subHeading}
                                        </h4>
                                    )}
                                    {(program as any).paragraph2 && (
                                        <p className="font-sans text-gray-500 dark:text-gray-400 leading-relaxed text-lg font-light lg:text-xl transition-colors duration-300">
                                            {(program as any).paragraph2}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full md:w-1/2 relative group">
                                    {/* Glassmorphic Shadow Background */}
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent opacity-0  blur-2xl transition-opacity duration-700" />

                                    <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] aspect-[1.4/1]">
                                        {/* Background Image */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{ backgroundImage: "url('/redesign/main-page/card-bg.webp')" }}
                                        />

                                        {/* Program-specific Overlay Image */}
                                        <div className="absolute inset-0 flex items-center justify-center p-8">
                                            {program.id === 'ai-product-management' && (
                                                <img
                                                    src="/redesign/main-page/ai-pm.webp"
                                                    alt="AI Product Management"
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
                                            {program.id === 'ai-data-analytics' && (
                                                <img
                                                    src="/redesign/main-page/da.webp"
                                                    alt="AI Data Analytics"
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
                                            {program.id === 'generative-ai' && (
                                                <img
                                                    src="/redesign/main-page/ganai.webp"
                                                    alt="Generative AI"
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
                                            {program.id === 'ai-digital-marketing' && (
                                                <img
                                                    src="/redesign/main-page/dm.webp"
                                                    alt="AI Digital Marketing"
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
                                            {program.id === 'advanced-generative-ai' && (
                                                <img
                                                    src="/redesign/main-page/adv-gen-ai.webp"
                                                    alt="Advanced Generative AI"
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
                                            {program.id === 'data-science' && (
                                                <img
                                                    src="/redesign/main-page/data-science.webp"
                                                    alt="Data Science"
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
                                            {program.id === 'product-analytics' && (
                                                <img
                                                    src="/redesign/main-page/product-analytics.webp"
                                                    alt="Product Analytics"
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
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
