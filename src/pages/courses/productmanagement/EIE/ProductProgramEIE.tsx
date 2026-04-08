"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check, Linkedin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { COURSE_PRICES, COURSE_IDS } from "../../../../utils/constants_price";
import { useUser } from "../../../../context/UserContext";
import { api } from "../../../../api";
import { PremiumButton } from "../../../../components/common/PremiumButton";
import EnrollmentModal from "../../../../components/EnrollmentModal";

// Razorpay type declaration
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
    { id: "curriculum", label: "Learning Journey (Core PM + AI PM)" },
    { id: "tools", label: "Tools & Frameworks" },
    { id: "checklist", label: "Skill Checklist" },
    { id: "mentors", label: "Mentors" },
    { id: "certificate", label: "Industry-Recognized Certification" },
    { id: "career", label: "Career Outcomes" },
    { id: "pricing", label: "Invest in Your Product Management Career" },
];

const PM_MENTORS = [

    {
        name: "Ravi Ahlawat",
        role: "Sr. Product Manager - PayU",
        image: "/redesign/ai-pm/ai-pm-mentors/Ravi Ahlawat.png",
        linkedin: "https://www.linkedin.com/in/raviahlawat09/",
    },
    {
        name: "Subhasis Chandra",
        role: "Sr. Product Manager - Publicis Sapient",
        image: "/redesign/ai-pm/ai-pm-mentors/Subhasis Chandra.png",
        linkedin: "https://www.linkedin.com/in/subhasis-chandra/",
    },
    {
        name: "Anjali Sharma",
        role: "AI Product Manager - FPL Technologies",
        image: "/redesign/advance-gen-ai/gen-ai-mentors/Anjali Sharma.png",
        linkedin: "https://www.linkedin.com/in/anjalisharmaaa/",
    },
    {
        name: "Nitya Sagar",
        role: "Cofounder - Stealth Startup",
        image: "/redesign/ai-pm/ai-pm-mentors/Nitya Sagar.png",
        linkedin: "https://in.linkedin.com/in/nitya-sagar",
    },
    {
        name: "Ashu Mishra",
        role: "Technical Product Manager - Zigram",
        image: "/redesign/ai-crash-course/Ashu.webp",
        linkedin: "https://www.linkedin.com/in/ashumish/",
    }

];

// Module labels for grouping
const MODULE_LABELS: Record<string, string> = {
    "1": "Module 1: Core Product Management",
    "2": "Module 2: AI Product Management",
};

const CURRICULUM = [
    // Module 1: Core Product Management
    {
        module: "1",
        week: "1",
        topics: ["Introduction to Product Management"],
        goal: "Understand the fundamental roles and responsibilities of a PM and how they differ from other key stakeholders.",
        skills: [
            "PM vs. Product Owner vs. Project Manager",
            "Digital and physical product lifecycles",
            "Stakeholder identification and management",
            "Product thinking and decision-making",
        ],
        outcome: "Clear understanding of the PM role and the responsibilities across the product lifecycle.",
    },
    {
        module: "1",
        week: "2",
        topics: ["Users, Problems & Market Understanding"],
        goal: "Master the art of research to identify genuine user problems rather than just feature requests.",
        skills: [
            "Qualitative and quantitative research (interviews, surveys, data)",
            "Persona creation and Jobs-To-Be-Done (JTBD)",
            "Market research fundamentals and Product Adoption Lifecycle",
            "Guesstimation techniques",
        ],
        outcome: "Ability to create user personas and identify core problems to solve.",
    },
    {
        module: "1",
        week: "3",
        topics: ["Problem Discovery, Market & Product Strategy"],
        goal: "Learn to frame an opportunity by understanding market sizing and defining a unique value proposition.",
        skills: [
            "Market sizing (TAM, SAM, SOM)",
            "Competitive analysis and product vision",
            "Value proposition and differentiation",
            "Strategy vs. roadmap",
        ],
        outcome: "A defined product vision and differentiation strategy for a market opportunity.",
    },
    {
        module: "1",
        week: "4",
        topics: ["Product Development Methodologies & Roadmapping"],
        goal: "Explore execution frameworks like Agile and Scrum to manage scope, time, and quality effectively.",
        skills: [
            "Agile, Scrum, Kanban, and Waterfall",
            "Writing product vision statements",
            "Roadmapping techniques",
            "Managing scope, time, cost, and quality",
        ],
        outcome: "A strategic product roadmap aligned with organizational vision.",
    },
    {
        module: "1",
        week: "5",
        topics: ["Product Documentation & UX Foundations"],
        goal: "Learn to translate ambiguous problems into concrete Product Requirement Documents (PRDs).",
        skills: [
            "Product Requirement Documents (PRDs)",
            "Functional vs. non-functional requirements",
            "UX fundamentals and user journey mapping",
            "Collaboration with design teams",
        ],
        outcome: "Production of high-quality PRDs and user journey maps.",
    },
    {
        module: "1",
        week: "6",
        topics: ["UI/UX, Wireframing & Prioritization"],
        goal: "Master the principles of design thinking and frameworks for deciding what to build next.",
        skills: [
            "Low-fidelity and high-fidelity wireframes",
            "Prioritization frameworks: RICE, MoSCoW, Kano",
            "Usability testing fundamentals",
        ],
        outcome: "Wireframed product concepts prioritized using data-driven frameworks.",
    },
    {
        module: "1",
        week: "7",
        topics: ["MVP, Metrics & Product Analytics"],
        goal: "Define success for your Minimum Viable Product (MVP) through North Star Metrics and feedback loops.",
        skills: [
            "MVP definition and misconceptions",
            "Defining success metrics and North Star Metric",
            "Funnels and event tracking",
            "Feedback loops and iteration",
        ],
        outcome: "A clear MVP definition with identified success metrics and tracking plans.",
    },
    {
        module: "1",
        week: "8",
        topics: ["Go-To-Market (GTM) & Product Launch"],
        goal: "Prepare for launch by mastering pricing, positioning, and distribution channel strategy.",
        skills: [
            "GTM strategy components",
            "Pricing and positioning",
            "Launch readiness checklists and post-launch analysis",
            "Collaboration with marketing and sales",
        ],
        outcome: "A comprehensive launch plan and GTM strategy.",
    },
    {
        module: "1",
        week: "9",
        topics: ["Product Management Frameworks"],
        goal: "Deep dive into advanced segmentation and growth frameworks like AARRR.",
        skills: [
            "Product strategy frameworks",
            "User segmentation and cohort analysis",
            "AARRR framework",
            "Decision-making frameworks",
        ],
        outcome: "Application of growth frameworks to scale product impact.",
    },
    {
        module: "1",
        week: "10",
        topics: ["Experimentation & Decision Making"],
        goal: "Learn hypothesis-driven development and the fundamentals of A/B testing.",
        skills: [
            "Hypothesis-driven product development",
            "Experiment design and A/B testing",
            "Interpreting results and data-driven prioritization",
        ],
        outcome: "Ability to design and interpret product experiments.",
    },
    {
        module: "1",
        week: "11",
        topics: ["Technical Foundations for Product Managers"],
        goal: "Understand the \"under the hood\" tech basics including frontend, backend, and infrastructure.",
        skills: [
            "Frontend and backend fundamentals",
            "Infrastructure basics and system communication",
            "Analytics and instrumentation",
            "Technical PM interview preparation",
        ],
        outcome: "Technical fluency to collaborate effectively with engineering teams.",
    },
    {
        module: "1",
        week: "12",
        topics: ["APIs, Databases & SQL for PMs"],
        goal: "Master data querying and understand how APIs enable modern product integrations.",
        skills: [
            "APIs, integrations, and testing concepts",
            "Databases and schemas",
            "SQL fundamentals",
            "Using data for product decisions",
        ],
        outcome: "Proficiency in SQL and API concepts for data-driven decision-making.",
    },

    // Module 2: AI Product Management
    {
        module: "2",
        week: "13",
        topics: ["Introduction to AI Product Management"],
        goal: "Learn how AI PM differs from traditional product management and when not to use AI.",
        skills: [
            "What is AI Product Management",
            "Components: Data, Infrastructure, Models, UX",
            "AI-first vs. AI-powered vs. AI-assisted products",
        ],
        outcome: "Clear identification of AI components and appropriate product archetypes.",
    },
    {
        module: "2",
        week: "14",
        topics: ["AI Product Discovery & Problem Framing"],
        goal: "Identify AI-appropriate use cases while managing risks, uncertainty, and user trust.",
        skills: [
            "Identifying AI use cases and framing problem statements",
            "Data availability and quality",
            "AI risks and uncertainty",
            "AI user experience and trust",
        ],
        outcome: "AI-specific problem statements and data strategy.",
    },
    {
        module: "2",
        week: "15",
        topics: ["AI Models, LLMs & Modern AI Stack"],
        goal: "Master machine learning basics and prompting frameworks to evaluate model performance.",
        skills: [
            "Machine learning basics (Supervised, Unsupervised, Reinforcement)",
            "LLMs vs. SLMs and foundation models",
            "Prompting frameworks for PMs",
            "Model evaluation: Accuracy, Hallucinations, Latency, Cost",
        ],
        outcome: "Technical understanding of model types and evaluation metrics.",
    },
    {
        module: "2",
        week: "16",
        topics: ["AI Product Design, PRDs & Metrics"],
        goal: "Create AI-specific PRDs that account for model constraints and human-in-the-loop design.",
        skills: [
            "AI-specific PRDs and data requirements",
            "Model constraints and dependencies",
            "Human-in-the-loop design",
            "AI product metrics and iteration",
        ],
        outcome: "An AI-optimized PRD with comprehensive performance metrics.",
    },
    {
        module: "2",
        week: "17",
        topics: ["Building AI Products & Rapid MVPs"],
        goal: "Leverage \"Vibe Coding\" and AI tools to automate workflows and build rapid prototypes.",
        skills: [
            "Rapid AI MVP development",
            "Vibe coding for PMs",
            "AI for prototyping and internal tools",
            "Automating PM workflows using AI tools",
        ],
        outcome: "A functional AI-driven prototype or automated PM workflow.",
    },
    {
        module: "2",
        week: "18",
        topics: ["Advanced AI Systems, Ethics & Career Readiness"],
        goal: "Master RAG, multi-agent systems, and AI ethics to prepare for final capstone presentations.",
        skills: [
            "Retrieval-Augmented Generation (RAG) and MCPs",
            "AI agents and orchestration",
            "AI Ethics: Bias, Privacy, Responsible AI",
            "AI PM interview and capstone preparation",
        ],
        outcome: "Completion of a capstone project and readiness for AI PM roles.",
    },
];

const PM_TOOLS = [
    {
        name: "Jira",
        category: "Product Management",
        image: "/redesign/ai-pm/tools/Jira.png",
        description: "Standard tool for agile project management and issue tracking."
    },
    {
        name: "Asana",
        category: "Project Management",
        image: "/redesign/ai-pm/tools/asana.png",
        description: "Work management platform for team collaboration."
    },
    {
        name: "Notion",
        category: "Documentation",
        image: "/redesign/ai-pm/tools/Notion.png",
        description: "All-in-one workspace for notes, docs, and knowledge management."
    },
    {
        name: "Confluence",
        category: "Documentation",
        image: "/redesign/ai-pm/tools/confluence.png",
        description: "Collaborative workspace for team knowledge."
    },
    {
        name: "Figma",
        category: "Design",
        image: "/redesign/ai-pm/tools/figma.png",
        description: "Collaborative interface design tool for teams."
    },
    {
        name: "Miro",
        category: "Whiteboarding",
        image: "/redesign/ai-pm/tools/micro.png",
        description: "Online visual collaboration platform for brainstorming."
    },
    {
        name: "Mixpanel",
        category: "Analytics",
        image: "/redesign/ai-pm/tools/mixpanel.png",
        description: "Leading platform for user behavior analytics."
    },
    {
        name: "Google Analytics",
        category: "Analytics",
        image: "/redesign/ai-pm/tools/google-analytics.png",
        description: "Platform for tracking & reporting website traffic."
    },
    {
        name: "Postman",
        category: "API Testing",
        image: "/redesign/ai-pm/tools/Postman.png",
        description: "Platform for building and testing APIs."
    },
    {
        name: "GitHub",
        category: "Collaboration",
        image: "/redesign/ai-pm/tools/GitHub.png",
        description: "Platform for version control and development collaboration."
    },
    {
        name: "ChatGPT",
        category: "AI Assistant",
        image: "/redesign/ai-pm/tools/chatgpt.png",
        description: "AI-powered assistant for ideation and drafting."
    },
    {
        name: "Claude",
        category: "AI Assistant",
        image: "/redesign/ai-pm/tools/claude.png",
        description: "Advanced AI for reasoning and analysis."
    },
    {
        name: "Gemini",
        category: "AI Assistant",
        image: "/redesign/ai-pm/tools/gemini.png",
        description: "Multimodal AI model for advanced reasoning."
    },
    {
        name: "CrewAI",
        category: "AI Agents",
        image: "/redesign/ai-pm/tools/crewai.png",
        description: "Framework for orchestrating autonomous AI agents."
    },
    {
        name: "LangChain",
        category: "AI Framework",
        image: "/redesign/ai-pm/tools/langchain.png",
        description: "Building applications with LLMs through composability."
    },
    {
        name: "LangGraph",
        category: "AI Framework",
        image: "/redesign/ai-pm/tools/langgrapg.png",
        description: "Building stateful, multi-actor applications with LLMs."
    },
    {
        name: "Hugging Face",
        category: "AI Models",
        image: "/redesign/ai-pm/tools/hugging-face.png",
        description: "Platform for building, training, and deploying ML models."
    },
    {
        name: "Excel",
        category: "Data Analysis",
        image: "/redesign/ai-pm/tools/excel.png",
        description: "Essential tool for data organization and analysis."
    },
    {
        name: "Google Sheets",
        category: "Data Analysis",
        image: "/redesign/ai-pm/tools/google-sheets.png",
        description: "Collaborative spreadsheets for real-time data work."
    },
    {
        name: "Power BI",
        category: "Business Intelligence",
        image: "/redesign/ai-pm/tools/power-bi.png",
        description: "Interactive data visualization & reporting."
    },
    {
        name: "Tableau",
        category: "Business Intelligence",
        image: "/redesign/ai-pm/tools/tableau.png",
        description: "Visual analytics platform for business insights."
    },
    {
        name: "Looker",
        category: "Business Intelligence",
        image: "/redesign/ai-pm/tools/looker.png",
        description: "Modern BI & data exploration platform."
    },
    {
        name: "Google BigQuery",
        category: "Data Warehouse",
        image: "/redesign/ai-pm/tools/google-big-query.png",
        description: "Serverless, highly scalable data warehouse."
    },
    {
        name: "MySQL",
        category: "Databases",
        image: "/redesign/ai-pm/tools/mysql.png",
        description: "Popular open-source relational database system."
    }
];

const TOOLS_LIST = [
    { name: "Figma", logo: "/assets/tools/Figma.png" },
    { name: "Jira", logo: "/assets/tools/Jira.png" },
    { name: "Notion", logo: "/assets/tools/Notion.png" },
    { name: "Miro", logo: "/assets/tools/Group 102.png" },
    { name: "asana", logo: "/assets/tools/asana.png" },
    { name: "GitHub", logo: "/assets/tools/GitHub.png" },
    { name: "Postman", logo: "/assets/tools/Postman.png" },
    { name: "Mixpanel", logo: "/assets/tools/image 71.png" },
];

const PM_PHASES = [
    { icon: "/assets/productmanagement/skills/Container (2).png", title: "Discovery", description: "Understand user problems, identify opportunities, and explore AI product challenges.", phase: "PHASE 01" },
    { icon: "/assets/productmanagement/skills/Icon.png", title: "Strategy", description: "Design product strategies using AI insights and data-driven thinking.", phase: "PHASE 02" },
    { icon: "/assets/productmanagement/skills/Icon (1).png", title: "Design", description: "Structure product flows and AI interactions.", phase: "PHASE 03" },
    { icon: "/assets/productmanagement/skills/Container (3).png", title: "Build", description: "Create AI-powered product workflows and features.", phase: "PHASE 04" },
    { icon: "/assets/productmanagement/skills/Container (4).png", title: "Analyze", description: "Measure product performance and optimize using data.", phase: "PHASE 05" },
    { icon: "/assets/productmanagement/skills/Container (5).png", title: "Grow", description: "Scale products using AI-driven growth and retention strategies.", phase: "PHASE 06" }
];


// --- Components ---

const GradientLabel = ({ text, highlight }: { text: string; highlight?: string }) => (
    <div className="flex justify-center mb-4">
        <div
            className={`font-['Open_Sans',sans-serif] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase bg-clip-text text-transparent flex ${highlight ? 'gap-1' : 'gap-0'}`}
            style={{ backgroundImage: "linear-gradient(90deg, #5BA4E5 0%, #2DD4BF 33%, #22D3EE 66%, #06B6D4 100%)" }}
        >
            {highlight ? (
                <>
                    <span>{text.split(highlight)[0].trim()}</span>
                    <span className="text-[#5BA4E5]">{highlight}</span>
                    <span>{text.split(highlight)[1].trim()}</span>
                </>
            ) : (
                text
            )}
        </div>
    </div>
);


const AccordionItem = ({ week }: { week: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-100 dark:border-[#848484]/30 rounded-lg mb-4 overflow-hidden transition-all duration-300 hover:border-blue-600/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-[#171717] hover:bg-gray-50 dark:hover:bg-[#1f1f1f] transition-colors text-left"
            >
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="font-sans text-[10px] font-bold text-blue-600 bg-blue-600/10 px-3 py-1 rounded-full uppercase tracking-widest">
                            WEEK {week.week}
                        </span>
                        {week.module && (
                            <span className="font-sans text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                {MODULE_LABELS[week.module]}
                            </span>
                        )}
                    </div>
                    <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                        {week.topics.join(" & ")}
                    </h4>
                </div>
                <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                        ? "bg-blue-600 text-white rotate-180"
                        : "bg-gray-100 dark:bg-[#252525] text-gray-500 hover:bg-blue-600 hover:text-white"
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
                                {week.goal}
                            </p>
                            <div className="grid gap-8">
                                <div>
                                    <p className="font-bold mb-3 text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider">What You'll Learn:</p>
                                    <ul className="space-y-2">
                                        {week.skills.map((skill: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {week.outcome && (
                                    <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 p-4 rounded-xl self-start">
                                        <p className="text-sm font-bold text-blue-700 dark:text-blue-400 mb-1">Key Outcome:</p>
                                        <p className="text-sm text-blue-800 dark:text-blue-300">{week.outcome}</p>
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

export default function ProductProgramEIE() {
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
            // Logic for curriculum download
        }
        handleModalClose();
    };

    const coursePrice = COURSE_PRICES.PM_PROGRAM;
    const courseId = COURSE_IDS.PM_PROGRAM;
    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    // Fetch active batches for this course
    useEffect(() => {
        const fetchBatches = async () => {
            try {
                const baseUrl = apiUrl?.endsWith('/api') ? apiUrl.slice(0, -4) : apiUrl;
                const response = await fetch(`${baseUrl}/course-checkout/batches/${courseId}`);
                const result = await response.json();

                if (result.success && result.data) {
                    // Handle new response format: data.batches
                    const batchList = result.data.batches || result.data;
                    if (Array.isArray(batchList) && batchList.length > 0) {
                        setBatches(batchList);
                        // Auto-select first batch if available
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
            script.async = true;
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
        // Check if user is authenticated
        if (!isAuthenticated) {
            // Redirect to sign-in with current path as callback
            navigate('/sign-in', { state: { from: location } });
            return;
        }

        if (!selectedBatchId) {
            toast.error('Please select a batch first');
            return;
        }

        setIsProcessing(true);

        try {
            // Initialize Razorpay
            const razorpayLoaded = await initializeRazorpay();
            if (!razorpayLoaded) {
                throw new Error('Failed to load Razorpay SDK');
            }

            // Create order
            const orderResponse = await api.post('/course-checkout/create-order', {
                courseId,
                batchId: selectedBatchId,
                amount: amount,
            });

            if (!orderResponse.data.success) {
                throw new Error(orderResponse.data.error || 'Failed to create order');
            }

            const { orderId, enrollmentId } = orderResponse.data.data;

            // Open Razorpay modal
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: coursePrice.amountInPaise,
                currency: 'INR',
                name: 'AcceleratorX',
                description: coursePrice.name,
                order_id: orderId,
                handler: async function (response: any) {
                    try {
                        // Verify payment
                        const verificationResponse = await api.post('/course-checkout/verify-payment', {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                            enrollmentId,
                        });

                        if (verificationResponse.data.success) {
                            toast.success('Payment successful! Welcome to the program.');
                            navigate(`/course-payment/success/${response.razorpay_order_id}`);
                        } else {
                            throw new Error('Payment verification failed');
                        }
                    } catch (error: any) {
                        console.error('Payment verification error:', error);
                        toast.error(error.message || 'Payment verification failed');
                    }
                },
                modal: {
                    ondismiss: function () {
                        handlePaymentCancellation(enrollmentId);
                    },
                },
                prefill: {
                    name: user ? `${user.FirstName} ${user.LastName}` : '',
                    email: user?.Email || '',
                    contact: user?.Mobile || '',
                },
                theme: {
                    color: '#2563EB',
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.on('payment.failed', function (response: any) {
                console.error('Payment failed:', response.error);
                toast.error(`Payment failed: ${response.error.description}`);
                setIsProcessing(false);
            });
            paymentObject.open();
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
            <div ref={containerRef} className="max-w-7xl  mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">

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


                    <div className={isFixed ? 'lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)] lg:pr-4' : ''}>
                        <h2 className="font-heading text-3xl font-bold text-[#0A0F1E] dark:text-white mb-8 leading-tight transition-colors duration-300">
                            AI Programs that help you become a Leader
                        </h2>

                        <nav className="space-y-4 border-l-2 border-gray-200 dark:border-gray-700 transition-colors duration-300">
                            {SECTIONS.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`font-sans block pl-4 py-1 text-left text-sm font-medium transition-all duration-300 w-full ${activeSection === section.id
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

                        <h3 className="font-sans inline-block text-blue-600 font-bold text-xs tracking-widest px-3 py-1 rounded mb-6 uppercase transition-colors duration-300">
                            Program Description
                        </h3>
                        <h3 className="font-heading text-5xl font-bold mb-6 dark:text-white transition-colors duration-300">A Product Management Program Built for Real-World PM Roles</h3>
                        <p className="font-sans text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                            This is not a theory-heavy PM course.
                            AcceleratorX trains you to think and operate like a real Product Manager — handling ambiguity, making trade-offs, working with engineers & designers, and shipping products.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Covers core PM + AI Product Management",
                                "Strong focus on problem discovery and decision-making",
                                "Real deliverables: PRDs, roadmaps, MVPs, metrics",
                                "Hands-on exposure to AI-powered product workflows",
                                "Career-ready capstone and mock interviews",
                            ].map((text, i) => (
                                <li key={i} className="font-sans flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-12 transition-colors duration-300"></div>
                    </section>

                    <section id="curriculum" className="scroll-mt-24 relative">
                        <img src="/redesign/ai-pm/github.png" alt="github" className="h-16 w-16 absolute top-40 -right-20" />

                        <h3 className="font-heading text-2xl font-bold mb-6 dark:text-white transition-colors duration-300">LEARNING JOURNEY (CORE PM + AI PM)</h3>
                        <p className="font-sans text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
                            A comprehensive journey covering everything from user research to AI scaling.
                        </p>
                        <div className="space-y-4">
                            {CURRICULUM.map((week, idx) => (
                                <AccordionItem key={idx} week={week} />
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
                                Download Full Curriculum
                            </PremiumButton>
                            <img src="/redesign/ai-pm/ast.png" alt="astronaut" className="absolute bottom-40 -left-[400px]" />
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="bydp" className="scroll-mt-24">
                        <div className="bg-[#171717] rounded-2xl p-8 md:p-12 border border-[#848484]/30 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

                            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-white relative z-10">Build your dream product</h3>

                            <div className="space-y-10 relative z-10">
                                <div>
                                    <h4 className="font-heading text-xl font-bold text-blue-400 mb-3">What is BYDP?</h4>
                                    <p className="font-sans text-gray-300 text-lg leading-relaxed">
                                        Build Your Dream Product (BYDP) is a structured design and development process that turns raw ideas into usable, market-ready digital products-fast, focused, and without guesswork.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-heading text-xl font-bold text-blue-400 mb-3">Why BYDP?</h4>
                                    <p className="font-sans text-gray-300 text-lg leading-relaxed">
                                        Because building the wrong product is more expensive than building it right. BYDP aligns strategy, design, and execution so you ship something users actually want, not just something that looks good.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="skillverse" className="scroll-mt-24">
                        <div className="w-full mb-16">
                            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-white relative z-10">Skillverse You Actually Master</h3>

                            <img
                                src="/redesign/ai-pm/pm-skillverse.webp"
                                alt="Skillverse You Actually Master"
                                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                            />
                        </div>
                    </section>

                    <section id="tools" className="scroll-mt-24">
                        <div className="text-center">
                            <h3 className="font-heading text-3xl font-bold mb-12 dark:text-white transition-colors duration-300 uppercase">Tools You Will Work With</h3>
                            
                            <div className="relative w-full overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                                <style>{`
                                    @keyframes infinite-scroll-left {
                                        from { transform: translateX(0); }
                                        to { transform: translateX(-50%); }
                                    }
                                    .animate-infinite-scroll-left {
                                        animation: infinite-scroll-left 30s linear infinite;
                                    }
                                `}</style>
                                <div className="flex w-max gap-16 animate-infinite-scroll-left items-center py-8">
                                    {[...TOOLS_LIST, ...TOOLS_LIST].map((t, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2 group transition-all duration-300">
                                            <img 
                                                src={t.logo} 
                                                alt={t.name} 
                                                className="h-10 sm:h-12 w-auto object-contain grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" 
                                            />
                                            <span className="text-[10px] font-bold text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest">{t.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div className="mt-24">
                            <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">DETAILED TOOLS & FRAMEWORKS</h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {PM_TOOLS.map((tool, idx) => (
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
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="checklist" className="scroll-mt-24">
                        <div className="max-w-[1267px] mx-auto text-center px-4">
                            <GradientLabel text="CURRICULUM" highlight="CURRICULUM" />
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">AI Product Management Skill Checklist</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                                {PM_PHASES.map((phase, i) => (
                                    <div key={i} className="flex flex-col items-center group">
                                        <div className="w-20 h-20 rounded-full bg-[#111] border border-white/10 flex items-center justify-center mb-6 group-hover:border-blue-500 transition-all duration-300 shadow-xl group-hover:shadow-blue-500/10">
                                            <img src={phase.icon} alt={phase.title} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <h4 className="text-white text-base font-bold mb-1">{phase.title}</h4>
                                        <p className="text-[#A0A8B8] text-[11px] mb-2 px-2 leading-tight h-10 overflow-hidden">{phase.description}</p>
                                        <span className="text-blue-500 text-[10px] font-bold tracking-widest uppercase">{phase.phase}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>


                    <section id="mentors" className="scroll-mt-24 relative">


                        <h3 className="font-heading text-2xl font-bold mb-8">Mentors from Top Tech Leaders</h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {PM_MENTORS.map((mentor, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-50 relative dark:bg-[#171717] rounded-xl overflow-hidden border border-gray-100 dark:border-[#848484]/30 group hover:shadow-md transition-all"
                                >
                                    <div className="aspect-square relative overflow-hidden">
                                        <img
                                            src={mentor.image || "/placeholder.svg"}
                                            alt={mentor.name}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 text-center relative">
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
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">Industry-Recognized Nano Degree in Product Management</h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-[#171717] rounded-2xl p-8  transition-colors duration-300">
                            <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                                <img
                                    src="/redesign/ai-pm/PM-certificate.webp"
                                    alt="Product Management Certificate"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col gap-4">
                                <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                                    AI Product Management Certification
                                </h4>
                                <p className="font-sans text-gray-600 dark:text-gray-300 text-sm mb-6 transition-colors duration-300">
                                    Earn an AI Product Management Certification that validates your ability to:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Design AI-powered product strategies",
                                        "Build and manage product roadmaps",
                                        "Apply product analytics to decision-making",
                                        "Lead cross-functional execution",
                                        "Develop AI-enabled product solutions",
                                    ].map((item, i) => (
                                        <li key={i} className="font-sans flex gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                            <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                                <Check size={10} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="font-sans text-gray-600 dark:text-gray-300 text-sm mb-6 transition-colors duration-300">
                                    For professionals looking to become AI Product Managers in India, this certification strengthens your market positioning.
                                </p>
                            </div>
                        </div>
                        <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
                    </section>

                    <section id="career" className="scroll-mt-24">
                        <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">High-Paying Career Opportunities</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { role: "Product Manager", pay: "₹12L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                                { role: "Associate / Junior PM", pay: "₹12L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                                { role: "Founder / Product Owner", pay: "₹12L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                                { role: "AI Product Manager", pay: "₹12L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#171717] border border-[#848484]/30 rounded-xl p-8 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <h4 className="font-heading font-bold text-2xl text-white transition-colors duration-300">
                                            {item.role}
                                        </h4>
                                        <span className="font-sans bg-[#5BA4E5] text-black text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-300">{item.pay}</span>
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
                        <img src="/redesign/ai-pm/Miro-Logo.png" alt="Miro-Logo" className="absolute w-24 h-24 bottom-40 -left-[400px] rotate-12" />

                        <div className="text-center mb-16">
                            <h3 className="font-heading text-4xl font-bold mb-4 text-white">Make an Investment for the AI Ready Future</h3>
                        </div>

                        <div className="flex justify-center max-w-5xl mx-auto">
                            <div
                                className="relative rounded-[10px] p-[1px] w-[375px]"
                                style={{
                                    background: "linear-gradient(180deg, #5BA4E5 0%, rgba(91, 164, 229, 0) 100%)",
                                    boxShadow: "4px 4px 10px 0px #5BA4E566",
                                }}
                            >
                                <div
                                    className="bg-[#171717] rounded-[9px] p-6 h-full flex flex-col items-center text-center relative overflow-hidden"
                                    style={{
                                        boxShadow: "-4px -4px 10px 0px #5BA4E566",
                                    }}
                                >
                                    {/* Gradient Overlay */}
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background: "linear-gradient(142.89deg, rgba(91, 164, 229, 0.2) 0%, rgba(91, 164, 229, 0) 100%)",
                                        }}
                                    ></div>

                                    <h4 className="font-heading font-bold text-white text-2xl mb-2 relative z-10">Regular</h4>
                                    <p className="font-sans text-gray-300 text-sm mb-6 relative z-10">AI Product Management</p>

                                    <div className="mb-4 relative z-10">
                                        <span className="font-heading text-4xl font-bold text-[#5BA4E5]">₹ 49,999</span>
                                        <span className="font-sans text-gray-400 text-sm ml-1">+ GST</span>
                                    </div>

                                    {/* Batch Selection Logic */}
                                    {batches.length > 0 && (
                                        <div className="mb-6 w-full relative z-10">
                                            <label className="block text-left text-sm font-medium text-gray-300 mb-2">Select Batch</label>
                                            <select
                                                value={selectedBatchId || ''}
                                                onChange={(e) => setSelectedBatchId(e.target.value)}
                                                className="font-sans w-full px-3 py-2 border border-[#848484]/30 rounded-lg text-sm focus:ring-[#5BA4E5] focus:border-[#5BA4E5] bg-black text-white"
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
                                            "Hands-on building AI Products",
                                            "Industry-recognised certification",
                                            "Lifetime access to all program materials",
                                            "Exclusive AI community membership",
                                            "Career mentorship and guidance",
                                            "Build a strong product portfolio",
                                            "Interview preparation for product roles",
                                            "Build your dream product",
                                            "Get exclusive access to PM Job openings"
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
                                            onClick={() => handleBuyCourse(49999)}
                                            disabled={isProcessing || batches.length === 0}
                                            className="font-sans w-full py-3 bg-[#5BA4E5] hover:bg-[#4a90d0] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10 disabled:bg-gray-600 disabled:text-gray-400"
                                        >
                                            {isProcessing ? <><div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Processing...</> : batches.length === 0 ? 'No batches available' : <>Apply Now <ArrowRight size={18} /></>}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => navigate('/sign-in', { state: { from: location } })}
                                            className="font-sans w-full py-3 bg-[#5BA4E5] hover:bg-[#4a90d0] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10"
                                        >
                                            Sign in to Enroll <ArrowRight size={18} />
                                        </button>
                                    )}

                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Payment Cancellation Modal */}
                    {showCancellationModal && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4 relative transition-colors duration-300">
                                <button
                                    onClick={() => setShowCancellationModal(false)}
                                    className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                                >
                                    ✕
                                </button>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                                        <svg className="w-8 h-8 text-yellow-500 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Payment Cancelled</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">Your payment was cancelled. Would you like to try again?</p>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => {
                                                setShowCancellationModal(false);
                                                handleBuyCourse(coursePrice.amount);
                                            }}
                                            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Retry Payment
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowCancellationModal(false);
                                            }}
                                            className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
            <EnrollmentModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />
        </div>
    );
}
