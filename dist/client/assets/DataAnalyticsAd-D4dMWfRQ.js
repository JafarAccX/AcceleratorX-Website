const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-Bdqmrj2g.js","assets/main-Bu4yalNQ.js","assets/main-7GdIFNw8.css","assets/proxy-BfxRfs7x.js","assets/lightbulb-DleClrR8.js","assets/bar-chart-CfSDH6g2.js","assets/DataCertificateEIE-CZk-Rqj2.js","assets/DataHeroEIE-DOCHxYln.js","assets/EnrollmentModal-MIBgwbs0.js","assets/enrollmentApi-CGZgs_PB.js","assets/metaPixel-CdKfm6V_.js","assets/index-BpgLIKka.js","assets/arrow-right-lGly2fuJ.js","assets/DataJourneyEIE-DIRpLbjk.js","assets/trophy-iQEDIbuf.js","assets/graduation-cap-BfS6CUiD.js","assets/book-open-ChIiAHJr.js","assets/DataMentorsEIE-Cpkb2wjT.js","assets/users-CYlrTQWo.js","assets/linkedin-CBALSeDq.js","assets/DataPricingEIE-CTEOroBw.js","assets/check-BW00fSja.js","assets/DataProgramEIE-DGs0eUIN.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-P5YwPi8m.js","assets/WhoIsThisContentForEIE-C_AFsRaf.js","assets/DataAnalyticsFAQFB-jCTna0GT.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bu4yalNQ.js";
import { H as HeaderEIE } from "./HeaderEIE-DWWDQum4.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-D6S9yaTc.js";
import { S as StickyBookNav } from "./StickyBookNav-DdpSthuX.js";
import "./EnrollmentModal-MIBgwbs0.js";
import "./enrollmentApi-CGZgs_PB.js";
import "./metaPixel-CdKfm6V_.js";
import "./index-BpgLIKka.js";
import "./proxy-BfxRfs7x.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Bdqmrj2g.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-CZk-Rqj2.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-DOCHxYln.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-DIRpLbjk.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-Cpkb2wjT.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CTEOroBw.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DGs0eUIN.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-P5YwPi8m.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-C_AFsRaf.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-jCTna0GT.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
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
