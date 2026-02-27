"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Linkedin, ArrowRight } from "lucide-react";
import { PremiumButton } from "../../../components/common/PremiumButton";
import EnrollmentModal from "../../../components/EnrollmentModal";

// --- Sections ---
const SECTIONS = [
    { id: "why-this-program", label: "Why this Program" },
    { id: "curriculum", label: "Learning Journey" },
    { id: "tools", label: "Tools Used" },
    { id: "mentors", label: "Tutors" },
    { id: "certificate", label: "Certification" },
    { id: "career", label: "Career Outcomes" },
    { id: "pricing", label: "Pricing" },
];

// --- Curriculum ---
const CURRICULUM = [
    {
        module: "1",
        title: "MCP Servers · Agent Development · LLM Fine-Tuning",
        goal: "Understand how AI agents work — reasoning, planning, memory, tools, and feedback loops.",
        sessions: [
            "AI Agent Development — architecture, reasoning loops, and tool integration.",
            "Coding Agents — writing and extending agent logic from scratch.",
            "MCP Servers — managing model context and state at scale.",
            "LLM Fine-Tuning — adapting foundation models for domain-specific agent tasks.",
        ],
    },
    {
        module: "2",
        title: "MCP & Production Systems · LangChain Applications",
        goal: "Build production-grade agent systems using the leading orchestration stack.",
        sessions: [
            "LangChain deep-dive — chains, memory, retrievers, and tool calling.",
            "MCP in production — context pipelines, session management, and reliability.",
            "Connecting agents to APIs, databases, and real-time data sources.",
            "LangChain applications — end-to-end agent deployment walkthroughs.",
        ],
    },
    {
        module: "3",
        title: "Multi-Agent Communication · Framework Mastery",
        goal: "Orchestrate multiple agents that collaborate to solve complex, multi-step tasks.",
        sessions: [
            "Multi-agent system design — roles, delegation, and coordination patterns.",
            "Agent communication protocols and state sharing.",
            "LangGraph — stateful agent graphs and branching workflows.",
            "CrewAI — role-based agent teams and task orchestration.",
        ],
    },
    {
        module: "4",
        title: "Voice + NVIDIA Stack",
        goal: "Push the boundary of agentic AI with voice interfaces and GPU-accelerated toolchains.",
        sessions: [
            "Voice-enabled agents — speech-to-text, TTS, and conversational pipelines.",
            "NVIDIA AI stack — inference acceleration and production deployment.",
            "End-to-end capstone — build and demonstrate a real agentic AI product.",
            "Portfolio review, interview prep, and career positioning for AI agent roles.",
        ],
    },
];

// --- Tools ---
const TOOLS = [

    {
        name: "LangChain",
        category: "LLM Orchestration",
        image: "/redesign/advance-gen-ai/tools/Langchain.png",
        description: "The leading framework for building LLM-powered chains, tools, and agents.",
    },

    {
        name: "Hugging Face",
        category: "Open ML Hub",
        image: "/redesign/gen-ai/huggingface.png",
        description: "Access thousands of open-source models for agent fine-tuning and experimentation.",
    },
    {
        name: "CrewAI",
        category: "Multi-Agent Framework",
        image: "/redesign/advance-gen-ai/tools/Crewai.png",
        description: "Orchestrate role-based AI agent teams that collaborate on complex tasks.",
    },
    // nvdia, google sdk
    {
        name: "NVIDIA",
        category: "AI Stack",
        image: "/redesign/ai-crash-course/free-nvidia-logo-icon-svg-download-png-2945060.webp",
        description: "NVIDIA AI stack — inference acceleration and production deployment.",
    },
    {
        name: "Google SDK",
        category: "AI Stack",
        image: "/redesign/ai-crash-course/agent-development-kit.png",
        description: "Google SDK — inference acceleration and production deployment.",
    },
    {
        name: "Langfuse",
        category: "LLM Observability",
        image: "/redesign/ai-crash-course/langfuse-color.png",
        description: "Open-source LLM observability — trace, debug and evaluate your AI agents in production.",
    },
    {
        name: "Langsmith",
        category: "LLM Debugging",
        image: "/redesign/ai-crash-course/langsmith-color.png",
        description: "Debug, test and monitor LangChain-based agents and pipelines end-to-end.",
    },

];

// --- Mentors ---
const MENTORS = [
    // ruchir
    {
        name: "Ruchir Rana",
        role: "PM at AcceleratorX",
        image: "/redesign/ai-pm/ai-pm-mentors/Ruchir Rana.png",
        linkedin: "https://www.linkedin.com/in/ruchir-rana007",
    },
    //  nitya, pranali, ashu
    {
        name: "Nitya Sagar",
        role: "Software Engineer (DS) at Apple",
        image: "/redesign/ai-pm/ai-pm-mentors/Nitya Sagar.png",
        linkedin: "https://www.linkedin.com/in/nitya-sagar/",
    },
    {
        name: "Pranali Bose",
        role: "Senior GenAI Solutions Architect",
        image: "/redesign/gen-ai/gen-ai-mentors/Pranali Bose.png",
        linkedin: "https://www.linkedin.com/in/pranali-bose/",
    },
    {
        name: "Ashu Mishra",
        role: "Senior PM at Zigram",
        experience: "10+ years",
        image: "/redesign/ai-crash-course/Ashu.webp",
        alt: "product management certification mentor Swati",
        linkedin: "https://www.linkedin.com/in/ashumish/",
        transitions: "Over 100+",
    },

];

// --- Career Roles ---
const CAREER_ROLES = [
    {
        title: "AI Agent Engineer",
        salary: "₹25L – 40L",
        description: "Build autonomous agents and intelligent systems",
        color: "text-orange-400",
        bg: "bg-orange-900/20",
        border: "border-orange-800/30",
    },
    {
        title: "AI Automation Specialist",
        salary: "₹20L – 30L",
        description: "Replace manual workflows with agent-based systems",
        color: "text-orange-400",
        bg: "bg-orange-900/20",
        border: "border-orange-800/30",
    },
    {
        title: "AI Scientist",
        salary: "₹50L – 80L",
        description: "Design systems that drive insights and decisions",
        color: "text-orange-400",
        bg: "bg-orange-900/20",
        border: "border-orange-800/30",
    },
    {
        title: "AI Consultant & Strategist",
        salary: "₹20L – 60L",
        description: "Help companies adopt generative and agentic AI at scale",
        color: "text-orange-400",
        bg: "bg-orange-900/20",
        border: "border-orange-800/30",
    },
];

// --- Accordion ---
const AccordionItem = ({ item, index }: { item: typeof CURRICULUM[0]; index: number }) => {
    const [isOpen, setIsOpen] = useState(index === 0);

    return (
        <div className="border border-gray-100 dark:border-[#848484]/30 rounded-lg mb-4 overflow-hidden transition-all duration-300 hover:border-orange-600/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-[#171717] hover:bg-gray-50 dark:hover:bg-[#1f1f1f] transition-colors text-left"
            >
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="font-sans text-[10px] font-bold text-orange-600 bg-orange-600/10 px-3 py-1 rounded-full uppercase tracking-widest">
                            MODULE {item.module}
                        </span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                    </h4>
                    {item.goal && (
                        <p className="font-sans text-xs text-gray-500 dark:text-gray-400 mt-1 italic">{item.goal}</p>
                    )}
                </div>
                <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4 ${isOpen
                        ? "bg-orange-600 text-white rotate-180"
                        : "bg-gray-100 dark:bg-[#252525] text-gray-500 hover:bg-orange-600 hover:text-white"
                        }`}
                >
                    <ChevronDown size={20} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 bg-white dark:bg-[#171717] border-t border-gray-50 dark:border-[#848484]/30 pt-4">
                            <ul className="space-y-2">
                                {item.sessions.map((session, si) => (
                                    <li key={si} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-600 flex-shrink-0" />
                                        {session}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Main Component ---
export default function ProgramAICC() {
    const [activeSection, setActiveSection] = useState("why-this-program");
    const [isFixed, setIsFixed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const sidebarRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [whyExpanded, setWhyExpanded] = useState(false);

    const handleModalClose = () => setIsModalOpen(false);
    const handleModalSubmit = () => handleModalClose();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
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
                if (!isFixed) setSidebarWidth(sidebarRef.current.offsetWidth);
            }
            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };
        if (sidebarRef.current) setSidebarWidth(sidebarRef.current.offsetWidth);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll();
        return () => { window.removeEventListener("scroll", handleScroll); window.removeEventListener("resize", handleScroll); };
    }, [isFixed]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    };

    return (
        <div className="dark:bg-[#000000] py-20 text-[#0A0F1E] dark:text-white transition-colors duration-300">
            <div ref={containerRef} className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">
                {isFixed && <div className="lg:w-1/4 flex-shrink-0" style={{ width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px` }} />}
                <aside
                    ref={sidebarRef}
                    className={`lg:w-1/4 self-start flex-shrink-0 transition-all duration-200 ${isFixed ? "lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:z-10" : ""}`}
                    style={isFixed ? { width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px`, maxHeight: "calc(100vh - 4rem)" } : {}}
                >
                    <div className={isFixed ? "lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)] lg:pr-4" : ""}>
                        <h2 className="font-heading text-3xl font-bold text-[#0A0F1E] dark:text-white mb-8 leading-tight">
                            AI Programs that helps to become a Professional
                        </h2>
                        <nav className="space-y-4 border-l-2 border-gray-200 dark:border-[#848484]/30">
                            {SECTIONS.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`font-sans block pl-4 py-1 text-left text-sm font-medium transition-all duration-300 w-full ${activeSection === section.id
                                        ? "border-l-2 border-orange-600 -ml-0.5 text-orange-600 font-bold"
                                        : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                        }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                <main className="lg:w-3/4 space-y-24">

                    {/* Why This Program */}
                    <section id="why-this-program" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-6 text-orange-600">Why this Program</h3>
                        <div className="bg-[#171717] border border-[#848484]/30 rounded-2xl p-6 mb-6">
                            <p className="font-sans text-gray-200 leading-relaxed mb-4 text-base">
                                This is not a generic AI course. AcceleratorX is designed to teach you how AI agents are actually built and deployed in production.
                            </p>
                            <p className="font-sans text-gray-400 text-sm mb-4">
                                You'll go beyond prompts and learn how to create:
                            </p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "Learn agentic architecture from scratch",
                                    "Build tools-integrated AI systems",
                                    "Multi-agent systems that collaborate",
                                    "AI workflows that replace manual processes",
                                ].map((item, i) => (
                                    <li key={i} className="font-sans flex items-start gap-3 text-gray-300 text-sm">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="font-sans text-sm font-bold text-gray-200 mb-3">What You'll Learn</p>
                            <ul className="space-y-2 mb-4">
                                {[
                                    "Agent design patterns used by AI startups",
                                    "LLM orchestration and reasoning flows",
                                    "Agent safety, reliability, and evaluation",
                                    "Deploying agents into real products",
                                ].map((item, i) => (
                                    <li key={i} className="font-sans flex items-start gap-3 text-gray-400 text-sm">
                                        <Check size={14} className="text-orange-400 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {!whyExpanded && (
                                <button
                                    onClick={() => setWhyExpanded(true)}
                                    className="font-sans flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 transition-colors font-medium mt-2"
                                >
                                    Read More <ChevronDown size={16} />
                                </button>
                            )}
                            <AnimatePresence>
                                {whyExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="font-sans text-gray-400 text-sm mt-4 leading-relaxed">
                                            The demand for AI Agent Engineers, AI Automation Specialists, and AI Architects is growing faster than any other tech segment. This program is your direct path into those roles — with hands-on projects, real systems, and mentorship from people who build these systems every day.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-8 transition-colors duration-300"></div>
                    </section>

                    {/* Learning Journey */}
                    <section id="curriculum" className="scroll-mt-24 relative">

                        <h3 className="font-heading text-2xl font-bold mb-2 dark:text-white transition-colors duration-300">
                            Learning Journey – Agentic AI Curriculum
                        </h3>
                        <p className="font-sans text-gray-500 dark:text-gray-400 mb-8 text-sm">
                            4 intensive modules • hands-on agent projects • production-ready skills
                        </p>
                        <div className="space-y-4">
                            {CURRICULUM.map((item, idx) => (
                                <AccordionItem key={idx} item={item} index={idx} />
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <PremiumButton
                                onClick={() => setIsModalOpen(true)}
                                icon={<ChevronDown size={18} className="transition-transform group-hover:translate-y-1 text-orange-400 group-hover:text-white" />}
                            >
                                Download Full Curriculum
                            </PremiumButton>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    {/* Skillverse */}
                    <div className="w-full mb-16">
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">Skillverse You Acually Master</h3>
                        <img
                            src="/redesign/ai-crash-course/ai-crash-course-skillverse.webp"
                            alt="Skillverse You Acually Master"
                            className="w-full h-auto object-contain rounded-xl"
                        />
                    </div>

                    {/* Tools */}
                    <section id="tools" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">Tools Which You Master as a Professional</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                            {TOOLS.map((tool, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#111111] border border-[#252525] rounded-2xl p-2 hover:border-[#333333] transition-all duration-300 group"
                                >
                                    <div className="p-2 mb-4 aspect-[16/10] flex items-center justify-center overflow-hidden">
                                        <img
                                            src={tool.image}
                                            alt={tool.name}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="font-sans inline-block px-3 py-1 bg-gray-300 rounded text-[10px] font-bold text-black uppercase tracking-wider mb-4">
                                        {tool.category}
                                    </div>
                                    <h4 className="font-heading text-xl font-bold text-white mb-2">{tool.name}</h4>
                                    <p className="font-sans text-xs text-gray-400 leading-relaxed">{tool.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    {/* Mentors */}
                    <section id="mentors" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white">Learn from the Industry Experts</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {MENTORS.map((mentor, idx) => (
                                <div key={idx} className="bg-gray-50 relative dark:bg-[#171717] rounded-xl overflow-hidden border border-gray-100 dark:border-[#848484]/30 group hover:shadow-md transition-all duration-300">
                                    <div className="aspect-square relative overflow-hidden">
                                        <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h4 className="font-heading font-bold text-gray-900 dark:text-white">{mentor.name}</h4>
                                        <p className="font-sans text-sm text-gray-500 dark:text-gray-400 mb-3">{mentor.role}</p>
                                        {mentor.linkedin && (
                                            <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                                <a
                                                    href={mentor.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[#0077b5] hover:text-[#005582] font-semibold text-xs transition-colors"
                                                >
                                                    <Linkedin size={14} fill="currentColor" />
                                                    <span>LinkedIn</span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    {/* Certificate */}
                    <section id="certificate" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white">Industry-Recognized Certification</h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-[#171717] rounded-2xl p-4 transition-colors duration-300">
                            <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <img src="/redesign/ai-crash-course/ai-crash-course.jpg" alt="AI Crash Course Certificate" className="w-full h-auto rounded-md shadow-xl" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4">Agentic AI Practitioner Certificate</h4>
                                <p className="font-sans text-gray-600 dark:text-gray-400 text-sm mb-6">
                                    Validates your ability to design, build, and deploy real-world AI agent systems — recognized by employers across the AI industry.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Agentic architecture & LLM orchestration",
                                        "Multi-agent system design",
                                        "Production deployment of AI agents",
                                        "LangChain, LangGraph & CrewAI proficiency",
                                    ].map((f, i) => (
                                        <li key={i} className="font-sans flex gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                            <div className="mt-0.5 w-4 h-4 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                                <Check size={10} />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    {/* Career Outcomes */}
                    <section id="career" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white">High-Paying Career Opportunities</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {CAREER_ROLES.map((role, i) => (
                                <div key={i} className={`dark:bg-[#171717] bg-white border dark:${role.border} border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300`}>
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="font-heading font-bold text-lg text-gray-900 dark:text-white w-2/3">{role.title}</h4>
                                        <span className={`font-sans text-xs font-bold px-2 py-1 rounded ${role.bg} ${role.color}`}>
                                            {role.salary}
                                        </span>
                                    </div>
                                    <p className="font-sans text-gray-500 dark:text-gray-400 text-sm">{role.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    {/* Pricing */}
                    <section id="pricing" className="scroll-mt-24 relative">
                        <div className="text-center mb-16">
                            <h3 className="font-heading text-4xl font-bold mb-4 dark:text-white">Make an Investment for the AI Ready Future</h3>
                            <p className="font-sans text-gray-500 dark:text-gray-400 text-sm">Total Investment</p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-5xl mx-auto">


                            {/* Advanced AI Crash Course Plan */}
                            <div
                                className="relative rounded-[10px] p-[1px] w-full sm:w-[340px]"
                                style={{
                                    background: "linear-gradient(180deg, #EA580C 0%, rgba(234, 88, 12, 0) 100%)",
                                    boxShadow: "4px 4px 10px 0px #EA580C66",
                                }}
                            >
                                <div
                                    className="bg-[#171717] rounded-[9px] p-6 h-full flex flex-col items-center text-center relative overflow-hidden"
                                    style={{ boxShadow: "-4px -4px 10px 0px #EA580C66" }}
                                >
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{ background: "linear-gradient(142.89deg, rgba(234, 88, 12, 0.15) 0%, rgba(234, 88, 12, 0) 100%)" }}
                                    />
                                    <div className="absolute top-0 right-0 bg-orange-600 text-black text-[10px] font-bold px-2 py-0.5 rounded-full z-10 uppercase tracking-wider">
                                        Best Value
                                    </div>

                                    <h4 className="font-heading font-bold text-white text-2xl mb-2 relative z-10">Advanced AI Crash Course</h4>
                                    <p className="font-sans text-gray-300 text-sm mb-3 relative z-10">10-week agentic AI program</p>

                                    <div className="mb-6 relative z-10">
                                        <span className="font-heading text-4xl font-bold text-orange-600">₹ 14,999</span>
                                        <span className="font-sans text-gray-400 text-sm ml-1">+ GST</span>
                                    </div>

                                    <ul className="font-sans text-left space-y-2 mb-6 text-sm text-gray-300 w-full relative z-10">
                                        {[
                                            "Hands-on AI agent projects",
                                            "Industry-recognized certification",
                                            "Career guidance & mentorship",
                                            "Community access",
                                            "Interview preparation",
                                            "20 Live Sessions",
                                            "100% Practical Learning",
                                            "Session Recordings Included",
                                            "Real AI Systems & Agents",
                                            "Mentor Guidance",
                                        ].map((f, i) => (
                                            <li key={i} className="flex gap-2 items-start">
                                                <Check size={13} className="text-orange-500 mt-0.5 flex-shrink-0" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="font-sans w-full py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10"
                                    >
                                        Apply Now <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </section>

                </main>
            </div>

            <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />
        </div>
    );
}
