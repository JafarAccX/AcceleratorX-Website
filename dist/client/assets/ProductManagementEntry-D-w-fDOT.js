const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-GdDjmesC.js","assets/main-BzTttlQZ.js","assets/main-Ce-Pe5sq.css","assets/award-Ca5R0AH5.js","assets/check-circle-BPT5c56A.js","assets/LearningJourneyEIE-DGv0ljH-.js","assets/BenefitsGridEIE-CQ79nKdO.js","assets/trophy-D-qauVa6.js","assets/users-CEydn7JE.js","assets/book-open-D2TR0pgX.js","assets/target-DjlQec_d.js","assets/star-D2A7qmBw.js","assets/MentorsEIE-CkI-zeui.js","assets/constants-DXOhk-SF.js","assets/linkedin--u34DzwF.js","assets/SkillsAndToolsEIE-BQO0mGe9.js","assets/PricingEIE-CLZV4ueG.js","assets/EnrollmentModal-BJCfKPkC.js","assets/enrollmentApi-Csc-QPjD.js","assets/metaPixel-DE20CzjQ.js","assets/check-CGr9u7rB.js","assets/FAQEIE-ga_ll8Bn.js","assets/minus-DET407Fa.js","assets/plus-BLVlctUS.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BzTttlQZ.js";
import ProgramHeroEIE from "./ProgamHeroEIE-CXo0uojP.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-CMoEooaA.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-B8ytbN5Q.js";
import { S as StickyBookNav } from "./StickyBookNav-BX_iktTf.js";
import "./EnrollmentModal-BJCfKPkC.js";
import "./enrollmentApi-Csc-QPjD.js";
import "./metaPixel-DE20CzjQ.js";
import "./arrow-right-DMXoacG5.js";
import "./phone-B2BAY6Ow.js";
import "./users-CEydn7JE.js";
import "./lightbulb-iiEza9cC.js";
import "./workflow-CKWtzuIp.js";
import "./rocket-D608d7Iu.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-GdDjmesC.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DGv0ljH-.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-CQ79nKdO.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CkI-zeui.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BQO0mGe9.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CLZV4ueG.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-ga_ll8Bn.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
