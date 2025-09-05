const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-Dh6J8gB3.js","assets/main-C28QhmdX.js","assets/main-CnF9mUWs.css","assets/proxy-DwSb1Opz.js","assets/lightbulb-C9i2S3iP.js","assets/bar-chart-CQppz6au.js","assets/DataCertificateEIE-DfAkA2yW.js","assets/DataHeroEIE-CQCN9Q-N.js","assets/EnrollmentModal-CpbHh6iK.js","assets/enrollmentApi-GwMyt4F-.js","assets/metaPixel-B9un28kE.js","assets/index-DajbXocm.js","assets/arrow-right-D13kLv6E.js","assets/DataJourneyEIE-CLUpRaPk.js","assets/trophy-Cy4P2PzR.js","assets/graduation-cap-B4ERND6f.js","assets/book-open-BSU_yNPN.js","assets/DataMentorsEIE-BO-eftXy.js","assets/users-DMt_YjC6.js","assets/linkedin-By11FiW7.js","assets/DataPricingEIE-DQoIEnvv.js","assets/check-ChzTlK8-.js","assets/DataProgramEIE-D4WFwv5Q.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-DOqy128R.js","assets/WhoIsThisContentForEIE-CS-hN5hM.js","assets/DataAnalyticsFAQFB-oFtbbTjM.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-C28QhmdX.js";
import { H as HeaderEIE } from "./HeaderEIE-DyhRgm7n.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DzEOfFjB.js";
import { S as StickyBookNav } from "./StickyBookNav-Dr59ByLN.js";
import "./EnrollmentModal-CpbHh6iK.js";
import "./enrollmentApi-GwMyt4F-.js";
import "./metaPixel-B9un28kE.js";
import "./index-DajbXocm.js";
import "./proxy-DwSb1Opz.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Dh6J8gB3.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DfAkA2yW.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-CQCN9Q-N.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-CLUpRaPk.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BO-eftXy.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DQoIEnvv.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-D4WFwv5Q.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-DOqy128R.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CS-hN5hM.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-oFtbbTjM.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
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
