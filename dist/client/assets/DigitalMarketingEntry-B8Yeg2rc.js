const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DMCourseBenefits-CdAqDZqC.js","assets/main-EGEnCh6i.js","assets/main-CnF9mUWs.css","assets/index-CSYCoh7b.js","assets/index-zZD6c3dA.js","assets/proxy-CXL56B2m.js","assets/DMCourseOverview-DnSfAI2s.js","assets/DMCourseSyllabus-YCccqHAj.js","assets/index-BAcEffVT.js","assets/DMFAQs-DAg6IZhC.js","assets/DMHandsOnProjects-5nd30W1i.js","assets/DMHero-CzW-0HAa.js","assets/DMTimer-duhPnmTV.js","assets/EnrollmentModal-DPDKkDKj.js","assets/enrollmentApi-DSV_ou16.js","assets/metaPixel-CEyU9G7i.js","assets/graduation-cap-CmvwzVZJ.js","assets/DMMarketingTools-PPznAGu2.js","assets/DMMarketInsights-D0DZVabr.js","assets/DMPricing-kAE09I2E.js","assets/DMWhoShouldEnroll-CwQ1tlAw.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-EGEnCh6i.js";
const DMCourseBenefits = reactExports.lazy(() => __vitePreload(() => import("./DMCourseBenefits-CdAqDZqC.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DMCourseOverview = reactExports.lazy(() => __vitePreload(() => import("./DMCourseOverview-DnSfAI2s.js"), true ? __vite__mapDeps([6,1,2,3,4,5]) : void 0));
const DMCourseSyllabus = reactExports.lazy(() => __vitePreload(() => import("./DMCourseSyllabus-YCccqHAj.js"), true ? __vite__mapDeps([7,1,2,3,4,5,8]) : void 0));
const DMFAQs = reactExports.lazy(() => __vitePreload(() => import("./DMFAQs-DAg6IZhC.js"), true ? __vite__mapDeps([9,1,2,3,4,5]) : void 0));
const DMHandsOnProjects = reactExports.lazy(() => __vitePreload(() => import("./DMHandsOnProjects-5nd30W1i.js"), true ? __vite__mapDeps([10,1,2,3,5]) : void 0));
const DMHero = reactExports.lazy(() => __vitePreload(() => import("./DMHero-CzW-0HAa.js"), true ? __vite__mapDeps([11,1,2,12,13,14,15,8,5,16]) : void 0).then((m) => ({ default: m.DMHero })));
const DMMarketingTools = reactExports.lazy(() => __vitePreload(() => import("./DMMarketingTools-PPznAGu2.js"), true ? __vite__mapDeps([17,1,2,3,5]) : void 0));
const DMMarketInsights = reactExports.lazy(() => __vitePreload(() => import("./DMMarketInsights-D0DZVabr.js"), true ? __vite__mapDeps([18,1,2,3,5]) : void 0));
const DMPricing = reactExports.lazy(() => __vitePreload(() => import("./DMPricing-kAE09I2E.js"), true ? __vite__mapDeps([19,1,2,3,4,13,14,15,8,5]) : void 0));
const DMWhoShouldEnroll = reactExports.lazy(() => __vitePreload(() => import("./DMWhoShouldEnroll-CwQ1tlAw.js"), true ? __vite__mapDeps([20,1,2,3,4,5]) : void 0));
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
