const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-D5Sjet2q.js","assets/main-Bmt1QOda.js","assets/main-BLt5Qm9-.css","assets/lightbulb-QGYxdoyG.js","assets/bar-chart-D7xT4aKg.js","assets/DataCertificateEIE-C9HHe3FM.js","assets/DataHeroEIE-hd7nDFk-.js","assets/EnrollmentModal-CqEnZ3W7.js","assets/enrollmentApi-Cv-2bLJj.js","assets/metaPixel-D9pPvDgM.js","assets/arrow-right-D85t5K-A.js","assets/DataJourneyEIE-nbGV02ZC.js","assets/trophy-BT_K2lsy.js","assets/graduation-cap-DqnW-slu.js","assets/book-open-BqEgyqCV.js","assets/DataMentorsEIE-CBWgRdht.js","assets/users-CzPqlutS.js","assets/linkedin-U29GlrqY.js","assets/DataPricingEIE-CABH8OJG.js","assets/check-DO2UEizh.js","assets/DataProgramEIE-DkySWrO4.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-CW8J8_Xg.js","assets/WhoIsThisContentForEIE-BWNSZUP6.js","assets/DataAnalyticsFAQFB-D2hHmg5o.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bmt1QOda.js";
import { H as HeaderEIE } from "./HeaderEIE-DpIj5zyH.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Bdjbza_L.js";
import { S as StickyBookNav } from "./StickyBookNav-D0FQwCfC.js";
import "./EnrollmentModal-CqEnZ3W7.js";
import "./enrollmentApi-Cv-2bLJj.js";
import "./metaPixel-D9pPvDgM.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-D5Sjet2q.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-C9HHe3FM.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-hd7nDFk-.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-nbGV02ZC.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CBWgRdht.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CABH8OJG.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DkySWrO4.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-CW8J8_Xg.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-BWNSZUP6.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-D2hHmg5o.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
