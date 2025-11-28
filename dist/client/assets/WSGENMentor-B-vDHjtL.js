import { j as jsxRuntimeExports, k as motion, B as Briefcase } from "./main-BzTttlQZ.js";
import { L as Linkedin } from "./linkedin--u34DzwF.js";
import { S as Sparkles } from "./sparkles-CbVydhFe.js";
import { A as Award } from "./award-Ca5R0AH5.js";
const WSGENMentor = () => {
  const mentors = [
    {
      name: "Ashu Mishra",
      role: "Senior PM at Zigram",
      experience: "10+ years",
      image: "/assets/mentor/ashumish.jpeg",
      alt: "product management certification mentor Ashu Mishra",
      linkedin: "https://www.linkedin.com/in/ashumish/",
      transitions: "Over 100+"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "max-w-5xl mx-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4", children: "Meet Your Mentors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1  gap-8", children: mentors.map((mentor, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 max-w-screen-sm mx-auto",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36 h-36 rounded-2xl overflow-hidden border-2 border-indigo-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mentor.image, alt: mentor.alt, className: "w-full h-full object-cover" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: mentor.linkedin,
                      target: "_blank",
                      rel: "noopener noreferrer nofollow",
                      className: "text-white hover:text-blue-100 transition-colors",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-5 h-5" })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center sm:text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-2", children: mentor.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-center sm:justify-start mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-3 h-3" }),
                    mentor.experience
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-blue-400 mt-1 flex-shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: mentor.role })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-purple-400 mt-1 flex-shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                        mentor.transitions,
                        " transitions"
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            },
            index
          )) })
        ]
      }
    ) })
  ] });
};
export {
  WSGENMentor as default
};
