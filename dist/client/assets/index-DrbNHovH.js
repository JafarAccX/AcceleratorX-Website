const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-F0s2IQ7E.js","assets/main-CyKI5oeo.js","assets/main-B4XYXhR2.css","assets/EnrollmentModal-De06Jtf6.js","assets/enrollmentApi-Cu1oEIrV.js","assets/metaPixel-BH32gJwg.js","assets/index-BNL4sw4U.js","assets/proxy-BOkuqYBJ.js","assets/arrow-right-CxH0EQ0a.js","assets/DataProgramEIE-Bv-3CwA7.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-445B_-hh.js","assets/DataMentorsEIE-gI741EwG.js","assets/users-CGx24rbU.js","assets/linkedin-FjGrX4qg.js","assets/DataPricingEIE-1shkRk9m.js","assets/check-Bd08_L0C.js","assets/CAPEEIE-bDPYJVzy.js","assets/lightbulb-a9mzD8P_.js","assets/bar-chart-C8c7Vyr-.js","assets/DataCertificateEIE-DNExqx_R.js","assets/WhoIsThisContentForEIE-DCaPaJvc.js","assets/DataAnalyticsFAQFB-C4TpA9t-.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CyKI5oeo.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DEAbprPG.js";
import { S as StickyBookNav } from "./StickyBookNav-CwjuiDp7.js";
import "./EnrollmentModal-De06Jtf6.js";
import "./enrollmentApi-Cu1oEIrV.js";
import "./metaPixel-BH32gJwg.js";
import "./index-BNL4sw4U.js";
import "./proxy-BOkuqYBJ.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-F0s2IQ7E.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-Bv-3CwA7.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-445B_-hh.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-gI741EwG.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-1shkRk9m.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-bDPYJVzy.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DNExqx_R.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DCaPaJvc.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-C4TpA9t-.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
const DataAnalyticsPage = () => {
  const { setSelectedCourse } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataHeroEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroWithAbouv, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhoIsThisContentForEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataProgramEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CAPEEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataCertificateEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataMentorsEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataSkillsToolsEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataPricingEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataAnalyticsFAQFB, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyBookNav, {})
  ] }) });
};
export {
  DataAnalyticsPage as default
};
