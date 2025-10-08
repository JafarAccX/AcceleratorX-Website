const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DMCourseBenefits-tGxUUbJl.js","assets/main-CYXtjh6i.js","assets/main-ClQXKXUm.css","assets/index-DF-ML0BS.js","assets/index-C3kks7wP.js","assets/DMCourseOverview-CzdmvSok.js","assets/DMCourseSyllabus-COOTHd4R.js","assets/DMFAQs-CZlgNprd.js","assets/DMHandsOnProjects-CUCo-h0E.js","assets/DMHero-DxcS-Leo.js","assets/DMTimer-CYKqOXxw.js","assets/EnrollmentModal-DcnBQ-EC.js","assets/enrollmentApi-JNGmvjgr.js","assets/metaPixel-CmtfEEd5.js","assets/graduation-cap-RKPKHEbN.js","assets/DMMarketingTools-M4Cfwxmt.js","assets/DMMarketInsights-Bv76vDd8.js","assets/DMPricing-DwgP99uz.js","assets/DMWhoShouldEnroll-C_5mVmZu.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CYXtjh6i.js";
const DMCourseBenefits = reactExports.lazy(() => __vitePreload(() => import("./DMCourseBenefits-tGxUUbJl.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DMCourseOverview = reactExports.lazy(() => __vitePreload(() => import("./DMCourseOverview-CzdmvSok.js"), true ? __vite__mapDeps([5,1,2,3,4]) : void 0));
const DMCourseSyllabus = reactExports.lazy(() => __vitePreload(() => import("./DMCourseSyllabus-COOTHd4R.js"), true ? __vite__mapDeps([6,1,2,3,4]) : void 0));
const DMFAQs = reactExports.lazy(() => __vitePreload(() => import("./DMFAQs-CZlgNprd.js"), true ? __vite__mapDeps([7,1,2,3,4]) : void 0));
const DMHandsOnProjects = reactExports.lazy(() => __vitePreload(() => import("./DMHandsOnProjects-CUCo-h0E.js"), true ? __vite__mapDeps([8,1,2,3]) : void 0));
const DMHero = reactExports.lazy(() => __vitePreload(() => import("./DMHero-DxcS-Leo.js"), true ? __vite__mapDeps([9,1,2,10,11,12,13,14]) : void 0).then((m) => ({ default: m.DMHero })));
const DMMarketingTools = reactExports.lazy(() => __vitePreload(() => import("./DMMarketingTools-M4Cfwxmt.js"), true ? __vite__mapDeps([15,1,2,3]) : void 0));
const DMMarketInsights = reactExports.lazy(() => __vitePreload(() => import("./DMMarketInsights-Bv76vDd8.js"), true ? __vite__mapDeps([16,1,2,3]) : void 0));
const DMPricing = reactExports.lazy(() => __vitePreload(() => import("./DMPricing-DwgP99uz.js"), true ? __vite__mapDeps([17,1,2,3,4,11,12,13]) : void 0));
const DMWhoShouldEnroll = reactExports.lazy(() => __vitePreload(() => import("./DMWhoShouldEnroll-C_5mVmZu.js"), true ? __vite__mapDeps([18,1,2,3,4]) : void 0));
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
