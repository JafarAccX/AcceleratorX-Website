const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-Dr97GCi6.js","assets/main-DVDzlx-0.js","assets/main-Ctc2Wiva.css","assets/EnrollmentModal-B-ncPKyk.js","assets/enrollmentApi-DcxRk6UX.js","assets/metaPixel-DYt_E5BE.js","assets/index-DXNQdcg1.js","assets/proxy-D2c8tzA2.js","assets/sparkles-qpyc0n20.js","assets/zap-Bij54lHp.js","assets/bot-CRdGGfwy.js","assets/code-HJgYekQG.js","assets/cpu-Cm-fKUxE.js","assets/workflow-DNVA0Dwl.js","assets/GENFAQAd-BhMn0aTb.js","assets/help-circle-Bbz0Yl7y.js","assets/rocket-C_xp1WrD.js","assets/GENHeroAd-BXqutrf0.js","assets/arrow-right-CV6wIZha.js","assets/GENIntroductionAd-DrGKcJ8Q.js","assets/brain-CYoupxkG.js","assets/target-CLG7ix3N.js","assets/GENLearningJourneyAd-BzFXBB1Z.js","assets/calendar-C6FJP-d7.js","assets/chevron-left-CtdJSySR.js","assets/chevron-right-Drb2os-r.js","assets/cloud-ci2k3phS.js","assets/book-open-6jfW4xmj.js","assets/GENMarketScopeAd-cOfNNST-.js","assets/trending-up-D_3gsonX.js","assets/bar-chart-Bcfezxr3.js","assets/GENToolsYouWillLearnAd-DmVn3Ee4.js","assets/wrench-aCxd06p7.js","assets/video-gA4Wf2C5.js","assets/GENWhoShouldEnrollAd-CbpqcqWp.js","assets/users-CECpohsr.js","assets/megaphone-C1-yrfLg.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DVDzlx-0.js";
import { H as HeaderEIE } from "./HeaderEIE-cUFlvIOz.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-Dr97GCi6.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BhMn0aTb.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-BXqutrf0.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DrGKcJ8Q.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-BzFXBB1Z.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-cOfNNST-.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DmVn3Ee4.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-CbpqcqWp.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
