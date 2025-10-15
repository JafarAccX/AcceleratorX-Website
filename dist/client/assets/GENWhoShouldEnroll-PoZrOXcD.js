import { j as jsxRuntimeExports, B as Briefcase } from "./main-DG5q6AAQ.js";
import { U as Users } from "./users-Bjgiecmn.js";
import { M as Megaphone } from "./megaphone-n8DGvL5u.js";
import { B as Brain } from "./brain-4HDxiWW4.js";
const GENWhoShouldEnroll = () => {
  const targetAudience = [
    {
      icon: Users,
      title: "Beginners & Business Professionals",
      description: "No prior technical background required"
    },
    {
      icon: Briefcase,
      title: "Entrepreneurs & Freelancers",
      description: "Learn to build and monetize AI-powered solutions"
    },
    {
      icon: Megaphone,
      title: "Marketing & Content Creators",
      description: "Automate content workflows with AI"
    },
    {
      icon: Brain,
      title: "AI Enthusiasts & Job Seekers",
      description: "Gain skills to stand out in the AI job market"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-12 bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-96 h-96 bottom-0 right-0 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-3 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 text-sm font-medium", children: "Perfect For You" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Who Should Take " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "This Course" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-blue-100", children: "Designed for professionals and beginners looking to master AI without coding" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: targetAudience.map((audience, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group p-5 rounded-xl relative py-8 bg-black  backdrop-blur-sm border border-white/20 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex  flex-col items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 p-2.5 rounded-lg bg-blue-50/20 group-hover:bg-blue-100 transform group-hover:rotate-6 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(audience.icon, { className: "w-5 h-5 text-blue-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold   transition-colors", children: audience.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 mb-2", children: audience.description })
              ] })
            ] })
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-square rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/bggpt.webp",
            alt: "Students learning together",
            className: "object-cover w-full h-full rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-sm rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-900 font-medium", children: '"Join a community of learners and build your AI career together!"' }) })
      ] }) })
    ] }) }) })
  ] });
};
export {
  GENWhoShouldEnroll as default
};
