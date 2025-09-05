const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-COhAYm6Z.js","assets/main-C2SXHoHD.js","assets/main-DzJ5IfLy.css","assets/EnrollmentModal-CL9C06ud.js","assets/enrollmentApi-BkaCLl_k.js","assets/metaPixel-BGrWFMSd.js","assets/index-UU-4IguJ.js","assets/proxy-BAKFzumD.js","assets/arrow-right-C8kfY9g8.js","assets/DataProgramEIE-DF-i8243.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-DD55FBaD.js","assets/DataMentorsEIE-D3oiDmv8.js","assets/users-Bl8ZOq4h.js","assets/linkedin-CJeXLL1m.js","assets/DataPricingEIE-CcMywQMQ.js","assets/check-BBBiiT2b.js","assets/CAPEEIE-1i46sp_-.js","assets/lightbulb-BGiLoweA.js","assets/bar-chart-B9nG8xly.js","assets/DataCertificateEIE-lrlHkCYw.js","assets/WhoIsThisContentForEIE-BlWyA0oC.js","assets/DataAnalyticsFAQFB-qC5RVv6F.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-C2SXHoHD.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BJ8mh7_H.js";
import { S as StickyBookNav } from "./StickyBookNav-CApjna1n.js";
import "./EnrollmentModal-CL9C06ud.js";
import "./enrollmentApi-BkaCLl_k.js";
import "./metaPixel-BGrWFMSd.js";
import "./index-UU-4IguJ.js";
import "./proxy-BAKFzumD.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-COhAYm6Z.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DF-i8243.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-DD55FBaD.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-D3oiDmv8.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CcMywQMQ.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-1i46sp_-.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-lrlHkCYw.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-BlWyA0oC.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-qC5RVv6F.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
const DataAnalyticsPage = () => {
  const { setSelectedCourse } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataHeroEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroWithAbouv, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhoIsThisContentForEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataProgramEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CAPEEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataCertificateEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataMentorsEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataSkillsToolsEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataPricingEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataAnalyticsFAQFB, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyBookNav, {})
  ] }) });
};
export {
  DataAnalyticsPage as default
};
