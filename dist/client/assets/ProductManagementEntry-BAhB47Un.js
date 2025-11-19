const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-BUOILHRG.js","assets/main-CP32HAa4.js","assets/main-nEWqamtX.css","assets/award-Ds2F-mRP.js","assets/check-circle-BTSFZBM-.js","assets/LearningJourneyEIE-CD2Hxwbz.js","assets/BenefitsGridEIE-BsvlBe60.js","assets/trophy-StYYEAOr.js","assets/users-C-jYIDu-.js","assets/book-open-GDRY1sQE.js","assets/target-BqRCPlqb.js","assets/star-Bc-E5egq.js","assets/MentorsEIE-B8DvsKVj.js","assets/constants-DXOhk-SF.js","assets/linkedin-B989GTHu.js","assets/SkillsAndToolsEIE-ZhZue7_d.js","assets/PricingEIE-CfM39tmO.js","assets/EnrollmentModal-R7uNzrCl.js","assets/enrollmentApi-l2DtmGNq.js","assets/metaPixel-D3cWzwgB.js","assets/check-Cn1bWz4x.js","assets/FAQEIE-CJUampeZ.js","assets/minus-iPc9HAry.js","assets/plus-BTcuHepy.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CP32HAa4.js";
import ProgramHeroEIE from "./ProgamHeroEIE-Dqxo1Iip.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-CMcOavTB.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BdS1MDHC.js";
import { S as StickyBookNav } from "./StickyBookNav-DylqSc8N.js";
import "./EnrollmentModal-R7uNzrCl.js";
import "./enrollmentApi-l2DtmGNq.js";
import "./metaPixel-D3cWzwgB.js";
import "./arrow-right-DHms-NF2.js";
import "./phone-CnwxRs2j.js";
import "./users-C-jYIDu-.js";
import "./lightbulb-BSC3ojiD.js";
import "./workflow-BH4fLN-Z.js";
import "./rocket-cZSfE2Dx.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-BUOILHRG.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-CD2Hxwbz.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-BsvlBe60.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-B8DvsKVj.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-ZhZue7_d.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CfM39tmO.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-CJUampeZ.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
