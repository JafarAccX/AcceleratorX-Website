import { l as useCourseContext, j as jsxRuntimeExports } from "./main-EhB7M4T3.js";
const AIDMFinalCTA = () => {
  const { setSelectedCourse } = useCourseContext();
  const handleEnrollClick = () => {
    setSelectedCourse("AI Digital Marketing");
    window.dispatchEvent(new Event("open-enrollment-modal"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Your future begins here. Join today" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 opacity-90", children: "Get quick access to syllabus, tool checklist, and earlybird executive pricing." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
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
