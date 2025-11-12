const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-rqN1bYmS.js","assets/main-CGjpSgqs.js","assets/main-BA_X0d1R.css","assets/lightbulb-DQlUaY0k.js","assets/bar-chart-COz59fA1.js","assets/DataCertificateEIE-DlD484he.js","assets/DataHeroEIE-BHFbt2Nn.js","assets/EnrollmentModal-CToHe8wt.js","assets/enrollmentApi-JJnF_R-U.js","assets/metaPixel-DBp1CICo.js","assets/arrow-right-CnMX7ePu.js","assets/DataJourneyEIE-DuycHanz.js","assets/trophy-ou47FLUI.js","assets/graduation-cap-Ddz6vtuZ.js","assets/book-open-v718Wypy.js","assets/DataMentorsEIE-BRiA0oxi.js","assets/users-BvpwDrmv.js","assets/linkedin-Bry3tr_e.js","assets/DataPricingEIE-rU95L0f8.js","assets/check-CoVS3UlF.js","assets/DataProgramEIE-oDmx_m0s.js","assets/constants-DXOhk-SF.js","assets/DataSkillsToolsEIE-BrBg6Qv1.js","assets/WhoIsThisContentForEIE-2cxqFvxF.js","assets/DataAnalyticsFAQFB-BV9jvcFx.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CGjpSgqs.js";
import { H as HeaderEIE } from "./HeaderEIE-Bz_3cDOQ.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DltYef4S.js";
import { S as StickyBookNav } from "./StickyBookNav-D1ZXJN-4.js";
import "./EnrollmentModal-CToHe8wt.js";
import "./enrollmentApi-JJnF_R-U.js";
import "./metaPixel-DBp1CICo.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-rqN1bYmS.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DlD484he.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-BHFbt2Nn.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-DuycHanz.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BRiA0oxi.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-rU95L0f8.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-oDmx_m0s.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-BrBg6Qv1.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-2cxqFvxF.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-BV9jvcFx.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
