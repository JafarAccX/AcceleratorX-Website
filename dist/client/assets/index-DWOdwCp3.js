const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-BzPV8Gv1.js","assets/main-DqWgQVnl.js","assets/main-BA_X0d1R.css","assets/EnrollmentModal-BWPAe1sr.js","assets/enrollmentApi-C8CeDdxE.js","assets/metaPixel-DriOOgtG.js","assets/arrow-right-CyzkLVpq.js","assets/DataProgramEIE-DE_ttAPj.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-BFDQWLuI.js","assets/DataMentorsEIE-DrG4G3Ch.js","assets/users-CqwVU5n4.js","assets/linkedin-nGAkfh2y.js","assets/DataPricingEIE-nwk0_IRE.js","assets/check-B3fLyWF9.js","assets/CAPEEIE-bT5C2JW5.js","assets/lightbulb-CgdhdShz.js","assets/bar-chart-C-UuVLh2.js","assets/DataCertificateEIE-DqEz7Xl6.js","assets/WhoIsThisContentForEIE-6pL9AoAs.js","assets/DataAnalyticsFAQFB-D0qRetJ4.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DqWgQVnl.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-B2tzD2rh.js";
import { S as StickyBookNav } from "./StickyBookNav-Dsyt1lpu.js";
import "./EnrollmentModal-BWPAe1sr.js";
import "./enrollmentApi-C8CeDdxE.js";
import "./metaPixel-DriOOgtG.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-BzPV8Gv1.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DE_ttAPj.js"), true ? __vite__mapDeps([7,1,2,8]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-BFDQWLuI.js"), true ? __vite__mapDeps([9,1,2,8]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-DrG4G3Ch.js"), true ? __vite__mapDeps([10,1,2,11,12]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-nwk0_IRE.js"), true ? __vite__mapDeps([13,1,2,3,4,5,14]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-bT5C2JW5.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DqEz7Xl6.js"), true ? __vite__mapDeps([18,1,2]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-6pL9AoAs.js"), true ? __vite__mapDeps([19,1,2,14]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-D0qRetJ4.js"), true ? __vite__mapDeps([20,1,2]) : void 0));
const DataAnalyticsPage = () => {
  const { setSelectedCourse } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataHeroEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroWithAbouv, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhoIsThisContentForEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataProgramEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CAPEEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataCertificateEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataMentorsEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataSkillsToolsEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataPricingEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataAnalyticsFAQFB, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyBookNav, {})
  ] }) });
};
export {
  DataAnalyticsPage as default
};
