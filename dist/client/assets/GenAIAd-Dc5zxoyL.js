const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-BVGh4_PS.js","assets/main-D-AGBQ1V.js","assets/main-BqzrM4wO.css","assets/EnrollmentModal-CF0_iQlt.js","assets/enrollmentApi-DJDBxQt6.js","assets/metaPixel-C_Hbs_hE.js","assets/index-Db-Ojao2.js","assets/proxy-BKgBDLzu.js","assets/sparkles-DyMyVuNI.js","assets/zap-Cd554AK0.js","assets/bot-CE9pa9PB.js","assets/code-CqQUIWTM.js","assets/cpu-C-yhIzbr.js","assets/workflow-CGsY0ZqG.js","assets/GENFAQAd-DT32fani.js","assets/help-circle-YLrBXpXJ.js","assets/rocket-BTR2g5V7.js","assets/GENHeroAd-DdPvxmJg.js","assets/arrow-right-DaRs7QIu.js","assets/GENIntroductionAd-Dr1nAMXe.js","assets/brain-C7K9LGjI.js","assets/target-CcP6l83z.js","assets/GENLearningJourneyAd-Bv23FMjJ.js","assets/calendar-BwjiPMLA.js","assets/chevron-left-bkpDIWNp.js","assets/chevron-right-GLT4iVAv.js","assets/cloud-CYLf1U0e.js","assets/book-open-Dhpzl14o.js","assets/GENMarketScopeAd-BLmFem6R.js","assets/trending-up-CLmClpSE.js","assets/bar-chart-dBNN_mH6.js","assets/GENToolsYouWillLearnAd-Cin8Tw1k.js","assets/wrench-DrZC_0jA.js","assets/video-Cq1b_ebA.js","assets/GENWhoShouldEnrollAd-aNYccFfU.js","assets/users-kSLZckgQ.js","assets/megaphone-CzhOPG3x.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-D-AGBQ1V.js";
import { H as HeaderEIE } from "./HeaderEIE-CZ5tVZfQ.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-BVGh4_PS.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-DT32fani.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-DdPvxmJg.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-Dr1nAMXe.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-Bv23FMjJ.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-BLmFem6R.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-Cin8Tw1k.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-aNYccFfU.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
