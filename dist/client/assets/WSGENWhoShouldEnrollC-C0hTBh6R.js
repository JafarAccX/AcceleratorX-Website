import { f as createLucideIcon, j as jsxRuntimeExports, B as Briefcase } from "./main-BsE_pOwq.js";
import { U as Users } from "./users-HCzXCbXD.js";
import { C as Code } from "./code-BTOtkrCz.js";
import { B as Brain } from "./brain-Bt4nA7al.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Laptop = createLucideIcon("Laptop", [
  [
    "path",
    {
      d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
      key: "tarvll"
    }
  ]
]);
const WSGENWhoShouldEnrollC = () => {
  const targetAudience = [
    {
      icon: Briefcase,
      title: "Professionals",
      description: "Build internal tools, research bots, or smarter apps."
    },
    {
      icon: Laptop,
      title: "Students",
      description: "Gain hands-on skills for AI careers."
    },
    {
      icon: Code,
      title: "Entrepreneurs",
      description: "Build your own MVP or assistant app."
    },
    {
      icon: Brain,
      title: "Creatives",
      description: "Turn content, notes, and documents into intelligent tools."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-12 bg-black px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-96 h-96 bottom-0 right-0 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-3 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 flex-1 bg-white rounded-full px-4 py-2 mb-3 transform hover:scale-105 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-blue-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 text-sm font-medium", children: "Who Should Attend" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white", children: [
          "This workshop is for you if you’ve ever thought:",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "“AI applications are powerful, but I don’t know how to build and deploy them.”"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " col-span-2 grid sm:grid-cols-2 gap-4", children: targetAudience.map((audience, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group p-5 rounded-xl   backdrop-blur-sm border border-white/20  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 p-2.5 rounded-lg   transform group-hover:rotate-6 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(audience.icon, { className: "w-5 h-5 text-blue-700 " }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold  transition-colors", children: audience.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "  mb-2 text-gray-400", children: audience.description })
              ] })
            ] })
          },
          index
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-square rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/genai.webp",
              alt: "Students learning together",
              className: "object-cover w-full h-full rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" })
        ] }) })
      ] })
    ] })
  ] });
};
export {
  WSGENWhoShouldEnrollC as default
};
