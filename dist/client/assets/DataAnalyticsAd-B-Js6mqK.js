const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE--Hm3Sbkz.js","assets/main-CVqzsEIE.js","assets/main-BLt5Qm9-.css","assets/lightbulb-DxHu1r4G.js","assets/bar-chart-B8GrDjB6.js","assets/DataCertificateEIE-CEE9tT68.js","assets/DataHeroEIE-CGFgmEIg.js","assets/EnrollmentModal-DWZRh2FR.js","assets/enrollmentApi-R0FC2M25.js","assets/metaPixel-B8wA48qp.js","assets/arrow-right-CCw5MLvi.js","assets/DataJourneyEIE-Dn1RoL0H.js","assets/trophy-Wqd8CMxS.js","assets/graduation-cap-CRsxaRqW.js","assets/book-open-CpOTyx9M.js","assets/DataMentorsEIE-Bu7uGNQI.js","assets/users-BH-lI_0c.js","assets/linkedin-ri-vlWcK.js","assets/DataPricingEIE-CO7PFm_L.js","assets/check-CMQx7wIQ.js","assets/DataProgramEIE-DsggWirQ.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-DDehOPjR.js","assets/WhoIsThisContentForEIE-DMABpJsK.js","assets/DataAnalyticsFAQFB-BfX89vib.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CVqzsEIE.js";
import { H as HeaderEIE } from "./HeaderEIE-CKUeQuY3.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DbnaKugh.js";
import { S as StickyBookNav } from "./StickyBookNav-COaAOV-p.js";
import "./EnrollmentModal-DWZRh2FR.js";
import "./enrollmentApi-R0FC2M25.js";
import "./metaPixel-B8wA48qp.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE--Hm3Sbkz.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-CEE9tT68.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-CGFgmEIg.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-Dn1RoL0H.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-Bu7uGNQI.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CO7PFm_L.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DsggWirQ.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-DDehOPjR.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DMABpJsK.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-BfX89vib.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
