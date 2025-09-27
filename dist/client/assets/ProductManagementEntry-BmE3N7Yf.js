const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CnY0-CTS.js","assets/main-BxH0ZrLt.js","assets/main-Ctc2Wiva.css","assets/proxy-BUnDe0Le.js","assets/award-1CxEvEce.js","assets/check-circle-B51BFdtP.js","assets/LearningJourneyEIE-D6paYa5y.js","assets/BenefitsGridEIE-Err_mhfD.js","assets/trophy-CsiJJshy.js","assets/users-Ck1c6nQM.js","assets/target-8Ou0ok0u.js","assets/book-open-BK1RC8yJ.js","assets/star-wycjDKqs.js","assets/brain-BAMFLeq5.js","assets/trending-up-UwKAsKhu.js","assets/MentorsEIE-CYE0ZWGg.js","assets/constants-C0Rc_o-P.js","assets/linkedin-D3Yjb6Ql.js","assets/SkillsAndToolsEIE-D3FB_pwj.js","assets/index-Dhyh9cgl.js","assets/PricingEIE-uAPXyKEK.js","assets/EnrollmentModal-pj7LRBsK.js","assets/enrollmentApi-BBm2zrfI.js","assets/metaPixel-DOCDtUNC.js","assets/check-3i--YltW.js","assets/FAQEIE-DYBlvqb5.js","assets/minus-B8cWyHY0.js","assets/plus-CXES8VNA.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BxH0ZrLt.js";
import ProgramHeroEIE from "./ProgamHeroEIE-LWaMRoga.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-DTtmZ6eK.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DY0kWvIi.js";
import { S as StickyBookNav } from "./StickyBookNav-DIcqnH_-.js";
import "./EnrollmentModal-pj7LRBsK.js";
import "./enrollmentApi-BBm2zrfI.js";
import "./metaPixel-DOCDtUNC.js";
import "./index-Dhyh9cgl.js";
import "./proxy-BUnDe0Le.js";
import "./arrow-right-oQSgCAEl.js";
import "./phone-B_4hMDBa.js";
import "./users-Ck1c6nQM.js";
import "./lightbulb-4ONhYSOH.js";
import "./workflow-CLysRtmo.js";
import "./rocket-Crtz7pC_.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CnY0-CTS.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-D6paYa5y.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-Err_mhfD.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CYE0ZWGg.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-D3FB_pwj.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-uAPXyKEK.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-DYBlvqb5.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
