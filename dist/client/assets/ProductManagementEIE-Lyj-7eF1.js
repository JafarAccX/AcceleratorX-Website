const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-CHroVtq1.js","assets/main-B4fKdkON.js","assets/main-g1H-mEfk.css","assets/trophy-DZzzH7Wk.js","assets/users-CHx2807d.js","assets/target-CPA20l6x.js","assets/book-open-CHttNh5C.js","assets/star-B-BhOA5y.js","assets/brain-D5H9Du8E.js","assets/trending-up-BfWQJZEU.js","assets/FAQEIE-eyxue64H.js","assets/minus-CxzWJzbh.js","assets/plus-Bgw7Nw76.js","assets/LearningJourneyEIE-D2cnuMGZ.js","assets/MentorsEIE-YFLEs7XY.js","assets/constants-C0Rc_o-P.js","assets/linkedin-BOU-1yij.js","assets/PricingEIE-BDCYVVvE.js","assets/EnrollmentModal-D2m01WdS.js","assets/enrollmentApi-B1jTu0aM.js","assets/metaPixel-lWKDDURB.js","assets/check-ClqbqJlj.js","assets/ProgamHeroEIE-3nRL6teG.js","assets/arrow-right-B74--tAJ.js","assets/phone-D8fPWgPw.js","assets/ProgramCertificateEIE-DPcr27cu.js","assets/award-CtgR1uZf.js","assets/check-circle-CexJ8qGh.js","assets/ProgramHighlightsEIE-k3odIG2W.js","assets/lightbulb-ByZUhW7j.js","assets/workflow-Cu3rnEws.js","assets/rocket-BkfYvDoV.js","assets/SkillsAndToolsEIE-rbz4HzdW.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-B4fKdkON.js";
import { H as HeaderEIE } from "./HeaderEIE-BGIJYnt5.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-ZjjJ3rsC.js";
import { S as StickyBookNav } from "./StickyBookNav-CFVDA99D.js";
import "./EnrollmentModal-D2m01WdS.js";
import "./enrollmentApi-B1jTu0aM.js";
import "./metaPixel-lWKDDURB.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-CHroVtq1.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-eyxue64H.js"), true ? __vite__mapDeps([10,1,2,11,12]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-D2cnuMGZ.js"), true ? __vite__mapDeps([13,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-YFLEs7XY.js"), true ? __vite__mapDeps([14,1,2,15,4,16]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-BDCYVVvE.js"), true ? __vite__mapDeps([17,1,2,18,19,20,21]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-3nRL6teG.js"), true ? __vite__mapDeps([22,1,2,18,19,20,23,24,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DPcr27cu.js"), true ? __vite__mapDeps([25,1,2,26,27]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-k3odIG2W.js"), true ? __vite__mapDeps([28,1,2,29,30,31]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-rbz4HzdW.js"), true ? __vite__mapDeps([32,1,2,15]) : void 0));
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
