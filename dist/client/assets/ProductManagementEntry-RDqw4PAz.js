const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-DC3vz7a3.js","assets/main-DqWgQVnl.js","assets/main-BA_X0d1R.css","assets/award-wzrKox8b.js","assets/check-circle-VCvpXhyR.js","assets/LearningJourneyEIE-Ddq-acVS.js","assets/BenefitsGridEIE-D9X2zRVA.js","assets/trophy-CKfc-1-x.js","assets/users-CqwVU5n4.js","assets/book-open-Bx05fuUB.js","assets/target-Dv7zvGKC.js","assets/star-KYS7fx06.js","assets/MentorsEIE-BuixchHC.js","assets/constants-CyrPx8P0.js","assets/linkedin-nGAkfh2y.js","assets/SkillsAndToolsEIE-DNEA5sPz.js","assets/PricingEIE-CXI3RJN6.js","assets/EnrollmentModal-BWPAe1sr.js","assets/enrollmentApi-C8CeDdxE.js","assets/metaPixel-DriOOgtG.js","assets/check-B3fLyWF9.js","assets/FAQEIE-DwZo6uGV.js","assets/minus-BAClpgPj.js","assets/plus-Kkryr3tj.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DqWgQVnl.js";
import ProgramHeroEIE from "./ProgamHeroEIE-DgYyyAQu.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-nDw72YVy.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-B2tzD2rh.js";
import { S as StickyBookNav } from "./StickyBookNav-Dsyt1lpu.js";
import "./EnrollmentModal-BWPAe1sr.js";
import "./enrollmentApi-C8CeDdxE.js";
import "./metaPixel-DriOOgtG.js";
import "./arrow-right-CyzkLVpq.js";
import "./phone-B9HOeT9o.js";
import "./users-CqwVU5n4.js";
import "./lightbulb-CgdhdShz.js";
import "./workflow-DNpcsiWM.js";
import "./rocket-CMRyJQLc.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DC3vz7a3.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Ddq-acVS.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-D9X2zRVA.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BuixchHC.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DNEA5sPz.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CXI3RJN6.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-DwZo6uGV.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
