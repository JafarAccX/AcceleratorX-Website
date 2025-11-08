const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-DkHdiVpy.js","assets/main-Bmt1QOda.js","assets/main-BLt5Qm9-.css","assets/EnrollmentModal-CqEnZ3W7.js","assets/enrollmentApi-Cv-2bLJj.js","assets/metaPixel-D9pPvDgM.js","assets/sparkles-C8pfOgo4.js","assets/zap-hAj5C_cw.js","assets/bot-vMpPNUUz.js","assets/code-DWdF39zN.js","assets/cpu-CvNX_yc-.js","assets/workflow-CS1Gtibo.js","assets/GENFAQAd-DwWdWiLy.js","assets/help-circle-BfiEXcTX.js","assets/rocket-DhDBiDNt.js","assets/GENHeroAd-DCQ_P6lJ.js","assets/arrow-right-D85t5K-A.js","assets/GENIntroductionAd-B_MUZsx9.js","assets/brain-DI5owN3Y.js","assets/target-gz-LBzuC.js","assets/GENLearningJourneyAd-BZ_t8MSJ.js","assets/calendar-D6SFYm9H.js","assets/chevron-left-DQua51v5.js","assets/chevron-right-C6NY_vJ9.js","assets/cloud-C_5GP6wc.js","assets/book-open-BqEgyqCV.js","assets/GENMarketScopeAd-DGNf2Sv5.js","assets/trending-up-B6uKflDy.js","assets/bar-chart-D7xT4aKg.js","assets/GENToolsYouWillLearnAd-BdfukKaU.js","assets/wrench-ChLvvhq8.js","assets/video-Cz20hEXz.js","assets/GENWhoShouldEnrollAd-hvVHoYuz.js","assets/users-CzPqlutS.js","assets/megaphone-BXXSNox6.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bmt1QOda.js";
import { H as HeaderEIE } from "./HeaderEIE-DpIj5zyH.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-DkHdiVpy.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-DwWdWiLy.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-DCQ_P6lJ.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-B_MUZsx9.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-BZ_t8MSJ.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-DGNf2Sv5.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-BdfukKaU.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-hvVHoYuz.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
