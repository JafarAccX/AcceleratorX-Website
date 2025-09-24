import { jsxs, jsx } from "react/jsx-runtime";
import { Loader } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import EnrollmentModal from "./EnrollmentModal-CSR6VAAb.js";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "@tanstack/react-query";
import "react-dom";
import "react-icons/pi";
import "framer-motion";
import "react-hot-toast";
import "./enrollmentApi-DmeHaJMK.js";
import "./metaPixel-D4Z7npuX.js";
const AIDMHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const { setSelectedCourse } = useCourseContext();
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsDownload(false);
  };
  const handleModalSubmit = () => {
  };
  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    setIsModalOpen(true);
    setIsDownload(false);
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen bg-black overflow-hidden flex items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/backgrounds/bfdmi.webp",
          alt: "AI Digital Marketing Background",
          className: "w-full h-full object-cover opacity-40"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-indigo-500/15 to-blue-500/15 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4", children: "Nano-Degree in AI-Powered Digital Marketing" }),
      /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-semibold text-blue-300 mb-6", children: "Become the Marketer Every Company Wants in 2025" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-4 mb-8 flex-wrap", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium border border-blue-400/30", children: "16 weeks" }),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium border border-blue-400/30", children: "100% live" }),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium border border-blue-400/30", children: "Job assistance" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-8", children: "Recognised by India's top recruiters and agencies" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleEnrollClick,
            className: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg shadow-blue-500/25",
            children: "Reserve My Seat"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleEnrollClick,
            className: "border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10 font-bold py-3 px-8 rounded-lg transition duration-300",
            children: "Next Cohort Starts: Jan 2025"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      EnrollmentModal,
      {
        isOpen: isModalOpen,
        onClose: handleModalClose,
        onSubmit: handleModalSubmit
      }
    )
  ] });
};
const AIDMChallenges = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 px-4 ", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "In 2025, Marketing Is Broken Without AI." }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300", children: "Here's Why:" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
        "Most of the marketing tasks are often repetitive, slow, and prone to errors.",
        "Teams lose hours on low-impact work (copy, A/B setups, manual reports, scripts, etc.).",
        "Companies now prefer AI-first marketers who can automate, optimise, and deliver measurable ROI faster."
      ].map((challenge, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300",
          children: /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: challenge })
        },
        index
      )) })
    ] })
  ] });
};
const AIDMSolution = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 px-4  my-20", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4", children: "A High-End AI Marketing Solution that enables Freelance Success, Career Growth and Business Scale" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
        "Executive-level training + hands-on AI labs",
        "Recruiter-ready live capstone projects aligned with real hiring needs",
        "Tool-first learning: n8n, GA4, Meta Ads, Google Ads, Stable Diffusion, Runway, Apollo.io, Mailchimp and many more."
      ].map((solution, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300",
          children: /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: solution })
        },
        index
      )) })
    ] })
  ] });
};
const AIDMRoadmap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedCourse } = useCourseContext();
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalSubmit = () => {
  };
  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    setIsModalOpen(true);
  };
  const months = [
    {
      title: "Month 1 — Foundations & AI Content",
      description: "Funnels, personas, copy frameworks, AI visuals, GA4 basics"
    },
    {
      title: "Month 2 — Performance Marketing & Analytics",
      description: "Google & Meta Ads, social strategy, A/B testing, CRO"
    },
    {
      title: "Month 3 — Automation & B2B Growth (n8n focus)",
      description: "n8n workflows, email drips, lead enrichment, CRM integration"
    },
    {
      title: "Month 4 — Full-Funnel Integration & Capstone",
      description: "B2B outreach, heatmaps, full-funnel automation, capstone demo day"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 px-4 my-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/backgrounds/bg-bar.webp",
          alt: "AI Digital Marketing Background",
          className: "w-full h-full object-cover opacity-40"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "A Journey from Scratch to becoming an AI-First Marketer" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: months.map((month, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-indigo-500/50 transition-colors duration-300",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-blue-400 mb-2", children: month.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: month.description })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleEnrollClick,
          className: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg shadow-blue-500/25",
          children: "Download Full Curriculum"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(
      EnrollmentModal,
      {
        isOpen: isModalOpen,
        onClose: handleModalClose,
        onSubmit: handleModalSubmit
      }
    )
  ] });
};
const AIDMTools = () => {
  const toolCategories = [
    {
      category: "Content & Copy",
      tools: "ChatGPT, Claude.ai, Copy.ai, Jasper, Grammarly, Notion AI"
    },
    {
      category: "Visuals & Media",
      tools: "Canva, SDXL, Ideogram, Leonardo.ai, Runway, Pika Labs, Veo3, Nano Banana"
    },
    {
      category: "Ads & Growth",
      tools: "Google Ads Sandbox, Meta Ads Manager, AdCreative.ai, Modash, Mesa.ai"
    },
    {
      category: "Analytics & CRO",
      tools: "GA4, Microsoft Clarity, HotJar, GrowthBook"
    },
    {
      category: "Automation & CRM",
      tools: "n8n, Make.com, HubSpot, Mailchimp, Clay, Apollo.io"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 px-4 bg-black", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4", children: "The AI Stack top Recruiters and Founders Want You to Know" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: toolCategories.map((category, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-colors duration-300",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-cyan-400 mb-2", children: category.category }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: category.tools })
          ]
        },
        index
      )) })
    ] })
  ] });
};
const AIDMCareerOutcomes = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 px-4 ", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Where This Nano-Degree Takes You: Roles, Skills & ROI" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl text-blue-400 mb-4", children: "Get Hired" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "AI Marketing Specialist, Campaign Manager, Marketing Automation Specialist, Growth Consultant" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl text-blue-400 mb-4", children: "Unlock AI Skills" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "AI-first campaign design, automation, CRO, B2B outreach, analytics" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl text-blue-400 mb-4", children: "ROI" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Portfolio-ready capstone projects that demonstrate measurable impact to recruiters and clients" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("button", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg shadow-blue-500/25", children: "Register Now!" }) })
    ] })
  ] });
};
const AIDMMentors = () => {
  const mentors = [
    {
      name: "Rajesh Kumar",
      title: "Marketing Director at TechCorp",
      bio: "10+ years in digital marketing with expertise in AI automation and growth strategies.",
      credential: "Helped scale 50+ businesses"
    },
    {
      name: "Priya Sharma",
      title: "AI Marketing Consultant",
      bio: "Specialized in AI-powered content creation and marketing automation workflows.",
      credential: "Trained 1000+ marketers"
    },
    {
      name: "Arjun Patel",
      title: "Growth Hacking Expert",
      bio: "Focus on data-driven marketing strategies and AI optimization techniques.",
      credential: "Generated $10M+ in revenue"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 px-4 bg-black", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4", children: "Learn Directly from Marketing Leaders with 10+ Years of Experience" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-8", children: mentors.map((mentor, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300 text-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-blue-400/30", children: /* @__PURE__ */ jsx("span", { className: "text-blue-400 text-2xl font-bold", children: mentor.name.split(" ").map((n) => n[0]).join("") }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-white", children: mentor.name }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-400 mb-2", children: mentor.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-2", children: mentor.bio }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: mentor.credential })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("button", { className: "border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10 font-bold py-3 px-8 rounded-lg transition duration-300", children: "See Full Mentor Bios" }) })
    ] })
  ] });
};
const AIDMCertification = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Earn a Verified Degree trusted by more than 2500+ companies and agencies." }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300", children: "Showcase results of AI in Marketing That Speak Louder Than Words" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-blue-600/20 to-indigo-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/30", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-blue-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-blue-400 mb-2", children: "Digital Certificate" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Verified badge + unique verification URL" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-blue-600/20 to-indigo-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/30", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-blue-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-blue-400 mb-2", children: "AI Capstone Projects" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Restricted to active cohort participants" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-blue-600/20 to-indigo-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/30", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-blue-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-blue-400 mb-2", children: "Industry Recognition" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Trusted by 2500+ companies and agencies" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx("img", { src: "/backgrounds/grapbg-.png", alt: "Digital Marketing Graph", className: "object-fill w-full h-full" }) })
      ] })
    ] })
  ] });
};
const AIDMPricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedCourse } = useCourseContext();
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalSubmit = () => {
  };
  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    setIsModalOpen(true);
  };
  const pricingOptions = [
    {
      title: "Early-bird",
      price: "₹29,999",
      description: "full program",
      highlight: true
    },
    {
      title: "Standard",
      price: "₹39,999",
      description: "full program",
      highlight: false
    },
    {
      title: "Instalments",
      price: "3 × ₹13,999/month",
      description: "(no-cost EMI)",
      highlight: false
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 px-4 bg-black", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4", children: "This is Your High-ROS (Return on Skills) that Pays Back in Multiples" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-8", children: pricingOptions.map((option, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border ${option.highlight ? "border-blue-500 relative shadow-lg shadow-blue-500/25" : "border-gray-700/50 hover:border-blue-500/50"} transition-colors duration-300`,
          children: [
            option.highlight && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium", children: "Most Popular" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl text-white mb-2", children: option.title }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-blue-400", children: option.price }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-400 ml-2", children: option.description })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleEnrollClick,
                className: `w-full py-3 rounded-lg font-bold transition duration-300 ${option.highlight ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25" : "border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10"}`,
                children: option.highlight ? "Lock Early-Bird Executive Spot" : "Enrol Now"
              }
            )
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50", children: /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: '"Master hands-on AI labs, capstone, and automation flows and save 40–60% time and increase efficiency."' }) })
    ] }),
    /* @__PURE__ */ jsx(
      EnrollmentModal,
      {
        isOpen: isModalOpen,
        onClose: handleModalClose,
        onSubmit: handleModalSubmit
      }
    )
  ] });
};
const AIDMFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "Do I need coding skills?",
      answer: "No, this is a low-code / no-code AI Marketing program, designed for beginners, marketers, career switchers and founders."
    },
    {
      question: "Will the AI Marketing sessions be recorded?",
      answer: "Yes, you will get sessions recordings, AI Marketing labs and ready to use templates to practice anytime."
    },
    {
      question: "Will I get placement support or career support in the AI Marketing certification?",
      answer: "Yes, you'll build a capstone portfolio in AI-powered digital marketing, receive mentor reviews, and get selective industry introductions"
    },
    {
      question: "What if i miss a live AI Marketing class?",
      answer: "No worries, you can always watch the recording, complete the lab submission, and also join weekly mentor office hours."
    },
    {
      question: "What's the refund policy for the AI Marketing program?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with the program quality. Contact our support team for assistance."
    }
  ];
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 px-4  my-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/backgrounds/dm.webp",
          alt: "Digital Marketing Background",
          className: "w-full h-full object-fill opacity-30"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: `"Still Have Questions? We've Got Answers."` }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "border border-gray-700/50 rounded-lg overflow-hidden bg-gray-800/30 backdrop-blur-sm",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "w-full text-left p-4 bg-gray-800/50 hover:bg-gray-700/50 transition duration-300 flex justify-between items-center",
                onClick: () => toggleFAQ(index),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: faq.question }),
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: `w-5 h-5 text-blue-400 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`,
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
                    }
                  )
                ]
              }
            ),
            activeIndex === index && /* @__PURE__ */ jsx("div", { className: "p-4 bg-gray-800/30", children: /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: faq.answer }) })
          ]
        },
        index
      )) })
    ] })
  ] });
};
const AIDMFinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedCourse } = useCourseContext();
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalSubmit = () => {
  };
  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 px-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto text-center relative z-10", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: '"Your Next Job, Client, or Growth Opportunity Starts Here — Reserve Your Seat Today"' }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 opacity-90", children: "Get instant access to syllabus, tool checklist, and early-bird executive pricing." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleEnrollClick,
          className: "bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl",
          children: "Enroll now"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      EnrollmentModal,
      {
        isOpen: isModalOpen,
        onClose: handleModalClose,
        onSubmit: handleModalSubmit
      }
    )
  ] });
};
const AIDMEntry = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  useEffect(() => {
    setSelectedCourse("AI Digital Marketing");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-black", children: /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx(Loader, {}), children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "AI-Powered Digital Marketing Nano-Degree | AcceleratorX",
        description: "Become the marketer every company wants in 2025. Master AI tools, automation, and growth strategies in our 16-week program with job assistance.",
        ogTitle: "AI-Powered Digital Marketing Nano-Degree | AcceleratorX",
        ogDescription: "16-week AI marketing program with live training, automation tools, and career support. Join 2500+ alumni network."
      }
    ),
    /* @__PURE__ */ jsx(AIDMHero, {}),
    /* @__PURE__ */ jsx(AIDMChallenges, {}),
    /* @__PURE__ */ jsx(AIDMSolution, {}),
    /* @__PURE__ */ jsx(AIDMRoadmap, {}),
    /* @__PURE__ */ jsx(AIDMTools, {}),
    /* @__PURE__ */ jsx(AIDMCareerOutcomes, {}),
    /* @__PURE__ */ jsx(AIDMMentors, {}),
    /* @__PURE__ */ jsx(AIDMCertification, {}),
    /* @__PURE__ */ jsx(AIDMPricing, {}),
    /* @__PURE__ */ jsx(AIDMFAQ, {}),
    /* @__PURE__ */ jsx(AIDMFinalCTA, {})
  ] }) });
};
export {
  AIDMEntry as default
};
