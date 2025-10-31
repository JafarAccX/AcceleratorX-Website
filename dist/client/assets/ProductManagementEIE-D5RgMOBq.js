const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-fzkLv3-O.js","assets/main-DdVeCtn-.js","assets/main-ZJ57361l.css","assets/trophy-Z1Bh8D2E.js","assets/users-Qhcirw0s.js","assets/book-open-DyCwi0Uy.js","assets/target-8Ro_wdq-.js","assets/star-BBANAuHC.js","assets/FAQEIE-BTFVrjsp.js","assets/minus-BRDfxZC1.js","assets/plus-s2c-w7aG.js","assets/LearningJourneyEIE-kSOXUiI2.js","assets/MentorsEIE-B69msBDy.js","assets/constants-BiTomjDI.js","assets/linkedin-B-AR5gDA.js","assets/PricingEIE-DKLhYr8R.js","assets/EnrollmentModal-CbPmUr_d.js","assets/enrollmentApi-btbXFU1v.js","assets/metaPixel-BjTM4TKG.js","assets/check-Cwe1nY6S.js","assets/ProgamHeroEIE-BeZKUYoz.js","assets/arrow-right-COSGXnLp.js","assets/phone-CTLE-__Y.js","assets/ProgramCertificateEIE-XGiwGjaj.js","assets/award-0E8hhNdw.js","assets/check-circle-B6w-ZewK.js","assets/ProgramHighlightsEIE-Bv_me84l.js","assets/lightbulb-CS029nJd.js","assets/workflow-gTrArEQz.js","assets/rocket-h3XooJOg.js","assets/SkillsAndToolsEIE-Ds6mLgFf.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DdVeCtn-.js";
import { H as HeaderEIE } from "./HeaderEIE-DkeOQrgA.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-B-GsOwcx.js";
import { S as StickyBookNav } from "./StickyBookNav-Du_Chnnj.js";
import "./EnrollmentModal-CbPmUr_d.js";
import "./enrollmentApi-btbXFU1v.js";
import "./metaPixel-BjTM4TKG.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-fzkLv3-O.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BTFVrjsp.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-kSOXUiI2.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-B69msBDy.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DKLhYr8R.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-BeZKUYoz.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-XGiwGjaj.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-Bv_me84l.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-Ds6mLgFf.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
