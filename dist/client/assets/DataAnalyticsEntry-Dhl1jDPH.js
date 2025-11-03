const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-spnLShik.js","assets/main-EhB7M4T3.js","assets/main-ZJ57361l.css","assets/lightbulb-Do0mymFt.js","assets/bar-chart-CIa0V1M1.js","assets/DataCertificateEIE-BAIOe3WR.js","assets/DataHeroEIE-DcvABukk.js","assets/EnrollmentModal-CaNAI2uf.js","assets/enrollmentApi-eh5T7sQa.js","assets/metaPixel-ClzrpHuU.js","assets/arrow-right-CDHEKS8n.js","assets/DataJourneyEIE-Bvyx9V2h.js","assets/trophy-CVVa-Tgj.js","assets/graduation-cap-dHe-376o.js","assets/book-open-CLe2X9pc.js","assets/DataMentorsEIE-CvDKcKO7.js","assets/users-CazCd-RW.js","assets/linkedin-CR8w8DS_.js","assets/DataPricingEIE-B1sgWfGC.js","assets/check-Tpc-kpGA.js","assets/DataProgramEIE-Dwtb0nFb.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-B7j7igwv.js","assets/WhoIsThisContentForEIE-BhAKjVRF.js","assets/DataAnalyticsFAQFB-B5AeDpmN.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-EhB7M4T3.js";
import { H as HeaderEIE } from "./HeaderEIE-2Wzioal6.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BBZRhbJ3.js";
import { S as StickyBookNav } from "./StickyBookNav-Cyu03Zij.js";
import "./EnrollmentModal-CaNAI2uf.js";
import "./enrollmentApi-eh5T7sQa.js";
import "./metaPixel-ClzrpHuU.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-spnLShik.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BAIOe3WR.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-DcvABukk.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-Bvyx9V2h.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CvDKcKO7.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-B1sgWfGC.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-Dwtb0nFb.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-B7j7igwv.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-BhAKjVRF.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-B5AeDpmN.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
const DataAnalyticsEntry = () => {
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
  DataAnalyticsEntry as default
};
