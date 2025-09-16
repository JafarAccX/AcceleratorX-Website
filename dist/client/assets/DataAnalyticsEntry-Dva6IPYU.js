const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-BpuYWA8z.js","assets/main-BOeEXsPM.js","assets/main-CnF9mUWs.css","assets/proxy-BkLUGwlU.js","assets/lightbulb-BV-juen_.js","assets/bar-chart-CakIB82y.js","assets/DataCertificateEIE-hY-8jqiX.js","assets/DataHeroEIE-DGsrFLl4.js","assets/EnrollmentModal-B2rURnZi.js","assets/enrollmentApi-B9uFHRSh.js","assets/metaPixel-Bmpr2vms.js","assets/index-BLTItVKD.js","assets/arrow-right-DkGKnnUl.js","assets/DataJourneyEIE-BwWo_CD3.js","assets/trophy-BBbxUwJG.js","assets/graduation-cap-hQK2OVL-.js","assets/book-open-BBXe42fc.js","assets/DataMentorsEIE-gg7Ue-zf.js","assets/users-C2gyDQ75.js","assets/linkedin-PajTg24b.js","assets/DataPricingEIE-CdcOpQzl.js","assets/check-CQDV7dMv.js","assets/DataProgramEIE-BIrcuGBS.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-DfnkIJjM.js","assets/WhoIsThisContentForEIE-DkqqIdKL.js","assets/DataAnalyticsFAQFB-ALrK78tX.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BOeEXsPM.js";
import { H as HeaderEIE } from "./HeaderEIE-n_Ko0Iim.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-pwlmCUnZ.js";
import { S as StickyBookNav } from "./StickyBookNav-IYRzxML0.js";
import "./EnrollmentModal-B2rURnZi.js";
import "./enrollmentApi-B9uFHRSh.js";
import "./metaPixel-Bmpr2vms.js";
import "./index-BLTItVKD.js";
import "./proxy-BkLUGwlU.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-BpuYWA8z.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-hY-8jqiX.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-DGsrFLl4.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-BwWo_CD3.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-gg7Ue-zf.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CdcOpQzl.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-BIrcuGBS.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-DfnkIJjM.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DkqqIdKL.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-ALrK78tX.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
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
