const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-CCJA4Q20.js","assets/main-EhB7M4T3.js","assets/main-ZJ57361l.css","assets/EnrollmentModal-CaNAI2uf.js","assets/enrollmentApi-eh5T7sQa.js","assets/metaPixel-ClzrpHuU.js","assets/sparkles-CcnWaWm5.js","assets/zap-Bps1k40C.js","assets/bot-CX1XKJEf.js","assets/code-OF7Os_9T.js","assets/cpu-D1Qq2_pG.js","assets/workflow-BYHNhatr.js","assets/GENFAQAd-y3qd4SEf.js","assets/help-circle-CZTu7m79.js","assets/rocket-CORIl_CJ.js","assets/GENHeroAd-i9ptTmGC.js","assets/arrow-right-CDHEKS8n.js","assets/GENIntroductionAd-Cou-74oP.js","assets/brain-DlUCfERD.js","assets/target-BJhB5Tpj.js","assets/GENLearningJourneyAd-m0W06-ec.js","assets/calendar-9Z8yaSyq.js","assets/chevron-left-BOHfd2Lw.js","assets/chevron-right-BlttkiUL.js","assets/cloud-Bvkggaz5.js","assets/book-open-CLe2X9pc.js","assets/GENMarketScopeAd-oH8lg2Ad.js","assets/trending-up-uqhPqrBs.js","assets/bar-chart-CIa0V1M1.js","assets/GENToolsYouWillLearnAd-CduztZv7.js","assets/wrench-DRSVIJHf.js","assets/video-ZmkdV-Ey.js","assets/GENWhoShouldEnrollAd-Bmgw9wzN.js","assets/users-CazCd-RW.js","assets/megaphone-DpbA_9lE.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-EhB7M4T3.js";
import { H as HeaderEIE } from "./HeaderEIE-2Wzioal6.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-CCJA4Q20.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-y3qd4SEf.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-i9ptTmGC.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-Cou-74oP.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-m0W06-ec.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-oH8lg2Ad.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CduztZv7.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-Bmgw9wzN.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
