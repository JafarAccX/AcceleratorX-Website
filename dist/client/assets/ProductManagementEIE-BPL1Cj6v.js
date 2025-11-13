const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-D5w-dg_w.js","assets/main-apVAGIEz.js","assets/main-nEWqamtX.css","assets/trophy-DSf5b7Yk.js","assets/users-yP3zdLGz.js","assets/book-open-ChhiEV4e.js","assets/target-CpH3DgRF.js","assets/star-H44Llra3.js","assets/FAQEIE-BuuzBzSq.js","assets/minus-CfYX6uGo.js","assets/plus-DaSx7QnW.js","assets/LearningJourneyEIE-Bt61iwnd.js","assets/MentorsEIE-CwpiFIK7.js","assets/constants-DXOhk-SF.js","assets/linkedin-D_XKvU6-.js","assets/PricingEIE-0X5uOzex.js","assets/EnrollmentModal-NBJZFvyB.js","assets/enrollmentApi-BXTrkYJe.js","assets/metaPixel-WRohloNB.js","assets/check-CQi4ZV_P.js","assets/ProgamHeroEIE-C4SO5qkA.js","assets/arrow-right-QTJ55GDf.js","assets/phone-CPIBj8jk.js","assets/ProgramCertificateEIE-CY9k5-0J.js","assets/award-C89kDitO.js","assets/check-circle-5GAUr0e-.js","assets/ProgramHighlightsEIE-Cmg8Zehk.js","assets/lightbulb-CBv2WZIk.js","assets/workflow-B0SUN83Y.js","assets/rocket-CqPZNJC7.js","assets/SkillsAndToolsEIE-DQT59Sv7.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-apVAGIEz.js";
import { H as HeaderEIE } from "./HeaderEIE-BcYuUB20.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Dvr1ACL7.js";
import { S as StickyBookNav } from "./StickyBookNav-DGL2sQoB.js";
import "./EnrollmentModal-NBJZFvyB.js";
import "./enrollmentApi-BXTrkYJe.js";
import "./metaPixel-WRohloNB.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-D5w-dg_w.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BuuzBzSq.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Bt61iwnd.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CwpiFIK7.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-0X5uOzex.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-C4SO5qkA.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CY9k5-0J.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-Cmg8Zehk.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DQT59Sv7.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
