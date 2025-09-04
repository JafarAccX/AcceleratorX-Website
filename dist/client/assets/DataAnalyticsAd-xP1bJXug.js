const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-NGiEyMo6.js","assets/main-D1W_Gn8a.js","assets/main-CtI5RTA1.css","assets/proxy-fmmV8hun.js","assets/lightbulb-BKidIEcH.js","assets/bar-chart-DOBdjBNq.js","assets/DataCertificateEIE-BI0KWbj7.js","assets/DataHeroEIE-BfWdPswJ.js","assets/EnrollmentModal-sWAI2odA.js","assets/enrollmentApi-CC778mEB.js","assets/metaPixel-B5VtgsBv.js","assets/index-Ds976zVw.js","assets/arrow-right-C1y_k2Nr.js","assets/DataJourneyEIE-BehBoMf9.js","assets/trophy-CgrNOhAZ.js","assets/graduation-cap-DC2-xDNC.js","assets/book-open-D9g21TaP.js","assets/DataMentorsEIE-CViu1x_C.js","assets/users-CqKE-c12.js","assets/linkedin-3pWtL9kh.js","assets/DataPricingEIE-CYtdfthe.js","assets/check-CC7liN5n.js","assets/DataProgramEIE-CF-uYqWF.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-CJBopU8a.js","assets/WhoIsThisContentForEIE-DwyO9G6v.js","assets/DataAnalyticsFAQFB-DwQH-RMb.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-D1W_Gn8a.js";
import { H as HeaderEIE } from "./HeaderEIE-DQzoDUjM.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Cp3TdhOY.js";
import { S as StickyBookNav } from "./StickyBookNav-6TFJPmWO.js";
import "./EnrollmentModal-sWAI2odA.js";
import "./enrollmentApi-CC778mEB.js";
import "./metaPixel-B5VtgsBv.js";
import "./index-Ds976zVw.js";
import "./proxy-fmmV8hun.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-NGiEyMo6.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BI0KWbj7.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-BfWdPswJ.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-BehBoMf9.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CViu1x_C.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CYtdfthe.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-CF-uYqWF.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-CJBopU8a.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DwyO9G6v.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-DwQH-RMb.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
const DataAnalyticsAd = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataHeroEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroWithAbouv, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhoIsThisContentForEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataProgramEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CAPEEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataJourneyEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataCertificateEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataMentorsEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataSkillsToolsEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataPricingEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataAnalyticsFAQFB, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StickyBookNav, {})
    ] })
  ] });
};
export {
  DataAnalyticsAd as default
};
