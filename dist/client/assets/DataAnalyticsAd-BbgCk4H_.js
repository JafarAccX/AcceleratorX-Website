const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-BNDG0wlJ.js","assets/main-CRd4IIg_.js","assets/main-nhAxMPX_.css","assets/lightbulb-CwJ65bBU.js","assets/bar-chart-IFpB4pqC.js","assets/DataCertificateEIE-Cfkwuibb.js","assets/DataHeroEIE-DsB5cI4R.js","assets/EnrollmentModal-BqPo0y01.js","assets/enrollmentApi-DIFaLmLA.js","assets/metaPixel-Bemim1W9.js","assets/arrow-right-BpFbBQ17.js","assets/DataJourneyEIE-DBfWPWv_.js","assets/trophy-zMbbbKW8.js","assets/graduation-cap-DCiJuA9E.js","assets/book-open-D4UhIaMq.js","assets/DataMentorsEIE-BI4c_PKP.js","assets/users-zBzdCp9r.js","assets/linkedin-BE2R_KdB.js","assets/DataPricingEIE-DDaEM9Gy.js","assets/check-x9yvak94.js","assets/DataProgramEIE-Dc2qQgWt.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-30VrLs-n.js","assets/WhoIsThisContentForEIE-CJZGpiHN.js","assets/DataAnalyticsFAQFB-CZlICoUs.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CRd4IIg_.js";
import { H as HeaderEIE } from "./HeaderEIE-Bi5_mUDP.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BVOPC2Ke.js";
import { S as StickyBookNav } from "./StickyBookNav-DI97GMcr.js";
import "./EnrollmentModal-BqPo0y01.js";
import "./enrollmentApi-DIFaLmLA.js";
import "./metaPixel-Bemim1W9.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-BNDG0wlJ.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-Cfkwuibb.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-DsB5cI4R.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-DBfWPWv_.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BI4c_PKP.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DDaEM9Gy.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-Dc2qQgWt.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-30VrLs-n.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CJZGpiHN.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-CZlICoUs.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
