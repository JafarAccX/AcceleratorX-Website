const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-B6JrwqHN.js","assets/main-at0j2bC6.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-DILSKsEd.js","assets/enrollmentApi-CLX1q15b.js","assets/metaPixel-8i-74vtX.js","assets/index-DHlO3EWV.js","assets/proxy-CahS7ghE.js","assets/sparkles-olO2Z4y1.js","assets/zap-DvtSUWaS.js","assets/bot-BdzkZ2XT.js","assets/code-kV31xfEu.js","assets/cpu-B2VsIr8j.js","assets/workflow-D9VSegT2.js","assets/GENFAQAd-DVsAi4rP.js","assets/help-circle-vPS6ScXD.js","assets/rocket-tkU8f-XG.js","assets/GENHeroAd-UHxy6-Qz.js","assets/arrow-right-DrLiVL7t.js","assets/GENIntroductionAd-BGc4pipG.js","assets/brain-B9y6-_XI.js","assets/target-_JuTnQdS.js","assets/GENLearningJourneyAd-iXUgrGSB.js","assets/calendar-kez8NC4v.js","assets/chevron-left-BFeI9vuK.js","assets/chevron-right-D1AQvmHR.js","assets/cloud-Xaqs6kpM.js","assets/book-open-D3G0ChH1.js","assets/GENMarketScopeAd-doAM0KHX.js","assets/trending-up-5_KRc19F.js","assets/bar-chart-DOtIF8D9.js","assets/GENToolsYouWillLearnAd-CFWrOOg7.js","assets/wrench-BhBi8S3e.js","assets/video-CBiW7BMb.js","assets/GENWhoShouldEnrollAd-CPQ5LkuA.js","assets/users-tQfHRQw2.js","assets/megaphone-DM-t919N.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-at0j2bC6.js";
import { H as HeaderEIE } from "./HeaderEIE-ChbyZK1b.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-B6JrwqHN.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-DVsAi4rP.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-UHxy6-Qz.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-BGc4pipG.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-iXUgrGSB.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-doAM0KHX.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CFWrOOg7.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-CPQ5LkuA.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
