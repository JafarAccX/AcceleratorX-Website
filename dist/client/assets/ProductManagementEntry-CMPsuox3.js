const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-BQGoefWv.js","assets/main-DVDzlx-0.js","assets/main-Ctc2Wiva.css","assets/proxy-D2c8tzA2.js","assets/award-BXc5jeR6.js","assets/check-circle-_fuxSqBq.js","assets/LearningJourneyEIE-Ccm6n3-D.js","assets/BenefitsGridEIE-DZ_AxN82.js","assets/trophy-BnWybYyo.js","assets/users-CECpohsr.js","assets/target-CLG7ix3N.js","assets/book-open-6jfW4xmj.js","assets/star-D7GVpA89.js","assets/brain-CYoupxkG.js","assets/trending-up-D_3gsonX.js","assets/MentorsEIE-D5F-TOgV.js","assets/constants-C0Rc_o-P.js","assets/linkedin-CR5nIh6K.js","assets/SkillsAndToolsEIE-5Ic_rYm1.js","assets/index-DXNQdcg1.js","assets/PricingEIE-_bcD4HO7.js","assets/EnrollmentModal-B-ncPKyk.js","assets/enrollmentApi-DcxRk6UX.js","assets/metaPixel-DYt_E5BE.js","assets/check-516-pdnv.js","assets/FAQEIE-CvtDV4bG.js","assets/minus-DyqWClWm.js","assets/plus-Deem9Z25.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DVDzlx-0.js";
import ProgramHeroEIE from "./ProgamHeroEIE-DCwhfZXt.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-DMANOsct.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DXOCQuDZ.js";
import { S as StickyBookNav } from "./StickyBookNav-CH34erZU.js";
import "./EnrollmentModal-B-ncPKyk.js";
import "./enrollmentApi-DcxRk6UX.js";
import "./metaPixel-DYt_E5BE.js";
import "./index-DXNQdcg1.js";
import "./proxy-D2c8tzA2.js";
import "./arrow-right-CV6wIZha.js";
import "./phone-UMgwaPF3.js";
import "./users-CECpohsr.js";
import "./lightbulb-BHxrNg2a.js";
import "./workflow-DNVA0Dwl.js";
import "./rocket-C_xp1WrD.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-BQGoefWv.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Ccm6n3-D.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DZ_AxN82.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-D5F-TOgV.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-5Ic_rYm1.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-_bcD4HO7.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-CvtDV4bG.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
