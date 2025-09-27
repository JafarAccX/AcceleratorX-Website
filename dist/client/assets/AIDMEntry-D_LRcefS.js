const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AIDMChallenges-BlmhCOK_.js","assets/main-Bxo1x8yy.js","assets/main-Ctc2Wiva.css","assets/alert-triangle-z75ZUED3.js","assets/clock-BQuo5sOG.js","assets/trending-up-LSgc8AR6.js","assets/proxy-DxTfwLxA.js","assets/AIDMSolution-zvnr4XIV.js","assets/target--3oSttgq.js","assets/rocket-DtvxbWOE.js","assets/AIDMRoadmap-T0uJV3Zm.js","assets/EnrollmentModal-CKojwu56.js","assets/enrollmentApi-BHSFbNU_.js","assets/metaPixel-D0RJkYnI.js","assets/index-Bz74Jjsn.js","assets/brain-DbdwVH4a.js","assets/zap-Co_L5BpB.js","assets/AIDMTools-BQDcuWmt.js","assets/bar-chart-2YYPOXIO.js","assets/AIDMCareerOutcomes-h8vw9Hx9.js","assets/trophy-B4XQUZ8M.js","assets/users-DlSbkj3O.js","assets/star-Cvuqb55m.js","assets/AIDMMentors-SPU2bGgG.js","assets/linkedin-CbEvAP-m.js","assets/AIDMCertification-CJVaM8tV.js","assets/award-C9TuBIdU.js","assets/shield-D0jBBIVT.js","assets/check-circle-DZ10q9D9.js","assets/AIDMPricing-HokhKVpZ.js","assets/check-C7v3Fn92.js","assets/AIDMFAQ-D9VIeyI7.js","assets/minus-DVdzw0gd.js","assets/plus-CyYq2mbB.js","assets/AIDMFinalCTA-1lCgDG2Z.js"])))=>i.map(i=>d[i]);
import { r as reactExports, k as useCourseContext, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bxo1x8yy.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Xh5TZw_d.js";
import EnrollmentModal from "./EnrollmentModal-CKojwu56.js";
import { m as motion } from "./proxy-DxTfwLxA.js";
import "./enrollmentApi-BHSFbNU_.js";
import "./metaPixel-D0RJkYnI.js";
import "./index-Bz74Jjsn.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative  border-b border-green-900 bg-black overflow-hidden", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4", children: "AI-Powered Digital Marketing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-6", children: "Master AI-first growth, automation and performance marketing with real projects and capstone." }),
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
const AIDMChallenges = reactExports.lazy(() => __vitePreload(() => import("./AIDMChallenges-BlmhCOK_.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0));
const AIDMSolution = reactExports.lazy(() => __vitePreload(() => import("./AIDMSolution-zvnr4XIV.js"), true ? __vite__mapDeps([7,1,2,8,9,6]) : void 0));
const AIDMRoadmap = reactExports.lazy(() => __vitePreload(() => import("./AIDMRoadmap-T0uJV3Zm.js"), true ? __vite__mapDeps([10,1,2,11,12,13,14,6,15,16,9]) : void 0));
const AIDMTools = reactExports.lazy(() => __vitePreload(() => import("./AIDMTools-BQDcuWmt.js"), true ? __vite__mapDeps([17,1,2,5,18,16,6]) : void 0));
const AIDMCareerOutcomes = reactExports.lazy(() => __vitePreload(() => import("./AIDMCareerOutcomes-h8vw9Hx9.js"), true ? __vite__mapDeps([19,1,2,20,15,8,21,22,6]) : void 0));
const AIDMMentors = reactExports.lazy(() => __vitePreload(() => import("./AIDMMentors-SPU2bGgG.js"), true ? __vite__mapDeps([23,1,2,6,21,24]) : void 0));
const AIDMCertification = reactExports.lazy(() => __vitePreload(() => import("./AIDMCertification-CJVaM8tV.js"), true ? __vite__mapDeps([25,1,2,6,26,27,20,28]) : void 0));
const AIDMPricing = reactExports.lazy(() => __vitePreload(() => import("./AIDMPricing-HokhKVpZ.js"), true ? __vite__mapDeps([29,1,2,11,12,13,14,6,22,30]) : void 0));
const AIDMFAQ = reactExports.lazy(() => __vitePreload(() => import("./AIDMFAQ-D9VIeyI7.js"), true ? __vite__mapDeps([31,1,2,11,12,13,14,6,32,33]) : void 0));
const AIDMFinalCTA = reactExports.lazy(() => __vitePreload(() => import("./AIDMFinalCTA-1lCgDG2Z.js"), true ? __vite__mapDeps([34,1,2]) : void 0));
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
