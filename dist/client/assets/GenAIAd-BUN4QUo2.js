const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-CunYrRuA.js","assets/main-B74a7APh.js","assets/main-g1H-mEfk.css","assets/EnrollmentModal-Bv8tNPrU.js","assets/enrollmentApi-CthJO1r6.js","assets/metaPixel-Dp8i02x8.js","assets/sparkles-Q5CS5JRq.js","assets/zap-B2fuiluD.js","assets/bot-C4wLUOkG.js","assets/code-DcdZpBx7.js","assets/cpu-B4T0WfD3.js","assets/workflow-CuwnoIeo.js","assets/GENFAQAd-vYu3U8hg.js","assets/help-circle-Czsk_RwM.js","assets/rocket-CjPAEuWW.js","assets/GENHeroAd-65H8p6tr.js","assets/arrow-right-tniEZtWn.js","assets/GENIntroductionAd-rbuDcqlg.js","assets/brain-CZgV0OuH.js","assets/target-CCzrU2-5.js","assets/GENLearningJourneyAd-CQsg18qr.js","assets/calendar-gwPLYxTN.js","assets/chevron-left-F6I9LlKS.js","assets/chevron-right-Btks6KjZ.js","assets/cloud-DojDsvkX.js","assets/book-open-C1jLtiun.js","assets/GENMarketScopeAd-CqXBBxNF.js","assets/trending-up-Byp6hbeH.js","assets/bar-chart-DHF7qXs4.js","assets/GENToolsYouWillLearnAd-C6s6tQlD.js","assets/wrench-BRClmxuh.js","assets/video-DLJuKXHD.js","assets/GENWhoShouldEnrollAd-mLlo1wkk.js","assets/users-Ct7CPHI4.js","assets/megaphone-DS6ZgksM.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-B74a7APh.js";
import { H as HeaderEIE } from "./HeaderEIE-NQRMl6ZU.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-CunYrRuA.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-vYu3U8hg.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-65H8p6tr.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-rbuDcqlg.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CQsg18qr.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-CqXBBxNF.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-C6s6tQlD.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-mLlo1wkk.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
