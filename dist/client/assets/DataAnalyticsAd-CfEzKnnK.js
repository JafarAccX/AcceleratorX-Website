const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-BmEmdG0G.js","assets/main-WA_0Fhhs.js","assets/main-ZJ57361l.css","assets/lightbulb-CPDK0gHp.js","assets/bar-chart-B1ESxWdT.js","assets/DataCertificateEIE-XecnQzJK.js","assets/DataHeroEIE-MgdGC4xW.js","assets/EnrollmentModal-LPZC0Pif.js","assets/enrollmentApi-BN4yZFw0.js","assets/metaPixel-D-2Rwuz7.js","assets/arrow-right-CeWL_7zL.js","assets/DataJourneyEIE-BXVbX7OR.js","assets/trophy-DlyAWQGc.js","assets/graduation-cap-BXYvIeEC.js","assets/book-open-CH7gdj4H.js","assets/DataMentorsEIE-BD9RB8js.js","assets/users-tUZnxyVJ.js","assets/linkedin-COAdn9xh.js","assets/DataPricingEIE-BUVMZRbj.js","assets/check-RI2kmGsn.js","assets/DataProgramEIE-BJ8Zafdd.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-6VVNDznO.js","assets/WhoIsThisContentForEIE-CJTgkqeX.js","assets/DataAnalyticsFAQFB-CN822ind.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-WA_0Fhhs.js";
import { H as HeaderEIE } from "./HeaderEIE-B3GlKfjO.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DYwx7_TP.js";
import { S as StickyBookNav } from "./StickyBookNav-D8WPz5t3.js";
import "./EnrollmentModal-LPZC0Pif.js";
import "./enrollmentApi-BN4yZFw0.js";
import "./metaPixel-D-2Rwuz7.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-BmEmdG0G.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-XecnQzJK.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-MgdGC4xW.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-BXVbX7OR.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BD9RB8js.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-BUVMZRbj.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-BJ8Zafdd.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-6VVNDznO.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CJTgkqeX.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-CN822ind.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
