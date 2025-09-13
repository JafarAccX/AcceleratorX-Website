const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CrlAsoSk.js","assets/main-EGEnCh6i.js","assets/main-CnF9mUWs.css","assets/proxy-CXL56B2m.js","assets/award-Cay8AhnF.js","assets/check-circle-DPRrrFjx.js","assets/LearningJourneyEIE-Dz6XplgM.js","assets/BenefitsGridEIE-BXG6VWr4.js","assets/trophy--uEI7Vei.js","assets/users-CrRmhLoB.js","assets/target-cQaRyuV4.js","assets/book-open-FOX8DHE6.js","assets/star-CrrKsA9F.js","assets/brain-BlniTgRH.js","assets/trending-up-Czf-j1tA.js","assets/MentorsEIE--9lkNpjR.js","assets/constants-C0Rc_o-P.js","assets/linkedin-Cps4pr-z.js","assets/SkillsAndToolsEIE-1-sm5_7C.js","assets/index-BAcEffVT.js","assets/PricingEIE-BTN0csdQ.js","assets/EnrollmentModal-DPDKkDKj.js","assets/enrollmentApi-DSV_ou16.js","assets/metaPixel-CEyU9G7i.js","assets/check-DbbQBIaB.js","assets/FAQEIE-CG9pAV2S.js","assets/minus-DYvY46Gg.js","assets/plus-B3mQ_tF9.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-EGEnCh6i.js";
import ProgramHeroEIE from "./ProgamHeroEIE-QQv66Far.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-BjjOEbBZ.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DRZ2hk6q.js";
import { S as StickyBookNav } from "./StickyBookNav-BURuPlPz.js";
import "./EnrollmentModal-DPDKkDKj.js";
import "./enrollmentApi-DSV_ou16.js";
import "./metaPixel-CEyU9G7i.js";
import "./index-BAcEffVT.js";
import "./proxy-CXL56B2m.js";
import "./arrow-right-C_Mh0B54.js";
import "./phone-bOZt7mHi.js";
import "./users-CrRmhLoB.js";
import "./lightbulb-BuFcw8LD.js";
import "./workflow-BV8qLDyn.js";
import "./rocket-D3td5GvO.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CrlAsoSk.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Dz6XplgM.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-BXG6VWr4.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE--9lkNpjR.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-1-sm5_7C.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-BTN0csdQ.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-CG9pAV2S.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
