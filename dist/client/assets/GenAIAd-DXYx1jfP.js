const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-uHfLUBkV.js","assets/main-apVAGIEz.js","assets/main-nEWqamtX.css","assets/EnrollmentModal-NBJZFvyB.js","assets/enrollmentApi-BXTrkYJe.js","assets/metaPixel-WRohloNB.js","assets/sparkles-DIflAKsc.js","assets/zap-DdgCZd0W.js","assets/bot-BpPolWhm.js","assets/code-BWGBwI-3.js","assets/cpu-CQgeYgkB.js","assets/workflow-B0SUN83Y.js","assets/GENFAQAd-CBNmGX2U.js","assets/help-circle-o3R-mTF-.js","assets/rocket-CqPZNJC7.js","assets/GENHeroAd-CJjrQ4gv.js","assets/arrow-right-QTJ55GDf.js","assets/GENIntroductionAd-CgJ5etQx.js","assets/brain-CqQkvrar.js","assets/target-CpH3DgRF.js","assets/GENLearningJourneyAd-B1F_Q8Dy.js","assets/calendar-DF7RDRvc.js","assets/chevron-left-Cz_ISR37.js","assets/chevron-right-D5uwklNx.js","assets/cloud-VBhQckWO.js","assets/book-open-ChhiEV4e.js","assets/GENMarketScopeAd-DsLuayHg.js","assets/trending-up-DOJcrlNU.js","assets/bar-chart-BvsbQMac.js","assets/GENToolsYouWillLearnAd-B22USflu.js","assets/wrench-O1zhHJd9.js","assets/video-B0Pr2Ho1.js","assets/GENWhoShouldEnrollAd-CMLngFjr.js","assets/users-yP3zdLGz.js","assets/megaphone-RlMwxgBw.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-apVAGIEz.js";
import { H as HeaderEIE } from "./HeaderEIE-BcYuUB20.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-uHfLUBkV.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-CBNmGX2U.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CJjrQ4gv.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-CgJ5etQx.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-B1F_Q8Dy.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-DsLuayHg.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-B22USflu.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-CMLngFjr.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
