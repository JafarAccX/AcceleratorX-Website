const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-dREkbtVV.js","assets/main-DS-AYwzb.js","assets/main-Bk1JQKD4.css","assets/EnrollmentModal-DvFI3y3c.js","assets/enrollmentApi--UjIqsAr.js","assets/metaPixel-BAx_qkDv.js","assets/index-CvAAj5Ob.js","assets/proxy-BvognpjE.js","assets/sparkles-DHn_itiK.js","assets/zap-D4loa4v5.js","assets/bot-C4-x2LVr.js","assets/code-Do74SVgy.js","assets/cpu-D4T97LNw.js","assets/workflow-C7csxpK0.js","assets/GENFAQAd--JN5pyvY.js","assets/help-circle-Bat9bPP2.js","assets/rocket-B9wXm9J-.js","assets/GENHeroAd-ChQceXFj.js","assets/arrow-right-CJ-5ajnw.js","assets/GENIntroductionAd-DBKCrRqY.js","assets/brain-D4i1SPNE.js","assets/target--DSPFGW9.js","assets/GENLearningJourneyAd-BoYTJcan.js","assets/calendar-DIAR8npP.js","assets/chevron-left-2PMFeGiY.js","assets/chevron-right-DQDZntjW.js","assets/cloud-BpDIJyiv.js","assets/book-open-DOfncP3D.js","assets/GENMarketScopeAd-ugkZxyMo.js","assets/trending-up-BYD0C6br.js","assets/bar-chart-D-zX9yUX.js","assets/GENToolsYouWillLearnAd-DwJqT8zr.js","assets/wrench-BSBUxRuP.js","assets/video-DqICLdaO.js","assets/GENWhoShouldEnrollAd-DJcHDOVF.js","assets/users-DCb0cENh.js","assets/megaphone-Bk9lInra.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DS-AYwzb.js";
import { H as HeaderEIE } from "./HeaderEIE-Bd6_7CBj.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-dREkbtVV.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd--JN5pyvY.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-ChQceXFj.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DBKCrRqY.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-BoYTJcan.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-ugkZxyMo.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DwJqT8zr.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-DJcHDOVF.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
