const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-BWUKrbGJ.js","assets/main-CfA5h11a.js","assets/main-ByJX9cvk.css","assets/proxy-CHEv0qax.js","assets/award-Bm2IFSyO.js","assets/check-circle-4ERYQ8vg.js","assets/LearningJourneyEIE-CJWEvaqz.js","assets/BenefitsGridEIE-BIz4MdWs.js","assets/trophy-DnS9JXRk.js","assets/users-DAUYd__u.js","assets/target-sC38nrod.js","assets/book-open-VrKJ0uSR.js","assets/star-DpHwCxIi.js","assets/brain-hPM4KVSR.js","assets/trending-up-BVMRdy-u.js","assets/MentorsEIE-DoXtmb_Q.js","assets/constants-C0Rc_o-P.js","assets/linkedin-RRfkeBVk.js","assets/SkillsAndToolsEIE-CVTPfFOY.js","assets/index-Dk7MajVP.js","assets/PricingEIE-DBXVOqZB.js","assets/EnrollmentModal-Cws58IB3.js","assets/enrollmentApi-DH74qvpY.js","assets/metaPixel-DjMPEQ2F.js","assets/check-DT9GdvSS.js","assets/FAQEIE-C9sCuTlL.js","assets/minus-CGOxL7W4.js","assets/plus-D1v6Q8yU.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CfA5h11a.js";
import ProgramHeroEIE from "./ProgamHeroEIE-Ct93iaBt.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-BdaTwoqH.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BpGRfCTL.js";
import { S as StickyBookNav } from "./StickyBookNav-DVpZpPfk.js";
import "./EnrollmentModal-Cws58IB3.js";
import "./enrollmentApi-DH74qvpY.js";
import "./metaPixel-DjMPEQ2F.js";
import "./index-Dk7MajVP.js";
import "./proxy-CHEv0qax.js";
import "./arrow-right-DhvCu5pI.js";
import "./phone-CO1PoiXP.js";
import "./users-DAUYd__u.js";
import "./lightbulb-DZRUeavV.js";
import "./workflow-CYA5NMMT.js";
import "./rocket-DM5K6tEy.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-BWUKrbGJ.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-CJWEvaqz.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-BIz4MdWs.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-DoXtmb_Q.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-CVTPfFOY.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DBXVOqZB.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-C9sCuTlL.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
