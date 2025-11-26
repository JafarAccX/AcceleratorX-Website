const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-DVvKvcIk.js","assets/main-BOGL_qrK.js","assets/main-Ce-Pe5sq.css","assets/EnrollmentModal-CdUYKDbj.js","assets/enrollmentApi-CLHUpnY0.js","assets/metaPixel-DF1g-LVJ.js","assets/sparkles-B2auZrPz.js","assets/zap-CWR9J8Ax.js","assets/bot-Bz8coC50.js","assets/code-YhEg-RT6.js","assets/cpu-2cv2qstT.js","assets/workflow-C4Y9-sIO.js","assets/GENFAQAd-Bm_UIlPX.js","assets/help-circle-BnM62mx5.js","assets/rocket-Ca09rEev.js","assets/GENHeroAd-B-_gf-N_.js","assets/arrow-right-CvJNNVH_.js","assets/GENIntroductionAd-ch1crw1w.js","assets/brain-BCYakrCh.js","assets/target-DcuxQLTt.js","assets/GENLearningJourneyAd-DrP42Jf9.js","assets/calendar-CQqI1QZg.js","assets/chevron-left-BGQqW9bM.js","assets/chevron-right-rm8MKJez.js","assets/cloud-C6FLzK_W.js","assets/book-open-D-1m06eI.js","assets/GENMarketScopeAd-oBSJNv37.js","assets/trending-up-BZXP2Zrg.js","assets/bar-chart-CveIFIj3.js","assets/GENToolsYouWillLearnAd-CpUowhSW.js","assets/wrench-DYLUOVEa.js","assets/video--jsaWcYO.js","assets/GENWhoShouldEnrollAd-CzJ1No_s.js","assets/users-Q75F72PU.js","assets/megaphone-BR3YoxjT.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BOGL_qrK.js";
import { H as HeaderEIE } from "./HeaderEIE-DrIyw910.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-DVvKvcIk.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-Bm_UIlPX.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-B-_gf-N_.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-ch1crw1w.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-DrP42Jf9.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-oBSJNv37.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CpUowhSW.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-CzJ1No_s.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
