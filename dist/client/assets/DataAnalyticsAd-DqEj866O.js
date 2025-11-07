const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-Bh24rrX6.js","assets/main-DqI0tNcP.js","assets/main-nhAxMPX_.css","assets/lightbulb-qJFLMFLK.js","assets/bar-chart-BbQTKQBz.js","assets/DataCertificateEIE-DphhhV9D.js","assets/DataHeroEIE-DTMUxjj_.js","assets/EnrollmentModal-Bd_d5ph1.js","assets/enrollmentApi-UxUP1Br3.js","assets/metaPixel-CMZVS1e9.js","assets/arrow-right-BEhBxCEt.js","assets/DataJourneyEIE-VrWuIHhv.js","assets/trophy-B4G3tZad.js","assets/graduation-cap-Ct6WFSuD.js","assets/book-open-D2RXVj1Z.js","assets/DataMentorsEIE-Czvze-0_.js","assets/users-cGmeqCbL.js","assets/linkedin-DSKl0UQu.js","assets/DataPricingEIE-vQ9Cc7Z-.js","assets/check-9PYBZuGD.js","assets/DataProgramEIE-D9q-_Qos.js","assets/constants-CyrPx8P0.js","assets/DataSkillsToolsEIE-Dr81SUkl.js","assets/WhoIsThisContentForEIE-ByESp4G9.js","assets/DataAnalyticsFAQFB-CAYvbbEs.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DqI0tNcP.js";
import { H as HeaderEIE } from "./HeaderEIE-8RiEWQa9.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Cf58CtfB.js";
import { S as StickyBookNav } from "./StickyBookNav-PAUB5mw8.js";
import "./EnrollmentModal-Bd_d5ph1.js";
import "./enrollmentApi-UxUP1Br3.js";
import "./metaPixel-CMZVS1e9.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Bh24rrX6.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-DphhhV9D.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-DTMUxjj_.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-VrWuIHhv.js"), true ? __vite__mapDeps([11,1,2,12,13,14]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-Czvze-0_.js"), true ? __vite__mapDeps([15,1,2,16,17]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-vQ9Cc7Z-.js"), true ? __vite__mapDeps([18,1,2,7,8,9,19]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-D9q-_Qos.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-Dr81SUkl.js"), true ? __vite__mapDeps([22,1,2,21]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-ByESp4G9.js"), true ? __vite__mapDeps([23,1,2,19]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-CAYvbbEs.js"), true ? __vite__mapDeps([24,1,2]) : void 0));
const DataAnalyticsAd = () => {
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
  DataAnalyticsAd as default
};
