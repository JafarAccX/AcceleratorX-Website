const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-D-9xdyWk.js","assets/main-C2SXHoHD.js","assets/main-DzJ5IfLy.css","assets/EnrollmentModal-CL9C06ud.js","assets/enrollmentApi-BkaCLl_k.js","assets/metaPixel-BGrWFMSd.js","assets/index-UU-4IguJ.js","assets/proxy-BAKFzumD.js","assets/sparkles-D3e_kSze.js","assets/zap-DWEQKOG4.js","assets/bot-DoHea0Dr.js","assets/code-C9ahXdTk.js","assets/cpu-CYwImlJT.js","assets/workflow-W1z7eL6H.js","assets/GENFAQAd-Vf1zHe9I.js","assets/help-circle-DReHnE68.js","assets/rocket-DEL2QMIP.js","assets/GENHeroAd-CU0O-8_g.js","assets/arrow-right-C8kfY9g8.js","assets/GENIntroductionAd-BpV72Nuq.js","assets/brain-CP6ygtIK.js","assets/target-bYw-6Zpe.js","assets/GENLearningJourneyAd-C7DznD6J.js","assets/calendar-DkGNE65T.js","assets/chevron-left-BUW6PheJ.js","assets/chevron-right-CNly6Lz-.js","assets/cloud-CguHPaaQ.js","assets/book-open-CkjxDuNI.js","assets/GENMarketScopeAd-CqX_xH07.js","assets/trending-up-z0CZD1Wl.js","assets/bar-chart-B9nG8xly.js","assets/GENToolsYouWillLearnAd-Gj6rjgZZ.js","assets/wrench-DwIxwGd9.js","assets/video-VSKcVZk5.js","assets/GENWhoShouldEnrollAd-DnZsqaMF.js","assets/users-Bl8ZOq4h.js","assets/megaphone-CgMu43v3.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-C2SXHoHD.js";
import { H as HeaderEIE } from "./HeaderEIE-Fd-cjTB0.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-D-9xdyWk.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-Vf1zHe9I.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CU0O-8_g.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-BpV72Nuq.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-C7DznD6J.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-CqX_xH07.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-Gj6rjgZZ.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-DnZsqaMF.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
