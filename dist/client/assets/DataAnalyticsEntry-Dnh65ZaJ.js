const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-B-E7Oh6s.js","assets/main-BsE_pOwq.js","assets/main-g1H-mEfk.css","assets/lightbulb-Cldye--c.js","assets/bar-chart-C8yBxVeG.js","assets/DataCertificateEIE-CqyWSBET.js","assets/DataHeroEIE-C_2M1uGf.js","assets/EnrollmentModal-CSsNaZvG.js","assets/enrollmentApi-Cj02VbS1.js","assets/metaPixel-DTLSMIdz.js","assets/arrow-right-klvmXGPd.js","assets/DataJourneyEIE-6180vyJA.js","assets/trophy-CqGaAaTa.js","assets/graduation-cap-DJjHa_Fo.js","assets/book-open-qnCYIwN5.js","assets/DataMentorsEIE-BFZfoMrS.js","assets/users-HCzXCbXD.js","assets/linkedin-CU_vZlOn.js","assets/DataPricingEIE-BW4VwJyZ.js","assets/check-Hq_5gIgG.js","assets/DataProgramEIE-DAvf4Nzs.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-4ZvHVSwp.js","assets/WhoIsThisContentForEIE-t5xyadOI.js","assets/DataAnalyticsFAQFB-vyRYOJlB.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BsE_pOwq.js";
import { H as HeaderEIE } from "./HeaderEIE-By2ak8vy.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BuY7aavk.js";
import { S as StickyBookNav } from "./StickyBookNav-DU1YRL6l.js";
import "./EnrollmentModal-CSsNaZvG.js";
import "./enrollmentApi-Cj02VbS1.js";
import "./metaPixel-DTLSMIdz.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-B-E7Oh6s.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-CqyWSBET.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-C_2M1uGf.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-6180vyJA.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BFZfoMrS.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-BW4VwJyZ.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DAvf4Nzs.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-4ZvHVSwp.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-t5xyadOI.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-vyRYOJlB.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
