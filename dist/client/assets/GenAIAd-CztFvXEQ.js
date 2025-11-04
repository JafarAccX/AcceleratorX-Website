const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-DE6Xt5-v.js","assets/main-CSwsI03w.js","assets/main-NGHnJCuZ.css","assets/EnrollmentModal-68jSegjg.js","assets/enrollmentApi-DWbIXGMt.js","assets/metaPixel-DG5N3ym5.js","assets/sparkles-DEMGS_V2.js","assets/zap-Dt1v0LUE.js","assets/bot-C0YyQzyV.js","assets/code-SOtMKM-D.js","assets/cpu-CTDGzHs2.js","assets/workflow-Dgug2bML.js","assets/GENFAQAd-IWXOSBIS.js","assets/help-circle-CP5sSaf9.js","assets/rocket-DFa8_5Xk.js","assets/GENHeroAd-D35pPveA.js","assets/arrow-right-0RHzg7d3.js","assets/GENIntroductionAd-C52HtTtW.js","assets/brain-CGXz2yUX.js","assets/target-0HH9S85M.js","assets/GENLearningJourneyAd-DsOA9OZt.js","assets/calendar-B8gELTDm.js","assets/chevron-left-CmNY9m7S.js","assets/chevron-right-Cv4VR2iV.js","assets/cloud-D4dl0h95.js","assets/book-open-CmcHGxIv.js","assets/GENMarketScopeAd-DpQ62cJm.js","assets/trending-up-DTaoi_FJ.js","assets/bar-chart-D9dZlGsO.js","assets/GENToolsYouWillLearnAd-PM8UZ_7B.js","assets/wrench-DyazG1sB.js","assets/video-CHhficsi.js","assets/GENWhoShouldEnrollAd-ZIupocPL.js","assets/users-BLdnyJs-.js","assets/megaphone-4ikNG8Z0.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CSwsI03w.js";
import { H as HeaderEIE } from "./HeaderEIE-CdKtrF_S.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-DE6Xt5-v.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-IWXOSBIS.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-D35pPveA.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-C52HtTtW.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-DsOA9OZt.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-DpQ62cJm.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-PM8UZ_7B.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-ZIupocPL.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
