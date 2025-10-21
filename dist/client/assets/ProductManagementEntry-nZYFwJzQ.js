const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-LaAqkItg.js","assets/main-BP2-o3HA.js","assets/main-g1H-mEfk.css","assets/award-B_uhZM-Y.js","assets/check-circle-DMeXVXRR.js","assets/LearningJourneyEIE-sEjhErF1.js","assets/BenefitsGridEIE-BgDUEDfn.js","assets/trophy-DX5iEwqv.js","assets/users-C-2WY11G.js","assets/target-CA195ruO.js","assets/book-open-DBxymLqF.js","assets/star-B16picL6.js","assets/brain-B7-puipY.js","assets/trending-up-DVdbW7DV.js","assets/MentorsEIE-BFjTpxr3.js","assets/constants-C0Rc_o-P.js","assets/linkedin-B0ExC2c-.js","assets/SkillsAndToolsEIE-VZ55mOgP.js","assets/PricingEIE-CWu0fonn.js","assets/EnrollmentModal-kxpu3ypA.js","assets/enrollmentApi-CC5EL50X.js","assets/metaPixel-T6CcSP6C.js","assets/check-BY3_hinp.js","assets/FAQEIE-BbMAzG9K.js","assets/minus-BT-Hy5Un.js","assets/plus-D8AhObFN.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BP2-o3HA.js";
import ProgramHeroEIE from "./ProgamHeroEIE-DjDQrZzi.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-C9ODuS8v.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-D42bZocK.js";
import { S as StickyBookNav } from "./StickyBookNav-B2z05M8w.js";
import "./EnrollmentModal-kxpu3ypA.js";
import "./enrollmentApi-CC5EL50X.js";
import "./metaPixel-T6CcSP6C.js";
import "./arrow-right-H3l7OrWI.js";
import "./phone-D2izzwcK.js";
import "./users-C-2WY11G.js";
import "./lightbulb-DVyckyzX.js";
import "./workflow-cejKHhMM.js";
import "./rocket-CFjwMN3P.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-LaAqkItg.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-sEjhErF1.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-BgDUEDfn.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11,12,13]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BFjTpxr3.js"), true ? __vite__mapDeps([14,1,2,15,8,16]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-VZ55mOgP.js"), true ? __vite__mapDeps([17,1,2,15]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CWu0fonn.js"), true ? __vite__mapDeps([18,1,2,19,20,21,22]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BbMAzG9K.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
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
