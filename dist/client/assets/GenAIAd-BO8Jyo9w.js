const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GENBYOAAd-Dgv2otdL.js","assets/main-Bz-Nf_l9.js","assets/main-BTruDH6p.css","assets/EnrollmentModal-LbwVMh_t.js","assets/enrollmentApi-rB8Ym3X4.js","assets/metaPixel-CzVyWGmV.js","assets/index-C-AvqvvG.js","assets/proxy-DEWmjdqp.js","assets/sparkles-DUYeyqJ_.js","assets/zap-CK3ifaqw.js","assets/bot-mIMg2sW9.js","assets/code-B44Wtkd_.js","assets/cpu-C0g17TE_.js","assets/workflow-BeqwOE24.js","assets/GENFAQAd-By1Y7Rj7.js","assets/help-circle-DwIRwziS.js","assets/rocket-DDX5IISU.js","assets/GENHeroAd-BcHVxPcn.js","assets/arrow-right-fPsRgeyK.js","assets/GENIntroductionAd-DpB9K3Yx.js","assets/brain-5vYSb-95.js","assets/target-De5hZceu.js","assets/GENLearningJourneyAd-C3Nkd1CS.js","assets/calendar-BwrJ9boG.js","assets/chevron-left-DUWaPeya.js","assets/chevron-right-B0Y_u_Hh.js","assets/cloud-JVx8jneb.js","assets/book-open-DoMfsFEw.js","assets/GENMarketScopeAd-mOj6YomM.js","assets/trending-up-C7UnozKl.js","assets/bar-chart-7tXvJ5XO.js","assets/GENToolsYouWillLearnAd-DOy_VOrO.js","assets/wrench-DKhW_9oN.js","assets/video-DjEvPjqx.js","assets/GENWhoShouldEnrollAd-dPXi2dsd.js","assets/users-CvaBfnJ9.js","assets/megaphone-BbXKtglA.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bz-Nf_l9.js";
import { H as HeaderEIE } from "./HeaderEIE-CRvqRrAn.js";
const GENBYOAAd = reactExports.lazy(() => __vitePreload(() => import("./GENBYOAAd-Dgv2otdL.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const GENFAQAd = reactExports.lazy(() => __vitePreload(() => import("./GENFAQAd-By1Y7Rj7.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,15,16]) : void 0));
const GENHeroAd = reactExports.lazy(() => __vitePreload(() => import("./GENHeroAd-BcHVxPcn.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18]) : void 0));
const GENIntroductionAd = reactExports.lazy(() => __vitePreload(() => import("./GENIntroductionAd-DpB9K3Yx.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,20,21]) : void 0));
const GENLearningJourneyAd = reactExports.lazy(() => __vitePreload(() => import("./GENLearningJourneyAd-C3Nkd1CS.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,23,24,25,16,26,27]) : void 0));
const GENMarketScopeAd = reactExports.lazy(() => __vitePreload(() => import("./GENMarketScopeAd-mOj6YomM.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,29,21,30]) : void 0));
const GENToolsYouWillLearnAd = reactExports.lazy(() => __vitePreload(() => import("./GENToolsYouWillLearnAd-DOy_VOrO.js"), true ? __vite__mapDeps([31,1,2,16,32,26,11,33,20]) : void 0));
const GENWhoShouldEnrollAd = reactExports.lazy(() => __vitePreload(() => import("./GENWhoShouldEnrollAd-dPXi2dsd.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,35,36,20]) : void 0));
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
