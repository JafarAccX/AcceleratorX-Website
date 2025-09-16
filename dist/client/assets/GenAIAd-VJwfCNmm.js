const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-31DIqTn-.js","assets/main-Dasux6OQ.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-CGchTRmf.js","assets/enrollmentApi-CLrGii4e.js","assets/metaPixel-BuAwezsB.js","assets/index-DO91dz0e.js","assets/proxy-CFfpntJW.js","assets/sparkles-BSek5uEL.js","assets/zap-CA4kn8oG.js","assets/bot-DTQwWYK2.js","assets/code-CDB2ZCtl.js","assets/cpu-Dil-32Xi.js","assets/workflow-X0h3L_3e.js","assets/GENFAQAd-DyK9rA-0.js","assets/help-circle-CKiE-u1p.js","assets/rocket-BTxVmk5i.js","assets/GENHeroAd-9XP8OUUu.js","assets/arrow-right-CyDFrp5Q.js","assets/GENIntroductionAd-CaGDA1ib.js","assets/brain-DllVmLfi.js","assets/target-CZo_IhHq.js","assets/GENLearningJourneyAd--boiddO9.js","assets/calendar-XLl43Z0X.js","assets/chevron-left-DNcodQro.js","assets/chevron-right-KLlcFwO4.js","assets/cloud-Cpt3mNys.js","assets/book-open-42OMXRon.js","assets/GENMarketScopeAd-DqSWCGY7.js","assets/trending-up-CgGbdxlI.js","assets/bar-chart-BF9-CArk.js","assets/GENToolsYouWillLearnAd-BTpel_R2.js","assets/wrench-Df4a9vii.js","assets/video-DJ-aUcUo.js","assets/GENWhoShouldEnrollAd-Bxj40x5V.js","assets/users-B0ajP2F_.js","assets/megaphone-DHx_GzWn.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Dasux6OQ.js";
import { H as HeaderEIE } from "./HeaderEIE-BS82KOr5.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-31DIqTn-.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-DyK9rA-0.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-9XP8OUUu.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-CaGDA1ib.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd--boiddO9.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-DqSWCGY7.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-BTpel_R2.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-Bxj40x5V.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
