const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-DqLqnj4b.js","assets/main-CvuwUR0U.js","assets/main-ClQXKXUm.css","assets/EnrollmentModal-keSFpLvd.js","assets/enrollmentApi-DLc4dGkd.js","assets/metaPixel-btpR9i3d.js","assets/sparkles-C8J69WlA.js","assets/zap-Bl36My_j.js","assets/bot-BFtzNdcR.js","assets/code-D-IQDsI4.js","assets/cpu-CYlIPoKj.js","assets/workflow-BA_E2N8U.js","assets/GENFAQAd-BzaTGagH.js","assets/help-circle-BsNfqDPM.js","assets/rocket-Dy2OgCyo.js","assets/GENHeroAd-B9jI_PXX.js","assets/arrow-right-CqOeAJYx.js","assets/GENIntroductionAd-COiU9Tfr.js","assets/brain-JGc6eHkm.js","assets/target-D9uTw_9w.js","assets/GENLearningJourneyAd-Dm6AsW07.js","assets/calendar-DFNtEgcO.js","assets/chevron-left-B2fWHAhJ.js","assets/chevron-right-CHDwib2g.js","assets/cloud-Do1E8kLF.js","assets/book-open-D6tEtkM3.js","assets/GENMarketScopeAd-DQph-qiq.js","assets/trending-up-CrB7SztH.js","assets/bar-chart-C_r6fZ3O.js","assets/GENToolsYouWillLearnAd-D85fEupo.js","assets/wrench-BjRIpxXM.js","assets/video-CTs9kPK5.js","assets/GENWhoShouldEnrollAd-C2NfUdUF.js","assets/users-C_32Ngv4.js","assets/megaphone-CQaE5nAg.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CvuwUR0U.js";
import { H as HeaderEIE } from "./HeaderEIE-BYMD5WXH.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-DqLqnj4b.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BzaTGagH.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-B9jI_PXX.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-COiU9Tfr.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-Dm6AsW07.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-DQph-qiq.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-D85fEupo.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-C2NfUdUF.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
