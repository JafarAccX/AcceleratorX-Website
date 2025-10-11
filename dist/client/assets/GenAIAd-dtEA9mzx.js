const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-BGsrlEgp.js","assets/main-BsE_pOwq.js","assets/main-g1H-mEfk.css","assets/EnrollmentModal-CSsNaZvG.js","assets/enrollmentApi-Cj02VbS1.js","assets/metaPixel-DTLSMIdz.js","assets/sparkles-UvT9nzri.js","assets/zap-CRdiihfT.js","assets/bot-DJ8XiUzB.js","assets/code-BTOtkrCz.js","assets/cpu-kGmR95U7.js","assets/workflow-BSxYLF5R.js","assets/GENFAQAd-C6nY_aLr.js","assets/help-circle-CCEXgL2k.js","assets/rocket-Ct8EqRGm.js","assets/GENHeroAd-CH1LtBI0.js","assets/arrow-right-klvmXGPd.js","assets/GENIntroductionAd-D7wDapUS.js","assets/brain-Bt4nA7al.js","assets/target-BDwj-OsM.js","assets/GENLearningJourneyAd-CLuUxLHZ.js","assets/calendar-BZ7Gvxrb.js","assets/chevron-left-B-ZkR3E9.js","assets/chevron-right-Dz_CFSBg.js","assets/cloud-VNDnDWCa.js","assets/book-open-qnCYIwN5.js","assets/GENMarketScopeAd-DlwhqwM6.js","assets/trending-up-BdIFjo6z.js","assets/bar-chart-C8yBxVeG.js","assets/GENToolsYouWillLearnAd-_QhuqazW.js","assets/wrench-C5tTVn06.js","assets/video-CgipvEOn.js","assets/GENWhoShouldEnrollAd-D3FDnWfP.js","assets/users-HCzXCbXD.js","assets/megaphone-DpDmKPA6.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BsE_pOwq.js";
import { H as HeaderEIE } from "./HeaderEIE-By2ak8vy.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-BGsrlEgp.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-C6nY_aLr.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CH1LtBI0.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-D7wDapUS.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-CLuUxLHZ.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-DlwhqwM6.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-_QhuqazW.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-D3FDnWfP.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
