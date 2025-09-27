const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-Ch-4WsBM.js","assets/main-DVDzlx-0.js","assets/main-Ctc2Wiva.css","assets/proxy-D2c8tzA2.js","assets/lightbulb-BHxrNg2a.js","assets/bar-chart-Bcfezxr3.js","assets/DataCertificateEIE-BkNJIfuJ.js","assets/DataHeroEIE-B3maweOp.js","assets/EnrollmentModal-B-ncPKyk.js","assets/enrollmentApi-DcxRk6UX.js","assets/metaPixel-DYt_E5BE.js","assets/index-DXNQdcg1.js","assets/arrow-right-CV6wIZha.js","assets/DataJourneyEIE-Fmi0AC_q.js","assets/trophy-BnWybYyo.js","assets/graduation-cap-ttQpY5TX.js","assets/book-open-6jfW4xmj.js","assets/DataMentorsEIE-kp0_VEXS.js","assets/users-CECpohsr.js","assets/linkedin-CR5nIh6K.js","assets/DataPricingEIE-Dsb4T1JL.js","assets/check-516-pdnv.js","assets/DataProgramEIE-CSk_6d97.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-DqA3Q5XJ.js","assets/WhoIsThisContentForEIE-DUwLMNNm.js","assets/DataAnalyticsFAQFB-Cm-O9nGt.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DVDzlx-0.js";
import { H as HeaderEIE } from "./HeaderEIE-cUFlvIOz.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DXOCQuDZ.js";
import { S as StickyBookNav } from "./StickyBookNav-CH34erZU.js";
import "./EnrollmentModal-B-ncPKyk.js";
import "./enrollmentApi-DcxRk6UX.js";
import "./metaPixel-DYt_E5BE.js";
import "./index-DXNQdcg1.js";
import "./proxy-D2c8tzA2.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Ch-4WsBM.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BkNJIfuJ.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-B3maweOp.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-Fmi0AC_q.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-kp0_VEXS.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-Dsb4T1JL.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-CSk_6d97.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-DqA3Q5XJ.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DUwLMNNm.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-Cm-O9nGt.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
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
