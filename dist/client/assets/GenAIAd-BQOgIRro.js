const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-CzgvbRZc.js","assets/main-DSLYtVC7.js","assets/main-nEWqamtX.css","assets/EnrollmentModal-D5msJbA_.js","assets/enrollmentApi-B_Bb5JdS.js","assets/metaPixel-DvHKdgLp.js","assets/sparkles-kE2B0wlx.js","assets/zap-CUnOzE5M.js","assets/bot-CSb8w5GZ.js","assets/code-CzpT4JiN.js","assets/cpu-bs3WUC7c.js","assets/workflow-C8wehuxr.js","assets/GENFAQAd-EgF9DHpj.js","assets/help-circle-DKz3qrmJ.js","assets/rocket-5rZ1IuBK.js","assets/GENHeroAd-DqdoOvd_.js","assets/arrow-right-CQyK0UD9.js","assets/GENIntroductionAd-BfXk5MO2.js","assets/brain-DJ9Dy7et.js","assets/target-jjA8BJZA.js","assets/GENLearningJourneyAd-Cej9pN-J.js","assets/calendar-BAmbtlj6.js","assets/chevron-left-BDv3jNbf.js","assets/chevron-right-DKJcOoXH.js","assets/cloud-DRsp8m9q.js","assets/book-open-BOaXI8bS.js","assets/GENMarketScopeAd-AhyoTyw5.js","assets/trending-up-BqkEGevB.js","assets/bar-chart-BhS6RLbq.js","assets/GENToolsYouWillLearnAd-CLYcfRxC.js","assets/wrench-BBJfrEf3.js","assets/video-D81HZU8h.js","assets/GENWhoShouldEnrollAd-vBo7MKbz.js","assets/users-fDw_Sc59.js","assets/megaphone-DSrKyoHz.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DSLYtVC7.js";
import { H as HeaderEIE } from "./HeaderEIE-C9p-97oA.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-CzgvbRZc.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-EgF9DHpj.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-DqdoOvd_.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-BfXk5MO2.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-Cej9pN-J.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-AhyoTyw5.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CLYcfRxC.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-vBo7MKbz.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
