import { j as jsxRuntimeExports, k as motion } from "./main-B8okaWNI.js";
const WSAboutGEN = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-[#000] py-2 overflow-hidden mt-10  ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " p-4 flex items-center justify-center text-center mb-10 md:mb-20 text-blue-400 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold tracking-wider text-xl md:text-3xl", children: "Bonus: Get our ready-to-use templates & shortcuts" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-overlay blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-green-900/20 rounded-full mix-blend-overlay blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "w-full space-y-8",
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: " ", ...fadeInUp, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
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
                children: "Make.com vs n8n"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "bg-gradient-to-r bg-[#111111] from-blue-500/5 to-transparent p-6 rounded-xl border border-blue-900",
                  whileHover: {
                    scale: 1.02,
                    borderColor: "rgba(59, 130, 246, 0.3)"
                  },
                  transition: { duration: 0.2 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "flex flex-col items-start gap-3 mb-4", whileHover: { gap: "0.875rem" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 flex items-center justify-center bg-white rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/make.webp", alt: "automation platform Make.com for no-code workflows", className: "w-12 h-12 object-contain" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white", children: "Make.com" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: [
                      "No code. Drag & drop UI",
                      "Super fast – Start automating in minutes",
                      "Marketers, Founders, SMBs",
                      "1000+ apps pre-built",
                      "Free + Affordable paid plans"
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
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "flex flex-col items-start gap-3 mb-4", whileHover: { gap: "0.875rem" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 flex items-center justify-center bg-white rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: "/assets/genAITools/n8n-seeklogo.webp",
                          alt: "automation platform n8n for low-code integrations",
                          className: "w-12 h-12 object-scale-down"
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white", children: "n8n" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: [
                      "Low-code. Needs some technical setup",
                      "Requires hosting or tech configuration",
                      "Developers, Tech-Savvy Automators",
                      "Fewer native apps, but highly customizable",
                      "Free (self-hosted), Paid cloud version"
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
          ] }) })
        }
      )
    ] }) })
  ] });
};
export {
  WSAboutGEN as default
};
