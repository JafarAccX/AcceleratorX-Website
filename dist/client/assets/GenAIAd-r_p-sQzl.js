const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-DGIMCeB9.js","assets/main--2dij7NT.js","assets/main-BLt5Qm9-.css","assets/EnrollmentModal-BwoEtjGe.js","assets/enrollmentApi-BFYU_Xcg.js","assets/metaPixel-CkAVQXt-.js","assets/sparkles-ChBDR8Lt.js","assets/zap-bwAY5ahc.js","assets/bot-ATq5Pntd.js","assets/code-BHMSyEI1.js","assets/cpu-CPQtPd1L.js","assets/workflow-DS_rl7Ot.js","assets/GENFAQAd-7wHKasS-.js","assets/help-circle-D49YxGXh.js","assets/rocket-Bcg6PPyv.js","assets/GENHeroAd-Bzm7k1rm.js","assets/arrow-right-gPbAI7ey.js","assets/GENIntroductionAd-DwgQleR5.js","assets/brain-CP6NV3lw.js","assets/target-DogO4tkf.js","assets/GENLearningJourneyAd-C7uBEr4R.js","assets/calendar-Z8pjLB5V.js","assets/chevron-left-B_P-BQbB.js","assets/chevron-right-BTwzgdZv.js","assets/cloud-BmcEnVb0.js","assets/book-open-uRJLYMIX.js","assets/GENMarketScopeAd-CUJn6EHD.js","assets/trending-up-3sJn4_nJ.js","assets/bar-chart-DGezdcWK.js","assets/GENToolsYouWillLearnAd-D0Jy39Pf.js","assets/wrench-Cw3g7mN4.js","assets/video-BnP0cU-b.js","assets/GENWhoShouldEnrollAd-B4XNOqXA.js","assets/users-GrMQqZi1.js","assets/megaphone-BVSBTknN.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main--2dij7NT.js";
import { H as HeaderEIE } from "./HeaderEIE-4aqtTXRR.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-DGIMCeB9.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-7wHKasS-.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-Bzm7k1rm.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DwgQleR5.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-C7uBEr4R.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-CUJn6EHD.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-D0Jy39Pf.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-B4XNOqXA.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
const GenAICourseAD = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse("Generative AI");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GENHeroAd, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GENIntroductionAd, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GENWhoShouldEnrollAd, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GENBYOAAd, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GENMarketScopeAd, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GENToolsYouWillLearnAd, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GENLearningJourneyAd, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GENFAQAd, {})
    ] })
  ] });
};
export {
  GenAICourseAD as default
};
