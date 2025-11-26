import { r as reactExports, j as jsxRuntimeExports, k as motion } from "./main-DIFEnr0T.js";
import { c as FaCertificate } from "./index-DTKtLZ_K.js";
import { B as Brain } from "./brain-Dcuzde0I.js";
import { T as Target } from "./target-BBz5KRfO.js";
const WSAboutPMB = () => {
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
  const toolsRef = reactExports.useRef(null);
  const allTools = [
    { name: "Google Antigravity", img: "https://media.licdn.com/dms/image/v2/D560BAQG5wmEaqHfmDg/company-logo_200_200/B56ZqUSJh0I4AM-/0/1763424377586/google_antigravity_logo?e=2147483647&v=beta&t=09EGMp77uIgS77oquLNRli_4mMEV8oGvXklIXLBP6YM" },
    { name: "Claude Coding", img: "https://media.licdn.com/dms/image/v2/D4E0BAQFko-zWIZk_pw/company-logo_200_200/B4EZhiRWKvHgAI-/0/1753995371543/claude_logo?e=2147483647&v=beta&t=CVNmFKyWig0Uo78oAr3II6KVLu_o0aXPtnt4S6XgOr8" },
    { name: "Cursor", img: "https://media.licdn.com/dms/image/v2/D560BAQHKh6nk4UdeBA/company-logo_200_200/B56ZnbGvJ6KUAI-/0/1760317600747/cursorai_logo?e=2147483647&v=beta&t=lhx_A8xPe1zjjwpgRRirVgUykLbsFR-wRbW2s1ykSgk" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#050A14] py-12 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:w-3/5 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#0A1020] rounded-lg shadow-md border border-blue-900/20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-3 py-1 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 text-sm font-medium", children: "One Tool. Complete Development Workflow." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-blue-500/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-blue-500/10 rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 text-blue-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white text-lg", children: "Workshop Highlights" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
              "Understand how one platform can handle coding, testing, and deployment.",
              "Watch real examples of building and shipping apps end-to-end.",
              "Learn how to automate testing and reduce bugs instantly.",
              "Deploy your first working application during the workshop."
            ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-gray-300 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-blue-500/20 p-1 rounded-sm", children: index + 1 }),
              item
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#111827] p-4 rounded-md border border-purple-500/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-purple-500/10 rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-purple-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white text-lg", children: "What You'll Learn" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
              "How to write, test, and deploy code without switching tools.",
              "How to build faster with integrated environments.",
              "How to remove errors early using smart testing workflows.",
              "How to deploy stable builds in minutes."
            ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-gray-300 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-purple-500/20 p-1 rounded-sm", children: index + 1 }),
              item
            ] }, index)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: scrollToForm,
            className: "w-full mt-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:shadow-md transition-shadow duration-300",
            children: "Register Now"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: toolsRef, className: "bg-[#0A1020] rounded-lg shadow-md p-5 border border-blue-900/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-white mb-4", children: "Tools You'll Use" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "flex gap-3 px-2",
            animate: {
              x: [0, -80 * allTools.length]
            },
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: allTools.length * 2,
                ease: "linear"
              }
            },
            children: [...allTools, ...allTools].map((tool, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex-shrink-0 w-16 h-16 bg-[#111827] rounded-md p-2 flex flex-col items-center justify-center gap-1 border border-gray-800/30",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 flex items-center justify-center bg-white rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tool.img, alt: tool.name, className: "w-12 h-12 object-contain" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-medium text-gray-300 text-center line-clamp-1", children: tool.name })
                ]
              },
              index
            ))
          }
        ) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-2/5 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-blue-900/60 to-purple-900/60 rounded-lg overflow-hidden shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaCertificate, { className: "w-6 h-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Certification Included" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-200 mb-3 text-sm", children: "Finish the workshop and earn a professional certificate proving your ability to build, test, and deploy applications using one unified workflow." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-black/20 p-3 rounded-md text-xs text-gray-300 border border-white/10", children: "⚠️ You must attend the full session." })
    ] }) }) })
  ] }) }) });
};
export {
  WSAboutPMB as default
};
