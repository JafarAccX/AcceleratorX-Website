const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-BmFBuao2.js","assets/main-Dasux6OQ.js","assets/main-CnF9mUWs.css","assets/proxy-CFfpntJW.js","assets/award-CqQpBagm.js","assets/check-circle-BI96djN3.js","assets/LearningJourneyEIE-BPGdHsEX.js","assets/BenefitsGridEIE-COFZ2QzZ.js","assets/trophy-D0toq9wn.js","assets/users-B0ajP2F_.js","assets/target-CZo_IhHq.js","assets/book-open-42OMXRon.js","assets/star-DwMZFhGX.js","assets/brain-DllVmLfi.js","assets/trending-up-CgGbdxlI.js","assets/MentorsEIE-DUadSt5h.js","assets/constants-C0Rc_o-P.js","assets/linkedin-DuvTkE0G.js","assets/SkillsAndToolsEIE-DP_DK-Re.js","assets/index-DO91dz0e.js","assets/PricingEIE-DsvHpWq0.js","assets/EnrollmentModal-CGchTRmf.js","assets/enrollmentApi-CLrGii4e.js","assets/metaPixel-BuAwezsB.js","assets/check-DtJyLdsf.js","assets/FAQEIE-Dina16Bq.js","assets/minus-BYyqK6Sf.js","assets/plus-BvY9Aq2b.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Dasux6OQ.js";
import ProgramHeroEIE from "./ProgamHeroEIE-D7hn0ygC.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-DbTFcjMd.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-C0wz6QUR.js";
import { S as StickyBookNav } from "./StickyBookNav-5c0LWHdu.js";
import "./EnrollmentModal-CGchTRmf.js";
import "./enrollmentApi-CLrGii4e.js";
import "./metaPixel-BuAwezsB.js";
import "./index-DO91dz0e.js";
import "./proxy-CFfpntJW.js";
import "./arrow-right-CyDFrp5Q.js";
import "./phone-DAB_XvGM.js";
import "./users-B0ajP2F_.js";
import "./lightbulb-DY6vaAjR.js";
import "./workflow-X0h3L_3e.js";
import "./rocket-BTxVmk5i.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-BmFBuao2.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-BPGdHsEX.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-COFZ2QzZ.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-DUadSt5h.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DP_DK-Re.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DsvHpWq0.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-Dina16Bq.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
