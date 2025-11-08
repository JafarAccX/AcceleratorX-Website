const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-hUQhYkgj.js","assets/main-CLFAzKr7.js","assets/main-BLt5Qm9-.css","assets/award-BAt-vdZh.js","assets/check-circle-g_khpASn.js","assets/LearningJourneyEIE-Bl4Ec76Q.js","assets/BenefitsGridEIE-C1HVZFX2.js","assets/trophy-BUBW8QDP.js","assets/users-DpJEgBNu.js","assets/book-open-CFe1hlXQ.js","assets/target-BrBJsAlY.js","assets/star-DiZ9rQfU.js","assets/MentorsEIE-BmtqyD9P.js","assets/constants-CyrPx8P0.js","assets/linkedin-Dhs2w2dS.js","assets/SkillsAndToolsEIE-BBu1Lcj0.js","assets/PricingEIE-B728NnRF.js","assets/EnrollmentModal-f2lJDb1T.js","assets/enrollmentApi-8fBMY41-.js","assets/metaPixel-DZ1DsPbx.js","assets/check-CqoFJ_ei.js","assets/FAQEIE-CJN40cqY.js","assets/minus-C0w2hT_H.js","assets/plus-BqpiyGvY.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CLFAzKr7.js";
import ProgramHeroEIE from "./ProgamHeroEIE-CF9b8fep.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-CojfsmSP.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BpeE-LXP.js";
import { S as StickyBookNav } from "./StickyBookNav-DtVGMbg6.js";
import "./EnrollmentModal-f2lJDb1T.js";
import "./enrollmentApi-8fBMY41-.js";
import "./metaPixel-DZ1DsPbx.js";
import "./arrow-right-B8AwW2Sb.js";
import "./phone-CDA2t15F.js";
import "./users-DpJEgBNu.js";
import "./lightbulb-Bdl0guML.js";
import "./workflow-BnlEw3i_.js";
import "./rocket-rH0yhjZD.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-hUQhYkgj.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Bl4Ec76Q.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-C1HVZFX2.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BmtqyD9P.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BBu1Lcj0.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-B728NnRF.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-CJN40cqY.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
