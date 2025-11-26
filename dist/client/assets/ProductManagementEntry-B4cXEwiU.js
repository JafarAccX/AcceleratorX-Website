const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CKPZaMuL.js","assets/main-YlaQtpvX.js","assets/main-nEWqamtX.css","assets/award-BQQYph6o.js","assets/check-circle-Crv3yt3C.js","assets/LearningJourneyEIE-Bi2gn_hr.js","assets/BenefitsGridEIE-D0siB85Z.js","assets/trophy-BbBPq5nL.js","assets/users-CZOdj9yh.js","assets/book-open-ijuM1Bfg.js","assets/target-CsFDyEQ5.js","assets/star-BEwxjuaH.js","assets/MentorsEIE-Cg07NpNN.js","assets/constants-DXOhk-SF.js","assets/linkedin-Cpm2_oPU.js","assets/SkillsAndToolsEIE-GFXbWvzR.js","assets/PricingEIE-tKQwPx7k.js","assets/EnrollmentModal-BBDW6IiB.js","assets/enrollmentApi-CyO8--cD.js","assets/metaPixel-D1cTjkIT.js","assets/check-A8vszYh6.js","assets/FAQEIE-C6WQVMvF.js","assets/minus-C12_Bg7Y.js","assets/plus-7W75pdDa.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-YlaQtpvX.js";
import ProgramHeroEIE from "./ProgamHeroEIE-DMD1S5Th.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-CUmw3GEC.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BvZtgv2K.js";
import { S as StickyBookNav } from "./StickyBookNav-BJbKwGZK.js";
import "./EnrollmentModal-BBDW6IiB.js";
import "./enrollmentApi-CyO8--cD.js";
import "./metaPixel-D1cTjkIT.js";
import "./arrow-right-xZ8csAvl.js";
import "./phone-CadaU8tx.js";
import "./users-CZOdj9yh.js";
import "./lightbulb-DlzcYlmc.js";
import "./workflow-DmOnFugU.js";
import "./rocket-DATgzq6r.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CKPZaMuL.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Bi2gn_hr.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-D0siB85Z.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-Cg07NpNN.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-GFXbWvzR.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-tKQwPx7k.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-C6WQVMvF.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
