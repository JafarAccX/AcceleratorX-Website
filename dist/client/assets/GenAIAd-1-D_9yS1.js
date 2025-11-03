const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-4wfbiZUe.js","assets/main-WA_0Fhhs.js","assets/main-ZJ57361l.css","assets/EnrollmentModal-LPZC0Pif.js","assets/enrollmentApi-BN4yZFw0.js","assets/metaPixel-D-2Rwuz7.js","assets/sparkles-DkMfZ_lg.js","assets/zap-DsDmKoO1.js","assets/bot-BHWrn5Ad.js","assets/code-RvOti1k2.js","assets/cpu-CNCAhaCk.js","assets/workflow-DwhJmMYA.js","assets/GENFAQAd-CrWqVpaM.js","assets/help-circle-DrhjPRNY.js","assets/rocket-BvAqB1qD.js","assets/GENHeroAd-DmjQp2i3.js","assets/arrow-right-CeWL_7zL.js","assets/GENIntroductionAd-SpdXB2aK.js","assets/brain-DaTxA2sq.js","assets/target-DFrLaXxK.js","assets/GENLearningJourneyAd-BD5Lj5dl.js","assets/calendar-Rw8eZq-_.js","assets/chevron-left-DdVM4V7O.js","assets/chevron-right-ClPm6cpA.js","assets/cloud-s2I-EvPM.js","assets/book-open-CH7gdj4H.js","assets/GENMarketScopeAd-BRTFydqu.js","assets/trending-up-CU8NaiDK.js","assets/bar-chart-B1ESxWdT.js","assets/GENToolsYouWillLearnAd-DvIgE4-f.js","assets/wrench-BPFvioa8.js","assets/video-BRBfTVu_.js","assets/GENWhoShouldEnrollAd-JGZ1kR9N.js","assets/users-tUZnxyVJ.js","assets/megaphone-BiLskU9P.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-WA_0Fhhs.js";
import { H as HeaderEIE } from "./HeaderEIE-B3GlKfjO.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-4wfbiZUe.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-CrWqVpaM.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-DmjQp2i3.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-SpdXB2aK.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-BD5Lj5dl.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-BRTFydqu.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DvIgE4-f.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-JGZ1kR9N.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
