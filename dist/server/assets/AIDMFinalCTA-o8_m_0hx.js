import { jsxs, jsx } from "react/jsx-runtime";
import { b as useCourseContext } from "../entry-server.js";
import "react";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "@tanstack/react-query";
import "lucide-react";
import "react-dom";
import "react-icons/pi";
import "framer-motion";
const AIDMFinalCTA = () => {
  const { setSelectedCourse } = useCourseContext();
  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    window.dispatchEvent(new Event("open-enrollment-modal"));
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 px-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto text-center relative z-10", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Your Next Job, Client, or Growth Opportunity Starts Here — Reserve Your Seat Today" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 opacity-90", children: "Get instant access to syllabus, tool checklist, and early-bird executive pricing." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleEnrollClick,
          className: "bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl",
          children: "Enroll now"
        }
      )
    ] }) })
  ] });
};
export {
  AIDMFinalCTA as default
};
