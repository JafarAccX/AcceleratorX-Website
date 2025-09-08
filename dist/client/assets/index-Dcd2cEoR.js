const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-DA36MLGm.js","assets/main-Ctt__ttU.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-Cuo9X1Eb.js","assets/enrollmentApi-dQOlnTeY.js","assets/metaPixel-B8ufuOhe.js","assets/index-ED9k-zp5.js","assets/proxy-B8iZIzY2.js","assets/arrow-right-CGRFgriO.js","assets/DataProgramEIE-CUsU0lQd.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-C6mq1UDj.js","assets/DataMentorsEIE-DGFoWvD3.js","assets/users-D8SaTqiS.js","assets/linkedin-SiJWwn_D.js","assets/DataPricingEIE-DWe3Dn-T.js","assets/check-BG_LglXa.js","assets/CAPEEIE-wQ-ZZO6p.js","assets/lightbulb-BBpI2Mm_.js","assets/bar-chart-CFlRrmVO.js","assets/DataCertificateEIE-BL7Oqzjv.js","assets/WhoIsThisContentForEIE-DdhZ6iC4.js","assets/DataAnalyticsFAQFB-DFORaUpQ.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Ctt__ttU.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CqIp7zEZ.js";
import { S as StickyBookNav } from "./StickyBookNav-DqTr2tsc.js";
import "./EnrollmentModal-Cuo9X1Eb.js";
import "./enrollmentApi-dQOlnTeY.js";
import "./metaPixel-B8ufuOhe.js";
import "./index-ED9k-zp5.js";
import "./proxy-B8iZIzY2.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-DA36MLGm.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-CUsU0lQd.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-C6mq1UDj.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-DGFoWvD3.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DWe3Dn-T.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-wQ-ZZO6p.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BL7Oqzjv.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DdhZ6iC4.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-DFORaUpQ.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
