const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-DVjZim-H.js","assets/main-DqI0tNcP.js","assets/main-nhAxMPX_.css","assets/award-B1UweOUa.js","assets/check-circle-DZYQi0E7.js","assets/LearningJourneyEIE-DXWiI1DJ.js","assets/BenefitsGridEIE-Cych4AO5.js","assets/trophy-B4G3tZad.js","assets/users-cGmeqCbL.js","assets/book-open-D2RXVj1Z.js","assets/target-BcFTh9mG.js","assets/star-CQxk8EHw.js","assets/MentorsEIE-iANPvzzN.js","assets/constants-CyrPx8P0.js","assets/linkedin-DSKl0UQu.js","assets/SkillsAndToolsEIE-CROctCfU.js","assets/PricingEIE-BdUoB4kQ.js","assets/EnrollmentModal-Bd_d5ph1.js","assets/enrollmentApi-UxUP1Br3.js","assets/metaPixel-CMZVS1e9.js","assets/check-9PYBZuGD.js","assets/FAQEIE-D_hWi8Xs.js","assets/minus-BquXRowF.js","assets/plus-2AjbMrha.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DqI0tNcP.js";
import ProgramHeroEIE from "./ProgamHeroEIE-SP0Ulb5W.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-BcLgzhnE.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Cf58CtfB.js";
import { S as StickyBookNav } from "./StickyBookNav-PAUB5mw8.js";
import "./EnrollmentModal-Bd_d5ph1.js";
import "./enrollmentApi-UxUP1Br3.js";
import "./metaPixel-CMZVS1e9.js";
import "./arrow-right-BEhBxCEt.js";
import "./phone-DO27y_u1.js";
import "./users-cGmeqCbL.js";
import "./lightbulb-qJFLMFLK.js";
import "./workflow-D-VlMRlu.js";
import "./rocket-Dcmmq-FZ.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DVjZim-H.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DXWiI1DJ.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-Cych4AO5.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-iANPvzzN.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-CROctCfU.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-BdUoB4kQ.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-D_hWi8Xs.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
