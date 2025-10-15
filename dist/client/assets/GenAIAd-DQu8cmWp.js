const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-DPSK6f0E.js","assets/main-DG5q6AAQ.js","assets/main-g1H-mEfk.css","assets/EnrollmentModal-Bh3ndXDz.js","assets/enrollmentApi-BjAHi5X4.js","assets/metaPixel-DBVMiTFz.js","assets/sparkles-DXDl4XEs.js","assets/zap-BMF6w1en.js","assets/bot-mP77EJIQ.js","assets/code-Dgj3CvwV.js","assets/cpu-BcEKFqQP.js","assets/workflow-_Px7mzrf.js","assets/GENFAQAd-DaCB-su1.js","assets/help-circle-D5VHkQjh.js","assets/rocket-UNP-l0b9.js","assets/GENHeroAd-CbSXa-An.js","assets/arrow-right-DEAVGxQM.js","assets/GENIntroductionAd-CHqZAJVH.js","assets/brain-4HDxiWW4.js","assets/target-53ArRZhk.js","assets/GENLearningJourneyAd-CvhiqRXP.js","assets/calendar-DevARmTw.js","assets/chevron-left-DnjqD5pi.js","assets/chevron-right-DtCppmqf.js","assets/cloud-Bb4wC6iv.js","assets/book-open-C9bu6mLy.js","assets/GENMarketScopeAd-CBGnfYAK.js","assets/trending-up-CMFq43Jp.js","assets/bar-chart-D7czgnsP.js","assets/GENToolsYouWillLearnAd-CA-cU_0C.js","assets/wrench-iS-rwwdN.js","assets/video-DaCF4Zg4.js","assets/GENWhoShouldEnrollAd-DYXxg2KQ.js","assets/users-Bjgiecmn.js","assets/megaphone-n8DGvL5u.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DG5q6AAQ.js";
import { H as HeaderEIE } from "./HeaderEIE-CGlqiFM6.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-DPSK6f0E.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-DaCB-su1.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CbSXa-An.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-CHqZAJVH.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CvhiqRXP.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-CBGnfYAK.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CA-cU_0C.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-DYXxg2KQ.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
