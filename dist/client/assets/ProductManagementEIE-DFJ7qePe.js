const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-B-tUY__8.js","assets/main-CvuwUR0U.js","assets/main-ClQXKXUm.css","assets/trophy-C7ztvuhH.js","assets/users-C_32Ngv4.js","assets/target-D9uTw_9w.js","assets/book-open-D6tEtkM3.js","assets/star-A9qqaoum.js","assets/brain-JGc6eHkm.js","assets/trending-up-CrB7SztH.js","assets/FAQEIE-BNkXzsyy.js","assets/minus-DCGewDJY.js","assets/plus-CO-_dVAO.js","assets/LearningJourneyEIE-CdkBLS46.js","assets/MentorsEIE-CRvFnhmI.js","assets/constants-C0Rc_o-P.js","assets/linkedin-pxxILXBj.js","assets/PricingEIE-B-JgDjgf.js","assets/EnrollmentModal-keSFpLvd.js","assets/enrollmentApi-DLc4dGkd.js","assets/metaPixel-btpR9i3d.js","assets/check-D6W9b3Zv.js","assets/ProgamHeroEIE-CujGl_Sw.js","assets/arrow-right-CqOeAJYx.js","assets/phone-DIqIgX5o.js","assets/ProgramCertificateEIE-kDr7CsWS.js","assets/award-CFKQuzJJ.js","assets/check-circle-CHsZaNQS.js","assets/ProgramHighlightsEIE-CALOZrw2.js","assets/lightbulb-DDqEMbZ6.js","assets/workflow-BA_E2N8U.js","assets/rocket-Dy2OgCyo.js","assets/SkillsAndToolsEIE-BqRDm8W_.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CvuwUR0U.js";
import { H as HeaderEIE } from "./HeaderEIE-BYMD5WXH.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BZ9-TYL7.js";
import { S as StickyBookNav } from "./StickyBookNav-BLJKjgTS.js";
import "./EnrollmentModal-keSFpLvd.js";
import "./enrollmentApi-DLc4dGkd.js";
import "./metaPixel-btpR9i3d.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-B-tUY__8.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BNkXzsyy.js"), true ? __vite__mapDeps([10,1,2,11,12]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-CdkBLS46.js"), true ? __vite__mapDeps([13,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CRvFnhmI.js"), true ? __vite__mapDeps([14,1,2,15,4,16]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-B-JgDjgf.js"), true ? __vite__mapDeps([17,1,2,18,19,20,21]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-CujGl_Sw.js"), true ? __vite__mapDeps([22,1,2,18,19,20,23,24,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-kDr7CsWS.js"), true ? __vite__mapDeps([25,1,2,26,27]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-CALOZrw2.js"), true ? __vite__mapDeps([28,1,2,29,30,31]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BqRDm8W_.js"), true ? __vite__mapDeps([32,1,2,15]) : void 0));
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
