import { j as jsxRuntimeExports } from "./main-Bz-Nf_l9.js";
function TechStackSection() {
  const toolsStack = [
    { name: "Airtable", icon: "/assets/n8n/airtable.webp" },
    { name: "ClickUp", icon: "/assets/n8n/clickup.webp" },
    { name: "Cursor", icon: "/assets/n8n/Cursor.webp" },
    { name: "Gmail", icon: "/assets/n8n/gmail.webp" },
    { name: "HubSpot", icon: "/assets/n8n/hubspot.webp" },
    { name: "Lovable", icon: "/assets/n8n/Lovable.webp" },
    { name: "Notion", icon: "/assets/n8n/notion.webp" },
    { name: "OpenAI", icon: "/assets/n8n/openai.webp" },
    { name: "Replit", icon: "/assets/n8n/replit.webp" },
    { name: "Google Sheets", icon: "/assets/n8n/sheets.webp" },
    { name: "Slack", icon: "/assets/n8n/slack.webp" },
    { name: "Stripe", icon: "/assets/n8n/stripe.webp" },
    { name: "Trello", icon: "/assets/n8n/trello.webp" },
    { name: "Windsurf", icon: "/assets/n8n/windsurf.webp" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8 bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight", children: "Works Seamlessly With Your Favorite Tools" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-400 leading-relaxed max-w-lg", children: "Discover how to automate lead generation and enrichment using no-code tools. Build powerful workflows that save hours, boost accuracy, and scale effortlessly—without writing a single line of code." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-8 justify-items-center", children: toolsStack.map((tool, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-16 h-16 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center hover:bg-gray-700/50 transition-all duration-300 group",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: tool.icon,
            alt: tool.name,
            className: "w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
          }
        )
      },
      index
    )) })
  ] }) }) });
}
export {
  TechStackSection as default
};
