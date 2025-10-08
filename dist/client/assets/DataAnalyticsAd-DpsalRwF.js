const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-bJpaIm5T.js","assets/main-CYXtjh6i.js","assets/main-ClQXKXUm.css","assets/lightbulb-B8D6dvmg.js","assets/bar-chart-DYfEVFYA.js","assets/DataCertificateEIE-BSeAAxHA.js","assets/DataHeroEIE-LESrWsmG.js","assets/EnrollmentModal-DcnBQ-EC.js","assets/enrollmentApi-JNGmvjgr.js","assets/metaPixel-CmtfEEd5.js","assets/arrow-right-DZfVus5g.js","assets/DataJourneyEIE-Dj9wlsQp.js","assets/trophy-co6Ngv2K.js","assets/graduation-cap-RKPKHEbN.js","assets/book-open-CzoRnbTa.js","assets/DataMentorsEIE-DIocJMWU.js","assets/users-CdcQY_SG.js","assets/linkedin-DzGqIPIS.js","assets/DataPricingEIE-CeTH9MtT.js","assets/check--CHR-4Le.js","assets/DataProgramEIE-BqwmpCI4.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-BxYU1Al2.js","assets/WhoIsThisContentForEIE-BVQjKGID.js","assets/DataAnalyticsFAQFB-C51hACb_.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CYXtjh6i.js";
import { H as HeaderEIE } from "./HeaderEIE-UO4YLgMy.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DkD-tlbZ.js";
import { S as StickyBookNav } from "./StickyBookNav-BKcf_W7p.js";
import "./EnrollmentModal-DcnBQ-EC.js";
import "./enrollmentApi-JNGmvjgr.js";
import "./metaPixel-CmtfEEd5.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-bJpaIm5T.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BSeAAxHA.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-LESrWsmG.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-Dj9wlsQp.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-DIocJMWU.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CeTH9MtT.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-BqwmpCI4.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-BxYU1Al2.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-BVQjKGID.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-C51hACb_.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
const DataAnalyticsAd = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataHeroEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroWithAbouv, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhoIsThisContentForEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataProgramEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CAPEEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataJourneyEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataCertificateEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataMentorsEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataSkillsToolsEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataPricingEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataAnalyticsFAQFB, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StickyBookNav, {})
    ] })
  ] });
};
export {
  DataAnalyticsAd as default
};
