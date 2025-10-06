const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-Cy4BcnWo.js","assets/main-CQZRSQfQ.js","assets/main-ClQXKXUm.css","assets/EnrollmentModal-kIl_IML_.js","assets/enrollmentApi-JK_WiLhq.js","assets/metaPixel-BPrv2gAs.js","assets/sparkles-BT5ASgS0.js","assets/zap-DlQUUmLb.js","assets/bot-qsILBGhK.js","assets/code-pBrBqGlb.js","assets/cpu-C_bv9Q9f.js","assets/workflow-DI6kzZyG.js","assets/GENFAQAd-Dx7qvFCM.js","assets/help-circle-D1iB0hbQ.js","assets/rocket-o1zTBCUr.js","assets/GENHeroAd-D_Q0XfQO.js","assets/arrow-right-D3aRQQIV.js","assets/GENIntroductionAd-DwbygZ59.js","assets/brain-BCL-JS2Q.js","assets/target-C5rFwECh.js","assets/GENLearningJourneyAd-BusgnKkZ.js","assets/calendar-C0KuiXTY.js","assets/chevron-left-C_gkvWEA.js","assets/chevron-right-B29yWSSx.js","assets/cloud-B0MJMcuF.js","assets/book-open-D5GraKyV.js","assets/GENMarketScopeAd-D1LrBzuE.js","assets/trending-up-EA7ntbVb.js","assets/bar-chart-CxcpZClc.js","assets/GENToolsYouWillLearnAd-CUaognpV.js","assets/wrench-wKEi8kdS.js","assets/video-BNz5vdJT.js","assets/GENWhoShouldEnrollAd-BxiFdHOI.js","assets/users-7HEfShSi.js","assets/megaphone-C5FGQTNZ.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CQZRSQfQ.js";
import { H as HeaderEIE } from "./HeaderEIE-B8F1_5G-.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-Cy4BcnWo.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-Dx7qvFCM.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-D_Q0XfQO.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DwbygZ59.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-BusgnKkZ.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-D1LrBzuE.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CUaognpV.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-BxiFdHOI.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
