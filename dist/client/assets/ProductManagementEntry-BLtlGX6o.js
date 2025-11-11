const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-JXmpg-Li.js","assets/main-DoR0yzTf.js","assets/main-BA_X0d1R.css","assets/award-RXW5-KxM.js","assets/check-circle-DB9LJn-L.js","assets/LearningJourneyEIE-DopQlnN4.js","assets/BenefitsGridEIE-lgIrW0rk.js","assets/trophy-2Q29tutL.js","assets/users-B-O3Tmh3.js","assets/book-open-CfMqC8ry.js","assets/target-SCJSZVIU.js","assets/star-61Hio32f.js","assets/MentorsEIE-D-sNqOG4.js","assets/constants-CyrPx8P0.js","assets/linkedin-DBLsHGnQ.js","assets/SkillsAndToolsEIE-DUijr-av.js","assets/PricingEIE-BvnoF7YQ.js","assets/EnrollmentModal-BJFCvW-k.js","assets/enrollmentApi-Czu3zfpV.js","assets/metaPixel-Cn55y1S8.js","assets/check-Ae_3x1df.js","assets/FAQEIE-o8CxgMBV.js","assets/minus-CXFzKOnw.js","assets/plus-8RoXFRM2.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DoR0yzTf.js";
import ProgramHeroEIE from "./ProgamHeroEIE-C2qGWFhR.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-Doc4ojrq.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CWqGdazN.js";
import { S as StickyBookNav } from "./StickyBookNav-Chu-FGM8.js";
import "./EnrollmentModal-BJFCvW-k.js";
import "./enrollmentApi-Czu3zfpV.js";
import "./metaPixel-Cn55y1S8.js";
import "./arrow-right-CYvEolre.js";
import "./phone-CbAPgBAh.js";
import "./users-B-O3Tmh3.js";
import "./lightbulb-BfqRD82z.js";
import "./workflow-DR1C6Dbo.js";
import "./rocket-Bb_JXPql.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-JXmpg-Li.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DopQlnN4.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-lgIrW0rk.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-D-sNqOG4.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DUijr-av.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-BvnoF7YQ.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-o8CxgMBV.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
