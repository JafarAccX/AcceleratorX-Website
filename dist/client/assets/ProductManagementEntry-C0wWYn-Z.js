const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CKTtzjx3.js","assets/main-CyKI5oeo.js","assets/main-B4XYXhR2.css","assets/proxy-BOkuqYBJ.js","assets/award-D8l-7BqZ.js","assets/check-circle-Da0BVpbx.js","assets/LearningJourneyEIE-WStwRbNY.js","assets/BenefitsGridEIE-4gYMuR-n.js","assets/trophy-CIPfa0Jp.js","assets/users-CGx24rbU.js","assets/target-YuLBPE2u.js","assets/book-open-BAi5IChx.js","assets/star-DPFh_XzQ.js","assets/brain-3gwc6v5K.js","assets/trending-up-DItEEHz6.js","assets/MentorsEIE-DWKAdjlT.js","assets/constants-C0Rc_o-P.js","assets/linkedin-FjGrX4qg.js","assets/SkillsAndToolsEIE-4Ab8T99W.js","assets/index-BNL4sw4U.js","assets/PricingEIE-n1TF0pPO.js","assets/EnrollmentModal-De06Jtf6.js","assets/enrollmentApi-Cu1oEIrV.js","assets/metaPixel-BH32gJwg.js","assets/check-Bd08_L0C.js","assets/FAQEIE-DwJMUlTC.js","assets/minus-BSUCwAU6.js","assets/plus-BTe3KyxA.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CyKI5oeo.js";
import ProgramHeroEIE from "./ProgamHeroEIE-D6Ma8Tgl.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-CiOYWgXY.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DEAbprPG.js";
import { S as StickyBookNav } from "./StickyBookNav-CwjuiDp7.js";
import "./EnrollmentModal-De06Jtf6.js";
import "./enrollmentApi-Cu1oEIrV.js";
import "./metaPixel-BH32gJwg.js";
import "./index-BNL4sw4U.js";
import "./proxy-BOkuqYBJ.js";
import "./arrow-right-CxH0EQ0a.js";
import "./phone-DADQFrQG.js";
import "./users-CGx24rbU.js";
import "./lightbulb-a9mzD8P_.js";
import "./workflow-DPGqI_Yg.js";
import "./rocket-CSHSDR4r.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CKTtzjx3.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-WStwRbNY.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-4gYMuR-n.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-DWKAdjlT.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-4Ab8T99W.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-n1TF0pPO.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-DwJMUlTC.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
