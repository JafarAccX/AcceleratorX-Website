const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-D9hkD5Cq.js","assets/main-YlaQtpvX.js","assets/main-nEWqamtX.css","assets/EnrollmentModal-BBDW6IiB.js","assets/enrollmentApi-CyO8--cD.js","assets/metaPixel-D1cTjkIT.js","assets/sparkles-B1NpsePC.js","assets/zap-DPo-RZxe.js","assets/bot-CqZsz_kH.js","assets/code-CXdNKdjJ.js","assets/cpu-D0dY259a.js","assets/workflow-DmOnFugU.js","assets/GENFAQAd-DOmAaN3G.js","assets/help-circle-B26Zy8Sy.js","assets/rocket-DATgzq6r.js","assets/GENHeroAd-DFMD5ZyX.js","assets/arrow-right-xZ8csAvl.js","assets/GENIntroductionAd-BEBdGf_u.js","assets/brain-Dxek1bK4.js","assets/target-CsFDyEQ5.js","assets/GENLearningJourneyAd-DY7sU5rZ.js","assets/calendar-D4X2H4y1.js","assets/chevron-left-JE1gStPS.js","assets/chevron-right-BX5WZeoW.js","assets/cloud-CFTelAmr.js","assets/book-open-ijuM1Bfg.js","assets/GENMarketScopeAd-CEJzagoA.js","assets/trending-up-BUkW5vFj.js","assets/bar-chart-jbPDyV3w.js","assets/GENToolsYouWillLearnAd-XGojUPbH.js","assets/wrench-BljvnFis.js","assets/video-Dm8UPNFJ.js","assets/GENWhoShouldEnrollAd-Dk6XDkPk.js","assets/users-CZOdj9yh.js","assets/megaphone-D7tsddgO.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-YlaQtpvX.js";
import { H as HeaderEIE } from "./HeaderEIE-CMKJ5D-p.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-D9hkD5Cq.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-DOmAaN3G.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-DFMD5ZyX.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-BEBdGf_u.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-DY7sU5rZ.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-CEJzagoA.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-XGojUPbH.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-Dk6XDkPk.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
