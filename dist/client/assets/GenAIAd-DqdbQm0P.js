const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-DQneOG_E.js","assets/main-CfA5h11a.js","assets/main-ByJX9cvk.css","assets/EnrollmentModal-Cws58IB3.js","assets/enrollmentApi-DH74qvpY.js","assets/metaPixel-DjMPEQ2F.js","assets/index-Dk7MajVP.js","assets/proxy-CHEv0qax.js","assets/sparkles-CteLY-0P.js","assets/zap-CoK20kK2.js","assets/bot-HAmDDdCX.js","assets/code-SDMvQuop.js","assets/cpu-DYJ95sSI.js","assets/workflow-CYA5NMMT.js","assets/GENFAQAd-6uuuz8dV.js","assets/help-circle-CXvoL3u7.js","assets/rocket-DM5K6tEy.js","assets/GENHeroAd-DlrsCf36.js","assets/arrow-right-DhvCu5pI.js","assets/GENIntroductionAd-CbsqS5eE.js","assets/brain-hPM4KVSR.js","assets/target-sC38nrod.js","assets/GENLearningJourneyAd-BbE9X5N6.js","assets/calendar-DhCi8TKF.js","assets/chevron-left-Be3Jbroe.js","assets/chevron-right-B_fI26jY.js","assets/cloud-BWqk7WrA.js","assets/book-open-VrKJ0uSR.js","assets/GENMarketScopeAd-DzrwEnPH.js","assets/trending-up-BVMRdy-u.js","assets/bar-chart-CjWFj_qn.js","assets/GENToolsYouWillLearnAd-CUfZaaRC.js","assets/wrench-FSm00eUi.js","assets/video-BvWcKWHb.js","assets/GENWhoShouldEnrollAd-Cz_6dDWQ.js","assets/users-DAUYd__u.js","assets/megaphone-Dyk4kXrT.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CfA5h11a.js";
import { H as HeaderEIE } from "./HeaderEIE-ewXvpesP.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-DQneOG_E.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-6uuuz8dV.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-DlrsCf36.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-CbsqS5eE.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-BbE9X5N6.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-DzrwEnPH.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CUfZaaRC.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-Cz_6dDWQ.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
