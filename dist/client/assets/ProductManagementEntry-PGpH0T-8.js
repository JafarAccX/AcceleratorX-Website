const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-DyLKqLEb.js","assets/main-DD2uCxhE.js","assets/main-ZJ57361l.css","assets/award-BU5g3ElA.js","assets/check-circle-B2bTinLl.js","assets/LearningJourneyEIE-CCyj7fBB.js","assets/BenefitsGridEIE-DEJ8QGGU.js","assets/trophy-BSo7V-eA.js","assets/users-Ci7-1-Pr.js","assets/book-open-RgGQM0vF.js","assets/target-CgtNxCik.js","assets/star-DInGSxH8.js","assets/MentorsEIE-PoEQ7wQ_.js","assets/constants-CyrPx8P0.js","assets/linkedin-BfJpJBRZ.js","assets/SkillsAndToolsEIE-fu7b-R4N.js","assets/PricingEIE-BuOIgiMb.js","assets/EnrollmentModal-zGH4Iqw0.js","assets/enrollmentApi-C5hvGDp9.js","assets/metaPixel-BHCHwNnL.js","assets/check-Bgu0fHGX.js","assets/FAQEIE-BrrfuHRQ.js","assets/minus-B28IL-fF.js","assets/plus-B2G3pnxc.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DD2uCxhE.js";
import ProgramHeroEIE from "./ProgamHeroEIE-DkiZTIs5.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-BqKfhy4Y.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Cd2zsup5.js";
import { S as StickyBookNav } from "./StickyBookNav-5z1FuMoh.js";
import "./EnrollmentModal-zGH4Iqw0.js";
import "./enrollmentApi-C5hvGDp9.js";
import "./metaPixel-BHCHwNnL.js";
import "./arrow-right-DKTHI5BW.js";
import "./phone-CBSm_OxC.js";
import "./users-Ci7-1-Pr.js";
import "./lightbulb-BxOeGPlc.js";
import "./workflow-C4Fa_Krf.js";
import "./rocket-CQ24vrVl.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DyLKqLEb.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-CCyj7fBB.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DEJ8QGGU.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-PoEQ7wQ_.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-fu7b-R4N.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-BuOIgiMb.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BrrfuHRQ.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
