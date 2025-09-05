const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CqFxKq2s.js","assets/main-DUtAh55Z.js","assets/main-BWS2aYUX.css","assets/proxy-D90nfG6D.js","assets/award-Ci4hKkFv.js","assets/check-circle-B_N9JiW7.js","assets/LearningJourneyEIE-B7jwImph.js","assets/BenefitsGridEIE-CLnfjGA8.js","assets/trophy-BM_GyO1C.js","assets/users-BliTtv7q.js","assets/target-Bp6_gJhm.js","assets/book-open-LSas7f6n.js","assets/star-CcYeFTEi.js","assets/brain-D7Z6FEaN.js","assets/trending-up-B2LPykMU.js","assets/MentorsEIE-BVrXy3eX.js","assets/constants-C0Rc_o-P.js","assets/linkedin-ErPNqK88.js","assets/SkillsAndToolsEIE-BPipVG0e.js","assets/index-Bf4wyDJA.js","assets/PricingEIE-lcZfhAU0.js","assets/EnrollmentModal-BEG1oj57.js","assets/enrollmentApi-Da6Jehr4.js","assets/metaPixel-5Iv-ywSE.js","assets/check-KmsD7hsX.js","assets/FAQEIE-UU8vf1fG.js","assets/minus-ByShgdXB.js","assets/plus-BLnmhFOd.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DUtAh55Z.js";
import ProgramHeroEIE from "./ProgamHeroEIE-D4qYIj3r.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-Cia-2sRE.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DLRocxax.js";
import { S as StickyBookNav } from "./StickyBookNav-DRopwADh.js";
import "./EnrollmentModal-BEG1oj57.js";
import "./enrollmentApi-Da6Jehr4.js";
import "./metaPixel-5Iv-ywSE.js";
import "./index-Bf4wyDJA.js";
import "./proxy-D90nfG6D.js";
import "./arrow-right-CGUkbaPw.js";
import "./phone-67LZq1ts.js";
import "./users-BliTtv7q.js";
import "./lightbulb-CALKOEOL.js";
import "./workflow-trpFPI3O.js";
import "./rocket-BDYKnOr_.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CqFxKq2s.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-B7jwImph.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-CLnfjGA8.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BVrXy3eX.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BPipVG0e.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-lcZfhAU0.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-UU8vf1fG.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
