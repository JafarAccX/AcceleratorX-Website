const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-qtpe9DoN.js","assets/main-EGEnCh6i.js","assets/main-CnF9mUWs.css","assets/proxy-CXL56B2m.js","assets/lightbulb-BuFcw8LD.js","assets/bar-chart-Dj4EIGB4.js","assets/DataCertificateEIE-D7sbYsT3.js","assets/DataHeroEIE-CoCn6zNM.js","assets/EnrollmentModal-DPDKkDKj.js","assets/enrollmentApi-DSV_ou16.js","assets/metaPixel-CEyU9G7i.js","assets/index-BAcEffVT.js","assets/arrow-right-C_Mh0B54.js","assets/DataJourneyEIE-CLeGsgWn.js","assets/trophy--uEI7Vei.js","assets/graduation-cap-CmvwzVZJ.js","assets/book-open-FOX8DHE6.js","assets/DataMentorsEIE-pGt_DQdB.js","assets/users-CrRmhLoB.js","assets/linkedin-Cps4pr-z.js","assets/DataPricingEIE-D-6OBAeP.js","assets/check-DbbQBIaB.js","assets/DataProgramEIE-CEW9yi_1.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-BOfkxoue.js","assets/WhoIsThisContentForEIE-CfkaVIxF.js","assets/DataAnalyticsFAQFB-B2sqm1hW.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-EGEnCh6i.js";
import { H as HeaderEIE } from "./HeaderEIE-HvvxqqFC.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DRZ2hk6q.js";
import { S as StickyBookNav } from "./StickyBookNav-BURuPlPz.js";
import "./EnrollmentModal-DPDKkDKj.js";
import "./enrollmentApi-DSV_ou16.js";
import "./metaPixel-CEyU9G7i.js";
import "./index-BAcEffVT.js";
import "./proxy-CXL56B2m.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-qtpe9DoN.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-D7sbYsT3.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-CoCn6zNM.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-CLeGsgWn.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-pGt_DQdB.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-D-6OBAeP.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-CEW9yi_1.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-BOfkxoue.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CfkaVIxF.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-B2sqm1hW.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
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
