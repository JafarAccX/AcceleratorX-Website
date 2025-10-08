const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-CGLyDizv.js","assets/main-DHphvIsW.js","assets/main-g1H-mEfk.css","assets/lightbulb-DNJCOwNP.js","assets/bar-chart-_ndOPE4A.js","assets/DataCertificateEIE-R02UcJPq.js","assets/DataHeroEIE-WAYCuRD9.js","assets/EnrollmentModal-DVARnpwq.js","assets/enrollmentApi-DT_AxxXz.js","assets/metaPixel-BtqJNysz.js","assets/arrow-right-q-8oo8XS.js","assets/DataJourneyEIE-CnjThSMU.js","assets/trophy-BYT9oEeT.js","assets/graduation-cap-D9At4GXv.js","assets/book-open-CiYAr8s7.js","assets/DataMentorsEIE-BZoilwSe.js","assets/users-BTurkWRB.js","assets/linkedin-DVz9XFWf.js","assets/DataPricingEIE-BtgMwq3s.js","assets/check-CCI57iDP.js","assets/DataProgramEIE-D3QyRA_S.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-DW9OzBUw.js","assets/WhoIsThisContentForEIE-xBCo9Yuf.js","assets/DataAnalyticsFAQFB-DcuDja_6.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DHphvIsW.js";
import { H as HeaderEIE } from "./HeaderEIE-BKyKeF5C.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DBZ2oFAc.js";
import { S as StickyBookNav } from "./StickyBookNav-BDDBj1A1.js";
import "./EnrollmentModal-DVARnpwq.js";
import "./enrollmentApi-DT_AxxXz.js";
import "./metaPixel-BtqJNysz.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-CGLyDizv.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-R02UcJPq.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-WAYCuRD9.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-CnjThSMU.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BZoilwSe.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-BtgMwq3s.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-D3QyRA_S.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-DW9OzBUw.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-xBCo9Yuf.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-DcuDja_6.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
