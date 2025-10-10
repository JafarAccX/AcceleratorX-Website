const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DMCourseBenefits-BI9pKwHA.js","assets/main-CtSa0pDV.js","assets/main-g1H-mEfk.css","assets/index-K8AZZFu0.js","assets/index-BquI5zpk.js","assets/DMCourseOverview-CT3Ft24x.js","assets/DMCourseSyllabus-C1PwFL4_.js","assets/DMFAQs-EPBPRcRe.js","assets/DMHandsOnProjects-DmDTY00H.js","assets/DMHero-BmItfofc.js","assets/DMTimer-BVfGVsK8.js","assets/EnrollmentModal-BetrdJkE.js","assets/enrollmentApi-Bp8HLVVn.js","assets/metaPixel-B-L5LvPr.js","assets/graduation-cap-CGKVnTDb.js","assets/DMMarketingTools-VbvMwHYz.js","assets/DMMarketInsights-t_2WdjQV.js","assets/DMPricing-CLpfxUhl.js","assets/DMWhoShouldEnroll-BRR9f10p.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CtSa0pDV.js";
const DMCourseBenefits = reactExports.lazy(() => __vitePreload(() => import("./DMCourseBenefits-BI9pKwHA.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DMCourseOverview = reactExports.lazy(() => __vitePreload(() => import("./DMCourseOverview-CT3Ft24x.js"), true ? __vite__mapDeps([5,1,2,3,4]) : void 0));
const DMCourseSyllabus = reactExports.lazy(() => __vitePreload(() => import("./DMCourseSyllabus-C1PwFL4_.js"), true ? __vite__mapDeps([6,1,2,3,4]) : void 0));
const DMFAQs = reactExports.lazy(() => __vitePreload(() => import("./DMFAQs-EPBPRcRe.js"), true ? __vite__mapDeps([7,1,2,3,4]) : void 0));
const DMHandsOnProjects = reactExports.lazy(() => __vitePreload(() => import("./DMHandsOnProjects-DmDTY00H.js"), true ? __vite__mapDeps([8,1,2,3]) : void 0));
const DMHero = reactExports.lazy(() => __vitePreload(() => import("./DMHero-BmItfofc.js"), true ? __vite__mapDeps([9,1,2,10,11,12,13,14]) : void 0).then((m) => ({ default: m.DMHero })));
const DMMarketingTools = reactExports.lazy(() => __vitePreload(() => import("./DMMarketingTools-VbvMwHYz.js"), true ? __vite__mapDeps([15,1,2,3]) : void 0));
const DMMarketInsights = reactExports.lazy(() => __vitePreload(() => import("./DMMarketInsights-t_2WdjQV.js"), true ? __vite__mapDeps([16,1,2,3]) : void 0));
const DMPricing = reactExports.lazy(() => __vitePreload(() => import("./DMPricing-CLpfxUhl.js"), true ? __vite__mapDeps([17,1,2,3,4,11,12,13]) : void 0));
const DMWhoShouldEnroll = reactExports.lazy(() => __vitePreload(() => import("./DMWhoShouldEnroll-BRR9f10p.js"), true ? __vite__mapDeps([18,1,2,3,4]) : void 0));
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
