const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-BxaPFrWr.js","assets/main-Dr7DU7CZ.js","assets/main-B4XYXhR2.css","assets/EnrollmentModal-bFtrKCD9.js","assets/enrollmentApi-BWSSYuNv.js","assets/metaPixel-CBvWK0Fy.js","assets/index-DAddfncm.js","assets/proxy-82v-ftuM.js","assets/sparkles-CxL6DCdy.js","assets/zap-B-2vi9qI.js","assets/bot-BfoW705e.js","assets/code-DySWXEbJ.js","assets/cpu-BZmf9laq.js","assets/workflow-aJxndCRR.js","assets/GENFAQAd-CiCjWUG7.js","assets/help-circle-DvbOJwwx.js","assets/rocket-BqBKlMhS.js","assets/GENHeroAd-B3yJkLY-.js","assets/arrow-right-CuhHaKR8.js","assets/GENIntroductionAd-BwYXpJ4h.js","assets/brain-BRD7JP5m.js","assets/target-q9UV88fJ.js","assets/GENLearningJourneyAd-BcQzg08r.js","assets/calendar-CPlrVCwz.js","assets/chevron-left-DpXWbXQT.js","assets/chevron-right-D3mKF1D1.js","assets/cloud-G8IyH4Qc.js","assets/book-open-B0mEWv0S.js","assets/GENMarketScopeAd-D2qa7cze.js","assets/trending-up-CoVtqXRn.js","assets/bar-chart-Blp1NXJr.js","assets/GENToolsYouWillLearnAd-CSuA7EIS.js","assets/wrench-CTlbgEZ2.js","assets/video-CnMSK_mV.js","assets/GENWhoShouldEnrollAd-C-whFfbi.js","assets/users-Bh-qRdQ_.js","assets/megaphone-Dvy3MwkZ.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Dr7DU7CZ.js";
import { H as HeaderEIE } from "./HeaderEIE-DtyxMFqn.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-BxaPFrWr.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-CiCjWUG7.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-B3yJkLY-.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-BwYXpJ4h.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-BcQzg08r.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-D2qa7cze.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CSuA7EIS.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-C-whFfbi.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
