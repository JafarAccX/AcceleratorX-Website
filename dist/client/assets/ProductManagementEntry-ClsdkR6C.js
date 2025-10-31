const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-XGiwGjaj.js","assets/main-DdVeCtn-.js","assets/main-ZJ57361l.css","assets/award-0E8hhNdw.js","assets/check-circle-B6w-ZewK.js","assets/LearningJourneyEIE-kSOXUiI2.js","assets/BenefitsGridEIE-fzkLv3-O.js","assets/trophy-Z1Bh8D2E.js","assets/users-Qhcirw0s.js","assets/book-open-DyCwi0Uy.js","assets/target-8Ro_wdq-.js","assets/star-BBANAuHC.js","assets/MentorsEIE-B69msBDy.js","assets/constants-BiTomjDI.js","assets/linkedin-B-AR5gDA.js","assets/SkillsAndToolsEIE-Ds6mLgFf.js","assets/PricingEIE-DKLhYr8R.js","assets/EnrollmentModal-CbPmUr_d.js","assets/enrollmentApi-btbXFU1v.js","assets/metaPixel-BjTM4TKG.js","assets/check-Cwe1nY6S.js","assets/FAQEIE-BTFVrjsp.js","assets/minus-BRDfxZC1.js","assets/plus-s2c-w7aG.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DdVeCtn-.js";
import ProgramHeroEIE from "./ProgamHeroEIE-BeZKUYoz.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-Bv_me84l.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-B-GsOwcx.js";
import { S as StickyBookNav } from "./StickyBookNav-Du_Chnnj.js";
import "./EnrollmentModal-CbPmUr_d.js";
import "./enrollmentApi-btbXFU1v.js";
import "./metaPixel-BjTM4TKG.js";
import "./arrow-right-COSGXnLp.js";
import "./phone-CTLE-__Y.js";
import "./users-Qhcirw0s.js";
import "./lightbulb-CS029nJd.js";
import "./workflow-gTrArEQz.js";
import "./rocket-h3XooJOg.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-XGiwGjaj.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-kSOXUiI2.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-fzkLv3-O.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-B69msBDy.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-Ds6mLgFf.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DKLhYr8R.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BTFVrjsp.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
