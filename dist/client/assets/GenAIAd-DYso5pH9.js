const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-BOM_CmDO.js","assets/main-BP2-o3HA.js","assets/main-g1H-mEfk.css","assets/EnrollmentModal-kxpu3ypA.js","assets/enrollmentApi-CC5EL50X.js","assets/metaPixel-T6CcSP6C.js","assets/sparkles-CKGGrpeX.js","assets/zap-BYgPeACe.js","assets/bot-CvKgLh5X.js","assets/code-D2f_LBsm.js","assets/cpu-t6eIUryt.js","assets/workflow-cejKHhMM.js","assets/GENFAQAd-aZ2VX7Zn.js","assets/help-circle-Cf4jXGYA.js","assets/rocket-CFjwMN3P.js","assets/GENHeroAd-CjOgDGXZ.js","assets/arrow-right-H3l7OrWI.js","assets/GENIntroductionAd-B7XqCaZf.js","assets/brain-B7-puipY.js","assets/target-CA195ruO.js","assets/GENLearningJourneyAd-COLigKtX.js","assets/calendar-DkVm0EJ2.js","assets/chevron-left-ZYyNFRSO.js","assets/chevron-right-COabRUyc.js","assets/cloud-W7HVCXbz.js","assets/book-open-DBxymLqF.js","assets/GENMarketScopeAd-DoafIs5e.js","assets/trending-up-DVdbW7DV.js","assets/bar-chart-DsOyUhec.js","assets/GENToolsYouWillLearnAd-BQd7_6L3.js","assets/wrench-CzEcVQk1.js","assets/video-DbKHkKlB.js","assets/GENWhoShouldEnrollAd-fXHBiM6m.js","assets/users-C-2WY11G.js","assets/megaphone-DJPfEr6k.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BP2-o3HA.js";
import { H as HeaderEIE } from "./HeaderEIE-B3KpqFfb.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-BOM_CmDO.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-aZ2VX7Zn.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CjOgDGXZ.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-B7XqCaZf.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-COLigKtX.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-DoafIs5e.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-BQd7_6L3.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-fXHBiM6m.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
