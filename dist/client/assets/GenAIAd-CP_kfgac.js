const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-CfahBTvn.js","assets/main-CkWvzmHo.js","assets/main-wRMbtKU1.css","assets/EnrollmentModal-DiD1_fbT.js","assets/enrollmentApi-B1ElAQt2.js","assets/metaPixel-CQtQgASE.js","assets/index-BykFZKOi.js","assets/proxy-FX7O8pU2.js","assets/sparkles-CgaEr7GR.js","assets/zap-TGL0-77f.js","assets/bot-DxHKda_Z.js","assets/code-Bkk3Vlrb.js","assets/cpu-BBJmnwUr.js","assets/workflow-l4561D2X.js","assets/GENFAQAd-3_zMhnu8.js","assets/help-circle-CNNc5Xm0.js","assets/rocket-COtOjPyq.js","assets/GENHeroAd-6Vx-Xajj.js","assets/arrow-right-W40EKaQK.js","assets/GENIntroductionAd-CHSjztzN.js","assets/brain-B7DwKr5t.js","assets/target-DQLh0PEG.js","assets/GENLearningJourneyAd-CVjc6aJj.js","assets/calendar-7ViXIMBC.js","assets/chevron-left-DrjSiubA.js","assets/chevron-right-C7DGTL02.js","assets/cloud-0ZKRfeO3.js","assets/book-open-Du4r5K0Q.js","assets/GENMarketScopeAd-Bt5KZPvB.js","assets/trending-up-Czwjdimx.js","assets/bar-chart-DFSX6sIr.js","assets/GENToolsYouWillLearnAd-BewnJ043.js","assets/wrench-BBAbVbaS.js","assets/video-uV_g4f-0.js","assets/GENWhoShouldEnrollAd-CfgQYXOd.js","assets/users-8QKFmLyj.js","assets/megaphone-D-QGNoV7.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CkWvzmHo.js";
import { H as HeaderEIE } from "./HeaderEIE-Q3noJavS.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-CfahBTvn.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-3_zMhnu8.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-6Vx-Xajj.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-CHSjztzN.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CVjc6aJj.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-Bt5KZPvB.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-BewnJ043.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-CfgQYXOd.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
