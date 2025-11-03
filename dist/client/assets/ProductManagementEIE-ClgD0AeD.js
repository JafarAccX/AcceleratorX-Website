const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-B6-1yxo_.js","assets/main-l43z1zsL.js","assets/main-NGHnJCuZ.css","assets/trophy-DFU38nOg.js","assets/users-CoKYCqX8.js","assets/book-open-BZiNvd_A.js","assets/target-kQfyznLB.js","assets/star-B9Tapdo6.js","assets/FAQEIE-LT7OXxkt.js","assets/minus-BCBuOFwZ.js","assets/plus-Bfk6CeD4.js","assets/LearningJourneyEIE-BBVYWLP9.js","assets/MentorsEIE-CckD-s57.js","assets/constants-CyrPx8P0.js","assets/linkedin-Bmj0NTMT.js","assets/PricingEIE-C_MTiLen.js","assets/EnrollmentModal-Bre1amWV.js","assets/enrollmentApi-D66ZDdou.js","assets/metaPixel-BOQzoYP4.js","assets/check-D1b1134B.js","assets/ProgamHeroEIE-C3FdUJ6h.js","assets/arrow-right-ZoBjQYJV.js","assets/phone-BP0NJiJe.js","assets/ProgramCertificateEIE-B4IP9WbV.js","assets/award-CRug66oc.js","assets/check-circle-DMfldDGq.js","assets/ProgramHighlightsEIE-CPteaypi.js","assets/lightbulb-gTQDxgHU.js","assets/workflow-DiLHHlQV.js","assets/rocket-CzNN5zB2.js","assets/SkillsAndToolsEIE-DKmN1Q9L.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-l43z1zsL.js";
import { H as HeaderEIE } from "./HeaderEIE-8-_8v567.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-ZctLAPNM.js";
import { S as StickyBookNav } from "./StickyBookNav-Cu6mfKeE.js";
import "./EnrollmentModal-Bre1amWV.js";
import "./enrollmentApi-D66ZDdou.js";
import "./metaPixel-BOQzoYP4.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-B6-1yxo_.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-LT7OXxkt.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-BBVYWLP9.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CckD-s57.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-C_MTiLen.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-C3FdUJ6h.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-B4IP9WbV.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-CPteaypi.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DKmN1Q9L.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
