const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CAPEEIE-Cu6OQt_g.js","assets/main-Dr7DU7CZ.js","assets/main-B4XYXhR2.css","assets/proxy-82v-ftuM.js","assets/lightbulb-BoLR4x42.js","assets/bar-chart-Blp1NXJr.js","assets/DataCertificateEIE-D7XKByfc.js","assets/DataHeroEIE-Gk2xd6Yw.js","assets/EnrollmentModal-bFtrKCD9.js","assets/enrollmentApi-BWSSYuNv.js","assets/metaPixel-CBvWK0Fy.js","assets/index-DAddfncm.js","assets/arrow-right-CuhHaKR8.js","assets/DataJourneyEIE-YOBtruDU.js","assets/trophy-DfQtNI-R.js","assets/graduation-cap-rn99kJDq.js","assets/book-open-B0mEWv0S.js","assets/DataMentorsEIE-CEQ-Q1Fz.js","assets/users-Bh-qRdQ_.js","assets/linkedin-Bg2tcKd7.js","assets/DataPricingEIE-CuZmic3O.js","assets/check-_OR3Fb9g.js","assets/DataProgramEIE-C3PLwGoX.js","assets/constants-C0Rc_o-P.js","assets/DataSkillsToolsEIE-BgyPAkCW.js","assets/WhoIsThisContentForEIE-Bd-zhNJ5.js","assets/DataAnalyticsFAQFB-BuyRqQXR.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Dr7DU7CZ.js";
import { H as HeaderEIE } from "./HeaderEIE-DtyxMFqn.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-vTthkW8T.js";
import { S as StickyBookNav } from "./StickyBookNav-DHYgp9_A.js";
import "./EnrollmentModal-bFtrKCD9.js";
import "./enrollmentApi-BWSSYuNv.js";
import "./metaPixel-CBvWK0Fy.js";
import "./index-DAddfncm.js";
import "./proxy-82v-ftuM.js";
const CAPEEIE = reactExports.lazy(() => __vitePreload(() => import("./CAPEEIE-Cu6OQt_g.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const DataCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./DataCertificateEIE-D7XKByfc.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const DataHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./DataHeroEIE-Gk2xd6Yw.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,3,12]) : void 0));
const DataJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./DataJourneyEIE-YOBtruDU.js"), true ? __vite__mapDeps([13,1,2,3,11,14,15,16]) : void 0));
const DataMentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataMentorsEIE-CEQ-Q1Fz.js"), true ? __vite__mapDeps([17,1,2,18,19]) : void 0));
const DataPricingEIE = reactExports.lazy(() => __vitePreload(() => import("./DataPricingEIE-CuZmic3O.js"), true ? __vite__mapDeps([20,1,2,8,9,10,11,3,21]) : void 0));
const DataProgramEIE = reactExports.lazy(() => __vitePreload(() => import("./DataProgramEIE-C3PLwGoX.js"), true ? __vite__mapDeps([22,1,2,23,3]) : void 0));
const DataSkillsToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./DataSkillsToolsEIE-BgyPAkCW.js"), true ? __vite__mapDeps([24,1,2,23,3]) : void 0));
const WhoIsThisContentForEIE = reactExports.lazy(() => __vitePreload(() => import("./WhoIsThisContentForEIE-Bd-zhNJ5.js"), true ? __vite__mapDeps([25,1,2,3,21]) : void 0));
const DataAnalyticsFAQFB = reactExports.lazy(() => __vitePreload(() => import("./DataAnalyticsFAQFB-BuyRqQXR.js"), true ? __vite__mapDeps([26,1,2]) : void 0));
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
