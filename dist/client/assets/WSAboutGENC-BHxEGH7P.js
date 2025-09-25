import { j as jsxRuntimeExports } from "./main-Bu4yalNQ.js";
import { m as motion } from "./proxy-BfxRfs7x.js";
import { B as Brain } from "./brain-BpLzX04c.js";
import { T as Target } from "./target-gFUpM69y.js";
const WSAboutGENC = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-[#000] py-2 overflow-hidden mt-10  ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-overlay blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-green-900/20 rounded-full mix-blend-overlay blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3  gap-4 items-center justify-center ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/langchain.webp", alt: "AI Workshop", className: "  rounded-2xl shadow-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "w-full  space-y-8 col-span-2",
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg px-4 py-2 mb-4",
                whileHover: { scale: 1.02 },
                transition: { duration: 0.2 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.span,
                  {
                    className: "text-blue-400 font-medium flex items-center gap-2",
                    animate: { opacity: [0.8, 1, 0.8] },
                    transition: { duration: 2, repeat: Infinity },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.span,
                        {
                          animate: { rotate: [0, -10, 10, 0] },
                          transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 3
                          },
                          children: "⚡"
                        }
                      ),
                      "Live Workshop"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h2,
              {
                className: "text-3xl font-bold text-white mb-6",
                whileInView: { opacity: [0, 1], y: [20, 0] },
                transition: { duration: 0.5 },
                children: "Live Workshop – Highlights"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1  gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "bg-gradient-to-r bg-[#111111] from-blue-500/5 to-transparent p-6 rounded-xl border border-blue-900 ",
                  whileHover: {
                    scale: 1.02,
                    borderColor: "rgba(59, 130, 246, 0.3)"
                  },
                  transition: { duration: 0.2 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "flex items-center gap-3 mb-4", whileHover: { gap: "0.875rem" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          className: "p-2 bg-blue-500/10 rounded-lg",
                          whileHover: { rotate: [0, -5, 5, 0] },
                          transition: { duration: 0.3 },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5 text-blue-400" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white", children: "What You’ll Do:" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: [
                      "Understand what AI Agents are and why they matter.",
                      "Build your first AI Agent with Lyzr (step by step).",
                      "Create another Agent using LangChain, CrewAI / n8n.",
                      "Teach your Agents to connect with real data and respond smarter.",
                      "Deploy your Agent and test it live.",
                      "Take away templates, resources, and tools to keep building."
                    ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.li,
                      {
                        className: "flex items-center gap-2 text-gray-300",
                        whileHover: { x: 5 },
                        transition: { duration: 0.2 },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "text-xs bg-blue-500/20 p-1 rounded", whileHover: { scale: 1.1 }, children: String(index + 1).padStart(2, "0") }),
                          item
                        ]
                      },
                      index
                    )) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "bg-gradient-to-r bg-[#111111] rounded-2xl shadow-lg from-green-500/5 to-transparent p-6   border border-green-900/20",
                  whileHover: {
                    scale: 1.02,
                    borderColor: "rgba(34, 197, 94, 0.3)"
                  },
                  transition: { duration: 0.2 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "flex items-center gap-3 mb-4", whileHover: { gap: "0.875rem" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          className: "p-2 bg-green-500/10 rounded-lg",
                          whileHover: { rotate: [0, -5, 5, 0] },
                          transition: { duration: 0.3 },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-green-400" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white", children: "What You’ll Learn:" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: [
                      "How AI Agents work and where you can use them.",
                      "Step-by-step methods to build working AI Agents without confusion.",
                      "Workflows top AI builders use to make smarter apps.",
                      "How to deploy without advanced coding.",
                      "Real-world examples – customer support bots, research tools, personal assistants."
                    ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.li,
                      {
                        className: "flex items-center gap-2 text-gray-300",
                        whileHover: { x: 5 },
                        transition: { duration: 0.2 },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "text-xs bg-green-500/20 p-1 rounded", whileHover: { scale: 1.1 }, children: String(index + 1).padStart(2, "0") }),
                          item
                        ]
                      },
                      index
                    )) })
                  ]
                }
              )
            ] }) })
          ] })
        }
      )
    ] }) })
  ] });
};
export {
  WSAboutGENC as default
};
