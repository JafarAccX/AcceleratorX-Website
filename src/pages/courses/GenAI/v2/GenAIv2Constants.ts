// ── Constants ─────────────────────────────────────────────────────────────
export const ASSETS = {
  heroImage: "/assets/hero.png",
  ibmLogo: "/assets/ibm.png",
  bagIcon: "/assets/leftbag.png",
  rupeeIcon: "/assets/leftrupee.png",
  studentsGrp: "/assets/studentgrp.png",
  ctaperson: "/assets/ctabanner/ctaperson.png",
  ctaBob: "/assets/ctabanner/bockgroundbob.png",
  ctaBadge: "/assets/ctabanner/1998+.png",
  ctaAvatars: ["/assets/ctabanner/s1.png", "/assets/ctabanner/s2.png", "/assets/ctabanner/s3.png", "/assets/ctabanner/s4.png"],
  aipmgraph: "/assets/ai-pm-graph.png",
};

export const NAV_LINKS = ["Home", "Programs", "About", "Blog", "Job Portal"];

export const ALUMNI_LOGOS = [
  { name: "Google", url: "/assets/genai_alumni_logos/Google_2015_logo.svg.png", height: 32 },
  { name: "Microsoft", url: "/assets/genai_alumni_logos/pngimg.com - microsoft_PNG19.png", height: 32 },
  { name: "Meta", url: "/assets/genai_alumni_logos/pngimg.com - meta_PNG7.png", height: 32 },
  { name: "TCS", url: "/assets/genai_alumni_logos/TCS.NS.D-dd11d7cc.png", height: 32 },
  { name: "Infosys", url: "/assets/genai_alumni_logos/Infosys_logo.svg.png", height: 32 },
  { name: "Wipro", url: "/assets/genai_alumni_logos/WIPRO WHITE.png", height: 32 },
  { name: "ISRO", url: "/assets/genai_alumni_logos/Indian_Space_Research_Organisation_Logo.svg.png", height: 40 },
  { name: "DRDO", url: "/assets/genai_alumni_logos/drdo-logo-hd.webp", height: 40 },
  { name: "Cognizant", url: "/assets/genai_alumni_logos/COGNIZANT.png", height: 32 },
  { name: "EY", url: "/assets/genai_alumni_logos/EY-Logo-Transparent.png", height: 32 },
  { name: "PWC", url: "/assets/genai_alumni_logos/PWC-Logo-PNG.png", height: 32 },
  { name: "Deutsche Bank", url: "/assets/genai_alumni_logos/deutsche-bank-logo-black-and-white-1.png", height: 32 },
  { name: "JP Morgan", url: "/assets/genai_alumni_logos/JP.png", height: 32 },
  { name: "Qualcomm", url: "/assets/genai_alumni_logos/QCOM_BIG.D-61975dc8.png", height: 32 },
  { name: "Bajaj", url: "/assets/genai_alumni_logos/BAJAJ.png", height: 32 },
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
  { title: "Leverage Your Existing Skills", icon: "/assets/roadmap/mingcute_target-line.png", color: "#F97316", desc: "Learn how to apply AI workflows to your current domain." },
  { title: "Learn AI Tools for Real Work", icon: "/assets/roadmap/ant-design_build-outlined.png", color: "#4F46E5", desc: "Master AI tools, automation systems, and workflows." },
  { title: "Build AI Workflows & Systems", icon: "/assets/roadmap/mingcute_target-line.png", color: "#EC4899", desc: "Create AI-powered workflows and automation processes." },
  { title: "Work on Real Industry Projects", icon: "/assets/roadmap/solar_pen-bold-duotone (1).png", color: "#8B5CF6", desc: "Build practical AI projects and apply AI in real scenarios." },
  { title: "Transition into AI Roles", icon: "/assets/roadmap/solar_pen-bold-duotone (1).png", color: "#F59E0B", desc: "Use your portfolio, and projects to move into AI-driven roles." },
];

export const freshersPath = [
  { title: "Learn AI Fundamentals & ChatGPT", icon: "/assets/roadmap/mingcute_target-line.png", color: "#F97316", desc: "Start with the basics of AI, with no prior technical background." },
  { title: "Explore AI Tools & Use Cases", icon: "/assets/roadmap/ant-design_build-outlined.png", color: "#8B5CF6", desc: "Understand AI tools, automation platforms, and workflows." },
  { title: "Develop AI Thinking & Problem Solving", icon: "/assets/roadmap/mingcute_target-line.png", color: "#EC4899", desc: "Learn how to think in terms of AI-first solutions." },
  { title: "Build Real AI Projects", icon: "/assets/roadmap/ant-design_build-outlined.png", color: "#4F46E5", desc: "Work on AI workflows, automation, and real-world use cases." },
  { title: "Become Job-Ready with AI Skills", icon: "/assets/roadmap/solar_pen-bold-duotone (1).png", color: "#F59E0B", desc: "Create a strong portfolio and apply for AI-first roles." },
];

export const ibmModules = [
  { title: "Generative AI Foundations & Business Applications", desc: "Understand the core concepts of Gen AI, and AI systems." },
  { title: "AI Tools, Prompt Engineering & Automation", desc: "Master prompt engineering, AI tools, and automation workflows." },
  { title: "Building AI Workflows & Real-World Systems", desc: "Design and implement AI-powered workflows, automation systems, and scalable use cases used in modern companies." },
  { title: "Capstone Projects & Career Acceleration", desc: "Work on industry-grade AI projects, automation systems, and real-world use cases to build a strong portfolio" },
  { title: "AI Agent Building Specialisation Certificate from IBM", desc: "Earn an industry-recognised IBM certification in AI agent building by creating real-world AI agents and automation workflows." },
];

export const regularModules = [
  { title: "Introduction to Generative AI & ChatGPT", desc: "Learn the fundamentals of Gen AI and AI tools and understand how they work in practical scenarios." },
  { title: "AI Tools & Practical Use Cases", desc: "Explore commonly used AI tools and platforms, and apply them to everyday workflows and business tasks." },
  { title: "AI Workflows & Automation Basics", desc: "Understand how to build basic AI workflows and automation systems to improve efficiency and productivity." },
  { title: "Hands-On Projects & Applications", desc: "Work on practical AI projects and use cases to apply your learning and build foundational experience." },
];

export const MENTORS = [
  { name: "Yash Manghnani", designation: "Senior AI Builder", company: "Better Software", image: "/assets/mentors/gen-ai/yash.png", companyLogo: "/assets/mentors/beetersoftware.png" },
  { name: "Ashu Mishra", designation: "Technical Product Manager", company: "Zigram", image: "/assets/mentors/gen-ai/Ashu 1.png", companyLogo: "/assets/mentors/zigram.png" },
  { name: "Prashant Vijaybhai Sahatiya", designation: "Program Coordinator & Assistant Professor", company: "Assistant Professor", image: "/assets/mentors/gen-ai/Dr. Prashant 2.png", companyLogo: "/assets/mentors/gen-ai/Frame 51378-2.png" },
  { name: "Nitish Setty", designation: "Managing Director", company: "GrowSharp", image: "/assets/mentors/gen-ai/Nitish.png", companyLogo: "/assets/mentors/grownswap.png" },
  { name: "Anjali Sharma", designation: "Sr. AI Product Manager", company: "Search Atlas", image: "/assets/mentors/gen-ai/Anjali Sharma 3.png", companyLogo: "/assets/mentors/searchatlas.png" },
];

export const TOOLS_LIST = [
  { name: "ChatGPT", logo: "/redesign/gen-ai/tools/gpt.png", color: "#10A37F" },
  { name: "Claude", logo: "/redesign/gen-ai/tools/claude.png", color: "#D97757" },
  { name: "Gemini", logo: "/redesign/gen-ai/tools/gemini.png", color: "#8E75FF" },
  { name: "Zapier", logo: "/redesign/gen-ai/tools/zapier.png", color: "#FF4A00" },
  { name: "LangChain", logo: "/redesign/gen-ai/tools/langchain.png", color: "#1C3C3C" },
  { name: "CrewAI", logo: "/redesign/gen-ai/tools/crew-ai.png", color: "#FF3E00" },
  { name: "Cursor", logo: "/redesign/gen-ai/tools/cursor.png", color: "#5468FF" },
  { name: "Deepseek", logo: "/redesign/gen-ai/tools/deepseek.png", color: "#007AFF" },
  { name: "Mistral AI", logo: "/redesign/gen-ai/tools/mistral-ai.png", color: "#F5D142" },
  { name: "Flux", logo: "/redesign/gen-ai/tools/flux.png", color: "#6D28D9" },
  { name: "Llama 3", logo: "/redesign/gen-ai/tools/lama-3.png", color: "#0081FB" },
  { name: "Auto Train", logo: "/redesign/gen-ai/tools/auto-train.png", color: "#FFD21E" },
  { name: "Bolt", logo: "/redesign/gen-ai/tools/bolt.png", color: "#2DD4BF" },
  { name: "Colab", logo: "/redesign/gen-ai/tools/colab.png", color: "#F9AB00" },
  { name: "Docker", logo: "/redesign/gen-ai/tools/docker.png", color: "#2496ED" },
  { name: "Eleven Labs", logo: "/redesign/gen-ai/tools/eleven-labs.png", color: "#000000" },
  { name: "Fast API", logo: "/redesign/gen-ai/tools/fast-api.png", color: "#05998B" },
  { name: "Flowwise", logo: "/redesign/gen-ai/tools/flowwise.png", color: "#1E3A8A" },
  { name: "Helicone", logo: "/redesign/gen-ai/tools/helicone.png", color: "#000000" },
  { name: "Langfuse", logo: "/redesign/gen-ai/tools/langfuse.png", color: "#000000" },
  { name: "Leonardo AI", logo: "/redesign/gen-ai/tools/leonardo-ai.png", color: "#FFFFFF" },
  { name: "LangGraph", logo: "/redesign/gen-ai/tools/lnaggraph.png", color: "#1C3C3C" },
  { name: "Midjourney", logo: "/redesign/gen-ai/tools/midjournry.png", color: "#FFFFFF" },
  { name: "Pika Labs", logo: "/redesign/gen-ai/tools/pika-labs.png", color: "#FFFFFF" },
  { name: "Render", logo: "/redesign/gen-ai/tools/render.png", color: "#46E3B7" },
  { name: "Replit", logo: "/redesign/gen-ai/tools/replit.png", color: "#F26207" },
  { name: "Runway", logo: "/redesign/gen-ai/tools/runway.png", color: "#FFFFFF" },
  { name: "Spaces", logo: "/redesign/gen-ai/tools/spaces.png", color: "#FFD21E" },
  { name: "Stable Diffusion", logo: "/redesign/gen-ai/tools/stable-diffusion.png", color: "#9400D3" },
  { name: "Suno", logo: "/redesign/gen-ai/tools/suno.png", color: "#FFCC00" },
  { name: "Udio", logo: "/redesign/gen-ai/tools/udio.png", color: "#000000" },
];

export const PM_PHASES = [
  { icon: "/assets/skills/Container (2).png", title: "Discovery", description: "Understand AI fundamentals, use cases, and explore Gen AI", phase: "PHASE 01" },
  { icon: "/assets/skills/Icon.png", title: "Strategy", description: "Design AI-first solutions and automation for different domains.", phase: "PHASE 02" },
  { icon: "/assets/skills/Container (3).png", title: "Design", description: "Structure AI interactions and workflows.", phase: "PHASE 03" },
  { icon: "/assets/skills/Container (4).png", title: "Build", description: "Create real AI workflows, automation systems, and AI-powered tools", phase: "PHASE 04" },
  { icon: "/assets/skills/Icon (1).png", title: "Analyze", description: "Measure performance of AI systems and optimize outputs using data", phase: "PHASE 05" },
  { icon: "/assets/skills/Container (5).png", title: "Grow", description: "Scale AI across use cases and implement advanced automation", phase: "PHASE 06" },
];

export const CAREER_ROLES = [
  { title: "AI Content Systems Builder", salary: "₹8L – ₹22L", description: "Design scalable AI content pipelines for brands" },
  { title: "Conversational AI Designer", salary: "₹10L – ₹25L", description: "Build chatbots & AI assistants for businesses" },
  { title: "AI Workflow Automation Specialist", salary: "₹12L – ₹28L", description: "Help businesses integrate AI solutions and develop AI strategies" },
  { title: "Generative AI Solutions Specialist", salary: "₹15L – ₹30L", description: "Implement AI use cases across industries" },
];

export const PRICING_PLANS = [
  {
    title: "AcceleratorX + IBM",
    badge: "MOST POPULAR",
    subtitle: "Generative AI program designed for learners seeking expertise in AI agents, automation systems, and real-world AI applications, along with industry-recognized certification.",
    price: "₹ 59,999 + GST",
    track: "ADVANCED CAREER TRACK",
    features: [
      "Everything included in the Regular Program",
      "IBM Industry Certification",
      "AcceleratorX Advanced Learning Track",
      "Exclusive Product Strategy Workshops",
      "Advanced Product Case Simulations",
      "Dedicated Career Support and Mentorship",
    ],
    cta: "Join IBM Program",
    highlighted: true,
  },
  {
    title: "Regular Program",
    badge: null,
    subtitle: "A complete Generative AI course for beginners and working professionals designed to help you build strong foundations in AI tools, ChatGPT, and automation workflows.",
    price: "₹ 39,999 + GST",
    track: "FULL PROGRAM ACCESS",
    features: [
      "Complete Product Management Curriculum (Modules 1-6)",
      "Hands-on Product Case Studies",
      "Build AI Workflows & Automation Systems",
      "Access to Product Tools and Frameworks",
      "Mentorship and Career Guidance",
    ],
    cta: "Enroll in Regular Program",
    highlighted: false,
  },
];

export const FAQS = [
  { q: "What is AcceleratorX, and how is it different from other Generative AI courses in India?", a: "AcceleratorX offers a Generative AI course in India focused on real-world applications, not just theory. Unlike traditional courses, you learn how to build AI workflows, automation systems, and AI-powered solutions using tools like ChatGPT, making you job-ready for real business use cases." },
  { q: "Which is the best Generative AI course in India for working professionals?", a: "The best Generative AI course is one that focuses on practical skills, real AI projects, and career outcomes. AcceleratorX is designed for working professionals who want to transition into AI-driven roles, automation, and AI applications without wasting time on outdated content." },
  { q: "Can I learn Generative AI without coding?", a: "Yes, you can learn Generative AI without coding. This course starts with no-code AI tools, prompt engineering, and automation workflows, making it beginner-friendly and accessible for non-technical professionals." },
  { q: "What career opportunities are available after completing a Generative AI course?", a: "After completing a Generative AI course, you can apply for roles such as: Generative AI Specialist, AI Workflow Automation Specialist, Conversational AI Designer, AI Product Associate, AI Content Systems Builder. These roles are growing rapidly across companies adopting AI tools and automation systems." },
  { q: "How can I switch my career to Generative AI?", a: "To switch into Generative AI, you need hands-on experience, real-world projects, and a strong portfolio. AcceleratorX helps you build AI workflows, automation systems, and practical use cases that prove your skills to employers." },
  { q: "What is the salary of a Generative AI professional in India?", a: "The average salary for Generative AI professionals in India is: Entry-level: ₹8–12 LPA, Mid-level: ₹12–25 LPA, Experienced: ₹25–70 LPA. Professionals skilled in Generative AI, ChatGPT, and automation often earn higher due to increasing demand." },
  { q: "Is this Generative AI course suitable for beginners and non-tech backgrounds?", a: "Yes, this course is designed for beginners, freshers, and non-technical professionals. You don't need coding knowledge to start learning Generative AI, AI tools, and automation workflows." },
  { q: "What tools and technologies will I learn in this Generative AI course?", a: "You will learn tools such as: ChatGPT and Generative AI platforms, AI automation tools and workflow systems, Prompt engineering techniques, Real-world AI applications. These tools help you build AI-powered solutions and automation systems." },
  { q: "Do I get a certificate after completing the Generative AI course?", a: "Yes, you will receive a recognized certification, along with a portfolio of real Generative AI projects and automation workflows that strengthen your job applications." },
  { q: "How long does it take to become job-ready in Generative AI?", a: "Most learners become job-ready within 3 to 6 months, depending on consistency. The course focuses on hands-on learning, AI projects, and practical implementation." },
  { q: "Is Generative AI replacing jobs or creating new opportunities?", a: "Generative AI is creating new opportunities. Professionals who learn AI tools, automation, and AI workflows are seeing better career growth, higher salaries, and more job opportunities." },
  { q: "Why should working professionals learn Generative AI today?", a: "Generative AI is becoming a critical skill across industries. Professionals who understand AI tools, automation, and AI-driven systems are more valuable and future-proof in today's job market." },
  { q: "How do I get started with the Generative AI course at AcceleratorX?", a: "You can get started by booking a free demo session, where you'll understand the course structure, career roadmap, and how to transition into Generative AI roles step by step." },
];

export const FOOTER_COLUMNS = [
  { heading: "COMPANY", links: ["Home", "Product", "Blogs", "Services"] },
  { heading: "HELP", links: ["Customer Support", "Terms & Conditions", "Privacy Policy"] },
  { heading: "RESOURCES", links: ["Free eBooks", "Development Tutorial", "Free course Playlist"] },
];
