const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-Dx-jK99p.js","assets/main-CLFAzKr7.js","assets/main-BLt5Qm9-.css","assets/EnrollmentModal-f2lJDb1T.js","assets/enrollmentApi-8fBMY41-.js","assets/metaPixel-DZ1DsPbx.js","assets/sparkles-D3k331ay.js","assets/zap-Cvyf6l-f.js","assets/bot-0Qh9-zmT.js","assets/code-CRMOtDGB.js","assets/cpu-GN3ew-dC.js","assets/workflow-BnlEw3i_.js","assets/GENFAQAd-DZ2dwrU9.js","assets/help-circle-BXCTYNrY.js","assets/rocket-rH0yhjZD.js","assets/GENHeroAd-DIIaS63A.js","assets/arrow-right-B8AwW2Sb.js","assets/GENIntroductionAd-BWQKBJO5.js","assets/brain-__s_bl5Z.js","assets/target-BrBJsAlY.js","assets/GENLearningJourneyAd-mcfPo7J4.js","assets/calendar-DqYX6s9H.js","assets/chevron-left-D27Fn6bE.js","assets/chevron-right-B1dJKyWU.js","assets/cloud-Diu7avir.js","assets/book-open-CFe1hlXQ.js","assets/GENMarketScopeAd-1zASch7A.js","assets/trending-up-CBuHhFjq.js","assets/bar-chart-DmBUF9Ax.js","assets/GENToolsYouWillLearnAd-f8XI6CHl.js","assets/wrench-BaGysl1a.js","assets/video-Bx7Zdq80.js","assets/GENWhoShouldEnrollAd-BPp3P_wc.js","assets/users-DpJEgBNu.js","assets/megaphone-Bxv7RRNi.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CLFAzKr7.js";
import { H as HeaderEIE } from "./HeaderEIE-ClHY5ktn.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-Dx-jK99p.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-DZ2dwrU9.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-DIIaS63A.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-BWQKBJO5.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-mcfPo7J4.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-1zASch7A.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-f8XI6CHl.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-BPp3P_wc.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
