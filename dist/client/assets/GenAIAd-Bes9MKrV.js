const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-Du4mD_gw.js","assets/main-CDOtXgRK.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-DHviGivP.js","assets/enrollmentApi-BuoFCBop.js","assets/metaPixel-1xEVgtRZ.js","assets/index-BUDb52xN.js","assets/proxy-VHxN6sQO.js","assets/sparkles-CEFwGUcg.js","assets/zap-A5aN5Z6H.js","assets/bot-DgCIlZXm.js","assets/code-CzBYlLQe.js","assets/cpu-BTgNW8zW.js","assets/workflow-BkZ3rSj-.js","assets/GENFAQAd-BzMrD9bp.js","assets/help-circle-D5jNENrG.js","assets/rocket-CBTTiCqr.js","assets/GENHeroAd-CZNSaaUN.js","assets/arrow-right-DWucD8MN.js","assets/GENIntroductionAd-Clmdnyy5.js","assets/brain-Bhfl-C4H.js","assets/target-P8IVNqNY.js","assets/GENLearningJourneyAd-CYETKh-w.js","assets/calendar-BG_hXOnc.js","assets/chevron-left-DMVL-3Lh.js","assets/chevron-right--hi4op9e.js","assets/cloud-DUH0_sI-.js","assets/book-open-Gh1p1b2V.js","assets/GENMarketScopeAd-MzMMiyY4.js","assets/trending-up-Cx0gYCc4.js","assets/bar-chart-DlTVXPWY.js","assets/GENToolsYouWillLearnAd-BIJvUaYc.js","assets/wrench-jfwNUUhT.js","assets/video-BUWB31mw.js","assets/GENWhoShouldEnrollAd-CwFuenVy.js","assets/users-Bh6wAZTC.js","assets/megaphone-DMl4nqIP.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CDOtXgRK.js";
import { H as HeaderEIE } from "./HeaderEIE-ChPtdFG3.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-Du4mD_gw.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BzMrD9bp.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CZNSaaUN.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-Clmdnyy5.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CYETKh-w.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-MzMMiyY4.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-BIJvUaYc.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-CwFuenVy.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
