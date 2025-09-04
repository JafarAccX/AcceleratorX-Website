import { jsxs, jsx } from "react/jsx-runtime";
import { Brain, Users, Target, BarChart, Zap } from "lucide-react";
import { N as NeuralNetworkAnimation } from "./NeuralNetworkAnimation-BkkSd6k4.js";
const GENWhyLearnAI = () => {
  const marketChallenges = [
    {
      icon: Users,
      title: "Skill Gap",
      description: "High demand, but few skilled professionals in AI expertise",
      stat: "Critical"
    },
    {
      icon: Target,
      title: "Job Evolution",
      description: "Automation replacing jobs - AI skills necessary to stay relevant",
      stat: "Urgent"
    },
    {
      icon: BarChart,
      title: "Scalability",
      description: "Businesses struggling with manual processes and efficiency",
      stat: "High Impact"
    }
  ];
  const solutions = [
    {
      icon: Brain,
      title: "Task Automation",
      description: "Automates repetitive tasks, allowing focus on strategy & creativity"
    },
    {
      icon: Zap,
      title: "Enhanced Productivity",
      description: "Streamlines content creation, customer support, and marketing"
    },
    {
      icon: Target,
      title: "New Opportunities",
      description: "Creates AI-driven roles like automation consultants and strategists"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "relative py-12 bg-black overflow-hidden", children: [
    /* @__PURE__ */ jsx(NeuralNetworkAnimation, {}),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-3 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "  mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2  border border-blue-600 rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all", children: [
          /* @__PURE__ */ jsx(Brain, { className: "w-4 h-4 text-blue-600" }),
          /* @__PURE__ */ jsx("span", { className: "text-blue-600 text-base font-medium", children: "Market Problems & Solutions" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-white", children: "The Current " }),
          /* @__PURE__ */ jsx("span", { className: "text-blue-500", children: "Market Challenge" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-blue-100", children: "Discover how Generative AI solves critical business challenges and creates new opportunities" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: marketChallenges.map((challenge, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "group p-6 rounded-xl bg-white/10  border border-white/20   transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 backdrop-blur-2xl",
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 p-3 rounded-lg  bg-black group-hover:bg-blue-100 transform group-hover:rotate-6 transition-all duration-300", children: /* @__PURE__ */ jsx(challenge.icon, { className: "w-5 h-5 text-blue-600" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-base font-bold text-blue-600 tracking-wider  mb-1", children: challenge.stat }),
                /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold  mb-1", children: challenge.title }),
                /* @__PURE__ */ jsx("p", { className: "text-base  ", children: challenge.description })
              ] })
            ] })
          },
          index
        )) }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: solutions.map((solution, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "group p-6 rounded-xl bg-white/10  border border-white/20   transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 backdrop-blur-2xl",
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 p-3 rounded-lg  bg-black group-hover:bg-blue-100 transform group-hover:rotate-6 transition-all duration-300", children: /* @__PURE__ */ jsx(solution.icon, { className: "w-5 h-5 text-blue-600" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold  mb-1", children: solution.title }),
                /* @__PURE__ */ jsx("p", { className: "text-base ", children: solution.description })
              ] })
            ] })
          },
          index
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "group p-6 rounded-xl bg-white/10  border border-white/20   transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 backdrop-blur-2xl", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-900 mb-4", children: "Industries Adopting AI" }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: [
            "Marketing & Content Creation",
            "Customer Support",
            "E-Commerce & Retail",
            "Healthcare",
            "Finance & Banking",
            "Education & Training"
          ].map((industry, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-blue-600" }),
            /* @__PURE__ */ jsx("span", { className: "text-base  ", children: industry })
          ] }, index)) })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  GENWhyLearnAI as default
};
