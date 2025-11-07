const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-Xtd0qJv1.js","assets/main-DqI0tNcP.js","assets/main-nhAxMPX_.css","assets/EnrollmentModal-Bd_d5ph1.js","assets/enrollmentApi-UxUP1Br3.js","assets/metaPixel-CMZVS1e9.js","assets/sparkles-zZFSSYcs.js","assets/zap-CF2NgjKX.js","assets/bot-B65RZaXN.js","assets/code-Xg4cVi1Z.js","assets/cpu-C4_VdMel.js","assets/workflow-D-VlMRlu.js","assets/GENFAQAd-BEJWnAUw.js","assets/help-circle-DRHRQEMO.js","assets/rocket-Dcmmq-FZ.js","assets/GENHeroAd-C6MN5oTx.js","assets/arrow-right-BEhBxCEt.js","assets/GENIntroductionAd-BikXRabu.js","assets/brain-BJeSlhWd.js","assets/target-BcFTh9mG.js","assets/GENLearningJourneyAd-BmnMq4HA.js","assets/calendar-DTFyCZLh.js","assets/chevron-left-gizmYlk4.js","assets/chevron-right-ysSUekOL.js","assets/cloud-C78Rxr6e.js","assets/book-open-D2RXVj1Z.js","assets/GENMarketScopeAd--trcejYs.js","assets/trending-up-B5-dSmkd.js","assets/bar-chart-BbQTKQBz.js","assets/GENToolsYouWillLearnAd-DNY9uv0e.js","assets/wrench-BOahTicO.js","assets/video-CDGx8pc_.js","assets/GENWhoShouldEnrollAd-Drg9ycGJ.js","assets/users-cGmeqCbL.js","assets/megaphone-BKX-rC67.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DqI0tNcP.js";
import { H as HeaderEIE } from "./HeaderEIE-8RiEWQa9.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-Xtd0qJv1.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BEJWnAUw.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-C6MN5oTx.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-BikXRabu.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-BmnMq4HA.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd--trcejYs.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DNY9uv0e.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-Drg9ycGJ.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
