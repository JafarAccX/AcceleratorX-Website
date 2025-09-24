const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-0I5Jw5dz.js","assets/main-qWvHMlpM.js","assets/main-7GdIFNw8.css","assets/EnrollmentModal-Dpjkiyj0.js","assets/enrollmentApi-GL8zyR1h.js","assets/metaPixel-BoiM50Kb.js","assets/index-BxRq7_T9.js","assets/proxy-CjacfDEi.js","assets/arrow-right-Ck9WQLvf.js","assets/DataProgramEIE-DQqiwgn8.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-CPh9AgDc.js","assets/DataMentorsEIE-BkeD2wgd.js","assets/users-B-IbMIwJ.js","assets/linkedin-QDjRf_Zb.js","assets/DataPricingEIE-BaQEM16y.js","assets/check-BqZ4dFYa.js","assets/CAPEEIE-DfX6O2Ut.js","assets/lightbulb-UyqL5I1z.js","assets/bar-chart-Te4vOh3x.js","assets/DataCertificateEIE-CouJEYrK.js","assets/WhoIsThisContentForEIE-DKcSVpb4.js","assets/DataAnalyticsFAQFB-CkK8m6uc.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-qWvHMlpM.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DvezlriM.js";
import { S as StickyBookNav } from "./StickyBookNav-BxFVPSNS.js";
import "./EnrollmentModal-Dpjkiyj0.js";
import "./enrollmentApi-GL8zyR1h.js";
import "./metaPixel-BoiM50Kb.js";
import "./index-BxRq7_T9.js";
import "./proxy-CjacfDEi.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-0I5Jw5dz.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DQqiwgn8.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-CPh9AgDc.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BkeD2wgd.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-BaQEM16y.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-DfX6O2Ut.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-CouJEYrK.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DKcSVpb4.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-CkK8m6uc.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
