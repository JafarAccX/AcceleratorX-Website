const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-CoCn6zNM.js","assets/main-EGEnCh6i.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-DPDKkDKj.js","assets/enrollmentApi-DSV_ou16.js","assets/metaPixel-CEyU9G7i.js","assets/index-BAcEffVT.js","assets/proxy-CXL56B2m.js","assets/arrow-right-C_Mh0B54.js","assets/DataProgramEIE-CEW9yi_1.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-BOfkxoue.js","assets/DataMentorsEIE-pGt_DQdB.js","assets/users-CrRmhLoB.js","assets/linkedin-Cps4pr-z.js","assets/DataPricingEIE-D-6OBAeP.js","assets/check-DbbQBIaB.js","assets/CAPEEIE-qtpe9DoN.js","assets/lightbulb-BuFcw8LD.js","assets/bar-chart-Dj4EIGB4.js","assets/DataCertificateEIE-D7sbYsT3.js","assets/WhoIsThisContentForEIE-CfkaVIxF.js","assets/DataAnalyticsFAQFB-B2sqm1hW.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-EGEnCh6i.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DRZ2hk6q.js";
import { S as StickyBookNav } from "./StickyBookNav-BURuPlPz.js";
import "./EnrollmentModal-DPDKkDKj.js";
import "./enrollmentApi-DSV_ou16.js";
import "./metaPixel-CEyU9G7i.js";
import "./index-BAcEffVT.js";
import "./proxy-CXL56B2m.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-CoCn6zNM.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-CEW9yi_1.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-BOfkxoue.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-pGt_DQdB.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-D-6OBAeP.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-qtpe9DoN.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-D7sbYsT3.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CfkaVIxF.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-B2sqm1hW.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
