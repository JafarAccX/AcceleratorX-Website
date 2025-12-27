import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Lightbulb, Workflow, Rocket } from "lucide-react";
import { motion } from "framer-motion";
const features = [
  {
    title: "Design and Launch your Project",
    description: "Brainstorm and launch your own product from scratch during every stage of the product lifecycle using real-world tools and insights.",
    image: /* @__PURE__ */ jsx(Lightbulb, { className: "w-8 h-8 text-[#5CB338]" }),
    className: "hover:shadow-[#5CB338]/20"
  },
  {
    title: "BYDP: Transform Ideas into Impact",
    description: "From identifying the problem statement to building a go-to-market strategy, BYDP guides you through a planned journey to build, test, and present an AI product that solves the problems.",
    image: /* @__PURE__ */ jsx(Workflow, { className: "w-8 h-8 text-[#5CB338]" }),
    className: "hover:shadow-[#5CB338]/20"
  },
  {
    title: "Product Management Experience",
    description: "Gain practical AI Product Management skills by managing your product idea from concept to execution, with full guidance, templates, and resources.",
    image: /* @__PURE__ */ jsx(Rocket, { className: "w-8 h-8 text-[#5CB338]" }),
    className: "hover:shadow-[#5CB338]/20"
  },
  {
    title: "Skills for Real-World Impact",
    description: "Go through strategies and frameworks that level up to products of any scale or complexity, preparing you for the demands of a real-world product management career.",
    image: /* @__PURE__ */ jsx(Rocket, { className: "w-8 h-8 text-[#5CB338]" }),
    className: "hover:shadow-[#5CB338]/20"
  }
];
const sections = {
  primaryFocus: {
    title: "Primary Focus",
    content: [
      { title: "AI PM Toolbox & Templates", description: "Ready-to-use resources for your projects" },
      { title: "Mini Project Challenges", description: "Apply skills through practical product management exercises" },
      { title: "Expert Assignment Feedback", description: "Improve with professional guidance" },
      { title: "Build Your Dream Product (BYDP)", description: "Hands-on product creation" },
      { title: "AI Product Management Specialization", description: "Learn AI-driven strategies" },
      { title: "Growth Product Management Specialization", description: "Master scaling and growth" },
      { title: "Mock Interviews", description: "Practice with real-world scenarios" },
      { title: "AcceleratorX Job Priority Access", description: "Fast-track your career opportunities" },
      { title: "Personalized Skill Report", description: "Track progress and strengths" },
      { title: "Exclusive PM Workshops & Events", description: "Learn from industry leaders" },
      { title: "Bi-Weekly Career Review Calls", description: "Continuous mentorship and guidance" },
      { title: "Chance to Win Industry Internship", description: "Gain real-world experience" },
      { title: "Business Pitch & Investor Workshop", description: "Present ideas to investors" },
      { title: "Product Showcase on Wall", description: "Share your projects with peers" },
      { title: "1:1 Mentorship On-Demand", description: "Get doubts cleared anytime" }
    ]
  },
  skillsDeveloped: {
    title: "Skills Developed",
    content: [
      { title: "Product Strategy", description: "Develop your priorities, roadmap, and vision." },
      { title: "Product Sense", description: "Use your intuition to make wise choices about products." },
      { title: "Stakeholder Communication", description: "Effectively influence and cooperate" },
      { title: "Agile Management", description: "Effective and flexible project management" },
      { title: "User research", description: "needs and problems of customers" },
      { title: "Market research", description: "Identify rivals and prospects" },
      { title: "Data analysis", description: "Turning data into useful insights" },
      { title: "Product analytics", description: "growth and performance" },
      { title: "UI/UX", description: "Usability and design for optimal effect" },
      { title: "Technical Knowledge", description: "Recognize how products are made using technology" },
      { title: "Go To Market", description: "Plan effective product introductions" },
      { title: "Product Launch", description: "Carry out launches that have practical implications" },
      { title: "Development Product Management", description: "Promote the uptake and expansion of products" },
      { title: "AI Product Management", description: "Improve product strategy by utilising AI" }
    ]
  },
  whoCanTake: {
    title: "Who can take this AI Product Management program?",
    content: [
      "Project Managers",
      "Product Manager",
      "Project Leads",
      "Technical Managers",
      "Software Developers",
      "Marketing Professionals",
      "Sales Professionals",
      "UI/UX Designers",
      "Analysts",
      "Consultants",
      "Entrepreneurs",
      "Business Development (BD) Managers",
      "Others interested in transitioning to the Product Management domain"
    ]
  },
  eligibility: {
    title: "Eligibility",
    content: [
      "Bachelor's degree in any discipline",
      "Final year students",
      "Open to all nationalities",
      "No need for any prior product experience"
    ]
  },
  designLaunch: {
    title: "Design and Launch your Project",
    content: [
      "Brainstorm and launch your own product from scratch during every stage of the product lifecycle using real-world tools and insights.",
      "BYDP: Transform Ideas into Impact",
      "From identifying the problem statement to building a go-to-market strategy, BYDP guides you through a planned journey to build, test, and present an AI product that solves the problems.",
      "Product Management Experience",
      "Gain practical AI Product Management skills by managing your product idea from concept to execution, with full guidance, templates, and resources.",
      "Skills for Real-World Impact",
      "Go through strategies and frameworks that level up to products of any scale or complexity, preparing you for the demands of a real-world product management career."
    ]
  }
};
function ProgramHighlightsEIE() {
  const [activeSection, setActiveSection] = useState("primaryFocus");
  const renderDesignLaunchSection = () => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      className: "relative p-6 rounded-3xl border border-[#5CB338]/20 bg-gradient-to-b from-[#5CB338]/10 to-gray-900/20 backdrop-blur-3xl shadow-2xl",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden rounded-3xl", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-[#5CB338]/10 to-transparent shimmer" }) }),
        /* @__PURE__ */ jsx("div", { className: "relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `group relative p-3 bg-gray-900 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-[#5CB338]/50 transition-all duration-300 flex flex-col h-full ${feature.className}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "mb-3", children: feature.image }),
              /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-white group-hover:text-[#5CB338] transition-colors", children: feature.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors", children: feature.description })
            ]
          },
          index
        )) })
      ]
    }
  ) });
  const renderPrimaryFocus = () => /* @__PURE__ */ jsxs("div", { className: "bg-[#0F0F0F] rounded-xl p-8 border border-white/10", children: [
    /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold mb-8", children: sections.primaryFocus.title }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4", children: sections.primaryFocus.content.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-[#5CB338]" }),
        /* @__PURE__ */ jsx("span", { className: "text-white font-medium hover:text-[#5CB338] transition-colors", children: item.title })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 ml-5", children: item.description })
    ] }, index)) })
  ] });
  const renderSkillsDeveloped = () => /* @__PURE__ */ jsxs("div", { className: "bg-[#0F0F0F] rounded-xl p-8 border border-white/10", children: [
    /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold mb-8", children: sections.skillsDeveloped.title }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4", children: sections.skillsDeveloped.content.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-[#5CB338]" }),
        /* @__PURE__ */ jsx("span", { className: "text-white font-medium hover:text-[#5CB338] transition-colors", children: item.title })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 ml-5", children: item.description })
    ] }, index)) })
  ] });
  const renderWhoCanTake = () => /* @__PURE__ */ jsxs("div", { className: "bg-[#0F0F0F] rounded-xl p-8 border border-white/10", children: [
    /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold mb-8", children: sections.whoCanTake.title }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4", children: sections.whoCanTake.content.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-[#5CB338]" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-300 hover:text-white transition-colors", children: item })
    ] }, index)) })
  ] });
  const renderEligibility = () => /* @__PURE__ */ jsxs("div", { className: "bg-[#0F0F0F] rounded-xl p-8 border border-white/10", children: [
    /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold mb-8", children: sections.eligibility.title }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4", children: sections.eligibility.content.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-[#5CB338]" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-300 hover:text-white transition-colors", children: item })
    ] }, index)) })
  ] });
  return /* @__PURE__ */ jsx("section", { id: activeSection, className: "py-24 bg-gray-700/10 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsxs("h3", { className: "text-4xl md:text-5xl font-bold ", children: [
      "Why choose the AcceleratorX ",
      /* @__PURE__ */ jsx("span", { className: "text-[#5CB338]", children: "AI Product Management program" }),
      "?"
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsx("div", { className: "sticky top-8 space-y-3", children: Object.entries(sections).map(([key, section]) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setActiveSection(key),
          className: `w-full p-4 rounded-lg border text-left transition ${activeSection === key ? "border-[#5CB338]/20 bg-[#5CB338]/5 text-[#5CB338]" : "border-white/10 text-gray-400 hover:bg-white/5"}`,
          children: section.title
        },
        key
      )) }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3", children: [
        activeSection === "primaryFocus" && renderPrimaryFocus(),
        activeSection === "skillsDeveloped" && renderSkillsDeveloped(),
        activeSection === "whoCanTake" && renderWhoCanTake(),
        activeSection === "eligibility" && renderEligibility(),
        activeSection === "designLaunch" && renderDesignLaunchSection()
      ] })
    ] })
  ] }) });
}
export {
  ProgramHighlightsEIE as default
};
