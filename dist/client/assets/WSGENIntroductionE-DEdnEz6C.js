import { j as jsxRuntimeExports } from "./main-DqI0tNcP.js";
import { T as Target } from "./target-BcFTh9mG.js";
import { B as Brain } from "./brain-BJeSlhWd.js";
import { T as TrendingUp } from "./trending-up-B5-dSmkd.js";
const WSGENIntroductionE = () => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#050A14] py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "Master RAG Agents" }),
        " & Build Intelligent AI Apps"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-base mb-8 max-w-2xl mx-auto", children: "Learn to build Retrieval-Augmented Generation (RAG) agents that combine the power of vector databases and large language models. Create AI applications that can understand and respond based on your custom data sources." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8", children: [
      {
        value: "RAG",
        label: "Retrieval-Augmented Generation"
      },
      {
        value: "100%",
        label: "hands-on learning"
      },
      {
        value: "Free",
        label: "live RAG workshop"
      }
    ].map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0A1020] p-4 rounded-lg border border-blue-900/20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-white mb-1", children: stat.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-400", children: stat.label })
    ] }, index)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8", children: [
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-blue-500" }),
        title: "Vector Databases",
        description: "Learn to work with Pinecone, Weaviate, and ChromaDB for efficient data retrieval."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5 text-blue-500" }),
        title: "LLM Integration",
        description: "Connect RAG systems with GPT, Claude, and open-source models."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-blue-500" }),
        title: "Production Ready",
        description: "Build and deploy RAG agents that can handle real-world applications."
      }
    ].map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-[#0A1020] rounded-lg p-4 flex flex-col items-start gap-3 border border-blue-900/20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-blue-500/10 p-2", children: feature.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-1", children: feature.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: feature.description })
          ] })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: scrollToForm,
        className: "px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md hover:shadow-md transition-all duration-300 w-full sm:w-auto",
        children: "Register Now"
      }
    ) })
  ] }) }) });
};
export {
  WSGENIntroductionE as default
};
