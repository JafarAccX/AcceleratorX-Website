const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-DPcr27cu.js","assets/main-B4fKdkON.js","assets/main-g1H-mEfk.css","assets/award-CtgR1uZf.js","assets/check-circle-CexJ8qGh.js","assets/LearningJourneyEIE-D2cnuMGZ.js","assets/BenefitsGridEIE-CHroVtq1.js","assets/trophy-DZzzH7Wk.js","assets/users-CHx2807d.js","assets/target-CPA20l6x.js","assets/book-open-CHttNh5C.js","assets/star-B-BhOA5y.js","assets/brain-D5H9Du8E.js","assets/trending-up-BfWQJZEU.js","assets/MentorsEIE-YFLEs7XY.js","assets/constants-C0Rc_o-P.js","assets/linkedin-BOU-1yij.js","assets/SkillsAndToolsEIE-rbz4HzdW.js","assets/PricingEIE-BDCYVVvE.js","assets/EnrollmentModal-D2m01WdS.js","assets/enrollmentApi-B1jTu0aM.js","assets/metaPixel-lWKDDURB.js","assets/check-ClqbqJlj.js","assets/FAQEIE-eyxue64H.js","assets/minus-CxzWJzbh.js","assets/plus-Bgw7Nw76.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-B4fKdkON.js";
import ProgramHeroEIE from "./ProgamHeroEIE-3nRL6teG.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-k3odIG2W.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-ZjjJ3rsC.js";
import { S as StickyBookNav } from "./StickyBookNav-CFVDA99D.js";
import "./EnrollmentModal-D2m01WdS.js";
import "./enrollmentApi-B1jTu0aM.js";
import "./metaPixel-lWKDDURB.js";
import "./arrow-right-B74--tAJ.js";
import "./phone-D8fPWgPw.js";
import "./users-CHx2807d.js";
import "./lightbulb-ByZUhW7j.js";
import "./workflow-Cu3rnEws.js";
import "./rocket-BkfYvDoV.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DPcr27cu.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-D2cnuMGZ.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-CHroVtq1.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11,12,13]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-YFLEs7XY.js"), true ? __vite__mapDeps([14,1,2,15,8,16]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-rbz4HzdW.js"), true ? __vite__mapDeps([17,1,2,15]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-BDCYVVvE.js"), true ? __vite__mapDeps([18,1,2,19,20,21,22]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-eyxue64H.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
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
