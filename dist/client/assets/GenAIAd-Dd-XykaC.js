const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-DYK81o-o.js","assets/main-BHL7Gc-I.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-1rjxOGQO.js","assets/enrollmentApi-D-SHSyuz.js","assets/metaPixel-BqYvEWNF.js","assets/index-C-XkIKZM.js","assets/proxy-verKFKaM.js","assets/sparkles-3DBfi6t1.js","assets/zap-pQlhCJgq.js","assets/bot-Pc4dqrpG.js","assets/code-CpoMAWTc.js","assets/cpu-SHVQeTII.js","assets/workflow-CW5P07MW.js","assets/GENFAQAd-Ce4PSxe_.js","assets/help-circle-uyRa2WrD.js","assets/rocket-sJEryXO-.js","assets/GENHeroAd-Y5AfYMfM.js","assets/arrow-right-CI1uUyAu.js","assets/GENIntroductionAd-BR-fdY44.js","assets/brain-C-rqg6sd.js","assets/target-DOA1nPhh.js","assets/GENLearningJourneyAd-CLtanQLW.js","assets/calendar-DGodk1xI.js","assets/chevron-left-7aYoCDPm.js","assets/chevron-right-B_ljPRDc.js","assets/cloud-DW6f_yId.js","assets/book-open-BUunZnTP.js","assets/GENMarketScopeAd-C5h6b_aF.js","assets/trending-up-BoGTyF1H.js","assets/bar-chart-CUFjDat5.js","assets/GENToolsYouWillLearnAd-D8QekI3h.js","assets/wrench-BYVkaqkp.js","assets/video-B5pBGmxb.js","assets/GENWhoShouldEnrollAd-BE4JesNS.js","assets/users-DUPFzUNZ.js","assets/megaphone-DHAgZScq.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BHL7Gc-I.js";
import { H as HeaderEIE } from "./HeaderEIE-fk3aNuuG.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-DYK81o-o.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-Ce4PSxe_.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-Y5AfYMfM.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-BR-fdY44.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CLtanQLW.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-C5h6b_aF.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-D8QekI3h.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-BE4JesNS.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
