const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-CI34iWtl.js","assets/main-Bxo1x8yy.js","assets/main-Ctc2Wiva.css","assets/EnrollmentModal-CKojwu56.js","assets/enrollmentApi-BHSFbNU_.js","assets/metaPixel-D0RJkYnI.js","assets/index-Bz74Jjsn.js","assets/proxy-DxTfwLxA.js","assets/sparkles-0F4Ny8se.js","assets/zap-Co_L5BpB.js","assets/bot-BrCrkwg9.js","assets/code-DQUtmj-6.js","assets/cpu-CV4MyXEb.js","assets/workflow-CFRDbO4y.js","assets/GENFAQAd-BRNj-keR.js","assets/help-circle-nJot1hdK.js","assets/rocket-DtvxbWOE.js","assets/GENHeroAd-BvXucrl5.js","assets/arrow-right-D5SSA7m-.js","assets/GENIntroductionAd-oWdE1hT0.js","assets/brain-DbdwVH4a.js","assets/target--3oSttgq.js","assets/GENLearningJourneyAd-HFxqyjd5.js","assets/calendar-DWpsOK5r.js","assets/chevron-left-DV2PgfeV.js","assets/chevron-right-9F8dEeEP.js","assets/cloud-DMZQgWQk.js","assets/book-open-D4d-RC0H.js","assets/GENMarketScopeAd-BAE6RXWC.js","assets/trending-up-LSgc8AR6.js","assets/bar-chart-2YYPOXIO.js","assets/GENToolsYouWillLearnAd-DwbfeHbR.js","assets/wrench-DnJV4VqJ.js","assets/video-CPJOKtOz.js","assets/GENWhoShouldEnrollAd-Dava3i6F.js","assets/users-DlSbkj3O.js","assets/megaphone-Cv0U31uW.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bxo1x8yy.js";
import { H as HeaderEIE } from "./HeaderEIE-DHj1nLAl.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-CI34iWtl.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BRNj-keR.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-BvXucrl5.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-oWdE1hT0.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-HFxqyjd5.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-BAE6RXWC.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DwbfeHbR.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-Dava3i6F.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
