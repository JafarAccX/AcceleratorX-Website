const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataHeroEIE-gv5MYGn7.js","assets/main-DUtAh55Z.js","assets/main-BWS2aYUX.css","assets/EnrollmentModal-BEG1oj57.js","assets/enrollmentApi-Da6Jehr4.js","assets/metaPixel-5Iv-ywSE.js","assets/index-Bf4wyDJA.js","assets/proxy-D90nfG6D.js","assets/arrow-right-CGUkbaPw.js","assets/DataProgramEIE-B9ypJgfT.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-CaFaHU0T.js","assets/DataMentorsEIE-CL814AA1.js","assets/users-BliTtv7q.js","assets/linkedin-ErPNqK88.js","assets/DataPricingEIE-CdCNVybb.js","assets/check-KmsD7hsX.js","assets/CAPEEIE-Bhik99-H.js","assets/lightbulb-CALKOEOL.js","assets/bar-chart-BlbnGhfz.js","assets/DataCertificateEIE-BJSOwNUI.js","assets/WhoIsThisContentForEIE-w2z5g9OL.js","assets/DataAnalyticsFAQFB-DoGn2u9d.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DUtAh55Z.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DLRocxax.js";
import { S as StickyBookNav } from "./StickyBookNav-DRopwADh.js";
import "./EnrollmentModal-BEG1oj57.js";
import "./enrollmentApi-Da6Jehr4.js";
import "./metaPixel-5Iv-ywSE.js";
import "./index-Bf4wyDJA.js";
import "./proxy-D90nfG6D.js";
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-gv5MYGn7.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-B9ypJgfT.js"), true ? __vite__mapDeps([9,1,2,10,7]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-CaFaHU0T.js"), true ? __vite__mapDeps([11,1,2,10,7]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CL814AA1.js"), true ? __vite__mapDeps([12,1,2,13,14]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CdCNVybb.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16]) : void 0));
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Bhik99-H.js"), true ? __vite__mapDeps([17,1,2,7,18,19]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-BJSOwNUI.js"), true ? __vite__mapDeps([20,1,2,7]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-w2z5g9OL.js"), true ? __vite__mapDeps([21,1,2,7,16]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-DoGn2u9d.js"), true ? __vite__mapDeps([22,1,2]) : void 0));
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
