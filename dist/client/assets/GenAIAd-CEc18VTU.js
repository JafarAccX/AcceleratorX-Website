const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-JLpv3ynL.js","assets/main-CQMtEg9v.js","assets/main-Ctc2Wiva.css","assets/EnrollmentModal-fAHxGVX1.js","assets/enrollmentApi-BcjLvQGy.js","assets/metaPixel-CvLHVZuZ.js","assets/index-CPGWx1Fa.js","assets/proxy-DMpmILPN.js","assets/sparkles-xxYiN4No.js","assets/zap-CU1I3O4l.js","assets/bot-vukz0aXA.js","assets/code-CK-gA3v4.js","assets/cpu-CN9HFG9O.js","assets/workflow-CDpiZRZa.js","assets/GENFAQAd-CQ4ZqxSU.js","assets/help-circle-HTnrTJGF.js","assets/rocket-B3mjCzDy.js","assets/GENHeroAd-Bv-mwF99.js","assets/arrow-right-EF8ty81W.js","assets/GENIntroductionAd-_NMBvkDb.js","assets/brain-HiZvbq09.js","assets/target-DOlbiY0l.js","assets/GENLearningJourneyAd-CToXa3QN.js","assets/calendar--orjB-na.js","assets/chevron-left-DQtz855_.js","assets/chevron-right-CmYBs-zx.js","assets/cloud-BM1imMRV.js","assets/book-open-BZovkPkt.js","assets/GENMarketScopeAd-EYO2HlpJ.js","assets/trending-up-BoZY_tra.js","assets/bar-chart-BloAgfRj.js","assets/GENToolsYouWillLearnAd-C-aug9H1.js","assets/wrench-FipK8u2Z.js","assets/video-BvTqkP2p.js","assets/GENWhoShouldEnrollAd-j5H1qFky.js","assets/users-CM_hleka.js","assets/megaphone-Co-sUQzg.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CQMtEg9v.js";
import { H as HeaderEIE } from "./HeaderEIE-CC2-ByD6.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-JLpv3ynL.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-CQ4ZqxSU.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-Bv-mwF99.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-_NMBvkDb.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CToXa3QN.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-EYO2HlpJ.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-C-aug9H1.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-j5H1qFky.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
