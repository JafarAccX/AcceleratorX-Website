const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-DPB-abXz.js","assets/main-DD2uCxhE.js","assets/main-ZJ57361l.css","assets/EnrollmentModal-zGH4Iqw0.js","assets/enrollmentApi-C5hvGDp9.js","assets/metaPixel-BHCHwNnL.js","assets/sparkles-RDpTcZw_.js","assets/zap-EDUS4sOf.js","assets/bot-CGHOAnF2.js","assets/code-DemUguKh.js","assets/cpu-Dp_rNE5E.js","assets/workflow-C4Fa_Krf.js","assets/GENFAQAd-BemudyLx.js","assets/help-circle-_YDCU4IW.js","assets/rocket-CQ24vrVl.js","assets/GENHeroAd-Dlaagq2L.js","assets/arrow-right-DKTHI5BW.js","assets/GENIntroductionAd-CZ-2QiC8.js","assets/brain-CpXfvn4B.js","assets/target-CgtNxCik.js","assets/GENLearningJourneyAd-CelWi-Wu.js","assets/calendar-C8_1IG9x.js","assets/chevron-left-D5QJ8XxX.js","assets/chevron-right-D8XYp0A4.js","assets/cloud-BjBftkJH.js","assets/book-open-RgGQM0vF.js","assets/GENMarketScopeAd-u4M7jEzZ.js","assets/trending-up-jtC0o5UD.js","assets/bar-chart-494nj1pk.js","assets/GENToolsYouWillLearnAd-DhI9iXst.js","assets/wrench-BIRNW83r.js","assets/video-PyljyOCK.js","assets/GENWhoShouldEnrollAd-B6vkSCWJ.js","assets/users-Ci7-1-Pr.js","assets/megaphone-DCs1ab4o.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DD2uCxhE.js";
import { H as HeaderEIE } from "./HeaderEIE-D7JsTUui.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-DPB-abXz.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BemudyLx.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-Dlaagq2L.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-CZ-2QiC8.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CelWi-Wu.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-u4M7jEzZ.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DhI9iXst.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-B6vkSCWJ.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
