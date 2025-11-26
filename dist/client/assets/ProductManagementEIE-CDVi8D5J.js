const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-CwzTnuVA.js","assets/main-DIFEnr0T.js","assets/main-Ce-Pe5sq.css","assets/trophy-Bhreleld.js","assets/users-CYWDJFl-.js","assets/book-open-oEF5i-XC.js","assets/target-BBz5KRfO.js","assets/star-C_5MquRx.js","assets/FAQEIE-qhffuZ6B.js","assets/minus-Xi6Hs1jr.js","assets/plus-Dc0VPYwb.js","assets/LearningJourneyEIE-rZ0dfguy.js","assets/MentorsEIE-Bx0R_D5N.js","assets/constants-DXOhk-SF.js","assets/linkedin-DDSnRLIQ.js","assets/PricingEIE-Bk041_mw.js","assets/EnrollmentModal-CGXZR3j2.js","assets/enrollmentApi-GN7J7nzz.js","assets/metaPixel-DADRfF0c.js","assets/check-D4vgtGun.js","assets/ProgamHeroEIE-WnAT4a4U.js","assets/arrow-right-zzHrm7eN.js","assets/phone-BV4jxDH6.js","assets/ProgramCertificateEIE-DCLwokVl.js","assets/award-BaL_fgVD.js","assets/check-circle-DXJLMBqY.js","assets/ProgramHighlightsEIE-Kzj377CU.js","assets/lightbulb-B9UWGBAt.js","assets/workflow-D3AY2J-0.js","assets/rocket-B_z2a7PX.js","assets/SkillsAndToolsEIE-UyGZtrMl.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DIFEnr0T.js";
import { H as HeaderEIE } from "./HeaderEIE-D8oWOEzg.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-5fRhV7A_.js";
import { S as StickyBookNav } from "./StickyBookNav-CwFgJ3iH.js";
import "./EnrollmentModal-CGXZR3j2.js";
import "./enrollmentApi-GN7J7nzz.js";
import "./metaPixel-DADRfF0c.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-CwzTnuVA.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-qhffuZ6B.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-rZ0dfguy.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-Bx0R_D5N.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-Bk041_mw.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-WnAT4a4U.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DCLwokVl.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-Kzj377CU.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-UyGZtrMl.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
