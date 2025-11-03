const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-Dbgn1xrw.js","assets/main-l43z1zsL.js","assets/main-NGHnJCuZ.css","assets/EnrollmentModal-Bre1amWV.js","assets/enrollmentApi-D66ZDdou.js","assets/metaPixel-BOQzoYP4.js","assets/sparkles-Duqf2pTV.js","assets/zap-DOJmRBfS.js","assets/bot-5Dj8iqpP.js","assets/code-Bxj8CeJL.js","assets/cpu-D2Ie0Q41.js","assets/workflow-DiLHHlQV.js","assets/GENFAQAd-DkPMx54o.js","assets/help-circle-BlQs442C.js","assets/rocket-CzNN5zB2.js","assets/GENHeroAd-CIgrh3nY.js","assets/arrow-right-ZoBjQYJV.js","assets/GENIntroductionAd-mcvxDZQT.js","assets/brain-BtbnTeIM.js","assets/target-kQfyznLB.js","assets/GENLearningJourneyAd-6sS3h1a5.js","assets/calendar-BcIea5sC.js","assets/chevron-left-BLaqWrFq.js","assets/chevron-right-BM9jaZ6L.js","assets/cloud-sHVDu7C4.js","assets/book-open-BZiNvd_A.js","assets/GENMarketScopeAd-C6X3Z-hP.js","assets/trending-up-CR3cVso1.js","assets/bar-chart-B-nDVe0d.js","assets/GENToolsYouWillLearnAd-CX0g39YN.js","assets/wrench-Cv79Jaig.js","assets/video-CZ_jVmop.js","assets/GENWhoShouldEnrollAd-hxUFfhFo.js","assets/users-CoKYCqX8.js","assets/megaphone-Bg0RcyjK.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-l43z1zsL.js";
import { H as HeaderEIE } from "./HeaderEIE-8-_8v567.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-Dbgn1xrw.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-DkPMx54o.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CIgrh3nY.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-mcvxDZQT.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-6sS3h1a5.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-C6X3Z-hP.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CX0g39YN.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-hxUFfhFo.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
