const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-SOC7jCPl.js","assets/main-DoR0yzTf.js","assets/main-BA_X0d1R.css","assets/EnrollmentModal-BJFCvW-k.js","assets/enrollmentApi-Czu3zfpV.js","assets/metaPixel-Cn55y1S8.js","assets/sparkles-Dy6JYYsx.js","assets/zap-CH0WMgm_.js","assets/bot-CoCMClLN.js","assets/code-DCIuseyS.js","assets/cpu-DD1T27Lc.js","assets/workflow-DR1C6Dbo.js","assets/GENFAQAd-w5lu9oeV.js","assets/help-circle-BxKlk2LS.js","assets/rocket-Bb_JXPql.js","assets/GENHeroAd-CniCuQCg.js","assets/arrow-right-CYvEolre.js","assets/GENIntroductionAd-DlIZuv21.js","assets/brain-M9JLjWxD.js","assets/target-SCJSZVIU.js","assets/GENLearningJourneyAd-CiEgWBv5.js","assets/calendar-aDIjnC3V.js","assets/chevron-left-OgaFGgLN.js","assets/chevron-right-vbiQ1XkW.js","assets/cloud-Dxks4M9K.js","assets/book-open-CfMqC8ry.js","assets/GENMarketScopeAd-C3bSRx52.js","assets/trending-up-CoyTd350.js","assets/bar-chart-DYUNazVI.js","assets/GENToolsYouWillLearnAd-BiZCh1Nk.js","assets/wrench-PxzGmq2N.js","assets/video-D3eS4JVR.js","assets/GENWhoShouldEnrollAd-cyyzx2NS.js","assets/users-B-O3Tmh3.js","assets/megaphone-CzSWSjac.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DoR0yzTf.js";
import { H as HeaderEIE } from "./HeaderEIE-DEEO-wsC.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-SOC7jCPl.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-w5lu9oeV.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CniCuQCg.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DlIZuv21.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CiEgWBv5.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-C3bSRx52.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-BiZCh1Nk.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-cyyzx2NS.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
