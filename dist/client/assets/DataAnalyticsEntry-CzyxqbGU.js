const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-Ci6ZVzQ1.js","assets/main-CvuwUR0U.js","assets/main-ClQXKXUm.css","assets/lightbulb-DDqEMbZ6.js","assets/bar-chart-C_r6fZ3O.js","assets/DataCertificateEIE-DEvNHtKz.js","assets/DataHeroEIE-hvaUvM_p.js","assets/EnrollmentModal-keSFpLvd.js","assets/enrollmentApi-DLc4dGkd.js","assets/metaPixel-btpR9i3d.js","assets/arrow-right-CqOeAJYx.js","assets/DataJourneyEIE-BEQ_Sb5S.js","assets/trophy-C7ztvuhH.js","assets/graduation-cap-Bctj5hSH.js","assets/book-open-D6tEtkM3.js","assets/DataMentorsEIE-CCsWSDAH.js","assets/users-C_32Ngv4.js","assets/linkedin-pxxILXBj.js","assets/DataPricingEIE-C06ptU_b.js","assets/check-D6W9b3Zv.js","assets/DataProgramEIE-Cz0o4fgq.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-BYmzAbMX.js","assets/WhoIsThisContentForEIE-CAGEmHr0.js","assets/DataAnalyticsFAQFB-BFEqH8Qx.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CvuwUR0U.js";
import { H as HeaderEIE } from "./HeaderEIE-BYMD5WXH.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BZ9-TYL7.js";
import { S as StickyBookNav } from "./StickyBookNav-BLJKjgTS.js";
import "./EnrollmentModal-keSFpLvd.js";
import "./enrollmentApi-DLc4dGkd.js";
import "./metaPixel-btpR9i3d.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Ci6ZVzQ1.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DEvNHtKz.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-hvaUvM_p.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-BEQ_Sb5S.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CCsWSDAH.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-C06ptU_b.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-Cz0o4fgq.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-BYmzAbMX.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CAGEmHr0.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-BFEqH8Qx.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
