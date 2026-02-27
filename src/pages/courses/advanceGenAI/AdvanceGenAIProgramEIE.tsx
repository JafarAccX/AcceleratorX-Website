"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, ArrowRight, Linkedin } from "lucide-react";
import toast from 'react-hot-toast';
import { useUser } from '../../../context/UserContext';
import { PremiumButton } from "../../../components/common/PremiumButton";
import EnrollmentModal from "../../../components/EnrollmentModal";

declare global {
    interface Window {
        Razorpay: any;
    }
}



const SECTIONS = [
    { id: "why-this-program", label: "Why This Program" },
    { id: "curriculum", label: "Learning Journey" },
    { id: "tools", label: "Tools & Agent Stack" },
    { id: "mentors", label: "Mentors" },
    { id: "certificate", label: "Certification" },
    { id: "career", label: "Career Outcomes" },
    { id: "pricing", label: "Pricing" },
];

const CURRICULUM = [
    {
        week: "1",
        topics: ["Foundations of Advanced GenAI Engineering"],
        goal: "Master the underlying architecture and data pipelines required for model training.",
        skills: [
            "Session 1: The Architecture of Modern LLMs",
            "Session 2: Data Pipelines for AI Training",
            "Session 3: Training a Small Transformer from Scratch",
        ],
    },
    {
        week: "2",
        topics: ["Fine-Tuning and Evaluating LLMs"],
        goal: "Scale up models using advanced fine-tuning techniques and optimization.",
        skills: [
            "Session 4: Scaling Up – Fine-Tuning Open-Source Models",
            "Session 5: Evaluation and Optimization",
            "Session 6: Efficient Model Serving",
        ],
    },
    {
        week: "3",
        topics: ["Building a RAG System from Scratch"],
        goal: "Implement local retrieval-augmented generation without external APIs.",
        skills: [
            "Session 7: Introduction to RAG Architecture",
            "Session 8: Implementing Vector Search and Indexing",
            "Session 9: Hybrid Retrieval and Context Enhancement",
        ],
    },
    {
        week: "4",
        topics: ["Scaling and Optimizing RAG Systems"],
        goal: "Manage factual consistency and large-scale knowledge ingestion.",
        skills: [
            "Session 10: Knowledge Ingestion and Context Management",
            "Session 11: Evaluation and Factual Consistency in RAG",
            "Session 12: Multi-Domain Knowledge Bases",
        ],
    },
    {
        week: "5",
        topics: ["Multimodal Generative AI"],
        goal: "Integrate text, image, and speech into unified AI systems.",
        skills: [
            "Session 13: Image + Text Systems (CLIP & BLIP)",
            "Session 14: Audio and Speech Systems (ASR + TTS)",
            "Session 15: Multimodal Integration Projects",
        ],
    },
    {
        week: "6",
        topics: ["Core Agent Engineering (From Scratch)"],
        goal: "Build autonomous task-oriented systems with local memory.",
        skills: [
            "Session 16: Agent Fundamentals",
            "Session 17: Memory, Tools, and State Management",
            "Session 18: Building a Local Task Automation Agent",
        ],
    },
    {
        week: "7",
        topics: ["Multi-Agent Collaboration"],
        goal: "Design complex architectures where multiple agents interact.",
        skills: [
            "Session 19: Multi-Agent Architecture",
            "Session 20: Using CrewAI / LangGraph for Agent Collaboration",
            "Session 21: Domain-Specific Agents",
        ],
    },
    {
        week: "8",
        topics: ["Infrastructure, Safety, and Deployment"],
        goal: "Secure and deploy your local models for production environments.",
        skills: [
            "Session 22: Containerization and Model Deployment",
            "Session 23: Monitoring and Logging AI Systems",
            "Session 24: Safety, Bias, and Governance",
        ],
    },
    {
        week: "9",
        topics: ["Capstone Development"],
        goal: "Architect and implement an end-to-end local AI solution.",
        skills: [
            "Session 25: Capstone Ideation and Architecture Design",
            "Session 26: Development & Implementation Support",
            "Session 27: Testing, Validation, and Demo Rehearsal",
        ],
    },
    {
        week: "10",
        topics: ["Bonus Module: Specialized AI Agent Systems"],
        goal: "Deploy specialized autonomous suites for research and operations.",
        skills: [
            "Session 28: Research & Knowledge Agents",
            "Session 29: Operational Agents",
            "Session 30: Collaborative Ecosystem Agents",
            "Capstone Demo: Showcase a domain-specific AI ecosystem.",
        ],
    },
];



const TOOLS = [
    {
        name: "Llama 3",
        category: "LLM",
        image: "/redesign/advance-gen-ai/tools/Llama3.png",
        description: "Meta's state-of-the-art open source language model."
    },
    {
        name: "Mistral AI",
        category: "LLM",
        image: "/redesign/advance-gen-ai/tools/Mistralai.png",
        description: "High-performance open weights model."
    },
    {
        name: "Gemma",
        category: "LLM",
        image: "/redesign/advance-gen-ai/tools/Gemma.png",
        description: "Build AI with Google's lightweight open models."
    },
    {
        name: "Ollama",
        category: "Local Deployment",
        image: "/redesign/advance-gen-ai/tools/Ollama.png",
        description: "Run LLMs locally on your own machine."
    },
    {
        name: "LangChain",
        category: "Framework",
        image: "/redesign/advance-gen-ai/tools/Langchain.png",
        description: "Building applications with LLMs through chaining."
    },
    {
        name: "LangGraph",
        category: "Agents",
        image: "/redesign/advance-gen-ai/tools/LangGraph.png",
        description: "Build stateful, multi-actor applications with LLMs."
    },
    {
        name: "CrewAI",
        category: "Agents",
        image: "/redesign/advance-gen-ai/tools/Crewai.png",
        description: "Framework for orchestrating autonomous AI agents."
    },
    {
        name: "Transformers",
        category: "Library",
        image: "/redesign/advance-gen-ai/tools/Transformers.png",
        description: "State-of-the-art Machine Learning for Pytorch, TensorFlow, and JAX."
    },
    {
        name: "PyTorch",
        category: "Framework",
        image: "/redesign/advance-gen-ai/tools/pytorch.png",
        description: "Open source machine learning framework."
    },
    {
        name: "CUDA",
        category: "Compute",
        image: "/redesign/advance-gen-ai/tools/Cuda.png",
        description: "Parallel computing platform and programming model."
    },
    {
        name: "Python",
        category: "Language",
        image: "/redesign/advance-gen-ai/tools/Python.png",
        description: "The primary programming language for AI."
    },
    {
        name: "PEFT",
        category: "Fine-tuning",
        image: "/redesign/advance-gen-ai/tools/Peft.png",
        description: "Parameter-Efficient Fine-Tuning methods."
    },
    {
        name: "LoRA",
        category: "Fine-tuning",
        image: "/redesign/advance-gen-ai/tools/lora.png",
        description: "Low-Rank Adaptation of Large Language Models."
    },
    {
        name: "BitsAndBytes",
        category: "Optimization",
        image: "/redesign/advance-gen-ai/tools/Bitsandbytes.png",
        description: "Quantization enabling massive models on accessible hardware."
    },
    {
        name: "Datasets",
        category: "Data",
        image: "/redesign/advance-gen-ai/tools/Datasets.png",
        description: "Hugging Face library for accessing ML datasets."
    },
    {
        name: "ChromaDB",
        category: "Vector DB",
        image: "/redesign/advance-gen-ai/tools/Chroma.png",
        description: "Open-source embedding database."
    },
    {
        name: "BGE-M3",
        category: "Embeddings",
        image: "/redesign/advance-gen-ai/tools/BGEm3.png",
        description: "Multi-lingual, Multi-Functionality, Multi-Granularity embeddings."
    },
    {
        name: "Instructor XL",
        category: "Embeddings",
        image: "/redesign/advance-gen-ai/tools/Instructorxl.png",
        description: "Instruction-finetuned text embeddings."
    },
    {
        name: "BLIP",
        category: "Multimodal",
        image: "/redesign/advance-gen-ai/tools/Blip.png",
        description: "Bootstrapping Language-Image Pre-training."
    },
    {
        name: "CLIP",
        category: "Multimodal",
        image: "/redesign/advance-gen-ai/tools/Clipsai.png",
        description: "Contrastive Language-Image Pre-Training."
    },
    {
        name: "Gradio",
        category: "UI",
        image: "/redesign/advance-gen-ai/tools/Gradio.png",
        description: "Build and share Machine Learning apps."
    },
    {
        name: "FastAPI",
        category: "Deployment",
        image: "/redesign/advance-gen-ai/tools/Fastapi.png",
        description: "Modern, fast web framework for building APIs."
    },
    {
        name: "Docker",
        category: "Deployment",
        image: "/redesign/advance-gen-ai/tools/Docker.png",
        description: "Platform for developing, shipping, and running apps."
    },
    {
        name: "LangFuse",
        category: "Observability",
        image: "/redesign/advance-gen-ai/tools/Langfuse.png",
        description: "Open source LLM engineering platform."
    },
    {
        name: "Weights & Biases",
        category: "Tracking",
        image: "/redesign/advance-gen-ai/tools/Weights&Biases.png",
        description: "Developer tools for machine learning."
    }
];


const MENTORS = [
    {
        name: "Anjali Sharma",
        role: "AI Product Manager @ Mesha",
        image: "/redesign/advance-gen-ai/gen-ai-mentors/Anjali Sharma.png",
        linkedin: "https://www.linkedin.com/in/anjalisharmaaa/",
    },
    {
        name: "Dr. Prashant",
        role: "AI Research Scientist & Professor",
        image: "/redesign/advance-gen-ai/gen-ai-mentors/Dr. Prashant.png",
        linkedin: "https://www.linkedin.com/in/dr-prashant/",
    },
    {
        name: "Nitish M L Setty",
        role: "GenAI & ML Lead",
        image: "/redesign/advance-gen-ai/gen-ai-mentors/Nitish M L Setty.png",
        linkedin: "https://www.linkedin.com/in/nitish-m-l-setty/",
    },
    {
        name: "Pranali Bose",
        role: "Senior GenAI Solutions Architect",
        image: "/redesign/advance-gen-ai/gen-ai-mentors/Pranali Bose.png",
        linkedin: "https://www.linkedin.com/in/pranali-bose/",
    },
];

const AccordionItem = ({ item }: { item: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-100 dark:border-[#848484]/30 rounded-lg mb-4 overflow-hidden transition-all duration-300 hover:border-[#FC6401]/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-[#171717] hover:bg-gray-50 dark:hover:bg-[#1f1f1f] transition-colors text-left"
            >
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="font-sans text-[10px] font-bold text-[#FC6401] bg-[#FC6401]/10 px-3 py-1 rounded-full uppercase tracking-widest">
                            WEEK {item.week}
                        </span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white">{item.topics.join(" & ")}</h4>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#FC6401] text-white rotate-180' : 'bg-gray-100 dark:bg-[#252525] text-gray-500 hover:bg-[#FC6401] hover:text-white'}`}>
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
                        <div className="p-6 pt-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-[#171717] border-t border-gray-50 dark:border-[#848484]/30">
                            <p className="font-sans text-base text-gray-700 dark:text-gray-200 mb-6 font-medium leading-relaxed">
                                {item.goal}
                            </p>
                            <div className="grid  gap-8">
                                <div>
                                    <p className="font-bold mb-3 text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider">What you'll learn:</p>
                                    <ul className="space-y-2">
                                        {item.skills.map((skill: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FC6401] flex-shrink-0" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function AdvanceGenAIProgramEIE() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated } = useUser();

    const [activeSection, setActiveSection] = useState("why-this-program");
    const [isFixed, setIsFixed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const sidebarRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDownload, setIsDownload] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
        setIsDownload(false);
    };

    const handleModalSubmit = () => {
        if (isDownload) {
            // Logic for roadmap download
        }
        handleModalClose();
    };

    // Using dummy IDs for now or mapping based on constants if available



    const handleBuyCourse = async (_amount: number) => {
        if (!isAuthenticated) {
            navigate('/sign-in', { state: { from: location } });
            return;
        }

        // Enrollment handling
        toast.error("Enrollment for this advanced program will be open soon!");
    };

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
        <div className="dark:bg-[#000000] py-20 text-[#0A0F1E] dark:text-white transition-colors duration-300">
            <div ref={containerRef} className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">

                {isFixed && <div className="lg:w-1/4 flex-shrink-0" style={{ width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px` }} />}

                <aside
                    ref={sidebarRef}
                    className={`lg:w-1/4 self-start flex-shrink-0 transition-all duration-200 ${isFixed ? 'lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:z-10' : ''}`}
                    style={isFixed ? {
                        width: `${sidebarWidth}px`,
                        maxWidth: `${sidebarWidth}px`,
                        maxHeight: 'calc(100vh - 4rem)'
                    } : {}}
                >
                    <div className={isFixed ? 'lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)] lg:pr-4' : 'relative'}>
                        <img src="/redesign/advance-gen-ai/astroid.webp" alt="ai" className="absolute -top-16 left-0 opacity-40 animate-float" />
                        <h2 className="font-heading text-3xl font-bold text-[#0A0F1E] dark:text-white mb-8 leading-tight">
                            Build AI Agents. <br /><span className=" font-light">Not Just AI Skills.</span>
                        </h2>
                        <nav className="space-y-4 border-l-2 border-gray-200 dark:border-[#848484]/30">
                            {SECTIONS.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`block pl-4 py-1 text-left text-sm transition-all duration-300 w-full relative group ${activeSection === section.id ? "border-l-2 border-[#FC6401] -ml-0.5 text-[#FC6401] font-bold" : "text-gray-500 hover:text-gray-900"}`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                <main className="lg:w-3/4 space-y-32">
                    <section id="why-this-program" className="scroll-mt-24">
                        <h3 className="font-heading text-5xl font-bold mb-8">AI Programs that helps to
                            become a Professional</h3>
                        <p className="font-sans text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10 font-light">
                            This is not a generic AI course. AcceleratorX is designed to teach you how AI agents are actually built and deployed in production. You’ll go beyond prompts and learn how to create autonomous, tool-using agents and multi-agent systems.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Autonomous agents with memory and goals",
                                "Tool-using agents that take real actions",
                                "Multi-agent systems that collaborate",
                                "AI workflows that replace manual processes",
                                "Agent design patterns used by AI startups",
                                "LLM orchestration and reasoning flows",
                                "Agent safety, reliability, and evaluation",
                                "Deploying agents into real products"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 bg-gray-50 dark:bg-[#171717] p-5 rounded-xl border border-gray-100 dark:border-white/5 group hover:border-[#FC6401]/30 transition-all">
                                    <div className="w-6 h-6 rounded-full bg-[#FC6401]/10 text-[#FC6401] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FC6401] group-hover:text-white transition-all">
                                        <Check size={14} />
                                    </div>
                                    <span className="text-sm font-medium">{text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="curriculum" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-8">Learning Journey – Curriculum</h3>
                        <div className="space-y-4">
                            {CURRICULUM.map((item, idx) => <AccordionItem key={idx} item={item} />)}
                        </div>
                        <div className="mt-12 flex justify-center">
                            <PremiumButton
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setIsDownload(true);
                                }}
                                icon={<ChevronDown size={20} className="transition-transform group-hover:translate-y-1 text-blue-400 group-hover:text-white" />}
                            >
                                Download Agentic AI Roadmap
                            </PremiumButton>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section className="scroll-mt-24">

                        <div className="w-full mb-16">
                            <h3 className="font-heading text-2xl font-bold ">Skillverse You Actually Master</h3>
                            <img
                                src="/redesign/advance-gen-ai/skilverse.png"
                                alt="Skillverse You Actually Master"
                                className="w-full h-auto object-contain rounded-xl"
                            />
                        </div>
                        <h3 id="tools" className="font-heading text-2xl font-bold mb-8 scroll-mt-24">AI Agent Tools You’ll Master</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {TOOLS.map((tool, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#111111] border border-[#252525] rounded-2xl p-3 hover:border-[#333333] transition-all duration-300 group"
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

                    <section id="mentors" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-8">Mentors from Top AI Teams</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {MENTORS.map((m, i) => (
                                <div key={i} className="bg-gray-50 dark:bg-[#171717] rounded-xl overflow-hidden border border-gray-100 dark:border-[#848484]/30 group hover:shadow-md transition-all duration-300">
                                    <div className="aspect-square relative overflow-hidden">
                                        <img src={m.image} alt={m.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h4 className="font-heading font-bold text-gray-900 dark:text-white transition-colors duration-300">{m.name}</h4>
                                        <p className="font-sans text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 mb-2">{m.role}</p>
                                        {m.linkedin && (
                                            <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                                <a
                                                    href={m.linkedin}
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

                    <section id="certificate" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-8">Industry-Recognized Certification</h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-[#171717] rounded-2xl p-4 transition-colors duration-300">
                            <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <img src="/redesign/advance-gen-ai/ADV-GEN-AI.webp" alt="Certification" className="w-full h-auto rounded-md shadow-xl transition-colors duration-300" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Nano-Degree in Agentic AI & Intelligent Systems</h4>
                                <p className="font-sans text-gray-600 dark:text-gray-400 text-sm mb-6 transition-colors duration-300">Prove your ability to design and deploy autonomous AI agents. Stand out with a credential that signals real agent-building expertise.</p>
                                <ul className="space-y-3">
                                    {["Industry-recognized Agentic AI Nano-Degree", "Verifiable digital credential", "Portfolio of deployed AI agents"].map((f, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                            <div className="mt-0.5 w-4 h-4 rounded-full bg-[#FC6401]/10 text-[#FC6401] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
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

                    <section id="career" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-8">Careers Powered by AI Agents</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "AI Agent Engineer", desc: "Build autonomous agents and intelligent systems" },
                                { title: "AI Automation Specialist", desc: "Replace manual workflows with agent-based systems" },
                                { title: "AI Product Analyst", desc: "Design agents that drive insights and decisions" },
                                { title: "AI Consultant & Strategist", desc: "Help companies adopt agentic AI at scale" }
                            ].map((c, i) => (
                                <div key={i} className="bg-white dark:bg-[#171717] border border-gray-100 dark:border-[#848484]/30 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="font-heading font-bold text-lg text-gray-900 dark:text-white w-2/3 transition-colors duration-300">
                                            {c.title}
                                        </h4>
                                        <span className="font-sans bg-[#FC6401]/10 text-[#FC6401] text-xs font-bold px-2 py-1 rounded whitespace-nowrap transition-colors duration-300">₹12L – ₹25L+</span>
                                    </div>
                                    <p className="font-sans text-sm text-gray-500 leading-relaxed font-light">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="pricing" className="scroll-mt-24">
                        <div className="text-center mb-16">
                            <h3 className="font-heading text-4xl font-bold mb-4 text-white">Make an Investment for the AI Ready Future</h3>
                        </div>
                        <div className="flex justify-center max-w-5xl mx-auto">
                            <div
                                className="relative rounded-[10px] p-[1px] w-[375px]"
                                style={{
                                    background: "linear-gradient(180deg, #FC6401 0%, rgba(252, 100, 1, 0) 100%)",
                                    boxShadow: "4px 4px 10px 0px #FC640166",
                                }}
                            >
                                <div
                                    className="bg-[#171717] rounded-[9px] p-6 h-full flex flex-col items-center text-center relative overflow-hidden"
                                    style={{
                                        boxShadow: "-4px -4px 10px 0px #FC640166",
                                    }}
                                >
                                    {/* Gradient Overlay */}
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background: "linear-gradient(142.89deg, rgba(252, 100, 1, 0.2) 0%, rgba(252, 100, 1, 0) 100%)",
                                        }}
                                    ></div>

                                    <h4 className="font-heading font-bold text-white text-2xl mb-2 relative z-10">Advanced +</h4>
                                    <p className="font-sans text-gray-300 text-sm mb-6 relative z-10">Comprehensive AI training program</p>

                                    <div className="mb-8 relative z-10">
                                        <span className="font-sans text-4xl font-bold text-[#FC6401]">₹ 49,999</span>
                                        <span className="font-sans text-gray-400 text-sm ml-1">+ GST</span>
                                    </div>

                                    <ul className="font-sans text-left space-y-3 mb-8 text-sm text-gray-300 w-full relative z-10">
                                        {[
                                            "10-week agentic AI program",
                                            "Hands-on AI agent projects",
                                            "Industry-recognized certification",
                                            "Career guidance & mentorship",
                                            "Community access",
                                            "Build real production ready AI Applications"
                                        ].map((f, i) => (
                                            <li key={i} className="flex gap-2 items-start">
                                                <span className="text-gray-400 mt-1">•</span>
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => handleBuyCourse(49999)}
                                        className="font-sans w-full py-3 bg-[#FC6401] hover:bg-[#e55a00] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10"
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
