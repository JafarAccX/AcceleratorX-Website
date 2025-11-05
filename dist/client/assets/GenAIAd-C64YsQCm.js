const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-CWZEi761.js","assets/main-Ck2PwlUp.js","assets/main-NGHnJCuZ.css","assets/EnrollmentModal-1cLzwjk_.js","assets/enrollmentApi-BejPWjGn.js","assets/metaPixel-C33WLlAg.js","assets/sparkles-B1O1XSrs.js","assets/zap-DdPw8T2N.js","assets/bot-aUntyxkV.js","assets/code-3LU0gDcZ.js","assets/cpu-DizZeVRi.js","assets/workflow-heRRxXC0.js","assets/GENFAQAd-Ul-mu48i.js","assets/help-circle-M5ErfrsK.js","assets/rocket-Dt8bEnyA.js","assets/GENHeroAd-CIXnTMNR.js","assets/arrow-right-CHYkYHlR.js","assets/GENIntroductionAd-B3BOhIPn.js","assets/brain-CuEc6BJ8.js","assets/target-S0Lzc_Gc.js","assets/GENLearningJourneyAd-B2vNL9Do.js","assets/calendar-YtWPZytb.js","assets/chevron-left-V4s-6ZCL.js","assets/chevron-right-vVKv7PLS.js","assets/cloud-oYUXGdCm.js","assets/book-open-Bv495fHW.js","assets/GENMarketScopeAd-D8Tr-cdF.js","assets/trending-up-yZ1zlIbe.js","assets/bar-chart-4fjJ_j2X.js","assets/GENToolsYouWillLearnAd-Ud7rWPMq.js","assets/wrench-CmwnkvmI.js","assets/video-BcE6oLld.js","assets/GENWhoShouldEnrollAd-BiSQm3Rh.js","assets/users-C7hpzxLV.js","assets/megaphone-CwWrqvud.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Ck2PwlUp.js";
import { H as HeaderEIE } from "./HeaderEIE--kYZOCas.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-CWZEi761.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-Ul-mu48i.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CIXnTMNR.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-B3BOhIPn.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-B2vNL9Do.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-D8Tr-cdF.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-Ud7rWPMq.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-BiSQm3Rh.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
