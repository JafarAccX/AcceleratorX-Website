const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-BRFyzxr_.js","assets/main-xBPx3qIl.js","assets/main-BLt5Qm9-.css","assets/lightbulb-BGglse_G.js","assets/bar-chart-PS9E7u0E.js","assets/DataCertificateEIE-DfLSzWD1.js","assets/DataHeroEIE-BrwIUloL.js","assets/EnrollmentModal-B_c6jQWh.js","assets/enrollmentApi-BBPudnHx.js","assets/metaPixel-Dks3G9U_.js","assets/arrow-right-B14A2e2Y.js","assets/DataJourneyEIE-YcbQ3gIV.js","assets/trophy-Ctcswehc.js","assets/graduation-cap-oimP11RR.js","assets/book-open-Dd0X8U6d.js","assets/DataMentorsEIE-CyGqXtf-.js","assets/users-BUpqX7F3.js","assets/linkedin-BRtM_FYL.js","assets/DataPricingEIE-DE7u4Z8o.js","assets/check-CXLmR8u5.js","assets/DataProgramEIE-BfQvxtQU.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-CxVelJXg.js","assets/WhoIsThisContentForEIE-DwS0jBfb.js","assets/DataAnalyticsFAQFB-ZwmFB9Mh.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-xBPx3qIl.js";
import { H as HeaderEIE } from "./HeaderEIE-CVF0dEn6.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CNBH2rBo.js";
import { S as StickyBookNav } from "./StickyBookNav-COKUmz_5.js";
import "./EnrollmentModal-B_c6jQWh.js";
import "./enrollmentApi-BBPudnHx.js";
import "./metaPixel-Dks3G9U_.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-BRFyzxr_.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DfLSzWD1.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-BrwIUloL.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-YcbQ3gIV.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CyGqXtf-.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DE7u4Z8o.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-BfQvxtQU.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-CxVelJXg.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DwS0jBfb.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-ZwmFB9Mh.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
