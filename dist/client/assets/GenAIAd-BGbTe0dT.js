const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-B3qvfRQA.js","assets/main-DeWmku3x.js","assets/main-7GdIFNw8.css","assets/EnrollmentModal-DI_VkV-P.js","assets/enrollmentApi-BTVnShAt.js","assets/metaPixel-CXWd2A3b.js","assets/index-B9lm7uYh.js","assets/proxy-CanaJn_u.js","assets/sparkles-SSUfyu0L.js","assets/zap-DjhscehM.js","assets/bot-B4A2_Gos.js","assets/code-Bk-TJjPj.js","assets/cpu-AJMDuxRY.js","assets/workflow-Csoj5SOc.js","assets/GENFAQAd-vQ563fFf.js","assets/help-circle-DWZNsAPt.js","assets/rocket-B1QzGSiD.js","assets/GENHeroAd-D0W3wjma.js","assets/arrow-right-FvSk5-_7.js","assets/GENIntroductionAd-CuPgwyas.js","assets/brain-DyNt3IqD.js","assets/target-zSR51BqK.js","assets/GENLearningJourneyAd-uK7soMqx.js","assets/calendar-CtFbahjp.js","assets/chevron-left-Dd5laPHE.js","assets/chevron-right-DZQFqO7r.js","assets/cloud-xEitPlDo.js","assets/book-open-B3TmBhYn.js","assets/GENMarketScopeAd-B3B2WhjS.js","assets/trending-up-BMi3qHL_.js","assets/bar-chart-B7iF_8gc.js","assets/GENToolsYouWillLearnAd-QTiYbhn1.js","assets/wrench-DcKDyrb4.js","assets/video-C_rljYiv.js","assets/GENWhoShouldEnrollAd-BpPGfcc8.js","assets/users-DG8_Ljzo.js","assets/megaphone-B6pxlEu3.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DeWmku3x.js";
import { H as HeaderEIE } from "./HeaderEIE-BzbxtdAw.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-B3qvfRQA.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-vQ563fFf.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-D0W3wjma.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-CuPgwyas.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-uK7soMqx.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-B3B2WhjS.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-QTiYbhn1.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-BpPGfcc8.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
