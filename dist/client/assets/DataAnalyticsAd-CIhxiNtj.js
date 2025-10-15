const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-CAn5TeFZ.js","assets/main-B4fKdkON.js","assets/main-g1H-mEfk.css","assets/lightbulb-ByZUhW7j.js","assets/bar-chart-ojUESd7U.js","assets/DataCertificateEIE-Cpxu_nQg.js","assets/DataHeroEIE-CTtDq2mD.js","assets/EnrollmentModal-D2m01WdS.js","assets/enrollmentApi-B1jTu0aM.js","assets/metaPixel-lWKDDURB.js","assets/arrow-right-B74--tAJ.js","assets/DataJourneyEIE-y49b5BA1.js","assets/trophy-DZzzH7Wk.js","assets/graduation-cap-ByM7DjPF.js","assets/book-open-CHttNh5C.js","assets/DataMentorsEIE-E0YbWK1r.js","assets/users-CHx2807d.js","assets/linkedin-BOU-1yij.js","assets/DataPricingEIE-CabborNC.js","assets/check-ClqbqJlj.js","assets/DataProgramEIE-CRxfChTa.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-Bfu14ZSF.js","assets/WhoIsThisContentForEIE-CUMYBsdj.js","assets/DataAnalyticsFAQFB-yFs7NS7g.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-B4fKdkON.js";
import { H as HeaderEIE } from "./HeaderEIE-BGIJYnt5.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-ZjjJ3rsC.js";
import { S as StickyBookNav } from "./StickyBookNav-CFVDA99D.js";
import "./EnrollmentModal-D2m01WdS.js";
import "./enrollmentApi-B1jTu0aM.js";
import "./metaPixel-lWKDDURB.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-CAn5TeFZ.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-Cpxu_nQg.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-CTtDq2mD.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-y49b5BA1.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-E0YbWK1r.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CabborNC.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-CRxfChTa.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-Bfu14ZSF.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CUMYBsdj.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-yFs7NS7g.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
