import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { animated } from "@react-spring/web";
import { b as useCourseContext } from "../entry-server.js";
import { AnimatePresence } from "framer-motion";
import EnrollmentModal from "./EnrollmentModal-D8ozUqkn.js";
const StickyBookNav = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { selectedCourse } = useCourseContext();
  if (!selectedCourse) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      animated.div,
      {
        style: {
          // ...springStyles,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          // Adjusted padding for chat widget while maintaining responsiveness
          paddingRight: "clamp(1rem, 4.5rem, 5vw)"
        },
        className: "bg-gradient-to-r from-slate-800/95 via-slate-700/95 to-slate-900/95 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] backdrop-blur-sm",
        children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-2 sm:px-3 md:px-4 py-2.5 sm:py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left", children: /* @__PURE__ */ jsxs("p", { className: "text-white text-sm sm:text-base md:text-lg font-medium leading-tight flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "animate-bounce hidden sm:inline-block", children: "💡" }),
            "Thinking of Switching or kick starting your career?",
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline-block animate-pulse", children: "🎯" })
          ] }) }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setIsFormOpen(true),
              className: "w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-5 py-1.5 sm:py-2 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-sm group",
              children: [
                "Apply Scholarship",
                /* @__PURE__ */ jsx("span", { className: "ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300", children: "⚡" })
              ]
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isFormOpen && /* @__PURE__ */ jsx(
      EnrollmentModal,
      {
        isOpen: isFormOpen,
        onClose: () => setIsFormOpen(false)
      }
    ) })
  ] });
};
export {
  StickyBookNav as S
};
