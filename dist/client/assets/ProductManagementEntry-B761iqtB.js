const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-B6V5nU25.js","assets/main-WA_0Fhhs.js","assets/main-ZJ57361l.css","assets/award-j8yuBriV.js","assets/check-circle-CSz1HFan.js","assets/LearningJourneyEIE-DId84Grl.js","assets/BenefitsGridEIE-DZ4ekFYE.js","assets/trophy-DlyAWQGc.js","assets/users-tUZnxyVJ.js","assets/book-open-CH7gdj4H.js","assets/target-DFrLaXxK.js","assets/star-BPe5i9c4.js","assets/MentorsEIE-BGXEq7Po.js","assets/constants-CyrPx8P0.js","assets/linkedin-COAdn9xh.js","assets/SkillsAndToolsEIE-C3AzpPuA.js","assets/PricingEIE-D8LVkHHn.js","assets/EnrollmentModal-LPZC0Pif.js","assets/enrollmentApi-BN4yZFw0.js","assets/metaPixel-D-2Rwuz7.js","assets/check-RI2kmGsn.js","assets/FAQEIE-B4gR5VKQ.js","assets/minus-C_IKxazH.js","assets/plus-DLUn7QVw.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-WA_0Fhhs.js";
import ProgramHeroEIE from "./ProgamHeroEIE-D933P9Ry.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-D1wPzeq8.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DYwx7_TP.js";
import { S as StickyBookNav } from "./StickyBookNav-D8WPz5t3.js";
import "./EnrollmentModal-LPZC0Pif.js";
import "./enrollmentApi-BN4yZFw0.js";
import "./metaPixel-D-2Rwuz7.js";
import "./arrow-right-CeWL_7zL.js";
import "./phone-DUmcXCWz.js";
import "./users-tUZnxyVJ.js";
import "./lightbulb-CPDK0gHp.js";
import "./workflow-DwhJmMYA.js";
import "./rocket-BvAqB1qD.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-B6V5nU25.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DId84Grl.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DZ4ekFYE.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BGXEq7Po.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-C3AzpPuA.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-D8LVkHHn.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-B4gR5VKQ.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
