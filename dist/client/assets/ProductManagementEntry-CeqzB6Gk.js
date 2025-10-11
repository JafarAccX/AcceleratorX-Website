const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-DkbsdoVl.js","assets/main-BsE_pOwq.js","assets/main-g1H-mEfk.css","assets/award-DicpBmam.js","assets/check-circle-CkBv16i4.js","assets/LearningJourneyEIE-CHNm2J2D.js","assets/BenefitsGridEIE-VZ5qyvGV.js","assets/trophy-CqGaAaTa.js","assets/users-HCzXCbXD.js","assets/target-BDwj-OsM.js","assets/book-open-qnCYIwN5.js","assets/star-DoTidNcB.js","assets/brain-Bt4nA7al.js","assets/trending-up-BdIFjo6z.js","assets/MentorsEIE--xL28pdQ.js","assets/constants-C0Rc_o-P.js","assets/linkedin-CU_vZlOn.js","assets/SkillsAndToolsEIE-BAGdIUGm.js","assets/PricingEIE-DUwWT9zt.js","assets/EnrollmentModal-CSsNaZvG.js","assets/enrollmentApi-Cj02VbS1.js","assets/metaPixel-DTLSMIdz.js","assets/check-Hq_5gIgG.js","assets/FAQEIE-BV4xD5Fc.js","assets/minus-DQZBC2Yi.js","assets/plus-B5921aTd.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BsE_pOwq.js";
import ProgramHeroEIE from "./ProgamHeroEIE-DmjmfqPM.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-mEgYJCQv.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BuY7aavk.js";
import { S as StickyBookNav } from "./StickyBookNav-DU1YRL6l.js";
import "./EnrollmentModal-CSsNaZvG.js";
import "./enrollmentApi-Cj02VbS1.js";
import "./metaPixel-DTLSMIdz.js";
import "./arrow-right-klvmXGPd.js";
import "./phone-lflkWgPz.js";
import "./users-HCzXCbXD.js";
import "./lightbulb-Cldye--c.js";
import "./workflow-BSxYLF5R.js";
import "./rocket-Ct8EqRGm.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DkbsdoVl.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-CHNm2J2D.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-VZ5qyvGV.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11,12,13]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE--xL28pdQ.js"), true ? __vite__mapDeps([14,1,2,15,8,16]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BAGdIUGm.js"), true ? __vite__mapDeps([17,1,2,15]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DUwWT9zt.js"), true ? __vite__mapDeps([18,1,2,19,20,21,22]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BV4xD5Fc.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
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
