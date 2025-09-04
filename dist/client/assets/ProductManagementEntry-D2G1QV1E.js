const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CO6-3GQn.js","assets/main-D1W_Gn8a.js","assets/main-CtI5RTA1.css","assets/proxy-fmmV8hun.js","assets/award-DO7RTjSy.js","assets/check-circle-Jhavxdw4.js","assets/LearningJourneyEIE-mEcKigei.js","assets/BenefitsGridEIE-CyR2sc4t.js","assets/trophy-CgrNOhAZ.js","assets/users-CqKE-c12.js","assets/target-DgsxDFt_.js","assets/book-open-D9g21TaP.js","assets/star-BKuCB7yI.js","assets/brain-C5zfcyo7.js","assets/trending-up-DiRySWI1.js","assets/MentorsEIE-BjCfrPOC.js","assets/constants-C0Rc_o-P.js","assets/linkedin-3pWtL9kh.js","assets/SkillsAndToolsEIE-Bmv8Z8k7.js","assets/index-Ds976zVw.js","assets/PricingEIE-D2wjZi5d.js","assets/EnrollmentModal-sWAI2odA.js","assets/enrollmentApi-CC778mEB.js","assets/metaPixel-B5VtgsBv.js","assets/check-CC7liN5n.js","assets/FAQEIE-Bblfs9k3.js","assets/minus-CswkB3Fz.js","assets/plus-BErCEw_9.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-D1W_Gn8a.js";
import ProgramHeroEIE from "./ProgamHeroEIE-DMP-pgUD.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-94DEtjx9.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Cp3TdhOY.js";
import { S as StickyBookNav } from "./StickyBookNav-6TFJPmWO.js";
import "./EnrollmentModal-sWAI2odA.js";
import "./enrollmentApi-CC778mEB.js";
import "./metaPixel-B5VtgsBv.js";
import "./index-Ds976zVw.js";
import "./proxy-fmmV8hun.js";
import "./arrow-right-C1y_k2Nr.js";
import "./phone-xpctaKNn.js";
import "./users-CqKE-c12.js";
import "./lightbulb-BKidIEcH.js";
import "./workflow-BH7O8hwD.js";
import "./rocket-Bzy5IJOJ.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CO6-3GQn.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-mEcKigei.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-CyR2sc4t.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BjCfrPOC.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-Bmv8Z8k7.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-D2wjZi5d.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-Bblfs9k3.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
