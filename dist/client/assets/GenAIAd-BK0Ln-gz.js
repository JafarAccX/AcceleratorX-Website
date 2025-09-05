const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-DBd4N8uj.js","assets/main-DUtAh55Z.js","assets/main-BWS2aYUX.css","assets/EnrollmentModal-BEG1oj57.js","assets/enrollmentApi-Da6Jehr4.js","assets/metaPixel-5Iv-ywSE.js","assets/index-Bf4wyDJA.js","assets/proxy-D90nfG6D.js","assets/sparkles-Dlx-4Lt3.js","assets/zap-BYogRbgv.js","assets/bot-C7AcJYit.js","assets/code-_gOcxhVT.js","assets/cpu-Dr1wRPpq.js","assets/workflow-trpFPI3O.js","assets/GENFAQAd-BpS-xYT2.js","assets/help-circle-ZNqL1jOj.js","assets/rocket-BDYKnOr_.js","assets/GENHeroAd-CsN9bj6q.js","assets/arrow-right-CGUkbaPw.js","assets/GENIntroductionAd-DXPnwbA1.js","assets/brain-D7Z6FEaN.js","assets/target-Bp6_gJhm.js","assets/GENLearningJourneyAd-CJqO9Ma4.js","assets/calendar-DXCDo20k.js","assets/chevron-left-f_God1EU.js","assets/chevron-right-Dgu5MJRW.js","assets/cloud-CxNsFMhA.js","assets/book-open-LSas7f6n.js","assets/GENMarketScopeAd-CJOgnGB9.js","assets/trending-up-B2LPykMU.js","assets/bar-chart-BlbnGhfz.js","assets/GENToolsYouWillLearnAd-CPQr0FN8.js","assets/wrench-CTxAl2iR.js","assets/video-BEz_rfPj.js","assets/GENWhoShouldEnrollAd-GQYa5K9y.js","assets/users-BliTtv7q.js","assets/megaphone-CeGET0v0.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DUtAh55Z.js";
import { H as HeaderEIE } from "./HeaderEIE-BbUXJFRy.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-DBd4N8uj.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BpS-xYT2.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CsN9bj6q.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DXPnwbA1.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CJqO9Ma4.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-CJOgnGB9.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CPQr0FN8.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-GQYa5K9y.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
