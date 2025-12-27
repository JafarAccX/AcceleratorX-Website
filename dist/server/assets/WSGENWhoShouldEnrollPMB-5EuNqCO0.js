import { jsx, jsxs } from "react/jsx-runtime";
import { Users, Code, GraduationCap, Brain, Rocket } from "lucide-react";
const WSGENWhoShouldEnrollPMB = () => {
  const targetAudience = [
    {
      icon: Code,
      title: "Developers & Engineers",
      description: "Build faster with integrated workflows."
    },
    {
      icon: GraduationCap,
      title: "Students & Freshers",
      description: "Learn job-ready skills."
    },
    {
      icon: Brain,
      title: "Tech Enthusiasts",
      description: "Understand end-to-end development."
    },
    {
      icon: Rocket,
      title: "Startup Founders",
      description: "Deploy products without depending on large teams."
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
  return /* @__PURE__ */ jsx("section", { className: "bg-[#050A14] py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-500/10 rounded-md px-3 py-1.5 mb-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-blue-400" }),
        /* @__PURE__ */ jsx("span", { className: "text-blue-400 text-sm font-medium", children: "Perfect for anyone looking to sharpen real development skills" })
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-white", children: "Who Is This " }),
        /* @__PURE__ */ jsx("span", { className: "text-blue-500", children: "For" }),
        /* @__PURE__ */ jsx("span", { className: "text-white", children: "?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-100 max-w-xl mx-auto", children: "Perfect for anyone looking to sharpen real development skills and speed up their workflow." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col lg:flex-row gap-8 items-center", children: /* @__PURE__ */ jsxs("div", { className: "w-full  mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: targetAudience.map((audience, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/20 transition-all duration-300 hover:bg-white/10",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 p-2 rounded-md bg-blue-500/10", children: /* @__PURE__ */ jsx(audience.icon, { className: "w-5 h-5 text-blue-400" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-1", children: audience.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300", children: audience.description })
            ] })
          ] })
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: scrollToForm,
          className: "px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:shadow-md transition-all duration-300 w-full sm:w-auto",
          children: "Register Now"
        }
      ) })
    ] }) })
  ] }) }) });
};
export {
  WSGENWhoShouldEnrollPMB as default
};
