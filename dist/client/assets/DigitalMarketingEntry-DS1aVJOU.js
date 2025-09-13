const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DMCourseBenefits-BnxxS0z_.js","assets/main-Ct9V9NA-.js","assets/main-CnF9mUWs.css","assets/index-BhATK_QL.js","assets/index-BX7BqQHy.js","assets/proxy-ClgBuM4B.js","assets/DMCourseOverview-D_DWUzld.js","assets/DMCourseSyllabus-CPK-AiMX.js","assets/index-TfPTM_co.js","assets/DMFAQs-B2W7bTMf.js","assets/DMHandsOnProjects-SO4Fqg35.js","assets/DMHero-CViob52P.js","assets/DMTimer-J5wz8DWD.js","assets/EnrollmentModal-BmEwUbmd.js","assets/enrollmentApi-CWz3pxgi.js","assets/metaPixel-DOoJxazD.js","assets/graduation-cap-BuQ4vERd.js","assets/DMMarketingTools-BxRBhvzX.js","assets/DMMarketInsights-Bt8_d1kK.js","assets/DMPricing-BVY3ipwh.js","assets/DMWhoShouldEnroll-DTeIa2W4.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Ct9V9NA-.js";
const DMCourseBenefits = reactExports.lazy(() => __vitePreload(() => import("./DMCourseBenefits-BnxxS0z_.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DMCourseOverview = reactExports.lazy(() => __vitePreload(() => import("./DMCourseOverview-D_DWUzld.js"), true ? __vite__mapDeps([6,1,2,3,4,5]) : void 0));
const DMCourseSyllabus = reactExports.lazy(() => __vitePreload(() => import("./DMCourseSyllabus-CPK-AiMX.js"), true ? __vite__mapDeps([7,1,2,3,4,5,8]) : void 0));
const DMFAQs = reactExports.lazy(() => __vitePreload(() => import("./DMFAQs-B2W7bTMf.js"), true ? __vite__mapDeps([9,1,2,3,4,5]) : void 0));
const DMHandsOnProjects = reactExports.lazy(() => __vitePreload(() => import("./DMHandsOnProjects-SO4Fqg35.js"), true ? __vite__mapDeps([10,1,2,3,5]) : void 0));
const DMHero = reactExports.lazy(() => __vitePreload(() => import("./DMHero-CViob52P.js"), true ? __vite__mapDeps([11,1,2,12,13,14,15,8,5,16]) : void 0).then((m) => ({ default: m.DMHero })));
const DMMarketingTools = reactExports.lazy(() => __vitePreload(() => import("./DMMarketingTools-BxRBhvzX.js"), true ? __vite__mapDeps([17,1,2,3,5]) : void 0));
const DMMarketInsights = reactExports.lazy(() => __vitePreload(() => import("./DMMarketInsights-Bt8_d1kK.js"), true ? __vite__mapDeps([18,1,2,3,5]) : void 0));
const DMPricing = reactExports.lazy(() => __vitePreload(() => import("./DMPricing-BVY3ipwh.js"), true ? __vite__mapDeps([19,1,2,3,4,13,14,15,8,5]) : void 0));
const DMWhoShouldEnroll = reactExports.lazy(() => __vitePreload(() => import("./DMWhoShouldEnroll-DTeIa2W4.js"), true ? __vite__mapDeps([20,1,2,3,4,5]) : void 0));
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
