const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-B3PLIfG_.js","assets/main-CYXtjh6i.js","assets/main-ClQXKXUm.css","assets/EnrollmentModal-DcnBQ-EC.js","assets/enrollmentApi-JNGmvjgr.js","assets/metaPixel-CmtfEEd5.js","assets/sparkles-D_ZG3JCV.js","assets/zap-BBkIqOTH.js","assets/bot-PK97ThGx.js","assets/code-DzU8Y4tu.js","assets/cpu-DZWn7DFF.js","assets/workflow-Cd9I4cmO.js","assets/GENFAQAd-BM47Svec.js","assets/help-circle-Cadosd6h.js","assets/rocket-mdWlK2c8.js","assets/GENHeroAd-Cgy8AKhp.js","assets/arrow-right-DZfVus5g.js","assets/GENIntroductionAd-DxB-cJfw.js","assets/brain-CXUDEVph.js","assets/target-rHRz09al.js","assets/GENLearningJourneyAd-DyvK8MC0.js","assets/calendar-DZiZ5YW5.js","assets/chevron-left-CSVMtdIA.js","assets/chevron-right-C5gdN4wc.js","assets/cloud-X9-Zi0-J.js","assets/book-open-CzoRnbTa.js","assets/GENMarketScopeAd-BVBicVK5.js","assets/trending-up-h3x1wrQ3.js","assets/bar-chart-DYfEVFYA.js","assets/GENToolsYouWillLearnAd-Bqra8KHT.js","assets/wrench-DahZz1pR.js","assets/video-DrXxktFY.js","assets/GENWhoShouldEnrollAd-Cnm3v1IZ.js","assets/users-CdcQY_SG.js","assets/megaphone-DSXMtZhT.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CYXtjh6i.js";
import { H as HeaderEIE } from "./HeaderEIE-UO4YLgMy.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-B3PLIfG_.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BM47Svec.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-Cgy8AKhp.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DxB-cJfw.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-DyvK8MC0.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-BVBicVK5.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-Bqra8KHT.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-Cnm3v1IZ.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
