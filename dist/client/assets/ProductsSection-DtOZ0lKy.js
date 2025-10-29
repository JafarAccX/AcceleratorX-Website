import { j as jsxRuntimeExports } from "./main-ma4iRsbt.js";
const ProductCard = ({ title, description, illustration }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-slate-800/80 to-purple-700/5 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-32 flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: illustration }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-bold text-white", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 text-sm md:text-base leading-relaxed max-w-xs", children: description })
    ] })
  ] }) });
};
const DataVizIllustration = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-24 h-16 bg-slate-700/50 rounded-lg flex items-end justify-center gap-1 p-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-4 bg-pink-400 rounded-sm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-8 bg-purple-500 rounded-sm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-6 bg-purple-400 rounded-sm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-10 bg-indigo-500 rounded-sm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-5 bg-pink-400 rounded-sm" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full text-white flex items-center justify-center text-xs font-bold", children: "📊" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-2 -left-2 w-4 h-4 bg-pink-500 rounded-full" })
] });
const NoCodeIllustration = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl", children: "⚙️" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-purple-400 to-emerald-500 rounded-full text-white text-sm flex items-center justify-center", children: "+" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 -right-4 w-5 h-5 bg-yellow-400 rounded-full", children: "📈" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-6 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full" })
] });
const AIToolsIllustration = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl", children: "🤖" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-4 h-4 bg-yellow-400 rounded-full text-white text-[10px] flex items-center justify-center", children: "AI" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 right-2 w-5 h-5 bg-gradient-to-br from-purple-400 to-cyan-500 rounded-full" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-2 left-4 text-yellow-400 text-sm", children: "✦" })
] });
const ProductsSection = () => {
  const products = [
    {
      title: "Creating Interactive Dashboards",
      description: "Discover how to build dynamic dashboards that respond to user interactions and data changes.",
      illustration: /* @__PURE__ */ jsxRuntimeExports.jsx(DataVizIllustration, {})
    },
    {
      title: "Data Visualization Made Powerful",
      description: "Learn advanced visualization techniques to turn raw data into compelling stories and insights.",
      illustration: /* @__PURE__ */ jsxRuntimeExports.jsx(NoCodeIllustration, {})
    },
    {
      title: "PowerBI Best Practices",
      description: "Master DAX formulas, data modeling, and performance optimization for professional dashboards.",
      illustration: /* @__PURE__ */ jsxRuntimeExports.jsx(AIToolsIllustration, {})
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative   py-8 md:py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-[-200px] bottom-0 h-[600px] w-[600px] rounded-full bg-purple-700/60 opacity-30 blur-[150px] pointer-events-none z-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-1/4 w-80 h-80 rounded-full gradient-blob-1 opacity-15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full gradient-blob-2 opacity-20" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-white leading-tight", children: [
        "What You’ll Learn",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "At a Glance" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-12", children: products.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ProductCard,
        {
          title: product.title,
          description: product.description,
          illustration: product.illustration
        },
        index
      )) })
    ] })
  ] });
};
export {
  ProductsSection as default
};
