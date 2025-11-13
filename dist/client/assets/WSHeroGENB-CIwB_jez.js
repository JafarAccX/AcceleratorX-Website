import { j as jsxRuntimeExports } from "./main-apVAGIEz.js";
import { W as WSFormFree } from "./WSFormFree-DW53gOMa.js";
import { W as WorkshopProvider } from "./registration-B2XZdQZA.js";
import { d as FaClock, e as FaCalendarAlt, f as FaUserGraduate } from "./index-Bw6WrLsp.js";
import "./metaPixel-WRohloNB.js";
import "./workshopApi-BbvYWYfT.js";
const WSHeroGENB = () => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-gradient-to-b from-[#050A14] via-[#0A0F1F] to-[#050A14]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 left-10 w-64 h-64 bg-green-600/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 w-full bg-black/30 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-3 flex justify-between items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36 md:w-44", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/companylogo-new.webp", alt: "company logo - professional certificate in product management online", className: "w-full h-auto" }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-12 md:py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:w-1/2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 font-medium text-sm", children: " No Code. No Complexity." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-blue-100", children: "Automate Your Marketing with AI in Just 90 Minutes" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 max-w-xl", children: "Discover how top marketers are saving hours and scaling results with automation. In this live workshop, learn how to automate campaigns, reports, and workflows — without coding or tech skills. Make your marketing work while you sleep." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-wrap items-center gap-3 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-yellow-400 text-sm font-medium", children: "Learn Automation for Free – No Experience Needed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block sm:hidden animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: scrollToForm,
              className: "px-3 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300",
              children: "Learn Automation for Free – No Experience Needed"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-4 mt-6", children: [
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaClock, { className: "text-emerald-400 mb-1" }), label: "Duration", value: "2 Hours" },
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaCalendarAlt, { className: "text-indigo-400 mb-1" }), label: "Date", value: "Nov 9th" },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaUserGraduate, { className: "text-cyan-400 mb-1" }),
            label: "time",
            value: "11:00 AM"
          },
          { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaUserGraduate, { className: "text-cyan-400 mb-1" }), label: "Level", value: "All Levels" }
        ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group bg-gradient-to-br from-[#0A1A2A]/80 to-[#061625]/60 backdrop-blur-xl rounded-lg p-3 border border-emerald-500/10 hover:border-indigo-400/30 transition-all duration-300 flex flex-col items-center hover:translate-y-[-2px] hover:shadow-lg",
            children: [
              item.icon,
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold group-hover:text-cyan-300 transition-colors", children: item.value })
            ]
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-5/12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-xl blur-md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-[#111827] p-5 rounded-xl shadow-xl border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkshopProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "workshop-registration-form", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WSFormFree, {}) }) }) })
      ] }) })
    ] }) })
  ] });
};
export {
  WSHeroGENB as default
};
