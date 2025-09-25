const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-DOCHxYln.js","assets/main-Bu4yalNQ.js","assets/main-7GdIFNw8.css","assets/EnrollmentModal-MIBgwbs0.js","assets/enrollmentApi-CGZgs_PB.js","assets/metaPixel-CdKfm6V_.js","assets/index-BpgLIKka.js","assets/proxy-BfxRfs7x.js","assets/arrow-right-lGly2fuJ.js","assets/DataProgramEIE-DGs0eUIN.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-P5YwPi8m.js","assets/DataMentorsEIE-Cpkb2wjT.js","assets/users-CYlrTQWo.js","assets/linkedin-CBALSeDq.js","assets/DataPricingEIE-CTEOroBw.js","assets/check-BW00fSja.js","assets/CAPEEIE-Bdqmrj2g.js","assets/lightbulb-DleClrR8.js","assets/bar-chart-CfSDH6g2.js","assets/DataCertificateEIE-CZk-Rqj2.js","assets/WhoIsThisContentForEIE-C_AFsRaf.js","assets/DataAnalyticsFAQFB-jCTna0GT.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bu4yalNQ.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-D6S9yaTc.js";
import { S as StickyBookNav } from "./StickyBookNav-DdpSthuX.js";
import "./EnrollmentModal-MIBgwbs0.js";
import "./enrollmentApi-CGZgs_PB.js";
import "./metaPixel-CdKfm6V_.js";
import "./index-BpgLIKka.js";
import "./proxy-BfxRfs7x.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-DOCHxYln.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DGs0eUIN.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-P5YwPi8m.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-Cpkb2wjT.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CTEOroBw.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Bdqmrj2g.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-CZk-Rqj2.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-C_AFsRaf.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-jCTna0GT.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
