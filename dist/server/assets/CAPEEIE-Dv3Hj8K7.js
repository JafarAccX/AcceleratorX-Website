import { jsxs, jsx } from "react/jsx-runtime";
import { Lightbulb, BarChart, Calculator, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
const capeSteps = [
  {
    icon: /* @__PURE__ */ jsx(Lightbulb, { className: "h-6 w-6 text-[#96E072]" }),
    title: "Data Fundamentals",
    description: "Organise raw data into actionable insights with the help of AI-assisted data processing.",
    duration: ""
  },
  {
    icon: /* @__PURE__ */ jsx(BarChart, { className: "h-6 w-6 text-[#96E072]" }),
    title: "Visual Storytelling",
    description: "Use AI tools to turn complex data into compelling, interactive visuals.",
    duration: ""
  },
  {
    icon: /* @__PURE__ */ jsx(Calculator, { className: "h-6 w-6 text-[#96E072]" }),
    title: "Analytical Skills",
    description: "Leverage AI-powered statistical techniques to uncover patterns and predict outcomes.",
    duration: ""
  },
  {
    icon: /* @__PURE__ */ jsx(ClipboardCheck, { className: "h-6 w-6 text-[#96E072]" }),
    title: "CAP Project",
    description: "Apply everything you've learnt in an AI-integrated custom project that proves your expertise.",
    duration: ""
  }
];
function CAPEEIE() {
  return /* @__PURE__ */ jsxs("div", { className: "relative py-16 overflow-hidden bg-white", id: "bydp", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-1/4 w-[600px] h-[600px] animate-pulse", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#96E072]/10 rounded-full filter blur-[120px] transform rotate-45" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#96E072]/15 to-transparent rounded-full filter blur-[90px] animate-pulse" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 right-1/4 w-[600px] h-[600px] animate-pulse delay-1000", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#96E072]/10 rounded-full filter blur-[120px] transform -rotate-45" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-l from-[#96E072]/15 to-transparent rounded-full filter blur-[90px] animate-pulse" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-4 z-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "relative inline-block mb-4",
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { delay: 0.2 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-[#1A5D1A]/60 to-[#1A5D1A]/30 rounded-full blur opacity-75" }),
                  /* @__PURE__ */ jsx("span", { className: "relative text-[#1A5D1A] text-lg font-semibold px-6 py-2 rounded-full border border-[#1A5D1A]/20", children: "Your Learning Journey" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative mt-8", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-[#1A5D1A]/20 to-transparent blur-lg opacity-50" }),
              /* @__PURE__ */ jsx("h2", { className: "relative text-5xl font-bold text-[#1A5D1A] text-transparent bg-clip-text pb-3", children: "Build Your CAP Portfolio" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-xl text-black max-w-2xl mx-auto backdrop-blur-sm", children: "A Portfolio That Speaks for You – Build Skills That Stand Out" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12", children: capeSteps.map((step, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.2 },
          className: "group relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-[#96E072]/30 to-[#96E072]/10 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" }),
            /* @__PURE__ */ jsxs("div", { className: "relative p-6 rounded-3xl bg-gradient-to-b from-[#0A0F1E] to-[#141B2E] border border-[#96E072]/20 group-hover:border-[#96E072]/40 transition-all duration-500 backdrop-blur-sm transform hover:-translate-y-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative mb-4 transform-gpu transition-transform duration-500 group-hover:scale-110", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-[#96E072]/10 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-500" }),
                /* @__PURE__ */ jsx("div", { className: "relative bg-gradient-to-b from-[#96E072]/20 to-[#96E072]/5 p-4 rounded-full", children: /* @__PURE__ */ jsx("div", { className: "relative z-10", children: step.icon }) })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 bg-gradient-to-r from-[#96E072] to-[#96E072]/90 text-transparent bg-clip-text", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-2", children: step.description }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-[#96E072] font-medium", children: step.duration })
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-[#96E072]/30 to-[#96E072]/10 rounded-3xl blur opacity-50" }),
            /* @__PURE__ */ jsxs("div", { className: "relative p-12 rounded-3xl bg-gradient-to-b from-[#0A0F1E] to-[#141B2E] border border-[#96E072]/20 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-center bg-gradient-to-r from-[#96E072] to-[#96E072]/90 text-transparent bg-clip-text pb-2", children: "What You'll Achieve" }) }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                {
                  title: "Portfolio",
                  description: "A real product in your portfolio"
                },
                {
                  title: "Experience",
                  description: "Hands-on product development experience"
                },
                {
                  title: "Network",
                  description: "Connect with industry experts"
                }
              ].map((achievement, index) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "group relative text-center",
                  whileHover: { scale: 1.05 },
                  transition: { duration: 0.3 },
                  children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-[#96E072]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold bg-gradient-to-r from-[#96E072] to-[#96E072]/90 text-transparent bg-clip-text mb-4 pb-1", children: achievement.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: achievement.description })
                    ] })
                  ] })
                },
                index
              )) })
            ] })
          ]
        }
      )
    ] })
  ] });
}
export {
  CAPEEIE as default
};
