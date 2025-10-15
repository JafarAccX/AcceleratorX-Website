const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-CoNiPj_I.js","assets/main-B4fKdkON.js","assets/main-g1H-mEfk.css","assets/EnrollmentModal-D2m01WdS.js","assets/enrollmentApi-B1jTu0aM.js","assets/metaPixel-lWKDDURB.js","assets/sparkles-qz9XxLeC.js","assets/zap-X33XN5DN.js","assets/bot-DHJZUYul.js","assets/code-CZepgmhc.js","assets/cpu-BDPVW-Mn.js","assets/workflow-Cu3rnEws.js","assets/GENFAQAd-Crb0K9jt.js","assets/help-circle-Cl29tw-P.js","assets/rocket-BkfYvDoV.js","assets/GENHeroAd-k0Kj9qr7.js","assets/arrow-right-B74--tAJ.js","assets/GENIntroductionAd-Bid_VilK.js","assets/brain-D5H9Du8E.js","assets/target-CPA20l6x.js","assets/GENLearningJourneyAd-Cc54KZUb.js","assets/calendar-BsGSt4RN.js","assets/chevron-left-BBCXtjsy.js","assets/chevron-right-DFgoGTho.js","assets/cloud-Uj2Yw4Na.js","assets/book-open-CHttNh5C.js","assets/GENMarketScopeAd-CPjq7sl_.js","assets/trending-up-BfWQJZEU.js","assets/bar-chart-ojUESd7U.js","assets/GENToolsYouWillLearnAd-isLVK1uo.js","assets/wrench-BSjQgUTZ.js","assets/video-Cb9eRiKh.js","assets/GENWhoShouldEnrollAd-C2BYZycF.js","assets/users-CHx2807d.js","assets/megaphone-B3I-s1TX.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-B4fKdkON.js";
import { H as HeaderEIE } from "./HeaderEIE-BGIJYnt5.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-CoNiPj_I.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-Crb0K9jt.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-k0Kj9qr7.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-Bid_VilK.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-Cc54KZUb.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-CPjq7sl_.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-isLVK1uo.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-C2BYZycF.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
