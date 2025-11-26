const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-BYUPKnuL.js","assets/main-DIFEnr0T.js","assets/main-Ce-Pe5sq.css","assets/lightbulb-B9UWGBAt.js","assets/bar-chart-BZYXtDv4.js","assets/DataCertificateEIE-DUuTgyB3.js","assets/DataHeroEIE-Cnba3ea7.js","assets/EnrollmentModal-CGXZR3j2.js","assets/enrollmentApi-GN7J7nzz.js","assets/metaPixel-DADRfF0c.js","assets/arrow-right-zzHrm7eN.js","assets/DataJourneyEIE-C5gk0E8n.js","assets/trophy-Bhreleld.js","assets/graduation-cap-BNSpdZBf.js","assets/book-open-oEF5i-XC.js","assets/DataMentorsEIE-B5XUWuGP.js","assets/users-CYWDJFl-.js","assets/linkedin-DDSnRLIQ.js","assets/DataPricingEIE-Byx9XczW.js","assets/check-D4vgtGun.js","assets/DataProgramEIE-DZTFJIIT.js","assets/constants-DXOhk-SF.js","assets/DataSkillsToolsEIE-Cfd0YYSr.js","assets/WhoIsThisContentForEIE-Cx9bz3f0.js","assets/DataAnalyticsFAQFB-CYZmTfun.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DIFEnr0T.js";
import { H as HeaderEIE } from "./HeaderEIE-D8oWOEzg.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-5fRhV7A_.js";
import { S as StickyBookNav } from "./StickyBookNav-CwFgJ3iH.js";
import "./EnrollmentModal-CGXZR3j2.js";
import "./enrollmentApi-GN7J7nzz.js";
import "./metaPixel-DADRfF0c.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-BYUPKnuL.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DUuTgyB3.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-Cnba3ea7.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-C5gk0E8n.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-B5XUWuGP.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-Byx9XczW.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DZTFJIIT.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-Cfd0YYSr.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-Cx9bz3f0.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-CYZmTfun.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
const DataAnalyticsEntry = () => {
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
  DataAnalyticsEntry as default
};
