const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-g1159r2a.js","assets/main-D1W_Gn8a.js","assets/main-CtI5RTA1.css","assets/EnrollmentModal-sWAI2odA.js","assets/enrollmentApi-CC778mEB.js","assets/metaPixel-B5VtgsBv.js","assets/index-Ds976zVw.js","assets/proxy-fmmV8hun.js","assets/sparkles-qs4iklQJ.js","assets/zap-BPyBL0JX.js","assets/bot-CEOQg0IF.js","assets/code-CkUh6sMa.js","assets/cpu-tH_gp986.js","assets/workflow-BH7O8hwD.js","assets/GENFAQAd-ekEIXiMj.js","assets/help-circle-Cs319QSv.js","assets/rocket-Bzy5IJOJ.js","assets/GENHeroAd-DllunNpV.js","assets/arrow-right-C1y_k2Nr.js","assets/GENIntroductionAd-DyAk6hRl.js","assets/brain-C5zfcyo7.js","assets/target-DgsxDFt_.js","assets/GENLearningJourneyAd-D83fXkYy.js","assets/calendar-DkiNL4i5.js","assets/chevron-left-BFuN2ekp.js","assets/chevron-right-CerKm3Hq.js","assets/cloud-DH0TS8kk.js","assets/book-open-D9g21TaP.js","assets/GENMarketScopeAd-CkMxl88U.js","assets/trending-up-DiRySWI1.js","assets/bar-chart-DOBdjBNq.js","assets/GENToolsYouWillLearnAd-CP90mEuE.js","assets/wrench-BoXdEAL-.js","assets/video-sDAqVdgX.js","assets/GENWhoShouldEnrollAd-DJqL1qRl.js","assets/users-CqKE-c12.js","assets/megaphone-Cq0ziKIt.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-D1W_Gn8a.js";
import { H as HeaderEIE } from "./HeaderEIE-DQzoDUjM.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-g1159r2a.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-ekEIXiMj.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-DllunNpV.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DyAk6hRl.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-D83fXkYy.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-CkMxl88U.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CP90mEuE.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-DJqL1qRl.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
