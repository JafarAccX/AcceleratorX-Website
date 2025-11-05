const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-RSnyzF7d.js","assets/main-Ck2PwlUp.js","assets/main-NGHnJCuZ.css","assets/lightbulb-Bz5Vjcvc.js","assets/bar-chart-4fjJ_j2X.js","assets/DataCertificateEIE-D8a5w1Mi.js","assets/DataHeroEIE-Cw-FNZuo.js","assets/EnrollmentModal-1cLzwjk_.js","assets/enrollmentApi-BejPWjGn.js","assets/metaPixel-C33WLlAg.js","assets/arrow-right-CHYkYHlR.js","assets/DataJourneyEIE-C6j7-Vro.js","assets/trophy-CZUynkyL.js","assets/graduation-cap-9dFshOQ7.js","assets/book-open-Bv495fHW.js","assets/DataMentorsEIE-NEEAAHSV.js","assets/users-C7hpzxLV.js","assets/linkedin-BcmlThoh.js","assets/DataPricingEIE-CoAvqXZH.js","assets/check-iQCI8lJt.js","assets/DataProgramEIE-DwN-DiEh.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-DypPchxi.js","assets/WhoIsThisContentForEIE-dPhJQE8D.js","assets/DataAnalyticsFAQFB-CE8buydh.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Ck2PwlUp.js";
import { H as HeaderEIE } from "./HeaderEIE--kYZOCas.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BBh6CSjX.js";
import { S as StickyBookNav } from "./StickyBookNav-rsPHf_OH.js";
import "./EnrollmentModal-1cLzwjk_.js";
import "./enrollmentApi-BejPWjGn.js";
import "./metaPixel-C33WLlAg.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-RSnyzF7d.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-D8a5w1Mi.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-Cw-FNZuo.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-C6j7-Vro.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-NEEAAHSV.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CoAvqXZH.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DwN-DiEh.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-DypPchxi.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-dPhJQE8D.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-CE8buydh.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
