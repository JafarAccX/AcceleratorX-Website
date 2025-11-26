const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-CeizEdGK.js","assets/main-YlaQtpvX.js","assets/main-nEWqamtX.css","assets/lightbulb-DlzcYlmc.js","assets/bar-chart-jbPDyV3w.js","assets/DataCertificateEIE-BRJZNt8j.js","assets/DataHeroEIE-QuI-HPMR.js","assets/EnrollmentModal-BBDW6IiB.js","assets/enrollmentApi-CyO8--cD.js","assets/metaPixel-D1cTjkIT.js","assets/arrow-right-xZ8csAvl.js","assets/DataJourneyEIE-C8JFDb7a.js","assets/trophy-BbBPq5nL.js","assets/graduation-cap-CEj8zlww.js","assets/book-open-ijuM1Bfg.js","assets/DataMentorsEIE-BI11WO8N.js","assets/users-CZOdj9yh.js","assets/linkedin-Cpm2_oPU.js","assets/DataPricingEIE-CCHHeYUK.js","assets/check-A8vszYh6.js","assets/DataProgramEIE-3DQuNLb-.js","assets/constants-DXOhk-SF.js","assets/DataSkillsToolsEIE-VurKZK1I.js","assets/WhoIsThisContentForEIE-eJTGYpvC.js","assets/DataAnalyticsFAQFB-BTeI7nx7.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-YlaQtpvX.js";
import { H as HeaderEIE } from "./HeaderEIE-CMKJ5D-p.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BvZtgv2K.js";
import { S as StickyBookNav } from "./StickyBookNav-BJbKwGZK.js";
import "./EnrollmentModal-BBDW6IiB.js";
import "./enrollmentApi-CyO8--cD.js";
import "./metaPixel-D1cTjkIT.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-CeizEdGK.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BRJZNt8j.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-QuI-HPMR.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-C8JFDb7a.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BI11WO8N.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CCHHeYUK.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-3DQuNLb-.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-VurKZK1I.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-eJTGYpvC.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-BTeI7nx7.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
