const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-Cfv-aEJz.js","assets/main-DoR0yzTf.js","assets/main-BA_X0d1R.css","assets/lightbulb-BfqRD82z.js","assets/bar-chart-DYUNazVI.js","assets/DataCertificateEIE-Cr4OuqVu.js","assets/DataHeroEIE-Cl3TwwRi.js","assets/EnrollmentModal-BJFCvW-k.js","assets/enrollmentApi-Czu3zfpV.js","assets/metaPixel-Cn55y1S8.js","assets/arrow-right-CYvEolre.js","assets/DataJourneyEIE-De5o6Phz.js","assets/trophy-2Q29tutL.js","assets/graduation-cap-DpuZmsj8.js","assets/book-open-CfMqC8ry.js","assets/DataMentorsEIE-9BNZ6Hou.js","assets/users-B-O3Tmh3.js","assets/linkedin-DBLsHGnQ.js","assets/DataPricingEIE-DPr2tKwF.js","assets/check-Ae_3x1df.js","assets/DataProgramEIE-B2yo4yph.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-Djx4CdFu.js","assets/WhoIsThisContentForEIE-CH991VqI.js","assets/DataAnalyticsFAQFB-DJK4HgQx.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DoR0yzTf.js";
import { H as HeaderEIE } from "./HeaderEIE-DEEO-wsC.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CWqGdazN.js";
import { S as StickyBookNav } from "./StickyBookNav-Chu-FGM8.js";
import "./EnrollmentModal-BJFCvW-k.js";
import "./enrollmentApi-Czu3zfpV.js";
import "./metaPixel-Cn55y1S8.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Cfv-aEJz.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-Cr4OuqVu.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-Cl3TwwRi.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-De5o6Phz.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-9BNZ6Hou.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DPr2tKwF.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-B2yo4yph.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-Djx4CdFu.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CH991VqI.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-DJK4HgQx.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
