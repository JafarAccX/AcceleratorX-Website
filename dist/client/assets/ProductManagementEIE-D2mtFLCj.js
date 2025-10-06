const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-frU5BEw1.js","assets/main-CQZRSQfQ.js","assets/main-ClQXKXUm.css","assets/trophy-BA7Z0DlJ.js","assets/users-7HEfShSi.js","assets/target-C5rFwECh.js","assets/book-open-D5GraKyV.js","assets/star-BSrzaDRl.js","assets/brain-BCL-JS2Q.js","assets/trending-up-EA7ntbVb.js","assets/FAQEIE-Bi_i13Dk.js","assets/minus-ZrZX3K6y.js","assets/plus-Df1uNmHq.js","assets/LearningJourneyEIE-CbyqfL6e.js","assets/MentorsEIE-B2PUHgNk.js","assets/constants-C0Rc_o-P.js","assets/linkedin-Sv2hBCqD.js","assets/PricingEIE-DFygPWcc.js","assets/EnrollmentModal-kIl_IML_.js","assets/enrollmentApi-JK_WiLhq.js","assets/metaPixel-BPrv2gAs.js","assets/check-BF5gEgUV.js","assets/ProgamHeroEIE-BjRnyrfQ.js","assets/arrow-right-D3aRQQIV.js","assets/phone-DH8w0QwT.js","assets/ProgramCertificateEIE-BT4bAC3d.js","assets/award-pSUhyFs0.js","assets/check-circle-C2udps7u.js","assets/ProgramHighlightsEIE-CruW4WMr.js","assets/lightbulb-CSO9Vg3G.js","assets/workflow-DI6kzZyG.js","assets/rocket-o1zTBCUr.js","assets/SkillsAndToolsEIE-DKUsNsRx.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CQZRSQfQ.js";
import { H as HeaderEIE } from "./HeaderEIE-B8F1_5G-.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CWans2Od.js";
import { S as StickyBookNav } from "./StickyBookNav-UmBA8p9O.js";
import "./EnrollmentModal-kIl_IML_.js";
import "./enrollmentApi-JK_WiLhq.js";
import "./metaPixel-BPrv2gAs.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-frU5BEw1.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-Bi_i13Dk.js"), true ? __vite__mapDeps([10,1,2,11,12]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-CbyqfL6e.js"), true ? __vite__mapDeps([13,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-B2PUHgNk.js"), true ? __vite__mapDeps([14,1,2,15,4,16]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DFygPWcc.js"), true ? __vite__mapDeps([17,1,2,18,19,20,21]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-BjRnyrfQ.js"), true ? __vite__mapDeps([22,1,2,18,19,20,23,24,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-BT4bAC3d.js"), true ? __vite__mapDeps([25,1,2,26,27]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-CruW4WMr.js"), true ? __vite__mapDeps([28,1,2,29,30,31]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DKUsNsRx.js"), true ? __vite__mapDeps([32,1,2,15]) : void 0));
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
