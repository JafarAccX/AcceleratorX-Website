const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CrTy9lkN.js","assets/main-CDOtXgRK.js","assets/main-CnF9mUWs.css","assets/proxy-VHxN6sQO.js","assets/award-BLJnr9Ao.js","assets/check-circle-B5OTEmMh.js","assets/LearningJourneyEIE-Df-oX1Kp.js","assets/BenefitsGridEIE-v0noHAMi.js","assets/trophy-cufG6_MA.js","assets/users-Bh6wAZTC.js","assets/target-P8IVNqNY.js","assets/book-open-Gh1p1b2V.js","assets/star-BEFHcvMl.js","assets/brain-Bhfl-C4H.js","assets/trending-up-Cx0gYCc4.js","assets/MentorsEIE-BKv4rPJL.js","assets/constants-C0Rc_o-P.js","assets/linkedin-BgTL_FSF.js","assets/SkillsAndToolsEIE-BdU2IzV9.js","assets/index-BUDb52xN.js","assets/PricingEIE-Dg4n5VGL.js","assets/EnrollmentModal-DHviGivP.js","assets/enrollmentApi-BuoFCBop.js","assets/metaPixel-1xEVgtRZ.js","assets/check-Cg6dUnWT.js","assets/FAQEIE-Cg5TT9dw.js","assets/minus-FjtFvhsc.js","assets/plus-DMElfBjr.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CDOtXgRK.js";
import ProgramHeroEIE from "./ProgamHeroEIE-CjFihHpH.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-CTAmrWhb.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CvXq7B4y.js";
import { S as StickyBookNav } from "./StickyBookNav-C4wUcOeC.js";
import "./EnrollmentModal-DHviGivP.js";
import "./enrollmentApi-BuoFCBop.js";
import "./metaPixel-1xEVgtRZ.js";
import "./index-BUDb52xN.js";
import "./proxy-VHxN6sQO.js";
import "./arrow-right-DWucD8MN.js";
import "./phone-BsCxX-po.js";
import "./users-Bh6wAZTC.js";
import "./lightbulb-DhGDjW7Q.js";
import "./workflow-BkZ3rSj-.js";
import "./rocket-CBTTiCqr.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CrTy9lkN.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Df-oX1Kp.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-v0noHAMi.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BKv4rPJL.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BdU2IzV9.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-Dg4n5VGL.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-Cg5TT9dw.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
