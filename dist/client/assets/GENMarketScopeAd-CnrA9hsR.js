import { r as reactExports, j as jsxRuntimeExports, B as Briefcase } from "./main-DIFEnr0T.js";
import EnrollmentModal from "./EnrollmentModal-CGXZR3j2.js";
import { T as TrendingUp } from "./trending-up-6UIEPGma.js";
import { T as Target } from "./target-BBz5KRfO.js";
import { B as BarChart } from "./bar-chart-BZYXtDv4.js";
import "./enrollmentApi-GN7J7nzz.js";
import "./metaPixel-DADRfF0c.js";
const GENMarketScopeAd = () => {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const marketStats = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-emerald-500" }),
      value: "$2,760 Billion ",
      label: "Market size by 2032.",
      description: "The global AI market is projected to reach $1.3 trillion by 2032."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-5 h-5 text-blue-500" }),
      value: "97M",
      label: "New Jobs by 2026",
      description: " AI will create 97 million jobs across industries by 2026"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-purple-500" }),
      value: "40%",
      label: "Productivity Boost",
      description: "Company reports up to 40% increase in productivity with AI"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart, { className: "w-5 h-5 text-rose-500" }),
      value: "35%",
      label: "CAGR Growth",
      description: "The AI industry is growing at the rate of 35% annually."
    }
  ];
  const opportunities = [
    {
      title: "AI consultant& strategist",
      description: "Assist with Business integrations with AI solutions.",
      salary: "₹12L - 25L"
    },
    {
      title: "Prompt Engineers",
      description: "Develop prompt models for AI Applications",
      salary: "₹10L - 16L"
    },
    {
      title: "AI Application Developers",
      description: "Design an AI-powered Application for tools",
      salary: "₹11L - 20L"
    },
    {
      title: "AI Automation Specialists",
      description: "Create an automated workflow using AI",
      salary: "₹8L - 15L"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-16 bg-black overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]",
        style: { opacity: 0.3 }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-blue-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 text-sm font-medium", children: "Market Scope" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "The Developing Generative AI Industry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg max-w-3xl mx-auto", children: "In the era of AI Agent and AI automation, discover opportunities across the rapidly developing AI market." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: marketStats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-white/10", children: stat.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-white", children: stat.value })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-gray-300 mb-2", children: stat.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: stat.description })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Growth Driven Career Opportunity in Generative AI & AI Agent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: opportunities.map((job, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors", children: job.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 mb-3", children: job.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full whitespace-nowrap", children: job.salary })
            ] })
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-lg mb-6", children: "Don't miss out on the AI revolution. Start your journey today!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleModalOpen,
            className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 mr-2" }),
              "Start Your Career in AI"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnrollmentModal, { isOpen: isModalOpen, onClose: handleModalClose })
  ] });
};
export {
  GENMarketScopeAd as default
};
