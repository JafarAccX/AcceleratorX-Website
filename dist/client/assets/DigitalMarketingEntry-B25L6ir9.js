const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DMCourseBenefits-BdWe3KYp.js","assets/main-CDOtXgRK.js","assets/main-CnF9mUWs.css","assets/index-78jUaIkN.js","assets/index-KDAiH_dk.js","assets/proxy-VHxN6sQO.js","assets/DMCourseOverview-CTmJCtkv.js","assets/DMCourseSyllabus-CJDp0IhF.js","assets/index-BUDb52xN.js","assets/DMFAQs-Dv4rR2bh.js","assets/DMHandsOnProjects-D4lG2I7j.js","assets/DMHero-D11ydqQ2.js","assets/DMTimer-CWq_n92Y.js","assets/EnrollmentModal-DHviGivP.js","assets/enrollmentApi-BuoFCBop.js","assets/metaPixel-1xEVgtRZ.js","assets/graduation-cap-Bq1fsgia.js","assets/DMMarketingTools-cH0cfaIs.js","assets/DMMarketInsights-CDCq3zGL.js","assets/DMPricing-CtUhjpYX.js","assets/DMWhoShouldEnroll-tK9nDyta.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CDOtXgRK.js";
const DMCourseBenefits = reactExports.lazy(() => __vitePreload(() => import("./DMCourseBenefits-BdWe3KYp.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DMCourseOverview = reactExports.lazy(() => __vitePreload(() => import("./DMCourseOverview-CTmJCtkv.js"), true ? __vite__mapDeps([6,1,2,3,4,5]) : void 0));
const DMCourseSyllabus = reactExports.lazy(() => __vitePreload(() => import("./DMCourseSyllabus-CJDp0IhF.js"), true ? __vite__mapDeps([7,1,2,3,4,5,8]) : void 0));
const DMFAQs = reactExports.lazy(() => __vitePreload(() => import("./DMFAQs-Dv4rR2bh.js"), true ? __vite__mapDeps([9,1,2,3,4,5]) : void 0));
const DMHandsOnProjects = reactExports.lazy(() => __vitePreload(() => import("./DMHandsOnProjects-D4lG2I7j.js"), true ? __vite__mapDeps([10,1,2,3,5]) : void 0));
const DMHero = reactExports.lazy(() => __vitePreload(() => import("./DMHero-D11ydqQ2.js"), true ? __vite__mapDeps([11,1,2,12,13,14,15,8,5,16]) : void 0).then((m) => ({ default: m.DMHero })));
const DMMarketingTools = reactExports.lazy(() => __vitePreload(() => import("./DMMarketingTools-cH0cfaIs.js"), true ? __vite__mapDeps([17,1,2,3,5]) : void 0));
const DMMarketInsights = reactExports.lazy(() => __vitePreload(() => import("./DMMarketInsights-CDCq3zGL.js"), true ? __vite__mapDeps([18,1,2,3,5]) : void 0));
const DMPricing = reactExports.lazy(() => __vitePreload(() => import("./DMPricing-CtUhjpYX.js"), true ? __vite__mapDeps([19,1,2,3,4,13,14,15,8,5]) : void 0));
const DMWhoShouldEnroll = reactExports.lazy(() => __vitePreload(() => import("./DMWhoShouldEnroll-tK9nDyta.js"), true ? __vite__mapDeps([20,1,2,3,4,5]) : void 0));
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
