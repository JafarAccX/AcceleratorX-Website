
// ── Assets ─────────────────────────────────────────────────────────────
export const ASSETS = {
    heroImage: "/assets/digitalmarketing/hero.png",
    ibmLogo: "/assets/ibm.png",
    bagIcon: "/assets/digitalmarketing/leftbag.png",
    rupeeIcon: "/leftdmstar.png",
    studentsGrp: "/assets/happystudents.png",
    ctaperson: "/assets/digitalmarketing/ctaperson.png",
    aipmgraph: "/assets/digitalmarketing/ai-dm-graph.png",
    roles: "/assets/digitalmarketing/roles.png",
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
    { title: "Leverage Your Marketing or Business Skills", icon: "/assets/digitalmarketing/roadmap/Group.png", color: "#A1FF00", desc: "Master AI tools, automation, and performance marketing strategies." },
    { title: "Master AI Tools for Marketing Execution", icon: "/assets/digitalmarketing/roadmap/ant-design_build-outlined (1).png", color: "#A1FF00", desc: "Build AI for ad creatives, campaigns, content, and performance tracking." },
    { title: "Build AI-Powered Campaigns & Funnels", icon: "/assets/digitalmarketing/roadmap/solar_pen-bold-duotone.png", color: "#A1FF00", desc: "Create automated marketing funnels, AI-driven campaigns, and scalable growth." },
    { title: "Work on Real Campaigns & Case Studies", icon: "/assets/digitalmarketing/roadmap/mdi_learn-outline (1).png", color: "#A1FF00", desc: "Execute live campaigns and real-world use cases for practical experience." },
    { title: "Transition into AI Marketing Roles", icon: "/assets/digitalmarketing/roadmap/Group.png", color: "#A1FF00", desc: "Use your portfolio and campaign results to move into AI-driven marketing roles." }
];

export const freshersPath = [
    { title: "Learn Digital Marketing Fundamentals with AI", icon: "/assets/digitalmarketing/roadmap/Group.png", color: "#A1FF00", desc: "Understand core marketing concepts combined with AI tools and automation." },
    { title: "Explore AI Tools & Marketing Platforms", icon: "/assets/digitalmarketing/roadmap/ant-design_build-outlined (1).png", color: "#A1FF00", desc: "Learn how AI is used in ads, content, SEO, and performance marketing." },
    { title: "Develop Performance Marketing Thinking", icon: "/assets/digitalmarketing/roadmap/solar_pen-bold-duotone.png", color: "#A1FF00", desc: "Understand funnels, conversions, user behaviour, and AI-driven optimisation." },
    { title: "Build Real Marketing Campaigns", icon: "/assets/digitalmarketing/roadmap/mdi_learn-outline (1).png", color: "#A1FF00", desc: "Work on AI-powered ads, content systems, and marketing automation projects." },
    { title: "Become Job-Ready in Digital Marketing", icon: "/assets/digitalmarketing/roadmap/Group.png", color: "#A1FF00", desc: "Build a strong portfolio with campaigns, case studies, and measurable results." }
];

// ── IBM & Regular Curriculum Modules ───────────────────────────────────
export const ibmModules = [
    {
        title: "Module 1: Foundations of AI in Digital Marketing (Month 1)",
        goal: "Build a solid foundation by integrating AI into core marketing strategies and master AI-powered content creation.",
        sessions: [
            {
                title: "Week 1: Digital Marketing Foundations with AI",
                topics: ["Introduction to Digital Marketing & AI's Role", "Consumer Journey & Funnel Mapping", "Market Research with AI (Marketing Lab)"],
                tools: "ChatGPT, Perplexity AI, Funnelytics, Notion AI, Google Trends, Exploding Topics"
            },
            {
                title: "Week 2: AI-Powered Content Creation (Text + SEO)",
                topics: ["SEO Basics & AI for Keyword Research", "Blog Writing with AI Prompts", "On-Page SEO & Content Optimization"],
                tools: "Ubersuggest, SEMrush, ChatGPT, Jasper AI, SurferSEO, Yoast SEO"
            },
            {
                title: "Week 3: Visual Storytelling with Generative AI",
                topics: ["AI Image Generation for Ads & Social Media", "Creative Design Workflows", "Mid-Level Creative Projects"],
                tools: "Leonardo AI, Ideogram, Stable Diffusion XL, Nano Banana, Canva AI, Adobe Firefly, Runway Gen-3, Kaiber"
            },
            {
                title: "Week 4: Video & Audio Marketing with AI",
                topics: ["AI Video Creation & Editing", "Short-Form Content for TikTok/Reels", "AI Voice & Podcasting"],
                tools: "Runway Gen-3, Pika Labs, Veo 3, CapCut AI, OpusClip, ElevenLabs, Descript"
            }
        ]
    },
    {
        title: "Module 2: Growth Channels and Paid Media with AI (Month 2)",
        goal: "Leverage AI for paid media planning, social media optimization, and advanced marketing analytics.",
        sessions: [
            {
                title: "Week 5: Paid Ads with AI",
                topics: ["Google Ads Planning with AI", "Meta Ads Campaign Drafting", "AI for Ad Copywriting & A/B Testing"],
                tools: "Google Ads, Meta Ads Manager, Canva AI, Jasper, Copy.ai, GrowthBook"
            },
            {
                title: "Week 6: Social Media Growth & Influencer Marketing",
                topics: ["Social Media Strategy with AI", "Influencer Discovery & Outreach", "Engagement Optimization with AI"],
                tools: "Buffer, Metricool, Modash, Nano Banana, Predis.ai, Lately.ai"
            },
            {
                title: "Week 7: Data Analytics for Marketers",
                topics: ["Google Analytics 4 (GA4) Basics", "Performance Tracking & KPI Dashboards", "AI-Powered Insights & Forecasting"],
                tools: "GA4 Demo, Looker Studio, Tableau Public, Obviously.ai, ChatGPT Code Interpreter"
            },
            {
                title: "Week 8: Conversion Rate Optimization (CRO)",
                topics: ["Landing Page Design Principles", "Heatmaps & User Behavior", "AI for CRO Recommendations"],
                tools: "Figma, Canva AI, Hotjar, Microsoft Clarity, ChatGPT, Jasper, GrowthBook"
            }
        ]
    },
    {
        title: "Module 3: Automation, Email and E-commerce AI (Month 3)",
        goal: "Build automated workflows and CRM integrations to scale marketing operations and e-commerce conversions.",
        sessions: [
            {
                title: "Week 9: Marketing Automation & Rollout AI",
                topics: ["Introduction to Workflow Automation", "Automated Lead Capture & CRM Updates", "Rollout AI for Marketing Automation"],
                tools: "n8n, Make, HubSpot CRM, Rollout AI"
            },
            {
                title: "Week 10: Email & Drip Marketing",
                topics: ["Email Marketing Fundamentals", "AI Copywriting for Email Sequences", "A/B Testing & Personalization"],
                tools: "Mailchimp, HubSpot, Jasper, Copy.ai, Mailchimp AI, Mutiny"
            },
            {
                title: "Week 11: B2B Growth & LinkedIn Marketing",
                topics: ["LinkedIn Lead Generation with AI", "Cold Outreach Copywriting", "Automating LinkedIn Campaigns"],
                tools: "Apollo.io, Sales Navigator, ChatGPT, Lavender AI, Phantombuster, Clay"
            },
            {
                title: "Week 12: E-commerce Marketing with AI",
                topics: ["AI-Powered Product Descriptions", "Dynamic Pricing & Personalization", "Retargeting Campaigns"],
                tools: "Jasper, ChatGPT, Obviously.ai, Mutiny, Google Ads Remarketing, Meta Pixel"
            }
        ]
    },
    {
        title: "Module 4: AI Agents, Growth & Career Launch (Month 4)",
        goal: "Develop autonomous AI agents for marketing tasks and conclude with growth experiments and career preparation.",
        sessions: [
            {
                title: "Week 13: Vibe Coding & AI Marketing Agents (Part 1)",
                topics: ["Vibe Coding - Building Agents with Prompts", "Multi-Agent Marketing Workflows (No-Code)", "AI Agent Lab - Automating Marketing Flows"],
                tools: "Vibe Coding, CrewAI, AutoGen (GUI mode), n8n Integration"
            },
            {
                title: "Week 14: Rollout AI & AI Marketing Agents (Part 2)",
                topics: ["Rollout AI Deep Dive - Campaign Builder", "Advanced Agent Collaboration", "Case Simulation - Multi-Agent Ad Campaign"],
                tools: "Rollout AI, n8n, Nano Banana"
            },
            {
                title: "Week 15: Growth Hacking, Storytelling & Experimentation",
                topics: ["Growth Loops & Viral Mechanics", "Creative Storytelling with AI", "Rapid A/B Testing & Case Studies"],
                tools: "ChatGPT, Notion AI, Sora, Pika Labs, Runway, GrowthBook, Google Optimize"
            },
            {
                title: "Week 16: Career Prep, Capstone & Showcase",
                topics: ["Building a Marketing Portfolio", "Freelancing & Personal Branding", "Final Capstone Showcase & Feedback"],
                tools: "Notion, Canva, Taplio, AuthoredUp, Fiverr, Upwork, Zoom"
            }
        ]
    }
];

export const regularModules = [...ibmModules];

// ── Mentors ────────────────────────────────────────────────────────────
export const MENTORS = [
    {
        name: "Kumar Savino",
        designation: "Ass. Director @ DrinkPrime",
        company: "DrinkPrime",
        image: "/assets/digitalmarketing/mentors/Kumar Savino.png",
        companyLogo: "/assets/digitalmarketing/mentors/drinkprime.png",
        linkedinUrl: "https://www.linkedin.com/in/kumar-savino/",
    },
    {
        name: "Ankita Das",
        designation: "Digital Head @ Target G",
        company: "TargetG",
        image: "/assets/digitalmarketing/mentors/Anjali Sharma 3.png",
        companyLogo: "/assets/digitalmarketing/mentors/targetg.png",
        linkedinUrl: "https://www.linkedin.com/in/ankita-das-marketingmania/",
    },
    {
        name: "Nitya Sagar",
        designation: "Cofounder - Stealth Startup",
        company: "Stealth",
        image: "/assets/digitalmarketing/mentors/Nitya Sagar 1.png",
        companyLogo: "/assets/digitalmarketing/mentors/stealth.png",
        linkedinUrl: "https://in.linkedin.com/in/nitya-sagar",
    },
    {
        name: "Yash Manghnani",
        designation: "Senior AI Builder @ Better Software",
        company: "Better Software",
        image: "/assets/digitalmarketing/mentors/Yash Manghnani.png",
        companyLogo: "/assets/digitalmarketing/mentors/bettersoftware.png",
        linkedinUrl: "https://www.linkedin.com/in/yash-manghnani/",
    },
];




// ── Tools ──────────────────────────────────────────────────────────────
export const TOOLS_LIST = [
    { name: "ChatGPT", logo: "/redesign/ai-dm/tools/Chatgpt.png", color: "#10A37F" },
    { name: "Claude", logo: "/redesign/ai-dm/tools/Claude.png", color: "#D97757" },
    { name: "Perplexity", logo: "/redesign/ai-dm/tools/Perplexity.png", color: "#20B8CD" },
    { name: "Google Ads", logo: "/redesign/ai-dm/tools/Googleads.png", color: "#4285F4" },
    { name: "Meta Ads", logo: "/redesign/ai-dm/tools/Meta ads manager.png", color: "#0081FB" },
    { name: "Google Trends", logo: "/redesign/ai-dm/tools/Googletrends.png", color: "#4285F4" },
    { name: "Semrush", logo: "/redesign/ai-dm/tools/Semrush.png", color: "#FF642D" },
    { name: "Buffer", logo: "/redesign/ai-dm/tools/Buffer.png", color: "#2C4BFF" },
    { name: "Metricool", logo: "/redesign/ai-dm/tools/Metricool.png", color: "#00C853" },
    { name: "n8n", logo: "/redesign/ai-dm/tools/n8n.png", color: "#EA4B71" },
];


export const PM_TOOLS = [
    {
        name: "ChatGPT",
        logo: "/assets/tools/chatgpt.png",
        category: "LLM",
        description: "Industry-leading language model for content & strategy."
    },
    {
        name: "Claude",
        logo: "/assets/tools/claude.png",
        category: "LLM & RESEARCH",
        description: "Advanced AI for nuanced copywriting and research."
    },
    {
        name: "Perplexity",
        logo: "/assets/tools/perplexity.png",
        category: "AI SEARCH",
        description: "Real-time AI search engine for market intelligence."
    },
    {
        name: "Google Ads",
        logo: "/assets/tools/googleads.png",
        category: "AD PLATFORM",
        description: "Platform for running search, display, and video ads."
    },
    {
        name: "Meta Ads Manager",
        logo: "/assets/tools/metaads.png",
        category: "AD PLATFORM",
        description: "Manage ads across Facebook, Instagram, and Messenger."
    },
    {
        name: "Google Trends",
        logo: "/assets/tools/googletrends.png",
        category: "MARKET RESEARCH",
        description: "Analyze search popularity and discover market trends."
    },
    {
        name: "Exploding Topics",
        logo: "/assets/tools/explodingtopics.png",
        category: "TREND DISCOVERY",
        description: "Discover rapidly growing topics before they peak."
    },
    {
        name: "Semrush",
        logo: "/assets/tools/semrush.png",
        category: "SEO & MARKETING",
        description: "All-in-one suite for SEO, PPC, and content marketing."
    }
];

// ── PM Skill Phases ───────────────────────────────────────────────────

export const PM_PHASES = [
    { icon: "/assets/digitalmarketing/skills/Container (2).png", title: "Discovery", description: "Understand marketing fundamentals, audience behavior, and AI-driven insights", phase: "PHASE 01" },
    { icon: "/assets/digitalmarketing/skills/Container (3).png", title: "Strategy", description: "Plan campaigns, funnels, and AI-driven marketing strategies", phase: "PHASE 02" },
    { icon: "/assets/digitalmarketing/skills/Icon.png", title: "Design", description: "Create ad creatives, content, and AI-powered messaging systems", phase: "PHASE 03" },
    { icon: "/assets/digitalmarketing/skills/Container (4).png", title: "Build", description: "Launch campaigns, funnels, and automation systems", phase: "PHASE 04" },
    { icon: "/assets/digitalmarketing/skills/Container (5).png", title: "Analyze", description: "Track campaign performance, optimize conversions, and scale results", phase: "PHASE 05" },
    { icon: "/assets/digitalmarketing/skills/Icon (1).png", title: "Grow", description: "Scale campaigns, automate workflows, and build long-term growth systems", phase: "PHASE 06" }
];

// ── Career Roles ──────────────────────────────────────────────────────
export const CAREER_ROLES = [
    { title: "AI Performance Marketer", salary: "₹6L – ₹20L", description: "Scale revenue through paid marketing" },
    { title: "Growth Marketing Specialist", salary: "₹8L – ₹25L", description: "Build systems to acquire & convert users" },
    { title: "Marketing Automation Specialist", salary: "₹10L – ₹28L", description: "Own full-funnel revenue growth" },
    { title: "AI Digital Marketing Manager", salary: "₹12L – ₹30L", description: "Build funnels, email & AI-driven campaigns" }
];

// ── Pricing Plans ─────────────────────────────────────────────────────
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
            "Advanced Campaign & Automation Systems",
            "Growth Marketing Workshops",
            "Real Campaign Simulations",
            "Dedicated Career Support",
        ],
        cta: "Join IBM Program",
        highlighted: true,
    },
    {
        title: "Regular Program",
        badge: null,
        subtitle: "A complete digital marketing learning experience designed to help you build strong marketing fundamentals and transition into digital marketing roles.",
        price: "₹ 33,999 + GST",
        track: "FULL PROGRAM ACCESS",
        features: [
            "Complete Curriculum",
            "Hands-on Projects",
            "Campaign & Copywriting Practice",
            "Tools Access",
            "Mentorship",
        ],
        cta: "Enroll in Digital Marketing Program",
        highlighted: false,
    },
];

// ── FAQs ──────────────────────────────────────────────────────────────
export const FAQS = [
    { q: "What is AcceleratorX, and how is it different from other digital marketing courses in India?", a: "AcceleratorX offers an AI-powered digital marketing course in India focused on real-world execution, not just theory. Unlike traditional programs, you learn how to run AI-driven campaigns, automation funnels, and performance marketing systems using tools like ChatGPT, Meta Ads, and Google Ads." },
    { q: "Which is the best digital marketing course in India for working professionals?", a: "The best digital marketing course is one that focuses on practical skills, live campaigns, and measurable results. AcceleratorX is designed for working professionals who want to transition into performance marketing, growth marketing, and AI-driven marketing roles." },
    { q: "Can I learn digital marketing without coding or technical background?", a: "Yes, you can learn digital marketing without coding. This course is beginner-friendly and teaches you how to use AI tools, marketing platforms, and automation systems without any technical background." },
    { q: "What career opportunities are available after completing an AI digital marketing course?", a: "After completing the course, you can apply for roles such as: Performance Marketing Specialist, Digital Marketing Executive, Growth Marketing Manager, Social Media Marketing Specialist, Marketing Automation Specialist. These roles are in high demand across companies running paid ads, content marketing, and AI-driven campaigns." },
    { q: "How can I switch my career to digital marketing or performance marketing?", a: "To switch into digital marketing, you need hands-on experience, real campaign execution, and a strong portfolio. AcceleratorX helps you build live campaigns, funnels, and AI marketing systems that demonstrate your skills to employers." },
    { q: "What is the salary of a digital marketing professional in India?", a: "The average salary for digital marketing professionals in India is: Entry-level: ₹4–8 LPA, Mid-level: ₹8–18 LPA, Experienced: ₹15–30 LPA. Professionals skilled in performance marketing, paid ads, and AI tools often earn higher salaries." },
    { q: "Is this digital marketing course suitable for beginners and freshers?", a: "Yes, this course is designed for beginners, freshers, and career switchers. You don’t need prior experience to start learning digital marketing, AI tools, and campaign execution." },
    { q: "What tools and platforms will I learn in this AI digital marketing course?", a: "You will learn industry-relevant tools such as: ChatGPT and AI content tools, Meta Ads and Google Ads, Analytics and performance tracking tools, Automation and funnel-building platforms. These tools are used to build real marketing campaigns and scalable growth systems." },
    { q: "Do I get a certificate after completing the digital marketing course?", a: "Yes, you will receive a recognized certification, along with a portfolio of live campaigns and real marketing projects, which helps in job applications." },
    { q: "How long does it take to become job-ready in digital marketing?", a: "Most learners become job-ready within 3 to 6 months, depending on consistency and project execution. The focus is on real campaigns, practical skills, and measurable outcomes." },
    { q: "Is AI replacing digital marketing jobs?", a: "AI is not replacing digital marketing jobs — it is transforming them. Professionals who learn AI-powered marketing, automation, and performance marketing are seeing better career growth and higher demand." },
    { q: "Why should I learn AI in digital marketing today?", a: "AI is becoming essential in digital marketing. Marketers who understand AI tools, automation, and data-driven campaigns can scale faster, optimize better, and stay competitive in the industry." },
    { q: "How do I get started with the AI digital marketing course at AcceleratorX?", a: "You can get started by booking a free demo session, where you'll understand the course structure, career roadmap, and how to build a career in AI-powered digital marketing step by step." }
];

// ── Footer Columns ────────────────────────────────────────────────────
export const FOOTER_COLUMNS = [
    { heading: "COMPANY", links: ["Home", "Product", "Blogs", "Services"] },
    { heading: "HELP", links: ["Customer Support", "Terms & Conditions", "Privacy Policy"] },
    { heading: "RESOURCES", links: ["Free eBooks", "Development Tutorial", "Free course Playlist"] },
];
