const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-SXL23ohA.js","assets/main-CkWvzmHo.js","assets/main-wRMbtKU1.css","assets/proxy-FX7O8pU2.js","assets/lightbulb-WNNsXcLX.js","assets/bar-chart-DFSX6sIr.js","assets/DataCertificateEIE-WJK09ykh.js","assets/DataHeroEIE-BTWiTZ_L.js","assets/EnrollmentModal-DiD1_fbT.js","assets/enrollmentApi-B1ElAQt2.js","assets/metaPixel-CQtQgASE.js","assets/index-BykFZKOi.js","assets/arrow-right-W40EKaQK.js","assets/DataJourneyEIE-ZT-hroJ1.js","assets/trophy-D71N_OmY.js","assets/graduation-cap-BR2L390E.js","assets/book-open-Du4r5K0Q.js","assets/DataMentorsEIE-B4oB5R3Z.js","assets/users-8QKFmLyj.js","assets/linkedin-fcGhLZOz.js","assets/DataPricingEIE-B8ALlvDn.js","assets/check-CbC9tXFy.js","assets/DataProgramEIE-SfVRUifX.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-Dyy940Ad.js","assets/WhoIsThisContentForEIE-Dnfr0pQJ.js","assets/DataAnalyticsFAQFB-BXr4btKp.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CkWvzmHo.js";
import { H as HeaderEIE } from "./HeaderEIE-Q3noJavS.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-hmUtv8ry.js";
import { S as StickyBookNav } from "./StickyBookNav-DIpvIMzB.js";
import "./EnrollmentModal-DiD1_fbT.js";
import "./enrollmentApi-B1ElAQt2.js";
import "./metaPixel-CQtQgASE.js";
import "./index-BykFZKOi.js";
import "./proxy-FX7O8pU2.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-SXL23ohA.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-WJK09ykh.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-BTWiTZ_L.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-ZT-hroJ1.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-B4oB5R3Z.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-B8ALlvDn.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-SfVRUifX.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-Dyy940Ad.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-Dnfr0pQJ.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-BXr4btKp.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
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
