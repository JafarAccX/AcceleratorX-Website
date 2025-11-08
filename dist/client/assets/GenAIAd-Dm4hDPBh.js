const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-fjXBJ_1g.js","assets/main-pPMPSF4E.js","assets/main-BLt5Qm9-.css","assets/EnrollmentModal-Bfd3L0vN.js","assets/enrollmentApi-sA0V8bFm.js","assets/metaPixel-DzY0zvt3.js","assets/sparkles-CJ4W1Ojf.js","assets/zap-D_y_tixN.js","assets/bot-BVEcBoeQ.js","assets/code-0Z-BingE.js","assets/cpu-C3WkzYL6.js","assets/workflow-CZ-JIh71.js","assets/GENFAQAd-C5mtPIH7.js","assets/help-circle-BneWEGl6.js","assets/rocket-B0JZKEDJ.js","assets/GENHeroAd-D5NOJwM-.js","assets/arrow-right-C1P5bEga.js","assets/GENIntroductionAd-2KMk1-kC.js","assets/brain-DjFRQKIF.js","assets/target-DM8EY5qb.js","assets/GENLearningJourneyAd-CxfZh8cl.js","assets/calendar-D50TpGnI.js","assets/chevron-left-CaJEFJOn.js","assets/chevron-right-CR4klaUw.js","assets/cloud-BloG1bbP.js","assets/book-open-CicP61Nf.js","assets/GENMarketScopeAd-CPbWFbQ5.js","assets/trending-up-VHz7wmQf.js","assets/bar-chart-Dx6v4FFa.js","assets/GENToolsYouWillLearnAd-B6U8vb7D.js","assets/wrench--vudEWTx.js","assets/video-vhqeiL0S.js","assets/GENWhoShouldEnrollAd-CoSpOpvj.js","assets/users-8QxDqiIW.js","assets/megaphone-bm2hARiF.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-pPMPSF4E.js";
import { H as HeaderEIE } from "./HeaderEIE-CpgI9CCh.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-fjXBJ_1g.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-C5mtPIH7.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-D5NOJwM-.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-2KMk1-kC.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CxfZh8cl.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-CPbWFbQ5.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-B6U8vb7D.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-CoSpOpvj.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
