const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-BbqqadEM.js","assets/main-DIFEnr0T.js","assets/main-Ce-Pe5sq.css","assets/EnrollmentModal-CGXZR3j2.js","assets/enrollmentApi-GN7J7nzz.js","assets/metaPixel-DADRfF0c.js","assets/sparkles-4S2554Xt.js","assets/zap-yfOf9f--.js","assets/bot-CVzJceDo.js","assets/code-5FKZ2q3C.js","assets/cpu-BfQyOZal.js","assets/workflow-D3AY2J-0.js","assets/GENFAQAd-BwRHfMW7.js","assets/help-circle-DOKO8uPF.js","assets/rocket-B_z2a7PX.js","assets/GENHeroAd-DoyGv9Hx.js","assets/arrow-right-zzHrm7eN.js","assets/GENIntroductionAd-DN1Vk4cg.js","assets/brain-Dcuzde0I.js","assets/target-BBz5KRfO.js","assets/GENLearningJourneyAd-Mx57fMgr.js","assets/calendar-Bz33Y8pq.js","assets/chevron-left-FAyzpRNF.js","assets/chevron-right-Dypoaisl.js","assets/cloud-BbR0vY8N.js","assets/book-open-oEF5i-XC.js","assets/GENMarketScopeAd-CnrA9hsR.js","assets/trending-up-6UIEPGma.js","assets/bar-chart-BZYXtDv4.js","assets/GENToolsYouWillLearnAd-Bc7L85dv.js","assets/wrench-BnWbcTLy.js","assets/video-CrS93l6G.js","assets/GENWhoShouldEnrollAd-lkmUKnUJ.js","assets/users-CYWDJFl-.js","assets/megaphone-BTpuQMYx.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DIFEnr0T.js";
import { H as HeaderEIE } from "./HeaderEIE-D8oWOEzg.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-BbqqadEM.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BwRHfMW7.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-DoyGv9Hx.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DN1Vk4cg.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-Mx57fMgr.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-CnrA9hsR.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-Bc7L85dv.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-lkmUKnUJ.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
