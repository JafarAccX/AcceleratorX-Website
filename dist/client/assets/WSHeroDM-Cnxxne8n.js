import { r as reactExports, j as jsxRuntimeExports } from "./main-EhB7M4T3.js";
import { W as WorkshopProvider } from "./registration-BKQr7i7b.js";
import { W as WSFormFree } from "./WSFormFree-07lKOrct.js";
import "./metaPixel-ClzrpHuU.js";
const WSHeroDM = () => {
  reactExports.useEffect(() => {
    document.body.style.overscrollBehavior = "none";
    document.body.style.overflow = "overlay";
  }, []);
  const scrollToForm = () => {
    const form = document.getElementById("workshop-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "relative min-h-screen overflow-x-hidden bg-[#0A0F1C] will-change-transform transform translate-z-0",
      style: {
        contain: "layout",
        willChange: "scroll-position",
        scrollBehavior: "smooth"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 pt-32 md:pt-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 font-semibold text-sm", children: "Live Masterclass" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold leading-tight text-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Automate Lead Generation & Enrichment Without Writing Code" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg lg:text-xl leading-relaxed", children: "— Save Time. Work Smart. Close More." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 pt-6", children: [
            { label: "Duration", value: "2 Hours", icon: "⏱️" },
            { label: "Date", value: "24 June", icon: "📅" },
            { label: "Time", value: "08:30 PM", icon: "🕐" },
            { label: "Level", value: "All Levels", icon: "🎯" }
          ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-[#0A0F1C] border border-white/10 rounded-lg p-4 transform transition-transform duration-200 hover:scale-105",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl mb-2", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold", children: item.value })
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block lg:hidden pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: scrollToForm,
              className: "w-full px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200",
              children: "Reserve Your Spot"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "workshop-registration-form", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#0A0F1C]/90 backdrop-blur-lg rounded-xl p-6 border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkshopProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(WSFormFree, {}) }) }) })
      ] }) }) })
    }
  );
};
export {
  WSHeroDM as default
};
