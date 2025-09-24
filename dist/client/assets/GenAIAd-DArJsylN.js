const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-43t_d6R5.js","assets/main-qWvHMlpM.js","assets/main-7GdIFNw8.css","assets/EnrollmentModal-Dpjkiyj0.js","assets/enrollmentApi-GL8zyR1h.js","assets/metaPixel-BoiM50Kb.js","assets/index-BxRq7_T9.js","assets/proxy-CjacfDEi.js","assets/sparkles-DaVEa0Pr.js","assets/zap-DvgSV7tI.js","assets/bot-DEjdOp-o.js","assets/code-Cspc4ZtF.js","assets/cpu-NHuKT9K6.js","assets/workflow-5p5NjPEW.js","assets/GENFAQAd-BDZGl7zZ.js","assets/help-circle-B1DRoMdl.js","assets/rocket-Bfd6PFmM.js","assets/GENHeroAd-_DuOq8B-.js","assets/arrow-right-Ck9WQLvf.js","assets/GENIntroductionAd-Dp4Ulnph.js","assets/brain-C5DUYIYK.js","assets/target-Da_PIYB6.js","assets/GENLearningJourneyAd-CpXAG60j.js","assets/calendar-CeDKYIIp.js","assets/chevron-left-cpPYDwNH.js","assets/chevron-right-DUWUl16K.js","assets/cloud-BNdkXuVZ.js","assets/book-open-Cuyam3rq.js","assets/GENMarketScopeAd-Zy62GArB.js","assets/trending-up-BWafNWs2.js","assets/bar-chart-Te4vOh3x.js","assets/GENToolsYouWillLearnAd-DrMWviUJ.js","assets/wrench-C_oFHe9y.js","assets/video-BEGf4AdM.js","assets/GENWhoShouldEnrollAd-BX-v_9W7.js","assets/users-B-IbMIwJ.js","assets/megaphone-CDnYPNjw.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-qWvHMlpM.js";
import { H as HeaderEIE } from "./HeaderEIE-ancaPEhf.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-43t_d6R5.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BDZGl7zZ.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-_DuOq8B-.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-Dp4Ulnph.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CpXAG60j.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-Zy62GArB.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DrMWviUJ.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-BX-v_9W7.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
