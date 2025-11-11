const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-D9X2zRVA.js","assets/main-DqWgQVnl.js","assets/main-BA_X0d1R.css","assets/trophy-CKfc-1-x.js","assets/users-CqwVU5n4.js","assets/book-open-Bx05fuUB.js","assets/target-Dv7zvGKC.js","assets/star-KYS7fx06.js","assets/FAQEIE-DwZo6uGV.js","assets/minus-BAClpgPj.js","assets/plus-Kkryr3tj.js","assets/LearningJourneyEIE-Ddq-acVS.js","assets/MentorsEIE-BuixchHC.js","assets/constants-CyrPx8P0.js","assets/linkedin-nGAkfh2y.js","assets/PricingEIE-CXI3RJN6.js","assets/EnrollmentModal-BWPAe1sr.js","assets/enrollmentApi-C8CeDdxE.js","assets/metaPixel-DriOOgtG.js","assets/check-B3fLyWF9.js","assets/ProgamHeroEIE-DgYyyAQu.js","assets/arrow-right-CyzkLVpq.js","assets/phone-B9HOeT9o.js","assets/ProgramCertificateEIE-DC3vz7a3.js","assets/award-wzrKox8b.js","assets/check-circle-VCvpXhyR.js","assets/ProgramHighlightsEIE-nDw72YVy.js","assets/lightbulb-CgdhdShz.js","assets/workflow-DNpcsiWM.js","assets/rocket-CMRyJQLc.js","assets/SkillsAndToolsEIE-DNEA5sPz.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DqWgQVnl.js";
import { H as HeaderEIE } from "./HeaderEIE-BGPfqfpB.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-B2tzD2rh.js";
import { S as StickyBookNav } from "./StickyBookNav-Dsyt1lpu.js";
import "./EnrollmentModal-BWPAe1sr.js";
import "./enrollmentApi-C8CeDdxE.js";
import "./metaPixel-DriOOgtG.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-D9X2zRVA.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-DwZo6uGV.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Ddq-acVS.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BuixchHC.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CXI3RJN6.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-DgYyyAQu.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DC3vz7a3.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-nDw72YVy.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DNEA5sPz.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
