const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-DOPI8zvF.js","assets/main-B8okaWNI.js","assets/main-nhAxMPX_.css","assets/award-CpMcU-J2.js","assets/check-circle-CXEnHNex.js","assets/LearningJourneyEIE-B1O8RadE.js","assets/BenefitsGridEIE-DfvbWP3Q.js","assets/trophy-lleo8xGI.js","assets/users-b9wcZXax.js","assets/book-open-WLXlk6Tg.js","assets/target-Bk59goWz.js","assets/star-DOgCEz4a.js","assets/MentorsEIE-Ddy6EKnL.js","assets/constants-CyrPx8P0.js","assets/linkedin-BDnL0g2M.js","assets/SkillsAndToolsEIE-Bb_uMclO.js","assets/PricingEIE-CtDRFn5a.js","assets/EnrollmentModal-BXjAQvvZ.js","assets/enrollmentApi-bNQ7AXLh.js","assets/metaPixel-dipZhJtg.js","assets/check-D6Z5Gzom.js","assets/FAQEIE-BhT2StE-.js","assets/minus-Bqz-4Vlb.js","assets/plus-gckuz4In.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-B8okaWNI.js";
import ProgramHeroEIE from "./ProgamHeroEIE--GppSf2U.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-C8DPE8F_.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-pZnywZau.js";
import { S as StickyBookNav } from "./StickyBookNav-SKl4wKW5.js";
import "./EnrollmentModal-BXjAQvvZ.js";
import "./enrollmentApi-bNQ7AXLh.js";
import "./metaPixel-dipZhJtg.js";
import "./arrow-right-BzHGCVTL.js";
import "./phone-CpXc0T_M.js";
import "./users-b9wcZXax.js";
import "./lightbulb-8Ck8isf3.js";
import "./workflow-Bp-m7Pu9.js";
import "./rocket-CFakGA3h.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DOPI8zvF.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-B1O8RadE.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DfvbWP3Q.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-Ddy6EKnL.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-Bb_uMclO.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CtDRFn5a.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BhT2StE-.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
