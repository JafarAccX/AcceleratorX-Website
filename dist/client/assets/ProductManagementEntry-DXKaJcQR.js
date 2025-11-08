const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-Z7dlnvgI.js","assets/main--2dij7NT.js","assets/main-BLt5Qm9-.css","assets/award-DjdrttLp.js","assets/check-circle-Dob8mpEg.js","assets/LearningJourneyEIE-DY7MAx3G.js","assets/BenefitsGridEIE-C00O79rR.js","assets/trophy-D8-bCLaG.js","assets/users-GrMQqZi1.js","assets/book-open-uRJLYMIX.js","assets/target-DogO4tkf.js","assets/star-7a49aDRd.js","assets/MentorsEIE-BjFbcWOb.js","assets/constants-CyrPx8P0.js","assets/linkedin-Cx2tZRcR.js","assets/SkillsAndToolsEIE-De1X5aOU.js","assets/PricingEIE-cqiF3XH1.js","assets/EnrollmentModal-BwoEtjGe.js","assets/enrollmentApi-BFYU_Xcg.js","assets/metaPixel-CkAVQXt-.js","assets/check-D-XW72E-.js","assets/FAQEIE-Dvswf-40.js","assets/minus-sstVV-ZS.js","assets/plus-D74R6wXE.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main--2dij7NT.js";
import ProgramHeroEIE from "./ProgamHeroEIE-CAfEJ7-b.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-D00ShF4X.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Cz5gDwII.js";
import { S as StickyBookNav } from "./StickyBookNav-CBhB0r9q.js";
import "./EnrollmentModal-BwoEtjGe.js";
import "./enrollmentApi-BFYU_Xcg.js";
import "./metaPixel-CkAVQXt-.js";
import "./arrow-right-gPbAI7ey.js";
import "./phone-C1n1QWQK.js";
import "./users-GrMQqZi1.js";
import "./lightbulb-CPf3JN8c.js";
import "./workflow-DS_rl7Ot.js";
import "./rocket-Bcg6PPyv.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-Z7dlnvgI.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DY7MAx3G.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-C00O79rR.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BjFbcWOb.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-De1X5aOU.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-cqiF3XH1.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-Dvswf-40.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
