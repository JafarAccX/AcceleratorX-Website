const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-GFku6MbC.js","assets/main-qWvHMlpM.js","assets/main-7GdIFNw8.css","assets/proxy-CjacfDEi.js","assets/award-9rk5K1Je.js","assets/check-circle-BkV74XYZ.js","assets/LearningJourneyEIE-BWhZqRiF.js","assets/BenefitsGridEIE-BWVF2LVt.js","assets/trophy-Cq1ESI1x.js","assets/users-B-IbMIwJ.js","assets/target-Da_PIYB6.js","assets/book-open-Cuyam3rq.js","assets/star-C1OrgCx5.js","assets/brain-C5DUYIYK.js","assets/trending-up-BWafNWs2.js","assets/MentorsEIE-CrNcv3K3.js","assets/constants-C0Rc_o-P.js","assets/linkedin-QDjRf_Zb.js","assets/SkillsAndToolsEIE-DuTVHmM_.js","assets/index-BxRq7_T9.js","assets/PricingEIE-DrMdm8hp.js","assets/EnrollmentModal-Dpjkiyj0.js","assets/enrollmentApi-GL8zyR1h.js","assets/metaPixel-BoiM50Kb.js","assets/check-BqZ4dFYa.js","assets/FAQEIE-Dp6ULE-l.js","assets/minus-a2FmLAyE.js","assets/plus-C81nJcp7.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-qWvHMlpM.js";
import ProgramHeroEIE from "./ProgamHeroEIE-CzpvrLMS.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-Bnjynaqs.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DvezlriM.js";
import { S as StickyBookNav } from "./StickyBookNav-BxFVPSNS.js";
import "./EnrollmentModal-Dpjkiyj0.js";
import "./enrollmentApi-GL8zyR1h.js";
import "./metaPixel-BoiM50Kb.js";
import "./index-BxRq7_T9.js";
import "./proxy-CjacfDEi.js";
import "./arrow-right-Ck9WQLvf.js";
import "./phone-DlS7G-F7.js";
import "./users-B-IbMIwJ.js";
import "./lightbulb-UyqL5I1z.js";
import "./workflow-5p5NjPEW.js";
import "./rocket-Bfd6PFmM.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-GFku6MbC.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-BWhZqRiF.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-BWVF2LVt.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CrNcv3K3.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DuTVHmM_.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DrMdm8hp.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-Dp6ULE-l.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
