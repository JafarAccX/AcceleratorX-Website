const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-Ba8kETHu.js","assets/main-CP32HAa4.js","assets/main-nEWqamtX.css","assets/lightbulb-BSC3ojiD.js","assets/bar-chart-BMyg7ePP.js","assets/DataCertificateEIE-CO-YhXU1.js","assets/DataHeroEIE-Dyw8aF6B.js","assets/EnrollmentModal-R7uNzrCl.js","assets/enrollmentApi-l2DtmGNq.js","assets/metaPixel-D3cWzwgB.js","assets/arrow-right-DHms-NF2.js","assets/DataJourneyEIE-BiRpXTRl.js","assets/trophy-StYYEAOr.js","assets/graduation-cap-CgBX0P8w.js","assets/book-open-GDRY1sQE.js","assets/DataMentorsEIE-DaY-c_cu.js","assets/users-C-jYIDu-.js","assets/linkedin-B989GTHu.js","assets/DataPricingEIE-CSpdcfPq.js","assets/check-Cn1bWz4x.js","assets/DataProgramEIE-GyE5bcNR.js","assets/constants-DXOhk-SF.js","assets/DataSkillsToolsEIE-Dw1uHPar.js","assets/WhoIsThisContentForEIE-DbTw5DpA.js","assets/DataAnalyticsFAQFB-BW-JE87U.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CP32HAa4.js";
import { H as HeaderEIE } from "./HeaderEIE-CIwkCC6-.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BdS1MDHC.js";
import { S as StickyBookNav } from "./StickyBookNav-DylqSc8N.js";
import "./EnrollmentModal-R7uNzrCl.js";
import "./enrollmentApi-l2DtmGNq.js";
import "./metaPixel-D3cWzwgB.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Ba8kETHu.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-CO-YhXU1.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-Dyw8aF6B.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-BiRpXTRl.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-DaY-c_cu.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CSpdcfPq.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-GyE5bcNR.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-Dw1uHPar.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DbTw5DpA.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-BW-JE87U.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
