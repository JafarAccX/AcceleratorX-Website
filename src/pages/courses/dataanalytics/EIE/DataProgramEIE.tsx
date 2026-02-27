"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check, Linkedin } from "lucide-react";
import toast from 'react-hot-toast';
import { useUser } from '../../../../context/UserContext';
import { COURSE_IDS, COURSE_PRICES } from '../../../../utils/constants_price';
import { api } from '../../../../api';
import { PremiumButton } from "../../../../components/common/PremiumButton";
import EnrollmentModal from "../../../../components/EnrollmentModal";


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
  { id: "pricing", label: "Invest in Your Analytics Career" },
];

const MENTORS = [
  {
    name: "Ravi Ahlawat",
    role: "Senior PM at Paytm",
    image: "/redesign/ai-da/mentors/Ravi Ahlawat.png",
    linkedin: "https://www.linkedin.com/in/raviahlawat09/",
  },
  {
    name: "Aakash Maurya",
    role: "Sr. ML Engineer at Nagarro",
    image: "/redesign/ai-da/mentors/Aakash Maurya.png",
    linkedin: "https://www.linkedin.com/in/aakash-maurya/",
  },
  {
    name: "Nitish Setty",
    role: "Analytics Lead at DataFlow",
    image: "/redesign/ai-da/mentors/Nitish Setty.png",
    linkedin: "https://www.linkedin.com/in/nitish-setty/",
  },
  {
    name: "Shubham Swaraj",
    role: "BI Developer at InsightTech",
    image: "/redesign/ai-da/mentors/Shubham Swaraj.png",
    linkedin: "https://www.linkedin.com/in/shubham-swaraj/",
  },
  {
    name: "Himangi Sharma",
    role: "Senior AI Engineer - Google",
    image: "/redesign/ai-da/mentors/Himangi Sharma.png",
    linkedin: "https://www.linkedin.com/in/himangi-sharma",
  },
  {
    name: "Preeti Money",
    role: "Associate Director at Walmart",
    image: "/redesign/ai-da/mentors/Preeti Money.png",
    linkedin: "https://www.linkedin.com/in/preeti-money/",
  },
];

const CURRICULUM = [
  {
    module: "1",
    topics: ["Foundations of Data Analysis"],
    goal: "Build essential data skills in Excel and introductory BI tools to ensure a solid base in data manipulation and visualization.",
    skills: [
      "Data cleaning and aggregation",
      "Pivot tables",
      "Introductory dashboards",
      "Tools: Excel, Tableau, Power BI",
    ],
    outcome: "Create an interactive dashboard summarizing a sample dataset.",
  },
  {
    module: "2",
    topics: ["SQL for Data Analysis"],
    goal: "Learn SQL to query and manipulate relational databases, a critical skill for AI data stored in structured databases.",
    skills: [
      "Relational databases and conditional filtering",
      "Table joins and data aggregation",
      "Tools: MySQL or Google BigQuery",
    ],
    outcome: "SQL-based analysis of sales or customer data, uncovering key patterns.",
  },
  {
    module: "3",
    topics: ["Statistics and Probability for Data Analysis"],
    goal: "Develop essential statistical skills supporting hypothesis testing and decision-making, vital for understanding user behavior.",
    skills: [
      "Descriptive statistics",
      "Hypothesis testing",
      "Relational database concepts for AI data",
    ],
    outcome: "Enhanced ability to analyze user trends through a statistical lens.",
  },
  {
    module: "4",
    topics: ["Python for Data Analysis"],
    goal: "Master Python for data manipulation, EDA, and visualization—an invaluable tool for AI analysts to gain deeper insights.",
    skills: [
      "DataFrames and data cleaning",
      "Advanced visualization",
      "Tool: Jupyter Notebook",
    ],
    outcome: "Exploratory Data Analysis (EDA) of user trends in an AI dataset.",
  },
  {
    module: "5",
    topics: ["Advanced Business Intelligence and Dashboarding"],
    goal: "Create interactive dashboards that go beyond static views, designed specifically for tracking AI metrics and user behavior.",
    skills: [
      "AI KPI tracking",
      "A/B test visualization",
      "Tools: Tableau, Power BI",
    ],
    outcome: "Build a dashboard that captures user journeys, AI KPIs, and conversion funnels.",
  },
  {
    module: "6",
    topics: ["Product Analytics Specialization (Unique to Program)"],
    goal: "Master the nuances of product-specific metrics and behavior analysis to understand user engagement over time.",
    skills: [
      "Key Metrics: DAU, MAU, LTV, retention, and churn analysis",
      "Funnel analysis and user journey mapping",
      "Predictive analytics and churn prediction models",
      "Customer segmentation using RFM analysis and clustering",
    ],
    outcome: "Conduct cohort analysis to visualize retention curves and propose strategies to boost product satisfaction.",
  },
  {
    module: "7",
    topics: ["Modern Data Stack for Analysts"],
    goal: "Learn modern data infrastructure, pipelines, and tools used in data-driven organizations.",
    skills: [
      "Data warehousing (BigQuery, Snowflake)",
      "ETL/ELT workflows and dbt",
      "Analytics platforms like Metabase and Looker Studio",
    ],
    outcome: "Deploy a pipeline using BigQuery + dbt + Tableau/Power BI to create a business performance dashboard.",
  },
  {
    module: "8",
    topics: ["AI Tools and Automation for Data Analysts"],
    goal: "Develop skills to enhance data workflows using AI-powered tools, improving analysis speed and quality through automation.",
    skills: [
      "Generative AI (ChatGPT, Copilot, Bard) for SQL and Python scripting",
      "AI-enabled data quality checks and report summarization",
      "Predictive modeling using AutoML (BigQuery ML)",
    ],
    outcome: "Automate data analysis using AI tools for SQL generation, cleaning, and insight summarization.",
  },
  {
    module: "Capstone",
    topics: ["Product Analysis & Dashboard Presentation"],
    goal: "Integrate all learned skills to solve a real business problem, culminating in a professional dashboard and data-driven recommendations.",
    skills: [
      "Defining AI goals (retention improvement, behavior analysis)",
      "Multi-page interactive dashboard creation",
      "Final presentation skills",
    ],
    outcome: "Graduate with a career-ready portfolio including a dashboard, written report, and final presentation.",
  },
];

const DATA_TOOLS = [
  {
    name: "Python",
    category: "Programming",
    image: "/redesign/ai-da/tools/python.png",
    description: "Versatile language for data engineering & analysis."
  },
  {
    name: "SQL",
    category: "Databases",
    image: "/redesign/ai-da/tools/sql.png",
    description: "Standard language for managing relational databases."
  },
  {
    name: "Excel",
    category: "Data Analysis",
    image: "/redesign/ai-da/tools/excel.png",
    description: "Essential tool for data entry, analysis, and visualization."
  },
  {
    name: "Pandas",
    category: "Data Manipulation",
    image: "/redesign/ai-da/tools/pandas.png",
    description: "Powerful library for data analysis & manipulation."
  },
  {
    name: "NumPy",
    category: "Numerical Computing",
    image: "/redesign/ai-da/tools/numpy.png",
    description: "Fundamental package for scientific computing."
  },
  {
    name: "Jupyter",
    category: "Development",
    image: "/redesign/ai-da/tools/jupyter.png",
    description: "Interactive computing environment for data science."
  },
  {
    name: "Power BI",
    category: "Business Intelligence",
    image: "/redesign/ai-da/tools/power-bi.png",
    description: "Interactive data visualization & reporting."
  },
  {
    name: "Tableau",
    category: "Business Intelligence",
    image: "/redesign/ai-da/tools/tableau.png",
    description: "Visual analytics platform for business insights."
  },
  {
    name: "Looker",
    category: "Business Intelligence",
    image: "/redesign/ai-da/tools/looker.png",
    description: "Modern BI & data exploration platform."
  },
  {
    name: "Metabase",
    category: "Business Intelligence",
    image: "/redesign/ai-da/tools/metabase.png",
    description: "Open source analytics for everyone."
  },
  {
    name: "Google Analytics",
    category: "Web Analytics",
    image: "/redesign/ai-da/tools/google-analytics.png",
    description: "Platform for tracking & reporting website traffic."
  },
  {
    name: "Mixpanel",
    category: "Product Analytics",
    image: "/redesign/ai-da/tools/mixpanel.png",
    description: "Advanced analytics for product insights & tracking."
  },
  {
    name: "MySQL",
    category: "Databases",
    image: "/redesign/ai-da/tools/mysql.png",
    description: "Popular open-source relational database system."
  },
  {
    name: "Snowflake",
    category: "Data Warehouse",
    image: "/redesign/ai-da/tools/snowflake.png",
    description: "Cloud-based data warehousing platform."
  },
  {
    name: "Google BigQuery",
    category: "Data Warehouse",
    image: "/redesign/ai-da/tools/google-bigquery.png",
    description: "Serverless, highly scalable data warehouse."
  },
  {
    name: "dbt",
    category: "Data Transformation",
    image: "/redesign/ai-da/tools/dbt.png",
    description: "Transform data in your warehouse."
  },
  {
    name: "Matplotlib",
    category: "Visualization",
    image: "/redesign/ai-da/tools/matplotlib.png",
    description: "Comprehensive library for static visualizations."
  },
  {
    name: "Seaborn",
    category: "Visualization",
    image: "/redesign/ai-da/tools/seaborn.png",
    description: "Statistical data visualization based on matplotlib."
  },
  {
    name: "Scikit-Learn",
    category: "Machine Learning",
    image: "/redesign/ai-da/tools/scikit-lear.png",
    description: "Simple and efficient tools for predictive analysis."
  },
  {
    name: "TensorFlow",
    category: "Machine Learning",
    image: "/redesign/ai-da/tools/tensorflow.png",
    description: "End-to-end platform for machine learning."
  },
  {
    name: "Keras",
    category: "Deep Learning",
    image: "/redesign/ai-da/tools/keras.png",
    description: "High-level neural networks API for AI development."
  },
  {
    name: "Google AutoML",
    category: "Machine Learning",
    image: "/redesign/ai-da/tools/googe-automl.png",
    description: "Train high-quality custom machine learning models."
  },
  {
    name: "ChatGPT",
    category: "AI Assistant",
    image: "/redesign/ai-da/tools/chatgpt.png",
    description: "AI-powered coding assistance and content generation."
  },
  {
    name: "Gemini",
    category: "AI Assistant",
    image: "/redesign/ai-da/tools/gemini.png",
    description: "Multimodal AI model for advanced reasoning."
  },
  {
    name: "GitHub",
    category: "Collaboration",
    image: "/redesign/ai-da/tools/GitHub.png",
    description: "Platform for version control & code collaboration."
  }
];

// --- Components ---

const AccordionItem = ({ module }: { module: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isCapstone = module.module === "Capstone";

  return (
    <div className="border border-gray-100 dark:border-[#848484]/30 rounded-lg mb-4 overflow-hidden transition-all duration-300 hover:border-[#5BA4E5]/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-white dark:bg-[#171717] hover:bg-gray-50 dark:hover:bg-[#1f1f1f] transition-colors text-left"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-sans text-[10px] font-bold text-[#5BA4E5] bg-[#5BA4E5]/10 px-3 py-1 rounded-full uppercase tracking-widest">
              {isCapstone ? "Capstone Project" : `Module ${module.module}`}
            </span>
          </div>
          <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
            {module.topics.join(" & ")}
          </h4>
        </div>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
            ? "bg-[#5BA4E5] text-white rotate-180"
            : "bg-gray-100 dark:bg-[#252525] text-gray-500 hover:bg-[#5BA4E5] hover:text-white"
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
                {module.goal}
              </p>
              <div className="grid gap-8">
                <div>
                  <p className="font-bold mb-3 text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider">What You'll Learn:</p>
                  <ul className="space-y-2">
                    {module.skills.map((skill: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#5BA4E5] flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                {module.outcome && (
                  <div className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30 self-start">
                    <p className="text-sm font-bold text-[#5BA4E5] mb-1">Key Outcome:</p>
                    <p className="text-sm text-blue-800 dark:text-blue-300">{module.outcome}</p>
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

export default function DataProgramEIE() {
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
  const [selectedPlanPrice, setSelectedPlanPrice] = useState<number>(0);
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

  const coursePrice = COURSE_PRICES.DATA_ANALYTICS;
  const courseId = COURSE_IDS.DATA_ANALYTICS;
  const apiUrl = import.meta.env.VITE_BACKEND_URL;

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
      } catch (error) { console.error('Error fetching batches:', error); }
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
      await fetch(`${baseUrl}/course-checkout/cancel-payment`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ enrollmentId }) });
    } catch (error) { console.error('Error handling payment cancellation:', error); }
    finally { setIsProcessing(false); setShowCancellationModal(true); }
  };

  const handleBuyCourse = async (amount: number) => {
    setSelectedPlanPrice(amount);
    if (!isAuthenticated) { navigate('/sign-in', { state: { from: location } }); return; }
    if (!selectedBatchId) { toast.error('Please select a batch first'); return; }
    setIsProcessing(true);
    try {
      const razorpayLoaded = await initializeRazorpay();
      if (!razorpayLoaded) throw new Error('Failed to load Razorpay SDK');
      const orderResponse = await api.post('/course-checkout/create-order', { courseId, batchId: selectedBatchId, amount: amount });
      if (!orderResponse.data.success) throw new Error(orderResponse.data.message || 'Failed to create order');
      const { orderId, enrollmentId } = orderResponse.data.data;
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, amount: orderResponse.data.data.amount, currency: orderResponse.data.data.currency || 'INR',
        name: 'AcceleratorX', description: coursePrice.name, order_id: orderId,
        handler: async (response: any) => {
          try {
            const verifyResponse = await api.post('/course-checkout/verify-payment', { razorpay_payment_id: response.razorpay_payment_id, razorpay_order_id: response.razorpay_order_id, razorpay_signature: response.razorpay_signature, enrollmentId });
            if (verifyResponse.data.success) { toast.success('Payment successful! Welcome to the program.'); navigate(`/course-payment/success/${orderId}`); }
            else throw new Error('Payment verification failed');
          } catch (error: any) { toast.error('Payment verification failed. Please contact support.'); }
          finally { setIsProcessing(false); }
        },
        prefill: { name: user?.FirstName ? `${user.FirstName} ${user.LastName || ''}` : '', email: user?.Email || '', contact: '' },
        theme: { color: '#2563EB' },
        modal: { ondismiss: () => handlePaymentCancellation(enrollmentId) },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.on('payment.failed', () => handlePaymentCancellation(enrollmentId));
      razorpay.open();
    } catch (error: any) { toast.error(error.message || 'Failed to process payment. Please try again.'); setIsProcessing(false); }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for sticky header

      // Calculate if sidebar should be fixed
      if (containerRef.current && sidebarRef.current) {
        const containerTop = containerRef.current.offsetTop;
        const containerBottom = containerTop + containerRef.current.offsetHeight;
        const sidebarHeight = sidebarRef.current.offsetHeight;
        const viewportCenter = window.scrollY + window.innerHeight / 2;
        const sidebarCenter = containerTop + sidebarHeight / 2;

        // Start fixing when sidebar center reaches viewport center
        const shouldStartFixed = viewportCenter > sidebarCenter;

        // Stop fixing when we reach the end of the container
        // Calculate if the bottom of the fixed sidebar would go past the container bottom
        const sidebarBottom = window.scrollY + window.innerHeight / 2 + sidebarHeight / 2;
        const shouldStopFixed = sidebarBottom > containerBottom;

        setIsFixed(shouldStartFixed && !shouldStopFixed);

        // Update sidebar width to match container column width
        if (!isFixed) {
          setSidebarWidth(sidebarRef.current.offsetWidth);
        }
      }

      // Update active section
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

    // Initial width calculation
    if (sidebarRef.current) {
      setSidebarWidth(sidebarRef.current.offsetWidth);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isFixed]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for header
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="dark:bg-[#000000] py-20 text-[#0A0F1E] dark:text-white transition-colors duration-300">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">

        {/* Spacer to maintain layout when sidebar is fixed */}
        {isFixed && <div className="lg:w-1/4 flex-shrink-0" style={{ width: `${sidebarWidth}px`, maxWidth: `${sidebarWidth}px` }} />}

        {/* Sticky Sidebar */}
        <aside
          ref={sidebarRef}
          className={`lg:w-1/4 self-start flex-shrink-0 relative transition-all duration-200 ${isFixed ? 'lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:z-10' : ''
            }`}
          style={isFixed ? {
            width: `${sidebarWidth}px`,
            maxWidth: `${sidebarWidth}px`,
            maxHeight: 'calc(100vh - 4rem)'
          } : {}}
        >
          <img src="/redesign/ai-da/half-planet.png" alt="AI Programs that helps to become a Professional" className="absolute -top-36 -left-28" />
          <div className={isFixed ? 'relative lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)] lg:pr-4' : 'relative'}>
            <h2 className="font-heading text-3xl font-bold text-[#0A0F1E] dark:text-white mb-8 leading-tight transition-colors duration-300">
              AI Programs that helps to become a Professional
            </h2>

            <nav className="space-y-4 border-l-2 border-gray-200 dark:border-[#848484]/30 transition-colors duration-300">
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

        {/* Main Content Area */}
        <main className="lg:w-3/4 space-y-24">
          {/* Section 1: Why this Program */}
          <section id="why-this-program" className="scroll-mt-24 relative">
            <img src="/redesign/ai-da/numpy.png" alt="Numpy" className="absolute h-24 w-24 top-48 md:-top-20 md:right-40 right-0" />

            <h3 className="font-heading text-2xl font-bold mb-6 dark:text-white transition-colors duration-300">Built for Real Analytics & Product Teams</h3>
            <p className="font-sans text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
              This is not just a theory course. At AcceleratorX, you’ll work with real datasets, build end-to-end dashboards, perform product & user analysis, apply AI tools to automate analysis, and graduate with a capstone-grade analytics portfolio.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Work with real datasets",
                "Build end-to-end dashboards",
                "Perform product & user analysis",
                "Apply AI tools to automate analysis",
                "Graduate with a capstone-grade analytics portfolio"
              ].map((text, i) => (
                <li key={i} className="font-sans flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-12 transition-colors duration-300"></div>
          </section>

          {/* Section 2: Curriculum */}
          <section id="curriculum" className="scroll-mt-24">
            <h3 className="font-heading text-2xl font-bold mb-6 dark:text-white transition-colors duration-300">Learning Journey - Curriculum</h3>
            <p className="font-sans text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
              A complete roadmap from Foundations to Advanced AI-Powered Analytics
            </p>
            <div className="space-y-4">
              {CURRICULUM.map((module, idx) => (
                <AccordionItem key={idx} module={module} />
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
            </div>
            <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
          </section>

          {/* Section 3: Tools */}
          <section id="tools" className="scroll-mt-24 relative">
            <div className="w-full mb-16">
              <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">Skillverse You Acually Master</h3>
              <img
                src="/redesign/ai-da/data-analytics.webp"
                alt="Skillverse You Actually Master"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            <img src="/redesign/ai-da/Google-Analytics.png" className="absolute -left-96 top-10 h-24 w-24" />
            <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">Tools Which You Master as a Professional</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {DATA_TOOLS.map((tool, idx) => (
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

          {/* Section 4: Mentors */}
          <section id="mentors" className="scroll-mt-24">
            <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">Mentors from Top Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {MENTORS.map((mentor, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 dark:bg-[#171717] rounded-xl overflow-hidden border border-gray-100 dark:border-[#848484]/30 group hover:shadow-md transition-all duration-300"
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

          {/* Section 5: Certificate */}
          <section id="certificate" className="scroll-mt-24">
            <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">Industry-Recognized Nano Degree</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-[#171717] rounded-2xl p-4 transition-colors duration-300">
              <div className="w-full md:w-1/2 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
                <img
                  src="/redesign/ai-da/DA.webp"
                  alt="AI Data Analytics Certificate"
                  className="w-full h-auto rounded-md shadow-xl"
                  onError={(e) => { e.currentTarget.src = "/assets/programcertificates/Gen_AI_Cert.webp" }}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  Nano Degree in AI-Powered Data Analytics
                </h4>
                <p className="font-sans text-gray-600 dark:text-gray-300 text-sm mb-6 transition-colors duration-300">
                  Validates your ability to:
                </p>
                <ul className="space-y-3">
                  {[
                    "Analyze and interpret data",
                    "Build dashboards",
                    "Support product decisions",
                    "Use AI responsibly in analytics",
                  ].map((item, i) => (
                    <li key={i} className="font-sans flex gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
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

          {/* Section 6: Career Opportunities */}
          <section id="career" className="scroll-mt-24">
            <h3 className="font-heading text-2xl font-bold mb-8 dark:text-white transition-colors duration-300">High-Paying Career Opportunities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { role: "Data Analyst", pay: "₹10L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                { role: "Product Analyst", pay: "₹13L - 24L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                { role: "Junior Analytics Engineer", pay: "₹12L - 25L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
                { role: "Growth/Marketing Analyst", pay: "₹8L - 20L", desc: "Help businesses integrate AI solutions and develop AI strategies" },
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

          {/* Section 7: Pricing */}
          <section id="pricing" className="scroll-mt-24 relative">
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

                  <h4 className="font-heading font-bold text-white text-2xl mb-2 relative z-10">Analytics +</h4>
                  <p className="font-sans text-gray-300 text-sm mb-6 relative z-10">AI Data Analytics</p>

                  <div className="mb-4 relative z-10">
                    <span className="font-heading text-4xl font-bold text-[#5BA4E5]">₹ 32,999</span>
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
                      "6-month intensive, live instructor-led training",
                      "Hands-on projects tackling real-world AI challenges",
                      "Industry-recognised certification",
                      "Lifetime access to all program materials",
                      "Career mentorship and guidance",
                      "Build a strong analytics portfolio",
                      "Interview preparation for the roles"
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
                      onClick={() => handleBuyCourse(32999)}
                      disabled={isProcessing || batches.length === 0}
                      className="w-full py-3 bg-[#5BA4E5] hover:bg-[#4a90d0] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10 disabled:bg-gray-600 disabled:text-gray-400"
                    >
                      {isProcessing ? <><div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Processing...</> : batches.length === 0 ? 'No batches available' : <>Apply Now <ArrowRight size={18} /></>}
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate('/sign-in', { state: { from: location } })}
                      className="w-full py-3 bg-[#5BA4E5] hover:bg-[#4a90d0] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 mt-auto relative z-10"
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
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center" onClick={(e) => e.stopPropagation()}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Cancelled</h3>
                  <p className="text-gray-600 mb-6">Your payment was not completed. Would you like to try again?</p>
                  <div className="flex gap-4">
                    <button onClick={() => setShowCancellationModal(false)} className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Cancel</button>
                    <button onClick={() => { setShowCancellationModal(false); handleBuyCourse(selectedPlanPrice); }} className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Try Again</button>
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
