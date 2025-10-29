const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-YfjG1g5-.js","assets/main-ma4iRsbt.js","assets/main-G0CT17v4.css","assets/EnrollmentModal-Drsk4gj-.js","assets/enrollmentApi-CgCiDHJR.js","assets/metaPixel-BzgFvOZj.js","assets/sparkles-CJ6fW9Jp.js","assets/zap-JJu2NT1S.js","assets/bot-DmDREOAc.js","assets/code-BNrQlCLg.js","assets/cpu-BWyAxxD5.js","assets/workflow-BHLt9LeP.js","assets/GENFAQAd-DSRb2f-i.js","assets/help-circle-FqbTFKH3.js","assets/rocket-DkLrTEY7.js","assets/GENHeroAd-BosrQK6k.js","assets/arrow-right-NQ7PO8Rg.js","assets/GENIntroductionAd-DhrmDFfE.js","assets/brain-CHCB2Mxj.js","assets/target-Df-llSQz.js","assets/GENLearningJourneyAd-DGLczxs5.js","assets/calendar-CqRMwq-n.js","assets/chevron-left-LExt_pbc.js","assets/chevron-right-CUk9db-N.js","assets/cloud-BMnZy_E5.js","assets/book-open-Y45mtJCo.js","assets/GENMarketScopeAd-DuGfLh60.js","assets/trending-up-lFA8pLwo.js","assets/bar-chart-BrN6lzJB.js","assets/GENToolsYouWillLearnAd-CjHdrYEh.js","assets/wrench-CfeaeV5g.js","assets/video-DlOq2pnL.js","assets/GENWhoShouldEnrollAd-D4KEJGzx.js","assets/users-B94grk6x.js","assets/megaphone-I1w2PFcW.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-ma4iRsbt.js";
import { H as HeaderEIE } from "./HeaderEIE-CcQprB3T.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-YfjG1g5-.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-DSRb2f-i.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-BosrQK6k.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DhrmDFfE.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-DGLczxs5.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-DuGfLh60.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-CjHdrYEh.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-D4KEJGzx.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
