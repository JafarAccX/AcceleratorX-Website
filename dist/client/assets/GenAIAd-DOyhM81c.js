const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-BZdkwvQv.js","assets/main-CRd4IIg_.js","assets/main-nhAxMPX_.css","assets/EnrollmentModal-BqPo0y01.js","assets/enrollmentApi-DIFaLmLA.js","assets/metaPixel-Bemim1W9.js","assets/sparkles-C41hF9U2.js","assets/zap-qQtjn8w0.js","assets/bot-BFMr6c-I.js","assets/code-CuYNHe4j.js","assets/cpu-OsE1m3Ij.js","assets/workflow-Dx5tSABW.js","assets/GENFAQAd-CKualLxR.js","assets/help-circle-Ic7WbolM.js","assets/rocket-sshKAtOD.js","assets/GENHeroAd-BGmHhD-b.js","assets/arrow-right-BpFbBQ17.js","assets/GENIntroductionAd-DpQ-2CC8.js","assets/brain-C8d6tup-.js","assets/target-B2dI8Z_e.js","assets/GENLearningJourneyAd-D40nCnvq.js","assets/calendar-IKxKakUc.js","assets/chevron-left-39sYV2Vc.js","assets/chevron-right-DX7iWDlK.js","assets/cloud-CSpvVB_o.js","assets/book-open-D4UhIaMq.js","assets/GENMarketScopeAd-CpFJhRcr.js","assets/trending-up-ypHz7ER2.js","assets/bar-chart-IFpB4pqC.js","assets/GENToolsYouWillLearnAd-DTWyU3Hn.js","assets/wrench-Bss0YPN2.js","assets/video-TlPvmFhx.js","assets/GENWhoShouldEnrollAd-DPJC3XjA.js","assets/users-zBzdCp9r.js","assets/megaphone-Cr9tL7Gu.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CRd4IIg_.js";
import { H as HeaderEIE } from "./HeaderEIE-Bi5_mUDP.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-BZdkwvQv.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-CKualLxR.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-BGmHhD-b.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DpQ-2CC8.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-D40nCnvq.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-CpFJhRcr.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DTWyU3Hn.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-DPJC3XjA.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
