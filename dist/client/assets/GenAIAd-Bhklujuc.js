const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-CFQsVcvJ.js","assets/main-BxH0ZrLt.js","assets/main-Ctc2Wiva.css","assets/EnrollmentModal-pj7LRBsK.js","assets/enrollmentApi-BBm2zrfI.js","assets/metaPixel-DOCDtUNC.js","assets/index-Dhyh9cgl.js","assets/proxy-BUnDe0Le.js","assets/sparkles-BKRmzcVa.js","assets/zap-CUH2xpbQ.js","assets/bot-DrZBrX-T.js","assets/code-CTMs_HFe.js","assets/cpu-Ds2i682N.js","assets/workflow-CLysRtmo.js","assets/GENFAQAd-Wy_-M9m_.js","assets/help-circle-Cid3IrvU.js","assets/rocket-Crtz7pC_.js","assets/GENHeroAd-DkG23DrX.js","assets/arrow-right-oQSgCAEl.js","assets/GENIntroductionAd-DGILZSN0.js","assets/brain-BAMFLeq5.js","assets/target-8Ou0ok0u.js","assets/GENLearningJourneyAd-BJgvoobW.js","assets/calendar-2jwpG6wO.js","assets/chevron-left-O-g2uMf7.js","assets/chevron-right-CVKctcv6.js","assets/cloud-Djw2Xj5N.js","assets/book-open-BK1RC8yJ.js","assets/GENMarketScopeAd-C0lOj7U1.js","assets/trending-up-UwKAsKhu.js","assets/bar-chart-DScN7EdQ.js","assets/GENToolsYouWillLearnAd-P5JEAV7t.js","assets/wrench-zxCi4_l1.js","assets/video-s9GLfinE.js","assets/GENWhoShouldEnrollAd-CrcplBQY.js","assets/users-Ck1c6nQM.js","assets/megaphone-CYKvi4Ml.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BxH0ZrLt.js";
import { H as HeaderEIE } from "./HeaderEIE-BfE56y0Y.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-CFQsVcvJ.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-Wy_-M9m_.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-DkG23DrX.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DGILZSN0.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-BJgvoobW.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-C0lOj7U1.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-P5JEAV7t.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-CrcplBQY.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
