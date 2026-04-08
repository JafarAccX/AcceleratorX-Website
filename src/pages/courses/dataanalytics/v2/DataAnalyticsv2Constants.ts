// ── Constants ─────────────────────────────────────────────────────────────
export const ASSETS = {
    heroImage: "/assets/hero.png",
    ibmLogo: "/assets/ibm.png",
    bagIcon: "/assets/leftbag.png",
    rupeeIcon: "/assets/leftrupee.png",
    studentsGrp: "/assets/studentgrp.png",
    ctaperson: "/assets/ctaperson.png",
    aipmgraph: "/assets/ai-pm-chart.png",
};

export const NAV_LINKS = ["Home", "Programs", "About", "Blog", "Job Portal"];

export const ALUMNI_LOGOS = [
    { name: "Microsoft", url: "/assets/microsoft.png", height: 32 },
    { name: "Deloitte", url: "/assets/deloitte.png", height: 32 },
    { name: "Paisabazaar", url: "/assets/paisabazaar.png", height: 32 },
    { name: "Bajaj Finserv", url: "/assets/bajajfinserv.png", height: 44 },
    { name: "Indian Government", url: "/assets/indiangovernment.png", height: 50 },
    { name: "Razorpay", url: "/assets/Razorpay.png", height: 32 },
];

export const floatingBadges = [
    { label: "AI Digital Marketing", top: "259px", left: "121px", icon: "/assets/aidigitalmarketing.png", width: 221 },
    { label: "Generative AI", top: "324px", left: "514px", icon: "/assets/generativeai.png", width: 180 },
    { label: "AI Data Analytics", top: "426px", left: "46px", icon: "/assets/aidataanalystics.png", width: 204 },
    { label: "AI Data Science", top: "505px", left: "511px", icon: "/assets/aidatascience.png", width: 195 },
    { label: "AI Product Management", top: "625px", left: "24px", icon: "/assets/aiproductmanagemnt.png", width: 252 },
    { label: "Advanced Generative AI", top: "683px", left: "342px", icon: "/assets/advancedgenerativeai.png", width: 252 },
];

export const courseCategories = [
    { label: "AI Product Management", icon: "💼" },
    { label: "AI Product Analytics", icon: "📊" },
    { label: "AI Digital Marketing", icon: "📣" },
    { label: "AI Data Science", icon: "🔬" },
    { label: "Generative AI", icon: "✨" },
    { label: "Advanced Generative AI", icon: "🚀" },
];

export const switchPath = [
    { title: "Leverage Your Existing Skills", icon: "/assets/roadmap/mingcute_target-line.png", color: "#3B82F6", desc: "Learn how to apply AI in data analytics, dashboards, and reporting systems" },
    { title: "Learn Data + AI Tools for Real Work", icon: "/assets/roadmap/ant-design_build-outlined.png", color: "#3B82F6", desc: "Master Excel, SQL, Python, Power BI, and AI tools used by MNCs" },
    { title: "Build AI-Powered Dashboards & Systems", icon: "/assets/roadmap/solar_pen-bold-duotone (1).png", color: "#3B82F6", desc: "Dashboards that generate automated insights and decision support with AI." },
    { title: "Work on Real Business Data Projects", icon: "/assets/roadmap/mdi_learn-outline.png", color: "#3B82F6", desc: "Solve real-world problems using datasets, automation, and analytics." },
    { title: "Transition into Data Analytics Roles", icon: "/assets/roadmap/ant-design_build-outlined.png", color: "#3B82F6", desc: "Use your portfolio, and projects to move into AI-driven analytics roles." },
];

export const freshersPath = [
    { title: "Learn Data Analytics Fundamentals", icon: "/assets/roadmap/mdi_learn-outline.png", color: "#3B82F6", desc: "Start with basics of data analytics, Excel, SQL, and AI tools." },
    { title: "Explore AI in Data Analytics", icon: "/assets/roadmap/solar_pen-bold-duotone (1).png", color: "#3B82F6", desc: "Understand how AI is transforming dashboards, reporting, and business decisions." },
    { title: "Develop Analytical & Problem-Solving Skills", icon: "/assets/roadmap/mingcute_target-line.png", color: "#3B82F6", desc: "Learn how to interpret data, identify trends, and use AI tools for insights." },
    { title: "Build Real Data Projects", icon: "/assets/roadmap/ant-design_build-outlined.png", color: "#3B82F6", desc: "Work on dashboards, analytics systems, and automation workflows." },
    { title: "Become Job-Ready as a Data Analyst", icon: "/assets/roadmap/mdi_learn-outline.png", color: "#3B82F6", desc: "Create a strong portfolio and apply for AI data analyst roles." },
];

export const ibmModules = [
    { title: "Data Analytics Foundations & Business Context", desc: "Understand data analytics fundamentals and how businesses use data for decision-making." },
    { title: "SQL, Excel & Data Handling with AI", desc: "Master data querying, cleaning, and manipulation with AI-assisted tools." },
    { title: "Dashboards, BI Tools & Automation", desc: "Build interactive dashboards and automate reporting workflows." },
    { title: "Advanced Analytics & Real-World Projects", desc: "Work on real datasets, business problems, and AI-driven analytics use cases." },
    { title: "AI in Data Analytics Certification from IBM", desc: "Earn an industry-recognized certification by applying AI in analytics workflows." },
];

export const regularModules = [
    { title: "Introduction to Data Analytics", desc: "Learn basics of data analysis, Excel, and reporting concepts." },
    { title: "SQL & Data Handling", desc: "Work with databases and structured data." },
    { title: "Dashboarding & Visualization", desc: "Create dashboards and reports using BI tools." },
    { title: "Hands-On Data Projects", desc: "Apply learning through real-world datasets." },
];

export const MENTORS = [
    { name: "Akash Maurya", designation: "Data scientist @Koantek", company: "Koantek", image: "/redesign/ai-da/mentors/Aakash Maurya.png", companyLogo: "/assets/mentors/Koantek.png" },
    { name: "Ravi Ahlawat", designation: "Sr. Product Manager - PayU", company: "PayU", image: "/redesign/ai-da/mentors/Ravi Ahlawat.png", companyLogo: "/assets/mentors/payu.png" },
    { name: "Subhasis Chandra", designation: "Sr. Product Manager - Publicis Sapient", company: "Publicis Sapient", image: "/assets/mentors/Subhasis Chandra 2.png", companyLogo: "/assets/mentors/publicissapient.png" },
    { name: "Nitish Setty", designation: "Managing director at GrowSharp", company: "GrowSharp", image: "/redesign/ai-da/mentors/Nitish Setty.png", companyLogo: "/assets/mentors/grownswap.png" },
    { name: "Shubham Swaraj", designation: "Founder @BIP Consultant", company: "BIP Consultant", image: "/redesign/ai-da/mentors/Shubham Swaraj.png", companyLogo: "/assets/mentors/Bip-logo.png" },
];

export const TOOLS_LIST = [
    { name: "Power BI", logo: "/redesign/ai-da/tools/power-bi.png", color: "#F2C811" },
    { name: "Google Analytics", logo: "/redesign/ai-da/tools/google-analytics.png", color: "#E37400" },
    { name: "Excel", logo: "/redesign/ai-da/tools/excel.png", color: "#217346" },
    { name: "SQL", logo: "/redesign/ai-da/tools/sql.png", color: "#336791" },
    { name: "Python", logo: "/redesign/ai-da/tools/python.png", color: "#3776AB" },
];

export const TOOLS_DESCRIPTION = "Get hands-on experience by building real-world projects, dashboards, and analytics systems using the tools professionals use every day.";

export const PM_PHASES = [
    { icon: "/assets/skills/Icon.png", title: "Discovery", description: "Understand data basics and how AI enhances analytics.", phase: "PHASE 01" },
    { icon: "/assets/skills/Icon (1).png", title: "Strategy", description: "Design analytics approaches and data-driven strategies.", phase: "PHASE 02" },
    { icon: "/assets/skills/Container (2).png", title: "Design", description: "Structure dashboards and reports.", phase: "PHASE 03" },
    { icon: "/assets/skills/Container (3).png", title: "Build", description: "Create dashboards, SQL queries, and AI systems.", phase: "PHASE 04" },
    { icon: "/assets/skills/Container (4).png", title: "Analyze", description: "Interpret data and generate insights.", phase: "PHASE 05" },
    { icon: "/assets/skills/Container (5).png", title: "Grow", description: "Scale analytics systems and decision frameworks.", phase: "PHASE 06" },
];

export const CAREER_ROLES = [
    { title: "Decision Intelligence Analyst", salary: "₹10L – ₹25L", description: "Drive business decisions using data + insights" },
    { title: "Analytics Engineer", salary: "₹12L – ₹30L", description: "Build data pipelines & transformation systems" },
    { title: "Business Intelligence Specialist", salary: "₹10L – ₹22L", description: "Create dashboards that drive strategy" },
    { title: "Data Strategy Consultant", salary: "₹15L – ₹35L", description: "Help companies become data-driven" },
];

export const PRICING_PLANS = [
    {
        title: "AcceleratorX + IBM",
        badge: "MOST POPULAR",
        subtitle: "An advanced product management program designed for learners seeking deeper industry exposure, certification, and accelerated career outcomes.",
        price: "₹ 42,999 + GST",
        track: "ADVANCED CAREER TRACK",
        features: [
            "Everything included in the Regular Program",
            "IBM Industry Certification",
            "Advanced Analytics & Automation Track",
            "Dashboard & BI Workshops",
            "Real-world case simulations",
            "Career Support",
        ],
        cta: "Join IBM Program",
        highlighted: true,
    },
    {
        title: "Regular Program",
        badge: null,
        subtitle: "A complete product management learning experience designed to help you build strong product fundamentals and transition into product roles.",
        price: "₹ 29,999 + GST",
        track: "FULL PROGRAM ACCESS",
        features: [
            "Complete Curriculum",
            "Hands-on Projects",
            "Dashboard & SQL Practice",
            "Tools Access",
            "Mentorship",
        ],
        cta: "Enroll in Regular Program",
        highlighted: false,
    },
];

export const FAQS = [
    { q: "What is an AI Data Analytics course, and how is it different from a regular data analytics course?", a: "An AI Data Analytics course combines traditional data analytics skills with AI tools, automation, and intelligent data processing. Unlike regular courses, it teaches you how to analyze data, generate insights automatically, and build AI-powered dashboards used in modern companies." },
    { q: "Which is the best AI Data Analytics course in India for working professionals?", a: "The best AI Data Analytics course focuses on practical skills, real datasets, and business use cases. Programs like AcceleratorX are designed for working professionals who want to transition into data analyst, business analyst, or AI-driven analytics roles without relying on outdated theory." },
    { q: "Can I learn data analytics and AI without coding?", a: "Yes, you can start learning data analytics without coding. This course begins with Excel, BI tools, and AI-powered analytics platforms, and gradually introduces SQL and Python in a beginner-friendly way." },
    { q: "What career opportunities are available after completing an AI Data Analytics course?", a: "After completing an AI Data Analytics course, you can apply for roles such as: Data Analyst, Business Analyst, AI Data Analyst, BI Analyst, Analytics Specialist. These roles are in high demand across companies using data-driven decision-making and AI tools." },
    { q: "How can I switch my career to data analytics using AI?", a: "To switch into data analytics, you need hands-on project experience, real datasets, and a strong portfolio. Learning AI tools alongside analytics helps you stand out by showing your ability to automate insights and improve business decisions." },
    { q: "What is the salary of a data analyst or AI data analyst in India?", a: "The average salary for data analytics roles in India is: Entry-level: ₹6–12 LPA, Mid-level: ₹10–20 LPA, Experienced: ₹20–40+ LPA. Professionals with AI and automation skills often earn higher salaries due to increasing demand." },
    { q: "Is this AI Data Analytics course suitable for beginners and non-tech backgrounds?", a: "Yes, this course is designed for beginners, freshers, and non-technical professionals. You can start without coding knowledge and gradually build skills in data analytics, dashboards, and AI tools." },
    { q: "What tools and technologies will I learn in an AI Data Analytics course?", a: "You will learn tools such as: Excel and Advanced Excel, SQL for data querying, Python for data analysis, Power BI or other dashboard tools, AI tools for automation and insights. These tools are widely used in real-world analytics roles." },
    { q: "Do I get a certificate after completing the AI Data Analytics course?", a: "Yes, you will receive a recognized certification, along with a portfolio of real data analytics projects and dashboards, which helps in job applications." },
    { q: "How long does it take to become job-ready in data analytics?", a: "Most learners become job-ready within 4 to 6 months, depending on consistency and practice. The focus is on hands-on learning, projects, and real business use cases." },
    { q: "How is AI used in data analytics in real companies?", a: "AI is used in data analytics to automate data cleaning, generate insights, build predictive models, and improve decision-making. Companies use AI to reduce manual work and get faster, more accurate insights." },
    { q: "Why should working professionals learn AI in data analytics?", a: "AI is transforming how data is analyzed. Professionals who understand AI-powered analytics, automation, and dashboards are more valuable and can grow faster in their careers." },
    { q: "How do I get started with an AI Data Analytics course?", a: "You can start by booking a free demo session to understand the course structure, tools, and career roadmap. This helps you plan your transition into data analytics and AI roles step by step." },
];

export const FOOTER_COLUMNS = [
    { heading: "COMPANY", links: ["Home", "Product", "Blogs", "Services"] },
    { heading: "HELP", links: ["Customer Support", "Terms & Conditions", "Privacy Policy"] },
    { heading: "RESOURCES", links: ["Free eBooks", "Development Tutorial", "Free course Playlist"] },
];
