const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-DDaJdWC2.js","assets/main-C2SXHoHD.js","assets/main-DzJ5IfLy.css","assets/proxy-BAKFzumD.js","assets/award-DZXrA0q1.js","assets/check-circle-DcixRMnw.js","assets/LearningJourneyEIE-U7FdnsP7.js","assets/BenefitsGridEIE-DJdaWJ-q.js","assets/trophy-iulHppGm.js","assets/users-Bl8ZOq4h.js","assets/target-bYw-6Zpe.js","assets/book-open-CkjxDuNI.js","assets/star-DgGizSUC.js","assets/brain-CP6ygtIK.js","assets/trending-up-z0CZD1Wl.js","assets/MentorsEIE-C1yRXuqn.js","assets/constants-C0Rc_o-P.js","assets/linkedin-CJeXLL1m.js","assets/SkillsAndToolsEIE-CyvHojzJ.js","assets/index-UU-4IguJ.js","assets/PricingEIE-RSxZpIVO.js","assets/EnrollmentModal-CL9C06ud.js","assets/enrollmentApi-BkaCLl_k.js","assets/metaPixel-BGrWFMSd.js","assets/check-BBBiiT2b.js","assets/FAQEIE-xeapjYwo.js","assets/minus-BSGyHu8L.js","assets/plus-DF9fWEt_.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-C2SXHoHD.js";
import ProgramHeroEIE from "./ProgamHeroEIE-Dp173ZTz.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-u0bXL7na.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BJ8mh7_H.js";
import { S as StickyBookNav } from "./StickyBookNav-CApjna1n.js";
import "./EnrollmentModal-CL9C06ud.js";
import "./enrollmentApi-BkaCLl_k.js";
import "./metaPixel-BGrWFMSd.js";
import "./index-UU-4IguJ.js";
import "./proxy-BAKFzumD.js";
import "./arrow-right-C8kfY9g8.js";
import "./phone-D0XJ5WoB.js";
import "./users-Bl8ZOq4h.js";
import "./lightbulb-BGiLoweA.js";
import "./workflow-W1z7eL6H.js";
import "./rocket-DEL2QMIP.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DDaJdWC2.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-U7FdnsP7.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DJdaWJ-q.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-C1yRXuqn.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-CyvHojzJ.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-RSxZpIVO.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-xeapjYwo.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
