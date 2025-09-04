import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SEO } from "../entry-server.js";
import "react";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-dom";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-hot-toast";
import "lucide-react";
import "axios";
import "react-icons/pi";
import "@tanstack/react-query";
const N8nAutomationEntry = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SEO, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxs("picture", { children: [
        /* @__PURE__ */ jsx("source", { media: "(min-width: 768px)", srcSet: "/n8n-commingsoon.webp" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/n8n-mobile.webp",
            alt: "n8n Automation Coming Soon",
            className: "absolute inset-0 h-full w-full object-cover",
            fetchPriority: "high",
            decoding: "async",
            loading: "eager"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://docs.google.com/forms/d/e/1FAIpQLSeJxgV3bMDrcy4m8bGdEIHqR0GLZrvVeZ5QF0itPIQqgDaC2g/viewform?usp=sharing&ouid=112961186201792362694",
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          className: "relative mt-96 md:mt-32 sm:mt-44 xs:mt-48 px-10 py-4 text-lg font-semibold text-white bg-[#1a71f6] hover:bg-[#1558b0] rounded-xl shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 w-[90vw] max-w-xs text-center",
          children: "Join the Waitlist"
        }
      )
    ] })
  ] });
};
export {
  N8nAutomationEntry as default
};
