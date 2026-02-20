"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check, Linkedin } from "lucide-react";
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
    { id: "curriculum", label: "Learning Journey - Curriculum" },
    { id: "tools", label: "Tools & Frameworks" },
    { id: "mentors", label: "Mentors" },
    { id: "certificate", label: "Industry-Recognized Certification" },
    { id: "career", label: "Career Outcomes" },
    { id: "pricing", label: "Invest in Your Marketing Career" },
];

const AIDM_MENTORS = [
    { name: "Kumar Savino", role: "Associate Director - Growth", company: "DrinkPrime", image: "/assets/mentor/kumar.webp", linkedin: "https://www.linkedin.com/in/kumar-savino/" },
    { name: "Yash Manghnani", role: "AI Builder & PM Consultant", company: "Neuwriter.ai", image: "/assets/mentor/yash-manghnani.webp", linkedin: "https://www.linkedin.com/in/yash-manghnani/" },
    { name: "Ankita Das", role: "B2B Product Marketer", company: "Ex-TargetG", image: "/assets/mentor/ankita.webp", linkedin: "https://www.linkedin.com/in/ankita-das/" },
];

const CURRICULUM = [
    {
        week: "1-2",
        topics: ["Digital Marketing Foundations + AI"],
        goal: "Understand marketing fundamentals, funnels, and AI-driven audience research.",
        skills: ["Marketing fundamentals & funnels", "Consumer journey mapping", "Market & audience research using AI"],
        outcome: "Clear understanding of how growth funnels work."
    },
    {
        week: "3-4",
        topics: ["AI-Powered Content, SEO & Creative"],
        goal: "Master content creation, SEO, and visual storytelling with Generative AI.",
        skills: ["SEO & keyword research with AI", "Blog & content creation using AI", "Visual storytelling with generative AI", "Image, video & audio creation"],
        outcome: "You can produce high-quality content at scale."
    },
    {
        week: "5-6",
        topics: ["Performance Marketing & Growth"],
        goal: "Plan and execute high-ROI campaigns on Google & Meta using AI optimization.",
        skills: ["Google Ads & Meta Ads campaigns", "AI-assisted ad copy & creatives", "A/B testing & optimization", "Influencer & social media growth"],
        outcome: "You can plan and execute paid growth campaigns."
    },
    {
        week: "7-8",
        topics: ["Analytics, CRO & Optimization"],
        goal: "Measure performance and optimize conversions using data and behavior analysis.",
        skills: ["Google Analytics 4 (GA4)", "Marketing dashboards & KPIs", "Conversion rate optimization", "Heatmaps & user behavior analysis"],
        outcome: "You can measure what works and improve conversions."
    },
    {
        week: "9-14",
        topics: ["Marketing Automation & AI Agents"],
        goal: "Build automated workflows and multi-agent systems for scalable marketing.",
        skills: ["Automated workflows (lead → CRM → email → social)", "AI-powered email & drip campaigns", "Multi-agent marketing systems", "Fully automated campaign pipelines"],
        outcome: "You become a scalable, automation-first marketer."
    },
    {
        week: "15-16",
        topics: ["Growth, Experimentation & Capstone"],
        goal: "Design growth experiments and launch a multi-channel capstone campaign.",
        skills: ["Design growth experiments", "Build a personal marketing portfolio", "Create an AI-powered, multi-channel capstone campaign"],
        outcome: "You graduate with proof of real marketing skills."
    }
];

const AIDM_TOOLS = [
    {
        name: "ChatGPT",
        category: "LLM",
        image: "/redesign/ai-dm/tools/Chatgpt.png",
        description: "Industry-leading language model for content & strategy."
    },
    {
        name: "Claude",
        category: "LLM & Research",
        image: "/redesign/ai-dm/tools/Claude.png",
        description: "Advanced AI for nuanced copywriting and research."
    },
    {
        name: "Perplexity",
        category: "AI Search",
        image: "/redesign/ai-dm/tools/Perplexity.png",
        description: "Real-time AI search engine for market intelligence."
    },
    {
        name: "Google Ads",
        category: "Ad Platform",
        image: "/redesign/ai-dm/tools/Googleads.png",
        description: "Platform for running search, display, and video ads."
    },
    {
        name: "Meta Ads Manager",
        category: "Ad Platform",
        image: "/redesign/ai-dm/tools/Meta ads manager.png",
        description: "Manage ads across Facebook, Instagram, and Messenger."
    },
    {
        name: "Google Trends",
        category: "Market Research",
        image: "/redesign/ai-dm/tools/Googletrends.png",
        description: "Analyze search popularity and discover market trends."
    },
    {
        name: "Exploding Topics",
        category: "Trend Discovery",
        image: "/redesign/ai-dm/tools/Explodingtopics.png",
        description: "Discover rapidly growing topics before they peak."
    },
    {
        name: "Semrush",
        category: "SEO & Marketing",
        image: "/redesign/ai-dm/tools/Semrush.png",
        description: "All-in-one suite for SEO, PPC, and content marketing."
    },
    {
        name: "Ubersuggest",
        category: "SEO",
        image: "/redesign/ai-dm/tools/Ubersuggest.png",
        description: "SEO tool for keyword ideas and site audits."
    },
    {
        name: "Surfer SEO",
        category: "Content Optimization",
        image: "/redesign/ai-dm/tools/Surfer seo.png",
        description: "AI tool to optimize content for search engine rankings."
    },
    {
        name: "Yoast SEO",
        category: "SEO",
        image: "/redesign/ai-dm/tools/Yoast.png",
        description: "Leading SEO plugin for optimizing website content."
    },
    {
        name: "Jasper",
        category: "AI Copywriting",
        image: "/redesign/ai-dm/tools/Jasper.png",
        description: "On-brand AI copilot for enterprise marketing teams."
    },
    {
        name: "Copy.ai",
        category: "AI Copywriting",
        image: "/redesign/ai-dm/tools/Copyai.png",
        description: "AI-powered copywriter for marketing materials."
    },
    {
        name: "Notion AI",
        category: "Productivity",
        image: "/redesign/ai-dm/tools/Notion ai.png",
        description: "AI integrated into your workspace for writing and summary."
    },
    {
        name: "Adobe Firefly",
        category: "Generative Design",
        image: "/redesign/ai-dm/tools/Adobefirefly.png",
        description: "Generative AI for creators, integrated into Adobe apps."
    },
    {
        name: "Canva AI",
        category: "Design",
        image: "/redesign/ai-dm/tools/Canvaai.png",
        description: "AI tools within Canva for magic design and editing."
    },
    {
        name: "Leonardo.ai",
        category: "Image Generation",
        image: "/redesign/ai-dm/tools/Leonardo.ai.png",
        description: "Create production-quality visual assets with AI."
    },
    {
        name: "Ideogram",
        category: "Image Generation",
        image: "/redesign/ai-dm/tools/Ideogram.png",
        description: "Advanced text-to-image generator with typography support."
    },
    {
        name: "Stability AI",
        category: "Image Generation",
        image: "/redesign/ai-dm/tools/Stability.ai.png",
        description: "Open models for image, video, and audio generation."
    },
    {
        name: "Runway",
        category: "Video AI",
        image: "/redesign/ai-dm/tools/Runway.png",
        description: "Advanced video editing and generation with AI."
    },
    {
        name: "Pika Labs",
        category: "Video AI",
        image: "/redesign/ai-dm/tools/Pika labs.png",
        description: "Text-to-video platform for animation and creation."
    },
    {
        name: "Kaiber",
        category: "Video AI",
        image: "/redesign/ai-dm/tools/Kaiber.png",
        description: "AI creative lab for video and audio generation."
    },
    {
        name: "VEO",
        category: "Video AI",
        image: "/redesign/ai-dm/tools/Veo3.png",
        description: "Next-gen AI video generation model."
    },
    {
        name: "CapCut",
        category: "Video Editing",
        image: "/redesign/ai-dm/tools/capcut.png",
        description: "All-in-one video editor with AI features."
    },
    {
        name: "Descript",
        category: "AV Editing",
        image: "/redesign/ai-dm/tools/descript.png",
        description: "Edit audio and video like a text document."
    },
    {
        name: "Opus Clip",
        category: "Video Repurposing",
        image: "/redesign/ai-dm/tools/Opus clip.png",
        description: "Repurpose long video into viral shorts with AI."
    },
    {
        name: "ElevenLabs",
        category: "Voice AI",
        image: "/redesign/ai-dm/tools/Elevenlabs.png",
        description: "Realistic AI speech synthesis and voice cloning."
    },
    {
        name: "Buffer",
        category: "Social Media",
        image: "/redesign/ai-dm/tools/Buffer.png",
        description: "Social media toolkit for scheduling and publishing."
    },
    {
        name: "Metricool",
        category: "Analytics",
        image: "/redesign/ai-dm/tools/Metricool.png",
        description: "Analyze, manage, and measure digital content."
    },
    {
        name: "Lately",
        category: "Social AI",
        image: "/redesign/ai-dm/tools/Lately.png",
        description: "AI that turns long-form content into social posts."
    },
    {
        name: "Predis.ai",
        category: "Social Content",
        image: "/redesign/ai-dm/tools/Predis ai.png",
        description: "Generate ready-to-publish social media posts with AI."
    },
    {
        name: "n8n",
        category: "Automation",
        image: "/redesign/ai-dm/tools/n8n.png",
        description: "Workflow automation tool for technical marketers."
    },
    {
        name: "Funnelytics",
        category: "Funnel Mapping",
        image: "/redesign/ai-dm/tools/Funnelytics.png",
        description: "Map, track, and analyze your marketing funnels."
    },
    {
        name: "GrowthBook",
        category: "Experimentation",
        image: "/redesign/ai-dm/tools/Growthbook.png",
        description: "Open source platform for feature flagging and A/B testing."
    },
    {
        name: "CrewAI",
        category: "AI Agents",
        image: "/redesign/ai-dm/tools/Crew.ai.png",
        description: "Framework for building multi-agent AI teams."
    },
    {
        name: "Nano Banana",
        category: "Marketing",
        image: "/redesign/ai-dm/tools/Nano banana.png",
        description: "Specialized tool for marketing optimization."
    }
];

const AccordionItem = ({ item }: { item: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 dark:border-[#848484]/30 rounded-lg mb-4 overflow-hidden transition-colors duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 bg-white dark:bg-[#171717] hover:bg-gray-50 dark:hover:bg-[#1f1f1f] transition-colors text-left"
            >
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-[#9EFF1F] dark:text-[#9EFF1F] bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded uppercase tracking-wider transition-colors duration-300">
                            WEEK {item.week}
                        </span>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300">{item.topics.join(" & ")}</h4>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-all duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="font-sans p-5 pt-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-[#171717] border-t border-gray-100 dark:border-[#848484]/30 transition-colors duration-300">
                            {item.goal && (
                                <p className="text-sm text-gray-700 dark:text-gray-200 mb-4 font-medium transition-colors duration-300">
                                    {item.goal}
                                </p>
                            )}
                            {item.skills && (
                                <div className="mb-4">
                                    <p className="font-semibold mb-2 transition-colors duration-300 text-xs uppercase text-gray-500 dark:text-gray-400">What you'll learn:</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        {item.skills.map((skill: string, i: number) => (
                                            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {item.outcome && (
                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                                    <p className="text-sm font-semibold text-green-600 dark:text-green-400">Outcome: {item.outcome}</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function AIDMProgramEIE() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, isAuthenticated } = useUser();

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
            // Logic for syllabus download
        }
        handleModalClose();
    };

    // Payment states
    const [isProcessing, setIsProcessing] = useState(false);
    const [batches, setBatches] = useState<Batch[]>([]);
    const [selectedBatchId, setSelectedBatchId] = useState<string | null>(null);
    const [selectedPlanPrice, setSelectedPlanPrice] = useState<number>(0);
    const [showCancellationModal, setShowCancellationModal] = useState(false);

    const coursePrice = COURSE_PRICES.AIDM_NANO_DEGREE;
    const courseId = COURSE_IDS.AIDM_NANO_DEGREE;
    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    // Fetch active batches for this course
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

    // Initialize Razorpay SDK
    const initializeRazorpay = (): Promise<boolean> => {
        return new Promise((resolve) => {
            if (window.Razorpay) {
                resolve(true);
                return;
            }
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    // Handle payment cancellation
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

    // Handle course purchase
    const handleBuyCourse = async (amount: number) => {
        setSelectedPlanPrice(amount);
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
            if (!razorpayLoaded) {
                throw new Error('Failed to load Razorpay SDK');
            }

            const orderResponse = await api.post('/course-checkout/create-order', {
                courseId,
                batchId: selectedBatchId,
                amount: amount,
            });

            if (!orderResponse.data.success) {
                throw new Error(orderResponse.data.message || 'Failed to create order');
            }

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
                        } else {
                            throw new Error('Payment verification failed');
                        }
                    } catch (error: any) {
                        console.error('Payment verification error:', error);
                        toast.error('Payment verification failed. Please contact support.');
                    } finally {
                        setIsProcessing(false);
                    }
                },
                prefill: {
                    name: user?.FirstName ? `${user.FirstName} ${user.LastName || ''}` : '',
                    email: user?.Email || '',
                    contact: '',
                },
                theme: { color: '#9EFF1F' },
                modal: {
                    ondismiss: () => handlePaymentCancellation(enrollmentId),
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.on('payment.failed', () => handlePaymentCancellation(enrollmentId));
            razorpay.open();
        } catch (error: any) {
            console.error('Course purchase error:', error);
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
                    className={`lg:w-1/4 self-start flex-shrink-0 transition-all duration-200 ${isFixed ? 'lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:z-10' : ''
                        }`}
                    style={isFixed ? {
                        width: `${sidebarWidth}px`,
                        maxWidth: `${sidebarWidth}px`,
                        maxHeight: 'calc(100vh - 4rem)'
                    } : {}}
                >
                    <div className={isFixed ? 'lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)] lg:pr-4' : ''}>
                        <h2 className="text-3xl font-heading font-bold text-[#0A0F1E] dark:text-white mb-8 leading-tight transition-colors duration-300">
                            A Complete Road Map to Master AI Marketing
                        </h2>

                        <nav className="space-y-4 border-l-2 border-gray-200 dark:border-[#848484]/30 transition-colors duration-300">
                            {SECTIONS.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`font-sans block pl-4 py-1 text-left text-sm font-medium transition-all duration-300 w-full ${activeSection === section.id
                                        ? "border-l-2 border-[#9EFF1F] -ml-0.5 text-[#9EFF1F] font-bold"
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
                        <h3 className="text-2xl font-heading font-bold mb-6 dark:text-white transition-colors duration-300">Built for Real-World Marketing Roles</h3>
                        <p className="font-sans text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                            This is not a theory-heavy marketing course. At AcceleratorX, you will build real campaigns, use AI for content, ads, analytics, and automation, work across SEO, paid ads, social, email, CRO, and design end-to-end marketing funnels.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Build real campaigns, not mock slides",
                                "Use AI for content, ads, analytics, and automation",
                                "Work across SEO, paid ads, social, email, CRO",
                                "Design end-to-end marketing funnels",
                                "Graduate with a portfolio + capstone campaign"
                            ].map((text, i) => (
                                <li key={i} className="font-sans flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#9EFF1F] flex-shrink-0"></span>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-12 transition-colors duration-300"></div>
                    </section>

                    <section id="curriculum" className="scroll-mt-24 relative">

                        <img src="/redesign/ai-dm/n8n.png" alt="n8n" className="h-16 w-16 absolute top-40 -left-56" />
                        <img src="/redesign/ai-dm/planet.png" alt="n8n" className=" rotate-180  w-36 absolute top-64 -left-36" />
                        <img src="/redesign/ai-dm/greeen.png" alt="n8n" className="h-16 w-16 absolute top-[700px] -left-56" />

                        <h3 className="text-2xl font-heading font-bold mb-6 dark:text-white transition-colors duration-300">Learning Journey - Curriculum</h3>
                        <p className="font-sans text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                            A structured 16-week journey from digital foundations to autonomous AI marketing agents.
                        </p>
                        <div>
                            {CURRICULUM.map((item, idx) => (
                                <AccordionItem key={idx} item={item} />
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <PremiumButton
                                onClick={() => {
                                    // Normally we would set a state here to open a modal
                                    // For now, I'll add the necessary state and modal component
                                    setIsModalOpen(true);
                                    setIsDownload(true);
                                }}
                                icon={<ChevronDown size={18} className="transition-transform group-hover:translate-y-1 text-blue-400 group-hover:text-white" />}
                            >
                                Download Full Syllabus
                            </PremiumButton>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="tools" className="scroll-mt-24">
                        <div className="w-full mb-16">
                            <h3 className="text-2xl font-heading font-bold mb-8 dark:text-white transition-colors duration-300">Skillverse You Acually Master</h3>
                            <img
                                src="/redesign/ai-dm/toolsverse.webp"
                                alt="Skillverse You Actually Master"
                                className="w-full h-auto object-contain rounded-xl"
                            />
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-8 dark:text-white transition-colors duration-300">Tools Which You Master as a Professional</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                            {AIDM_TOOLS.map((tool, idx) => (
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

                    <section id="mentors" className="scroll-mt-24">
                        <h3 className="text-2xl font-heading font-bold mb-8 dark:text-white transition-colors duration-300">Mentors from Industry Leading Brands</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {AIDM_MENTORS.map((mentor, idx) => (
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
                        <h3 className="text-2xl font-heading font-bold mb-8 dark:text-white transition-colors duration-300">Industry-Recognized Nano Degree</h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-[#171717] rounded-2xl p-4 transition-colors duration-300">
                            <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/22d117f5e0031a8a28264cb1534717baed3eb5b1.webp?alt=media&token=3e74db69-6da1-4083-bdb3-fb3944a27764"
                                    alt="AI Digital Marketing Certificate"
                                    className="w-full h-auto rounded-md shadow-xl transition-colors duration-300"
                                    onError={(e) => { e.currentTarget.src = "/assets/programcertificates/Gen_AI_Cert.webp" }}
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                                    Nano Degree in AI-Powered Digital Marketing
                                </h4>
                                <p className="font-sans text-gray-600 dark:text-gray-400 text-sm mb-6 transition-colors duration-300">
                                    Validates your ability to:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Run AI-driven campaigns",
                                        "Create & optimize content",
                                        "Analyze performance",
                                        "Automate marketing workflows",
                                        "Execute end-to-end growth strategies"
                                    ].map((item, i) => (
                                        <li key={i} className="font-sans flex gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                            <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#9EFF1F] dark:text-[#9EFF1F] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
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
                        <img src="/redesign/ai-dm/hubspot.png" alt="green" className="h-24 w-2h-24 absolute top-[700px] -left-56" />
                        <h3 className="text-2xl font-heading font-bold mb-8 dark:text-white transition-colors duration-300">High-Paying Career Opportunities</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { role: "AI Marketer", pay: "₹15L - 30L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                                { role: "AI Content and SEO Specialist", pay: "₹10L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                                { role: "Performance Marketer", pay: "₹15L - 30L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                                { role: "AI Growth Marketer", pay: "₹15L - 40L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#171717] border border-[#848484]/30 rounded-xl p-8 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <h4 className="font-heading font-bold text-2xl text-white transition-colors duration-300">
                                            {item.role}
                                        </h4>
                                        <span className="font-sans bg-[#9EFF1F] text-black text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-300">{item.pay}</span>
                                    </div>
                                    <p className="font-sans text-gray-400 text-sm transition-colors duration-300 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="pricing" className="scroll-mt-24 relative">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-heading font-bold mb-4 text-white">Make an Investment for the AI Ready Future</h3>
                        </div>

                        <div className="flex justify-center max-w-5xl mx-auto">
                            <div
                                className="relative rounded-[10px] p-[1px] w-[375px]"
                                style={{
                                    background: "linear-gradient(180deg, #9EFF1F 0%, rgba(158, 255, 31, 0) 100%)",
                                    boxShadow: "4px 4px 10px 0px #9EFF1F66",
                                }}
                            >
                                <div
                                    className="bg-[#171717] rounded-[9px] p-6 h-full flex flex-col items-center text-center relative overflow-hidden"
                                    style={{
                                        boxShadow: "-4px -4px 10px 0px #9EFF1F66",
                                    }}
                                >
                                    {/* Gradient Overlay */}
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background: "linear-gradient(142.89deg, rgba(158, 255, 31, 0.2) 0%, rgba(158, 255, 31, 0) 100%)",
                                        }}
                                    ></div>

                                    <h4 className="font-heading font-bold text-white text-2xl mb-2 relative z-10">AI Marketing Track</h4>
                                    <p className="font-sans text-gray-300 text-sm mb-6 relative z-10">AI Digital Marketing</p>

                                    <div className="mb-4 relative z-10">
                                        <span className="font-heading text-4xl font-bold text-[#9EFF1F]">₹ 29,999</span>
                                        <span className="font-sans text-gray-400 text-sm ml-1">+ GST</span>
                                    </div>

                                    {/* Batch Selection Logic */}
                                    {batches.length > 0 && (
                                        <div className="mb-6 w-full relative z-10">
                                            <label className="block text-left text-sm font-medium text-gray-300 mb-2">Select Batch</label>
                                            <select
                                                value={selectedBatchId || ''}
                                                onChange={(e) => setSelectedBatchId(e.target.value)}
                                                className="font-sans w-full px-3 py-2 border border-[#848484]/30 rounded-lg text-sm focus:ring-[#9EFF1F] focus:border-[#9EFF1F] bg-black text-white"
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
                                            "4-month intensive, live instructor-led training",
                                            "Hands-on AI Marketing Campaigns",
                                            "Industry-recognised certification",
                                            "Lifetime access to all program materials",
                                            "Exclusive marketing community membership",
                                            "Career mentorship and guidance",
                                            "Build a strong marketing portfolio",
                                            "Learn to build Marketing Agents",
                                            "Learn to automate your marketing funnel"
                                        ].map((f, i) => (
                                            <li key={i} className="flex gap-2 items-start">
                                                <span className="text-gray-400 mt-1">•</span>
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Button Logic */}
                                    {isAuthenticated ? (
                                        <button
                                            onClick={() => handleBuyCourse(29999)}
                                            disabled={isProcessing || batches.length === 0}
                                            className="font-sans w-full py-3 bg-[#9EFF1F] hover:bg-[#8EEE0F] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10 disabled:bg-gray-600 disabled:text-gray-400"
                                        >
                                            {isProcessing ? <><div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Processing...</> : batches.length === 0 ? 'No batches available' : <>Apply Now <ArrowRight size={18} /></>}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => navigate('/sign-in', { state: { from: location } })}
                                            className="font-sans w-full py-3 bg-[#9EFF1F] hover:bg-[#8EEE0F] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10"
                                        >
                                            Sign in to Enroll <ArrowRight size={18} />
                                        </button>
                                    )}

                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Payment Cancellation Modal */}
                    <AnimatePresence>
                        {showCancellationModal && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                                onClick={() => setShowCancellationModal(false)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Cancelled</h3>
                                    <p className="text-gray-600 mb-6">
                                        Your payment was not completed. Would you like to try again?
                                    </p>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setShowCancellationModal(false)}
                                            className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowCancellationModal(false);
                                                handleBuyCourse(selectedPlanPrice);
                                            }}
                                            className="flex-1 py-2 bg-[#9EFF1F] text-black rounded-lg hover:bg-[#8EEE0F]"
                                        >
                                            Try Again
                                        </button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
            </div>
            <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />
        </div >
    );
}
