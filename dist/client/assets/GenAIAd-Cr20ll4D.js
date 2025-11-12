const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-xQ_BY_ue.js","assets/main-CGjpSgqs.js","assets/main-BA_X0d1R.css","assets/EnrollmentModal-CToHe8wt.js","assets/enrollmentApi-JJnF_R-U.js","assets/metaPixel-DBp1CICo.js","assets/sparkles-CWMa4xnD.js","assets/zap-D_PRN0gM.js","assets/bot-BVCiI3Eo.js","assets/code-LrIVpuLa.js","assets/cpu-DP1HDcn0.js","assets/workflow-BaO_H7n_.js","assets/GENFAQAd-CNd-Nn6H.js","assets/help-circle-vLms4nZ-.js","assets/rocket-CVfwbrSD.js","assets/GENHeroAd-pVJLyiIg.js","assets/arrow-right-CnMX7ePu.js","assets/GENIntroductionAd-BkL3THgV.js","assets/brain-D4FvYSwo.js","assets/target-DmaZiOMi.js","assets/GENLearningJourneyAd-CZkqPJbv.js","assets/calendar--SFDD-BK.js","assets/chevron-left-B1gqImyN.js","assets/chevron-right-Y7rFs2mh.js","assets/cloud-aPOe_Xlo.js","assets/book-open-v718Wypy.js","assets/GENMarketScopeAd-BhQQLnOC.js","assets/trending-up-CVMupF68.js","assets/bar-chart-COz59fA1.js","assets/GENToolsYouWillLearnAd-TeQDJo49.js","assets/wrench-CR1QYWLL.js","assets/video-Ceq5Fdih.js","assets/GENWhoShouldEnrollAd-DmTb0_l7.js","assets/users-BvpwDrmv.js","assets/megaphone-CCq5vuhC.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CGjpSgqs.js";
import { H as HeaderEIE } from "./HeaderEIE-Bz_3cDOQ.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-xQ_BY_ue.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-CNd-Nn6H.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-pVJLyiIg.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-BkL3THgV.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CZkqPJbv.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-BhQQLnOC.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-TeQDJo49.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-DmTb0_l7.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
