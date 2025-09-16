const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-lkxhTFM7.js","assets/main-MWsp8Q-I.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-BWhyTLEl.js","assets/enrollmentApi-cVEso6qE.js","assets/metaPixel-C30SEqt8.js","assets/index-BlWDocJ3.js","assets/proxy-Dp4G5h__.js","assets/sparkles-CBYyc0PX.js","assets/zap-aSHu7CL7.js","assets/bot-CMVeHffA.js","assets/code-QgKbQQvt.js","assets/cpu-Cv7SW3OB.js","assets/workflow-bj_yjrUY.js","assets/GENFAQAd-tCRsX8vE.js","assets/help-circle-DKMUr8pe.js","assets/rocket-mrMFkh8D.js","assets/GENHeroAd-BtmrZ6DQ.js","assets/arrow-right-lcQZiN15.js","assets/GENIntroductionAd-0mFVIwfn.js","assets/brain-CL8NQBM_.js","assets/target-Daizc2vj.js","assets/GENLearningJourneyAd-Cn552JKJ.js","assets/calendar-BJTneh3p.js","assets/chevron-left-DwhL3cFm.js","assets/chevron-right-BV2h7ZHe.js","assets/cloud-BjeGP7Ag.js","assets/book-open-Bj4RNcB3.js","assets/GENMarketScopeAd-B93Z4cHC.js","assets/trending-up-COljwoFy.js","assets/bar-chart-BatPy-in.js","assets/GENToolsYouWillLearnAd-DkUxUDVF.js","assets/wrench-C_iM_TzD.js","assets/video-Bxo_rr7D.js","assets/GENWhoShouldEnrollAd-xr2a7itI.js","assets/users-Wfq3dHs5.js","assets/megaphone-hcFE-NsH.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-MWsp8Q-I.js";
import { H as HeaderEIE } from "./HeaderEIE-4vkoqrSM.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-lkxhTFM7.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-tCRsX8vE.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-BtmrZ6DQ.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-0mFVIwfn.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-Cn552JKJ.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-B93Z4cHC.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DkUxUDVF.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-xr2a7itI.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
