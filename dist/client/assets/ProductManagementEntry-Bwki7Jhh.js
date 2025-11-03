const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-B4IP9WbV.js","assets/main-l43z1zsL.js","assets/main-NGHnJCuZ.css","assets/award-CRug66oc.js","assets/check-circle-DMfldDGq.js","assets/LearningJourneyEIE-BBVYWLP9.js","assets/BenefitsGridEIE-B6-1yxo_.js","assets/trophy-DFU38nOg.js","assets/users-CoKYCqX8.js","assets/book-open-BZiNvd_A.js","assets/target-kQfyznLB.js","assets/star-B9Tapdo6.js","assets/MentorsEIE-CckD-s57.js","assets/constants-CyrPx8P0.js","assets/linkedin-Bmj0NTMT.js","assets/SkillsAndToolsEIE-DKmN1Q9L.js","assets/PricingEIE-C_MTiLen.js","assets/EnrollmentModal-Bre1amWV.js","assets/enrollmentApi-D66ZDdou.js","assets/metaPixel-BOQzoYP4.js","assets/check-D1b1134B.js","assets/FAQEIE-LT7OXxkt.js","assets/minus-BCBuOFwZ.js","assets/plus-Bfk6CeD4.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-l43z1zsL.js";
import ProgramHeroEIE from "./ProgamHeroEIE-C3FdUJ6h.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-CPteaypi.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-ZctLAPNM.js";
import { S as StickyBookNav } from "./StickyBookNav-Cu6mfKeE.js";
import "./EnrollmentModal-Bre1amWV.js";
import "./enrollmentApi-D66ZDdou.js";
import "./metaPixel-BOQzoYP4.js";
import "./arrow-right-ZoBjQYJV.js";
import "./phone-BP0NJiJe.js";
import "./users-CoKYCqX8.js";
import "./lightbulb-gTQDxgHU.js";
import "./workflow-DiLHHlQV.js";
import "./rocket-CzNN5zB2.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-B4IP9WbV.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-BBVYWLP9.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-B6-1yxo_.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CckD-s57.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DKmN1Q9L.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-C_MTiLen.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-LT7OXxkt.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
