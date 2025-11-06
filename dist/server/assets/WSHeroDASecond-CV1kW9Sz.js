import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { W as WorkshopProvider } from "./registration-nv6lixyL.js";
import { W as WSFormFree } from "./WSFormFree-BUgxrX0s.js";
import { S as SEO } from "../entry-server.js";
import "react";
import "react-router";
import "react-hot-toast";
import "./metaPixel-46TVWgCT.js";
import "axios";
import "react-dom/server";
import "@remix-run/router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "@tanstack/react-query";
import "lucide-react";
import "react-dom";
import "react-icons/pi";
import "framer-motion";
const StatItem = ({ number, label }) => {
  return /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xl lg:text-3xl font-bold text-white mb-2", children: number }),
    /* @__PURE__ */ jsx("div", { className: "text-sm md:text-base text-slate-400 font-medium", children: label })
  ] });
};
const StatsSection = () => {
  const stats = [
    { number: "10th Nov 2025", label: "Date" },
    { number: "7:00 PM IST", label: "Time" },
    { number: "Beginner to Intermediate", label: "Level" }
  ];
  return /* @__PURE__ */ jsx("section", { className: "relative  py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-6", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12", children: stats.map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(StatItem, { number: stat.number, label: stat.label }),
    index < stats.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent" })
  ] }, index)) }) }) });
};
const CryptoHeroSection = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "AI Data Analysis Crash Course | AcceleratorX",
        description: "Join our free hands-on AI Data Analysis Crash Course. Learn how to use AI-driven data tools to uncover insights, automate analysis, and make smarter business decisions.",
        ogTitle: "AI Data Analysis Crash Course",
        ogDescription: "Get hands-on experience turning raw data into real insights with AI. Learn to lead the change in data analysis.",
        ogImage: "/Data-Analytics.webp"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen overflow-hidden ", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full z-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-6", children: /* @__PURE__ */ jsxs("div", { className: "w-44 md:w-48 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 blur-3xl bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-full" }),
        /* @__PURE__ */ jsx("div", { className: "relative bg-[#0A0F1D]/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-indigo-500/20", children: /* @__PURE__ */ jsx("img", { src: "/companylogo-new.webp", alt: "AcceleratorX Logo", className: "w-full h-auto" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute left-[-200px] top-1/4 h-[600px] w-[600px] rounded-full bg-purple-700 opacity-30 blur-[150px] pointer-events-none z-0" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center opacity-[0.15]",
          style: {
            backgroundImage: `url('/backgrounds/1_s.webp')`
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30",
            style: {
              background: "radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, rgba(20, 184, 166, 0.1) 40%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-25",
            style: {
              background: "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 50%, transparent 80%)"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-20",
            style: {
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.05) 60%, transparent 80%)"
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 container mx-auto px-6 md:my-12 mt-28 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-6xl font-bold text-white leading-tight", children: [
              "AI Data Analysis ",
              /* @__PURE__ */ jsx("span", { className: "text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent leading-tight", children: "Crash Course" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-300 text-lg max-w-lg", children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Learn how to use AI-driven data tools to uncover insights, automate analysis, and make smarter business decisions — faster and better than ever before." }),
              /* @__PURE__ */ jsx("div", { className: "bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3 mt-4", children: /* @__PURE__ */ jsx("p", { className: "text-yellow-200 text-sm font-medium", children: "⚠️ Note: This is a live-only session. No recordings will be shared." }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full ", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl" }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative z-10 bg-black/60 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl",
                id: "workshop-registration-form",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl" }),
                  /* @__PURE__ */ jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsx(WorkshopProvider, { children: /* @__PURE__ */ jsx(WSFormFree, {}) }) })
                ]
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(StatsSection, {})
      ] })
    ] })
  ] });
};
export {
  CryptoHeroSection as default
};
