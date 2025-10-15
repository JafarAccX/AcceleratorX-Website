const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-BrAitU0v.js","assets/main-DG5q6AAQ.js","assets/main-g1H-mEfk.css","assets/trophy-CN-Cb6js.js","assets/users-Bjgiecmn.js","assets/target-53ArRZhk.js","assets/book-open-C9bu6mLy.js","assets/star-BWN-JoG-.js","assets/brain-4HDxiWW4.js","assets/trending-up-CMFq43Jp.js","assets/FAQEIE-BOODiVQN.js","assets/minus-DgZWatlC.js","assets/plus-r6KufA5u.js","assets/LearningJourneyEIE-BdzM6m4Y.js","assets/MentorsEIE-bWSV2hCE.js","assets/constants-C0Rc_o-P.js","assets/linkedin-DU0WeXiI.js","assets/PricingEIE-CdwvqkMa.js","assets/EnrollmentModal-Bh3ndXDz.js","assets/enrollmentApi-BjAHi5X4.js","assets/metaPixel-DBVMiTFz.js","assets/check-DPEgDZut.js","assets/ProgamHeroEIE-CvXrL9_s.js","assets/arrow-right-DEAVGxQM.js","assets/phone-ChiBb6TL.js","assets/ProgramCertificateEIE-tREzW_ir.js","assets/award-C0YxADaq.js","assets/check-circle-ChhJcj59.js","assets/ProgramHighlightsEIE-LBcU5EVf.js","assets/lightbulb-OeS-PsFB.js","assets/workflow-_Px7mzrf.js","assets/rocket-UNP-l0b9.js","assets/SkillsAndToolsEIE-BYKPmoeL.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DG5q6AAQ.js";
import { H as HeaderEIE } from "./HeaderEIE-CGlqiFM6.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-C2bAILV2.js";
import { S as StickyBookNav } from "./StickyBookNav-D2MxYoYt.js";
import "./EnrollmentModal-Bh3ndXDz.js";
import "./enrollmentApi-BjAHi5X4.js";
import "./metaPixel-DBVMiTFz.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-BrAitU0v.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BOODiVQN.js"), true ? __vite__mapDeps([10,1,2,11,12]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-BdzM6m4Y.js"), true ? __vite__mapDeps([13,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-bWSV2hCE.js"), true ? __vite__mapDeps([14,1,2,15,4,16]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CdwvqkMa.js"), true ? __vite__mapDeps([17,1,2,18,19,20,21]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-CvXrL9_s.js"), true ? __vite__mapDeps([22,1,2,18,19,20,23,24,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-tREzW_ir.js"), true ? __vite__mapDeps([25,1,2,26,27]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-LBcU5EVf.js"), true ? __vite__mapDeps([28,1,2,29,30,31]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BYKPmoeL.js"), true ? __vite__mapDeps([32,1,2,15]) : void 0));
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
