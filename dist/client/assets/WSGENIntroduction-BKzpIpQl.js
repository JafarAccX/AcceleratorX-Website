import { j as jsxRuntimeExports } from "./main-DeWmku3x.js";
import { B as Brain } from "./brain-DyNt3IqD.js";
const WSGENIntroductionC = () => {
  const stats = [
    {
      value: "70%",
      label: "Auto-create content"
    },
    {
      value: "75%",
      label: "Schedule & post it"
    },
    {
      value: "No Coding",
      label: "Capture leads instantly"
    },
    {
      value: "No Coding",
      label: "Enrich them with data"
    }
  ];
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-8 bg-black min-h-screen flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]",
          style: { opacity: 0.3 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:8rem_8rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]",
          style: { opacity: 0.2 }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 text-blue-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-blue-400 font-medium", children: "Build This in the Webinar" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl text-white md:text-5xl font-bold mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "What if your social media could generate leads while you sleep?" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg mb-12 max-w-3xl mx-auto", children: "In this session, we’ll help you set up a complete automation system using Make.com to:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12", children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg md:text-xl font-semibold text-white mb-1", children: stat.label }) }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: scrollToForm,
          className: "block w-full mt-4 px-6 py-3 max-w-screen-sm bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25",
          children: "Register Now"
        }
      ) })
    ] }) })
  ] });
};
export {
  WSGENIntroductionC as default
};
