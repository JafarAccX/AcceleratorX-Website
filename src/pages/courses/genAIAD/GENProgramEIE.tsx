"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check } from "lucide-react";
import { mentors } from "../../../utils/constants";

// --- Data & Constants ---

const SECTIONS = [
    { id: "why-this-program", label: "Why this Program" },
    { id: "curriculum", label: "Learning Journey - Curriculum" },
    { id: "tools", label: "Tools Which You Master as a Professional" },
    { id: "mentors", label: "Mentors" },
    { id: "certificate", label: "The Certificate Recognized By The Industry" },
    { id: "career", label: "High-Paying Career Opportunities" },
    { id: "pricing", label: "Make an Investment for the AI Ready Future" },
];

const GEN_MENTORS = mentors.slice(0, 6);

const CURRICULUM = [
    {
        week: "1",
        topics: ["Foundations of Generative AI", "AI Ecosystem Tools"],
        goal: "Understand GenAI, explore 2025 AI stack, and automate everyday work.",
        skills: ["Prompt Engineering", "AI Productivity", "Tool Exploration"],
    },
    {
        week: "2",
        topics: ["Deep Dive into LLMs", "Prompt Mastery"],
        goal: "Master how LLMs think and guide them precisely with context engineering.",
        skills: ["Context Engineering", "LLM Integration", "Advanced Prompting"],
    },
    {
        week: "3",
        topics: ["Image & Video Generation"],
        goal: "Use AI for high-end visual content creation and diffusion models.",
        skills: ["Midjourney", "Stable Diffusion", "Runway ML"],
    },
    {
        week: "4",
        topics: ["Audio, Voice & Music Generation"],
        goal: "Apply AI to voice synthesis and music creation.",
        skills: ["ElevenLabs", "TTS", "AI Music Synthesis"],
    },
    {
        week: "5-6",
        topics: ["Machine Learning", "AI Ethics & Global Regulations"],
        goal: "Fine-tune models and understand compliance, bias, and safe AI design.",
        skills: ["Fine-tuning", "AI Ethics", "EU AI Act Compliance"],
    },
    {
        week: "7-8",
        topics: ["Vibe Coding", "Assisted AI Development"],
        goal: "Build applications visually with Cursor AI, Replit, and Bolt.new.",
        skills: ["No-code Dev", "Cursor AI", "Cloud Deployment"],
    },
    {
        week: "9-10",
        topics: ["AI Agents & Autonomous Systems"],
        goal: "Master CrewAI, LangGraph, and multi-step reasoning systems.",
        skills: ["LangChain", "CrewAI", "Autonomous Agents"],
    },
    {
        week: "11-12",
        topics: ["Multi-Agent Systems", "AI Automation with n8n"],
        goal: "Automate complex enterprise workflows and connect model-to-tasks.",
        skills: ["n8n", "Workflow Automation", "API Integration"],
    },
];

const GEN_TOOLS = [
    { name: "Chat-GPT", description: "Advanced text generation", image: "/assets/genAITools/gpt4.webp" },
    { name: "Claude", description: "Complex reasoning and analysis", image: "/assets/genAITools/claude.webp" },
    { name: "Midjourney", description: "High-quality art generation", image: "/assets/genAITools/midjourney.webp" },
    { name: "Runway", description: "AI video creation suite", image: "/assets/genAITools/runway.webp" },
    { name: "ElevenLabs", description: "Professional voice synthesis", image: "/assets/genAITools/elevenlabs.webp" },
    { name: "n8n", description: "Workflow automation platform", image: "/assets/genAITools/n8n-seeklogo.webp" },
    { name: "CrewAI", description: "Multi-agent framework", image: "/assets/genAITools/crewai.webp" },
    { name: "LangChain", description: "LLM application framework", image: "/assets/genAITools/langchain.webp" },
    { name: "Cursor AI", description: "AI-powered coding editor", image: "/assets/genAITools/claude.webp" } // Using substitute image if needed
];

// --- Components ---

const AccordionItem = ({ item }: { item: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
            >
                <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                        WEEK {item.week}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900">
                        {item.topics.join(" & ")}
                    </h4>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <div className="p-5 pt-0 text-gray-600 bg-white border-t border-gray-100">
                            <p className="text-sm text-blue-600 italic mb-3 font-medium">{item.goal}</p>
                            <div className="mb-4">
                                <p className="font-semibold text-gray-800 mb-2 text-xs uppercase tracking-wider">Key Skills:</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill: string, sIdx: number) => (
                                        <span key={sIdx} className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function GENProgramEIE() {
    const [activeSection, setActiveSection] = useState("why-this-program");
    const [isFixed, setIsFixed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const sidebarRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

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

                if (!isFixed) {
                    setSidebarWidth(sidebarRef.current.offsetWidth);
                }
            }

            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section.id);
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
        <div className="bg-gradient-to-b from-gray-50 to-white py-20 text-[#0A0F1E]">
            <div ref={containerRef} className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">

                {isFixed && <div className="lg:w-1/4 flex-shrink-0" style={{ width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px` }} />}

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
                        <h2 className="text-3xl font-serif font-bold text-[#0A0F1E] mb-8 leading-tight">
                            AI Programs that help you become a Leader
                        </h2>

                        <nav className="space-y-4 border-l-2 border-gray-200">
                            {SECTIONS.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`block pl-4 py-1 text-left text-sm font-medium transition-all duration-300 w-full ${activeSection === section.id
                                        ? "border-l-2 border-blue-600 -ml-0.5 text-blue-600 font-bold"
                                        : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                <main className="lg:w-3/4 space-y-24">
                    <section id="why-this-program" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-6">Why this Program</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Our Generative AI program is built on the philosophy of "AI-Augmented Performance". We don't just teach models; we teach you how to build autonomous agents and complex automations that multiply your productivity.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Master the 2025 AI Tool Stack (Midjourney, ElevenLabs, n8n)",
                                "Build autonomous AI agents with CrewAI and LangGraph",
                                "Learn 'Vibe Coding' - building apps without writing code",
                                "Strategic understanding of AI Ethics and EU AI Act",
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="h-px w-full bg-gray-200 mt-12"></div>
                    </section>

                    <section id="curriculum" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-6">Learning Journey - Curriculum</h3>
                        <p className="text-gray-600 mb-8">
                            A comprehensive 14-week journey from prompt engineering to full multi-agent automation.
                        </p>
                        <div>
                            {CURRICULUM.map((item, idx) => (
                                <AccordionItem key={idx} item={item} />
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <button className="px-8 py-3 bg-[#FFC107] hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-colors flex items-center gap-2">
                                Download Brochure <ChevronDown size={18} />
                            </button>
                        </div>
                        <div className="h-px w-full bg-gray-200 mt-16"></div>
                    </section>

                    <section id="tools" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Tools Which You Master as a Professional</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {GEN_TOOLS.map((tool, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="bg-gray-50 rounded-lg p-3 inline-block mb-4">
                                        <img src={tool.image || "/placeholder.svg"} alt={tool.name} className="w-8 h-8 object-contain" />
                                    </div>
                                    <div className="mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                            TOOL
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-1">{tool.name}</h4>
                                    <p className="text-xs text-gray-500">{tool.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 mt-16"></div>
                    </section>

                    <section id="mentors" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Mentors from Top AI Labs</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {GEN_MENTORS.map((mentor, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 group hover:shadow-md transition-all"
                                >
                                    <div className="aspect-square bg-gray-200 relative overflow-hidden">
                                        <img
                                            src={mentor.image || "/placeholder.svg"}
                                            alt={mentor.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h4 className="font-bold text-gray-900">{mentor.name}</h4>
                                        <p className="text-sm text-gray-500">{mentor.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 mt-16"></div>
                    </section>

                    <section id="certificate" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">The Certificate Recognized By The Industry</h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <img
                                    src="/assets/programcertificates/Gen_AI_Cert.webp"
                                    alt="Generative AI Certificate"
                                    className="w-full h-auto border-4 border-white"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h4 className="text-xl font-serif font-bold text-gray-900 mb-4">
                                    Professional Certificate in Generative AI & AI Agent Systems
                                </h4>
                                <p className="text-gray-600 text-sm mb-6">
                                    Validate your expertise in the most sought-after skill of the decade. This certificate is recognized by top AI-first startups and tech giants.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Globally recognized AI certification",
                                        "Digital badge for AI Expert verified status",
                                        "Priority hiring access for AI roles",
                                        "Exclusive GenAI Alumni community",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-700">
                                            <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                <Check size={10} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="h-px w-full bg-gray-200 mt-16"></div>
                    </section>

                    <section id="career" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Career Opportunities in the AI Era</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { role: "AI Automation Engineer", pay: "₹22L - 45L", desc: "Design and implement autonomous AI agent workflows." },
                                { role: "GenAI Product Strategist", pay: "₹18L - 35L", desc: "Lead the integration of GenAI into consumer products." },
                                { role: "AI Ethics & Compliance Consultant", pay: "₹15L - 25L", desc: "Ensure AI systems meet global safety and legal norms." },
                                { role: "Prompt Architect", pay: "₹12L - 22L", desc: "Craft complex context-aware prompts for enterprise systems." },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="font-bold text-lg text-gray-900 w-2/3">
                                            {item.role}
                                        </h4>
                                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded whitespace-nowrap">{item.pay}</span>
                                    </div>
                                    <p className="text-gray-500 text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 mt-16"></div>
                    </section>

                    <section id="pricing" className="scroll-mt-24">
                        <h3 className="text-2xl font-serif font-bold mb-8">Make an Investment for your Future</h3>
                        <div className="flex justify-center">
                            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8 max-w-sm w-full text-center hover:shadow-lg transition-shadow">
                                <h4 className="font-bold text-gray-900 mb-2">GenAI Specialist Program</h4>
                                <p className="text-xs text-gray-500 mb-6">14-week intensive training</p>

                                <div className="mb-2">
                                    <span className="text-3xl font-bold text-blue-600">₹ 34,999</span>
                                    <span className="text-gray-400 text-xs ml-1">+ GST</span>
                                </div>

                                <ul className="text-left space-y-3 my-8 text-sm text-gray-600">
                                    {[
                                        "14 week live instructor-led GenAI training",
                                        "Build Your Own AI Agent project",
                                        "Advanced n8n & CrewAI tutorials",
                                        "Lifetime access to content and labs",
                                        "Job readiness & portfolio building",
                                    ].map((feat, i) => (
                                        <li key={i} className="flex gap-2">
                                            <Check size={16} className="text-blue-500 flex-shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                                    Apply for Admission <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
