const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-Mtnvi9JK.js","assets/main-CtSa0pDV.js","assets/main-g1H-mEfk.css","assets/lightbulb-lJe-aJ8a.js","assets/bar-chart-Cde_1MhZ.js","assets/DataCertificateEIE-CWVfhOI6.js","assets/DataHeroEIE-x5wJNZE8.js","assets/EnrollmentModal-BetrdJkE.js","assets/enrollmentApi-Bp8HLVVn.js","assets/metaPixel-B-L5LvPr.js","assets/arrow-right-BuG_kqA5.js","assets/DataJourneyEIE-D9ULn76E.js","assets/trophy-B0m2c_7-.js","assets/graduation-cap-CGKVnTDb.js","assets/book-open-BFQVRpgM.js","assets/DataMentorsEIE-BeTy4ks-.js","assets/users-B4L4Or45.js","assets/linkedin-BsfZ2NF6.js","assets/DataPricingEIE-5jwpEMdk.js","assets/check-BWgrIcrs.js","assets/DataProgramEIE-Cj0VU5Q6.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-pHWaS20g.js","assets/WhoIsThisContentForEIE-D6YM5fle.js","assets/DataAnalyticsFAQFB-CudF_QGP.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CtSa0pDV.js";
import { H as HeaderEIE } from "./HeaderEIE-DMYTpH2-.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DiOA9rRN.js";
import { S as StickyBookNav } from "./StickyBookNav-CNRRbfcc.js";
import "./EnrollmentModal-BetrdJkE.js";
import "./enrollmentApi-Bp8HLVVn.js";
import "./metaPixel-B-L5LvPr.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Mtnvi9JK.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-CWVfhOI6.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-x5wJNZE8.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-D9ULn76E.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BeTy4ks-.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-5jwpEMdk.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-Cj0VU5Q6.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-pHWaS20g.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-D6YM5fle.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-CudF_QGP.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
