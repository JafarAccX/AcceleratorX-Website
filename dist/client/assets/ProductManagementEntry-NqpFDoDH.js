const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-BEQH06Xi.js","assets/main-B74a7APh.js","assets/main-g1H-mEfk.css","assets/award-CQMB5ilq.js","assets/check-circle-BWtfX3u2.js","assets/LearningJourneyEIE-Cva3DuRi.js","assets/BenefitsGridEIE-DlBAsZap.js","assets/trophy-J11s7m9X.js","assets/users-Ct7CPHI4.js","assets/target-CCzrU2-5.js","assets/book-open-C1jLtiun.js","assets/star-y8OPXj12.js","assets/brain-CZgV0OuH.js","assets/trending-up-Byp6hbeH.js","assets/MentorsEIE-DZLOqaom.js","assets/constants-C0Rc_o-P.js","assets/linkedin-7rLahovi.js","assets/SkillsAndToolsEIE-Bg93nkXv.js","assets/PricingEIE-BaDKOSvk.js","assets/EnrollmentModal-Bv8tNPrU.js","assets/enrollmentApi-CthJO1r6.js","assets/metaPixel-Dp8i02x8.js","assets/check-DjwQlRZC.js","assets/FAQEIE-BL5a5YKq.js","assets/minus-XalQViTb.js","assets/plus-CD0jKc4a.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-B74a7APh.js";
import ProgramHeroEIE from "./ProgamHeroEIE-UKB48nuy.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-BbSP_7bU.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-ChJLagBA.js";
import { S as StickyBookNav } from "./StickyBookNav-DTc19drc.js";
import "./EnrollmentModal-Bv8tNPrU.js";
import "./enrollmentApi-CthJO1r6.js";
import "./metaPixel-Dp8i02x8.js";
import "./arrow-right-tniEZtWn.js";
import "./phone-C8EBD5Gs.js";
import "./users-Ct7CPHI4.js";
import "./lightbulb-CPKxE30s.js";
import "./workflow-CuwnoIeo.js";
import "./rocket-CjPAEuWW.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-BEQH06Xi.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Cva3DuRi.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DlBAsZap.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11,12,13]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-DZLOqaom.js"), true ? __vite__mapDeps([14,1,2,15,8,16]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-Bg93nkXv.js"), true ? __vite__mapDeps([17,1,2,15]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-BaDKOSvk.js"), true ? __vite__mapDeps([18,1,2,19,20,21,22]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BL5a5YKq.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
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
