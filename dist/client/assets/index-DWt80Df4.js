const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-DsB5cI4R.js","assets/main-CRd4IIg_.js","assets/main-nhAxMPX_.css","assets/EnrollmentModal-BqPo0y01.js","assets/enrollmentApi-DIFaLmLA.js","assets/metaPixel-Bemim1W9.js","assets/arrow-right-BpFbBQ17.js","assets/DataProgramEIE-Dc2qQgWt.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-30VrLs-n.js","assets/DataMentorsEIE-BI4c_PKP.js","assets/users-zBzdCp9r.js","assets/linkedin-BE2R_KdB.js","assets/DataPricingEIE-DDaEM9Gy.js","assets/check-x9yvak94.js","assets/CAPEEIE-BNDG0wlJ.js","assets/lightbulb-CwJ65bBU.js","assets/bar-chart-IFpB4pqC.js","assets/DataCertificateEIE-Cfkwuibb.js","assets/WhoIsThisContentForEIE-CJZGpiHN.js","assets/DataAnalyticsFAQFB-CZlICoUs.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CRd4IIg_.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BVOPC2Ke.js";
import { S as StickyBookNav } from "./StickyBookNav-DI97GMcr.js";
import "./EnrollmentModal-BqPo0y01.js";
import "./enrollmentApi-DIFaLmLA.js";
import "./metaPixel-Bemim1W9.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-DsB5cI4R.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-Dc2qQgWt.js"), true ? __vite__mapDeps([7,1,2,8]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-30VrLs-n.js"), true ? __vite__mapDeps([9,1,2,8]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BI4c_PKP.js"), true ? __vite__mapDeps([10,1,2,11,12]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DDaEM9Gy.js"), true ? __vite__mapDeps([13,1,2,3,4,5,14]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-BNDG0wlJ.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-Cfkwuibb.js"), true ? __vite__mapDeps([18,1,2]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CJZGpiHN.js"), true ? __vite__mapDeps([19,1,2,14]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-CZlICoUs.js"), true ? __vite__mapDeps([20,1,2]) : void 0));
const DataAnalyticsPage = () => {
  const { setSelectedCourse } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataHeroEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroWithAbouv, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhoIsThisContentForEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataProgramEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CAPEEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataCertificateEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataMentorsEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataSkillsToolsEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataPricingEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataAnalyticsFAQFB, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyBookNav, {})
  ] }) });
};
export {
  DataAnalyticsPage as default
};
