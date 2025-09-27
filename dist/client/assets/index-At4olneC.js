const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-BmCGMMgK.js","assets/main-Bxo1x8yy.js","assets/main-Ctc2Wiva.css","assets/EnrollmentModal-CKojwu56.js","assets/enrollmentApi-BHSFbNU_.js","assets/metaPixel-D0RJkYnI.js","assets/index-Bz74Jjsn.js","assets/proxy-DxTfwLxA.js","assets/arrow-right-D5SSA7m-.js","assets/DataProgramEIE-RgGUkSJP.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-CdZG4ZJk.js","assets/DataMentorsEIE-0fMkhn0S.js","assets/users-DlSbkj3O.js","assets/linkedin-CbEvAP-m.js","assets/DataPricingEIE-DCbjPORo.js","assets/check-C7v3Fn92.js","assets/CAPEEIE-BOksqhB_.js","assets/lightbulb-DQWjX15H.js","assets/bar-chart-2YYPOXIO.js","assets/DataCertificateEIE-DY9SXphC.js","assets/WhoIsThisContentForEIE-RleEqqpM.js","assets/DataAnalyticsFAQFB-DOU1ojqN.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bxo1x8yy.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Xh5TZw_d.js";
import { S as StickyBookNav } from "./StickyBookNav-a2hQ2lw4.js";
import "./EnrollmentModal-CKojwu56.js";
import "./enrollmentApi-BHSFbNU_.js";
import "./metaPixel-D0RJkYnI.js";
import "./index-Bz74Jjsn.js";
import "./proxy-DxTfwLxA.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-BmCGMMgK.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-RgGUkSJP.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-CdZG4ZJk.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-0fMkhn0S.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-DCbjPORo.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-BOksqhB_.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DY9SXphC.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-RleEqqpM.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-DOU1ojqN.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
