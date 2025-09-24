const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-wMcienvG.js","assets/main-DeWmku3x.js","assets/main-7GdIFNw8.css","assets/proxy-CanaJn_u.js","assets/lightbulb-B0r4inE6.js","assets/bar-chart-B7iF_8gc.js","assets/DataCertificateEIE-XRZ57IjE.js","assets/DataHeroEIE-cZRnloZf.js","assets/EnrollmentModal-DI_VkV-P.js","assets/enrollmentApi-BTVnShAt.js","assets/metaPixel-CXWd2A3b.js","assets/index-B9lm7uYh.js","assets/arrow-right-FvSk5-_7.js","assets/DataJourneyEIE-_I_bOhmN.js","assets/trophy-CBLq2T9Y.js","assets/graduation-cap-BUohGQhK.js","assets/book-open-B3TmBhYn.js","assets/DataMentorsEIE-DGhM377f.js","assets/users-DG8_Ljzo.js","assets/linkedin-CbAimOvB.js","assets/DataPricingEIE-yBTPyDog.js","assets/check-BM8XLYs2.js","assets/DataProgramEIE-Jv4Pv3x7.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-DM-Emwbu.js","assets/WhoIsThisContentForEIE-DFeKchFb.js","assets/DataAnalyticsFAQFB-ip_d4301.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DeWmku3x.js";
import { H as HeaderEIE } from "./HeaderEIE-BzbxtdAw.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CHrisXE_.js";
import { S as StickyBookNav } from "./StickyBookNav-BoKEN4HT.js";
import "./EnrollmentModal-DI_VkV-P.js";
import "./enrollmentApi-BTVnShAt.js";
import "./metaPixel-CXWd2A3b.js";
import "./index-B9lm7uYh.js";
import "./proxy-CanaJn_u.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-wMcienvG.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-XRZ57IjE.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-cZRnloZf.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-_I_bOhmN.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-DGhM377f.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-yBTPyDog.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-Jv4Pv3x7.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-DM-Emwbu.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-DFeKchFb.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-ip_d4301.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
const DataAnalyticsEntry = () => {
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
  DataAnalyticsEntry as default
};
