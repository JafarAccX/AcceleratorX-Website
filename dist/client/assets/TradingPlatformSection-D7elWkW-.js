import { j as jsxRuntimeExports, k as motion } from "./main-CvuwUR0U.js";
import { b as FiDollarSign, c as FiKey, d as FiCpu } from "./index-Dc4B-Ivi.js";
const WSAboutDASecond = () => {
  const features = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FiDollarSign, { className: "text-white text-xl" }),
      title: "Limited Spots. High Impact.",
      description: "We keep it small and focused so you get real interaction, not just another crowded webinar.",
      highlight: true
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FiKey, { className: "text-white text-xl" }),
      title: "Real Projects. Real Skills.",
      description: "You’ll build a usable AI agent during the session — not just watch someone else do it.",
      highlight: true
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FiCpu, { className: "text-white text-xl" }),
      title: "Learn AI by Building Real Projects.",
      description: "A hands-on course designed for anyone who wants to master practical AI skills through real-world applications.",
      highlight: true
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto my-24 max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3", children: features.map((f, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          whileHover: { scale: 1.02 },
          className: `group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-[6px] transition-all duration-300 hover:border-white/10 ${f.highlight ? "bg-gradient-to-tr from-gray-600/30 to-transparent" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10", children: [
              f.icon,
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-full h-0.5 w-6 -translate-y-1/2 bg-white/20 group-hover:bg-white/40" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-semibold text-white", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-300", children: f.description })
          ]
        },
        idx
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/workshop-blobs/3d-delivery-robot-working.webp", alt: "left-decor", className: "w-32 opacity-60" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/workshop-blobs/3d-delivery-robot-working.webp", alt: "right-decor", className: "w-32 opacity-60" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " flex items-center justify-center pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-md hover:border-purple-400 transition",
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.4, duration: 0.5 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "text-sm font-semibold text-white",
            onClick: () => {
              const form = document.getElementById("workshop-registration-form");
              console.log("WSAbout: Form element found:", form);
              if (form) {
                form.scrollIntoView({
                  behavior: "smooth",
                  block: "center"
                });
              }
            },
            children: "Claim Your Free Spot ↗"
          }
        )
      }
    ) })
  ] });
};
const TradingPlatformSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative   py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 right-1/4 w-96 h-96 rounded-full gradient-blob-1 opacity-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/3 left-1/6 w-80 h-80 rounded-full gradient-blob-2 opacity-15" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto px-6 ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center justify-center mb-16 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white leading-tight", children: "Why Attend This Workshop?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 text-lg leading-relaxed max-w-lg", children: '"Dashboards are the face of data. PowerBI is the accelerator."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 text-lg leading-relaxed max-w-lg", children: "Whether you're a student, analyst, or working professional, this session will help you:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-slate-300 text-lg leading-relaxed max-w-lg list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Create professional-looking dashboards." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Build interactive reports that engage users." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Share data insights with stakeholders effectively." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/Data-Analytics.webp",
            alt: "Data Analytics Illustration",
            className: "w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-slate-700/50"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WSAboutDASecond, {})
    ] })
  ] });
};
export {
  TradingPlatformSection as default
};
