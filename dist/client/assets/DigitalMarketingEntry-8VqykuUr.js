const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DMCourseBenefits-SjZwbdPb.js","assets/main-CQZRSQfQ.js","assets/main-ClQXKXUm.css","assets/index-EdHB_tJ4.js","assets/index-BkFo-mT0.js","assets/DMCourseOverview-BIg9v5AF.js","assets/DMCourseSyllabus-jypQlAFy.js","assets/DMFAQs-BMbYRDF5.js","assets/DMHandsOnProjects-b9Y7JRG1.js","assets/DMHero-DhZ36iio.js","assets/DMTimer-ClRjFdqm.js","assets/EnrollmentModal-kIl_IML_.js","assets/enrollmentApi-JK_WiLhq.js","assets/metaPixel-BPrv2gAs.js","assets/graduation-cap-D1IevO8B.js","assets/DMMarketingTools-aKx2v7_W.js","assets/DMMarketInsights-CZK1zyph.js","assets/DMPricing-SuDAdFL-.js","assets/DMWhoShouldEnroll-Df5_18yU.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CQZRSQfQ.js";
const DMCourseBenefits = reactExports.lazy(() => __vitePreload(() => import("./DMCourseBenefits-SjZwbdPb.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DMCourseOverview = reactExports.lazy(() => __vitePreload(() => import("./DMCourseOverview-BIg9v5AF.js"), true ? __vite__mapDeps([5,1,2,3,4]) : void 0));
const DMCourseSyllabus = reactExports.lazy(() => __vitePreload(() => import("./DMCourseSyllabus-jypQlAFy.js"), true ? __vite__mapDeps([6,1,2,3,4]) : void 0));
const DMFAQs = reactExports.lazy(() => __vitePreload(() => import("./DMFAQs-BMbYRDF5.js"), true ? __vite__mapDeps([7,1,2,3,4]) : void 0));
const DMHandsOnProjects = reactExports.lazy(() => __vitePreload(() => import("./DMHandsOnProjects-b9Y7JRG1.js"), true ? __vite__mapDeps([8,1,2,3]) : void 0));
const DMHero = reactExports.lazy(() => __vitePreload(() => import("./DMHero-DhZ36iio.js"), true ? __vite__mapDeps([9,1,2,10,11,12,13,14]) : void 0).then((m) => ({ default: m.DMHero })));
const DMMarketingTools = reactExports.lazy(() => __vitePreload(() => import("./DMMarketingTools-aKx2v7_W.js"), true ? __vite__mapDeps([15,1,2,3]) : void 0));
const DMMarketInsights = reactExports.lazy(() => __vitePreload(() => import("./DMMarketInsights-CZK1zyph.js"), true ? __vite__mapDeps([16,1,2,3]) : void 0));
const DMPricing = reactExports.lazy(() => __vitePreload(() => import("./DMPricing-SuDAdFL-.js"), true ? __vite__mapDeps([17,1,2,3,4,11,12,13]) : void 0));
const DMWhoShouldEnroll = reactExports.lazy(() => __vitePreload(() => import("./DMWhoShouldEnroll-Df5_18yU.js"), true ? __vite__mapDeps([18,1,2,3,4]) : void 0));
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
