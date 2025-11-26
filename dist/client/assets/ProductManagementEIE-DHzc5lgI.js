const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-D0siB85Z.js","assets/main-YlaQtpvX.js","assets/main-nEWqamtX.css","assets/trophy-BbBPq5nL.js","assets/users-CZOdj9yh.js","assets/book-open-ijuM1Bfg.js","assets/target-CsFDyEQ5.js","assets/star-BEwxjuaH.js","assets/FAQEIE-C6WQVMvF.js","assets/minus-C12_Bg7Y.js","assets/plus-7W75pdDa.js","assets/LearningJourneyEIE-Bi2gn_hr.js","assets/MentorsEIE-Cg07NpNN.js","assets/constants-DXOhk-SF.js","assets/linkedin-Cpm2_oPU.js","assets/PricingEIE-tKQwPx7k.js","assets/EnrollmentModal-BBDW6IiB.js","assets/enrollmentApi-CyO8--cD.js","assets/metaPixel-D1cTjkIT.js","assets/check-A8vszYh6.js","assets/ProgamHeroEIE-DMD1S5Th.js","assets/arrow-right-xZ8csAvl.js","assets/phone-CadaU8tx.js","assets/ProgramCertificateEIE-CKPZaMuL.js","assets/award-BQQYph6o.js","assets/check-circle-Crv3yt3C.js","assets/ProgramHighlightsEIE-CUmw3GEC.js","assets/lightbulb-DlzcYlmc.js","assets/workflow-DmOnFugU.js","assets/rocket-DATgzq6r.js","assets/SkillsAndToolsEIE-GFXbWvzR.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-YlaQtpvX.js";
import { H as HeaderEIE } from "./HeaderEIE-CMKJ5D-p.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BvZtgv2K.js";
import { S as StickyBookNav } from "./StickyBookNav-BJbKwGZK.js";
import "./EnrollmentModal-BBDW6IiB.js";
import "./enrollmentApi-CyO8--cD.js";
import "./metaPixel-D1cTjkIT.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-D0siB85Z.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-C6WQVMvF.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Bi2gn_hr.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-Cg07NpNN.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-tKQwPx7k.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-DMD1S5Th.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CKPZaMuL.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-CUmw3GEC.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-GFXbWvzR.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
