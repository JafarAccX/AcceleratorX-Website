const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-BILoZ80m.js","assets/main-Bmt1QOda.js","assets/main-BLt5Qm9-.css","assets/trophy-BT_K2lsy.js","assets/users-CzPqlutS.js","assets/book-open-BqEgyqCV.js","assets/target-gz-LBzuC.js","assets/star-Ev7gvjua.js","assets/FAQEIE-CAgn48qQ.js","assets/minus-uQtv_2Yo.js","assets/plus-Bfq6A34A.js","assets/LearningJourneyEIE-D0FddApR.js","assets/MentorsEIE-CgxuX4_Q.js","assets/constants-CyrPx8P0.js","assets/linkedin-U29GlrqY.js","assets/PricingEIE-6IolPIwJ.js","assets/EnrollmentModal-CqEnZ3W7.js","assets/enrollmentApi-Cv-2bLJj.js","assets/metaPixel-D9pPvDgM.js","assets/check-DO2UEizh.js","assets/ProgamHeroEIE--mZm0rG3.js","assets/arrow-right-D85t5K-A.js","assets/phone-DJ6hQMol.js","assets/ProgramCertificateEIE-DKSgbJn-.js","assets/award-31nJWWMB.js","assets/check-circle-45_3gFT1.js","assets/ProgramHighlightsEIE-Bctnir_W.js","assets/lightbulb-QGYxdoyG.js","assets/workflow-CS1Gtibo.js","assets/rocket-DhDBiDNt.js","assets/SkillsAndToolsEIE-BqIe7G1I.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bmt1QOda.js";
import { H as HeaderEIE } from "./HeaderEIE-DpIj5zyH.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Bdjbza_L.js";
import { S as StickyBookNav } from "./StickyBookNav-D0FQwCfC.js";
import "./EnrollmentModal-CqEnZ3W7.js";
import "./enrollmentApi-Cv-2bLJj.js";
import "./metaPixel-D9pPvDgM.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-BILoZ80m.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-CAgn48qQ.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-D0FddApR.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CgxuX4_Q.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-6IolPIwJ.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE--mZm0rG3.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DKSgbJn-.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-Bctnir_W.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BqIe7G1I.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
const ProductManagementEIE = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramHeroEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroWithAbouv, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramHighlightsEIE, {}),
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
  ProductManagementEIE as default
};
