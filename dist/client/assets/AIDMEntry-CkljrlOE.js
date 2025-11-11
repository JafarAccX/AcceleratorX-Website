const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AIDMChallenges-BoDs37LR.js","assets/main-DoR0yzTf.js","assets/main-BA_X0d1R.css","assets/alert-triangle-DIrHco7F.js","assets/clock-B16FyTdO.js","assets/trending-up-CoyTd350.js","assets/AIDMSolution-YlX1drs0.js","assets/target-SCJSZVIU.js","assets/rocket-Bb_JXPql.js","assets/AIDMRoadmap-C11SXKx1.js","assets/EnrollmentModal-BJFCvW-k.js","assets/enrollmentApi-Czu3zfpV.js","assets/metaPixel-Cn55y1S8.js","assets/brain-M9JLjWxD.js","assets/bar-chart-3-DCuP5-f_.js","assets/zap-CH0WMgm_.js","assets/AIDMTools-CojJyli-.js","assets/bar-chart-DYUNazVI.js","assets/AIDMCareerOutcomes-COie110U.js","assets/trophy-2Q29tutL.js","assets/users-B-O3Tmh3.js","assets/AIDMMentors-DlEJ8bJb.js","assets/linkedin-DBLsHGnQ.js","assets/AIDMCertification-RDFRQBFL.js","assets/shield-bJzlAiJY.js","assets/check-circle-DB9LJn-L.js","assets/AIDMPricing-DbI_7dLB.js","assets/star-61Hio32f.js","assets/check-Ae_3x1df.js","assets/AIDMFAQ-9hkzo2gU.js","assets/minus-CXFzKOnw.js","assets/plus-8RoXFRM2.js","assets/AIDMFinalCTA-CxQVHGJG.js"])))=>i.map(i=>d[i]);
import { r as reactExports, l as useCourseContext, j as jsxRuntimeExports, k as motion, S as SEO, _ as __vitePreload } from "./main-DoR0yzTf.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CWqGdazN.js";
import EnrollmentModal from "./EnrollmentModal-BJFCvW-k.js";
import "./enrollmentApi-Czu3zfpV.js";
import "./metaPixel-Cn55y1S8.js";
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
const AIDMChallenges = reactExports.lazy(() => __vitePreload(() => import("./AIDMChallenges-BoDs37LR.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const AIDMSolution = reactExports.lazy(() => __vitePreload(() => import("./AIDMSolution-YlX1drs0.js"), true ? __vite__mapDeps([6,1,2,7,8]) : void 0));
const AIDMRoadmap = reactExports.lazy(() => __vitePreload(() => import("./AIDMRoadmap-C11SXKx1.js"), true ? __vite__mapDeps([9,1,2,10,11,12,13,14,15,8]) : void 0));
const AIDMTools = reactExports.lazy(() => __vitePreload(() => import("./AIDMTools-CojJyli-.js"), true ? __vite__mapDeps([16,1,2,5,17,15]) : void 0));
const AIDMCareerOutcomes = reactExports.lazy(() => __vitePreload(() => import("./AIDMCareerOutcomes-COie110U.js"), true ? __vite__mapDeps([18,1,2,19,20]) : void 0));
const AIDMMentors = reactExports.lazy(() => __vitePreload(() => import("./AIDMMentors-DlEJ8bJb.js"), true ? __vite__mapDeps([21,1,2,20,22]) : void 0));
const AIDMCertification = reactExports.lazy(() => __vitePreload(() => import("./AIDMCertification-RDFRQBFL.js"), true ? __vite__mapDeps([23,1,2,24,19,25]) : void 0));
const AIDMPricing = reactExports.lazy(() => __vitePreload(() => import("./AIDMPricing-DbI_7dLB.js"), true ? __vite__mapDeps([26,1,2,10,11,12,27,28]) : void 0));
const AIDMFAQ = reactExports.lazy(() => __vitePreload(() => import("./AIDMFAQ-9hkzo2gU.js"), true ? __vite__mapDeps([29,1,2,10,11,12,30,31]) : void 0));
const AIDMFinalCTA = reactExports.lazy(() => __vitePreload(() => import("./AIDMFinalCTA-CxQVHGJG.js"), true ? __vite__mapDeps([32,1,2]) : void 0));
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
