const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-nZKQnSJq.js","assets/main-CP32HAa4.js","assets/main-nEWqamtX.css","assets/EnrollmentModal-R7uNzrCl.js","assets/enrollmentApi-l2DtmGNq.js","assets/metaPixel-D3cWzwgB.js","assets/sparkles-BNBVOeT_.js","assets/zap-mgE7XvGd.js","assets/bot-B-xi5xb0.js","assets/code-BMpayVRG.js","assets/cpu-BTLQM7WY.js","assets/workflow-BH4fLN-Z.js","assets/GENFAQAd-D1Rt21Ms.js","assets/help-circle-B88AlOKJ.js","assets/rocket-cZSfE2Dx.js","assets/GENHeroAd-CCcjKBkG.js","assets/arrow-right-DHms-NF2.js","assets/GENIntroductionAd-CKFfOFgv.js","assets/brain-DF9XZNui.js","assets/target-BqRCPlqb.js","assets/GENLearningJourneyAd-CYIumSJl.js","assets/calendar-Dqnhmsg9.js","assets/chevron-left-CfwOI4BU.js","assets/chevron-right-CImnKQMJ.js","assets/cloud-BvX3CWf2.js","assets/book-open-GDRY1sQE.js","assets/GENMarketScopeAd--dHIJF_x.js","assets/trending-up-D_qZZb2t.js","assets/bar-chart-BMyg7ePP.js","assets/GENToolsYouWillLearnAd-DFSAHOeQ.js","assets/wrench-DYiFEjoZ.js","assets/video-BA4mgOmC.js","assets/GENWhoShouldEnrollAd-D1SCMpBY.js","assets/users-C-jYIDu-.js","assets/megaphone-uJyPqfvn.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CP32HAa4.js";
import { H as HeaderEIE } from "./HeaderEIE-CIwkCC6-.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-nZKQnSJq.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-D1Rt21Ms.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CCcjKBkG.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-CKFfOFgv.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CYIumSJl.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd--dHIJF_x.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DFSAHOeQ.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-D1SCMpBY.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
