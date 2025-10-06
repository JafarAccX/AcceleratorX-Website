const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-CaUH45rV.js","assets/main-CQZRSQfQ.js","assets/main-ClQXKXUm.css","assets/lightbulb-CSO9Vg3G.js","assets/bar-chart-CxcpZClc.js","assets/DataCertificateEIE-CxRo5x60.js","assets/DataHeroEIE-CMxjeekS.js","assets/EnrollmentModal-kIl_IML_.js","assets/enrollmentApi-JK_WiLhq.js","assets/metaPixel-BPrv2gAs.js","assets/arrow-right-D3aRQQIV.js","assets/DataJourneyEIE-DA9XpKNK.js","assets/trophy-BA7Z0DlJ.js","assets/graduation-cap-D1IevO8B.js","assets/book-open-D5GraKyV.js","assets/DataMentorsEIE-BkUm77OQ.js","assets/users-7HEfShSi.js","assets/linkedin-Sv2hBCqD.js","assets/DataPricingEIE-CcTowaYd.js","assets/check-BF5gEgUV.js","assets/DataProgramEIE-DujwDpY1.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-jGc_2Suv.js","assets/WhoIsThisContentForEIE-Drk_6Vhc.js","assets/DataAnalyticsFAQFB-LAEMdPzu.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CQZRSQfQ.js";
import { H as HeaderEIE } from "./HeaderEIE-B8F1_5G-.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CWans2Od.js";
import { S as StickyBookNav } from "./StickyBookNav-UmBA8p9O.js";
import "./EnrollmentModal-kIl_IML_.js";
import "./enrollmentApi-JK_WiLhq.js";
import "./metaPixel-BPrv2gAs.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-CaUH45rV.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-CxRo5x60.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-CMxjeekS.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-DA9XpKNK.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BkUm77OQ.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CcTowaYd.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DujwDpY1.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-jGc_2Suv.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-Drk_6Vhc.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-LAEMdPzu.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
