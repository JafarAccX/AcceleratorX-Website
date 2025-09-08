const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-wQ-ZZO6p.js","assets/main-Ctt__ttU.js","assets/main-CnF9mUWs.css","assets/proxy-B8iZIzY2.js","assets/lightbulb-BBpI2Mm_.js","assets/bar-chart-CFlRrmVO.js","assets/DataCertificateEIE-BL7Oqzjv.js","assets/DataHeroEIE-DA36MLGm.js","assets/EnrollmentModal-Cuo9X1Eb.js","assets/enrollmentApi-dQOlnTeY.js","assets/metaPixel-B8ufuOhe.js","assets/index-ED9k-zp5.js","assets/arrow-right-CGRFgriO.js","assets/DataJourneyEIE-D0ekw5xg.js","assets/trophy-DQ8I4OBd.js","assets/graduation-cap-DeKpw75x.js","assets/book-open-D4PT-A1k.js","assets/DataMentorsEIE-DGFoWvD3.js","assets/users-D8SaTqiS.js","assets/linkedin-SiJWwn_D.js","assets/DataPricingEIE-DWe3Dn-T.js","assets/check-BG_LglXa.js","assets/DataProgramEIE-CUsU0lQd.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-C6mq1UDj.js","assets/WhoIsThisContentForEIE-DdhZ6iC4.js","assets/DataAnalyticsFAQFB-DFORaUpQ.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Ctt__ttU.js";
import { H as HeaderEIE } from "./HeaderEIE-CzLn5g7D.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CqIp7zEZ.js";
import { S as StickyBookNav } from "./StickyBookNav-DqTr2tsc.js";
import "./EnrollmentModal-Cuo9X1Eb.js";
import "./enrollmentApi-dQOlnTeY.js";
import "./metaPixel-B8ufuOhe.js";
import "./index-ED9k-zp5.js";
import "./proxy-B8iZIzY2.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-wQ-ZZO6p.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BL7Oqzjv.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-DA36MLGm.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-D0ekw5xg.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-DGFoWvD3.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DWe3Dn-T.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-CUsU0lQd.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-C6mq1UDj.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DdhZ6iC4.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-DFORaUpQ.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
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
