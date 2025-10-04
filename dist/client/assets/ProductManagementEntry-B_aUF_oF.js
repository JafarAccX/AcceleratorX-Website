const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-BDRr0gRK.js","assets/main-Dr7DU7CZ.js","assets/main-B4XYXhR2.css","assets/proxy-82v-ftuM.js","assets/award-COa233C-.js","assets/check-circle-kDU7Ld8S.js","assets/LearningJourneyEIE-BpgJfPxs.js","assets/BenefitsGridEIE-Bne8C3ms.js","assets/trophy-DfQtNI-R.js","assets/users-Bh-qRdQ_.js","assets/target-q9UV88fJ.js","assets/book-open-B0mEWv0S.js","assets/star-C5e4ggR6.js","assets/brain-BRD7JP5m.js","assets/trending-up-CoVtqXRn.js","assets/MentorsEIE-DEGGdCml.js","assets/constants-C0Rc_o-P.js","assets/linkedin-Bg2tcKd7.js","assets/SkillsAndToolsEIE-DZ86MbHh.js","assets/index-DAddfncm.js","assets/PricingEIE-CmfaQ-4i.js","assets/EnrollmentModal-bFtrKCD9.js","assets/enrollmentApi-BWSSYuNv.js","assets/metaPixel-CBvWK0Fy.js","assets/check-_OR3Fb9g.js","assets/FAQEIE-DDwVqp4H.js","assets/minus-4OCz5w5j.js","assets/plus-Cb2wg7zA.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Dr7DU7CZ.js";
import ProgramHeroEIE from "./ProgamHeroEIE-D-QCXga6.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-xJQDJRZ7.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-vTthkW8T.js";
import { S as StickyBookNav } from "./StickyBookNav-DHYgp9_A.js";
import "./EnrollmentModal-bFtrKCD9.js";
import "./enrollmentApi-BWSSYuNv.js";
import "./metaPixel-CBvWK0Fy.js";
import "./index-DAddfncm.js";
import "./proxy-82v-ftuM.js";
import "./arrow-right-CuhHaKR8.js";
import "./phone-Cdnn7b9G.js";
import "./users-Bh-qRdQ_.js";
import "./lightbulb-BoLR4x42.js";
import "./workflow-aJxndCRR.js";
import "./rocket-BqBKlMhS.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-BDRr0gRK.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-BpgJfPxs.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-Bne8C3ms.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-DEGGdCml.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DZ86MbHh.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CmfaQ-4i.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-DDwVqp4H.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
