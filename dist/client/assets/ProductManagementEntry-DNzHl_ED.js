const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-1oEdCJiD.js","assets/main-CQMtEg9v.js","assets/main-Ctc2Wiva.css","assets/proxy-DMpmILPN.js","assets/award-DXNUDfn2.js","assets/check-circle-DIGYC_zv.js","assets/LearningJourneyEIE-D78XAeXj.js","assets/BenefitsGridEIE-4lcxzT_v.js","assets/trophy-CPu-EXXU.js","assets/users-CM_hleka.js","assets/target-DOlbiY0l.js","assets/book-open-BZovkPkt.js","assets/star-V3YZE60B.js","assets/brain-HiZvbq09.js","assets/trending-up-BoZY_tra.js","assets/MentorsEIE-CmxgNcEk.js","assets/constants-C0Rc_o-P.js","assets/linkedin-D-q3KUAL.js","assets/SkillsAndToolsEIE-Cdqfhrwn.js","assets/index-CPGWx1Fa.js","assets/PricingEIE-DAfe7-x4.js","assets/EnrollmentModal-fAHxGVX1.js","assets/enrollmentApi-BcjLvQGy.js","assets/metaPixel-CvLHVZuZ.js","assets/check-CRC0sh5d.js","assets/FAQEIE-Clu_SWsp.js","assets/minus-B7QbUCmx.js","assets/plus-DMAATK_W.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CQMtEg9v.js";
import ProgramHeroEIE from "./ProgamHeroEIE-Bp_K4OsT.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-GQNpdOKe.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BOJUHyij.js";
import { S as StickyBookNav } from "./StickyBookNav-B0po998J.js";
import "./EnrollmentModal-fAHxGVX1.js";
import "./enrollmentApi-BcjLvQGy.js";
import "./metaPixel-CvLHVZuZ.js";
import "./index-CPGWx1Fa.js";
import "./proxy-DMpmILPN.js";
import "./arrow-right-EF8ty81W.js";
import "./phone-BEyeE6Hu.js";
import "./users-CM_hleka.js";
import "./lightbulb-Bxq7A4Ad.js";
import "./workflow-CDpiZRZa.js";
import "./rocket-B3mjCzDy.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-1oEdCJiD.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-D78XAeXj.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-4lcxzT_v.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CmxgNcEk.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-Cdqfhrwn.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DAfe7-x4.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-Clu_SWsp.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
