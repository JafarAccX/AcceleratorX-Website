const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CaJSrK3a.js","assets/main-CSwsI03w.js","assets/main-NGHnJCuZ.css","assets/award-CJ5C-crf.js","assets/check-circle-Kk5YVDfQ.js","assets/LearningJourneyEIE-C4Z7FqIS.js","assets/BenefitsGridEIE-BYJ6Gwu5.js","assets/trophy-Dbiv3mxc.js","assets/users-BLdnyJs-.js","assets/book-open-CmcHGxIv.js","assets/target-0HH9S85M.js","assets/star-GrNm9D2i.js","assets/MentorsEIE-7-95DF4O.js","assets/constants-CyrPx8P0.js","assets/linkedin-BP0QyKV_.js","assets/SkillsAndToolsEIE-C9PslSRv.js","assets/PricingEIE-ClLWpbwB.js","assets/EnrollmentModal-68jSegjg.js","assets/enrollmentApi-DWbIXGMt.js","assets/metaPixel-DG5N3ym5.js","assets/check-Cq2SDlxO.js","assets/FAQEIE-ByrDnSgf.js","assets/minus-Pi03c0h1.js","assets/plus-BeT8s6Dr.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CSwsI03w.js";
import ProgramHeroEIE from "./ProgamHeroEIE-CR0gbPxv.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-DYQ8hKQb.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-C6_6viQe.js";
import { S as StickyBookNav } from "./StickyBookNav-ThxxFjQB.js";
import "./EnrollmentModal-68jSegjg.js";
import "./enrollmentApi-DWbIXGMt.js";
import "./metaPixel-DG5N3ym5.js";
import "./arrow-right-0RHzg7d3.js";
import "./phone-BFh9LS4A.js";
import "./users-BLdnyJs-.js";
import "./lightbulb-DD4jUs_a.js";
import "./workflow-Dgug2bML.js";
import "./rocket-DFa8_5Xk.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CaJSrK3a.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-C4Z7FqIS.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-BYJ6Gwu5.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-7-95DF4O.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-C9PslSRv.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-ClLWpbwB.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-ByrDnSgf.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
