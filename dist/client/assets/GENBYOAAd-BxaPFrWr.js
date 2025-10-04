import { r as reactExports, j as jsxRuntimeExports } from "./main-Dr7DU7CZ.js";
import EnrollmentModal from "./EnrollmentModal-bFtrKCD9.js";
import { S as Sparkles } from "./sparkles-CxL6DCdy.js";
import { Z as Zap } from "./zap-B-2vi9qI.js";
import { B as Bot } from "./bot-BfoW705e.js";
import { C as Code } from "./code-DySWXEbJ.js";
import { C as Cpu } from "./cpu-BZmf9laq.js";
import { W as Workflow } from "./workflow-aJxndCRR.js";
import "./enrollmentApi-BWSSYuNv.js";
import "./metaPixel-CBvWK0Fy.js";
import "./index-DAddfncm.js";
import "./proxy-82v-ftuM.js";
const GENBYOAAd = () => {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const features = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-5 h-5 text-blue-500" }),
      title: "Custom AI Agents",
      description: "Learn to create and deploy your own AI agents for task automation"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "w-5 h-5 text-blue-500" }),
      title: "No-Code Development",
      description: "Build sophisticated AI agents without writing complex code"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-5 h-5 text-blue-500" }),
      title: "Agent Architecture",
      description: "Master the fundamentals of AI agent design and architecture"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "w-5 h-5 text-blue-500" }),
      title: "Workflow Integration",
      description: "Seamlessly integrate AI agents into your business processes"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-6 bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]",
        style: { opacity: 0.3 }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-blue-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-blue-400 font-medium", children: "Build Your Own AI Agent" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl text-white font-bold mb-6 text-center", children: [
        "Create Your Own ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "AI Agents" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg mb-12 text-center max-w-3xl mx-auto", children: "Learn to build, customize, and deploy AI agents that can automate tasks, enhance productivity, and transform your business operations - all without writing complex code." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-12", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-white/10 rounded-lg", children: feature.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: feature.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400", children: feature.description })
            ] })
          ] })
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleModalOpen,
          className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 mr-2" }),
            "Build Your AI Agent Now"
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnrollmentModal, { isOpen: isModalOpen, onClose: handleModalClose })
  ] });
};
export {
  GENBYOAAd as default
};
