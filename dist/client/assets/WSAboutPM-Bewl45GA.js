import { e as createLucideIcon, j as jsxRuntimeExports, r as reactExports } from "./main-CDOtXgRK.js";
import { m as motion } from "./proxy-VHxN6sQO.js";
import { A as ArrowRight } from "./arrow-right-DWucD8MN.js";
import { A as Award } from "./award-BLJnr9Ao.js";
import { C as Check } from "./check-Cg6dUnWT.js";
import { L as Lightbulb } from "./lightbulb-DhGDjW7Q.js";
import { R as Rocket } from "./rocket-CBTTiCqr.js";
import { H as HelpCircle } from "./help-circle-D5jNENrG.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AlertTriangle = createLucideIcon("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Plug = createLucideIcon("Plug", [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M9 8V2", key: "14iosj" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z", key: "osxo6l" }]
]);
const InstructorSection = () => {
  const instructorDetails = {
    name: "Anjali",
    title: "Product Strategist & Mentor"
  };
  const scrollToForm = () => {
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 px-6 bg-gradient-to-b ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.6, ease: "easeOut" },
          className: "relative group col-span-2 ",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "    rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl  pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h2,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: 0.1 },
                  className: "text-3xl md:text-4xl font-bold text-white mb-8",
                  children: [
                    "Meet ",
                    instructorDetails.name
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col lg:flex-row gap-8 items-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: 0.3 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white", children: instructorDetails.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block text-gray-500", children: "|" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-medium text-lg", children: instructorDetails.title })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-lg leading-relaxed", children: "Anjali has guided startups and teams in turning rough concepts into scalable products. With deep expertise in strategy, product design, and execution, she helps you cut through noise and focus on what really matters—shipping your product." })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: 0.4 },
                    className: "block lg:hidden pt-4",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.button,
                      {
                        onClick: scrollToForm,
                        whileHover: { scale: 1.02 },
                        whileTap: { scale: 0.98 },
                        className: "group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300",
                        children: [
                          "Reserve Your Spot",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
                        ]
                      }
                    )
                  }
                )
              ] }) })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
          className: "relative group ",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-900/30 to-violet-900/30 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5 text-blue-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white", children: "Official Certificate" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100 mb-4 text-lg", children: "All attendees who complete the bootcamp will receive an official certificate of participation." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-300 text-sm", children: [
                "💡 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
                " You must attend the full session to qualify."
              ] }) })
            ] })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          y: [0, -8, 0],
          opacity: [0.2, 0.4, 0.2]
        },
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        },
        className: "absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm"
      }
    )
  ] });
};
const WhoShouldAttendSection = () => {
  const targetAudience = [
    "Founders & Product Managers",
    "Designers, Analysts & Tech Leads",
    "Hackers & Indie Builders",
    "Anyone curious about turning ideas into products"
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.6, ease: "easeOut" },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-4", children: "Who Is This For" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg md:text-xl max-w-2xl mx-auto", children: "This bootcamp is for anyone who wants to build and launch real products." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: containerVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-50px" },
          className: "grid sm:grid-cols-2 lg:grid-cols-2 gap-6",
          children: targetAudience.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: itemVariants,
              whileHover: {
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" }
              },
              className: "relative group",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full   backdrop-blur-xl border border-gray-700/50 p-2 rounded-2xl   hover:border-gray-600/50 transition-all duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex gap-4 items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      whileHover: { scale: 1.1 },
                      transition: { duration: 0.2 },
                      className: "flex-shrink-0 w-10 h-10 rounded-xl   flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-blue-400" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300", children: item })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" })
              ] })
            },
            index
          ))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          y: [0, -10, 0],
          opacity: [0.2, 0.4, 0.2]
        },
        transition: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        },
        className: "absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          y: [0, 12, 0],
          opacity: [0.3, 0.5, 0.3]
        },
        transition: {
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        },
        className: "absolute bottom-1/3 right-1/5 w-1 h-1 bg-violet-400/20 rounded-full blur-sm"
      }
    )
  ] });
};
const aiTools = [
  {
    name: "Airtable",
    logo: "/assets/n8n/airtable.webp",
    description: "Flexible database and spreadsheet for teams and automation workflows."
  },
  {
    name: "ClickUp",
    logo: "/assets/n8n/clickup.webp",
    description: "All-in-one productivity platform for project and task management."
  },
  {
    name: "Cursor",
    logo: "/assets/n8n/Cursor.webp",
    description: "AI-powered code editor built for pair programming with GPT."
  },
  {
    name: "Gmail",
    logo: "/assets/n8n/gmail.webp",
    description: "Widely-used email platform, great for integrating notification systems."
  },
  {
    name: "HubSpot",
    logo: "/assets/n8n/hubspot.webp",
    description: "Powerful CRM for marketing, sales, and customer service automation."
  },
  {
    name: "Lovable",
    logo: "/assets/n8n/Lovable.webp",
    description: "Tool unknown — please update description accordingly."
  },
  {
    name: "Notion",
    logo: "/assets/n8n/notion.webp",
    description: "Workspace for notes, docs, wikis, and collaboration with AI support."
  },
  {
    name: "OpenAI",
    logo: "/assets/n8n/openai.webp",
    description: "AI research lab powering GPT models for language and reasoning tasks."
  },
  {
    name: "Replit",
    logo: "/assets/n8n/replit.webp",
    description: "Collaborative browser-based coding platform with AI coding tools."
  },
  {
    name: "Google Sheets",
    logo: "/assets/n8n/sheets.webp",
    description: "Online spreadsheet tool for data manipulation and reporting."
  },
  {
    name: "Slack",
    logo: "/assets/n8n/slack.webp",
    description: "Team messaging platform with bots and integrations for workflows."
  },
  {
    name: "Stripe",
    logo: "/assets/n8n/stripe.webp",
    description: "Payment platform for processing online transactions securely."
  },
  {
    name: "Trello",
    logo: "/assets/n8n/trello.webp",
    description: "Visual task and project management using boards and cards."
  },
  {
    name: "Windsurf",
    logo: "/assets/n8n/windsurf.webp",
    description: "Tool unknown — please update description accordingly."
  }
];
function WSTools() {
  const [hovered, setHovered] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 py-20 bg-gradient-to-b from-[#0a0f1c] to-[#0b0a12] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-96 h-96   rounded-full blur-3xl z-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-[32rem] h-[32rem]   rounded-full blur-3xl z-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-4 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          className: "text-4xl md:text-5xl font-bold",
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: "Tools & Frameworks Covered"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          className: "mt-4 text-gray-400 max-w-xl mx-auto text-base md:text-lg",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2, duration: 0.6 },
          children: "Get hands-on with tools like"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 px-4 max-w-6xl mx-auto", children: aiTools.map((tool, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "group relative flex flex-col items-center text-center transition-transform duration-300",
        whileHover: { scale: 1.05 },
        onMouseEnter: () => setHovered(tool.name),
        onMouseLeave: () => setHovered(null),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl p-2 backdrop-blur-md shadow-lg transition-all hover:border-white/20 w-full max-w-[60px] h-[60px] flex flex-col items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tool.logo, alt: tool.name, className: " object-fill mb-2" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm font-medium", children: tool.name }),
          hovered === tool.name && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 w-56 bg-white text-black p-3 rounded-lg shadow-xl text-sm z-20 transition-all", children: tool.description })
        ]
      },
      tool.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 pointer-events-none", children: [...Array(70)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute rounded-full bg-blue-500/20",
        style: {
          width: `${Math.random() * 8 + 2}px`,
          height: `${Math.random() * 8 + 2}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${Math.random() * 10 + 10}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      ` })
  ] });
}
const WSAboutPM = () => {
  const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };
  const steps = [
    {
      id: 1,
      title: "Product Thinking for Ideas",
      description: "Why most ideas fail and how to make yours market‑ready.",
      icon: Lightbulb,
      reverse: false
    },
    {
      id: 2,
      title: "From Idea to MVP",
      description: "Validate, prototype, and build in weeks (not years).",
      icon: Rocket,
      reverse: true
    },
    {
      id: 3,
      title: "Real Use-Cases & Frameworks",
      description: "Practical methods that work across industries.",
      icon: Plug,
      reverse: false
    },
    {
      id: 4,
      title: "Avoiding Common Traps",
      description: "Learn what NOT to do so you don’t waste time or money.",
      icon: AlertTriangle,
      reverse: false
    },
    {
      id: 5,
      title: "Ask-Me-Anything",
      description: "Live Q&A to get your questions answered on the spot.",
      icon: HelpCircle,
      reverse: false
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0A0F1D] py-16 ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(WSTools, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 px-6 bg-gray-900 overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/20 via-violet-500/10 to-transparent rounded-bl-full pointer-events-none blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/20 via-indigo-500/10 to-transparent rounded-tr-full pointer-events-none blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/30" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6, ease: "easeOut" },
            className: "text-center mb-16",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-4", children: "What You'll Learn" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: containerVariants,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            className: "space-y-16 md:space-y-24",
            children: steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  variants: itemVariants,
                  className: `flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? "md:justify-start" : "md:justify-end"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-lg ${isEven ? "" : "md:flex-row-reverse"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex-1 text-center ${isEven ? "md:text-left" : "md:text-right"}`, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.h3,
                            {
                              initial: { opacity: 0, x: isEven ? -20 : 20 },
                              whileInView: { opacity: 1, x: 0 },
                              viewport: { once: true },
                              transition: { duration: 0.5, delay: 0.2 },
                              className: "text-2xl md:text-3xl font-bold text-white mb-4",
                              children: step.title
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.p,
                            {
                              initial: { opacity: 0, x: isEven ? -20 : 20 },
                              whileInView: { opacity: 1, x: 0 },
                              viewport: { once: true },
                              transition: { duration: 0.5, delay: 0.3 },
                              className: "text-gray-300 text-lg md:text-xl leading-relaxed",
                              children: step.description
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.05 }, transition: { duration: 0.2 }, className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                          index < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 md:h-24 bg-gradient-to-b from-blue-500 to-transparent opacity-60" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-20 h-20 md:w-24 md:h-24 bg-gray-800/80 backdrop-blur-sm border border-blue-500/30 rounded-2xl flex items-center justify-center relative", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(step.icon, { className: "w-10 h-10 md:w-12 md:h-12 text-blue-400" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" })
                          ] })
                        ] }) })
                      ]
                    }
                  )
                },
                step.id
              );
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: {
            y: [0, -8, 0],
            opacity: [0.2, 0.4, 0.2]
          },
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          },
          className: "absolute top-1/4 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full blur-sm"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: {
            y: [0, 12, 0],
            opacity: [0.3, 0.5, 0.3]
          },
          transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          },
          className: "absolute bottom-1/3 left-1/5 w-2 h-2 bg-blue-300/30 rounded-full blur-sm"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InstructorSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhoShouldAttendSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " flex items-center justify-center  py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: scrollToForm,
        className: "group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full text-white font-medium shadow-lg shadow-indigo-500/25   transition-all duration-300",
        children: [
          "Book Your Free Slot",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/50 to-violet-500/50 blur-xl opacity-0  transition-opacity duration-300" })
        ]
      }
    ) })
  ] });
};
export {
  WSAboutPM as default
};
