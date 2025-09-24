const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-NQ1Rf84h.js","assets/main-Br24Bg9q.js","assets/main-7GdIFNw8.css","assets/EnrollmentModal-DUd2mNsm.js","assets/enrollmentApi-DBnLqubN.js","assets/metaPixel-Cr0rW0qb.js","assets/index-KeK93Ytm.js","assets/proxy-BpV0Cpmy.js","assets/sparkles-tYypDjUq.js","assets/zap-C3RtKBJ7.js","assets/bot-Bx1vjmd1.js","assets/code-CqhzOdWE.js","assets/cpu-Unj-Rnyg.js","assets/workflow-Ch669Stj.js","assets/GENFAQAd-C45z0TIw.js","assets/help-circle-BmmqjorE.js","assets/rocket-ByYH6AhU.js","assets/GENHeroAd-CQG3B8ha.js","assets/arrow-right-DGL0WtHg.js","assets/GENIntroductionAd-CzKLoRfr.js","assets/brain-Cib6o-83.js","assets/target-CsCm9Pkz.js","assets/GENLearningJourneyAd-C6KqJzH8.js","assets/calendar-IucoqwdN.js","assets/chevron-left-BfOm6alB.js","assets/chevron-right-D5mlKP0o.js","assets/cloud-71Rrk2QR.js","assets/book-open-bW5bh_YZ.js","assets/GENMarketScopeAd-CQZ4kq8R.js","assets/trending-up-Dk4oPoHa.js","assets/bar-chart-55bNKtOT.js","assets/GENToolsYouWillLearnAd-BpshZJYR.js","assets/wrench-MNI6Mja1.js","assets/video-CfGOSsA2.js","assets/GENWhoShouldEnrollAd-Ez_pNdrn.js","assets/users-BNm-EPws.js","assets/megaphone-CAv54lqe.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Br24Bg9q.js";
import { H as HeaderEIE } from "./HeaderEIE-D113QDhs.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-NQ1Rf84h.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-C45z0TIw.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-CQG3B8ha.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-CzKLoRfr.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-C6KqJzH8.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-CQZ4kq8R.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-BpshZJYR.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-Ez_pNdrn.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
