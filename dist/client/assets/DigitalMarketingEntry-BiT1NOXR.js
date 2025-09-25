const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DMCourseBenefits-4p3Gmvmq.js","assets/main-Bu4yalNQ.js","assets/main-7GdIFNw8.css","assets/index-BDCGGjpT.js","assets/index-DM5pGjf7.js","assets/proxy-BfxRfs7x.js","assets/DMCourseOverview-DFZNQ0tQ.js","assets/DMCourseSyllabus-Dlk4XvzV.js","assets/index-BpgLIKka.js","assets/DMFAQs-C_GyfyXG.js","assets/DMHandsOnProjects-B6IdqUHx.js","assets/DMHero-DvkP2ANV.js","assets/DMTimer-BxJBfUIi.js","assets/EnrollmentModal-MIBgwbs0.js","assets/enrollmentApi-CGZgs_PB.js","assets/metaPixel-CdKfm6V_.js","assets/graduation-cap-BfS6CUiD.js","assets/DMMarketingTools-Cxa8LpVd.js","assets/DMMarketInsights-pwSd6f17.js","assets/DMPricing-cXIIs2kx.js","assets/DMWhoShouldEnroll-98Bt69Be.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bu4yalNQ.js";
const DMCourseBenefits = reactExports.lazy(() => __vitePreload(() => import("./DMCourseBenefits-4p3Gmvmq.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DMCourseOverview = reactExports.lazy(() => __vitePreload(() => import("./DMCourseOverview-DFZNQ0tQ.js"), true ? __vite__mapDeps([6,1,2,3,4,5]) : void 0));
const DMCourseSyllabus = reactExports.lazy(() => __vitePreload(() => import("./DMCourseSyllabus-Dlk4XvzV.js"), true ? __vite__mapDeps([7,1,2,3,4,5,8]) : void 0));
const DMFAQs = reactExports.lazy(() => __vitePreload(() => import("./DMFAQs-C_GyfyXG.js"), true ? __vite__mapDeps([9,1,2,3,4,5]) : void 0));
const DMHandsOnProjects = reactExports.lazy(() => __vitePreload(() => import("./DMHandsOnProjects-B6IdqUHx.js"), true ? __vite__mapDeps([10,1,2,3,5]) : void 0));
const DMHero = reactExports.lazy(() => __vitePreload(() => import("./DMHero-DvkP2ANV.js"), true ? __vite__mapDeps([11,1,2,12,13,14,15,8,5,16]) : void 0).then((m) => ({ default: m.DMHero })));
const DMMarketingTools = reactExports.lazy(() => __vitePreload(() => import("./DMMarketingTools-Cxa8LpVd.js"), true ? __vite__mapDeps([17,1,2,3,5]) : void 0));
const DMMarketInsights = reactExports.lazy(() => __vitePreload(() => import("./DMMarketInsights-pwSd6f17.js"), true ? __vite__mapDeps([18,1,2,3,5]) : void 0));
const DMPricing = reactExports.lazy(() => __vitePreload(() => import("./DMPricing-cXIIs2kx.js"), true ? __vite__mapDeps([19,1,2,3,4,13,14,15,8,5]) : void 0));
const DMWhoShouldEnroll = reactExports.lazy(() => __vitePreload(() => import("./DMWhoShouldEnroll-98Bt69Be.js"), true ? __vite__mapDeps([20,1,2,3,4,5]) : void 0));
const DMAICourse = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse("Advance Performance Marketing With AI");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DMHero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DMMarketInsights, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DMWhoShouldEnroll, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DMCourseOverview, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DMHandsOnProjects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DMMarketingTools, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DMCourseSyllabus, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DMCourseBenefits, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DMPricing, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DMFAQs, {})
    ] })
  ] });
};
export {
  DMAICourse as default
};
