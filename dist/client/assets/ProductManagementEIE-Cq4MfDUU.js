const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-9rwVd6uH.js","assets/main-EhB7M4T3.js","assets/main-ZJ57361l.css","assets/trophy-CVVa-Tgj.js","assets/users-CazCd-RW.js","assets/book-open-CLe2X9pc.js","assets/target-BJhB5Tpj.js","assets/star-CKvDag0s.js","assets/FAQEIE-CemnODrM.js","assets/minus-rEHgMy1y.js","assets/plus-Cvs6fnhL.js","assets/LearningJourneyEIE-DW3lK1xx.js","assets/MentorsEIE-RDR54LZq.js","assets/constants-CyrPx8P0.js","assets/linkedin-CR8w8DS_.js","assets/PricingEIE-1zBoBhpc.js","assets/EnrollmentModal-CaNAI2uf.js","assets/enrollmentApi-eh5T7sQa.js","assets/metaPixel-ClzrpHuU.js","assets/check-Tpc-kpGA.js","assets/ProgamHeroEIE-DsYc6UAP.js","assets/arrow-right-CDHEKS8n.js","assets/phone-CFsmRDl9.js","assets/ProgramCertificateEIE-B_7T8k9f.js","assets/award-CGFLwPRe.js","assets/check-circle-t8KHLBJJ.js","assets/ProgramHighlightsEIE-azQP1DBr.js","assets/lightbulb-Do0mymFt.js","assets/workflow-BYHNhatr.js","assets/rocket-CORIl_CJ.js","assets/SkillsAndToolsEIE-0XDz98VE.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-EhB7M4T3.js";
import { H as HeaderEIE } from "./HeaderEIE-2Wzioal6.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BBZRhbJ3.js";
import { S as StickyBookNav } from "./StickyBookNav-Cyu03Zij.js";
import "./EnrollmentModal-CaNAI2uf.js";
import "./enrollmentApi-eh5T7sQa.js";
import "./metaPixel-ClzrpHuU.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-9rwVd6uH.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-CemnODrM.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DW3lK1xx.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-RDR54LZq.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-1zBoBhpc.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-DsYc6UAP.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-B_7T8k9f.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-azQP1DBr.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-0XDz98VE.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
