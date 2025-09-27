const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-B5-7T3Nt.js","assets/main-BxH0ZrLt.js","assets/main-Ctc2Wiva.css","assets/EnrollmentModal-pj7LRBsK.js","assets/enrollmentApi-BBm2zrfI.js","assets/metaPixel-DOCDtUNC.js","assets/index-Dhyh9cgl.js","assets/proxy-BUnDe0Le.js","assets/arrow-right-oQSgCAEl.js","assets/DataProgramEIE-C1OAPCos.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-Bd7NnHRj.js","assets/DataMentorsEIE-DhLMmEUz.js","assets/users-Ck1c6nQM.js","assets/linkedin-D3Yjb6Ql.js","assets/DataPricingEIE-BrpXG4B3.js","assets/check-3i--YltW.js","assets/CAPEEIE-4E9hj6AF.js","assets/lightbulb-4ONhYSOH.js","assets/bar-chart-DScN7EdQ.js","assets/DataCertificateEIE-Xlh8W6Tw.js","assets/WhoIsThisContentForEIE-BRfMIe7s.js","assets/DataAnalyticsFAQFB-W4SUbIaT.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BxH0ZrLt.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DY0kWvIi.js";
import { S as StickyBookNav } from "./StickyBookNav-DIcqnH_-.js";
import "./EnrollmentModal-pj7LRBsK.js";
import "./enrollmentApi-BBm2zrfI.js";
import "./metaPixel-DOCDtUNC.js";
import "./index-Dhyh9cgl.js";
import "./proxy-BUnDe0Le.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-B5-7T3Nt.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-C1OAPCos.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-Bd7NnHRj.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-DhLMmEUz.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-BrpXG4B3.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-4E9hj6AF.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-Xlh8W6Tw.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-BRfMIe7s.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-W4SUbIaT.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
