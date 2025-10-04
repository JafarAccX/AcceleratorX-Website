const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AIDMChallenges-C2gvBhzb.js","assets/main-CyKI5oeo.js","assets/main-B4XYXhR2.css","assets/alert-triangle-BGIPcsvJ.js","assets/clock-DC2ecQNQ.js","assets/trending-up-DItEEHz6.js","assets/proxy-BOkuqYBJ.js","assets/AIDMSolution-BZy49q2z.js","assets/target-YuLBPE2u.js","assets/rocket-CSHSDR4r.js","assets/AIDMRoadmap-DTEbId9C.js","assets/EnrollmentModal-De06Jtf6.js","assets/enrollmentApi-Cu1oEIrV.js","assets/metaPixel-BH32gJwg.js","assets/index-BNL4sw4U.js","assets/brain-3gwc6v5K.js","assets/zap-K-mLJT76.js","assets/AIDMTools-POQp_WUW.js","assets/bar-chart-C8c7Vyr-.js","assets/AIDMCareerOutcomes-Dqe0rViV.js","assets/trophy-CIPfa0Jp.js","assets/users-CGx24rbU.js","assets/star-DPFh_XzQ.js","assets/AIDMMentors-DWeNFBkA.js","assets/linkedin-FjGrX4qg.js","assets/AIDMCertification-E1pjnY0R.js","assets/shield-BWTOWMW-.js","assets/check-circle-Da0BVpbx.js","assets/AIDMPricing-CqzYwZks.js","assets/check-Bd08_L0C.js","assets/AIDMFAQ-BwbP8jxj.js","assets/minus-BSUCwAU6.js","assets/plus-BTe3KyxA.js","assets/AIDMFinalCTA-CUVfQomE.js"])))=>i.map(i=>d[i]);
import { r as reactExports, k as useCourseContext, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CyKI5oeo.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DEAbprPG.js";
import EnrollmentModal from "./EnrollmentModal-De06Jtf6.js";
import { m as motion } from "./proxy-BOkuqYBJ.js";
import "./enrollmentApi-Cu1oEIrV.js";
import "./metaPixel-BH32gJwg.js";
import "./index-BNL4sw4U.js";
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
const AIDMChallenges = reactExports.lazy(() => __vitePreload(() => import("./AIDMChallenges-C2gvBhzb.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0));
const AIDMSolution = reactExports.lazy(() => __vitePreload(() => import("./AIDMSolution-BZy49q2z.js"), true ? __vite__mapDeps([7,1,2,8,9,6]) : void 0));
const AIDMRoadmap = reactExports.lazy(() => __vitePreload(() => import("./AIDMRoadmap-DTEbId9C.js"), true ? __vite__mapDeps([10,1,2,11,12,13,14,6,15,16,9]) : void 0));
const AIDMTools = reactExports.lazy(() => __vitePreload(() => import("./AIDMTools-POQp_WUW.js"), true ? __vite__mapDeps([17,1,2,5,18,16,6]) : void 0));
const AIDMCareerOutcomes = reactExports.lazy(() => __vitePreload(() => import("./AIDMCareerOutcomes-Dqe0rViV.js"), true ? __vite__mapDeps([19,1,2,20,15,8,21,22,6]) : void 0));
const AIDMMentors = reactExports.lazy(() => __vitePreload(() => import("./AIDMMentors-DWeNFBkA.js"), true ? __vite__mapDeps([23,1,2,6,21,24]) : void 0));
const AIDMCertification = reactExports.lazy(() => __vitePreload(() => import("./AIDMCertification-E1pjnY0R.js"), true ? __vite__mapDeps([25,1,2,6,26,20,27]) : void 0));
const AIDMPricing = reactExports.lazy(() => __vitePreload(() => import("./AIDMPricing-CqzYwZks.js"), true ? __vite__mapDeps([28,1,2,11,12,13,14,6,22,29]) : void 0));
const AIDMFAQ = reactExports.lazy(() => __vitePreload(() => import("./AIDMFAQ-BwbP8jxj.js"), true ? __vite__mapDeps([30,1,2,11,12,13,14,6,31,32]) : void 0));
const AIDMFinalCTA = reactExports.lazy(() => __vitePreload(() => import("./AIDMFinalCTA-CUVfQomE.js"), true ? __vite__mapDeps([33,1,2]) : void 0));
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
