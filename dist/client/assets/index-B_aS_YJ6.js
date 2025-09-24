const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-CNyH6b-f.js","assets/main-CfA5h11a.js","assets/main-ByJX9cvk.css","assets/EnrollmentModal-Cws58IB3.js","assets/enrollmentApi-DH74qvpY.js","assets/metaPixel-DjMPEQ2F.js","assets/index-Dk7MajVP.js","assets/proxy-CHEv0qax.js","assets/arrow-right-DhvCu5pI.js","assets/DataProgramEIE-BrfPNBAG.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-wc4OpYvr.js","assets/DataMentorsEIE-CqkOlejT.js","assets/users-DAUYd__u.js","assets/linkedin-RRfkeBVk.js","assets/DataPricingEIE-hW1lu3rR.js","assets/check-DT9GdvSS.js","assets/CAPEEIE-ofjtuX3O.js","assets/lightbulb-DZRUeavV.js","assets/bar-chart-CjWFj_qn.js","assets/DataCertificateEIE-HpTNzCAs.js","assets/WhoIsThisContentForEIE-CLu6_2yg.js","assets/DataAnalyticsFAQFB-gM1F6xD7.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CfA5h11a.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BpGRfCTL.js";
import { S as StickyBookNav } from "./StickyBookNav-DVpZpPfk.js";
import "./EnrollmentModal-Cws58IB3.js";
import "./enrollmentApi-DH74qvpY.js";
import "./metaPixel-DjMPEQ2F.js";
import "./index-Dk7MajVP.js";
import "./proxy-CHEv0qax.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-CNyH6b-f.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-BrfPNBAG.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-wc4OpYvr.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CqkOlejT.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-hW1lu3rR.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-ofjtuX3O.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-HpTNzCAs.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CLu6_2yg.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-gM1F6xD7.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
