const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-VZ5qyvGV.js","assets/main-BsE_pOwq.js","assets/main-g1H-mEfk.css","assets/trophy-CqGaAaTa.js","assets/users-HCzXCbXD.js","assets/target-BDwj-OsM.js","assets/book-open-qnCYIwN5.js","assets/star-DoTidNcB.js","assets/brain-Bt4nA7al.js","assets/trending-up-BdIFjo6z.js","assets/FAQEIE-BV4xD5Fc.js","assets/minus-DQZBC2Yi.js","assets/plus-B5921aTd.js","assets/LearningJourneyEIE-CHNm2J2D.js","assets/MentorsEIE--xL28pdQ.js","assets/constants-C0Rc_o-P.js","assets/linkedin-CU_vZlOn.js","assets/PricingEIE-DUwWT9zt.js","assets/EnrollmentModal-CSsNaZvG.js","assets/enrollmentApi-Cj02VbS1.js","assets/metaPixel-DTLSMIdz.js","assets/check-Hq_5gIgG.js","assets/ProgamHeroEIE-DmjmfqPM.js","assets/arrow-right-klvmXGPd.js","assets/phone-lflkWgPz.js","assets/ProgramCertificateEIE-DkbsdoVl.js","assets/award-DicpBmam.js","assets/check-circle-CkBv16i4.js","assets/ProgramHighlightsEIE-mEgYJCQv.js","assets/lightbulb-Cldye--c.js","assets/workflow-BSxYLF5R.js","assets/rocket-Ct8EqRGm.js","assets/SkillsAndToolsEIE-BAGdIUGm.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BsE_pOwq.js";
import { H as HeaderEIE } from "./HeaderEIE-By2ak8vy.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BuY7aavk.js";
import { S as StickyBookNav } from "./StickyBookNav-DU1YRL6l.js";
import "./EnrollmentModal-CSsNaZvG.js";
import "./enrollmentApi-Cj02VbS1.js";
import "./metaPixel-DTLSMIdz.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-VZ5qyvGV.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BV4xD5Fc.js"), true ? __vite__mapDeps([10,1,2,11,12]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-CHNm2J2D.js"), true ? __vite__mapDeps([13,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE--xL28pdQ.js"), true ? __vite__mapDeps([14,1,2,15,4,16]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DUwWT9zt.js"), true ? __vite__mapDeps([17,1,2,18,19,20,21]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-DmjmfqPM.js"), true ? __vite__mapDeps([22,1,2,18,19,20,23,24,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DkbsdoVl.js"), true ? __vite__mapDeps([25,1,2,26,27]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-mEgYJCQv.js"), true ? __vite__mapDeps([28,1,2,29,30,31]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BAGdIUGm.js"), true ? __vite__mapDeps([32,1,2,15]) : void 0));
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
