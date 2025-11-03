const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-CpI5dG90.js","assets/main-l43z1zsL.js","assets/main-NGHnJCuZ.css","assets/lightbulb-gTQDxgHU.js","assets/bar-chart-B-nDVe0d.js","assets/DataCertificateEIE-C_bD6LV7.js","assets/DataHeroEIE-Bib_mnER.js","assets/EnrollmentModal-Bre1amWV.js","assets/enrollmentApi-D66ZDdou.js","assets/metaPixel-BOQzoYP4.js","assets/arrow-right-ZoBjQYJV.js","assets/DataJourneyEIE-BS26R9C7.js","assets/trophy-DFU38nOg.js","assets/graduation-cap-CxwspgNx.js","assets/book-open-BZiNvd_A.js","assets/DataMentorsEIE-B4-LHV2I.js","assets/users-CoKYCqX8.js","assets/linkedin-Bmj0NTMT.js","assets/DataPricingEIE-C2NUH7Nw.js","assets/check-D1b1134B.js","assets/DataProgramEIE-qn5gmqoW.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-DIIyx_jr.js","assets/WhoIsThisContentForEIE-JdPReCRj.js","assets/DataAnalyticsFAQFB-CzCVVOu0.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-l43z1zsL.js";
import { H as HeaderEIE } from "./HeaderEIE-8-_8v567.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-ZctLAPNM.js";
import { S as StickyBookNav } from "./StickyBookNav-Cu6mfKeE.js";
import "./EnrollmentModal-Bre1amWV.js";
import "./enrollmentApi-D66ZDdou.js";
import "./metaPixel-BOQzoYP4.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-CpI5dG90.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-C_bD6LV7.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-Bib_mnER.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-BS26R9C7.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-B4-LHV2I.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-C2NUH7Nw.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-qn5gmqoW.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-DIIyx_jr.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-JdPReCRj.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-CzCVVOu0.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
