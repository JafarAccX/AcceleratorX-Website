const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-C9pCE5yH.js","assets/main-CkWvzmHo.js","assets/main-wRMbtKU1.css","assets/proxy-FX7O8pU2.js","assets/award-Cz7vptGc.js","assets/check-circle-CCNGxZe3.js","assets/LearningJourneyEIE-CRq5eEEC.js","assets/BenefitsGridEIE-BzEOASFl.js","assets/trophy-D71N_OmY.js","assets/users-8QKFmLyj.js","assets/target-DQLh0PEG.js","assets/book-open-Du4r5K0Q.js","assets/star-B6k2ljBi.js","assets/brain-B7DwKr5t.js","assets/trending-up-Czwjdimx.js","assets/MentorsEIE-Bwrruscf.js","assets/constants-C0Rc_o-P.js","assets/linkedin-fcGhLZOz.js","assets/SkillsAndToolsEIE-DT_tN_gb.js","assets/index-BykFZKOi.js","assets/PricingEIE-BF_uzi1Y.js","assets/EnrollmentModal-DiD1_fbT.js","assets/enrollmentApi-B1ElAQt2.js","assets/metaPixel-CQtQgASE.js","assets/check-CbC9tXFy.js","assets/FAQEIE-BnC0ukyH.js","assets/minus-BlQPTGUG.js","assets/plus-o7vDXHjm.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CkWvzmHo.js";
import ProgramHeroEIE from "./ProgamHeroEIE-B24-GeOZ.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-BVaYUiEl.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-hmUtv8ry.js";
import { S as StickyBookNav } from "./StickyBookNav-DIpvIMzB.js";
import "./EnrollmentModal-DiD1_fbT.js";
import "./enrollmentApi-B1ElAQt2.js";
import "./metaPixel-CQtQgASE.js";
import "./index-BykFZKOi.js";
import "./proxy-FX7O8pU2.js";
import "./arrow-right-W40EKaQK.js";
import "./phone-DerCxX78.js";
import "./users-8QKFmLyj.js";
import "./lightbulb-WNNsXcLX.js";
import "./workflow-l4561D2X.js";
import "./rocket-COtOjPyq.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-C9pCE5yH.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-CRq5eEEC.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-BzEOASFl.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-Bwrruscf.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DT_tN_gb.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-BF_uzi1Y.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BnC0ukyH.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
