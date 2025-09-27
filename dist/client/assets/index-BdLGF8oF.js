const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-B_5MNjcq.js","assets/main-Bz-Nf_l9.js","assets/main-BTruDH6p.css","assets/EnrollmentModal-LbwVMh_t.js","assets/enrollmentApi-rB8Ym3X4.js","assets/metaPixel-CzVyWGmV.js","assets/index-C-AvqvvG.js","assets/proxy-DEWmjdqp.js","assets/arrow-right-fPsRgeyK.js","assets/DataProgramEIE-DXlzVuSp.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-D567t8gJ.js","assets/DataMentorsEIE-CJhaNZrs.js","assets/users-CvaBfnJ9.js","assets/linkedin-BmcjCfxn.js","assets/DataPricingEIE-UwedBvKX.js","assets/check-Dkn0JgMT.js","assets/CAPEEIE-BAPvlHWn.js","assets/lightbulb-ht5DPbNH.js","assets/bar-chart-7tXvJ5XO.js","assets/DataCertificateEIE-Cn7vMtvl.js","assets/WhoIsThisContentForEIE-BI4dHpNE.js","assets/DataAnalyticsFAQFB-C-QnA1Ce.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bz-Nf_l9.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Dhk5xR3S.js";
import { S as StickyBookNav } from "./StickyBookNav-cAXzrQgW.js";
import "./EnrollmentModal-LbwVMh_t.js";
import "./enrollmentApi-rB8Ym3X4.js";
import "./metaPixel-CzVyWGmV.js";
import "./index-C-AvqvvG.js";
import "./proxy-DEWmjdqp.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-B_5MNjcq.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-DXlzVuSp.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-D567t8gJ.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CJhaNZrs.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-UwedBvKX.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-BAPvlHWn.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-Cn7vMtvl.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-BI4dHpNE.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-C-QnA1Ce.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
