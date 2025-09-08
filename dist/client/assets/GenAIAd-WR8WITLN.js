const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-Csx43l-g.js","assets/main-Ctt__ttU.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-Cuo9X1Eb.js","assets/enrollmentApi-dQOlnTeY.js","assets/metaPixel-B8ufuOhe.js","assets/index-ED9k-zp5.js","assets/proxy-B8iZIzY2.js","assets/sparkles-Cpz7CRSH.js","assets/zap-D-QeFQQU.js","assets/bot-BLtWXFtH.js","assets/code-CCAYRcyr.js","assets/cpu-FOjZOPPF.js","assets/workflow-Q_8DEgSd.js","assets/GENFAQAd-BthVX4x7.js","assets/help-circle-BiiiwD_W.js","assets/rocket-ClB4_MPg.js","assets/GENHeroAd-Doizg4fA.js","assets/arrow-right-CGRFgriO.js","assets/GENIntroductionAd-BKAv2eLl.js","assets/brain-D2XpMtYU.js","assets/target-DESc7MIT.js","assets/GENLearningJourneyAd-C7quk2Ju.js","assets/calendar-0H102ICT.js","assets/chevron-left-CIU2oBez.js","assets/chevron-right-BxBWCAxc.js","assets/cloud-BZCBm1Ip.js","assets/book-open-D4PT-A1k.js","assets/GENMarketScopeAd-4hDFRqqG.js","assets/trending-up-D4XOfrNb.js","assets/bar-chart-CFlRrmVO.js","assets/GENToolsYouWillLearnAd-D6nfLxpN.js","assets/wrench-CUOzUXze.js","assets/video-DbbTXCPz.js","assets/GENWhoShouldEnrollAd-DSA5Tq-c.js","assets/users-D8SaTqiS.js","assets/megaphone-C1yDaf58.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Ctt__ttU.js";
import { H as HeaderEIE } from "./HeaderEIE-CzLn5g7D.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-Csx43l-g.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BthVX4x7.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-Doizg4fA.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-BKAv2eLl.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-C7quk2Ju.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-4hDFRqqG.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-D6nfLxpN.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-DSA5Tq-c.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
