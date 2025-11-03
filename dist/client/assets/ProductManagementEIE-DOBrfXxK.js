const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-DEJ8QGGU.js","assets/main-DD2uCxhE.js","assets/main-ZJ57361l.css","assets/trophy-BSo7V-eA.js","assets/users-Ci7-1-Pr.js","assets/book-open-RgGQM0vF.js","assets/target-CgtNxCik.js","assets/star-DInGSxH8.js","assets/FAQEIE-BrrfuHRQ.js","assets/minus-B28IL-fF.js","assets/plus-B2G3pnxc.js","assets/LearningJourneyEIE-CCyj7fBB.js","assets/MentorsEIE-PoEQ7wQ_.js","assets/constants-CyrPx8P0.js","assets/linkedin-BfJpJBRZ.js","assets/PricingEIE-BuOIgiMb.js","assets/EnrollmentModal-zGH4Iqw0.js","assets/enrollmentApi-C5hvGDp9.js","assets/metaPixel-BHCHwNnL.js","assets/check-Bgu0fHGX.js","assets/ProgamHeroEIE-DkiZTIs5.js","assets/arrow-right-DKTHI5BW.js","assets/phone-CBSm_OxC.js","assets/ProgramCertificateEIE-DyLKqLEb.js","assets/award-BU5g3ElA.js","assets/check-circle-B2bTinLl.js","assets/ProgramHighlightsEIE-BqKfhy4Y.js","assets/lightbulb-BxOeGPlc.js","assets/workflow-C4Fa_Krf.js","assets/rocket-CQ24vrVl.js","assets/SkillsAndToolsEIE-fu7b-R4N.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DD2uCxhE.js";
import { H as HeaderEIE } from "./HeaderEIE-D7JsTUui.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Cd2zsup5.js";
import { S as StickyBookNav } from "./StickyBookNav-5z1FuMoh.js";
import "./EnrollmentModal-zGH4Iqw0.js";
import "./enrollmentApi-C5hvGDp9.js";
import "./metaPixel-BHCHwNnL.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DEJ8QGGU.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BrrfuHRQ.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-CCyj7fBB.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-PoEQ7wQ_.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-BuOIgiMb.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-DkiZTIs5.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DyLKqLEb.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-BqKfhy4Y.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-fu7b-R4N.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
