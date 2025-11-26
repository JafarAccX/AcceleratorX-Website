const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CsXSqEeX.js","assets/main-DSLYtVC7.js","assets/main-nEWqamtX.css","assets/award-kf5r-e9b.js","assets/check-circle-Bw3fMMhE.js","assets/LearningJourneyEIE-sS0RkQyI.js","assets/BenefitsGridEIE-rJAGP2KX.js","assets/trophy-CbwMtZId.js","assets/users-fDw_Sc59.js","assets/book-open-BOaXI8bS.js","assets/target-jjA8BJZA.js","assets/star-CgD5Xi9v.js","assets/MentorsEIE-CljbQLSz.js","assets/constants-DXOhk-SF.js","assets/linkedin-T0AwHZod.js","assets/SkillsAndToolsEIE-Mgp2y6qJ.js","assets/PricingEIE-B_ClHZZU.js","assets/EnrollmentModal-D5msJbA_.js","assets/enrollmentApi-B_Bb5JdS.js","assets/metaPixel-DvHKdgLp.js","assets/check-DEpqAI0P.js","assets/FAQEIE-d9OH5MLs.js","assets/minus-mKK3ZQ8x.js","assets/plus-oXNtAB3w.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DSLYtVC7.js";
import ProgramHeroEIE from "./ProgamHeroEIE-sUyXiJlF.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-B57vl9P1.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Bd3IYx81.js";
import { S as StickyBookNav } from "./StickyBookNav-DSGyvqSv.js";
import "./EnrollmentModal-D5msJbA_.js";
import "./enrollmentApi-B_Bb5JdS.js";
import "./metaPixel-DvHKdgLp.js";
import "./arrow-right-CQyK0UD9.js";
import "./phone-DeKpKgU6.js";
import "./users-fDw_Sc59.js";
import "./lightbulb-BFxHDXdC.js";
import "./workflow-C8wehuxr.js";
import "./rocket-5rZ1IuBK.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CsXSqEeX.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-sS0RkQyI.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-rJAGP2KX.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CljbQLSz.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-Mgp2y6qJ.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-B_ClHZZU.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-d9OH5MLs.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
