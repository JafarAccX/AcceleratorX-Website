const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-JUNFFYFn.js","assets/main-DS-AYwzb.js","assets/main-Bk1JQKD4.css","assets/EnrollmentModal-DvFI3y3c.js","assets/enrollmentApi--UjIqsAr.js","assets/metaPixel-BAx_qkDv.js","assets/index-CvAAj5Ob.js","assets/proxy-BvognpjE.js","assets/arrow-right-CJ-5ajnw.js","assets/DataProgramEIE-BZaTV2hJ.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-CguLm1k6.js","assets/DataMentorsEIE-wpWCXbVD.js","assets/users-DCb0cENh.js","assets/linkedin-D4idkOLD.js","assets/DataPricingEIE-C9YUbxaU.js","assets/check-X56IpEde.js","assets/CAPEEIE-DWI891MV.js","assets/lightbulb-CFG8tQdS.js","assets/bar-chart-D-zX9yUX.js","assets/DataCertificateEIE-gSDL7Whn.js","assets/WhoIsThisContentForEIE-CwMtNLZE.js","assets/DataAnalyticsFAQFB-BxgQxrfX.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DS-AYwzb.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DpettWLk.js";
import { S as StickyBookNav } from "./StickyBookNav-D5q4mrkx.js";
import "./EnrollmentModal-DvFI3y3c.js";
import "./enrollmentApi--UjIqsAr.js";
import "./metaPixel-BAx_qkDv.js";
import "./index-CvAAj5Ob.js";
import "./proxy-BvognpjE.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-JUNFFYFn.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-BZaTV2hJ.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-CguLm1k6.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-wpWCXbVD.js"), true ? __vite__mapDeps([12,1,2,7,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-C9YUbxaU.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-DWI891MV.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-gSDL7Whn.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-CwMtNLZE.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-BxgQxrfX.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
