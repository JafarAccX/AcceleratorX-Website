const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-BN5KB1f2.js","assets/main-BOeEXsPM.js","assets/main-CnF9mUWs.css","assets/proxy-BkLUGwlU.js","assets/award-DyoU7hVm.js","assets/check-circle-4J_2V110.js","assets/LearningJourneyEIE-DzPguZ2k.js","assets/BenefitsGridEIE-DESt9x5b.js","assets/trophy-BBbxUwJG.js","assets/users-C2gyDQ75.js","assets/target-BlkvoEkn.js","assets/book-open-BBXe42fc.js","assets/star-BOf4Nz2M.js","assets/brain-Dr9AHv2Y.js","assets/trending-up-iKI26Ots.js","assets/MentorsEIE-CJYoQR1k.js","assets/constants-C0Rc_o-P.js","assets/linkedin-PajTg24b.js","assets/SkillsAndToolsEIE-CQukbl8G.js","assets/index-BLTItVKD.js","assets/PricingEIE-DoDweyjL.js","assets/EnrollmentModal-B2rURnZi.js","assets/enrollmentApi-B9uFHRSh.js","assets/metaPixel-Bmpr2vms.js","assets/check-CQDV7dMv.js","assets/FAQEIE-B_dJ1c3E.js","assets/minus-BzdPlEF9.js","assets/plus-B-wBCJNf.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BOeEXsPM.js";
import ProgramHeroEIE from "./ProgamHeroEIE-C-Axqr2i.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-CyWpMPwQ.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-pwlmCUnZ.js";
import { S as StickyBookNav } from "./StickyBookNav-IYRzxML0.js";
import "./EnrollmentModal-B2rURnZi.js";
import "./enrollmentApi-B9uFHRSh.js";
import "./metaPixel-Bmpr2vms.js";
import "./index-BLTItVKD.js";
import "./proxy-BkLUGwlU.js";
import "./arrow-right-DkGKnnUl.js";
import "./phone-DFRLrEjf.js";
import "./users-C2gyDQ75.js";
import "./lightbulb-BV-juen_.js";
import "./workflow-BasoGUlh.js";
import "./rocket-CmpbdtIu.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-BN5KB1f2.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DzPguZ2k.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DESt9x5b.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CJYoQR1k.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-CQukbl8G.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DoDweyjL.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-B_dJ1c3E.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
