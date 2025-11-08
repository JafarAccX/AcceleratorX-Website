const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-Cqdo9c5U.js","assets/main-pPMPSF4E.js","assets/main-BLt5Qm9-.css","assets/lightbulb-A2Il3VlF.js","assets/bar-chart-Dx6v4FFa.js","assets/DataCertificateEIE-B4vyNFQN.js","assets/DataHeroEIE-CNdA4D9D.js","assets/EnrollmentModal-Bfd3L0vN.js","assets/enrollmentApi-sA0V8bFm.js","assets/metaPixel-DzY0zvt3.js","assets/arrow-right-C1P5bEga.js","assets/DataJourneyEIE-8TEutCb7.js","assets/trophy-C94PpVW6.js","assets/graduation-cap-D4dHHX5n.js","assets/book-open-CicP61Nf.js","assets/DataMentorsEIE-BSxonegQ.js","assets/users-8QxDqiIW.js","assets/linkedin-BZ5ke1u8.js","assets/DataPricingEIE-DzKozSLx.js","assets/check-D2shrlQK.js","assets/DataProgramEIE-D0eVGdn6.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-IkV2UuKY.js","assets/WhoIsThisContentForEIE-DpJg2NyA.js","assets/DataAnalyticsFAQFB-BEUh4cIr.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-pPMPSF4E.js";
import { H as HeaderEIE } from "./HeaderEIE-CpgI9CCh.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Bgfkn93O.js";
import { S as StickyBookNav } from "./StickyBookNav-CtN95WCY.js";
import "./EnrollmentModal-Bfd3L0vN.js";
import "./enrollmentApi-sA0V8bFm.js";
import "./metaPixel-DzY0zvt3.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Cqdo9c5U.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-B4vyNFQN.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-CNdA4D9D.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-8TEutCb7.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BSxonegQ.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DzKozSLx.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-D0eVGdn6.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-IkV2UuKY.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DpJg2NyA.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-BEUh4cIr.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
