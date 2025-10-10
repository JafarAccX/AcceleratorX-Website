const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-B6uIT5o0.js","assets/main-CtSa0pDV.js","assets/main-g1H-mEfk.css","assets/award-Bbk9HQiS.js","assets/check-circle-kFI2LISZ.js","assets/LearningJourneyEIE-DZTXC5xI.js","assets/BenefitsGridEIE-B0H_CZc5.js","assets/trophy-B0m2c_7-.js","assets/users-B4L4Or45.js","assets/target-BSiIelI5.js","assets/book-open-BFQVRpgM.js","assets/star-BOuEC7kJ.js","assets/brain-DCFif0jG.js","assets/trending-up-CIiOaZ7l.js","assets/MentorsEIE-CiAfdNHm.js","assets/constants-C0Rc_o-P.js","assets/linkedin-BsfZ2NF6.js","assets/SkillsAndToolsEIE-8poXXwNj.js","assets/PricingEIE-CVKeWLoq.js","assets/EnrollmentModal-BetrdJkE.js","assets/enrollmentApi-Bp8HLVVn.js","assets/metaPixel-B-L5LvPr.js","assets/check-BWgrIcrs.js","assets/FAQEIE-C9Jbd1hu.js","assets/minus-CLnq_ZIB.js","assets/plus-B86eMdP3.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CtSa0pDV.js";
import ProgramHeroEIE from "./ProgamHeroEIE-DuGLO1il.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-Bbj22ZfG.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DiOA9rRN.js";
import { S as StickyBookNav } from "./StickyBookNav-CNRRbfcc.js";
import "./EnrollmentModal-BetrdJkE.js";
import "./enrollmentApi-Bp8HLVVn.js";
import "./metaPixel-B-L5LvPr.js";
import "./arrow-right-BuG_kqA5.js";
import "./phone-D1MUm9QF.js";
import "./users-B4L4Or45.js";
import "./lightbulb-lJe-aJ8a.js";
import "./workflow-BGhTIXuK.js";
import "./rocket-CbO3Z3X1.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-B6uIT5o0.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DZTXC5xI.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-B0H_CZc5.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11,12,13]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CiAfdNHm.js"), true ? __vite__mapDeps([14,1,2,15,8,16]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-8poXXwNj.js"), true ? __vite__mapDeps([17,1,2,15]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CVKeWLoq.js"), true ? __vite__mapDeps([18,1,2,19,20,21,22]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-C9Jbd1hu.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
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
