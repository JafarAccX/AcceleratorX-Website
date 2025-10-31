const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-DJuonQBY.js","assets/main-DdVeCtn-.js","assets/main-ZJ57361l.css","assets/lightbulb-CS029nJd.js","assets/bar-chart-BPxdHO3b.js","assets/DataCertificateEIE-BGednx4B.js","assets/DataHeroEIE-nvpQYNxG.js","assets/EnrollmentModal-CbPmUr_d.js","assets/enrollmentApi-btbXFU1v.js","assets/metaPixel-BjTM4TKG.js","assets/arrow-right-COSGXnLp.js","assets/DataJourneyEIE-CH1nCL6F.js","assets/trophy-Z1Bh8D2E.js","assets/graduation-cap-KO5ofenP.js","assets/book-open-DyCwi0Uy.js","assets/DataMentorsEIE-DZLjw1yc.js","assets/users-Qhcirw0s.js","assets/linkedin-B-AR5gDA.js","assets/DataPricingEIE-hjUqjevn.js","assets/check-Cwe1nY6S.js","assets/DataProgramEIE-CZGEuitu.js","assets/constants-BiTomjDI.js","assets/DataSkillsToolsEIE-Dntlx6SD.js","assets/WhoIsThisContentForEIE-Cz2j1VTN.js","assets/DataAnalyticsFAQFB-C8psUmH9.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DdVeCtn-.js";
import { H as HeaderEIE } from "./HeaderEIE-DkeOQrgA.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-B-GsOwcx.js";
import { S as StickyBookNav } from "./StickyBookNav-Du_Chnnj.js";
import "./EnrollmentModal-CbPmUr_d.js";
import "./enrollmentApi-btbXFU1v.js";
import "./metaPixel-BjTM4TKG.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-DJuonQBY.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BGednx4B.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-nvpQYNxG.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-CH1nCL6F.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-DZLjw1yc.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-hjUqjevn.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-CZGEuitu.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-Dntlx6SD.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-Cz2j1VTN.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-C8psUmH9.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
