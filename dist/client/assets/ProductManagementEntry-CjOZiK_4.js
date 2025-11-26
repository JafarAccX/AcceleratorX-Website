const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CgVv8Ijs.js","assets/main-BOGL_qrK.js","assets/main-Ce-Pe5sq.css","assets/award-kMZ11n4X.js","assets/check-circle-BikLQxym.js","assets/LearningJourneyEIE-CHZLsY1P.js","assets/BenefitsGridEIE-Abrt9CCl.js","assets/trophy-DjGJi292.js","assets/users-Q75F72PU.js","assets/book-open-D-1m06eI.js","assets/target-DcuxQLTt.js","assets/star-C4uAaVRj.js","assets/MentorsEIE-DHkDx3Yl.js","assets/constants-DXOhk-SF.js","assets/linkedin-CCgoRmB-.js","assets/SkillsAndToolsEIE-BqNztqTB.js","assets/PricingEIE-C72UWNEw.js","assets/EnrollmentModal-CdUYKDbj.js","assets/enrollmentApi-CLHUpnY0.js","assets/metaPixel-DF1g-LVJ.js","assets/check-C6Mv0tTG.js","assets/FAQEIE-B_rrgAXL.js","assets/minus-CEAdj9Ce.js","assets/plus-BekHrjZ1.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BOGL_qrK.js";
import ProgramHeroEIE from "./ProgamHeroEIE-B9TM4VI9.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-BDeKNpsU.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-mauNdrb7.js";
import { S as StickyBookNav } from "./StickyBookNav-Xl0g2nrx.js";
import "./EnrollmentModal-CdUYKDbj.js";
import "./enrollmentApi-CLHUpnY0.js";
import "./metaPixel-DF1g-LVJ.js";
import "./arrow-right-CvJNNVH_.js";
import "./phone-BlMVjP85.js";
import "./users-Q75F72PU.js";
import "./lightbulb-C3cc50B4.js";
import "./workflow-C4Y9-sIO.js";
import "./rocket-Ca09rEev.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CgVv8Ijs.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-CHZLsY1P.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-Abrt9CCl.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-DHkDx3Yl.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BqNztqTB.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-C72UWNEw.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-B_rrgAXL.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
