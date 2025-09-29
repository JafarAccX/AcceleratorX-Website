import { jsxs, jsx } from "react/jsx-runtime";
import { W as WSFormFree } from "./WSFormFree-DbStJjWR.js";
import { W as WorkshopProvider } from "./registration-DRV2p4qq.js";
import { motion } from "framer-motion";
import { FaClock, FaCalendarAlt, FaUserGraduate, FaLevelUpAlt } from "react-icons/fa";
import "react";
import "react-hot-toast";
import "./metaPixel-Cw2h-5_I.js";
import "../entry-server.js";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "@tanstack/react-query";
import "lucide-react";
import "react-dom";
import "react-icons/pi";
const WSHeroGENC = () => {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0A0F1F] to-black px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]",
          style: { opacity: 0.3 }
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: {
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          },
          transition: { duration: 4, repeat: Infinity },
          className: "absolute top-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: {
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          },
          transition: { duration: 4, repeat: Infinity, delay: 0.5 },
          className: "absolute bottom-20 left-20 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8 },
        className: "absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/90 to-transparent",
        children: /* @__PURE__ */ jsx("div", { className: "container mx-auto   py-4 flex justify-between items-center", children: /* @__PURE__ */ jsx("div", { className: "w-44 md:w-52 hover:scale-105 transition-transform duration-300", children: /* @__PURE__ */ jsx("img", { src: "/companylogo-new.webp", alt: "AcceleratorX Logo", className: "w-full h-auto" }) }) })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-0  ", children: /* @__PURE__ */ jsxs("div", { className: "relative space-y-8 grid grid-cols-1 md:grid-cols-5  items-center justify-center md:gap-12 pt-32 lg:pt-36", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          animate: { x: 0, opacity: 1 },
          transition: { duration: 0.8 },
          className: "flex flex-col gap-4 col-span-3",
          children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { y: 20, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                whileHover: { scale: 1.02 },
                transition: { duration: 0.3 },
                className: "inline-flex max-w-[250px] items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20",
                children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      animate: {
                        rotate: [0, 360]
                      },
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      className: "w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center",
                      children: /* @__PURE__ */ jsx("span", { className: "text-blue-400", children: "⚡" })
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "Hands-on AI Workshop" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6 flex items-start justify-center flex-col ", children: [
              /* @__PURE__ */ jsx(
                motion.h1,
                {
                  initial: { y: 20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { duration: 0.8 },
                  className: " text-3xl lg:text-4xl font-bold leading-tight",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsxs("span", { className: "text-transparent bg-clip-text bg-gradient-to-r pb-4 from-white via-blue-100 to-green-200", children: [
                      /* @__PURE__ */ jsx("span", { className: " text-yellow-400 underline  ", children: "AI Agent Building Bootcamp – Build Your First AI Agents in Just 2 Hours" }),
                      " ",
                      /* @__PURE__ */ jsx("br", {}),
                      "– Smarter, Faster, Hands-on Learning"
                    ] }),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        animate: { scale: [1, 1.1, 1] },
                        transition: { duration: 2, repeat: Infinity },
                        className: "flex gap-2",
                        children: " "
                      }
                    )
                  ] })
                }
              ),
              /* @__PURE__ */ jsxs(motion.div, { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.8 }, children: [
                /* @__PURE__ */ jsx("p", { className: "  text-gray-400 max-w-xl", children: "AI is powerful, but knowing how to build your own AI Agent makes it truly exciting." }),
                /* @__PURE__ */ jsx("p", { className: "  text-gray-400 max-w-xl", children: "In this beginner-friendly bootcamp, you’ll learn to create two real AI agents step by step – one with Lyzr and another using LangChain, CrewAI / n8n. No fluff. No heavy theory. Just real, usable skills you can apply instantly." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6", children: [
              { icon: /* @__PURE__ */ jsx(FaClock, { className: "text-emerald-400 mb-1" }), label: "Duration", value: "2 Hours" },
              {
                icon: /* @__PURE__ */ jsx(FaCalendarAlt, { className: "text-indigo-400 mb-1" }),
                label: "Date",
                value: "10th Sep 2025"
              },
              {
                icon: /* @__PURE__ */ jsx(FaUserGraduate, { className: "text-cyan-400 mb-1" }),
                label: "Time",
                value: "07:00 PM"
              },
              { icon: /* @__PURE__ */ jsx(FaLevelUpAlt, { className: "text-cyan-400 mb-1" }), label: "Level", value: "All Levels" }
            ].map((item, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "group bg-gradient-to-br from-[#0A1A2A]/80 to-[#061625]/60 backdrop-blur-xl rounded-lg p-3 border border-emerald-500/10 hover:border-indigo-400/30 transition-all duration-300 flex flex-col items-center hover:translate-y-[-2px] hover:shadow-lg",
                children: [
                  item.icon,
                  /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-xs", children: item.label }),
                  /* @__PURE__ */ jsx("p", { className: "text-white font-semibold group-hover:text-cyan-300 transition-colors", children: item.value })
                ]
              },
              index
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { x: 10, opacity: 0 },
          animate: { x: 0.7, opacity: 1 },
          transition: { duration: 0.8 },
          className: "w-full col-span-2  lg:sticky lg:top-32",
          children: /* @__PURE__ */ jsxs("div", { className: "relative w-full mx-auto ", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-75 group-hover:opacity-100 animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "relative bg-gradient-to-b from-[#1A1F2B] to-[#141820] p-6 rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "mb-6 text-center", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Reserve Your Spot Now!" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Limited seats available for the next session" })
              ] }) }),
              /* @__PURE__ */ jsx("div", { id: "workshop-registration-form", children: /* @__PURE__ */ jsx(WorkshopProvider, { children: /* @__PURE__ */ jsx(WSFormFree, {}) }) })
            ] }) })
          ] })
        }
      )
    ] }) })
  ] });
};
export {
  WSHeroGENC as default
};
