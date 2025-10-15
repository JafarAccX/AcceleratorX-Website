const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-Df0uhw5g.js","assets/main-DG5q6AAQ.js","assets/main-g1H-mEfk.css","assets/lightbulb-OeS-PsFB.js","assets/bar-chart-D7czgnsP.js","assets/DataCertificateEIE-DUOVyEsY.js","assets/DataHeroEIE-DVZDMl26.js","assets/EnrollmentModal-Bh3ndXDz.js","assets/enrollmentApi-BjAHi5X4.js","assets/metaPixel-DBVMiTFz.js","assets/arrow-right-DEAVGxQM.js","assets/DataJourneyEIE-XwgHdeBo.js","assets/trophy-CN-Cb6js.js","assets/graduation-cap-MQsIQIsE.js","assets/book-open-C9bu6mLy.js","assets/DataMentorsEIE-BABGUNsI.js","assets/users-Bjgiecmn.js","assets/linkedin-DU0WeXiI.js","assets/DataPricingEIE-0Cn49j4Z.js","assets/check-DPEgDZut.js","assets/DataProgramEIE-DW1TXSbl.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-Cv1CBBHo.js","assets/WhoIsThisContentForEIE-CbZ5AmYm.js","assets/DataAnalyticsFAQFB-XnsJFBZN.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DG5q6AAQ.js";
import { H as HeaderEIE } from "./HeaderEIE-CGlqiFM6.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-C2bAILV2.js";
import { S as StickyBookNav } from "./StickyBookNav-D2MxYoYt.js";
import "./EnrollmentModal-Bh3ndXDz.js";
import "./enrollmentApi-BjAHi5X4.js";
import "./metaPixel-DBVMiTFz.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Df0uhw5g.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DUOVyEsY.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-DVZDMl26.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-XwgHdeBo.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BABGUNsI.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-0Cn49j4Z.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DW1TXSbl.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-Cv1CBBHo.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CbZ5AmYm.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-XnsJFBZN.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
