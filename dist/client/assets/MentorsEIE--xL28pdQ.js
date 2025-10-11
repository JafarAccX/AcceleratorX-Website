import { j as jsxRuntimeExports, k as motion } from "./main-BsE_pOwq.js";
import { m as mentors } from "./constants-C0Rc_o-P.js";
import { U as Users } from "./users-HCzXCbXD.js";
import { L as Linkedin } from "./linkedin-CU_vZlOn.js";
function MentorsEIE() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "mentors", className: "bg-[#0a0a0a] py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-16 h-16 rounded-2xl bg-[#5CB338]/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-[#5CB338]" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-bold text-white mb-4 tracking-tight", children: [
            "Learn from ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338]", children: "Industry Experts" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-400 max-w-2xl mx-auto", children: "Connect with seasoned professionals who have transformed careers" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: mentors.map((mentor, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: "group relative",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-[#0F0F0F] rounded-2xl border border-white/10 group-hover:border-[#5CB338]/50 transition-all duration-500 overflow-hidden group-hover:shadow-lg group-hover:shadow-[#5CB338]/10 group-hover:-translate-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: mentor.image,
                alt: mentor.name,
                className: "w-full h-full object-contain object-center transform transition-transform duration-700 scale-110 group-hover:scale-125"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-0 z-20 transform -translate-x-full group-hover:translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#5CB338]/10 backdrop-blur-md border border-[#5CB338]/20 rounded-lg px-3 py-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5CB338] text-sm font-medium", children: mentor.company }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-0 z-20 transform translate-x-full group-hover:translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: mentor.linkedin,
              target: "_blank",
              rel: "noopener noreferrer nofollow",
              className: "bg-[#5CB338] hover:bg-[#5CB338]/80 text-white px-4 py-1.5 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm group/btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Connect" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 z-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 transform transition-transform duration-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-1 group-hover:text-[#5CB338] transition-colors duration-300", children: mentor.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#5CB338] font-medium", children: mentor.role })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 transform transition-all duration-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: "Experience" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm font-medium", children: mentor.experience })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: "Transitions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm font-medium", children: mentor.transitions })
              ] })
            ] })
          ] })
        ] })
      },
      index
    )) })
  ] }) });
}
export {
  MentorsEIE as default
};
