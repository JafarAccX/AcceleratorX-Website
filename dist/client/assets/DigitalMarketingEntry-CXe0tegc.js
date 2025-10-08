const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DMCourseBenefits--iehfDAa.js","assets/main-DHphvIsW.js","assets/main-g1H-mEfk.css","assets/index-Dz7s3cZp.js","assets/index-CTb-qWve.js","assets/DMCourseOverview-Bl4TUsYO.js","assets/DMCourseSyllabus-CTK0anJr.js","assets/DMFAQs-DJdGnrXS.js","assets/DMHandsOnProjects-przC-n0i.js","assets/DMHero-BDv_okWx.js","assets/DMTimer-BGI-t_eQ.js","assets/EnrollmentModal-DVARnpwq.js","assets/enrollmentApi-DT_AxxXz.js","assets/metaPixel-BtqJNysz.js","assets/graduation-cap-D9At4GXv.js","assets/DMMarketingTools-wOiKGfk1.js","assets/DMMarketInsights-CRMXlFqO.js","assets/DMPricing-Bp7Xam7S.js","assets/DMWhoShouldEnroll-BDnyo0M_.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DHphvIsW.js";
const DMCourseBenefits = reactExports.lazy(() => __vitePreload(() => import("./DMCourseBenefits--iehfDAa.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DMCourseOverview = reactExports.lazy(() => __vitePreload(() => import("./DMCourseOverview-Bl4TUsYO.js"), true ? __vite__mapDeps([5,1,2,3,4]) : void 0));
const DMCourseSyllabus = reactExports.lazy(() => __vitePreload(() => import("./DMCourseSyllabus-CTK0anJr.js"), true ? __vite__mapDeps([6,1,2,3,4]) : void 0));
const DMFAQs = reactExports.lazy(() => __vitePreload(() => import("./DMFAQs-DJdGnrXS.js"), true ? __vite__mapDeps([7,1,2,3,4]) : void 0));
const DMHandsOnProjects = reactExports.lazy(() => __vitePreload(() => import("./DMHandsOnProjects-przC-n0i.js"), true ? __vite__mapDeps([8,1,2,3]) : void 0));
const DMHero = reactExports.lazy(() => __vitePreload(() => import("./DMHero-BDv_okWx.js"), true ? __vite__mapDeps([9,1,2,10,11,12,13,14]) : void 0).then((m) => ({ default: m.DMHero })));
const DMMarketingTools = reactExports.lazy(() => __vitePreload(() => import("./DMMarketingTools-wOiKGfk1.js"), true ? __vite__mapDeps([15,1,2,3]) : void 0));
const DMMarketInsights = reactExports.lazy(() => __vitePreload(() => import("./DMMarketInsights-CRMXlFqO.js"), true ? __vite__mapDeps([16,1,2,3]) : void 0));
const DMPricing = reactExports.lazy(() => __vitePreload(() => import("./DMPricing-Bp7Xam7S.js"), true ? __vite__mapDeps([17,1,2,3,4,11,12,13]) : void 0));
const DMWhoShouldEnroll = reactExports.lazy(() => __vitePreload(() => import("./DMWhoShouldEnroll-BDnyo0M_.js"), true ? __vite__mapDeps([18,1,2,3,4]) : void 0));
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
