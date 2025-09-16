const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-BczvP9ia.js","assets/main-BOeEXsPM.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-B2rURnZi.js","assets/enrollmentApi-B9uFHRSh.js","assets/metaPixel-Bmpr2vms.js","assets/index-BLTItVKD.js","assets/proxy-BkLUGwlU.js","assets/sparkles-D2AvGJoO.js","assets/zap-BNrEcLkG.js","assets/bot-B3DymoMe.js","assets/code-Drwu-vcE.js","assets/cpu-DD5K795U.js","assets/workflow-BasoGUlh.js","assets/GENFAQAd-WzIFkHXN.js","assets/help-circle-Cthu7tfm.js","assets/rocket-CmpbdtIu.js","assets/GENHeroAd-Bt3HwkBC.js","assets/arrow-right-DkGKnnUl.js","assets/GENIntroductionAd-Cu7E63DO.js","assets/brain-Dr9AHv2Y.js","assets/target-BlkvoEkn.js","assets/GENLearningJourneyAd-Dv89zVkc.js","assets/calendar-Dq3onoxa.js","assets/chevron-left-vzW_HfPT.js","assets/chevron-right-CvSrkhn8.js","assets/cloud-BAEwKCIA.js","assets/book-open-BBXe42fc.js","assets/GENMarketScopeAd-BXIJ2HBD.js","assets/trending-up-iKI26Ots.js","assets/bar-chart-CakIB82y.js","assets/GENToolsYouWillLearnAd-CcrUO3Jg.js","assets/wrench-d5V9eGDX.js","assets/video-Cv3ADfZn.js","assets/GENWhoShouldEnrollAd-Pg5cHPU2.js","assets/users-C2gyDQ75.js","assets/megaphone-DFQ05Bkd.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BOeEXsPM.js";
import { H as HeaderEIE } from "./HeaderEIE-n_Ko0Iim.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-BczvP9ia.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-WzIFkHXN.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-Bt3HwkBC.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-Cu7E63DO.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-Dv89zVkc.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-BXIJ2HBD.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CcrUO3Jg.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-Pg5cHPU2.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
