const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-CAxzZ2s7.js","assets/main-xBPx3qIl.js","assets/main-BLt5Qm9-.css","assets/EnrollmentModal-B_c6jQWh.js","assets/enrollmentApi-BBPudnHx.js","assets/metaPixel-Dks3G9U_.js","assets/sparkles-BOS75ghu.js","assets/zap-_ZJchKdM.js","assets/bot-TkYTDetD.js","assets/code-ojsav8Fw.js","assets/cpu-BMOk7kfw.js","assets/workflow-bdPwZ_td.js","assets/GENFAQAd-BfPgvkx9.js","assets/help-circle-Eg5p2o54.js","assets/rocket-DNoy03qc.js","assets/GENHeroAd-DJAT10pz.js","assets/arrow-right-B14A2e2Y.js","assets/GENIntroductionAd-CRScBcSZ.js","assets/brain-4iRINFpu.js","assets/target-C2_-Bdj5.js","assets/GENLearningJourneyAd-h9ZJqpMM.js","assets/calendar-D7v22pLo.js","assets/chevron-left-CcfN32DM.js","assets/chevron-right-BmncnDc5.js","assets/cloud-C3Ohjz73.js","assets/book-open-Dd0X8U6d.js","assets/GENMarketScopeAd-BJTjJaTT.js","assets/trending-up-_w8a9LBp.js","assets/bar-chart-PS9E7u0E.js","assets/GENToolsYouWillLearnAd-CX2Z9SeH.js","assets/wrench-C8IwTER0.js","assets/video-yR_tfYbe.js","assets/GENWhoShouldEnrollAd-CDFjmyD-.js","assets/users-BUpqX7F3.js","assets/megaphone-BBh7gxkM.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-xBPx3qIl.js";
import { H as HeaderEIE } from "./HeaderEIE-CVF0dEn6.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-CAxzZ2s7.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BfPgvkx9.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-DJAT10pz.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-CRScBcSZ.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-h9ZJqpMM.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-BJTjJaTT.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CX2Z9SeH.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-CDFjmyD-.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
