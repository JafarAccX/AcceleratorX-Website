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

export const freshersPath = [
    { title: "Learn AI Fundamentals & ChatGPT", desc: "Start with the basics of AI, with no prior technical background.", icon: "/assets/roadmap/mdi_learn-outline.png" },
    { title: "Explore AI Tools & Use Cases", desc: "Understand AI tools, automation platforms, and workflows.", icon: "/assets/roadmap/ant-design_build-outlined.png" },
    { title: "Develop AI Thinking & Problem Solving", desc: "Learn how to think in terms of AI-first solutions.", icon: "/assets/roadmap/mingcute_target-line.png" },
    { title: "Build Real AI Projects", desc: "Work on AI workflows, automation, and real-world use cases.", icon: "/assets/roadmap/ant-design_build-outlined.png" },
    { title: "Become Job-Ready with AI Skills", desc: "Create a strong portfolio and apply for AI-first roles.", icon: "/assets/roadmap/solar_pen-bold-duotone (1).png" }
];

export const switchPath = [
    { title: "Leverage Your Existing Skills", desc: "Learn how to apply AI workflows to your current domain.", icon: "/assets/roadmap/mdi_learn-outline.png" },
    { title: "Learn AI Tools for Real Work", desc: "Master AI tools, automation systems, and workflows.", icon: "/assets/roadmap/ant-design_build-outlined.png" },
    { title: "Build AI Workflows & Systems", desc: "Create AI-powered workflows and automation processes.", icon: "/assets/roadmap/mingcute_target-line.png" },
    { title: "Work on Real Industry Projects", desc: "Build practical AI projects and apply AI in real scenarios.", icon: "/assets/roadmap/ant-design_build-outlined.png" },
    { title: "Transition into AI Roles", desc: "Use your portfolio, and projects to move into AI-driven roles.", icon: "/assets/roadmap/solar_pen-bold-duotone (1).png" }
];

export const regularModules = [
    { id: "01", title: "Introduction to Generative AI & ChatGPT", desc: "Learn the fundamentals of Gen AI and AI tools and understand how they work in practical scenarios." },
    { id: "02", title: "AI Tools & Practical Use Cases", desc: "Explore commonly used AI tools and platforms, and apply them to everyday workflows and business tasks." },
    { id: "03", title: "AI Workflows & Automation Basics", desc: "Understand how to build basic AI workflows and automation systems to improve efficiency and productivity." },
    { id: "04", title: "Hands-On Projects & Applications", desc: "Work on practical AI projects and use cases to apply your learning and build foundational experience." }
];

export const ibmModules = [
    { id: "01", title: "Generative AI Foundations & Business Applications", desc: "Understand the core concepts of Gen AI, and AI systems." },
    { id: "02", title: "AI Tools, Prompt Engineering & Automation", desc: "Master prompt engineering, AI tools, and automation workflows." },
    { id: "03", title: "Building AI Workflows & Real-World Systems", desc: "Design and implement AI-powered workflows, automation systems, and scalable use cases used in modern companies." },
    { id: "04", title: "Capstone Projects & Career Acceleration", desc: "Work on industry-grade AI projects, automation systems, and real-world use cases to build a strong portfolio." },
    { id: "05", title: "AI Agent Building Specialisation Certificate from IBM", desc: "Earn an industry-recognised IBM certification in AI agent building by creating real-world AI agents and automation workflows." }
];

export const CURRICULUM = [
    {
        week: "1",
        topics: ["Foundations of Advanced GenAI Engineering"],
        goal: "Master the underlying architecture and data pipelines required for model training.",
        skills: ["LLM Architecture", "Data Pipelines", "Transformer Basics"]
    },
    {
        week: "2",
        topics: ["Fine-Tuning and Evaluation"],
        goal: "Scale up models using advanced fine-tuning techniques.",
        skills: ["PEFT", "LoRA", "Efficient Serving"]
    },
    // Add more if needed
];

export const TOOLS_LIST = [
    { name: "Python", logo: "/redesign/advance-gen-ai/tools/Python.png", color: "#3776AB" },
    { name: "PyTorch", logo: "/redesign/advance-gen-ai/tools/pytorch.png", color: "#EE4C2C" },
    { name: "CUDA", logo: "/redesign/advance-gen-ai/tools/Cuda.png", color: "#76B900" },
    { name: "Transformers", logo: "/redesign/advance-gen-ai/tools/Transformers.png", color: "#FFD21E" },
    { name: "LangChain", logo: "/redesign/advance-gen-ai/tools/Langchain.png", color: "#1C3C3C" },
    { name: "LangGraph", logo: "/redesign/advance-gen-ai/tools/LangGraph.png", color: "#1C3C3C" },
    { name: "CrewAI", logo: "/redesign/advance-gen-ai/tools/Crewai.png", color: "#FF3E00" },
    { name: "Chroma", logo: "/redesign/advance-gen-ai/tools/Chroma.png", color: "#FFD21E" },
    { name: "FastAPI", logo: "/redesign/advance-gen-ai/tools/Fastapi.png", color: "#05998B" },
    { name: "Docker", logo: "/redesign/advance-gen-ai/tools/Docker.png", color: "#2496ED" },
    { name: "Llama 3", logo: "/redesign/advance-gen-ai/tools/Llama3.png", color: "#0081FB" },
    { name: "Mistral AI", logo: "/redesign/advance-gen-ai/tools/Mistralai.png", color: "#F5D142" },
    { name: "Gemma", logo: "/redesign/advance-gen-ai/tools/Gemma.png", color: "#4285F4" },
    { name: "Ollama", logo: "/redesign/advance-gen-ai/tools/Ollama.png", color: "#FFFFFF" },
    { name: "Weights & Biases", logo: "/redesign/advance-gen-ai/tools/Weights&Biases.png", color: "#FFBE00" },
    { name: "Langfuse", logo: "/redesign/advance-gen-ai/tools/Langfuse.png", color: "#000000" },
    { name: "Gradio", logo: "/redesign/advance-gen-ai/tools/Gradio.png", color: "#FF7C00" },
    { name: "Blip", logo: "/redesign/advance-gen-ai/tools/Blip.png", color: "#FFFFFF" },
    { name: "BGE m3", logo: "/redesign/advance-gen-ai/tools/BGEm3.png", color: "#FFFFFF" },
    { name: "Bitsandbytes", logo: "/redesign/advance-gen-ai/tools/Bitsandbytes.png", color: "#000000" },
    { name: "Clips AI", logo: "/redesign/advance-gen-ai/tools/Clipsai.png", color: "#00FF00" },
    { name: "Datasets", logo: "/redesign/advance-gen-ai/tools/Datasets.png", color: "#FFD21E" },
    { name: "Instructor XL", logo: "/redesign/advance-gen-ai/tools/Instructorxl.png", color: "#FFFFFF" },
    { name: "Peft", logo: "/redesign/advance-gen-ai/tools/Peft.png", color: "#000000" },
    { name: "LoRA", logo: "/redesign/advance-gen-ai/tools/lora.png", color: "#000000" },
    { name: "LLM", logo: "/redesign/advance-gen-ai/tools/Llm.png", color: "#FFFFFF" },
];

export const MENTORS = [
    { 
        name: "Siddharth Sahani", 
        designation: "Principal ML Tech Lead", 
        company: "Appodeal Inc", 
        image: "/assets/mentors/advance-gen-ai/siddharth.png",
        companyLogo: "/assets/mentors/advance-gen-ai/appodeal_logo.png"
    },
    { 
        name: "Ashu Mishra", 
        designation: "Technical Product Manager", 
        company: "Zigram", 
        image: "/assets/mentors/crash/anshu.png",
        companyLogo: "/assets/mentors/zigram.png"
    },
];

export const AGENT_PHASES = [
  { icon: "/assets/skills/Container (2).png", title: "Discovery", description: "Understand AI fundamentals, LLMs, and identify real-world AI use cases.", phase: "PHASE 01" },
  { icon: "/assets/skills/Icon.png", title: "Strategy", description: "Design AI-first solutions and automation strategies.", phase: "PHASE 02" },
  { icon: "/assets/skills/Container (3).png", title: "Design", description: "Build structured AI workflows using prompt engineering and system design.", phase: "PHASE 03" },
  { icon: "/assets/skills/Container (4).png", title: "Build", description: "Create AI agents, automation systems, and real-world applications.", phase: "PHASE 04" },
  { icon: "/assets/skills/Icon (1).png", title: "Analyze", description: "Optimize AI outputs and improve performance using feedback loops.", phase: "PHASE 05" },
  { icon: "/assets/skills/Container (5).png", title: "Grow", description: "Scale AI systems across use cases and deploy advanced automation.", phase: "PHASE 06" },
];

export const CAREER_ROLES = [
    { title: "AI Agent Developer", salary: "₹10L – ₹28L", description: "Design and implement autonomous AI agents using multi-agent frameworks." },
    { title: "AI Workflow Automation Specialist", salary: "₹12L – ₹30L", description: "Engineer scalable automation pipelines and AI-driven business workflows." },
    { title: "Conversational AI Designer", salary: "₹10L – ₹25L", description: "Create sophisticated conversational interfaces and reasoning loops for LLMs." },
    { title: "Generative AI Solutions Specialist", salary: "₹15L – ₹35L", description: "Architect production-ready GenAI solutions and RAG-based architectures." }
];

export const PRICING_PLANS = [
  {
    title: "AcceleratorX + IBM",
    badge: "MOST POPULAR",
    subtitle: "Advanced AI program designed for engineering professionals seeking mastery in agentic systems, RAG architecture, and production-grade AI applications, with IBM certification.",
    price: "₹ 59,999 + GST",
    track: "ADVANCED AGENTIC AI TRACK",
    features: [
      "Everything included in the Regular Program",
      "IBM Industry Certification",
      "Advanced Agentic AI Track",
      "Exclusive Multi-Agent Strategy Workshops",
      "Production-Grade Case Simulations",
      "Dedicated Career Support and Mentorship",
    ],
    cta: "Join IBM Program",
    highlighted: true,
  },
  {
    title: "Regular Program",
    badge: null,
    subtitle: "A complete AI Engineering course for builders and professionals designed to help you build strong foundations in LLM internals, fine-tuning, and RAG systems.",
    price: "₹ 44,999 + GST",
    track: "FULL PROGRAM ACCESS",
    features: [
      "Complete AI Engineering Curriculum (Modules 1-4)",
      "Hands-on AI Agent Projects",
      "Build RAG & Logic Workflows",
      "Access to AI Engineering Tools",
      "Mentorship and Career Guidance",
    ],
    cta: "Enroll in Regular Program",
    highlighted: false,
  },
];

export const FAQS = [
  {
    q: "What is the best Advanced AI course in India for working professionals?",
    a: "The best Advanced AI course in India is one that focuses on real-world applications, AI agent building, and automation workflows. AcceleratorX offers a hands-on Advanced AI course designed for working professionals to build AI systems, automate business processes, and transition into high-paying AI roles without relying on outdated theory."
  },
  {
    q: "What will I learn in an Advanced AI and Generative AI course?",
    a: "In an Advanced AI course, you will learn Generative AI, ChatGPT, prompt engineering, AI agents, and automation workflows. You will also build real-world AI systems, design workflows, and implement AI solutions used in companies for decision-making and productivity."
  },
  {
    q: "Can I learn Generative AI and AI agents without coding?",
    a: "Yes, you can learn Generative AI and AI agents without coding. This course starts with no-code AI tools, prompt engineering, and automation platforms, making it suitable for beginners, non-technical professionals, and freshers."
  },
  {
    q: "What are the career opportunities after completing an Advanced AI course?",
    a: "After completing an Advanced AI course in India, you can apply for roles such as: AI Agent Developer, Generative AI Specialist, AI Workflow Automation Specialist, Conversational AI Designer, AI Product Associate. These roles are in high demand across startups, MNCs, and tech-driven companies."
  },
  {
    q: "What is the salary of an AI or Generative AI professional in India?",
    a: "The average salary for AI professionals in India is: Entry-level: ₹8–12 LPA, Mid-level: ₹12–25 LPA, Experienced: ₹25–70 LPA. Professionals with skills in Generative AI, AI agents, and automation workflows often earn significantly higher due to increasing demand."
  },
  {
    q: "How long does it take to become job-ready in Advanced AI?",
    a: "Most learners become job-ready in Advanced AI within 8 to 12 weeks, depending on consistency and project work. A structured course with real-world AI projects, automation workflows, and portfolio building accelerates career readiness."
  },
  {
    q: "Is this Advanced AI course suitable for beginners and freshers?",
    a: "Yes, this course is designed for beginners, freshers, and working professionals. You don’t need prior coding experience to start learning Generative AI, AI tools, and automation systems."
  },
  {
    q: "What tools and technologies are covered in this AI course?",
    a: "This Advanced AI course covers: ChatGPT and Generative AI tools, AI agent development platforms, Automation tools and workflow systems, Prompt engineering frameworks, Real-world AI applications. These tools help you build scalable AI solutions and automation systems."
  },
  {
    q: "How is this Advanced AI course different from other AI courses in India?",
    a: "Most AI courses focus on theory or coding-heavy concepts. AcceleratorX focuses on practical implementation—building AI agents, automation workflows, and real-world projects that companies actually use. This makes you job-ready faster."
  },
  {
    q: "Can I switch my career to AI after this course?",
    a: "Yes, this course is designed for career switchers. By building real AI projects, automation systems, and a strong portfolio, you can transition into AI-driven roles even without prior experience in tech."
  },
  {
    q: "Do I get a certification after completing the Advanced AI course?",
    a: "Yes, you will receive an industry-recognized certification along with a portfolio of real AI projects, automation workflows, and AI systems that strengthen your job applications."
  },
  {
    q: "Is Generative AI replacing jobs or creating new opportunities?",
    a: "Generative AI is creating new job opportunities. Professionals who understand AI tools, automation, and AI systems are seeing faster career growth, better salaries, and increased demand across industries."
  },
  {
    q: "Why should I learn Advanced AI and Generative AI in 2025?",
    a: "Advanced AI is becoming a core skill across industries. Companies are actively hiring professionals who can build AI agents, automate workflows, and apply AI in business scenarios. Learning AI now makes you future-proof and highly valuable."
  },
  {
    q: "How do I get started with the Advanced AI course at AcceleratorX?",
    a: "You can start by booking a free demo session. This helps you understand the course structure, AI roadmap, career opportunities, and how to transition into AI roles step by step."
  }
];

export const FOOTER_COLUMNS = [
  { heading: "COMPANY", links: ["Home", "Product", "Blogs", "Services"] },
  { heading: "HELP", links: ["Customer Support", "Terms & Conditions", "Privacy Policy"] },
  { heading: "RESOURCES", links: ["Free eBooks", "Development Tutorial", "Free course Playlist"] },
];
