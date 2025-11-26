const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-D8nd4P05.js","assets/main-BOGL_qrK.js","assets/main-Ce-Pe5sq.css","assets/lightbulb-C3cc50B4.js","assets/bar-chart-CveIFIj3.js","assets/DataCertificateEIE-CxkYXFOo.js","assets/DataHeroEIE-Dx-bG6-z.js","assets/EnrollmentModal-CdUYKDbj.js","assets/enrollmentApi-CLHUpnY0.js","assets/metaPixel-DF1g-LVJ.js","assets/arrow-right-CvJNNVH_.js","assets/DataJourneyEIE-_w-J4bK4.js","assets/trophy-DjGJi292.js","assets/graduation-cap-BLjO-xOp.js","assets/book-open-D-1m06eI.js","assets/DataMentorsEIE-DEBLc0pq.js","assets/users-Q75F72PU.js","assets/linkedin-CCgoRmB-.js","assets/DataPricingEIE-Dle7Nhhz.js","assets/check-C6Mv0tTG.js","assets/DataProgramEIE-CTrF20-U.js","assets/constants-DXOhk-SF.js","assets/DataSkillsToolsEIE-CIxvUXW3.js","assets/WhoIsThisContentForEIE-Dv4EtyMx.js","assets/DataAnalyticsFAQFB-CQxZ5AfD.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BOGL_qrK.js";
import { H as HeaderEIE } from "./HeaderEIE-DrIyw910.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-mauNdrb7.js";
import { S as StickyBookNav } from "./StickyBookNav-Xl0g2nrx.js";
import "./EnrollmentModal-CdUYKDbj.js";
import "./enrollmentApi-CLHUpnY0.js";
import "./metaPixel-DF1g-LVJ.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-D8nd4P05.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-CxkYXFOo.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-Dx-bG6-z.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-_w-J4bK4.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-DEBLc0pq.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-Dle7Nhhz.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-CTrF20-U.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-CIxvUXW3.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-Dv4EtyMx.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-CQxZ5AfD.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
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
