const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-BgDUEDfn.js","assets/main-BP2-o3HA.js","assets/main-g1H-mEfk.css","assets/trophy-DX5iEwqv.js","assets/users-C-2WY11G.js","assets/target-CA195ruO.js","assets/book-open-DBxymLqF.js","assets/star-B16picL6.js","assets/brain-B7-puipY.js","assets/trending-up-DVdbW7DV.js","assets/FAQEIE-BbMAzG9K.js","assets/minus-BT-Hy5Un.js","assets/plus-D8AhObFN.js","assets/LearningJourneyEIE-sEjhErF1.js","assets/MentorsEIE-BFjTpxr3.js","assets/constants-C0Rc_o-P.js","assets/linkedin-B0ExC2c-.js","assets/PricingEIE-CWu0fonn.js","assets/EnrollmentModal-kxpu3ypA.js","assets/enrollmentApi-CC5EL50X.js","assets/metaPixel-T6CcSP6C.js","assets/check-BY3_hinp.js","assets/ProgamHeroEIE-DjDQrZzi.js","assets/arrow-right-H3l7OrWI.js","assets/phone-D2izzwcK.js","assets/ProgramCertificateEIE-LaAqkItg.js","assets/award-B_uhZM-Y.js","assets/check-circle-DMeXVXRR.js","assets/ProgramHighlightsEIE-C9ODuS8v.js","assets/lightbulb-DVyckyzX.js","assets/workflow-cejKHhMM.js","assets/rocket-CFjwMN3P.js","assets/SkillsAndToolsEIE-VZ55mOgP.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BP2-o3HA.js";
import { H as HeaderEIE } from "./HeaderEIE-B3KpqFfb.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-D42bZocK.js";
import { S as StickyBookNav } from "./StickyBookNav-B2z05M8w.js";
import "./EnrollmentModal-kxpu3ypA.js";
import "./enrollmentApi-CC5EL50X.js";
import "./metaPixel-T6CcSP6C.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-BgDUEDfn.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BbMAzG9K.js"), true ? __vite__mapDeps([10,1,2,11,12]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-sEjhErF1.js"), true ? __vite__mapDeps([13,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BFjTpxr3.js"), true ? __vite__mapDeps([14,1,2,15,4,16]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CWu0fonn.js"), true ? __vite__mapDeps([17,1,2,18,19,20,21]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-DjDQrZzi.js"), true ? __vite__mapDeps([22,1,2,18,19,20,23,24,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-LaAqkItg.js"), true ? __vite__mapDeps([25,1,2,26,27]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-C9ODuS8v.js"), true ? __vite__mapDeps([28,1,2,29,30,31]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-VZ55mOgP.js"), true ? __vite__mapDeps([32,1,2,15]) : void 0));
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
