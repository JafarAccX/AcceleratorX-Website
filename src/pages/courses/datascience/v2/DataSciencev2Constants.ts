// ── Assets ─────────────────────────────────────────────────────────────
export const ASSETS = {
    heroImage: "/assets/datascience/hero.png",
    ibmLogo: "/assets/ibm.png",
    bagIcon: "/assets/datascience/leftbag.png",
    rupeeIcon: "/leftdsstar.png",
    studentsGrp: "/assets/happystudents.png",
    ctaperson: "/assets/datascience/ctaperson.png",
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

// ── Hero Floating Badges ───────────────────────────────────────────────
export const floatingBadges = [
    { label: "Live Classes", top: "350px", left: "45px", icon: "/assets/liveclasses.png", width: 160, color: "#1CA425" },
    { label: "Mentor Connect", top: "485px", left: "500px", icon: "/assets/mentorconnect.png", width: 180, color: "#F96736" },
    { label: "Career Support", top: "645px", left: "45px", icon: "/assets/careersupport.png", width: 180, color: "#4C5BFA" },
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
    { title: "Leverage Your Existing Skills", icon: "/DSroadmap/Vector (4).png", color: "#3B82F6", desc: "Learn how to apply AI in data science, dashboards, and reporting systems." },
    { title: "Learn Data + AI Tools for Real Work", icon: "/DSroadmap/Vector (6).png", color: "#3B82F6", desc: "Master tools like Excel, SQL, Python, and AI-powered analytics platforms." },
    { title: "Build AI Dashboards & Data Systems", icon: "/DSroadmap/Group.png", color: "#3B82F6", desc: "Create automated dashboards, reporting systems, and data pipelines." },
    { title: "Work on Real Industry Projects", icon: "/DSroadmap/Vector (5).png", color: "#3B82F6", desc: "Build data analytics projects using real datasets and business use cases." },
    { title: "Transition into Data Roles", icon: "/DSroadmap/Vector (4).png", color: "#3B82F6", desc: "Use your portfolio to move into AI-enabled analytics roles." }
];

export const freshersPath = [
    { title: "Learn Data Science Fundamentals", icon: "/DSroadmap/Vector (4).png", color: "#3B82F6", desc: "Start with the basics of data analytics, AI in data science, Excel, SQL, and Python." },
    { title: "Explore AI in Data Analysis", icon: "/DSroadmap/Vector (6).png", color: "#3B82F6", desc: "Understand how AI tools used for data cleaning, analysis, visualization, and automation." },
    { title: "Develop Analytical Thinking", icon: "/DSroadmap/Group.png", color: "#3B82F6", desc: "Master thinking in terms of data-driven decisions, business insights, and problem-solving." },
    { title: "Build Real Data Projects", icon: "/DSroadmap/Vector (5).png", color: "#3B82F6", desc: "Become Job-Ready in Data Science." },
    { title: "Become Job-Ready as a Data Analyst", icon: "/DSroadmap/Vector (4).png", color: "#3B82F6", desc: "Create a strong portfolio and prepare for entry-level roles in AI-driven data analytics." }
];

// ── IBM & Regular Curriculum Modules ───────────────────────────────────
export const ibmModules = [
    {
        phase: "Phase 1",
        title: "Reframing from Analyst → Data Scientist",
        goal: "Understand the mindset shift and mathematical foundations required for data science modeling.",
        sessions: [
            {
                title: "Session 1: Analyst vs Data Scientist Mindset",
                topics: [
                    "Why dashboards ≠ data science",
                    "Problem framing vs reporting",
                    "Causal vs descriptive thinking",
                    "What hiring managers expect from DS",
                    "Case: \"Why metrics didn't move after dashboard launch\""
                ],
                exercise: "Convert a dashboard problem into a DS modeling problem"
            },
            {
                title: "Session 2: Data Science Lifecycle (Industry Reality)",
                topics: [
                    "Problem → signal → model → decision",
                    "Offline vs online ML",
                    "Failure modes of DS projects",
                    "Role of experimentation, iteration, and uncertainty"
                ],
                miniCase: "Churn reduction beyond reporting"
            },
            {
                title: "Session 3: Mathematical Foundations Refresher (Applied)",
                topics: [
                    "Linear algebra intuition (vectors, dot products)",
                    "Probability intuition for ML",
                    "Optimization & loss functions",
                    "Why gradient descent works"
                ]
            }
        ]
    },
    {
        phase: "Phase 2",
        title: "Core Machine Learning",
        goal: "Master essential algorithms and rigorous workflows used to build and validate predictive models.",
        sessions: [
            {
                title: "Session 4: Regression Deep Dive",
                topics: [
                    "Linear vs non-linear regression",
                    "Regularization (L1, L2, ElasticNet)",
                    "Feature leakage & multicollinearity",
                    "Business interpretation of coefficients"
                ],
                handsOn: "Convert a dashboard problem into a DS modeling problem"
            },
            {
                title: "Session 5: Classification Algorithms (Beyond Accuracy)",
                topics: [
                    "Logistic regression (decision boundaries)",
                    "KNN, Naive Bayes",
                    "Precision-recall tradeoffs",
                    "Threshold tuning for business impact"
                ],
                handsOn: "Conversion prediction"
            },
            {
                title: "Session 6: Tree-Based Models",
                topics: [
                    "Decision Trees (bias control)",
                    "Random Forest intuition",
                    "Gradient Boosting (XGBoost, LightGBM)",
                    "Feature importance pitfalls"
                ],
                handsOn: "Credit / risk / churn modeling"
            },
            {
                title: "Session 7: Model Evaluation & Error Analysis",
                topics: [
                    "Cross-validation strategies",
                    "ROC-AUC vs PR-AUC",
                    "Error slicing by cohorts",
                    "Cost-based evaluation"
                ],
                exercise: "Model failure diagnosis"
            },
            {
                title: "Session 8: Feature Engineering (Most Important Skill)",
                topics: [
                    "Numeric, categorical, temporal features",
                    "Aggregations & lag features",
                    "Encoding strategies",
                    "Feature stores (conceptual)"
                ],
                handsOn: "Improve model by 20-30% via features"
            },
            {
                title: "Session 9: ML Pipelines & Reproducibility",
                topics: [
                    "Train-test leakage",
                    "Pipelines & versioning",
                    "Experiment tracking (conceptual tools)",
                    "Reproducible DS workflows"
                ]
            }
        ]
    },
    {
        phase: "Phase 3",
        title: "Advanced & Specialized ML",
        goal: "Expand into specialized domains and complex data types encountered in business environments.",
        sessions: [
            {
                title: "Session 10: Unsupervised Learning",
                topics: [
                    "K-Means, Hierarchical clustering",
                    "DBSCAN for behavior discovery",
                    "PCA & UMAP intuition",
                    "When clustering fails"
                ],
                handsOn: "Behavioral segmentation"
            },
            {
                title: "Session 11: Time Series for Business",
                topics: [
                    "Trend, seasonality, noise",
                    "ARIMA vs ML-based forecasting",
                    "Rolling validation",
                    "Forecast confidence intervals"
                ],
                handsOn: "Demand / revenue forecasting"
            },
            {
                title: "Session 12: Experimentation & Causal Thinking",
                topics: [
                    "A/B testing pitfalls",
                    "Selection bias",
                    "Observational vs experimental data",
                    "Introduction to causal inference"
                ],
                case: "Why A/B test lied"
            },
            {
                title: "Session 13: Anomaly & Fraud Detection",
                topics: [
                    "Statistical vs ML approaches",
                    "Isolation Forest",
                    "Rare event challenges",
                    "Evaluation without labels"
                ]
            },
            {
                title: "Session 14: Introduction to Deep Learning",
                topics: [
                    "Neural Network foundations",
                    "Activation functions & backpropagation",
                    "Common architectures (CNN, RNN introduction)",
                    "Practical DL tools"
                ]
            },
            {
                title: "Session 15: NLP for Data Scientists",
                topics: [
                    "Embeddings vs TF-IDF",
                    "Text classification",
                    "Topic modeling",
                    "Review & feedback analysis"
                ]
            }
        ]
    },
    {
        phase: "Phase 4",
        title: "Generative AI & Agentic Data Science",
        goal: "Integrate modern LLM capabilities and autonomous agents into the data science workflow.",
        sessions: [
            {
                title: "Session 16: LLMs for Data Scientists",
                topics: [
                    "How LLMs actually work (high level)",
                    "Strengths vs weaknesses",
                    "DS use cases beyond chat",
                    "Hallucinations & validation"
                ]
            },
            {
                title: "Session 17: Prompt Engineering for Analytics",
                topics: [
                    "Structured prompting",
                    "Chain-of-thought for reasoning",
                    "SQL & Python generation safely",
                    "Prompt templates for DS tasks"
                ]
            },
            {
                title: "Session 18: Embeddings & Vector Search",
                topics: [
                    "A/B testing pitfalls",
                    "Selection bias",
                    "Observational vs experimental data",
                    "Introduction to causal inference"
                ],
                handsOn: "Build semantic search on user feedback"
            },
            {
                title: "Session 19: Agentic AI for Data Science",
                topics: [
                    "What are agents?",
                    "Tool-calling & multi-step reasoning",
                    "Data analysis agents",
                    "Auto-EDA & Auto-modeling agents"
                ],
                handsOn: "Build a data analysis agent"
            },
            {
                title: "Session 20: Human-in-the-Loop DS",
                topics: [
                    "Where AI should stop",
                    "Validation strategies",
                    "Trust & explainability",
                    "DS + AI collaboration patterns"
                ]
            }
        ]
    },
    {
        phase: "Phase 5",
        title: "Deployment, MLOps & Decision Impact",
        goal: "Put models into production and communicate their value effectively to stakeholders.",
        sessions: [
            {
                title: "Session 21: Model Deployment Basics",
                topics: [
                    "Batch vs real-time models",
                    "APIs & pipelines",
                    "Monitoring predictions",
                    "Data drift & concept drift"
                ]
            },
            {
                title: "Session 22: Explainability & Responsible AI",
                topics: [
                    "SHAP & feature attribution",
                    "Model transparency",
                    "Bias & fairness checks",
                    "Regulatory awareness"
                ]
            },
            {
                title: "Session 23: Business Decisioning with Models",
                topics: [
                    "Turning predictions into actions",
                    "Scorecards & decision rules",
                    "ROI estimation",
                    "Stakeholder communication"
                ]
            },
            {
                title: "Session 24: Capstone Project (Build Phase)",
                topics: [
                    "Business problem framing",
                    "Feature engineering",
                    "Model selection & evaluation",
                    "GenAI-assisted analysis",
                    "Deployment plan"
                ]
            },
            {
                title: "Session 25: Capstone Presentation",
                topics: [
                    "Present to \"stakeholders\"",
                    "Defend modeling decisions",
                    "Common DS interview questions",
                    "Portfolio & resume positioning"
                ]
            }
        ]
    }
];

export const regularModules = [...ibmModules];

// ── Mentors ────────────────────────────────────────────────────────────
export const MENTORS = [
    { name: "Himangi Sharma", designation: "Data Scientist 2", company: "", image: "/assets/datascience/mentors/himanshi.png", companyLogo: "" },
    { name: "Piyush Pankaj", designation: "Data Scientist@Edunet", company: "", image: "/assets/datascience/mentors/piyush.png", companyLogo: "/assets/datascience/mentors/edunet.png", linkedinUrl: "https://www.linkedin.com/in/piyush-pankaj-8b44b9ab/" },
];

// ── Tools ──────────────────────────────────────────────────────────────
export const TOOLS_LIST = [
    { name: "Excel", logo: "/assets/datascience/tools/excel.png" },
    { name: "SQL", logo: "/assets/datascience/tools/sql.png" },
    { name: "Google Analytics", logo: "/assets/datascience/tools/googleanalytics.png" },
    { name: "Power BI", logo: "/assets/datascience/tools/powerbi.png" },
    { name: "AI Automation", logo: "/assets/datascience/tools/AI Automation.png" },
    { name: "AI Tools", logo: "/assets/datascience/tools/AI Tools.png" },
];

// ── DS Skill Phases ───────────────────────────────────────────────────
export const DS_PHASES = [
    { icon: "/assets/datascience/skills/Icon.png", title: "Discovery", description: "Data fundamentals, identify business problems, and AI data analysis.", phase: "PHASE 01" },
    { icon: "/assets/datascience/skills/Icon (1).png", title: "Strategy", description: "Learn how to approach data problems and design data-driven solutions.", phase: "PHASE 02" },
    { icon: "/assets/datascience/skills/Container (3).png", title: "Design", description: "Structure dashboards, reports, and analytical workflows.", phase: "PHASE 03" },
    { icon: "/assets/datascience/skills/Icon (1).png", title: "Build", description: "Create dashboards, automate reports, and build analytics systems.", phase: "PHASE 04" },
    { icon: "/assets/datascience/skills/Icon (3).png", title: "Analyze", description: "Extract insights, optimize models, and interpret results.", phase: "PHASE 05" },
    { icon: "/assets/datascience/skills/Container (4).png", title: "Grow", description: "Scale data solutions and apply advanced analytics in real scenarios.", phase: "PHASE 06" }
];

// ── Career Roles ──────────────────────────────────────────────────────
export const CAREER_ROLES = [
    { title: "Data Analyst", salary: "₹6L – ₹15L", description: "Drive business decisions using data + insights" },
    { title: "Business Analyst", salary: "₹8L – ₹18L", description: "Build data pipelines & transformation systems" },
    { title: "AI Data Analyst", salary: "₹10L – ₹22L", description: "Create dashboards that drive strategy" },
    { title: "Analytics & Automation Specialist", salary: "₹12L – ₹25L", description: "Help companies become data-driven" }
];

// ── Pricing Plans ─────────────────────────────────────────────────────
export const PRICING_PLANS = [
    {
        title: "AcceleratorX + IBM",
        badge: "MOST POPULAR",
        subtitle: "An advanced AI Data Science program designed for learners seeking deeper expertise in analytics, automation, and real-world data systems.",
        price: "₹ 35,999 + GST",
        track: "ADVANCED DATA CAREER TRACK",
        features: [
            "Everything included in the Regular Program",
            "IBM Data Science Certification",
            "Advanced Generative AI & LLM Learning Track",
            "Exclusive ML Ops and Model Scaling Workshops",
            "Advanced Kaggle Case Simulations",
            "Dedicated Career Support and Placement Assistance",
        ],
        cta: "Join IBM Program",
        highlighted: true,
    },
    {
        title: "Regular Program",
        badge: null,
        subtitle: "A complete data analytics course designed to help you build strong foundations in Excel, SQL, Python, and dashboards.",
        price: "₹ 23,499 + GST",
        track: "FULL PROGRAM ACCESS",
        features: [
            "Complete Curriculum",
            "Hands-on Projects",
            "Dashboard & SQL Practice",
            "Tools",
            "Mentorship",
        ],
        cta: "Enroll in Data Science Program",
        highlighted: false,
    },
];

// ── FAQs ──────────────────────────────────────────────────────────────
export const FAQS = [
    { q: "What is the AI Data Science course at AcceleratorX?", a: "The AcceleratorX program is a 10-week AI Data Science course in India designed to help learners build skills in data analytics, dashboards, and AI-powered automation. It focuses on real-world projects using tools like Excel, SQL, Python, and AI tools to make you job-ready." },
    { q: "Which is the best data science course in India for working professionals?", a: "The best data science course for working professionals is one that focuses on practical skills, real business projects, and AI-powered analytics. AcceleratorX is designed to help professionals transition into data analyst and AI-driven roles without relying on outdated theoretical content." },
    { q: "Can I learn data science without coding?", a: "Yes, you can start learning data science without coding. This course begins with Excel, no-code tools, and AI-assisted analysis, and gradually introduces SQL and Python for advanced learning, making it beginner-friendly." },
    { q: "What career opportunities are available after completing this data science course?", a: "After completing this course, you can apply for roles such as: Data Analyst, Business Analyst, AI Data Analyst, Reporting & Dashboard Specialist, Analytics & Automation Specialist. These roles are in high demand across companies using data-driven decision-making and AI tools." },
    { q: "How can I switch my career to data science or data analytics?", a: "To switch into data science, you need hands-on experience, real-world projects, and a strong portfolio. This course helps you build dashboards, analytics systems, and automation workflows that demonstrate your practical skills to employers." },
    { q: "What is the salary of a data analyst or data science professional in India?", a: "The average salary for data professionals in India is: Entry-level: ₹6–12 LPA, Mid-level: ₹10–20 LPA, Experienced: ₹20–40+ LPA. Professionals with AI and data analytics skills often earn higher salaries due to increasing demand." },
    { q: "Is this AI Data Science course suitable for beginners?", a: "Yes, this course is designed for beginners, freshers, and non-technical professionals. You don’t need prior experience in coding or data science to get started." },
    { q: "What tools and technologies will I learn in this data science course?", a: "You will learn industry-relevant tools such as: Excel for data analysis, SQL for querying data, Python for data processing, Power BI / dashboards, AI tools for automation and insights. These tools are widely used in real-world data roles." },
    { q: "Do I get a certificate after completing the course?", a: "Yes, you will receive a recognized certification, along with a portfolio of real data projects and dashboards, which strengthens your job applications." },
    { q: "How long does it take to become job-ready in data science?", a: "Most learners become job-ready within 10 weeks, depending on consistency and project completion. The course focuses on hands-on learning and real-world application." },
    { q: "How is AI used in data science and analytics?", a: "AI is used in data science for automating data analysis, generating insights, predictive modeling, and improving decision-making. This course teaches you how to apply AI tools in real business scenarios." },
    { q: "Why should working professionals learn AI in data analytics?", a: "AI is transforming how data is analyzed. Professionals who understand AI-powered analytics, automation, and dashboards are more valuable and have better career growth opportunities." },
    { q: "How do I get started with the AI Data Science course at AcceleratorX?", a: "You can get started by booking a free demo session, where you’ll understand the course structure, tools, projects, and how to transition into a data analytics or AI-driven role." }
];

// ── Footer Columns ────────────────────────────────────────────────────
export const FOOTER_COLUMNS = [
    { heading: "COMPANY", links: ["Home", "Product", "Blogs", "Services"] },
    { heading: "HELP", links: ["Customer Support", "Terms & Conditions", "Privacy Policy"] },
    { heading: "RESOURCES", links: ["Free eBooks", "Development Tutorial", "Free course Playlist"] },
];
