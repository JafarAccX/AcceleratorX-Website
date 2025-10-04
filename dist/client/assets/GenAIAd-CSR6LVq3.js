const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-CTEoMDCt.js","assets/main-CyKI5oeo.js","assets/main-B4XYXhR2.css","assets/EnrollmentModal-De06Jtf6.js","assets/enrollmentApi-Cu1oEIrV.js","assets/metaPixel-BH32gJwg.js","assets/index-BNL4sw4U.js","assets/proxy-BOkuqYBJ.js","assets/sparkles-CR2FSl0C.js","assets/zap-K-mLJT76.js","assets/bot-CNdr8dV4.js","assets/code-C3EU-TxE.js","assets/cpu-DBLy0o9D.js","assets/workflow-DPGqI_Yg.js","assets/GENFAQAd-BVXpF5Vl.js","assets/help-circle-BMl-KJtq.js","assets/rocket-CSHSDR4r.js","assets/GENHeroAd-06x462Ss.js","assets/arrow-right-CxH0EQ0a.js","assets/GENIntroductionAd-CGtC83XO.js","assets/brain-3gwc6v5K.js","assets/target-YuLBPE2u.js","assets/GENLearningJourneyAd-WUzlIBNP.js","assets/calendar-iMQisHgH.js","assets/chevron-left-BUEuiu78.js","assets/chevron-right-DDHOSPy6.js","assets/cloud-BxiY9VJ9.js","assets/book-open-BAi5IChx.js","assets/GENMarketScopeAd-BMxscc8U.js","assets/trending-up-DItEEHz6.js","assets/bar-chart-C8c7Vyr-.js","assets/GENToolsYouWillLearnAd-D8INDjjf.js","assets/wrench-1XIluSNc.js","assets/video-Cc5qc_ra.js","assets/GENWhoShouldEnrollAd-BQzue9rH.js","assets/users-CGx24rbU.js","assets/megaphone-DIpWxVyQ.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CyKI5oeo.js";
import { H as HeaderEIE } from "./HeaderEIE-C0BzkkNk.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-CTEoMDCt.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BVXpF5Vl.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-06x462Ss.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-CGtC83XO.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-WUzlIBNP.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-BMxscc8U.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-D8INDjjf.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-BQzue9rH.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
