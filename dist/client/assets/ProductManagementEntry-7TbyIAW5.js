const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-B_7T8k9f.js","assets/main-EhB7M4T3.js","assets/main-ZJ57361l.css","assets/award-CGFLwPRe.js","assets/check-circle-t8KHLBJJ.js","assets/LearningJourneyEIE-DW3lK1xx.js","assets/BenefitsGridEIE-9rwVd6uH.js","assets/trophy-CVVa-Tgj.js","assets/users-CazCd-RW.js","assets/book-open-CLe2X9pc.js","assets/target-BJhB5Tpj.js","assets/star-CKvDag0s.js","assets/MentorsEIE-RDR54LZq.js","assets/constants-CyrPx8P0.js","assets/linkedin-CR8w8DS_.js","assets/SkillsAndToolsEIE-0XDz98VE.js","assets/PricingEIE-1zBoBhpc.js","assets/EnrollmentModal-CaNAI2uf.js","assets/enrollmentApi-eh5T7sQa.js","assets/metaPixel-ClzrpHuU.js","assets/check-Tpc-kpGA.js","assets/FAQEIE-CemnODrM.js","assets/minus-rEHgMy1y.js","assets/plus-Cvs6fnhL.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-EhB7M4T3.js";
import ProgramHeroEIE from "./ProgamHeroEIE-DsYc6UAP.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-azQP1DBr.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BBZRhbJ3.js";
import { S as StickyBookNav } from "./StickyBookNav-Cyu03Zij.js";
import "./EnrollmentModal-CaNAI2uf.js";
import "./enrollmentApi-eh5T7sQa.js";
import "./metaPixel-ClzrpHuU.js";
import "./arrow-right-CDHEKS8n.js";
import "./phone-CFsmRDl9.js";
import "./users-CazCd-RW.js";
import "./lightbulb-Do0mymFt.js";
import "./workflow-BYHNhatr.js";
import "./rocket-CORIl_CJ.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-B_7T8k9f.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DW3lK1xx.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-9rwVd6uH.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-RDR54LZq.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-0XDz98VE.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-1zBoBhpc.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-CemnODrM.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
