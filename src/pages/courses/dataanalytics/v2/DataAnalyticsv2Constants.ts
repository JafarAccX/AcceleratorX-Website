// ── Constants ─────────────────────────────────────────────────────────────
export const ASSETS = {
    heroImage: "/assets/hero.png",
    ibmLogo: "/assets/ibm.png",
    bagIcon: "/assets/stars/DAbag.png",
    rupeeIcon: "/assets/stars/DAstar.png",
    studentsGrp: "/assets/happystudents.png",
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

export const MAIN_LOGOS = [
    { name: "Logo 246", url: "/assets/DA and DS  main company logos/image 246.png" },
    { name: "Logo 247", url: "/assets/DA and DS  main company logos/image 247.png" },
    { name: "Logo 248", url: "/assets/DA and DS  main company logos/image 248.png" },
    { name: "Logo 249", url: "/assets/DA and DS  main company logos/image 249.png" },
    { name: "Logo 250", url: "/assets/DA and DS  main company logos/image 250.png" },
    { name: "Logo 251", url: "/assets/DA and DS  main company logos/image 251.png" },
    { name: "Logo 252", url: "/assets/DA and DS  main company logos/image 252.png" },
    { name: "Logo 253", url: "/assets/DA and DS  main company logos/image 253.png" },
    { name: "Logo 254", url: "/assets/DA and DS  main company logos/image 254.png" },
    { name: "Logo 255", url: "/assets/DA and DS  main company logos/image 255.png" },
    { name: "Logo 257", url: "/assets/DA and DS  main company logos/image 257.png" },
    { name: "Logo 258", url: "/assets/DA and DS  main company logos/image 258.png" },
    { name: "Logo 259", url: "/assets/DA and DS  main company logos/image 259.png" }
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
    { title: "Leverage Your Existing Skills", icon: "/DSroadmap/Vector (4).png", color: "#3B82F6", desc: "Learn how to apply AI in data analytics, dashboards, and reporting systems" },
    { title: "Learn Data + AI Tools for Real Work", icon: "/DSroadmap/Vector (6).png", color: "#3B82F6", desc: "Master Excel, SQL, Python, Power BI, and AI tools used by MNCs" },
    { title: "Build AI-Powered Dashboards & Systems", icon: "/DSroadmap/Group.png", color: "#3B82F6", desc: "Dashboards that generate automated insights and decision support with AI." },
    { title: "Work on Real Business Data Projects", icon: "/DSroadmap/Vector (5).png", color: "#3B82F6", desc: "Solve real-world problems using datasets, automation, and analytics." },
    { title: "Transition into Data Analytics Roles", icon: "/DSroadmap/Vector (4).png", color: "#3B82F6", desc: "Use your portfolio, and projects to move into AI-driven analytics roles." },
];

export const freshersPath = [
    { title: "Learn Data Analytics Fundamentals", icon: "/DSroadmap/Vector (4).png", color: "#3B82F6", desc: "Start with basics of data analytics, Excel, SQL, and AI tools." },
    { title: "Explore AI in Data Analytics", icon: "/DSroadmap/Vector (6).png", color: "#3B82F6", desc: "Understand how AI is transforming dashboards, reporting, and business decisions." },
    { title: "Develop Analytical & Problem-Solving Skills", icon: "/DSroadmap/Group.png", color: "#3B82F6", desc: "Learn how to interpret data, identify trends, and use AI tools for insights." },
    { title: "Build Real Data Projects", icon: "/DSroadmap/Vector (5).png", color: "#3B82F6", desc: "Work on dashboards, analytics systems, and automation workflows." },
    { title: "Become Job-Ready as a Data Analyst", icon: "/DSroadmap/Vector (4).png", color: "#3B82F6", desc: "Create a strong portfolio and apply for AI data analyst roles." },
];

export const ibmModules = [
    {
        title: "Module 1: Foundations of Data Analysis",
        goal: "Build essential data skills in Excel and introductory BI tools to ensure a solid base in data manipulation and visualization.",
        sessions: [
            {
                title: "Core Data Skills",
                topics: [
                    "Data cleaning & preparation",
                    "Aggregations & Pivot Tables",
                    "Introductory dashboards",
                    "Data manipulation best practices"
                ],
                skills: "Data cleaning, aggregation, pivot tables, introductory dashboards",
                tools: "Excel, Tableau, Power BI",
                project: "Create an interactive dashboard summarizing a sample dataset"
            }
        ]
    },
    {
        title: "Module 2: SQL for Data Analysis",
        goal: "Learn SQL to query and manipulate relational databases, a critical skill for AI data stored in structured databases.",
        sessions: [
            {
                title: "Relational Databases & SQL",
                topics: [
                    "Conditional filtering & sorting",
                    "Table joins (Inner, Left, Right, Full)",
                    "Data aggregation using GROUP BY",
                    "Subqueries & CTEs basics"
                ],
                skills: "Relational databases, conditional filtering, table joins, data aggregation",
                tools: "MySQL or Google BigQuery",
                project: "SQL-based analysis of sales or customer data, uncovering key patterns"
            }
        ]
    },
    {
        title: "Module 3: Statistics and Probability for Data Analysis",
        goal: "Develop essential statistical skills, supporting hypothesis testing and decision-making, vital for understanding user behavior.",
        sessions: [
            {
                title: "Statistical Foundations",
                topics: [
                    "Descriptive statistics (Mean, Median, Mode, Variance)",
                    "Probability distributions",
                    "Hypothesis testing & P-values",
                    "Correlation vs Causation"
                ],
                skills: "Hypothesis testing, statistical significance, probability modeling",
                tools: "Excel, Python Stats",
                project: "Statistical analysis of user behavior data to validate business hypotheses"
            }
        ]
    },
    {
        title: "Module 4: Python for Data Analysis",
        goal: "Master Python for data manipulation, EDA, and visualization—an invaluable tool for AI analysts to gain deeper insights.",
        sessions: [
            {
                title: "Python Data Science Stack",
                topics: [
                    "Pandas DataFrames & Series",
                    "Data cleaning & handling missing values",
                    "Exploratory Data Analysis (EDA)",
                    "Data visualization (Matplotlib, Seaborn)"
                ],
                skills: "DataFrames, data cleaning, advanced visualization",
                tools: "Jupyter Notebook, Pandas, Numpy",
                project: "Exploratory Data Analysis (EDA) of user trends in an AI dataset"
            }
        ]
    },
    {
        title: "Module 5: Advanced Business Intelligence and Dashboarding",
        goal: "Create interactive dashboards that go beyond static views, designed specifically for tracking AI metrics and user behavior.",
        sessions: [
            {
                title: "Interactive BI Systems",
                topics: [
                    "Dynamic dashboard design",
                    "Tracking AI performance metrics",
                    "User behavior visualization",
                    "A/B test result monitoring"
                ],
                skills: "Interactive dashboards, AI KPI tracking, A/B test visualization",
                tools: "Tableau, Power BI",
                project: "Build a dashboard that captures user journeys, AI KPIs, and conversion funnels"
            }
        ]
    },
    {
        title: "Module 6: Product Analytics Specialization",
        goal: "Develop specialized analytical skills for product data, enabling cohort analysis and churn prediction.",
        sessions: [
            {
                title: "Product Metrics & Cohort Analysis",
                topics: [
                    "Mastering DAU, MAU, LTV, and retention",
                    "Retention curves & churn analysis",
                    "Cohort visualizations"
                ],
                project: "Conduct a cohort analysis to visualize retention curves over time"
            },
            {
                title: "Funnel Analysis & Journey Mapping",
                topics: [
                    "Analyzing & optimizing user journeys",
                    "Funnel metrics & conversion bottlenecks",
                    "Drop-off point identification"
                ],
                project: "Perform a detailed funnel analysis to pinpoint conversion bottlenecks"
            },
            {
                title: "Predictive Analytics & Churn Prediction",
                topics: [
                    "Building churn prediction models in Python",
                    "Identifying at-risk user behaviors",
                    "Retention strategy design"
                ],
                project: "Develop a churn prediction model to identify at-risk users"
            },
            {
                title: "Customer Segmentation",
                topics: [
                    "RFM analysis techniques",
                    "Customer clustering for personalization",
                    "Tailoring product offerings"
                ],
                project: "Use segmentation to tailor experiences and boost engagement"
            }
        ]
    },
    {
        title: "Module 7: Modern Data Stack for Analysts",
        goal: "Learn modern data infrastructure, pipelines, and tools used in data-driven organizations.",
        sessions: [
            {
                title: "Modern Data Stack Foundations",
                topics: [
                    "Data warehousing (BigQuery, Snowflake)",
                    "ETL/ELT vs. traditional ETL",
                    "dbt workflows & data modeling",
                    "Analytics platforms (Metabase, Looker)"
                ],
                project: "Design an event-tracking pipeline and build a dbt model"
            },
            {
                title: "Data Pipelines & BI Integration",
                topics: [
                    "End-to-end data pipeline design",
                    "Connecting dbt to BI tools",
                    "Automating metric reporting",
                    "Troubleshooting pipeline challenges"
                ],
                project: "Deploy a pipeline using BigQuery + dbt + Tableau/Power BI"
            }
        ]
    },
    {
        title: "Module 8: AI Tools and Automation for Data Analysts",
        goal: "Develop skills to enhance data workflows using AI-powered tools, improving speed and scalability.",
        sessions: [
            {
                title: "AI in Data Analytics Workflows",
                topics: [
                    "Generative AI (ChatGPT, Copilot) for SQL",
                    "AI-assisted Python scripting",
                    "Automated data quality checks",
                    "Report summarization using LLMs"
                ],
                project: "Automate data analysis workflows using AI tools"
            },
            {
                title: "AI-Enabled Predictive Analytics",
                topics: [
                    "Automating SQL/Python generation",
                    "AutoML with BigQuery ML",
                    "AI-driven reports & dashboards",
                    "Validation of AI outputs"
                ],
                project: "Build predictive models using AutoML and generate AI-driven insights"
            }
        ]
    }
];

export const regularModules = [...ibmModules];

export const MENTORS = [
    { name: "Akash Maurya", designation: "Data scientist @Koantek", company: "Koantek", image: "/redesign/ai-da/mentors/Aakash Maurya.png", companyLogo: "/assets/mentors/Koantek.png", linkedinUrl: "https://www.linkedin.com/in/akash-maurya-347911164/" },
    { name: "Ravi Ahlawat", designation: "Sr. Product Manager - PayU", company: "PayU", image: "/redesign/ai-da/mentors/Ravi Ahlawat.png", companyLogo: "/assets/mentors/payu.png", linkedinUrl: "https://www.linkedin.com/in/raviahlawat09/" },
    { name: "Subhasis Chandra", designation: "Sr. Product Manager - Publicis Sapient", company: "Publicis Sapient", image: "/assets/mentors/Subhasis Chandra 2.png", companyLogo: "/assets/mentors/publicissapient.png", linkedinUrl: "https://www.linkedin.com/in/subhasis-chandra/" },
    { name: "Nitish Setty", designation: "Managing director at GrowSharp", company: "GrowSharp", image: "/redesign/ai-da/mentors/Nitish Setty.png", companyLogo: "/assets/mentors/grownswap.png", linkedinUrl: "https://www.linkedin.com/in/nitish-m-l-setty-7a0206192/" },
    { name: "Shubham Swaraj", designation: "Founder @BIP Consultant", company: "BIP Consultant", image: "/redesign/ai-da/mentors/Shubham Swaraj.png", companyLogo: "/assets/mentors/Bip-logo.png", linkedinUrl: "https://www.linkedin.com/in/shubham-swaraj-2b9457172" },
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
    { title: "Data Analyst", salary: "₹6L – ₹15L", description: "Drive business decisions using data + insights" },
    { title: " Business Analyst", salary: "₹8L – ₹20L", description: "Build data pipelines & transformation systems" },
    { title: "AI Data Analyst", salary: "₹10L – ₹25L", description: "Create dashboards that drive strategy" },
    { title: "Analytics and BI Specialist", salary: "₹12L – ₹28L", description: "Help companies become data-driven" },
];

export const PRICING_PLANS = [
    {
        title: "AcceleratorX + IBM",
        badge: "MOST POPULAR",
        subtitle: "An advanced AI Data Analytics program in India designed for learners seeking deeper expertise in analytics, dashboards, automation, and AI-driven decision-making.",
        price: "₹ 42,999 + GST",
        track: "ADVANCED DATA ANALYTICS TRACK",
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
        subtitle: "A complete data analytics course for beginners and working professionals.",
        price: "₹ 29,999 + GST",
        track: "FULL PROGRAM ACCESS",
        features: [
            "Complete Curriculum",
            "Hands-on Projects",
            "Dashboard & SQL Practice",
            "Tools Access",
            "Mentorship",
        ],
        cta: "Enroll in Data Analytics Program",
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
