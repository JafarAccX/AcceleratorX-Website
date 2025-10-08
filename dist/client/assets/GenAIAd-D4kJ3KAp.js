const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-DHmeYans.js","assets/main-DHphvIsW.js","assets/main-g1H-mEfk.css","assets/EnrollmentModal-DVARnpwq.js","assets/enrollmentApi-DT_AxxXz.js","assets/metaPixel-BtqJNysz.js","assets/sparkles-DcuiJeli.js","assets/zap-BiIYxtyF.js","assets/bot-BCuta5Dc.js","assets/code-B0OCo_eB.js","assets/cpu-Bb9_j08B.js","assets/workflow-CwrZF_uJ.js","assets/GENFAQAd-bQnM6MY0.js","assets/help-circle-BnTAV-o4.js","assets/rocket-C7ORhXwy.js","assets/GENHeroAd-CLuyglO_.js","assets/arrow-right-q-8oo8XS.js","assets/GENIntroductionAd-9ffF71Jv.js","assets/brain-Bvzs-NIh.js","assets/target-C_O9CwqU.js","assets/GENLearningJourneyAd-mcXWGqr5.js","assets/calendar-zSkGjyp5.js","assets/chevron-left-DjNm562R.js","assets/chevron-right-_lNIh7ha.js","assets/cloud-RkqgF3LZ.js","assets/book-open-CiYAr8s7.js","assets/GENMarketScopeAd-C8hoXbR1.js","assets/trending-up-BNKTbnge.js","assets/bar-chart-_ndOPE4A.js","assets/GENToolsYouWillLearnAd-C6IaQMEl.js","assets/wrench-DzMcekS_.js","assets/video-HO_CMiuH.js","assets/GENWhoShouldEnrollAd-wkgy9ikm.js","assets/users-BTurkWRB.js","assets/megaphone-Bzwuf0fP.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DHphvIsW.js";
import { H as HeaderEIE } from "./HeaderEIE-BKyKeF5C.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-DHmeYans.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-bQnM6MY0.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CLuyglO_.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-9ffF71Jv.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-mcXWGqr5.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-C8hoXbR1.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-C6IaQMEl.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-wkgy9ikm.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
