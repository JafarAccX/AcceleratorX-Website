import { r as reactExports, j as jsxRuntimeExports } from "./main-CfA5h11a.js";
import { m as motion } from "./proxy-CHEv0qax.js";
const aiTools = [
  {
    name: "Airtable",
    logo: "/assets/n8n/airtable.webp",
    description: "Flexible spreadsheet-database hybrid to manage and automate data."
  },
  {
    name: "ClickUp",
    logo: "/assets/n8n/clickup.webp",
    description: "All-in-one project management tool for tasks, docs, and collaboration."
  },
  {
    name: "Cursor",
    logo: "/assets/n8n/Cursor.webp",
    description: "AI-native code editor with collaboration and chat features."
  },
  {
    name: "Gmail",
    logo: "/assets/n8n/gmail.webp",
    description: "Email service by Google with rich integration and automation support."
  },
  {
    name: "HubSpot",
    logo: "/assets/n8n/hubspot.webp",
    description: "CRM platform for sales, marketing, and customer service automation."
  },
  {
    name: "Lovable",
    logo: "/assets/n8n/Lovable.webp",
    description: "Brand or tool description not available — customize this entry."
  },
  {
    name: "Notion",
    logo: "/assets/n8n/notion.webp",
    description: "Workspace for docs, wikis, tasks, and knowledge management."
  },
  {
    name: "OpenAI",
    logo: "/assets/n8n/openai.webp",
    description: "Access state-of-the-art AI models like GPT-4 for natural language tasks."
  },
  {
    name: "Replit",
    logo: "/assets/n8n/replit.webp",
    description: "Online IDE to build, run, and deploy code collaboratively in real time."
  },
  {
    name: "Google Sheets",
    logo: "/assets/n8n/sheets.webp",
    description: "Cloud-based spreadsheet app with support for formulas and automation."
  },
  {
    name: "Slack",
    logo: "/assets/n8n/slack.webp",
    description: "Team communication and collaboration tool with deep integration support."
  },
  {
    name: "Stripe",
    logo: "/assets/n8n/stripe.webp",
    description: "Payment infrastructure for online businesses to accept payments globally."
  },
  {
    name: "Trello",
    logo: "/assets/n8n/trello.webp",
    description: "Kanban-style task management tool for teams and individuals."
  },
  {
    name: "Windsurf",
    logo: "/assets/n8n/windsurf.webp",
    description: "Tool description not available — you can replace this with accurate info."
  }
];
function AIEcosystem() {
  const [hovered, setHovered] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 py-20 bg-gradient-to-b from-[#0a0f1c] to-[#0b0a12] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl z-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl z-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-4 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          className: "text-4xl md:text-5xl font-bold",
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: "Data Analysis with AI"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          className: "mt-4 text-gray-400 max-w-xl mx-auto text-base md:text-lg",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2, duration: 0.6 },
          children: "Master the ecosystem of tools to create intelligent, autonomous, and real-world AI agents."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 px-4 max-w-6xl mx-auto", children: aiTools.map((tool, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "group relative flex flex-col items-center text-center transition-transform duration-300",
        whileHover: { scale: 1.05 },
        onMouseEnter: () => setHovered(tool.name),
        onMouseLeave: () => setHovered(null),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md shadow-lg transition-all hover:border-white/20 w-full max-w-[120px] h-[120px] flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tool.logo, alt: tool.name, className: "w-10 h-10 object-contain mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm font-medium", children: tool.name })
          ] }),
          hovered === tool.name && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 w-56 bg-white text-black p-3 rounded-lg shadow-xl text-sm z-20 transition-all", children: tool.description })
        ]
      },
      tool.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 pointer-events-none", children: [...Array(70)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute rounded-full bg-blue-500/20",
        style: {
          width: `${Math.random() * 8 + 2}px`,
          height: `${Math.random() * 8 + 2}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${Math.random() * 10 + 10}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      ` })
  ] });
}
export {
  AIEcosystem as default
};
