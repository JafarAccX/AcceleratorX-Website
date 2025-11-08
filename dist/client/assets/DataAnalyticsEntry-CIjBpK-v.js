const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-4QijuOd1.js","assets/main--2dij7NT.js","assets/main-BLt5Qm9-.css","assets/lightbulb-CPf3JN8c.js","assets/bar-chart-DGezdcWK.js","assets/DataCertificateEIE-BB3aJTnS.js","assets/DataHeroEIE-CbhX9szx.js","assets/EnrollmentModal-BwoEtjGe.js","assets/enrollmentApi-BFYU_Xcg.js","assets/metaPixel-CkAVQXt-.js","assets/arrow-right-gPbAI7ey.js","assets/DataJourneyEIE-BhLFsy04.js","assets/trophy-D8-bCLaG.js","assets/graduation-cap-CxCLv4_W.js","assets/book-open-uRJLYMIX.js","assets/DataMentorsEIE-ucAKRIj9.js","assets/users-GrMQqZi1.js","assets/linkedin-Cx2tZRcR.js","assets/DataPricingEIE-DiVUeGS6.js","assets/check-D-XW72E-.js","assets/DataProgramEIE-JjbrI3E1.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-Dj4a-HlV.js","assets/WhoIsThisContentForEIE-CCxtaGS6.js","assets/DataAnalyticsFAQFB-DONZGzSz.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main--2dij7NT.js";
import { H as HeaderEIE } from "./HeaderEIE-4aqtTXRR.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Cz5gDwII.js";
import { S as StickyBookNav } from "./StickyBookNav-CBhB0r9q.js";
import "./EnrollmentModal-BwoEtjGe.js";
import "./enrollmentApi-BFYU_Xcg.js";
import "./metaPixel-CkAVQXt-.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-4QijuOd1.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BB3aJTnS.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-CbhX9szx.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-BhLFsy04.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-ucAKRIj9.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DiVUeGS6.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-JjbrI3E1.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-Dj4a-HlV.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CCxtaGS6.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-DONZGzSz.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
