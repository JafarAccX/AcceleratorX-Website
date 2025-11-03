const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-Ci-RICj9.js","assets/main-DD2uCxhE.js","assets/main-ZJ57361l.css","assets/lightbulb-BxOeGPlc.js","assets/bar-chart-494nj1pk.js","assets/DataCertificateEIE-BZs-D_e1.js","assets/DataHeroEIE-D0nyFGKY.js","assets/EnrollmentModal-zGH4Iqw0.js","assets/enrollmentApi-C5hvGDp9.js","assets/metaPixel-BHCHwNnL.js","assets/arrow-right-DKTHI5BW.js","assets/DataJourneyEIE-DlVJjFCe.js","assets/trophy-BSo7V-eA.js","assets/graduation-cap-CfWcZwG4.js","assets/book-open-RgGQM0vF.js","assets/DataMentorsEIE-CP98CDys.js","assets/users-Ci7-1-Pr.js","assets/linkedin-BfJpJBRZ.js","assets/DataPricingEIE-CgjHek_3.js","assets/check-Bgu0fHGX.js","assets/DataProgramEIE-CFvBexyJ.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-vhWVaEuT.js","assets/WhoIsThisContentForEIE-BbfRCkeB.js","assets/DataAnalyticsFAQFB-DqdoIhut.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DD2uCxhE.js";
import { H as HeaderEIE } from "./HeaderEIE-D7JsTUui.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Cd2zsup5.js";
import { S as StickyBookNav } from "./StickyBookNav-5z1FuMoh.js";
import "./EnrollmentModal-zGH4Iqw0.js";
import "./enrollmentApi-C5hvGDp9.js";
import "./metaPixel-BHCHwNnL.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Ci-RICj9.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BZs-D_e1.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-D0nyFGKY.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-DlVJjFCe.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CP98CDys.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CgjHek_3.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-CFvBexyJ.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-vhWVaEuT.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-BbfRCkeB.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-DqdoIhut.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
