const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-qz0IxvZr.js","assets/main-at0j2bC6.js","assets/main-CnF9mUWs.css","assets/EnrollmentModal-DILSKsEd.js","assets/enrollmentApi-CLX1q15b.js","assets/metaPixel-8i-74vtX.js","assets/index-DHlO3EWV.js","assets/proxy-CahS7ghE.js","assets/arrow-right-DrLiVL7t.js","assets/DataProgramEIE-BsPx4NwJ.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-V5-JONOh.js","assets/DataMentorsEIE-qH06934Z.js","assets/users-tQfHRQw2.js","assets/linkedin-JlMOz1sH.js","assets/DataPricingEIE-CVNRwRfj.js","assets/check-D4RU5zzk.js","assets/CAPEEIE-GC-QwHLz.js","assets/lightbulb-CQhb0xrs.js","assets/bar-chart-DOtIF8D9.js","assets/DataCertificateEIE-DtxaV1St.js","assets/WhoIsThisContentForEIE-NyA8T210.js","assets/DataAnalyticsFAQFB-DL3f0w66.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-at0j2bC6.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-C_7s9zmD.js";
import { S as StickyBookNav } from "./StickyBookNav-CW0X9dkR.js";
import "./EnrollmentModal-DILSKsEd.js";
import "./enrollmentApi-CLX1q15b.js";
import "./metaPixel-8i-74vtX.js";
import "./index-DHlO3EWV.js";
import "./proxy-CahS7ghE.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-qz0IxvZr.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-BsPx4NwJ.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-V5-JONOh.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-qH06934Z.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CVNRwRfj.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-GC-QwHLz.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DtxaV1St.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-NyA8T210.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-DL3f0w66.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
