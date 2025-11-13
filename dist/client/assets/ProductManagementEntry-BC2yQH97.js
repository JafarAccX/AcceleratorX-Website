const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CY9k5-0J.js","assets/main-apVAGIEz.js","assets/main-nEWqamtX.css","assets/award-C89kDitO.js","assets/check-circle-5GAUr0e-.js","assets/LearningJourneyEIE-Bt61iwnd.js","assets/BenefitsGridEIE-D5w-dg_w.js","assets/trophy-DSf5b7Yk.js","assets/users-yP3zdLGz.js","assets/book-open-ChhiEV4e.js","assets/target-CpH3DgRF.js","assets/star-H44Llra3.js","assets/MentorsEIE-CwpiFIK7.js","assets/constants-DXOhk-SF.js","assets/linkedin-D_XKvU6-.js","assets/SkillsAndToolsEIE-DQT59Sv7.js","assets/PricingEIE-0X5uOzex.js","assets/EnrollmentModal-NBJZFvyB.js","assets/enrollmentApi-BXTrkYJe.js","assets/metaPixel-WRohloNB.js","assets/check-CQi4ZV_P.js","assets/FAQEIE-BuuzBzSq.js","assets/minus-CfYX6uGo.js","assets/plus-DaSx7QnW.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-apVAGIEz.js";
import ProgramHeroEIE from "./ProgamHeroEIE-C4SO5qkA.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-Cmg8Zehk.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Dvr1ACL7.js";
import { S as StickyBookNav } from "./StickyBookNav-DGL2sQoB.js";
import "./EnrollmentModal-NBJZFvyB.js";
import "./enrollmentApi-BXTrkYJe.js";
import "./metaPixel-WRohloNB.js";
import "./arrow-right-QTJ55GDf.js";
import "./phone-CPIBj8jk.js";
import "./users-yP3zdLGz.js";
import "./lightbulb-CBv2WZIk.js";
import "./workflow-B0SUN83Y.js";
import "./rocket-CqPZNJC7.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CY9k5-0J.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Bt61iwnd.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-D5w-dg_w.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CwpiFIK7.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DQT59Sv7.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-0X5uOzex.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BuuzBzSq.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
