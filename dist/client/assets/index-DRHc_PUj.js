const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-j0iXxlaq.js","assets/main-BHL7Gc-I.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-1rjxOGQO.js","assets/enrollmentApi-D-SHSyuz.js","assets/metaPixel-BqYvEWNF.js","assets/index-C-XkIKZM.js","assets/proxy-verKFKaM.js","assets/arrow-right-CI1uUyAu.js","assets/DataProgramEIE-D7ymCQcT.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-FxS_5nnq.js","assets/DataMentorsEIE-CKehXI51.js","assets/users-DUPFzUNZ.js","assets/linkedin-C15p91H-.js","assets/DataPricingEIE-Ch7hwDOx.js","assets/check-L3pEl07x.js","assets/CAPEEIE-Dw1G1owR.js","assets/lightbulb-JagPMHwv.js","assets/bar-chart-CUFjDat5.js","assets/DataCertificateEIE-CdvvYoV2.js","assets/WhoIsThisContentForEIE-wKjt9-9E.js","assets/DataAnalyticsFAQFB-CQBAc7Zj.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BHL7Gc-I.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DCnyfsYS.js";
import { S as StickyBookNav } from "./StickyBookNav-6MwHuKkM.js";
import "./EnrollmentModal-1rjxOGQO.js";
import "./enrollmentApi-D-SHSyuz.js";
import "./metaPixel-BqYvEWNF.js";
import "./index-C-XkIKZM.js";
import "./proxy-verKFKaM.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-j0iXxlaq.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-D7ymCQcT.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-FxS_5nnq.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CKehXI51.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-Ch7hwDOx.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Dw1G1owR.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-CdvvYoV2.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-wKjt9-9E.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-CQBAc7Zj.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
