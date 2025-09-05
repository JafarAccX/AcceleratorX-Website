const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-BE6qKWWO.js","assets/main-C28QhmdX.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-CpbHh6iK.js","assets/enrollmentApi-GwMyt4F-.js","assets/metaPixel-B9un28kE.js","assets/index-DajbXocm.js","assets/proxy-DwSb1Opz.js","assets/sparkles-BsCOr6lg.js","assets/zap-Brk-A5jp.js","assets/bot-ric7DhaX.js","assets/code-BNAfoUCw.js","assets/cpu-DlT7PpSk.js","assets/workflow-Bl5ldJmw.js","assets/GENFAQAd-DYhazySM.js","assets/help-circle-Duizb8k7.js","assets/rocket-DhJH6LyN.js","assets/GENHeroAd-Dq9w3Qj3.js","assets/arrow-right-D13kLv6E.js","assets/GENIntroductionAd-CSHKjXpI.js","assets/brain-C9qcRQX_.js","assets/target-B_4ThqT3.js","assets/GENLearningJourneyAd-CyEsfaQn.js","assets/calendar-m2hn51ng.js","assets/chevron-left-_FBt_YgV.js","assets/chevron-right-Crg13h3I.js","assets/cloud-Bh3S8rY-.js","assets/book-open-BSU_yNPN.js","assets/GENMarketScopeAd-BR2jjKoT.js","assets/trending-up-B9divfHi.js","assets/bar-chart-CQppz6au.js","assets/GENToolsYouWillLearnAd-DdN73Fy3.js","assets/wrench-CQR_KKAn.js","assets/video-D54HdzD0.js","assets/GENWhoShouldEnrollAd-0Q68iTKr.js","assets/users-DMt_YjC6.js","assets/megaphone-SdC_GBhL.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-C28QhmdX.js";
import { H as HeaderEIE } from "./HeaderEIE-DyhRgm7n.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-BE6qKWWO.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-DYhazySM.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-Dq9w3Qj3.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-CSHKjXpI.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CyEsfaQn.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-BR2jjKoT.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DdN73Fy3.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-0Q68iTKr.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
