const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-D8u_zlwt.js","assets/main-DSLYtVC7.js","assets/main-nEWqamtX.css","assets/lightbulb-BFxHDXdC.js","assets/bar-chart-BhS6RLbq.js","assets/DataCertificateEIE-9IZ7tGar.js","assets/DataHeroEIE-QaTiUEDy.js","assets/EnrollmentModal-D5msJbA_.js","assets/enrollmentApi-B_Bb5JdS.js","assets/metaPixel-DvHKdgLp.js","assets/arrow-right-CQyK0UD9.js","assets/DataJourneyEIE-DxRytssE.js","assets/trophy-CbwMtZId.js","assets/graduation-cap-7g6pso2Z.js","assets/book-open-BOaXI8bS.js","assets/DataMentorsEIE-DbjNtkgn.js","assets/users-fDw_Sc59.js","assets/linkedin-T0AwHZod.js","assets/DataPricingEIE-B3dFr0Tf.js","assets/check-DEpqAI0P.js","assets/DataProgramEIE-BuYEEgDB.js","assets/constants-DXOhk-SF.js","assets/DataSkillsToolsEIE-D1SUB6TN.js","assets/WhoIsThisContentForEIE-BVzZMrtg.js","assets/DataAnalyticsFAQFB-D4K209Wy.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DSLYtVC7.js";
import { H as HeaderEIE } from "./HeaderEIE-C9p-97oA.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Bd3IYx81.js";
import { S as StickyBookNav } from "./StickyBookNav-DSGyvqSv.js";
import "./EnrollmentModal-D5msJbA_.js";
import "./enrollmentApi-B_Bb5JdS.js";
import "./metaPixel-DvHKdgLp.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-D8u_zlwt.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-9IZ7tGar.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-QaTiUEDy.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-DxRytssE.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-DbjNtkgn.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-B3dFr0Tf.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-BuYEEgDB.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-D1SUB6TN.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-BVzZMrtg.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-D4K209Wy.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
