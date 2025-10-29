const tools = [
  {
    name: "Figma",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    description: "UI/UX Design & Prototyping",
    category: "UI/UX"
  },
  {
    name: "Jira",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    description: "Project Management & Tracking",
    category: "Collaboration"
  },
  {
    name: "Slack",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    description: "Team Communication",
    category: "Communication"
  },
  {
    name: "Google Analytics",
    image: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg",
    description: "Data Analytics & Tracking",
    category: "Analytics"
  },
  {
    name: "Notion",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.webp",
    description: "Documentation & Knowledge Base",
    category: "Documentation"
  },
  {
    name: "Miro",
    image: "/assets/logo/Miro.webp",
    description: "Visual Collaboration",
    category: "Collaboration"
  },
  {
    name: "Asana",
    image: "/assets/logo/Asana.webp",
    description: "Visual Collaboration",
    category: "Collaboration"
  },
  {
    name: "Github",
    image: "/assets/logo/github.webp",
    description: "Visual Collaboration",
    category: "Technical"
  },
  {
    name: "MixPanel",
    image: "/assets/logo/Mixpanel.webp",
    description: "Visual Collaboration",
    category: "Analytics"
  },
  {
    name: "Amplitude",
    image: "/assets/logo/Amplitude.webp",
    description: "Visual Collaboration",
    category: "Analytics"
  },
  {
    name: "Postman",
    image: "/assets/logo/Postman.webp",
    description: "Visual Collaboration",
    category: "Technical"
  },
  {
    name: "Whimsical",
    image: "/assets/logo/Whimsical.webp",
    description: "Visual Collaboration",
    category: "UI/UX"
  },
  {
    name: "MySQL",
    image: "/assets/logo/Mysql.webp",
    description: "Visual Collaboration",
    category: "Analytics"
  },
  {
    name: "User testing",
    image: "/assets/logo/UserTesting.webp",
    description: "Visual Collaboration",
    category: "Feedback Collection"
  },
  {
    name: "Optimizely",
    image: "/assets/logo/optimizely.webp",
    description: "Visual Collaboration",
    category: "A/B Testing"
  }
];
const skills = [
  {
    name: "Product Strategy",
    icon: "🎯",
    level: "Advanced",
    description: "Define and execute product vision and roadmap"
  },
  {
    name: "User Research",
    icon: "🔍",
    level: "Expert",
    description: "Conduct user interviews and analyze feedback"
  },
  {
    name: "Data Analysis",
    icon: "📊",
    level: "Intermediate",
    description: "Make data-driven decisions using metrics"
  },
  {
    name: "Agile Management",
    icon: "🔄",
    level: "Advanced",
    description: "Lead sprints and manage backlogs"
  },
  {
    name: "Stakeholder Communication",
    icon: "🤝",
    level: "Expert",
    description: "Effectively communicate with all parties"
  },
  {
    name: "Market Research",
    icon: "📈",
    level: "Advanced",
    description: "Analyze market trends and competition"
  },
  {
    name: "UX Design",
    icon: "🎨",
    level: "Intermediate",
    description: "Create user-centered design solutions"
  },
  {
    name: "Technical Knowledge",
    icon: "💻",
    level: "Intermediate",
    description: "Understand development processes"
  },
  {
    name: "Growth",
    icon: "📈",
    level: "Advanced",
    description: "Drive user acquisition and product growth"
  },
  {
    name: "AI Product Management",
    icon: "🤖",
    level: "Expert",
    description: "Develop and manage AI-powered products"
  },
  {
    name: "Product Sense",
    icon: "🧠",
    level: "Expert",
    description: "Make intuitive decisions about product direction"
  },
  {
    name: "UI/UX",
    icon: "✨",
    level: "Advanced",
    description: "Design intuitive and engaging user experiences"
  },
  {
    name: "Market Research",
    icon: "🔎",
    level: "Advanced",
    description: "Analyze market trends and competitive landscape"
  },
  {
    name: "Go To Market",
    icon: "🚀",
    level: "Expert",
    description: "Plan and execute successful market entry strategies"
  },
  {
    name: "Product Launch",
    icon: "🎯",
    level: "Expert",
    description: "Successfully launch and scale new products"
  },
  {
    name: "Product Analytics",
    icon: "📊",
    level: "Expert",
    description: "Track and analyze product metrics for data-driven decisions"
  }
];
const mentors = [
  {
    name: "Swati Sinha",
    role: "Senior PM at Walmart",
    experience: "10+ years",
    image: "/assets/mentor/swati.webp",
    linkedin: "https://www.linkedin.com/in/swati-sinha-471644125",
    transitions: "Over 100+"
  },
  // {
  //   name: "Subhasis Chandra",
  //   role: "Senior PM at Publicis Sapient",
  //   experience: "10+ Years",
  //   image: "/assets/mentor/subhasis.webp",
  //   linkedin: "https://www.linkedin.com/in/subhasis-chandra",
  //   transitions: "Over 500+",
  // },
  {
    name: "Ravi Ahlawat",
    role: "Senior PM at Paytm",
    experience: "5 years",
    image: "/assets/mentor/ravi.webp",
    linkedin: "https://www.linkedin.com/in/raviahlawat09/",
    transitions: "Over 350+"
  },
  {
    name: "Ruchir Rana",
    role: "PM at AcceleratorX",
    experience: "3 years",
    image: "/assets/mentor/ruchir.webp",
    linkedin: "https://www.linkedin.com/in/ruchir-rana007",
    transitions: "Over 100+"
  }
];
const dataAnalyticsmodules = [
  {
    title: "Industry Certification",
    description: "Earn AI-powered certifications recognised by 2200+ companies globally. Designed to prove your expertise in the AI-powered data analytics domain and boost your employability.",
    image: "/assets/program/security.webp"
  },
  {
    title: "AI Tools & Tech Training",
    description: "Gain hands-on experience with the latest AI tools and analytics platforms used by top data analysts in product-based companies to analyse, visualise, and automate data.",
    image: "/assets/program/learning.webp"
  },
  {
    title: "Practical AI Learning",
    description: "Learn by working on live capstone projects from day one, and apply AI-driven analytics to solve real business and product challenges.",
    image: "/assets/program/file-case.webp"
  },
  {
    title: "Interview readiness",
    description: "Get expert guidance from industry leaders from top companies (Delloite, Walmart, Paytm and many more) to prepare strategically and ace every interview with confidence.",
    image: "/assets/program/mentorship.webp"
  },
  {
    title: "Mock interview feedback",
    description: "Practice through real-time mock interviews and receive personalised feedback from experts having 10+ years of experience in the AI Data Analytics field to sharpen your communication and problem-solving skills.",
    image: "/assets/program/meeting.webp"
  },
  {
    title: "Exclusive Job Access",
    description: "Unlock priority access to more than 3527+ hiring partners, 4+ hiring channels, exclusive job openings, and placement opportunities to launch your career in data analytics.",
    image: "/assets/program/job-portal.webp"
  },
  {
    title: "Professional Network",
    description: "Join a invite-only community of 2500+ AI, data and product professionals who connect, collaborate, buil and grow together.",
    image: "/assets/program/networking.webp"
  },
  {
    title: "Career Mentorship Calls",
    description: "Receive personalised career guidance and actionable insights from experienced industry mentors in bi-weekly sessions.",
    image: "/assets/program/state.webp"
  },
  {
    title: "Industry Internship Opportunities",
    description: "Get a chance to win exclusive data analytics internships, plus lifetime access to updated learning resources to keep advancing your career in AI Data Analytics.",
    image: "/assets/program/exclusive.webp"
  }
];
const dataAnalyticsTools = [
  {
    name: "Tableau",
    image: "/assets/dataTools/tableu.webp"
  },
  {
    name: "Power BI",
    image: "/assets/dataTools/powerbi.webp"
  },
  {
    name: "Python",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg"
  },
  {
    name: "Jupyter Notebook",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg"
  },
  {
    name: "Google Analytics",
    image: "/assets/dataTools/google-analytics.webp"
  },
  {
    name: "Looker",
    image: "/assets/dataTools/looker.webp"
  },
  {
    name: "Matplotlib",
    image: "/assets/dataTools/matplotlib.webp"
  },
  {
    name: "Keras",
    image: "/assets/dataTools/keras.webp"
  },
  {
    name: "Numpy",
    image: "/assets/dataTools/numpy.webp"
  },
  {
    name: "Pandas",
    image: "/assets/dataTools/pandas.webp"
  },
  {
    name: "R",
    image: "/assets/dataTools/r.webp"
  },
  {
    name: "Scikit Learn",
    image: "/assets/dataTools/scikit-learn-logo.webp"
  },
  {
    name: "Tensorflow",
    image: "/assets/dataTools/Tensorflow_logo.webp"
  },
  {
    name: "Github",
    image: "/assets/dataTools/github.webp"
  },
  {
    name: "Mixpanel",
    image: "/assets/logo/Mixpanel.webp"
  }
];
const dataAnalyticsSkills = [
  "Data Cleaning & Preparation",
  "Data Visualization",
  "Statistical Analysis",
  "Product Analytics",
  "Data Aggregation and Summarization",
  "Data Querying with SQL",
  "Aggregations and Joins in SQL",
  "Advanced SQL Techniques",
  "Descriptive Statistics",
  "Hypothesis Testing",
  "Feature Engineering",
  "Exploratory Data Analysis (EDA)",
  "Supervised Machine Learning Basics",
  "Decision Trees and Model Tuning",
  "AI-Powered Dashboards",
  "Funnel and User Journey Analysis",
  "Time Series Forecasting",
  "Customer Segmentation",
  "Sentiment Analysis and NLP",
  "Data analytics with AI automation",
  "Automate data workflows",
  "Data engineering"
];
export {
  dataAnalyticsSkills as a,
  dataAnalyticsTools as b,
  dataAnalyticsmodules as d,
  mentors as m,
  skills as s,
  tools as t
};
