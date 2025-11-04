const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-DxvXYGh6.js","assets/main-CSwsI03w.js","assets/main-NGHnJCuZ.css","assets/lightbulb-DD4jUs_a.js","assets/bar-chart-D9dZlGsO.js","assets/DataCertificateEIE-DhDEAtrA.js","assets/DataHeroEIE-_7QUn2EQ.js","assets/EnrollmentModal-68jSegjg.js","assets/enrollmentApi-DWbIXGMt.js","assets/metaPixel-DG5N3ym5.js","assets/arrow-right-0RHzg7d3.js","assets/DataJourneyEIE-rDAulEty.js","assets/trophy-Dbiv3mxc.js","assets/graduation-cap-CwUb1X4_.js","assets/book-open-CmcHGxIv.js","assets/DataMentorsEIE-C5BBOr6Z.js","assets/users-BLdnyJs-.js","assets/linkedin-BP0QyKV_.js","assets/DataPricingEIE-p4X33END.js","assets/check-Cq2SDlxO.js","assets/DataProgramEIE-B1PhGF98.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-CaXIYJTW.js","assets/WhoIsThisContentForEIE-BjMoOx5N.js","assets/DataAnalyticsFAQFB-COuAtP88.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CSwsI03w.js";
import { H as HeaderEIE } from "./HeaderEIE-CdKtrF_S.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-C6_6viQe.js";
import { S as StickyBookNav } from "./StickyBookNav-ThxxFjQB.js";
import "./EnrollmentModal-68jSegjg.js";
import "./enrollmentApi-DWbIXGMt.js";
import "./metaPixel-DG5N3ym5.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-DxvXYGh6.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DhDEAtrA.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-_7QUn2EQ.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-rDAulEty.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-C5BBOr6Z.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-p4X33END.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-B1PhGF98.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-CaXIYJTW.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-BjMoOx5N.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-COuAtP88.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
