const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CZg5a5d6.js","assets/main-CGjpSgqs.js","assets/main-BA_X0d1R.css","assets/award-DvGhNmMu.js","assets/check-circle-DUIebZW1.js","assets/LearningJourneyEIE-DCyajjLR.js","assets/BenefitsGridEIE-DxprYfMX.js","assets/trophy-ou47FLUI.js","assets/users-BvpwDrmv.js","assets/book-open-v718Wypy.js","assets/target-DmaZiOMi.js","assets/star-tlMRKIB0.js","assets/MentorsEIE-_GeOQIBz.js","assets/constants-DXOhk-SF.js","assets/linkedin-Bry3tr_e.js","assets/SkillsAndToolsEIE-4P8erxFT.js","assets/PricingEIE-CB6r1fDI.js","assets/EnrollmentModal-CToHe8wt.js","assets/enrollmentApi-JJnF_R-U.js","assets/metaPixel-DBp1CICo.js","assets/check-CoVS3UlF.js","assets/FAQEIE-Cn71jJFq.js","assets/minus-BDMcFm7k.js","assets/plus-Btk5TrS8.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CGjpSgqs.js";
import ProgramHeroEIE from "./ProgamHeroEIE-Bw_50mEp.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-B4AVrJMc.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DltYef4S.js";
import { S as StickyBookNav } from "./StickyBookNav-D1ZXJN-4.js";
import "./EnrollmentModal-CToHe8wt.js";
import "./enrollmentApi-JJnF_R-U.js";
import "./metaPixel-DBp1CICo.js";
import "./arrow-right-CnMX7ePu.js";
import "./phone-Cp8fGVm4.js";
import "./users-BvpwDrmv.js";
import "./lightbulb-DQlUaY0k.js";
import "./workflow-BaO_H7n_.js";
import "./rocket-CVfwbrSD.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CZg5a5d6.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DCyajjLR.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DxprYfMX.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-_GeOQIBz.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-4P8erxFT.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CB6r1fDI.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-Cn71jJFq.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
