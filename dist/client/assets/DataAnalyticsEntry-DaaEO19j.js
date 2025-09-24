const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-BawfIHyD.js","assets/main-Br24Bg9q.js","assets/main-7GdIFNw8.css","assets/proxy-BpV0Cpmy.js","assets/lightbulb-wW1-JM40.js","assets/bar-chart-55bNKtOT.js","assets/DataCertificateEIE-BlAUOftc.js","assets/DataHeroEIE-Mc9bZStC.js","assets/EnrollmentModal-DUd2mNsm.js","assets/enrollmentApi-DBnLqubN.js","assets/metaPixel-Cr0rW0qb.js","assets/index-KeK93Ytm.js","assets/arrow-right-DGL0WtHg.js","assets/DataJourneyEIE-CSwYzaBW.js","assets/trophy-xHwcXHSR.js","assets/graduation-cap-DmwWt1KC.js","assets/book-open-bW5bh_YZ.js","assets/DataMentorsEIE-BGZy6lgJ.js","assets/users-BNm-EPws.js","assets/linkedin-BI3InuGZ.js","assets/DataPricingEIE-DZFo9i9B.js","assets/check-_mDtse_9.js","assets/DataProgramEIE-CLVPpMzt.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-wfc9YeAM.js","assets/WhoIsThisContentForEIE-rRJcdF0w.js","assets/DataAnalyticsFAQFB-Dbw5tWg-.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Br24Bg9q.js";
import { H as HeaderEIE } from "./HeaderEIE-D113QDhs.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-LVuJzAeW.js";
import { S as StickyBookNav } from "./StickyBookNav-DYTqjRtN.js";
import "./EnrollmentModal-DUd2mNsm.js";
import "./enrollmentApi-DBnLqubN.js";
import "./metaPixel-Cr0rW0qb.js";
import "./index-KeK93Ytm.js";
import "./proxy-BpV0Cpmy.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-BawfIHyD.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BlAUOftc.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-Mc9bZStC.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-CSwYzaBW.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BGZy6lgJ.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DZFo9i9B.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-CLVPpMzt.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-wfc9YeAM.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-rRJcdF0w.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-Dbw5tWg-.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
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
