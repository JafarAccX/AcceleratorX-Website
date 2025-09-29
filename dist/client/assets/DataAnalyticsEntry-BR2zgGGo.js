const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-CMJ-zioJ.js","assets/main-CQMtEg9v.js","assets/main-Ctc2Wiva.css","assets/proxy-DMpmILPN.js","assets/lightbulb-Bxq7A4Ad.js","assets/bar-chart-BloAgfRj.js","assets/DataCertificateEIE-C87V3Rrf.js","assets/DataHeroEIE-7jUVJbdT.js","assets/EnrollmentModal-fAHxGVX1.js","assets/enrollmentApi-BcjLvQGy.js","assets/metaPixel-CvLHVZuZ.js","assets/index-CPGWx1Fa.js","assets/arrow-right-EF8ty81W.js","assets/DataJourneyEIE-BlUSxrP1.js","assets/trophy-CPu-EXXU.js","assets/graduation-cap-COFkAcIw.js","assets/book-open-BZovkPkt.js","assets/DataMentorsEIE-CV8vjy_A.js","assets/users-CM_hleka.js","assets/linkedin-D-q3KUAL.js","assets/DataPricingEIE-DOL_Ly0a.js","assets/check-CRC0sh5d.js","assets/DataProgramEIE-BZULc8IO.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-BfTi0nxi.js","assets/WhoIsThisContentForEIE-D8S3yXUg.js","assets/DataAnalyticsFAQFB-CZNO9M1w.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CQMtEg9v.js";
import { H as HeaderEIE } from "./HeaderEIE-CC2-ByD6.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BOJUHyij.js";
import { S as StickyBookNav } from "./StickyBookNav-B0po998J.js";
import "./EnrollmentModal-fAHxGVX1.js";
import "./enrollmentApi-BcjLvQGy.js";
import "./metaPixel-CvLHVZuZ.js";
import "./index-CPGWx1Fa.js";
import "./proxy-DMpmILPN.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-CMJ-zioJ.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-C87V3Rrf.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-7jUVJbdT.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-BlUSxrP1.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CV8vjy_A.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DOL_Ly0a.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-BZULc8IO.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-BfTi0nxi.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-D8S3yXUg.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-CZNO9M1w.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
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
