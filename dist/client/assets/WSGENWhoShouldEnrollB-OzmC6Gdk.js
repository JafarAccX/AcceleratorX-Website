import { j as jsxRuntimeExports, B as Briefcase } from "./main-Dr7DU7CZ.js";
import { U as Users } from "./users-Bh-qRdQ_.js";
import { M as Megaphone } from "./megaphone-Dvy3MwkZ.js";
import { B as Brain } from "./brain-BRD7JP5m.js";
const WSGENWhoShouldEnrollB = () => {
  const targetAudience = [
    {
      icon: Users,
      title: "Entrepreneurs & Startups",
      description: "Grow faster with AI-powered campaigns"
    },
    {
      icon: Briefcase,
      title: "Marketers & Content Teams",
      description: "Save time and boost creativity"
    },
    {
      icon: Megaphone,
      title: "Students & Freshers",
      description: "Learn skills that companies are hiring for"
    },
    {
      icon: Brain,
      title: "No-Code Enthusiasts",
      description: "Take your AI + marketing game to the next level"
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#050A14] py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-3 py-1.5 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-blue-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 text-sm font-medium", children: "For Doers & Builders" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Who Can " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "Benefit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100 max-w-xl mx-auto", children: "Anyone looking to grow faster, save time, boost creativity, and gain in-demand AI marketing skills can benefit from this webinar." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:w-3/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: targetAudience.map((audience, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/20 transition-all duration-300 hover:bg-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 p-2 rounded-md bg-blue-500/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(audience.icon, { className: "w-5 h-5 text-blue-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-1", children: audience.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300", children: audience.description })
              ] })
            ] })
          },
          index
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: scrollToForm,
            className: "px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md hover:shadow-md transition-all duration-300 w-full sm:w-auto",
            children: "Register Now"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-2/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/genai.webp", alt: "AI Workflow Automation", className: "w-full h-auto object-cover" }) }) })
    ] })
  ] }) }) });
};
export {
  WSGENWhoShouldEnrollB as default
};
