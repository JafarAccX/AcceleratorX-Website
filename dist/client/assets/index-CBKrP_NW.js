const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-501MNFzM.js","assets/main-Ct9V9NA-.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-BmEwUbmd.js","assets/enrollmentApi-CWz3pxgi.js","assets/metaPixel-DOoJxazD.js","assets/index-TfPTM_co.js","assets/proxy-ClgBuM4B.js","assets/arrow-right-Da_mgZbD.js","assets/DataProgramEIE-BvaaOldw.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-BBF0ym-T.js","assets/DataMentorsEIE-BG8n3DUg.js","assets/users-BvbW8Gje.js","assets/linkedin-DavFyCMQ.js","assets/DataPricingEIE-CgJFanB8.js","assets/check-BCbdE6lI.js","assets/CAPEEIE-C5KgA4rM.js","assets/lightbulb-DE-_wmZC.js","assets/bar-chart-Crnw2qNl.js","assets/DataCertificateEIE-DWfHRPtM.js","assets/WhoIsThisContentForEIE-aunuyGDb.js","assets/DataAnalyticsFAQFB-287PIv0y.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Ct9V9NA-.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-C1ohNEfT.js";
import { S as StickyBookNav } from "./StickyBookNav-Bb2LCHeP.js";
import "./EnrollmentModal-BmEwUbmd.js";
import "./enrollmentApi-CWz3pxgi.js";
import "./metaPixel-DOoJxazD.js";
import "./index-TfPTM_co.js";
import "./proxy-ClgBuM4B.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-501MNFzM.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-BvaaOldw.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-BBF0ym-T.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BG8n3DUg.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CgJFanB8.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-C5KgA4rM.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DWfHRPtM.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-aunuyGDb.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-287PIv0y.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
