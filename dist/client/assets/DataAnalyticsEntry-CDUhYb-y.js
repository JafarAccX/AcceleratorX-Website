const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-IK3zuyXj.js","assets/main-Dasux6OQ.js","assets/main-CnF9mUWs.css","assets/proxy-CFfpntJW.js","assets/lightbulb-DY6vaAjR.js","assets/bar-chart-BF9-CArk.js","assets/DataCertificateEIE-D0hv5VuE.js","assets/DataHeroEIE-BplPHlPE.js","assets/EnrollmentModal-CGchTRmf.js","assets/enrollmentApi-CLrGii4e.js","assets/metaPixel-BuAwezsB.js","assets/index-DO91dz0e.js","assets/arrow-right-CyDFrp5Q.js","assets/DataJourneyEIE-BVMO7ILG.js","assets/trophy-D0toq9wn.js","assets/graduation-cap-DD78yXge.js","assets/book-open-42OMXRon.js","assets/DataMentorsEIE-ClbVX9PX.js","assets/users-B0ajP2F_.js","assets/linkedin-DuvTkE0G.js","assets/DataPricingEIE-DTT9cg9X.js","assets/check-DtJyLdsf.js","assets/DataProgramEIE-BfpswFkX.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-hbyXmlqJ.js","assets/WhoIsThisContentForEIE-DUKR7vbN.js","assets/DataAnalyticsFAQFB-Beh1ge6_.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Dasux6OQ.js";
import { H as HeaderEIE } from "./HeaderEIE-BS82KOr5.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-C0wz6QUR.js";
import { S as StickyBookNav } from "./StickyBookNav-5c0LWHdu.js";
import "./EnrollmentModal-CGchTRmf.js";
import "./enrollmentApi-CLrGii4e.js";
import "./metaPixel-BuAwezsB.js";
import "./index-DO91dz0e.js";
import "./proxy-CFfpntJW.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-IK3zuyXj.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-D0hv5VuE.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-BplPHlPE.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-BVMO7ILG.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-ClbVX9PX.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DTT9cg9X.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-BfpswFkX.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-hbyXmlqJ.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DUKR7vbN.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-Beh1ge6_.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
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
