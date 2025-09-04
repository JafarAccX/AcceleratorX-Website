const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-CjsalDSd.js","assets/main-D-AGBQ1V.js","assets/main-BqzrM4wO.css","assets/EnrollmentModal-CF0_iQlt.js","assets/enrollmentApi-DJDBxQt6.js","assets/metaPixel-C_Hbs_hE.js","assets/index-Db-Ojao2.js","assets/proxy-BKgBDLzu.js","assets/arrow-right-DaRs7QIu.js","assets/DataProgramEIE-BNJMdtrD.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-C7lMpMHI.js","assets/DataMentorsEIE-CUZff7hl.js","assets/users-kSLZckgQ.js","assets/linkedin-DG2VjpB5.js","assets/DataPricingEIE-vvL-Gbfj.js","assets/check-CdtixV7a.js","assets/CAPEEIE-D0GesRIb.js","assets/lightbulb-6umB6Mq4.js","assets/bar-chart-dBNN_mH6.js","assets/DataCertificateEIE-CWYhGVXD.js","assets/WhoIsThisContentForEIE-D74MC5W0.js","assets/DataAnalyticsFAQFB-Bsjk3t95.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-D-AGBQ1V.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CbH7Zrfy.js";
import { S as StickyBookNav } from "./StickyBookNav-C0bppEzh.js";
import "./EnrollmentModal-CF0_iQlt.js";
import "./enrollmentApi-DJDBxQt6.js";
import "./metaPixel-C_Hbs_hE.js";
import "./index-Db-Ojao2.js";
import "./proxy-BKgBDLzu.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-CjsalDSd.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-BNJMdtrD.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-C7lMpMHI.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CUZff7hl.js"), true ? __vite__mapDeps([12,1,2,7,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-vvL-Gbfj.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-D0GesRIb.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-CWYhGVXD.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-D74MC5W0.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-Bsjk3t95.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
