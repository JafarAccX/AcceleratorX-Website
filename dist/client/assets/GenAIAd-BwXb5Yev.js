const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-D-mkKSps.js","assets/main-Ct9V9NA-.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-BmEwUbmd.js","assets/enrollmentApi-CWz3pxgi.js","assets/metaPixel-DOoJxazD.js","assets/index-TfPTM_co.js","assets/proxy-ClgBuM4B.js","assets/sparkles-Df40FTe1.js","assets/zap-DR89ksTn.js","assets/bot-CkIY7Rxx.js","assets/code-BqSHf-ma.js","assets/cpu-Cp-Dzw6U.js","assets/workflow-DH011Yc6.js","assets/GENFAQAd-eMIeiuND.js","assets/help-circle-CNUFDr2M.js","assets/rocket-B_4mmb4k.js","assets/GENHeroAd-Cm2vahv1.js","assets/arrow-right-Da_mgZbD.js","assets/GENIntroductionAd-DBFxVtsq.js","assets/brain-DUrreK72.js","assets/target-Q8VYIfo8.js","assets/GENLearningJourneyAd-DyIOeezj.js","assets/calendar-BNm0bXQ_.js","assets/chevron-left-BJB3tQFm.js","assets/chevron-right-BRjrNkYP.js","assets/cloud-Dc2fn4JU.js","assets/book-open-CPLN53ef.js","assets/GENMarketScopeAd-CGd4ukD_.js","assets/trending-up-B90gEob-.js","assets/bar-chart-Crnw2qNl.js","assets/GENToolsYouWillLearnAd-B13xRbE9.js","assets/wrench-IrBVXiUf.js","assets/video-By_ZOQ1P.js","assets/GENWhoShouldEnrollAd-8iqtJsn_.js","assets/users-BvbW8Gje.js","assets/megaphone-BP83iMgY.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Ct9V9NA-.js";
import { H as HeaderEIE } from "./HeaderEIE-DmIk7RHZ.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-D-mkKSps.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-eMIeiuND.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-Cm2vahv1.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DBFxVtsq.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-DyIOeezj.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-CGd4ukD_.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-B13xRbE9.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-8iqtJsn_.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
