const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DMCourseBenefits-DhIaHpj8.js","assets/main-CvuwUR0U.js","assets/main-ClQXKXUm.css","assets/index-BOyhYaKs.js","assets/index-BQ_qmHSz.js","assets/DMCourseOverview-Dy_Myb2X.js","assets/DMCourseSyllabus-tgA1Nn2q.js","assets/DMFAQs-CK9h-98Z.js","assets/DMHandsOnProjects-BFheIKK5.js","assets/DMHero-D0XCFtpp.js","assets/DMTimer-BzSFheFa.js","assets/EnrollmentModal-keSFpLvd.js","assets/enrollmentApi-DLc4dGkd.js","assets/metaPixel-btpR9i3d.js","assets/graduation-cap-Bctj5hSH.js","assets/DMMarketingTools-aqwS2IOE.js","assets/DMMarketInsights-BA39N4uE.js","assets/DMPricing-JazgvjsP.js","assets/DMWhoShouldEnroll-BBQjBq-Y.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CvuwUR0U.js";
const DMCourseBenefits = reactExports.lazy(() => __vitePreload(() => import("./DMCourseBenefits-DhIaHpj8.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DMCourseOverview = reactExports.lazy(() => __vitePreload(() => import("./DMCourseOverview-Dy_Myb2X.js"), true ? __vite__mapDeps([5,1,2,3,4]) : void 0));
const DMCourseSyllabus = reactExports.lazy(() => __vitePreload(() => import("./DMCourseSyllabus-tgA1Nn2q.js"), true ? __vite__mapDeps([6,1,2,3,4]) : void 0));
const DMFAQs = reactExports.lazy(() => __vitePreload(() => import("./DMFAQs-CK9h-98Z.js"), true ? __vite__mapDeps([7,1,2,3,4]) : void 0));
const DMHandsOnProjects = reactExports.lazy(() => __vitePreload(() => import("./DMHandsOnProjects-BFheIKK5.js"), true ? __vite__mapDeps([8,1,2,3]) : void 0));
const DMHero = reactExports.lazy(() => __vitePreload(() => import("./DMHero-D0XCFtpp.js"), true ? __vite__mapDeps([9,1,2,10,11,12,13,14]) : void 0).then((m) => ({ default: m.DMHero })));
const DMMarketingTools = reactExports.lazy(() => __vitePreload(() => import("./DMMarketingTools-aqwS2IOE.js"), true ? __vite__mapDeps([15,1,2,3]) : void 0));
const DMMarketInsights = reactExports.lazy(() => __vitePreload(() => import("./DMMarketInsights-BA39N4uE.js"), true ? __vite__mapDeps([16,1,2,3]) : void 0));
const DMPricing = reactExports.lazy(() => __vitePreload(() => import("./DMPricing-JazgvjsP.js"), true ? __vite__mapDeps([17,1,2,3,4,11,12,13]) : void 0));
const DMWhoShouldEnroll = reactExports.lazy(() => __vitePreload(() => import("./DMWhoShouldEnroll-BBQjBq-Y.js"), true ? __vite__mapDeps([18,1,2,3,4]) : void 0));
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
