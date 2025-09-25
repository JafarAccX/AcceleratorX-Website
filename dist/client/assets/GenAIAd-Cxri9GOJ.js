const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-BJe1MTeu.js","assets/main-Bu4yalNQ.js","assets/main-7GdIFNw8.css","assets/EnrollmentModal-MIBgwbs0.js","assets/enrollmentApi-CGZgs_PB.js","assets/metaPixel-CdKfm6V_.js","assets/index-BpgLIKka.js","assets/proxy-BfxRfs7x.js","assets/sparkles-D6qxncQg.js","assets/zap-C00tZCJg.js","assets/bot-BlBW47o8.js","assets/code-BPh2QpBO.js","assets/cpu-B1N6rOox.js","assets/workflow-e-DCZu0G.js","assets/GENFAQAd-BVSrtF8E.js","assets/help-circle-CpFZfYTb.js","assets/rocket-AON9BfmU.js","assets/GENHeroAd-UpQChlC3.js","assets/arrow-right-lGly2fuJ.js","assets/GENIntroductionAd-X6LqMzbP.js","assets/brain-BpLzX04c.js","assets/target-gFUpM69y.js","assets/GENLearningJourneyAd-BdY2q_OO.js","assets/calendar-D9PdzLaI.js","assets/chevron-left-C6haPlm5.js","assets/chevron-right-BDmxFHMF.js","assets/cloud-BYO6MNJI.js","assets/book-open-ChIiAHJr.js","assets/GENMarketScopeAd-D7zf5TND.js","assets/trending-up-B-qLdDGZ.js","assets/bar-chart-CfSDH6g2.js","assets/GENToolsYouWillLearnAd-DEu0HDLz.js","assets/wrench-CscE0Hab.js","assets/video-fahYQfrt.js","assets/GENWhoShouldEnrollAd-BjtYvbVU.js","assets/users-CYlrTQWo.js","assets/megaphone-Dn6aPXOK.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bu4yalNQ.js";
import { H as HeaderEIE } from "./HeaderEIE-DWWDQum4.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-BJe1MTeu.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BVSrtF8E.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-UpQChlC3.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-X6LqMzbP.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-BdY2q_OO.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-D7zf5TND.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DEu0HDLz.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-BjtYvbVU.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
