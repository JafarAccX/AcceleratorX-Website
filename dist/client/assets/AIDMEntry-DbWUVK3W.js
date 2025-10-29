const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AIDMChallenges-D4-n20a8.js","assets/main-ma4iRsbt.js","assets/main-G0CT17v4.css","assets/alert-triangle-BZvOs4SI.js","assets/clock-CPqCVY_0.js","assets/trending-up-lFA8pLwo.js","assets/AIDMSolution-lyQeav8a.js","assets/target-Df-llSQz.js","assets/rocket-DkLrTEY7.js","assets/AIDMRoadmap-DHyaTeLi.js","assets/EnrollmentModal-Drsk4gj-.js","assets/enrollmentApi-CgCiDHJR.js","assets/metaPixel-BzgFvOZj.js","assets/brain-CHCB2Mxj.js","assets/zap-JJu2NT1S.js","assets/AIDMTools-CZ4HBhu-.js","assets/bar-chart-BrN6lzJB.js","assets/AIDMCareerOutcomes-CQif4Wmo.js","assets/trophy-C4oiFXuJ.js","assets/users-B94grk6x.js","assets/AIDMMentors-DPEan53x.js","assets/linkedin-C2GvV4V5.js","assets/AIDMCertification-9FGP2sUS.js","assets/shield-BDfM9n9Y.js","assets/check-circle-CVy3jTpL.js","assets/AIDMPricing-B9rbOHLs.js","assets/star-dHRIq2Ym.js","assets/check-DSgdJU7e.js","assets/AIDMFAQ-B6NildHf.js","assets/minus-DdudQ9F4.js","assets/plus-DI6WqnBs.js","assets/AIDMFinalCTA-DmzHTGSy.js"])))=>i.map(i=>d[i]);
import { r as reactExports, l as useCourseContext, j as jsxRuntimeExports, k as motion, S as SEO, _ as __vitePreload } from "./main-ma4iRsbt.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CTRIul8z.js";
import EnrollmentModal from "./EnrollmentModal-Drsk4gj-.js";
import "./enrollmentApi-CgCiDHJR.js";
import "./metaPixel-BzgFvOZj.js";
const AIDMHero = () => {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [downloadOnOpen, setDownloadOnOpen] = reactExports.useState(false);
  const { setSelectedCourse } = useCourseContext();
  const handleEnrollClick = (download = false) => {
    console.log("Download:", download);
    setSelectedCourse("AI Digital Marketing");
    setDownloadOnOpen(download);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-20 md:pt-0 border-b border-green-900 bg-black overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 items-center z-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4", children: "Nano-Degree in AI Digital Marketing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "16-Week Live Program with Job Assistance" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-6", children: "This Nano-Degree in AI Digital Marketing teaches you how to utilise AI growth, AI marketing automation, and AI performance marketing through live classes, hands-on projects, and a real capstone challenge." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#5CB338] font-bold", children: "Duration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "16 weeks" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#5CB338] font-bold", children: "Mode" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "100% live" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#5CB338] font-bold", children: "Placement" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "Job assistance" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleEnrollClick(false),
                  className: "w-full sm:w-auto bg-[#5CB338] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#4fb02f] transition",
                  children: "Apply Now"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "relative mt-6 lg:mt-0 flex items-center justify-center",
          initial: { opacity: 0, scale: 0.98 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.7, ease: "easeOut" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
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
const AIDMChallenges = reactExports.lazy(() => __vitePreload(() => import("./AIDMChallenges-D4-n20a8.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const AIDMSolution = reactExports.lazy(() => __vitePreload(() => import("./AIDMSolution-lyQeav8a.js"), true ? __vite__mapDeps([6,1,2,7,8]) : void 0));
const AIDMRoadmap = reactExports.lazy(() => __vitePreload(() => import("./AIDMRoadmap-DHyaTeLi.js"), true ? __vite__mapDeps([9,1,2,10,11,12,13,14,8]) : void 0));
const AIDMTools = reactExports.lazy(() => __vitePreload(() => import("./AIDMTools-CZ4HBhu-.js"), true ? __vite__mapDeps([15,1,2,5,16,14]) : void 0));
const AIDMCareerOutcomes = reactExports.lazy(() => __vitePreload(() => import("./AIDMCareerOutcomes-CQif4Wmo.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const AIDMMentors = reactExports.lazy(() => __vitePreload(() => import("./AIDMMentors-DPEan53x.js"), true ? __vite__mapDeps([20,1,2,19,21]) : void 0));
const AIDMCertification = reactExports.lazy(() => __vitePreload(() => import("./AIDMCertification-9FGP2sUS.js"), true ? __vite__mapDeps([22,1,2,23,18,24]) : void 0));
const AIDMPricing = reactExports.lazy(() => __vitePreload(() => import("./AIDMPricing-B9rbOHLs.js"), true ? __vite__mapDeps([25,1,2,10,11,12,26,27]) : void 0));
const AIDMFAQ = reactExports.lazy(() => __vitePreload(() => import("./AIDMFAQ-B6NildHf.js"), true ? __vite__mapDeps([28,1,2,10,11,12,29,30]) : void 0));
const AIDMFinalCTA = reactExports.lazy(() => __vitePreload(() => import("./AIDMFinalCTA-DmzHTGSy.js"), true ? __vite__mapDeps([31,1,2]) : void 0));
const AIDMEntry = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse("AI Digital Marketing");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEO,
      {
        title: "AI-Powered Digital Marketing Nano-Degree | AcceleratorX",
        description: "Become the marketer every company wants in 2025. Master AI tools, automation, and growth strategies in our 16-week program with job assistance.",
        ogTitle: "AI-Powered Digital Marketing Nano-Degree | AcceleratorX",
        ogDescription: "16-week AI marketing program with live training, automation tools, and career support. Join 2500+ alumni network."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIDMHero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroWithAbouv, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIDMChallenges, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIDMSolution, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIDMRoadmap, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIDMTools, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIDMCareerOutcomes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIDMMentors, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIDMCertification, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIDMPricing, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIDMFAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIDMFinalCTA, {})
    ] })
  ] });
};
export {
  AIDMEntry as default
};
