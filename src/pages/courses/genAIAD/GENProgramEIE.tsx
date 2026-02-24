"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check, Loader2, Linkedin } from "lucide-react";
import toast from 'react-hot-toast';
import { useUser } from '../../../context/UserContext';
import { COURSE_IDS, COURSE_PRICES } from '../../../utils/constants_price';
import { api } from '../../../api';
import { PremiumButton } from "../../../components/common/PremiumButton";
import EnrollmentModal from "../../../components/EnrollmentModal";

declare global {
    interface Window {
        Razorpay: any;
    }
}

interface Batch {
    Id: string;
    Batch: string;
    Course: string;
    StartDate: string;
    EndDate: string | null;
    IsFree: boolean;
}

// --- Data & Constants ---

const SECTIONS = [
    { id: "why-this-program", label: "Why this Program" },
    { id: "curriculum", label: "Learning Journey (With tools embedded)" },
    { id: "tools", label: "Tools Which You Master as a Professional" },
    { id: "mentors", label: "Mentors" },
    { id: "certificate", label: "Industry-Recognized Certification" },
    { id: "career", label: "High-Paying Career Opportunities" },
    { id: "pricing", label: "Make an Investment in Your AI-Ready Future" },
];

const GEN_MENTORS = [
    {
        name: "Anjali Sharma",
        role: "AI Product Manager @ Mesha",
        image: "/redesign/gen-ai/gen-ai-mentors/Anjali Sharma.png",
        linkedin: "https://www.linkedin.com/in/anjalisharmaaa/",
    },
    {
        name: "Dr. Prashant",
        role: "AI Research Scientist & Professor",
        image: "/redesign/gen-ai/gen-ai-mentors/Dr. Prashant.png",
        linkedin: "https://www.linkedin.com/in/dr-prashant/",
    },
    {
        name: "Nitish M L Setty",
        role: "GenAI & ML Lead",
        image: "/redesign/gen-ai/gen-ai-mentors/Nitish M L Setty.png",
        linkedin: "https://www.linkedin.com/in/nitish-m-l-setty/",
    },
    {
        name: "Pranali Bose",
        role: "Senior GenAI Solutions Architect",
        image: "/redesign/gen-ai/gen-ai-mentors/Pranali Bose.png",
        linkedin: "https://www.linkedin.com/in/pranali-bose/",
    },
];

const CURRICULUM = [
    {
        week: "1",
        topics: ["Foundations of Generative AI"],
        goal: "Understand what GenAI is, how it works, and explore hands-on creative tools.",
        skills: [
            "Session 1: Introduction to Generative AI – Understanding GenAI basics and industry-wide impact.",
            "Session 2: Exploring AI Ecosystem Tools (2025 Stack) – Hands-on with the latest 2025 stack.",
            "Session 3: AI for Everyday Work – Using AI for professional productivity and efficiency.",
        ],
        outcome: "Mini Project: AI Productivity Toolkit — Create 5 real-world prompts that automate your work.",
    },
    {
        week: "2",
        topics: ["Deep Dive into LLMs & Prompt Mastery"],
        goal: "Understand how large language models actually \"think\" and how to guide them precisely.",
        skills: [
            "Session 4: Inside the Mind of an LLM – Technical foundations of how models process information.",
            "Session 5: Prompt Engineering to Context Engineering – Mastering advanced steering techniques.",
            "Session 6: Practical Prompt Lab – Direct experimentation with agent communication.",
        ],
        outcome: "Ability to engineer precise prompts and guide LLMs for complex, multi-step tasks.",
    },
    {
        week: "3",
        topics: ["Image, Video, and Visual Generation"],
        goal: "Use AI for creative production — image and video generation.",
        skills: [
            "Session 7: Image Generation: Diffusion Models – Mastering high-fidelity visual generation.",
            "Session 8: AI Video Generation – Professional video production workflows.",
            "Session 9: Hands-on Visual AI Lab – Project-driven visual asset creation.",
        ],
        outcome: "Production of high-quality visual campaign assets using Midjourney, Stable Diffusion, and Runway.",
    },
    {
        week: "4",
        topics: ["Audio, Voice & Music Generation"],
        goal: "Understand and apply AI to voice and sound.",
        skills: [
            "Session 10: AI Voice Synthesis & TTS – Mastering voice cloning and speech generation.",
            "Session 11: AI Music Creation – Creating soundscapes and jingles.",
            "Session 12: Lab + Project – Integrating audio into AI workflows.",
        ],
        outcome: "A complete portfolio of AI-generated audio and voice assets using ElevenLabs and Suno.",
    },
    {
        week: "5",
        topics: ["Machine Learning & Model Fine-Tuning"],
        goal: "Learn how LLMs are trained and fine-tune small models for your domain.",
        skills: [
            "Session 13: Basics of ML & DL Simplified – Understanding the core mechanics of AI.",
            "Session 14: Fine-Tuning Open Models (LoRA, QLoRA) – Domain-specific model optimization.",
            "Session 15: Lab: Training a Mini-Model – Practical training and performance testing.",
        ],
        outcome: "A fine-tuned mini-model trained on a custom domain dataset using LoRA/QLoRA.",
    },
    {
        week: "6",
        topics: ["AI Ethics, Bias & Responsible Design"],
        goal: "Learn safe and ethical AI building for compliance and trustworthiness.",
        skills: [
            "Session 16: AI Ethics & Global Regulations – Compliance with EU AI Act, India DPDP, and US Safety rules.",
            "Session 17: Detecting & Reducing Bias – Strategies for fairness in AI models.",
            "Session 18: Practical Exercise: Audit an existing AI system for fairness.",
        ],
        outcome: "A completed fairness audit report on a real AI system.",
    },
    {
        week: "7",
        topics: ["Vibe Coding: Assisted AI Development (I)"],
        goal: "Build applications visually with the help of AI pair coders.",
        skills: [
            "Session 19: Intro to Vibe Coding & Tools – Setting up the environment with modern coding assistants.",
            "Session 20: Hands-On: Building with Cursor AI & Windsurf – Assisted app development.",
            "Session 21: Project Build Live – Real-time application construction.",
        ],
        outcome: "A functional AI-powered application built using Cursor AI and Windsurf.",
    },
    {
        week: "8",
        topics: ["Vibe Coding (II) & Model Deployment"],
        goal: "Learn to deploy your projects and host them publicly.",
        skills: [
            "Session 22: Replit, Bolt.new, and Lovable for Quick Deployment – Professional hosting tools.",
            "Session 23: Deploying to Cloud – Making your AI app accessible online.",
            "Session 24: Monitoring & Optimization – Performance tracking post-launch.",
        ],
        outcome: "A live, publicly hosted AI application with monitoring set up.",
    },
    {
        week: "9",
        topics: ["Introduction to AI Agents"],
        goal: "Move from models → autonomous reasoning systems.",
        skills: [
            "Session 25: What Are AI Agents? – Real-world examples of autonomous logic.",
            "Session 26: Tools for Building Agents – Frameworks for agentic development.",
            "Session 27: Lab: Build Your First AI Agent – Hands-on project using LangChain.",
        ],
        outcome: "Your first working AI agent built with LangChain.",
    },
    {
        week: "10",
        topics: ["Building AI Agents (CrewAI & LangGraph Live)"],
        goal: "Build a multi-step reasoning agent.",
        skills: [
            "Session 28 (Live Build): CrewAI Team of Agents – Designing collaborative agent squads.",
            "Session 29: LangGraph Visual Agent Building – Visualizing reasoning flows.",
            "Session 30: Building MCP Server, Intro To ACP – Advanced server integration.",
        ],
        outcome: "A live multi-agent system built using CrewAI and LangGraph.",
    },
    {
        week: "11",
        topics: ["Multi-Agent Systems & Real-World Use Cases"],
        goal: "Create complex automations involving multiple agents.",
        skills: [
            "Session 31: Multi-Agent Collaboration Patterns – Structuring team-based workflows.",
            "Session 32: APIs and Databases with Agents – Connecting agents to external data.",
            "Session 33: Mini Project: \"Customer Support Crew\" – 3-agent system (intake → research → response).",
        ],
        outcome: "Mini Project: A deployed 3-agent customer support system.",
    },
    {
        week: "12",
        topics: ["AI Automation Using n8n"],
        goal: "Automate workflows visually and connect your AI models to tasks.",
        skills: [
            "Session 34: Intro to n8n & Node Logic – Understanding trigger and function nodes.",
            "Session 35: n8n workflow - 1 – Building your first visual automation.",
            "Session 36: n8n Lab – Practical automation experimentation.",
        ],
        outcome: "A working n8n automation pipeline connecting AI models to real workflows.",
    },
    {
        week: "13",
        topics: ["Full Automation + Integrations"],
        goal: "Combine AI + Agents + Automation into deployable solutions.",
        skills: [
            "Session 37: n8n workflow - 2 – Advanced workflow logic.",
            "Session 38: Flowwise - 1 – Integration with conversational interfaces.",
            "Session 39: Mini Project Discussion: \"AI Copilot\" – Strategic planning for personal assistants.",
        ],
        outcome: "A complete AI-powered personal copilot with automated integrations via Flowwise.",
    },
    {
        week: "14",
        topics: ["Capstone & Future Skills"],
        goal: "Build a deployable project, present, and get feedback.",
        skills: [
            "Session 40: Demo Day & Career Mapping – Presenting final products and planning professional next steps.",
        ],
        outcome: "A career-ready portfolio: deployed AI application, capstone demo, and professional roadmap.",
    },
];

const GEN_TOOLS = [
    {
        name: "GPT-4o",
        category: "LLM",
        image: "/redesign/gen-ai/tools/gpt.png",
        description: "OpenAI's latest flagship model for advanced reasoning."
    },
    {
        name: "Claude 3.5",
        category: "LLM",
        image: "/redesign/gen-ai/tools/claude.png",
        description: "Anthropic's safest and most capable AI model."
    },
    {
        name: "Gemini 1.5 Pro",
        category: "LLM",
        image: "/redesign/gen-ai/tools/gemini.png",
        description: "Google's multimodal AI with massive context window."
    },
    {
        name: "Llama 3",
        category: "LLM",
        image: "/redesign/gen-ai/tools/lama-3.png",
        description: "Meta's state-of-the-art open source language model."
    },
    {
        name: "DeepSeek",
        category: "LLM",
        image: "/redesign/gen-ai/tools/deepseek.png",
        description: "Advanced open-weights model for code and reasoning."
    },
    {
        name: "Mistral AI",
        category: "LLM",
        image: "/redesign/gen-ai/tools/mistral-ai.png",
        description: "Europe's leading open models for enterprise AI."
    },
    {
        name: "Midjourney",
        category: "Image Gen",
        image: "/redesign/gen-ai/tools/midjournry.png",
        description: "Premium artistic image generation platform."
    },
    {
        name: "Stable Diffusion",
        category: "Image Gen",
        image: "/redesign/gen-ai/tools/stable-diffusion.png",
        description: "Leading open-source image generation model."
    },
    {
        name: "Flux",
        category: "Image Gen",
        image: "/redesign/gen-ai/tools/flux.png",
        description: "Next-gen image model with exceptional detail."
    },
    {
        name: "Leonardo.Ai",
        category: "Image Gen",
        image: "/redesign/gen-ai/tools/leonardo-ai.png",
        description: "Full-stack AI image generation platform."
    },
    {
        name: "Runway Gen-2",
        category: "Video AI",
        image: "/redesign/gen-ai/tools/runway.png",
        description: "Creative suite for AI-powered video generation."
    },
    {
        name: "Pika Labs",
        category: "Video AI",
        image: "/redesign/gen-ai/tools/pika-labs.png",
        description: "Idea-to-video platform for high-quality animation."
    },
    {
        name: "Suno",
        category: "Audio AI",
        image: "/redesign/gen-ai/tools/suno.png",
        description: "Create professional-quality songs with AI."
    },
    {
        name: "Udio",
        category: "Audio AI",
        image: "/redesign/gen-ai/tools/udio.png",
        description: "AI music generation for creators."
    },
    {
        name: "ElevenLabs",
        category: "Voice AI",
        image: "/redesign/gen-ai/tools/eleven-labs.png",
        description: "High-fidelity text-to-speech and voice cloning."
    },
    {
        name: "Cursor",
        category: "AI Code Editor",
        image: "/redesign/gen-ai/tools/cursor.png",
        description: "Next-gen editor with deep AI integration."
    },
    {
        name: "Bolt.new",
        category: "AI Coding",
        image: "/redesign/gen-ai/tools/bolt.png",
        description: "Full-stack web application builder powered by AI."
    },
    {
        name: "Replit",
        category: "Cloud IDE",
        image: "/redesign/gen-ai/tools/replit.png",
        description: "Collaborative platform for building and hosting apps."
    },
    {
        name: "LangChain",
        category: "Framework",
        image: "/redesign/gen-ai/tools/langchain.png",
        description: "Building applications with LLMs through chaining."
    },
    {
        name: "CrewAI",
        category: "AI Agents",
        image: "/redesign/gen-ai/tools/crew-ai.png",
        description: "Framework for multi-agent autonomous systems."
    },
    {
        name: "LangGraph",
        category: "AI Agents",
        image: "/redesign/gen-ai/tools/lnaggraph.png",
        description: "Build stateful, multi-actor applications with LLMs."
    },
    {
        name: "Flowise",
        category: "AI Orchestration",
        image: "/redesign/gen-ai/tools/flowwise.png",
        description: "Drag-and-drop tool for building LLM apps."
    },
    {
        name: "AutoTrain",
        category: "Model Training",
        image: "/redesign/gen-ai/tools/auto-train.png",
        description: "No-code tool to train state-of-the-art models."
    },
    {
        name: "Google Colab",
        category: "Development",
        image: "/redesign/gen-ai/tools/colab.png",
        description: "Hosted Jupyter notebook service."
    },
    {
        name: "Hugging Face",
        category: "Model Hub",
        image: "/redesign/gen-ai/tools/spaces.png",
        description: "The home of open-source machine learning."
    },
    {
        name: "LangFuse",
        category: "LLM Ops",
        image: "/redesign/gen-ai/tools/langfuse.png",
        description: "Open source LLM engineering platform."
    },
    {
        name: "Helicone",
        category: "LLM Ops",
        image: "/redesign/gen-ai/tools/helicone.png",
        description: "Open-source observability for LLMs."
    },
    {
        name: "FastAPI",
        category: "Deployment",
        image: "/redesign/gen-ai/tools/fast-api.png",
        description: "Modern, fast web framework for building APIs."
    },
    {
        name: "Docker",
        category: "Deployment",
        image: "/redesign/gen-ai/tools/docker.png",
        description: "Platform for developing, shipping, and running apps."
    },
    {
        name: "Render",
        category: "Deployment",
        image: "/redesign/gen-ai/tools/render.png",
        description: "Unified cloud to build and run all your apps."
    },
    {
        name: "Zapier",
        category: "Automation",
        image: "/redesign/gen-ai/tools/zapier.png",
        description: "Connecting apps and automating workflows with AI."
    }
];

// --- Components ---

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
                    <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                        {item.topics.join(" & ")}
                    </h4>
                </div>
                <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                        ? "bg-[#FC6401] text-white rotate-180"
                        : "bg-gray-100 dark:bg-[#252525] text-gray-500 hover:bg-[#FC6401] hover:text-white"
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
                        <div className="p-6 pt-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-[#171717] border-t border-gray-50 dark:border-[#848484]/30">
                            <p className="font-sans text-base text-gray-700 dark:text-gray-200 mb-6 font-medium leading-relaxed">
                                {item.goal}
                            </p>
                            <div className="grid gap-8">
                                <div>
                                    <p className="font-bold mb-3 text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider">Sessions:</p>
                                    <ul className="space-y-2">
                                        {item.skills.map((skill: string, sIdx: number) => (
                                            <li key={sIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FC6401] flex-shrink-0" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {item.outcome && (
                                    <div className="bg-orange-50/50 dark:bg-orange-900/10 p-4 rounded-xl border border-orange-100 dark:border-orange-900/30 self-start">
                                        <p className="text-sm font-bold text-[#FC6401] mb-1">Key Outcome:</p>
                                        <p className="text-sm text-orange-800 dark:text-orange-300">{item.outcome}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function GENProgramEIE() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, isAuthenticated } = useUser();

    const [activeSection, setActiveSection] = useState("why-this-program");
    const [isFixed, setIsFixed] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const sidebarRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Payment states
    const [isProcessing, setIsProcessing] = useState(false);
    const [batches, setBatches] = useState<Batch[]>([]);
    const [selectedBatchId, setSelectedBatchId] = useState<string | null>(null);
    const [showCancellationModal, setShowCancellationModal] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDownload, setIsDownload] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
        setIsDownload(false);
    };

    const handleModalSubmit = () => {
        if (isDownload) {
            // Logic for brochure download
        }
        handleModalClose();
    };

    const coursePrice = COURSE_PRICES.GENERATIVE_AI;
    const courseId = COURSE_IDS.GENERATIVE_AI;
    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    // Fetch active batches
    useEffect(() => {
        const fetchBatches = async () => {
            try {
                const baseUrl = apiUrl?.endsWith('/api') ? apiUrl.slice(0, -4) : apiUrl;
                const response = await fetch(`${baseUrl}/course-checkout/batches/${courseId}`);
                const result = await response.json();
                if (result.success && result.data) {
                    const batchList = result.data.batches || result.data;
                    if (Array.isArray(batchList) && batchList.length > 0) {
                        setBatches(batchList);
                        setSelectedBatchId(batchList[0].Id);
                    }
                }
            } catch (error) {
                console.error('Error fetching batches:', error);
            }
        };
        fetchBatches();
    }, [courseId, apiUrl]);

    const initializeRazorpay = (): Promise<boolean> => {
        return new Promise((resolve) => {
            if (window.Razorpay) { resolve(true); return; }
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePaymentCancellation = async (enrollmentId: string) => {
        try {
            const baseUrl = apiUrl?.endsWith('/api') ? apiUrl.slice(0, -4) : apiUrl;
            await fetch(`${baseUrl}/course-checkout/cancel-payment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ enrollmentId }),
            });
        } catch (error) {
            console.error('Error handling payment cancellation:', error);
        } finally {
            setIsProcessing(false);
            setShowCancellationModal(true);
        }
    };

    const handleBuyCourse = async (amount: number) => {
        if (!isAuthenticated) {
            navigate('/sign-in', { state: { from: location } });
            return;
        }
        if (!selectedBatchId) {
            toast.error('Please select a batch first');
            return;
        }
        setIsProcessing(true);
        try {
            const razorpayLoaded = await initializeRazorpay();
            if (!razorpayLoaded) throw new Error('Failed to load Razorpay SDK');

            const orderResponse = await api.post('/course-checkout/create-order', {
                courseId, batchId: selectedBatchId, amount: amount,
            });
            if (!orderResponse.data.success) throw new Error(orderResponse.data.message || 'Failed to create order');

            const { orderId, enrollmentId } = orderResponse.data.data;
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: orderResponse.data.data.amount,
                currency: orderResponse.data.data.currency || 'INR',
                name: 'AcceleratorX',
                description: coursePrice.name,
                order_id: orderId,
                handler: async (response: any) => {
                    try {
                        const verifyResponse = await api.post('/course-checkout/verify-payment', {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                            enrollmentId,
                        });
                        if (verifyResponse.data.success) {
                            toast.success('Payment successful! Welcome to the program.');
                            navigate(`/course-payment/success/${orderId}`);
                        } else throw new Error('Payment verification failed');
                    } catch (error: any) {
                        toast.error('Payment verification failed. Please contact support.');
                    } finally { setIsProcessing(false); }
                },
                prefill: {
                    name: user?.FirstName ? `${user.FirstName} ${user.LastName || ''}` : '',
                    email: user?.Email || '',
                    contact: '',
                },
                theme: { color: '#2563EB' },
                modal: { ondismiss: () => handlePaymentCancellation(enrollmentId) },
            };
            const razorpay = new window.Razorpay(options);
            razorpay.on('payment.failed', () => handlePaymentCancellation(enrollmentId));
            razorpay.open();
        } catch (error: any) {
            toast.error(error.message || 'Failed to process payment. Please try again.');
            setIsProcessing(false);
        }
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
        <div className="dark:bg-[#000000] py-20 text-[#0A0F1E] dark:text-white transition-colors duration-300">
            <div ref={containerRef} className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">

                {isFixed && <div className="lg:w-1/4 flex-shrink-0" style={{ width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px` }} />}

                <aside
                    ref={sidebarRef}
                    className={`lg:w-1/4 relative self-start flex-shrink-0 transition-all duration-200 ${isFixed ? 'lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:z-10' : ''
                        }`}
                    style={isFixed ? {
                        width: `${sidebarWidth}px`,
                        maxWidth: `${sidebarWidth}px`,
                        maxHeight: 'calc(100vh - 4rem)'
                    } : {}}
                >
                    <img
                        src="/redesign/gen-ai/deepseek.png"
                        alt="Langchain"
                        className="absolute -top-20 -left-10 object-contain w-24 h-24 opacity-80 hidden lg:block animate-float"
                    />
                    <div className={isFixed ? 'relative lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)] lg:pr-4' : 'relative'}>



                        <h2 className="font-heading text-3xl font-bold text-[#0A0F1E] dark:text-white mb-8 leading-tight transition-colors duration-300">
                            AI Programs that help you become a Leader
                        </h2>

                        <nav className="space-y-4 border-l-2 border-gray-200 dark:border-gray-700 transition-colors duration-300">
                            {SECTIONS.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`font-sans block pl-4 py-1 text-left text-sm font-medium transition-all duration-300 w-full ${activeSection === section.id
                                        ? "border-l-2 border-[#FC6401] -ml-0.5 text-[#FC6401] font-bold"
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
                        <h3 className="font-heading text-2xl font-bold mb-6 dark:text-white transition-colors duration-300">An AI Program Built for the Real World</h3>
                        <p className="font-sans text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                            This is not a tool demo course or prompt-only training.
                            At AcceleratorX, you learn how modern AI systems are actually built in 2025 — combining models, agents, automation, and deployment.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Work with state-of-the-art LLMs like GPT-4o, Claude 3.5, Gemini 1.5 Pro, DeepSeek R1, Llama 3, and Mistral",
                                "Build text, image, video, and voice-based AI systems using Midjourney, Stable Diffusion XL, Runway Gen-2, Pika Labs, ElevenLabs, Whisper, Suno, and more",
                                "Use AI-assisted coding (vibe coding) with Cursor, Windsurf, Bolt.new, and Replit",
                                "Design autonomous AI agents and multi-agent systems using LangChain, CrewAI, LangGraph, and Flowise",
                                "Automate real workflows using n8n, Make, and Zapier AI",
                                "Deploy production-ready AI apps using Hugging Face Spaces, FastAPI, Docker, Render, Streamlit Cloud, and Hostinger",
                                "Monitor and improve AI systems using LangFuse and Helicone",
                                "This is how AI products are built in startups and enterprises today",
                            ].map((text, i) => (
                                <li key={i} className="font-sans flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FC6401] flex-shrink-0"></span>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-12 transition-colors duration-300"></div>
                    </section>

                    <section id="curriculum" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-6 dark:text-white transition-colors duration-300">Learning Journey (With tools embedded)</h3>
                        <p className="font-sans text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
                            A comprehensive 14-week journey from prompt engineering to full multi-agent automation.
                        </p>
                        <div className="space-y-4">
                            {CURRICULUM.map((item, idx) => (
                                <AccordionItem key={idx} item={item} />
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <PremiumButton
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setIsDownload(true);
                                }}
                                icon={<ChevronDown size={18} className="transition-transform group-hover:translate-y-1 text-blue-400 group-hover:text-white" />}
                            >
                                Download Brochure
                            </PremiumButton>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="tools" className="scroll-mt-24">

                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">Skillverse You Acually Master</h3>
                        <div className="w-full mb-16">
                            <img
                                src="/redesign/gen-ai/gen-ai-skilverse.png"
                                alt="Skillverse You Actually Master"
                                className="w-full h-auto object-contain rounded-xl"
                            />
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">Tools Which You Master as a Professional</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                            {GEN_TOOLS.map((tool, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#111111] border border-[#252525] rounded-2xl p-4 hover:border-[#333333] transition-all duration-300 group"
                                >
                                    <div className="p-6 mb-4 aspect-[16/10] flex items-center justify-center overflow-hidden">
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
                                    <p className="font-sans text-sm text-gray-400 leading-relaxed">{tool.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="mentors" className="scroll-mt-24 relative">
                        <img
                            src="/redesign/gen-ai/coming-asr.png"
                            alt="Langchain"
                            className="absolute -bottom-20 -left-96 object-contain opacity-80 hidden lg:block animate-float"
                        />
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">Mentors from Top AI Labs</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {GEN_MENTORS.map((mentor, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-50 dark:bg-[#171717] rounded-xl overflow-hidden border border-gray-100 dark:border-[#848484]/30 group hover:shadow-md transition-all duration-300"
                                >
                                    <div className="aspect-square relative overflow-hidden transition-colors duration-300">
                                        <img
                                            src={mentor.image || "/placeholder.svg"}
                                            alt={mentor.name}
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h4 className="font-heading font-bold text-gray-900 dark:text-white transition-colors duration-300">{mentor.name}</h4>
                                        <p className="font-sans text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 mb-2">{mentor.role}</p>
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

                    <section id="certificate" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">Industry-Recognized Certification</h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-[#171717] rounded-2xl p-8  transition-colors duration-300">
                            <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <img
                                    src="/redesign/gen-ai/GEN-AI.webp"
                                    alt="Generative AI Certificate"
                                    className="w-full h-auto transition-colors duration-300 shadow-xl"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                                    Nano-Degree in Generative AI & AI Agent Building
                                </h4>
                                <p className="font-sans text-gray-600 dark:text-gray-400 text-sm mb-6 transition-colors duration-300">
                                    This certification proves you can:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Build AI-powered applications",
                                        "Design autonomous agents",
                                        "Automate workflows",
                                        "Deploy and monitor AI systems",
                                        "Backed by real projects, real tools, and real deployments.",
                                    ].map((item, i) => (
                                        <li key={i} className="font-sans flex gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                            <div className="mt-0.5 w-4 h-4 rounded-full bg-orange-100 dark:bg-orange-900/30 text-[#FC6401] dark:text-[#FC6401] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                                <Check size={10} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="career" className="scroll-mt-24 relative">
                        <img
                            src="/redesign/gen-ai/midjourney.png"
                            alt="Langchain"
                            className="absolute top-0 -left-64 object-contain opacity-80 hidden lg:block animate-float"
                        />
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">High-Paying Career Paths This Program Prepares You For</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { role: "Generative AI Engineer", pay: "₹8 LPA - 25 LPA+", desc: "Global & remote roles included" },
                                { role: "AI Agent Developer", pay: "₹8 LPA - 25 LPA+", desc: "Global & remote roles included" },
                                { role: "AI Automation Specialist", pay: "₹8 LPA - 25 LPA+", desc: "Global & remote roles included" },
                                { role: "AI Product Analyst", pay: "₹8 LPA - 25 LPA+", desc: "Global & remote roles included" },
                                { role: "AI Consultant / Strategist", pay: "₹8 LPA - 25 LPA+", desc: "Global & remote roles included" },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-[#171717] border border-gray-100 dark:border-[#848484]/30 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="font-heading font-bold text-lg text-gray-900 dark:text-white w-2/3 transition-colors duration-300">
                                            {item.role}
                                        </h4>
                                        <span className="font-sans bg-orange-100 dark:bg-orange-900/30 text-[#FC6401] dark:text-[#FC6401] text-xs font-bold px-2 py-1 rounded whitespace-nowrap transition-colors duration-300">{item.pay}</span>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                                        {item.desc}
                                    </p>
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

                                    <h4 className="font-heading font-bold text-white text-2xl mb-2 relative z-10">Regular +</h4>
                                    <p className="font-sans text-gray-300 text-sm mb-6 relative z-10">Generative AI & AI Agent Building</p>

                                    <div className="mb-4 relative z-10">
                                        <span className="font-heading text-4xl font-bold text-[#FC6401]">₹ 39,999</span>
                                        <span className="font-sans text-gray-400 text-sm ml-1">+ GST</span>
                                    </div>

                                    {batches.length > 0 && (
                                        <div className="mb-6 w-full relative z-10">
                                            <label className="block text-left text-sm font-medium text-gray-300 mb-2">Select Batch</label>
                                            <select
                                                value={selectedBatchId || ''}
                                                onChange={(e) => setSelectedBatchId(e.target.value)}
                                                className="font-sans w-full px-3 py-2 border border-[#848484]/30 rounded-lg text-sm focus:ring-[#FC6401] focus:border-[#FC6401] bg-black text-white"
                                            >
                                                {batches.map((batch) => (
                                                    <option key={batch.Id} value={batch.Id}>
                                                        {batch.Batch} - Starts {new Date(batch.StartDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}


                                    <ul className="font-sans text-left space-y-3 mb-8 text-sm text-gray-300 w-full relative z-10">
                                        {[
                                            "3-month intensive, live instructor-led training",
                                            "Hands-on projects tackling real-world AI challenges",
                                            "Industry-recognised certification",
                                            "Lifetime access to all program materials",
                                            "Exclusive AI community membership",
                                            "Career mentorship and guidance",
                                            "Build a strong portfolio with AI Solutions",
                                            "Learn to Build Automations",
                                            "Show your products through BuildrX",
                                            "Direct Hiring Channel Access"
                                        ].map((f, i) => (
                                            <li key={i} className="flex gap-2 items-start">
                                                <span className="text-gray-400 mt-1">•</span>
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {isAuthenticated ? (
                                        <button
                                            onClick={() => handleBuyCourse(39999)}
                                            disabled={isProcessing || batches.length === 0}
                                            className="font-sans w-full py-3 bg-[#FC6401] hover:bg-[#e55a00] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10 disabled:bg-gray-600 disabled:text-gray-400"
                                        >
                                            {isProcessing ? <><Loader2 size={18} className="animate-spin" /> Processing...</> : batches.length === 0 ? 'No batches available' : <>Apply Now <ArrowRight size={18} /></>}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => navigate('/sign-in', { state: { from: location } })}
                                            className="font-sans w-full py-3 bg-[#FC6401] hover:bg-[#e55a00] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10"
                                        >
                                            Sign in to Enroll <ArrowRight size={18} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    <AnimatePresence>
                        {showCancellationModal && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowCancellationModal(false)}>
                                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 text-center transition-colors duration-300" onClick={(e) => e.stopPropagation()}>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Payment Cancelled</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">Your payment was not completed. Would you like to try again?</p>
                                    <div className="flex gap-4">
                                        <button onClick={() => setShowCancellationModal(false)} className="flex-1 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Cancel</button>
                                        <button onClick={() => { setShowCancellationModal(false); handleBuyCourse(coursePrice.amount); }} className="flex-1 py-2 bg-[#FC6401] text-white rounded-lg hover:bg-[#E55A01] transition-colors">Try Again</button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
            </div>
            <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />
        </div>
    );
}
