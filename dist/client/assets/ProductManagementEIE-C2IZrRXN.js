const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-rJAGP2KX.js","assets/main-DSLYtVC7.js","assets/main-nEWqamtX.css","assets/trophy-CbwMtZId.js","assets/users-fDw_Sc59.js","assets/book-open-BOaXI8bS.js","assets/target-jjA8BJZA.js","assets/star-CgD5Xi9v.js","assets/FAQEIE-d9OH5MLs.js","assets/minus-mKK3ZQ8x.js","assets/plus-oXNtAB3w.js","assets/LearningJourneyEIE-sS0RkQyI.js","assets/MentorsEIE-CljbQLSz.js","assets/constants-DXOhk-SF.js","assets/linkedin-T0AwHZod.js","assets/PricingEIE-B_ClHZZU.js","assets/EnrollmentModal-D5msJbA_.js","assets/enrollmentApi-B_Bb5JdS.js","assets/metaPixel-DvHKdgLp.js","assets/check-DEpqAI0P.js","assets/ProgamHeroEIE-sUyXiJlF.js","assets/arrow-right-CQyK0UD9.js","assets/phone-DeKpKgU6.js","assets/ProgramCertificateEIE-CsXSqEeX.js","assets/award-kf5r-e9b.js","assets/check-circle-Bw3fMMhE.js","assets/ProgramHighlightsEIE-B57vl9P1.js","assets/lightbulb-BFxHDXdC.js","assets/workflow-C8wehuxr.js","assets/rocket-5rZ1IuBK.js","assets/SkillsAndToolsEIE-Mgp2y6qJ.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DSLYtVC7.js";
import { H as HeaderEIE } from "./HeaderEIE-C9p-97oA.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Bd3IYx81.js";
import { S as StickyBookNav } from "./StickyBookNav-DSGyvqSv.js";
import "./EnrollmentModal-D5msJbA_.js";
import "./enrollmentApi-B_Bb5JdS.js";
import "./metaPixel-DvHKdgLp.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-rJAGP2KX.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-d9OH5MLs.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-sS0RkQyI.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CljbQLSz.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-B_ClHZZU.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-sUyXiJlF.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CsXSqEeX.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-B57vl9P1.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-Mgp2y6qJ.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
