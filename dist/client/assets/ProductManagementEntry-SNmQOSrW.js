const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CC48U6ri.js","assets/main-Ct9V9NA-.js","assets/main-CnF9mUWs.css","assets/proxy-ClgBuM4B.js","assets/award-DmjEPFF1.js","assets/check-circle-cdNdWq3B.js","assets/LearningJourneyEIE-HP75C1U-.js","assets/BenefitsGridEIE-sjV7tHGM.js","assets/trophy-FnxJiBfM.js","assets/users-BvbW8Gje.js","assets/target-Q8VYIfo8.js","assets/book-open-CPLN53ef.js","assets/star-C2TxznW3.js","assets/brain-DUrreK72.js","assets/trending-up-B90gEob-.js","assets/MentorsEIE-D4krsVNI.js","assets/constants-C0Rc_o-P.js","assets/linkedin-DavFyCMQ.js","assets/SkillsAndToolsEIE-DWpYOGp5.js","assets/index-TfPTM_co.js","assets/PricingEIE-iRPeAdtl.js","assets/EnrollmentModal-BmEwUbmd.js","assets/enrollmentApi-CWz3pxgi.js","assets/metaPixel-DOoJxazD.js","assets/check-BCbdE6lI.js","assets/FAQEIE-0wlP8nYt.js","assets/minus-CtbUy1sm.js","assets/plus-FvehhMfI.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Ct9V9NA-.js";
import ProgramHeroEIE from "./ProgamHeroEIE-Cd4_XkpJ.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-C5N_B0FH.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-C1ohNEfT.js";
import { S as StickyBookNav } from "./StickyBookNav-Bb2LCHeP.js";
import "./EnrollmentModal-BmEwUbmd.js";
import "./enrollmentApi-CWz3pxgi.js";
import "./metaPixel-DOoJxazD.js";
import "./index-TfPTM_co.js";
import "./proxy-ClgBuM4B.js";
import "./arrow-right-Da_mgZbD.js";
import "./phone-DXsqO0QG.js";
import "./users-BvbW8Gje.js";
import "./lightbulb-DE-_wmZC.js";
import "./workflow-DH011Yc6.js";
import "./rocket-B_4mmb4k.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CC48U6ri.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-HP75C1U-.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-sjV7tHGM.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-D4krsVNI.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DWpYOGp5.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-iRPeAdtl.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-0wlP8nYt.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
