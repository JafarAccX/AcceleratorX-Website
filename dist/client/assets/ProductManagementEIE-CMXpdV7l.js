const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-5IJXaiPM.js","assets/main-CYXtjh6i.js","assets/main-ClQXKXUm.css","assets/trophy-co6Ngv2K.js","assets/users-CdcQY_SG.js","assets/target-rHRz09al.js","assets/book-open-CzoRnbTa.js","assets/star-DyGEE_BZ.js","assets/brain-CXUDEVph.js","assets/trending-up-h3x1wrQ3.js","assets/FAQEIE-D3p3Ps1f.js","assets/minus-CHNiBdSC.js","assets/plus-D7z6aEuo.js","assets/LearningJourneyEIE-D7CKt0t1.js","assets/MentorsEIE-BRAvS_Tt.js","assets/constants-C0Rc_o-P.js","assets/linkedin-DzGqIPIS.js","assets/PricingEIE-DFxqHbaq.js","assets/EnrollmentModal-DcnBQ-EC.js","assets/enrollmentApi-JNGmvjgr.js","assets/metaPixel-CmtfEEd5.js","assets/check--CHR-4Le.js","assets/ProgamHeroEIE-Dcp2q9fJ.js","assets/arrow-right-DZfVus5g.js","assets/phone-CKWSRQhQ.js","assets/ProgramCertificateEIE-DeVR6VEN.js","assets/award-CanGrvfI.js","assets/check-circle-BjB7zsGT.js","assets/ProgramHighlightsEIE-CVDKfnno.js","assets/lightbulb-B8D6dvmg.js","assets/workflow-Cd9I4cmO.js","assets/rocket-mdWlK2c8.js","assets/SkillsAndToolsEIE-DtQgui2N.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CYXtjh6i.js";
import { H as HeaderEIE } from "./HeaderEIE-UO4YLgMy.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DkD-tlbZ.js";
import { S as StickyBookNav } from "./StickyBookNav-BKcf_W7p.js";
import "./EnrollmentModal-DcnBQ-EC.js";
import "./enrollmentApi-JNGmvjgr.js";
import "./metaPixel-CmtfEEd5.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-5IJXaiPM.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-D3p3Ps1f.js"), true ? __vite__mapDeps([10,1,2,11,12]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-D7CKt0t1.js"), true ? __vite__mapDeps([13,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BRAvS_Tt.js"), true ? __vite__mapDeps([14,1,2,15,4,16]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DFxqHbaq.js"), true ? __vite__mapDeps([17,1,2,18,19,20,21]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-Dcp2q9fJ.js"), true ? __vite__mapDeps([22,1,2,18,19,20,23,24,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DeVR6VEN.js"), true ? __vite__mapDeps([25,1,2,26,27]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-CVDKfnno.js"), true ? __vite__mapDeps([28,1,2,29,30,31]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DtQgui2N.js"), true ? __vite__mapDeps([32,1,2,15]) : void 0));
const ProductManagementEIE = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  reactExports.useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderEIE, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramHeroEIE, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroWithAbouv, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramHighlightsEIE, {}),
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
  ProductManagementEIE as default
};
