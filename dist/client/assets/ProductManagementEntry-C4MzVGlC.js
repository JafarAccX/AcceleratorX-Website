const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-cY7iiRFW.js","assets/main-Ck2PwlUp.js","assets/main-NGHnJCuZ.css","assets/award-dug6sY-m.js","assets/check-circle-x2VSf4Mz.js","assets/LearningJourneyEIE-XxhUuYgw.js","assets/BenefitsGridEIE-DOkaXMtg.js","assets/trophy-CZUynkyL.js","assets/users-C7hpzxLV.js","assets/book-open-Bv495fHW.js","assets/target-S0Lzc_Gc.js","assets/star-l1sRC8wN.js","assets/MentorsEIE-gCzyxURZ.js","assets/constants-CyrPx8P0.js","assets/linkedin-BcmlThoh.js","assets/SkillsAndToolsEIE-DZMDPqaY.js","assets/PricingEIE-KnAf55lt.js","assets/EnrollmentModal-1cLzwjk_.js","assets/enrollmentApi-BejPWjGn.js","assets/metaPixel-C33WLlAg.js","assets/check-iQCI8lJt.js","assets/FAQEIE-jvBcArFU.js","assets/minus-DujLnOST.js","assets/plus-Ci8AwJYd.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Ck2PwlUp.js";
import ProgramHeroEIE from "./ProgamHeroEIE-G6YgT-6E.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-BmjInqsC.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BBh6CSjX.js";
import { S as StickyBookNav } from "./StickyBookNav-rsPHf_OH.js";
import "./EnrollmentModal-1cLzwjk_.js";
import "./enrollmentApi-BejPWjGn.js";
import "./metaPixel-C33WLlAg.js";
import "./arrow-right-CHYkYHlR.js";
import "./phone-BApF00c3.js";
import "./users-C7hpzxLV.js";
import "./lightbulb-Bz5Vjcvc.js";
import "./workflow-heRRxXC0.js";
import "./rocket-Dt8bEnyA.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-cY7iiRFW.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-XxhUuYgw.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DOkaXMtg.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-gCzyxURZ.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DZMDPqaY.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-KnAf55lt.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-jvBcArFU.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
