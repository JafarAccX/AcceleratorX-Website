import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Lightbulb, Workflow, Rocket } from "lucide-react";
import { motion } from "framer-motion";
const features = [
  {
    title: "Build Your Dream Product",
    description: "Empower yourself to ideate, design, and launch a product from scratch, mastering every stage of the product lifecycle with real-world tools and insights.",
    image: /* @__PURE__ */ jsx(Lightbulb, { className: "w-8 h-8 text-[#5CB338]" }),
    className: "hover:shadow-[#5CB338]/20"
  },
  {
    title: "BYDP: Transforming Ideas into Market-Ready Products",
    description: "From user research to go-to-market strategy, BYDP guides you through a structured journey to build, test, and present a product that solves real problems.",
    image: /* @__PURE__ */ jsx(Workflow, { className: "w-8 h-8 text-[#5CB338]" }),
    className: "hover:shadow-[#5CB338]/20"
  },
  {
    title: "Hands-On Product Building Experience",
    description: "Gain real-time skills in product management by building and managing your own product idea from concept to execution, with full guidance and resources.",
    image: /* @__PURE__ */ jsx(Rocket, { className: "w-8 h-8 text-[#5CB338]" }),
    className: "hover:shadow-[#5CB338]/20"
  },
  {
    title: "Scalable Product Management Skills",
    description: "Learn scalable strategies and frameworks that equip you to handle products of any size and complexity, preparing you for real-world industry demands.",
    image: /* @__PURE__ */ jsx(Rocket, { className: "w-8 h-8 text-[#5CB338]" }),
    className: "hover:shadow-[#5CB338]/20"
  }
];
const sections = {
  highlights: {
    title: "Key Highlights",
    content: [
      "PM Toolbox & Templates",
      "Assignment Feedback",
      "Build Your Dream Product (BYDP)",
      "Mock Interviews",
      "AI Product Management Specialization",
      "Growth Product Management Specialization",
      "AcceleratorX Job Priority Access",
      "Personalized Skill Report",
      "Project-Based Mini Challenges",
      "Exclusive PM Workshops & Events",
      "Bi-Weekly Career Review Calls",
      "Chance to win Industry Internship",
      "Business Pitch & Investor Workshop",
      "Product Showcase on Wall of Product",
      "Ask Doubt (1:1 with Mentor on demand)"
    ]
  },
  skills: {
    title: "Top Skills You Will Master",
    content: [
      "Product Strategy",
      "User Research",
      "Data Analysis",
      "Agile Management",
      "Stakeholder Communication",
      "Market Research",
      "UX Design",
      "Technical Knowledge",
      "Growth Product Management",
      "AI Product Management",
      "Product Sense",
      "UI/UX",
      "Go To Market",
      "Product Launch",
      "Product Analytics"
    ]
  },
  audience: {
    title: "Who Is This Programme For?",
    content: [
      "Project Managers",
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
    title: "Minimum Eligibility",
    content: [
      "Bachelor's degree in any discipline",
      "Final year students",
      "Open to all nationalities",
      "Free of any prior product experience"
    ]
  },
  bydp: {
    title: "Build Your Dream Product",
    content: [
      "Transform innovative ideas into reality",
      "Hands-on product development experience",
      "Expert mentorship and guidance",
      "Real-world project portfolio",
      "Industry-standard methodologies",
      "Launch-ready product strategy"
    ]
  }
};
function ProgramHighlightsEIE() {
  const [activeSection, setActiveSection] = useState("highlights");
  const renderBYDPSection = () => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
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
  return /* @__PURE__ */ jsx("section", { id: activeSection, className: "py-24 bg-gray-700/10 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsxs("h3", { className: "text-4xl md:text-5xl font-bold text-[#5CB338]", children: [
      "What does this",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-[#5CB338]", children: "course have to offer?" })
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
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: activeSection === "bydp" ? renderBYDPSection() : /* @__PURE__ */ jsxs("div", { className: "bg-[#0F0F0F] rounded-xl p-8 border border-white/10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold mb-8", children: sections[activeSection].title }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4", children: sections[activeSection].content.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-[#5CB338]" }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-300 hover:text-white transition-colors", children: item })
        ] }, index)) })
      ] }) })
    ] })
  ] }) });
}
export {
  ProgramHighlightsEIE as default
};
