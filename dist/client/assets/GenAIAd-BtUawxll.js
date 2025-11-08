const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-DbZReSwJ.js","assets/main-CVqzsEIE.js","assets/main-BLt5Qm9-.css","assets/EnrollmentModal-DWZRh2FR.js","assets/enrollmentApi-R0FC2M25.js","assets/metaPixel-B8wA48qp.js","assets/sparkles-BjKbb4yK.js","assets/zap-BoUTPKRD.js","assets/bot-DdmG7eaB.js","assets/code-B6Ygii82.js","assets/cpu-BZp3EOMT.js","assets/workflow-BQCZaKOh.js","assets/GENFAQAd-1uSmfcmN.js","assets/help-circle-CXiq_qi0.js","assets/rocket-CrKWqC2Q.js","assets/GENHeroAd-B2EJARt4.js","assets/arrow-right-CCw5MLvi.js","assets/GENIntroductionAd-6uQzcPD1.js","assets/brain-C-iO7USr.js","assets/target-B-pd1wNQ.js","assets/GENLearningJourneyAd-B4cwQcBk.js","assets/calendar-Br_RX82f.js","assets/chevron-left-Ax9VdtdB.js","assets/chevron-right-maxI0GF4.js","assets/cloud-DKHhYL1L.js","assets/book-open-CpOTyx9M.js","assets/GENMarketScopeAd-C6vY71H8.js","assets/trending-up-Bumid2OE.js","assets/bar-chart-B8GrDjB6.js","assets/GENToolsYouWillLearnAd-D2K_d8-R.js","assets/wrench-D_RdBEUy.js","assets/video-b850f8Ng.js","assets/GENWhoShouldEnrollAd-DIgWik-N.js","assets/users-BH-lI_0c.js","assets/megaphone-DdYppXmj.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CVqzsEIE.js";
import { H as HeaderEIE } from "./HeaderEIE-CKUeQuY3.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-DbZReSwJ.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-1uSmfcmN.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-B2EJARt4.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-6uQzcPD1.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-B4cwQcBk.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-C6vY71H8.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-D2K_d8-R.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-DIgWik-N.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
