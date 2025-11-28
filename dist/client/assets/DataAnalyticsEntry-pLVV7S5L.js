const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-DEYUCd0m.js","assets/main-BzTttlQZ.js","assets/main-Ce-Pe5sq.css","assets/lightbulb-iiEza9cC.js","assets/bar-chart-DZMCVAyB.js","assets/DataCertificateEIE-BrMaKWpV.js","assets/DataHeroEIE-MrpkN-TB.js","assets/EnrollmentModal-BJCfKPkC.js","assets/enrollmentApi-Csc-QPjD.js","assets/metaPixel-DE20CzjQ.js","assets/arrow-right-DMXoacG5.js","assets/DataJourneyEIE-BeIyrAJT.js","assets/trophy-D-qauVa6.js","assets/graduation-cap-CtbmhjKr.js","assets/book-open-D2TR0pgX.js","assets/DataMentorsEIE-DdO_-p65.js","assets/users-CEydn7JE.js","assets/linkedin--u34DzwF.js","assets/DataPricingEIE-fMO5MBf-.js","assets/check-CGr9u7rB.js","assets/DataProgramEIE-CAX7KyQ3.js","assets/constants-DXOhk-SF.js","assets/DataSkillsToolsEIE-CMqQSnjT.js","assets/WhoIsThisContentForEIE-D--nSE7a.js","assets/DataAnalyticsFAQFB-DL4NA_po.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BzTttlQZ.js";
import { H as HeaderEIE } from "./HeaderEIE-D1MJGAq1.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-B8ytbN5Q.js";
import { S as StickyBookNav } from "./StickyBookNav-BX_iktTf.js";
import "./EnrollmentModal-BJCfKPkC.js";
import "./enrollmentApi-Csc-QPjD.js";
import "./metaPixel-DE20CzjQ.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-DEYUCd0m.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BrMaKWpV.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-MrpkN-TB.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-BeIyrAJT.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-DdO_-p65.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-fMO5MBf-.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-CAX7KyQ3.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-CMqQSnjT.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-D--nSE7a.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-DL4NA_po.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
