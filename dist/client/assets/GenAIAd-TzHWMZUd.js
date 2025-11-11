const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-BtQ6Qq8s.js","assets/main-DqWgQVnl.js","assets/main-BA_X0d1R.css","assets/EnrollmentModal-BWPAe1sr.js","assets/enrollmentApi-C8CeDdxE.js","assets/metaPixel-DriOOgtG.js","assets/sparkles-BgwuT-Il.js","assets/zap-DX4keH9r.js","assets/bot-CeeNBSlx.js","assets/code-jkaYIVVz.js","assets/cpu-wPhJ19M_.js","assets/workflow-DNpcsiWM.js","assets/GENFAQAd-B1b003pj.js","assets/help-circle-BhFqTRrC.js","assets/rocket-CMRyJQLc.js","assets/GENHeroAd-CT3FzkNw.js","assets/arrow-right-CyzkLVpq.js","assets/GENIntroductionAd-DtIHEwiT.js","assets/brain-CYSh-USG.js","assets/target-Dv7zvGKC.js","assets/GENLearningJourneyAd-FVz-cdt9.js","assets/calendar-C_bbj6UM.js","assets/chevron-left-25DeafxS.js","assets/chevron-right-DVpgOIjK.js","assets/cloud-DC_2tQtP.js","assets/book-open-Bx05fuUB.js","assets/GENMarketScopeAd-Chfsa2tt.js","assets/trending-up-9uDab8lx.js","assets/bar-chart-C-UuVLh2.js","assets/GENToolsYouWillLearnAd-CIv_D9PK.js","assets/wrench-DfxZR1dh.js","assets/video-DNbyeK95.js","assets/GENWhoShouldEnrollAd-D4Tr5M51.js","assets/users-CqwVU5n4.js","assets/megaphone-CtaTX11W.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DqWgQVnl.js";
import { H as HeaderEIE } from "./HeaderEIE-BGPfqfpB.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-BtQ6Qq8s.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-B1b003pj.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CT3FzkNw.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DtIHEwiT.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-FVz-cdt9.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-Chfsa2tt.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CIv_D9PK.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-D4Tr5M51.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
