const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-D872L_4j.js","assets/main-D-AGBQ1V.js","assets/main-BqzrM4wO.css","assets/proxy-BKgBDLzu.js","assets/award-CzjEZEQD.js","assets/check-circle-Dn9AUJY9.js","assets/LearningJourneyEIE-BP07X43_.js","assets/BenefitsGridEIE-BIIBw_En.js","assets/trophy-DTQ6VNSy.js","assets/users-kSLZckgQ.js","assets/target-CcP6l83z.js","assets/book-open-Dhpzl14o.js","assets/star-Ctx3VLqo.js","assets/brain-C7K9LGjI.js","assets/trending-up-CLmClpSE.js","assets/MentorsEIE-4mlI94w3.js","assets/constants-C0Rc_o-P.js","assets/linkedin-DG2VjpB5.js","assets/SkillsAndToolsEIE-ByNaWEZK.js","assets/index-Db-Ojao2.js","assets/PricingEIE-d_sypORp.js","assets/EnrollmentModal-CF0_iQlt.js","assets/enrollmentApi-DJDBxQt6.js","assets/metaPixel-C_Hbs_hE.js","assets/check-CdtixV7a.js","assets/FAQEIE-CxysBmqU.js","assets/minus-C0PxtPnl.js","assets/plus-B_aZlVTc.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-D-AGBQ1V.js";
import ProgramHeroEIE from "./ProgamHeroEIE-hf2KZKls.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-D99i8SMX.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CbH7Zrfy.js";
import { S as StickyBookNav } from "./StickyBookNav-C0bppEzh.js";
import "./EnrollmentModal-CF0_iQlt.js";
import "./enrollmentApi-DJDBxQt6.js";
import "./metaPixel-C_Hbs_hE.js";
import "./index-Db-Ojao2.js";
import "./proxy-BKgBDLzu.js";
import "./arrow-right-DaRs7QIu.js";
import "./phone-CV6H2nFG.js";
import "./users-kSLZckgQ.js";
import "./lightbulb-6umB6Mq4.js";
import "./workflow-CGsY0ZqG.js";
import "./rocket-BTR2g5V7.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-D872L_4j.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-BP07X43_.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-BIIBw_En.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14,3]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-4mlI94w3.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-ByNaWEZK.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-d_sypORp.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-CxysBmqU.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
