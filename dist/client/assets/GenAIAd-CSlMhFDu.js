const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-D69arAE8.js","assets/main-DdVeCtn-.js","assets/main-ZJ57361l.css","assets/EnrollmentModal-CbPmUr_d.js","assets/enrollmentApi-btbXFU1v.js","assets/metaPixel-BjTM4TKG.js","assets/sparkles-d8hOG3cq.js","assets/zap-CzJRP2UF.js","assets/bot-epLCshL3.js","assets/code-BVGHuBLd.js","assets/cpu-CSNLYMCL.js","assets/workflow-gTrArEQz.js","assets/GENFAQAd-CFY5s_hH.js","assets/help-circle-C0SesMdk.js","assets/rocket-h3XooJOg.js","assets/GENHeroAd-FcXONMel.js","assets/arrow-right-COSGXnLp.js","assets/GENIntroductionAd-BfPzZrze.js","assets/brain-Bedh6XrU.js","assets/target-8Ro_wdq-.js","assets/GENLearningJourneyAd-RhDRQpop.js","assets/calendar-BXdWzSE3.js","assets/chevron-left-C5nLQIJd.js","assets/chevron-right-BYL_NVX6.js","assets/cloud-BH-XHyRv.js","assets/book-open-DyCwi0Uy.js","assets/GENMarketScopeAd-Cdbszmbb.js","assets/trending-up-BHj2Nfro.js","assets/bar-chart-BPxdHO3b.js","assets/GENToolsYouWillLearnAd-DQ32nFsN.js","assets/wrench-B1jHU_k9.js","assets/video-C2t8YDqG.js","assets/GENWhoShouldEnrollAd-CnZtScts.js","assets/users-Qhcirw0s.js","assets/megaphone-BaLNAsCO.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DdVeCtn-.js";
import { H as HeaderEIE } from "./HeaderEIE-DkeOQrgA.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-D69arAE8.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-CFY5s_hH.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-FcXONMel.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-BfPzZrze.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-RhDRQpop.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-Cdbszmbb.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DQ32nFsN.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-CnZtScts.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
