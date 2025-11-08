const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-B6p7HuC2.js","assets/main-CLFAzKr7.js","assets/main-BLt5Qm9-.css","assets/lightbulb-Bdl0guML.js","assets/bar-chart-DmBUF9Ax.js","assets/DataCertificateEIE-BSsKtwC6.js","assets/DataHeroEIE-DycdMd4n.js","assets/EnrollmentModal-f2lJDb1T.js","assets/enrollmentApi-8fBMY41-.js","assets/metaPixel-DZ1DsPbx.js","assets/arrow-right-B8AwW2Sb.js","assets/DataJourneyEIE-CMGA_g_v.js","assets/trophy-BUBW8QDP.js","assets/graduation-cap-DrbqXwg3.js","assets/book-open-CFe1hlXQ.js","assets/DataMentorsEIE-BMLX8Zbf.js","assets/users-DpJEgBNu.js","assets/linkedin-Dhs2w2dS.js","assets/DataPricingEIE-08ZoFFJZ.js","assets/check-CqoFJ_ei.js","assets/DataProgramEIE-Di96YsEH.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-CcxjWJNR.js","assets/WhoIsThisContentForEIE-DaBSR31n.js","assets/DataAnalyticsFAQFB-vFkibesl.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CLFAzKr7.js";
import { H as HeaderEIE } from "./HeaderEIE-ClHY5ktn.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BpeE-LXP.js";
import { S as StickyBookNav } from "./StickyBookNav-DtVGMbg6.js";
import "./EnrollmentModal-f2lJDb1T.js";
import "./enrollmentApi-8fBMY41-.js";
import "./metaPixel-DZ1DsPbx.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-B6p7HuC2.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BSsKtwC6.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-DycdMd4n.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-CMGA_g_v.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BMLX8Zbf.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-08ZoFFJZ.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-Di96YsEH.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-CcxjWJNR.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DaBSR31n.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-vFkibesl.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
