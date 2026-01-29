"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check, Loader2 } from "lucide-react";
import toast from 'react-hot-toast';
import { useUser } from '../../../../context/UserContext';
import { COURSE_IDS, COURSE_PRICES } from '../../../../utils/constants_price';
import { api } from '../../../../api';
import { dataAnalyticsTools } from "../../../../utils/constants";

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
    image: "/assets/mentor/ravi.webp",
  },
  {
    name: "Aakash Maurya",
    role: "Sr. ML Engineer at Nagarro",
    image: "/assets/mentor/akash.webp",
  },
  {
    name: "Nitish Setty",
    role: "Analytics Lead at DataFlow",
    image: "/assets/mentor/nitish.webp",
  },
  {
    name: "Shubham Swaraj",
    role: "BI Developer at InsightTech",
    image: "/assets/mentor/Shubham.webp",
  },
  {
    name: "Chloe Thomas",
    role: "Senior AI Engineer - Google",
    image: "/assets/mentor/himangi.webp",
  },
  {
    name: "Kumar Savino",
    role: "Associate Director at Walmart",
    image: "/assets/mentor/preeti.webp",
  },
];

const CURRICULUM = [
  {
    week: "1-3",
    topics: ["Foundations of Data Analysis"],
    goal: "Build strong fundamentals in data analytics. Learn data analysis lifecycle, Excel, Dataviz, and BI.",
    skills: ["Data analysis lifecycle", "Excel for cleaning & dashboards", "Data visualization basics", "Introduction to BI tools"],
    outcome: "You can analyze datasets and present insights clearly."
  },
  {
    week: "4-6",
    topics: ["SQL for Data Analysis"],
    goal: "Learn how analysts work with real databases. Master SQL queries, joins, window functions and data cleaning.",
    skills: ["SQL queries, joins & aggregations", "Window functions & subqueries", "Data cleaning using SQL"],
    outcome: "You can extract and analyze data from relational databases."
  },
  {
    week: "7-9",
    topics: ["Statistics & Analytics Thinking"],
    goal: "Learn how to reason with data, not just visualize it. Cover stats, probability, hypothesis testing, and regression.",
    skills: ["Descriptive statistics", "Probability & hypothesis testing", "Correlation & regression"],
    outcome: "You can interpret data confidently and avoid false conclusions."
  },
  {
    week: "10-13",
    topics: ["Python for Data Analysis"],
    goal: "Use Python for scalable analysis. Work with Pandas, Matplotlib, Seaborn, EDA, and Intro to ML.",
    skills: ["Python fundamentals", "Pandas for data manipulation", "Matplotlib & Seaborn", "Exploratory Data Analysis (EDA)", "Intro to machine learning"],
    outcome: "You can analyze complex datasets using Python."
  },
  {
    week: "14-20",
    topics: ["BI, Dashboards & Product Analytics"],
    goal: "Specialize in product and business analytics. Build interactive dashboards, Product KPIs, Funnels, and A/B tests.",
    skills: ["Interactive dashboards (Tableau / Power BI)", "Product KPIs (DAU, MAU, retention)", "Funnels & cohort analysis", "A/B test reporting"],
    outcome: "You can support product and growth decisions with data."
  },
  {
    week: "19-20",
    topics: ["AI Tools & Automation for Analysts"],
    goal: "Learn how AI accelerates analytics work. Use AI for query generation, code assistance, and insight summarization.",
    skills: ["SQL query generation", "Python code assistance", "Automated data cleaning", "Insight summarization", "Predictive analytics with AutoML"],
    outcome: "You become a faster, AI-enabled analyst."
  },
  {
    week: "21-24",
    topics: ["Capstone Project"],
    goal: "Solve a real-world product analytics problem. Deliver end-to-end analysis and a final stakeholder presentation.",
    skills: ["End-to-end analysis", "Cohort, funnel & churn insights", "Predictive modeling", "Interactive dashboards", "Final stakeholder presentation"],
    outcome: "Complete portfolio-ready project."
  }
];

const DATA_TOOLS = [
  { name: "Excel", description: "Foundational tool for data cleaning and analysis." },
  { name: "SQL", description: "MySQL / BigQuery for database querying." },
  { name: "Python", description: "Pandas, Matplotlib, Seaborn, scikit-learn for advanced analysis." },
  { name: "Tableau / Power BI", description: "Industry standard tools for dashboarding." },
  { name: "Google Analytics / Mixpanel", description: "Essential for product and web analytics." },
  { name: "Modern Data Stack", description: "BigQuery, dbt, and modern BI concepts." },
  { name: "AI Tools", description: "For analytics automation and productivity." },
];

// --- Components ---

const AccordionItem = ({ module }: { module: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-[#848484]/30 rounded-lg mb-4 overflow-hidden transition-colors duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 bg-white dark:bg-[#171717] hover:bg-gray-50 dark:hover:bg-[#1f1f1f] transition-colors text-left"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded uppercase tracking-wider transition-colors duration-300">
              WEEK {module.week}
            </span>
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300">{module.topics.join(" & ")}</h4>
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
            <div className="p-5 pt-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-[#171717] border-t border-gray-100 dark:border-[#848484]/30 transition-colors duration-300">
              {module.goal && (
                <p className="text-sm text-gray-700 dark:text-gray-200 mb-4 font-medium transition-colors duration-300">
                  {module.goal}
                </p>
              )}
              {module.skills && (
                <div className="mb-4">
                  <p className="font-semibold mb-2 transition-colors duration-300 text-xs uppercase text-gray-500 dark:text-gray-400">What you'll learn:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {module.skills.map((skill: string, i: number) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
              {module.outcome && (
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400">Outcome: {module.outcome}</p>
                </div>
              )}
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
            <h2 className="text-3xl font-serif font-bold text-[#0A0F1E] dark:text-white mb-8 leading-tight transition-colors duration-300">
              AI Programs that helps to become a Professional
            </h2>

            <nav className="space-y-4 border-l-2 border-gray-200 dark:border-[#848484]/30 transition-colors duration-300">
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

        {/* Main Content Area */}
        <main className="lg:w-3/4 space-y-24">
          {/* Section 1: Why this Program */}
          <section id="why-this-program" className="scroll-mt-24 relative">
            <img src="/redesign/ai-da/numpy.png" alt="Numpy" className="absolute h-24 w-24 -top-20 right-40" />

            <h3 className="text-2xl font-serif font-bold mb-6 dark:text-white transition-colors duration-300">Built for Real Analytics & Product Teams</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
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
                <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-12 transition-colors duration-300"></div>
          </section>

          {/* Section 2: Curriculum */}
          <section id="curriculum" className="scroll-mt-24">
            <h3 className="text-2xl font-serif font-bold mb-6 dark:text-white transition-colors duration-300">Learning Journey - Curriculum</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
              A complete roadmap from Foundations to Advanced AI-Powered Analytics
            </p>
            <div>
              {CURRICULUM.map((module, idx) => (
                <AccordionItem key={idx} module={module} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <button className="px-8 py-3 bg-[#FFC107] hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-colors flex items-center gap-2">
                Download Full Curriculum <ChevronDown size={18} />
              </button>
            </div>
            <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
          </section>

          {/* Section 3: Tools */}
          <section id="tools" className="scroll-mt-24 relative">
            <img src="/redesign/ai-da/Google-Analytics.png" className="absolute -left-96 top-10 h-24 w-24" />
            <h3 className="text-2xl font-serif font-bold mb-8 dark:text-white transition-colors duration-300">Tools Which You Master as a Professional</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {DATA_TOOLS.map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#171717] border flex flex-col justify-center items-center border-gray-100 dark:border-[#848484]/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-3 inline-block mb-4 transition-colors duration-300">
                    <img src={dataAnalyticsTools.find(t => t.name.includes(tool.name.split(' ')[0]))?.image || "/placeholder.svg"} alt={tool.name} className="w-8 h-8 object-contain" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300 text-center">{tool.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300 text-center">{tool.description}</p>
                </div>
              ))}
            </div>
            <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
          </section>

          {/* Section 4: Mentors */}
          <section id="mentors" className="scroll-mt-24">
            <h3 className="text-2xl font-serif font-bold mb-8 dark:text-white transition-colors duration-300">Mentors from Top Companies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {MENTORS.map((mentor, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 dark:bg-[#171717] rounded-xl overflow-hidden border border-gray-100 dark:border-[#848484]/30 group hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900 dark:text-white transition-colors duration-300">{mentor.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{mentor.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
          </section>

          {/* Section 5: Certificate */}
          <section id="certificate" className="scroll-mt-24">
            <h3 className="text-2xl font-serif font-bold mb-8 dark:text-white transition-colors duration-300">Industry-Recognized Nano Degree</h3>
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
                <h4 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  Nano Degree in AI-Powered Data Analytics
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 transition-colors duration-300">
                  Validates your ability to:
                </p>
                <ul className="space-y-3">
                  {[
                    "Analyze and interpret data",
                    "Build dashboards",
                    "Support product decisions",
                    "Use AI responsibly in analytics",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
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
            <h3 className="text-2xl font-serif font-bold mb-8 dark:text-white transition-colors duration-300">Roles You’ll Be Ready For</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Data Analyst",
                "Product Analyst",
                "Business Analyst",
                "Growth / Marketing Analyst",
                "Junior Analytics Engineer"
              ].map((role) => (
                <div
                  key={role}
                  className="bg-white dark:bg-[#171717] border border-gray-100 dark:border-[#848484]/30 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white w-2/3 transition-colors duration-300">
                      {role}
                    </h4>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded transition-colors duration-300">₹6 LPA – ₹15 LPA+</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-px w-full bg-gray-200 dark:bg-[#848484]/30 mt-16 transition-colors duration-300"></div>
          </section>

          {/* Section 7: Pricing */}
          <section id="pricing" className="scroll-mt-24">
            <h3 className="text-2xl font-serif font-bold mb-8 dark:text-white transition-colors duration-300">Invest in Your Analytics Career</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto">
              {[
                {
                  name: "Regular",
                  price: 32499,
                  features: ["Core analytics + product analytics", "AI tools basics", "Certification"],
                  highlight: false
                },
                {
                  name: "Regular+",
                  price: 42499,
                  features: ["Advanced projects", "Capstone depth", "Career roadmap & priority hiring"],
                  highlight: true
                }
              ].map((plan, idx) => (
                <div key={idx} className={`bg-blue-50/50 dark:bg-[#171717] border ${plan.highlight ? 'border-blue-500 dark:border-blue-500 shadow-md ring-1 ring-blue-500' : 'border-blue-100 dark:border-[#848484]/30'} rounded-2xl p-8 w-full text-center hover:shadow-lg transition-all duration-300 relative`}>
                  {plan.highlight && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      RECOMMENDED
                    </div>
                  )}
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{plan.name}</h4>

                  <div className="mb-2">
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">₹ {plan.price.toLocaleString('en-IN')}</span>
                    <span className="text-gray-400 dark:text-gray-500 text-xs ml-1 transition-colors duration-300">+ GST</span>
                  </div>

                  {batches.length > 0 && (
                    <div className="mb-4">
                      <label className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">Select Batch</label>
                      <select value={selectedBatchId || ''} onChange={(e) => setSelectedBatchId(e.target.value)} className="w-full px-3 py-2 border border-gray-300 dark:border-[#848484]/30 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-[#000000] text-gray-900 dark:text-white transition-colors duration-300">
                        {batches.map((batch) => (<option key={batch.Id} value={batch.Id}>{batch.Batch} - Starts {new Date(batch.StartDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</option>))}
                      </select>
                    </div>
                  )}

                  <ul className="text-left space-y-3 my-8 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex gap-2"><Check size={16} className="text-blue-500 dark:text-blue-400 flex-shrink-0 transition-colors duration-300" /><span>{feat}</span></li>
                    ))}
                  </ul>

                  <button onClick={() => handleBuyCourse(plan.price)} disabled={isProcessing || batches.length === 0} className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                    {isProcessing ? <><Loader2 size={16} className="animate-spin" /> Processing...</> : batches.length === 0 ? 'No batches available' : <>Enroll Now <ArrowRight size={16} /></>}
                  </button>
                </div>
              ))}
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
    </div>
  );
}
