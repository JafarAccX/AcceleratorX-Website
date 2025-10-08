import { j as jsxRuntimeExports } from "./main-CYXtjh6i.js";
const WSTestimonial = () => {
  const testimonialLogos = [
    "/assets/testimonialsLogo/feedback1.webp",
    "/assets/testimonialsLogo/feedback2.webp",
    "/assets/testimonialsLogo/feedback4.webp",
    "/assets/testimonialsLogo/feedback5.webp",
    "/assets/testimonialsLogo/feedback6.webp"
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-gradient-to-b from-[#0A1A2A] via-[#091E2D] to-[#061625] py-16 lg:py-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0   bg-repeat opacity-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-indigo-600/15 via-cyan-400/10 to-emerald-400/15 mix-blend-overlay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.2),rgba(0,0,0,0))]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(79,70,229,0.15),rgba(0,0,0,0))]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute left-[5%] top-[10%] w-24 h-24 border-4 border-emerald-500/10 rounded-lg transform rotate-12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute right-[8%] top-[25%] w-16 h-16 border-4 border-indigo-500/10 rounded-full" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/30 to-indigo-400/20 border border-indigo-500/40 backdrop-blur-sm mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm font-medium", children: "Success Stories" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-4xl font-bold mb-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-indigo-100", children: "From Our Attendees" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-base max-w-xl mx-auto", children: "Results professionals achieved after our Analytics Masterclass" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center items-center gap-6", children: testimonialLogos.map((logo, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-[250px] h-[250px] md:w-[280px] md:h-[280px] p-5 bg-[#0A1A2A]/60 rounded-xl backdrop-blur-sm border border-emerald-500/10 hover:border-indigo-400/30 transition-all duration-300 flex items-center justify-center group hover:scale-[1.02]",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logo,
              alt: `Workshop Attendee Feedback ${index + 1}`,
              className: "max-w-full max-h-full object-contain filter brightness-105 contrast-105"
            }
          )
        },
        index
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto", children: [
        {
          value: "500+",
          label: "Attendees"
        },
        {
          value: "4.9",
          label: "Satisfaction"
        },
        {
          value: "98%",
          label: "Applied Skills"
        }
      ].map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group text-center transform hover:-translate-y-1 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "  h-20 mx-auto mb-3 bg-gradient-to-br from-emerald-600/20 via-cyan-500/15 to-indigo-500/20 rounded-xl border border-emerald-500/20 backdrop-blur-sm flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-300", children: stat.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 font-medium", children: stat.label })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex group/btn", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-400 rounded-lg blur transition-all opacity-70 group-hover/btn:opacity-100 animate-tilt" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: scrollToForm,
          className: "relative inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-[#061625] rounded-lg leading-none border border-emerald-500/30 shadow-xl hover:shadow-2xl transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 text-white group-hover/btn:text-emerald-50 transition-all", children: "Join Now" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                className: "ml-2 w-5 h-5 text-white group-hover/btn:text-indigo-100 transition-colors animate-pulse",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 7l5 5m0 0l-5 5m5-5H6" })
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 pt-6 border-t border-indigo-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 text-center hover:text-emerald-400 transition-colors", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " AcceleratorX. All rights reserved."
    ] }) }) })
  ] });
};
export {
  WSTestimonial as default
};
