const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DMCourseBenefits-BdtWgQYy.js","assets/main-MWsp8Q-I.js","assets/main-CnF9mUWs.css","assets/index-BJ0W_kEo.js","assets/index-CII8o3Z2.js","assets/proxy-Dp4G5h__.js","assets/DMCourseOverview-XzeKRPPJ.js","assets/DMCourseSyllabus-siSpAQEr.js","assets/index-BlWDocJ3.js","assets/DMFAQs-CcLwTi1C.js","assets/DMHandsOnProjects-DCY-s2tB.js","assets/DMHero-3gaq4gXf.js","assets/DMTimer-CJLSxSBC.js","assets/EnrollmentModal-BWhyTLEl.js","assets/enrollmentApi-cVEso6qE.js","assets/metaPixel-C30SEqt8.js","assets/graduation-cap-ntsYmAYm.js","assets/DMMarketingTools-7YuIfOeX.js","assets/DMMarketInsights-D1VCtLv6.js","assets/DMPricing-UrFhYH_b.js","assets/DMWhoShouldEnroll-DXXFy0kV.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-MWsp8Q-I.js";
const DMCourseBenefits = reactExports.lazy(() => __vitePreload(() => import("./DMCourseBenefits-BdtWgQYy.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DMCourseOverview = reactExports.lazy(() => __vitePreload(() => import("./DMCourseOverview-XzeKRPPJ.js"), true ? __vite__mapDeps([6,1,2,3,4,5]) : void 0));
const DMCourseSyllabus = reactExports.lazy(() => __vitePreload(() => import("./DMCourseSyllabus-siSpAQEr.js"), true ? __vite__mapDeps([7,1,2,3,4,5,8]) : void 0));
const DMFAQs = reactExports.lazy(() => __vitePreload(() => import("./DMFAQs-CcLwTi1C.js"), true ? __vite__mapDeps([9,1,2,3,4,5]) : void 0));
const DMHandsOnProjects = reactExports.lazy(() => __vitePreload(() => import("./DMHandsOnProjects-DCY-s2tB.js"), true ? __vite__mapDeps([10,1,2,3,5]) : void 0));
const DMHero = reactExports.lazy(() => __vitePreload(() => import("./DMHero-3gaq4gXf.js"), true ? __vite__mapDeps([11,1,2,12,13,14,15,8,5,16]) : void 0).then((m) => ({ default: m.DMHero })));
const DMMarketingTools = reactExports.lazy(() => __vitePreload(() => import("./DMMarketingTools-7YuIfOeX.js"), true ? __vite__mapDeps([17,1,2,3,5]) : void 0));
const DMMarketInsights = reactExports.lazy(() => __vitePreload(() => import("./DMMarketInsights-D1VCtLv6.js"), true ? __vite__mapDeps([18,1,2,3,5]) : void 0));
const DMPricing = reactExports.lazy(() => __vitePreload(() => import("./DMPricing-UrFhYH_b.js"), true ? __vite__mapDeps([19,1,2,3,4,13,14,15,8,5]) : void 0));
const DMWhoShouldEnroll = reactExports.lazy(() => __vitePreload(() => import("./DMWhoShouldEnroll-DXXFy0kV.js"), true ? __vite__mapDeps([20,1,2,3,4,5]) : void 0));
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
