const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-DxprYfMX.js","assets/main-CGjpSgqs.js","assets/main-BA_X0d1R.css","assets/trophy-ou47FLUI.js","assets/users-BvpwDrmv.js","assets/book-open-v718Wypy.js","assets/target-DmaZiOMi.js","assets/star-tlMRKIB0.js","assets/FAQEIE-Cn71jJFq.js","assets/minus-BDMcFm7k.js","assets/plus-Btk5TrS8.js","assets/LearningJourneyEIE-DCyajjLR.js","assets/MentorsEIE-_GeOQIBz.js","assets/constants-DXOhk-SF.js","assets/linkedin-Bry3tr_e.js","assets/PricingEIE-CB6r1fDI.js","assets/EnrollmentModal-CToHe8wt.js","assets/enrollmentApi-JJnF_R-U.js","assets/metaPixel-DBp1CICo.js","assets/check-CoVS3UlF.js","assets/ProgamHeroEIE-Bw_50mEp.js","assets/arrow-right-CnMX7ePu.js","assets/phone-Cp8fGVm4.js","assets/ProgramCertificateEIE-CZg5a5d6.js","assets/award-DvGhNmMu.js","assets/check-circle-DUIebZW1.js","assets/ProgramHighlightsEIE-B4AVrJMc.js","assets/lightbulb-DQlUaY0k.js","assets/workflow-BaO_H7n_.js","assets/rocket-CVfwbrSD.js","assets/SkillsAndToolsEIE-4P8erxFT.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CGjpSgqs.js";
import { H as HeaderEIE } from "./HeaderEIE-Bz_3cDOQ.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DltYef4S.js";
import { S as StickyBookNav } from "./StickyBookNav-D1ZXJN-4.js";
import "./EnrollmentModal-CToHe8wt.js";
import "./enrollmentApi-JJnF_R-U.js";
import "./metaPixel-DBp1CICo.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DxprYfMX.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-Cn71jJFq.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DCyajjLR.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-_GeOQIBz.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CB6r1fDI.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-Bw_50mEp.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CZg5a5d6.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-B4AVrJMc.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-4P8erxFT.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
