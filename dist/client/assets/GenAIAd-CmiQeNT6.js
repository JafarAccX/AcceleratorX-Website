const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-ByHkbeRr.js","assets/main-EGEnCh6i.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-DPDKkDKj.js","assets/enrollmentApi-DSV_ou16.js","assets/metaPixel-CEyU9G7i.js","assets/index-BAcEffVT.js","assets/proxy-CXL56B2m.js","assets/sparkles-C7zwR7vN.js","assets/zap-_zJp4Ld8.js","assets/bot-iNuIuhpR.js","assets/code-BPf6l0iW.js","assets/cpu-uSeioQQm.js","assets/workflow-BV8qLDyn.js","assets/GENFAQAd-9a0WOVi0.js","assets/help-circle-B24nfIhW.js","assets/rocket-D3td5GvO.js","assets/GENHeroAd-DeiVXX6o.js","assets/arrow-right-C_Mh0B54.js","assets/GENIntroductionAd-npsu_0Ce.js","assets/brain-BlniTgRH.js","assets/target-cQaRyuV4.js","assets/GENLearningJourneyAd-BMZ4SVkk.js","assets/calendar-DK6tV87u.js","assets/chevron-left-ytbqTxPN.js","assets/chevron-right-BrZvRXSv.js","assets/cloud-DvPME7iN.js","assets/book-open-FOX8DHE6.js","assets/GENMarketScopeAd-BuoyL0bE.js","assets/trending-up-Czf-j1tA.js","assets/bar-chart-Dj4EIGB4.js","assets/GENToolsYouWillLearnAd-B7OTxBuF.js","assets/wrench-YdnH1_PY.js","assets/video-Cntbu884.js","assets/GENWhoShouldEnrollAd-C5-VkVNm.js","assets/users-CrRmhLoB.js","assets/megaphone-BV3WV3fB.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-EGEnCh6i.js";
import { H as HeaderEIE } from "./HeaderEIE-HvvxqqFC.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-ByHkbeRr.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-9a0WOVi0.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-DeiVXX6o.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-npsu_0Ce.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-BMZ4SVkk.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-BuoyL0bE.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-B7OTxBuF.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-C5-VkVNm.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
