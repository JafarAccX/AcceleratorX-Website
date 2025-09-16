const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-DNSUjnsq.js","assets/main-MWsp8Q-I.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-BWhyTLEl.js","assets/enrollmentApi-cVEso6qE.js","assets/metaPixel-C30SEqt8.js","assets/index-BlWDocJ3.js","assets/proxy-Dp4G5h__.js","assets/arrow-right-lcQZiN15.js","assets/DataProgramEIE-DiAFEtil.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-B1OJu5e_.js","assets/DataMentorsEIE-BkShtePY.js","assets/users-Wfq3dHs5.js","assets/linkedin-CgRfraA7.js","assets/DataPricingEIE-CouS53w7.js","assets/check-DwmW9JL7.js","assets/CAPEEIE-BziRM27H.js","assets/lightbulb-DLkoWIv_.js","assets/bar-chart-BatPy-in.js","assets/DataCertificateEIE-ANsZJssx.js","assets/WhoIsThisContentForEIE-DiCWeGbw.js","assets/DataAnalyticsFAQFB-DYumF6UB.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-MWsp8Q-I.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-B8rdHIs9.js";
import { S as StickyBookNav } from "./StickyBookNav-45FV86Bt.js";
import "./EnrollmentModal-BWhyTLEl.js";
import "./enrollmentApi-cVEso6qE.js";
import "./metaPixel-C30SEqt8.js";
import "./index-BlWDocJ3.js";
import "./proxy-Dp4G5h__.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-DNSUjnsq.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DiAFEtil.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-B1OJu5e_.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-BkShtePY.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CouS53w7.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-BziRM27H.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-ANsZJssx.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DiCWeGbw.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-DYumF6UB.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
