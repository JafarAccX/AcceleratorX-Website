const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-9oBx6aiQ.js","assets/main-pPMPSF4E.js","assets/main-BLt5Qm9-.css","assets/trophy-C94PpVW6.js","assets/users-8QxDqiIW.js","assets/book-open-CicP61Nf.js","assets/target-DM8EY5qb.js","assets/star-BJ-UNCjo.js","assets/FAQEIE-Crc4wQ1H.js","assets/minus-BYA4klZj.js","assets/plus-DDJUfpgH.js","assets/LearningJourneyEIE-DRxf7d7F.js","assets/MentorsEIE-CGV9WwSW.js","assets/constants-CyrPx8P0.js","assets/linkedin-BZ5ke1u8.js","assets/PricingEIE-CojjKGEy.js","assets/EnrollmentModal-Bfd3L0vN.js","assets/enrollmentApi-sA0V8bFm.js","assets/metaPixel-DzY0zvt3.js","assets/check-D2shrlQK.js","assets/ProgamHeroEIE-BrTfIejE.js","assets/arrow-right-C1P5bEga.js","assets/phone-ERGZ3_mK.js","assets/ProgramCertificateEIE-Cz-EBQxK.js","assets/award-CzAD3x6V.js","assets/check-circle-9xeqseqw.js","assets/ProgramHighlightsEIE-DJuqbyw9.js","assets/lightbulb-A2Il3VlF.js","assets/workflow-CZ-JIh71.js","assets/rocket-B0JZKEDJ.js","assets/SkillsAndToolsEIE-CaHQXcSB.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-pPMPSF4E.js";
import { H as HeaderEIE } from "./HeaderEIE-CpgI9CCh.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Bgfkn93O.js";
import { S as StickyBookNav } from "./StickyBookNav-CtN95WCY.js";
import "./EnrollmentModal-Bfd3L0vN.js";
import "./enrollmentApi-sA0V8bFm.js";
import "./metaPixel-DzY0zvt3.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-9oBx6aiQ.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-Crc4wQ1H.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DRxf7d7F.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CGV9WwSW.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CojjKGEy.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-BrTfIejE.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-Cz-EBQxK.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-DJuqbyw9.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-CaHQXcSB.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
