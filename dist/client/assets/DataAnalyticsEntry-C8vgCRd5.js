const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-CJTFfQVh.js","assets/main-ma4iRsbt.js","assets/main-G0CT17v4.css","assets/lightbulb-B3kfgARX.js","assets/bar-chart-BrN6lzJB.js","assets/DataCertificateEIE-DR8uza8J.js","assets/DataHeroEIE-C42qMc4c.js","assets/EnrollmentModal-Drsk4gj-.js","assets/enrollmentApi-CgCiDHJR.js","assets/metaPixel-BzgFvOZj.js","assets/arrow-right-NQ7PO8Rg.js","assets/DataJourneyEIE-NSHIPKlV.js","assets/trophy-C4oiFXuJ.js","assets/graduation-cap-DG8m3IIa.js","assets/book-open-Y45mtJCo.js","assets/DataMentorsEIE-adbQWxiK.js","assets/users-B94grk6x.js","assets/linkedin-C2GvV4V5.js","assets/DataPricingEIE-CEY2suaF.js","assets/check-DSgdJU7e.js","assets/DataProgramEIE-CUTrDIBO.js","assets/constants-BiTomjDI.js","assets/DataSkillsToolsEIE-DTosRLE3.js","assets/WhoIsThisContentForEIE-D9pKpk_L.js","assets/DataAnalyticsFAQFB-CghdsfCw.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-ma4iRsbt.js";
import { H as HeaderEIE } from "./HeaderEIE-CcQprB3T.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CTRIul8z.js";
import { S as StickyBookNav } from "./StickyBookNav-CduC0Qza.js";
import "./EnrollmentModal-Drsk4gj-.js";
import "./enrollmentApi-CgCiDHJR.js";
import "./metaPixel-BzgFvOZj.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-CJTFfQVh.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DR8uza8J.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-C42qMc4c.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-NSHIPKlV.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-adbQWxiK.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CEY2suaF.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-CUTrDIBO.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-DTosRLE3.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-D9pKpk_L.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-CghdsfCw.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
