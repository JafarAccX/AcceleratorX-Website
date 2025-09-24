const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-ofjtuX3O.js","assets/main-CfA5h11a.js","assets/main-ByJX9cvk.css","assets/proxy-CHEv0qax.js","assets/lightbulb-DZRUeavV.js","assets/bar-chart-CjWFj_qn.js","assets/DataCertificateEIE-HpTNzCAs.js","assets/DataHeroEIE-CNyH6b-f.js","assets/EnrollmentModal-Cws58IB3.js","assets/enrollmentApi-DH74qvpY.js","assets/metaPixel-DjMPEQ2F.js","assets/index-Dk7MajVP.js","assets/arrow-right-DhvCu5pI.js","assets/DataJourneyEIE-BW5pS-GY.js","assets/trophy-DnS9JXRk.js","assets/graduation-cap-2f5WWh2y.js","assets/book-open-VrKJ0uSR.js","assets/DataMentorsEIE-CqkOlejT.js","assets/users-DAUYd__u.js","assets/linkedin-RRfkeBVk.js","assets/DataPricingEIE-hW1lu3rR.js","assets/check-DT9GdvSS.js","assets/DataProgramEIE-BrfPNBAG.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-wc4OpYvr.js","assets/WhoIsThisContentForEIE-CLu6_2yg.js","assets/DataAnalyticsFAQFB-gM1F6xD7.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CfA5h11a.js";
import { H as HeaderEIE } from "./HeaderEIE-ewXvpesP.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BpGRfCTL.js";
import { S as StickyBookNav } from "./StickyBookNav-DVpZpPfk.js";
import "./EnrollmentModal-Cws58IB3.js";
import "./enrollmentApi-DH74qvpY.js";
import "./metaPixel-DjMPEQ2F.js";
import "./index-Dk7MajVP.js";
import "./proxy-CHEv0qax.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-ofjtuX3O.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-HpTNzCAs.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-CNyH6b-f.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-BW5pS-GY.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CqkOlejT.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-hW1lu3rR.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-BrfPNBAG.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-wc4OpYvr.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CLu6_2yg.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-gM1F6xD7.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
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
