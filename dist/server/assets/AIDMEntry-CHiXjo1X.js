import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, Suspense, lazy } from "react";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DQdvjFM1.js";
import { motion } from "framer-motion";
import EnrollmentModal from "./EnrollmentModal-D1v0t8cP.js";
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
import "react-hot-toast";
import "./enrollmentApi-DmeHaJMK.js";
import "./metaPixel-Cw2h-5_I.js";
const AIDMHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloadOnOpen, setDownloadOnOpen] = useState(false);
  const { setSelectedCourse } = useCourseContext();
  const handleEnrollClick = (download = false) => {
    console.log("Download:", download);
    setSelectedCourse("AI Digital Marketing");
    setDownloadOnOpen(download);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative pt-20 md:pt-0 border-b border-green-900 bg-black overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 items-center z-20", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: {
            duration: 0.8,
            ease: "easeOut"
          },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4", children: "Nano-Degree in AI Digital Marketing" }),
            /* @__PURE__ */ jsx("p", { children: "16-Week Live Program with Job Assistance" }),
            " ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: "This Nano-Degree in AI Digital Marketing teaches you how to utilise AI growth, AI marketing automation, and AI performance marketing through live classes, hands-on projects, and a real capstone challenge." }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-[#5CB338] font-bold", children: "Duration" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "16 weeks" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-[#5CB338] font-bold", children: "Mode" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "100% live" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-[#5CB338] font-bold", children: "Placement" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Job assistance" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => handleEnrollClick(false),
                  className: "w-full sm:w-auto bg-[#5CB338] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#4fb02f] transition",
                  children: "Apply Now"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => handleEnrollClick(true),
                  className: "w-full sm:w-auto border-2 border-[#5CB338] text-[#5CB338] px-8 py-3 rounded-md hover:bg-[#5CB338]/10 transition font-semibold",
                  children: "Download Syllabus"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "relative mt-6 lg:mt-0 flex items-center justify-center",
          initial: { opacity: 0, scale: 0.98 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.7, ease: "easeOut" },
          children: /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/assets/ai-digital-m/nano_degree.webp",
              alt: "AI Digital Marketing",
              className: "w-full  object-cover flex gap-0"
            }
          ) })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      EnrollmentModal,
      {
        isOpen: isModalOpen,
        onClose: () => {
          setIsModalOpen(false);
          setDownloadOnOpen(false);
        },
        downloadOnOpen
      }
    )
  ] });
};
const AIDMChallenges = lazy(() => import("./AIDMChallenges-DExR7VoK.js"));
const AIDMSolution = lazy(() => import("./AIDMSolution-CglO8dg0.js"));
const AIDMRoadmap = lazy(() => import("./AIDMRoadmap-DoiPfO0C.js"));
const AIDMTools = lazy(() => import("./AIDMTools-DcwP5mgI.js"));
const AIDMCareerOutcomes = lazy(() => import("./AIDMCareerOutcomes-B-DLmgXZ.js"));
const AIDMMentors = lazy(() => import("./AIDMMentors-BI94-0EL.js"));
const AIDMCertification = lazy(() => import("./AIDMCertification-CYiZVR_A.js"));
const AIDMPricing = lazy(() => import("./AIDMPricing-BRhi95I4.js"));
const AIDMFAQ = lazy(() => import("./AIDMFAQ-zScNsYcq.js"));
const AIDMFinalCTA = lazy(() => import("./AIDMFinalCTA-DRLPpC7S.js"));
const AIDMEntry = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  useEffect(() => {
    setSelectedCourse("AI Digital Marketing");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "AI-Powered Digital Marketing Nano-Degree | AcceleratorX",
        description: "Become the marketer every company wants in 2025. Master AI tools, automation, and growth strategies in our 16-week program with job assistance.",
        ogTitle: "AI-Powered Digital Marketing Nano-Degree | AcceleratorX",
        ogDescription: "16-week AI marketing program with live training, automation tools, and career support. Join 2500+ alumni network."
      }
    ),
    /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsx(AIDMHero, {}),
      /* @__PURE__ */ jsx(HeroWithAbouv, {}),
      /* @__PURE__ */ jsx(AIDMChallenges, {}),
      /* @__PURE__ */ jsx(AIDMSolution, {}),
      /* @__PURE__ */ jsx(AIDMRoadmap, {}),
      /* @__PURE__ */ jsx(AIDMTools, {}),
      /* @__PURE__ */ jsx(AIDMCareerOutcomes, {}),
      /* @__PURE__ */ jsx(AIDMMentors, {}),
      /* @__PURE__ */ jsx(AIDMCertification, {}),
      /* @__PURE__ */ jsx(AIDMPricing, {}),
      /* @__PURE__ */ jsx(AIDMFAQ, {}),
      /* @__PURE__ */ jsx(AIDMFinalCTA, {})
    ] })
  ] });
};
export {
  AIDMEntry as default
};
