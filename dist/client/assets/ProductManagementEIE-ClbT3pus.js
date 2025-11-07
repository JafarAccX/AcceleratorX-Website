const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-Cych4AO5.js","assets/main-DqI0tNcP.js","assets/main-nhAxMPX_.css","assets/trophy-B4G3tZad.js","assets/users-cGmeqCbL.js","assets/book-open-D2RXVj1Z.js","assets/target-BcFTh9mG.js","assets/star-CQxk8EHw.js","assets/FAQEIE-D_hWi8Xs.js","assets/minus-BquXRowF.js","assets/plus-2AjbMrha.js","assets/LearningJourneyEIE-DXWiI1DJ.js","assets/MentorsEIE-iANPvzzN.js","assets/constants-CyrPx8P0.js","assets/linkedin-DSKl0UQu.js","assets/PricingEIE-BdUoB4kQ.js","assets/EnrollmentModal-Bd_d5ph1.js","assets/enrollmentApi-UxUP1Br3.js","assets/metaPixel-CMZVS1e9.js","assets/check-9PYBZuGD.js","assets/ProgamHeroEIE-SP0Ulb5W.js","assets/arrow-right-BEhBxCEt.js","assets/phone-DO27y_u1.js","assets/ProgramCertificateEIE-DVjZim-H.js","assets/award-B1UweOUa.js","assets/check-circle-DZYQi0E7.js","assets/ProgramHighlightsEIE-BcLgzhnE.js","assets/lightbulb-qJFLMFLK.js","assets/workflow-D-VlMRlu.js","assets/rocket-Dcmmq-FZ.js","assets/SkillsAndToolsEIE-CROctCfU.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DqI0tNcP.js";
import { H as HeaderEIE } from "./HeaderEIE-8RiEWQa9.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Cf58CtfB.js";
import { S as StickyBookNav } from "./StickyBookNav-PAUB5mw8.js";
import "./EnrollmentModal-Bd_d5ph1.js";
import "./enrollmentApi-UxUP1Br3.js";
import "./metaPixel-CMZVS1e9.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-Cych4AO5.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-D_hWi8Xs.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DXWiI1DJ.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-iANPvzzN.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-BdUoB4kQ.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-SP0Ulb5W.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DVjZim-H.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-BcLgzhnE.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-CROctCfU.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
