const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-DmC3A8Or.js","assets/main-BP2-o3HA.js","assets/main-g1H-mEfk.css","assets/lightbulb-DVyckyzX.js","assets/bar-chart-DsOyUhec.js","assets/DataCertificateEIE-DNQA-5l1.js","assets/DataHeroEIE-CqDEN8nc.js","assets/EnrollmentModal-kxpu3ypA.js","assets/enrollmentApi-CC5EL50X.js","assets/metaPixel-T6CcSP6C.js","assets/arrow-right-H3l7OrWI.js","assets/DataJourneyEIE-B5DV-HuO.js","assets/trophy-DX5iEwqv.js","assets/graduation-cap-D30TTZEd.js","assets/book-open-DBxymLqF.js","assets/DataMentorsEIE-D-ppuuzN.js","assets/users-C-2WY11G.js","assets/linkedin-B0ExC2c-.js","assets/DataPricingEIE-DDmZZ1eX.js","assets/check-BY3_hinp.js","assets/DataProgramEIE-Dw0S3sQT.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-3AsgveWA.js","assets/WhoIsThisContentForEIE-BEkYx_8-.js","assets/DataAnalyticsFAQFB-2TZzTn-7.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BP2-o3HA.js";
import { H as HeaderEIE } from "./HeaderEIE-B3KpqFfb.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-D42bZocK.js";
import { S as StickyBookNav } from "./StickyBookNav-B2z05M8w.js";
import "./EnrollmentModal-kxpu3ypA.js";
import "./enrollmentApi-CC5EL50X.js";
import "./metaPixel-T6CcSP6C.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-DmC3A8Or.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DNQA-5l1.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-CqDEN8nc.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-B5DV-HuO.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-D-ppuuzN.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DDmZZ1eX.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-Dw0S3sQT.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-3AsgveWA.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-BEkYx_8-.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-2TZzTn-7.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
