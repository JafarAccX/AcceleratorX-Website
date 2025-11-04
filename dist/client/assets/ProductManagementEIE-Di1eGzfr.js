const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-BYJ6Gwu5.js","assets/main-CSwsI03w.js","assets/main-NGHnJCuZ.css","assets/trophy-Dbiv3mxc.js","assets/users-BLdnyJs-.js","assets/book-open-CmcHGxIv.js","assets/target-0HH9S85M.js","assets/star-GrNm9D2i.js","assets/FAQEIE-ByrDnSgf.js","assets/minus-Pi03c0h1.js","assets/plus-BeT8s6Dr.js","assets/LearningJourneyEIE-C4Z7FqIS.js","assets/MentorsEIE-7-95DF4O.js","assets/constants-CyrPx8P0.js","assets/linkedin-BP0QyKV_.js","assets/PricingEIE-ClLWpbwB.js","assets/EnrollmentModal-68jSegjg.js","assets/enrollmentApi-DWbIXGMt.js","assets/metaPixel-DG5N3ym5.js","assets/check-Cq2SDlxO.js","assets/ProgamHeroEIE-CR0gbPxv.js","assets/arrow-right-0RHzg7d3.js","assets/phone-BFh9LS4A.js","assets/ProgramCertificateEIE-CaJSrK3a.js","assets/award-CJ5C-crf.js","assets/check-circle-Kk5YVDfQ.js","assets/ProgramHighlightsEIE-DYQ8hKQb.js","assets/lightbulb-DD4jUs_a.js","assets/workflow-Dgug2bML.js","assets/rocket-DFa8_5Xk.js","assets/SkillsAndToolsEIE-C9PslSRv.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CSwsI03w.js";
import { H as HeaderEIE } from "./HeaderEIE-CdKtrF_S.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-C6_6viQe.js";
import { S as StickyBookNav } from "./StickyBookNav-ThxxFjQB.js";
import "./EnrollmentModal-68jSegjg.js";
import "./enrollmentApi-DWbIXGMt.js";
import "./metaPixel-DG5N3ym5.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-BYJ6Gwu5.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-ByrDnSgf.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-C4Z7FqIS.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-7-95DF4O.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-ClLWpbwB.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-CR0gbPxv.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CaJSrK3a.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-DYQ8hKQb.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-C9PslSRv.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
