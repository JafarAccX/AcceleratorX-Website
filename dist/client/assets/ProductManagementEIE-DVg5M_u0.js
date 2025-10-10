const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-B0H_CZc5.js","assets/main-CtSa0pDV.js","assets/main-g1H-mEfk.css","assets/trophy-B0m2c_7-.js","assets/users-B4L4Or45.js","assets/target-BSiIelI5.js","assets/book-open-BFQVRpgM.js","assets/star-BOuEC7kJ.js","assets/brain-DCFif0jG.js","assets/trending-up-CIiOaZ7l.js","assets/FAQEIE-C9Jbd1hu.js","assets/minus-CLnq_ZIB.js","assets/plus-B86eMdP3.js","assets/LearningJourneyEIE-DZTXC5xI.js","assets/MentorsEIE-CiAfdNHm.js","assets/constants-C0Rc_o-P.js","assets/linkedin-BsfZ2NF6.js","assets/PricingEIE-CVKeWLoq.js","assets/EnrollmentModal-BetrdJkE.js","assets/enrollmentApi-Bp8HLVVn.js","assets/metaPixel-B-L5LvPr.js","assets/check-BWgrIcrs.js","assets/ProgamHeroEIE-DuGLO1il.js","assets/arrow-right-BuG_kqA5.js","assets/phone-D1MUm9QF.js","assets/ProgramCertificateEIE-B6uIT5o0.js","assets/award-Bbk9HQiS.js","assets/check-circle-kFI2LISZ.js","assets/ProgramHighlightsEIE-Bbj22ZfG.js","assets/lightbulb-lJe-aJ8a.js","assets/workflow-BGhTIXuK.js","assets/rocket-CbO3Z3X1.js","assets/SkillsAndToolsEIE-8poXXwNj.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CtSa0pDV.js";
import { H as HeaderEIE } from "./HeaderEIE-DMYTpH2-.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DiOA9rRN.js";
import { S as StickyBookNav } from "./StickyBookNav-CNRRbfcc.js";
import "./EnrollmentModal-BetrdJkE.js";
import "./enrollmentApi-Bp8HLVVn.js";
import "./metaPixel-B-L5LvPr.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-B0H_CZc5.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-C9Jbd1hu.js"), true ? __vite__mapDeps([10,1,2,11,12]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DZTXC5xI.js"), true ? __vite__mapDeps([13,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CiAfdNHm.js"), true ? __vite__mapDeps([14,1,2,15,4,16]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CVKeWLoq.js"), true ? __vite__mapDeps([17,1,2,18,19,20,21]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-DuGLO1il.js"), true ? __vite__mapDeps([22,1,2,18,19,20,23,24,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-B6uIT5o0.js"), true ? __vite__mapDeps([25,1,2,26,27]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-Bbj22ZfG.js"), true ? __vite__mapDeps([28,1,2,29,30,31]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-8poXXwNj.js"), true ? __vite__mapDeps([32,1,2,15]) : void 0));
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
