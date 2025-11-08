const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-C5F-Iljc.js","assets/main-CVqzsEIE.js","assets/main-BLt5Qm9-.css","assets/trophy-Wqd8CMxS.js","assets/users-BH-lI_0c.js","assets/book-open-CpOTyx9M.js","assets/target-B-pd1wNQ.js","assets/star-BDa0cscE.js","assets/FAQEIE-dgAd_t0o.js","assets/minus-C2h2bMeW.js","assets/plus-Bv2gs0eR.js","assets/LearningJourneyEIE-DygAOUPt.js","assets/MentorsEIE-gi2RL8SY.js","assets/constants-CyrPx8P0.js","assets/linkedin-ri-vlWcK.js","assets/PricingEIE-QluxG6Pp.js","assets/EnrollmentModal-DWZRh2FR.js","assets/enrollmentApi-R0FC2M25.js","assets/metaPixel-B8wA48qp.js","assets/check-CMQx7wIQ.js","assets/ProgamHeroEIE-DWfThrEO.js","assets/arrow-right-CCw5MLvi.js","assets/phone-DaVQo9n0.js","assets/ProgramCertificateEIE-C5GULl44.js","assets/award-mzo13GUK.js","assets/check-circle-DY4vjFt3.js","assets/ProgramHighlightsEIE-DvislMkK.js","assets/lightbulb-DxHu1r4G.js","assets/workflow-BQCZaKOh.js","assets/rocket-CrKWqC2Q.js","assets/SkillsAndToolsEIE-BYjpSKq4.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CVqzsEIE.js";
import { H as HeaderEIE } from "./HeaderEIE-CKUeQuY3.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DbnaKugh.js";
import { S as StickyBookNav } from "./StickyBookNav-COaAOV-p.js";
import "./EnrollmentModal-DWZRh2FR.js";
import "./enrollmentApi-R0FC2M25.js";
import "./metaPixel-B8wA48qp.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-C5F-Iljc.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-dgAd_t0o.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DygAOUPt.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-gi2RL8SY.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-QluxG6Pp.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-DWfThrEO.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-C5GULl44.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-DvislMkK.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BYjpSKq4.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
