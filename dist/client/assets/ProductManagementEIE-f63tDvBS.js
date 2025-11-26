const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-Abrt9CCl.js","assets/main-BOGL_qrK.js","assets/main-Ce-Pe5sq.css","assets/trophy-DjGJi292.js","assets/users-Q75F72PU.js","assets/book-open-D-1m06eI.js","assets/target-DcuxQLTt.js","assets/star-C4uAaVRj.js","assets/FAQEIE-B_rrgAXL.js","assets/minus-CEAdj9Ce.js","assets/plus-BekHrjZ1.js","assets/LearningJourneyEIE-CHZLsY1P.js","assets/MentorsEIE-DHkDx3Yl.js","assets/constants-DXOhk-SF.js","assets/linkedin-CCgoRmB-.js","assets/PricingEIE-C72UWNEw.js","assets/EnrollmentModal-CdUYKDbj.js","assets/enrollmentApi-CLHUpnY0.js","assets/metaPixel-DF1g-LVJ.js","assets/check-C6Mv0tTG.js","assets/ProgamHeroEIE-B9TM4VI9.js","assets/arrow-right-CvJNNVH_.js","assets/phone-BlMVjP85.js","assets/ProgramCertificateEIE-CgVv8Ijs.js","assets/award-kMZ11n4X.js","assets/check-circle-BikLQxym.js","assets/ProgramHighlightsEIE-BDeKNpsU.js","assets/lightbulb-C3cc50B4.js","assets/workflow-C4Y9-sIO.js","assets/rocket-Ca09rEev.js","assets/SkillsAndToolsEIE-BqNztqTB.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BOGL_qrK.js";
import { H as HeaderEIE } from "./HeaderEIE-DrIyw910.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-mauNdrb7.js";
import { S as StickyBookNav } from "./StickyBookNav-Xl0g2nrx.js";
import "./EnrollmentModal-CdUYKDbj.js";
import "./enrollmentApi-CLHUpnY0.js";
import "./metaPixel-DF1g-LVJ.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-Abrt9CCl.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-B_rrgAXL.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-CHZLsY1P.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-DHkDx3Yl.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-C72UWNEw.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-B9TM4VI9.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CgVv8Ijs.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-BDeKNpsU.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BqNztqTB.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
