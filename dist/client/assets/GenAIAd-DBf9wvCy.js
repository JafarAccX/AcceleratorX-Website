const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-Bmh-N0Cv.js","assets/main-CtSa0pDV.js","assets/main-g1H-mEfk.css","assets/EnrollmentModal-BetrdJkE.js","assets/enrollmentApi-Bp8HLVVn.js","assets/metaPixel-B-L5LvPr.js","assets/sparkles-C0Bi4R7U.js","assets/zap-Co14KSD-.js","assets/bot-DLcHwIPj.js","assets/code-RSCUup6O.js","assets/cpu-C1jYjcnQ.js","assets/workflow-BGhTIXuK.js","assets/GENFAQAd-zwT4SKov.js","assets/help-circle-B5I4IfAf.js","assets/rocket-CbO3Z3X1.js","assets/GENHeroAd-Ci2FPkOS.js","assets/arrow-right-BuG_kqA5.js","assets/GENIntroductionAd-RFZkniWS.js","assets/brain-DCFif0jG.js","assets/target-BSiIelI5.js","assets/GENLearningJourneyAd-DroBhyP4.js","assets/calendar-Bk3VFXtU.js","assets/chevron-left-De22uGEo.js","assets/chevron-right-BLgzeqdB.js","assets/cloud-CBquobLC.js","assets/book-open-BFQVRpgM.js","assets/GENMarketScopeAd-D193gp0M.js","assets/trending-up-CIiOaZ7l.js","assets/bar-chart-Cde_1MhZ.js","assets/GENToolsYouWillLearnAd-BMFotfdo.js","assets/wrench-BSPBNfx-.js","assets/video-Bwu_idDx.js","assets/GENWhoShouldEnrollAd-CuWdjVBA.js","assets/users-B4L4Or45.js","assets/megaphone-BusQx9yK.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CtSa0pDV.js";
import { H as HeaderEIE } from "./HeaderEIE-DMYTpH2-.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-Bmh-N0Cv.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-zwT4SKov.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-Ci2FPkOS.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-RFZkniWS.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-DroBhyP4.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-D193gp0M.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-BMFotfdo.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-CuWdjVBA.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
