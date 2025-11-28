const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-tWOAtFgJ.js","assets/main-BzTttlQZ.js","assets/main-Ce-Pe5sq.css","assets/EnrollmentModal-BJCfKPkC.js","assets/enrollmentApi-Csc-QPjD.js","assets/metaPixel-DE20CzjQ.js","assets/sparkles-CbVydhFe.js","assets/zap-C9rzmlqO.js","assets/bot-76mMa09e.js","assets/code-DvzuED46.js","assets/cpu-OGUG4zQf.js","assets/workflow-CKWtzuIp.js","assets/GENFAQAd-BFORO7UV.js","assets/help-circle-DKTTV9nG.js","assets/rocket-D608d7Iu.js","assets/GENHeroAd-BcDvRVnx.js","assets/arrow-right-DMXoacG5.js","assets/GENIntroductionAd-DV8hX7iv.js","assets/brain-B6Nvf_05.js","assets/target-DjlQec_d.js","assets/GENLearningJourneyAd-1BzI8lsc.js","assets/calendar-AQJlC-4f.js","assets/chevron-left-CHjtV5ln.js","assets/chevron-right-k9A5_Bo9.js","assets/cloud-BN5iPKpH.js","assets/book-open-D2TR0pgX.js","assets/GENMarketScopeAd-Ch4z4zeg.js","assets/trending-up-D2J61tdZ.js","assets/bar-chart-DZMCVAyB.js","assets/GENToolsYouWillLearnAd-Cge00OAJ.js","assets/wrench-Dn9P7ued.js","assets/video-tChPERqV.js","assets/GENWhoShouldEnrollAd-DQ4Wm2DU.js","assets/users-CEydn7JE.js","assets/megaphone-Cfjd4Mhx.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BzTttlQZ.js";
import { H as HeaderEIE } from "./HeaderEIE-D1MJGAq1.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-tWOAtFgJ.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-BFORO7UV.js"), true ? __vite__mapDeps([12,1,2,3,4,5,13,14]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-BcDvRVnx.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DV8hX7iv.js"), true ? __vite__mapDeps([17,1,2,3,4,5,18,19]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-1BzI8lsc.js"), true ? __vite__mapDeps([20,1,2,3,4,5,21,22,23,14,24,25]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-Ch4z4zeg.js"), true ? __vite__mapDeps([26,1,2,3,4,5,27,19,28]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-Cge00OAJ.js"), true ? __vite__mapDeps([29,1,2,14,30,24,9,31,18]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-DQ4Wm2DU.js"), true ? __vite__mapDeps([32,1,2,3,4,5,33,34,18]) : void 0));
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
