const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-DKSgbJn-.js","assets/main-Bmt1QOda.js","assets/main-BLt5Qm9-.css","assets/award-31nJWWMB.js","assets/check-circle-45_3gFT1.js","assets/LearningJourneyEIE-D0FddApR.js","assets/BenefitsGridEIE-BILoZ80m.js","assets/trophy-BT_K2lsy.js","assets/users-CzPqlutS.js","assets/book-open-BqEgyqCV.js","assets/target-gz-LBzuC.js","assets/star-Ev7gvjua.js","assets/MentorsEIE-CgxuX4_Q.js","assets/constants-CyrPx8P0.js","assets/linkedin-U29GlrqY.js","assets/SkillsAndToolsEIE-BqIe7G1I.js","assets/PricingEIE-6IolPIwJ.js","assets/EnrollmentModal-CqEnZ3W7.js","assets/enrollmentApi-Cv-2bLJj.js","assets/metaPixel-D9pPvDgM.js","assets/check-DO2UEizh.js","assets/FAQEIE-CAgn48qQ.js","assets/minus-uQtv_2Yo.js","assets/plus-Bfq6A34A.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bmt1QOda.js";
import ProgramHeroEIE from "./ProgamHeroEIE--mZm0rG3.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-Bctnir_W.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Bdjbza_L.js";
import { S as StickyBookNav } from "./StickyBookNav-D0FQwCfC.js";
import "./EnrollmentModal-CqEnZ3W7.js";
import "./enrollmentApi-Cv-2bLJj.js";
import "./metaPixel-D9pPvDgM.js";
import "./arrow-right-D85t5K-A.js";
import "./phone-DJ6hQMol.js";
import "./users-CzPqlutS.js";
import "./lightbulb-QGYxdoyG.js";
import "./workflow-CS1Gtibo.js";
import "./rocket-DhDBiDNt.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DKSgbJn-.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-D0FddApR.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-BILoZ80m.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CgxuX4_Q.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BqIe7G1I.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-6IolPIwJ.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-CAgn48qQ.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
const ProductManagementEntry = () => {
  const { setSelectedCourse } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramHeroEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramHighlightsEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroWithAbouv, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LearningJourneyEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BenefitsGridEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramCertificateEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MentorsEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsAndToolsEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PricingEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StickyBookNav, {})
    ] })
  ] });
};
export {
  ProductManagementEntry as default
};
