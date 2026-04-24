
// ── Assets ─────────────────────────────────────────────────────────────
export const ASSETS = {
    heroImage: "/assets/digitalmarketing/hero.png", // Using Digital Marketing hero as requested
    ibmLogo: "/assets/ibm.png",
    bagIcon: "/assets/digitalmarketing/leftbag.png", // Generic enough
    rupeeIcon: "/assets/digitalmarketing/leftrupee.png", // Generic enough
    studentsGrp: "/assets/happystudents.png",
    ctaperson: "/assets/digitalmarketing/ctaperson.png", // Generic enough
    aipmgraph: "/assets/digitalmarketing/ai-dm-graph.png", // We replace this with animation anyway
};

// ── Navigation ─────────────────────────────────────────────────────────
export const NAV_LINKS = ["Home", "Programs", "About", "Blog", "Job Portal"];

// ── Alumni Logos ───────────────────────────────────────────────────────
export const ALUMNI_LOGOS = [
    { name: "Microsoft", url: "/assets/microsoft.png", height: 32 },
    { name: "Deloitte", url: "/assets/deloitte.png", height: 32 },
    { name: "Paisabazaar", url: "/assets/paisabazaar.png", height: 32 },
    { name: "Bajaj Finserv", url: "/assets/bajajfinserv.png", height: 44 },
    { name: "Indian Government", url: "/assets/indiangovernment.png", height: 50 },
    { name: "Razorpay", url: "/assets/pm_companies/RAZORPAY_1.png", height: 32 },
    { name: "Airtel", url: "/assets/pm_companies/AIRTEL_1.png", height: 32 },
    { name: "Infosys", url: "/assets/pm_companies/Infosys_logo.svg_1.png", height: 32 },
    { name: "JP Morgan", url: "/assets/pm_companies/JP_1.png", height: 32 },
    { name: "OLX", url: "/assets/pm_companies/OLX_New_Logo_1.png", height: 32 },
    { name: "ShareChat", url: "/assets/pm_companies/SHARECHAT_1.png", height: 32 },
    { name: "PineLabs", url: "/assets/pm_companies/pinelabs_BIG.D-6311ba42_1.png", height: 32 },
    { name: "Aditya Birla", url: "/assets/pm_companies/ADITYA_BIRAL_GROUP_1.png", height: 32 },
    { name: "Blue Machine", url: "/assets/pm_companies/BLUE_MACHINE_1.png", height: 32 },
    { name: "DMart", url: "/assets/pm_companies/DMART.NS_BIG.D-7c5f359e_1.png", height: 32 },
    { name: "HealthKart", url: "/assets/pm_companies/HELATHART_1.png", height: 32 },
    { name: "Ketto", url: "/assets/pm_companies/KETTO_1.png", height: 32 },
    { name: "Zen", url: "/assets/pm_companies/ZEN_BIG.D-d60ab9fe_1.png", height: 32 },
    { name: "AppsForBharat", url: "/assets/pm_companies/appsforbharat_1.png", height: 32 },
];

// ── Course Categories ──────────────────────────────────────────────────
export const courseCategories = [
    { label: "AI Product Management", icon: "💼" },
    { label: "AI Product Analytics", icon: "📊" },
    { label: "AI Digital Marketing", icon: "📣" },
    { label: "AI Data Science", icon: "🔬" },
    { label: "Generative AI", icon: "✨" },
    { label: "Advanced Generative AI", icon: "🚀" },
];

// ── Roadmap Paths ──────────────────────────────────────────────────────
export const switchPath = [
    { title: "Leverage Your Analytical or Business Skills", icon: "/assets/digitalmarketing/roadmap/Group.png", color: "#16A44A", desc: "Master product analytics tools, SQL, and data-driven product strategies." },
    { title: "Master AI Tools for Product Execution", icon: "/assets/digitalmarketing/roadmap/ant-design_build-outlined (1).png", color: "#16A44A", desc: "Build AI-powered dashboards, track user behavior, and optimize product growth." },
    { title: "Build Data-Driven Product Roadmaps", icon: "/assets/digitalmarketing/roadmap/solar_pen-bold-duotone.png", color: "#16A44A", desc: "Create automated product funnels, AI-driven insights, and scalable products." },
    { title: "Work on Real Product Cases & Analytics projects", icon: "/assets/digitalmarketing/roadmap/mdi_learn-outline (1).png", color: "#16A44A", desc: "Execute live product analytics and real-world use cases for practical experience." },
    { title: "Transition into AI Product Roles", icon: "/assets/digitalmarketing/roadmap/Group.png", color: "#16A44A", desc: "Use your portfolio and analytics results to move into AI-driven product roles." }
];

export const freshersPath = [
    { title: "Learn Product Fundamentals with AI", icon: "/assets/digitalmarketing/roadmap/Group.png", color: "#16A44A", desc: "Understand core product concepts combined with AI tools and analytics." },
    { title: "Explore AI Tools & Analytics Platforms", icon: "/assets/digitalmarketing/roadmap/ant-design_build-outlined (1).png", color: "#16A44A", desc: "Learn how AI is used in product tracking, user behavior, and SEO." },
    { title: "Develop Analytical Thinking", icon: "/assets/digitalmarketing/roadmap/solar_pen-bold-duotone.png", color: "#16A44A", desc: "Understand funnels, conversions, user behaviour, and AI-driven optimisation." },
    { title: "Build Real Product Dashboards", icon: "/assets/digitalmarketing/roadmap/mdi_learn-outline (1).png", color: "#16A44A", desc: "Work on AI-powered analytics, user tracking systems, and product projects." },
    { title: "Become Job-Ready in Product Analytics", icon: "/assets/digitalmarketing/roadmap/Group.png", color: "#16A44A", desc: "Build a strong portfolio with analytics, case studies, and measurable results." }
];

// ── IBM & Regular Curriculum Modules ───────────────────────────────────
export const ibmModules = [
    { title: "AI Product Analytics Foundations & Strategy", desc: "Learn core product concepts, AI fundamentals, and how AI is transforming product analytics." },
    { title: "AI Tools, SQL & Product Performance", desc: "Master AI tools for user tracking, SQL queries, and product optimization." },
    { title: "Product Automation & Funnel Building", desc: "Build automated funnels, user workflows, and AI-driven product systems." },
    { title: "Live Product Projects & Growth Simulations", desc: "Execute real product analytics, track performance, and optimize for retention." },
    { title: "AI Product Specialization Certificate from IBM", desc: "Earn an industry-recognized certification by building AI-powered product systems." }
];

export const regularModules = [
    { title: "Introduction to Product Analytics & AI Tools", desc: "Understand product fundamentals and how AI enhances them." },
    { title: "User Behavior, Tracking & AI Use Cases", desc: "Apply AI tools for user tracking and product simulation." },
    { title: "Product Funnels & Analytics Basics", desc: "Learn how to build simple tracking systems and funnels." },
    { title: "Hands-On Product Projects", desc: "Execute real product analytics projects and build practical experience." }
];

// ── Mentors ────────────────────────────────────────────────────────────
export const MENTORS = [
    { name: "Nitya Sagar", designation: "Product Lead", company: "A2M", image: "/assets/mentors/Nitya Sagar 1.png", companyLogo: "/assets/mentors/Frame 51378.png" },
    { name: "Anjali Sharma", designation: "AI Analyst", company: "IBM", image: "/assets/mentors/Anjali Sharma 3.png", companyLogo: "/assets/mentors/Frame 51378 (1).png" },
    { name: "Dr. Prashant", designation: "Head of Data", company: "Deloitte", image: "/assets/mentors/Dr. Prashant 1.png", companyLogo: "/assets/mentors/Frame 51378 (2).png" },
    { name: "Pranali Bose", designation: "Product Manager", company: "Microsoft", image: "/assets/mentors/Pranali Bose 1.png", companyLogo: "/assets/mentors/Frame 51378 (3).png" },
    { name: "Ashu", designation: "Senior Analyst", company: "Google", image: "/assets/mentors/Ashu 1.png", companyLogo: "/assets/mentors/Frame 51378 (4).png" },
];

// ── Tools ──────────────────────────────────────────────────────────────
export const TOOLS_LIST = [
    { name: "Mixpanel", logo: "/assets/tools/image 71.png" },
    { name: "Amplitude", logo: "/assets/tools/Postman.png" }, // Fallback logo
    { name: "Figma", logo: "/assets/tools/Figma.png" },
    { name: "Jira", logo: "/assets/tools/Jira.png" },
    { name: "Notion", logo: "/assets/tools/Notion.png" },
    { name: "Miro", logo: "/assets/tools/Group 102.png" },
    { name: "asana", logo: "/assets/tools/asana.png" },
    { name: "GitHub", logo: "/assets/tools/GitHub.png" },
];

// ── PA Skill Phases ───────────────────────────────────────────────────
export const PA_PHASES = [
    { icon: "/assets/digitalmarketing/skills/Container (2).png", title: "Discovery", description: "Understand product fundamentals, user behavior, and AI-driven insights", phase: "PHASE 01" },
    { icon: "/assets/digitalmarketing/skills/Container (3).png", title: "Strategy", description: "Plan roadmaps, tracking plans, and AI-driven product strategies", phase: "PHASE 02" },
    { icon: "/assets/digitalmarketing/skills/Icon.png", title: "Design", description: "Create tracking schemas, metrics, and AI-powered instrumentation", phase: "PHASE 03" },
    { icon: "/assets/digitalmarketing/skills/Container (4).png", title: "Build", description: "Launch dashboards, tracking systems, and automation tools", phase: "PHASE 04" },
    { icon: "/assets/digitalmarketing/skills/Container (5).png", title: "Analyze", description: "Track product performance, optimize retention, and scale growth", phase: "PHASE 05" },
    { icon: "/assets/digitalmarketing/skills/Icon (1).png", title: "Grow", description: "Scale products, automate workflows, and build long-term growth systems", phase: "PHASE 06" }
];

// ── Career Roles ──────────────────────────────────────────────────────
export const CAREER_ROLES = [
    { title: "Product Data Analyst", salary: "₹12L – ₹35L", description: "Derive insights from product usage data" },
    { title: "Growth Product Manager", salary: "₹18L – ₹45L", description: "Own product metrics and user acquisition" },
    { title: "Product Analytics Lead", salary: "₹25L – ₹55L", description: "Lead the data-driven product organization" },
    { title: "Retention Strategist", salary: "₹15L – ₹38L", description: "Build systems to increase user LTV and stickiness" }
];

// ── Pricing Plans ─────────────────────────────────────────────────────
export const PRICING_PLANS = [
    {
        title: "AcceleratorX + IBM",
        badge: "MOST POPULAR",
        subtitle: "An advanced product analytics program designed for learners seeking deeper industry exposure, certification, and accelerated career outcomes.",
        price: "₹XX,XXX",
        track: "ADVANCED CAREER TRACK",
        features: [
            "Everything included in the Regular Program",
            "IBM Industry Certification",
            "Advanced Analytics & Tracking Systems",
            "Product Growth Workshops",
            "Real Product Simulations",
            "Dedicated Career Support",
        ],
        cta: "Join IBM Program",
        highlighted: true,
    },
    {
        title: "Regular Program",
        badge: null,
        subtitle: "A complete product analytics learning experience designed to help you build strong analytical fundamentals and transition into product roles.",
        price: "₹XX,XXX",
        track: "FULL PROGRAM ACCESS",
        features: [
            "Complete Curriculum",
            "Hands-on Projects",
            "Tracking & Instrumentation Practice",
            "Tools Access",
            "Mentorship",
        ],
        cta: "Enroll in Regular Program",
        highlighted: false,
    },
];

// ── FAQs ──────────────────────────────────────────────────────────────
export const FAQS = [
    { q: "What is AcceleratorX, and how is it different from other product analytics courses in India?", a: "AcceleratorX offers an AI-powered product analytics course in India focused on real-world execution, not just theory. Unlike traditional programs, you learn how to run AI-driven tracking, automation funnels, and product strategy systems using tools like Mixpanel, Amplitude, and SQL." },
    { q: "Which is the best product analytics course in India for working professionals?", a: "The best course is one that focuses on practical skills, live tracking, and measurable results. AcceleratorX is designed for working professionals who want to transition into product analyst, growth PM, and AI-driven product roles." },
    { q: "Can I learn product analytics without coding or technical background?", a: "Yes, you can learn product analytics without intensive coding. This course is beginner-friendly and teaches you how to use AI tools, analytics platforms, and tracking systems without any heavy technical background." },
    { q: "What career opportunities are available after completing an AI product analytics course?", a: "After completing the course, you can apply for roles such as: Product Analyst, Growth Manager, Product Performance Lead, Data-Driven PM. These roles are in high demand across companies building scalable digital products." },
    { q: "How can I switch my career to product analytics?", a: "To switch into product analytics, you need hands-on experience, real tracking instrumentation, and a strong portfolio. AcceleratorX helps you build live dashboards, funnels, and AI analytics systems that demonstrate your skills to employers." }
];

// ── Footer Columns ────────────────────────────────────────────────────
export const FOOTER_COLUMNS = [
    { heading: "COMPANY", links: ["Home", "Product", "Blogs", "Services"] },
    { heading: "HELP", links: ["Customer Support", "Terms & Conditions", "Privacy Policy"] },
    { heading: "RESOURCES", links: ["Free eBooks", "Development Tutorial", "Free course Playlist"] },
];
