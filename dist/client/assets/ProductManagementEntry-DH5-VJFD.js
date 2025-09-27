const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-BuUnq3Q8.js","assets/main-Bxo1x8yy.js","assets/main-Ctc2Wiva.css","assets/proxy-DxTfwLxA.js","assets/award-C9TuBIdU.js","assets/check-circle-DZ10q9D9.js","assets/LearningJourneyEIE-CPKXgWoT.js","assets/BenefitsGridEIE-DOz8I2Pw.js","assets/trophy-B4XQUZ8M.js","assets/users-DlSbkj3O.js","assets/target--3oSttgq.js","assets/book-open-D4d-RC0H.js","assets/star-Cvuqb55m.js","assets/brain-DbdwVH4a.js","assets/trending-up-LSgc8AR6.js","assets/MentorsEIE-HV6YH5SL.js","assets/constants-C0Rc_o-P.js","assets/linkedin-CbEvAP-m.js","assets/SkillsAndToolsEIE-C5XyOUCN.js","assets/index-Bz74Jjsn.js","assets/PricingEIE-B664n5KH.js","assets/EnrollmentModal-CKojwu56.js","assets/enrollmentApi-BHSFbNU_.js","assets/metaPixel-D0RJkYnI.js","assets/check-C7v3Fn92.js","assets/FAQEIE-vclMOwef.js","assets/minus-DVdzw0gd.js","assets/plus-CyYq2mbB.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bxo1x8yy.js";
import ProgramHeroEIE from "./ProgamHeroEIE-C6Zm3UU6.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-DB3RLe3y.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Xh5TZw_d.js";
import { S as StickyBookNav } from "./StickyBookNav-a2hQ2lw4.js";
import "./EnrollmentModal-CKojwu56.js";
import "./enrollmentApi-BHSFbNU_.js";
import "./metaPixel-D0RJkYnI.js";
import "./index-Bz74Jjsn.js";
import "./proxy-DxTfwLxA.js";
import "./arrow-right-D5SSA7m-.js";
import "./phone-4yH01rhx.js";
import "./users-DlSbkj3O.js";
import "./lightbulb-DQWjX15H.js";
import "./workflow-CFRDbO4y.js";
import "./rocket-DtvxbWOE.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-BuUnq3Q8.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-CPKXgWoT.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DOz8I2Pw.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-HV6YH5SL.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-C5XyOUCN.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-B664n5KH.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-vclMOwef.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
