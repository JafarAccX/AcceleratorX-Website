const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-C00O79rR.js","assets/main--2dij7NT.js","assets/main-BLt5Qm9-.css","assets/trophy-D8-bCLaG.js","assets/users-GrMQqZi1.js","assets/book-open-uRJLYMIX.js","assets/target-DogO4tkf.js","assets/star-7a49aDRd.js","assets/FAQEIE-Dvswf-40.js","assets/minus-sstVV-ZS.js","assets/plus-D74R6wXE.js","assets/LearningJourneyEIE-DY7MAx3G.js","assets/MentorsEIE-BjFbcWOb.js","assets/constants-CyrPx8P0.js","assets/linkedin-Cx2tZRcR.js","assets/PricingEIE-cqiF3XH1.js","assets/EnrollmentModal-BwoEtjGe.js","assets/enrollmentApi-BFYU_Xcg.js","assets/metaPixel-CkAVQXt-.js","assets/check-D-XW72E-.js","assets/ProgamHeroEIE-CAfEJ7-b.js","assets/arrow-right-gPbAI7ey.js","assets/phone-C1n1QWQK.js","assets/ProgramCertificateEIE-Z7dlnvgI.js","assets/award-DjdrttLp.js","assets/check-circle-Dob8mpEg.js","assets/ProgramHighlightsEIE-D00ShF4X.js","assets/lightbulb-CPf3JN8c.js","assets/workflow-DS_rl7Ot.js","assets/rocket-Bcg6PPyv.js","assets/SkillsAndToolsEIE-De1X5aOU.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main--2dij7NT.js";
import { H as HeaderEIE } from "./HeaderEIE-4aqtTXRR.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Cz5gDwII.js";
import { S as StickyBookNav } from "./StickyBookNav-CBhB0r9q.js";
import "./EnrollmentModal-BwoEtjGe.js";
import "./enrollmentApi-BFYU_Xcg.js";
import "./metaPixel-CkAVQXt-.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-C00O79rR.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-Dvswf-40.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DY7MAx3G.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BjFbcWOb.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-cqiF3XH1.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-CAfEJ7-b.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-Z7dlnvgI.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-D00ShF4X.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-De1X5aOU.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
