const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-DZ4ekFYE.js","assets/main-WA_0Fhhs.js","assets/main-ZJ57361l.css","assets/trophy-DlyAWQGc.js","assets/users-tUZnxyVJ.js","assets/book-open-CH7gdj4H.js","assets/target-DFrLaXxK.js","assets/star-BPe5i9c4.js","assets/FAQEIE-B4gR5VKQ.js","assets/minus-C_IKxazH.js","assets/plus-DLUn7QVw.js","assets/LearningJourneyEIE-DId84Grl.js","assets/MentorsEIE-BGXEq7Po.js","assets/constants-CyrPx8P0.js","assets/linkedin-COAdn9xh.js","assets/PricingEIE-D8LVkHHn.js","assets/EnrollmentModal-LPZC0Pif.js","assets/enrollmentApi-BN4yZFw0.js","assets/metaPixel-D-2Rwuz7.js","assets/check-RI2kmGsn.js","assets/ProgamHeroEIE-D933P9Ry.js","assets/arrow-right-CeWL_7zL.js","assets/phone-DUmcXCWz.js","assets/ProgramCertificateEIE-B6V5nU25.js","assets/award-j8yuBriV.js","assets/check-circle-CSz1HFan.js","assets/ProgramHighlightsEIE-D1wPzeq8.js","assets/lightbulb-CPDK0gHp.js","assets/workflow-DwhJmMYA.js","assets/rocket-BvAqB1qD.js","assets/SkillsAndToolsEIE-C3AzpPuA.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-WA_0Fhhs.js";
import { H as HeaderEIE } from "./HeaderEIE-B3GlKfjO.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DYwx7_TP.js";
import { S as StickyBookNav } from "./StickyBookNav-D8WPz5t3.js";
import "./EnrollmentModal-LPZC0Pif.js";
import "./enrollmentApi-BN4yZFw0.js";
import "./metaPixel-D-2Rwuz7.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DZ4ekFYE.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-B4gR5VKQ.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DId84Grl.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BGXEq7Po.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-D8LVkHHn.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-D933P9Ry.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-B6V5nU25.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-D1wPzeq8.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-C3AzpPuA.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
