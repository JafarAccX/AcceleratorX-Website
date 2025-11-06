const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-CnaOK80D.js","assets/main-B8okaWNI.js","assets/main-nhAxMPX_.css","assets/EnrollmentModal-BXjAQvvZ.js","assets/enrollmentApi-bNQ7AXLh.js","assets/metaPixel-dipZhJtg.js","assets/sparkles-Bof2uiXK.js","assets/zap-CnpPAUyI.js","assets/bot-CJDxidO8.js","assets/code-bfvdOC_H.js","assets/cpu-wKl7xXyB.js","assets/workflow-Bp-m7Pu9.js","assets/GENFAQAd-De8pC9dG.js","assets/help-circle-YHNoQqiI.js","assets/rocket-CFakGA3h.js","assets/GENHeroAd-B0zylz4r.js","assets/arrow-right-BzHGCVTL.js","assets/GENIntroductionAd-CSJV453l.js","assets/brain-BVGrKkeh.js","assets/target-Bk59goWz.js","assets/GENLearningJourneyAd-3iHU3A2X.js","assets/calendar-DqfiM2aK.js","assets/chevron-left-DTqtPwgG.js","assets/chevron-right-U85hUilz.js","assets/cloud-BhLI-WjB.js","assets/book-open-WLXlk6Tg.js","assets/GENMarketScopeAd-C1jy8Rem.js","assets/trending-up-BmMdM4cx.js","assets/bar-chart-CCMk2BYA.js","assets/GENToolsYouWillLearnAd-CYS70E78.js","assets/wrench-V5sjh19w.js","assets/video-Da4TJV_X.js","assets/GENWhoShouldEnrollAd-_9xY0Stu.js","assets/users-b9wcZXax.js","assets/megaphone-Bcs00voh.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-B8okaWNI.js";
import { H as HeaderEIE } from "./HeaderEIE-BCY7pvK1.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-CnaOK80D.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-De8pC9dG.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-B0zylz4r.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-CSJV453l.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-3iHU3A2X.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-C1jy8Rem.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CYS70E78.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-_9xY0Stu.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
