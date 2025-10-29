const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-qG3cFgR-.js","assets/main-ma4iRsbt.js","assets/main-G0CT17v4.css","assets/trophy-C4oiFXuJ.js","assets/users-B94grk6x.js","assets/book-open-Y45mtJCo.js","assets/target-Df-llSQz.js","assets/star-dHRIq2Ym.js","assets/FAQEIE-BQnB2URh.js","assets/minus-DdudQ9F4.js","assets/plus-DI6WqnBs.js","assets/LearningJourneyEIE-Qk1Scv8o.js","assets/MentorsEIE-CqCNHzGd.js","assets/constants-BiTomjDI.js","assets/linkedin-C2GvV4V5.js","assets/PricingEIE-CEBQRtFW.js","assets/EnrollmentModal-Drsk4gj-.js","assets/enrollmentApi-CgCiDHJR.js","assets/metaPixel-BzgFvOZj.js","assets/check-DSgdJU7e.js","assets/ProgamHeroEIE-Bb0-GeOK.js","assets/arrow-right-NQ7PO8Rg.js","assets/phone-CePblAdN.js","assets/ProgramCertificateEIE-CKBqd0Cn.js","assets/award-Cw_wodUf.js","assets/check-circle-CVy3jTpL.js","assets/ProgramHighlightsEIE-CqcSdYmJ.js","assets/lightbulb-B3kfgARX.js","assets/workflow-BHLt9LeP.js","assets/rocket-DkLrTEY7.js","assets/SkillsAndToolsEIE-UMyYFzQe.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-ma4iRsbt.js";
import { H as HeaderEIE } from "./HeaderEIE-CcQprB3T.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CTRIul8z.js";
import { S as StickyBookNav } from "./StickyBookNav-CduC0Qza.js";
import "./EnrollmentModal-Drsk4gj-.js";
import "./enrollmentApi-CgCiDHJR.js";
import "./metaPixel-BzgFvOZj.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-qG3cFgR-.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BQnB2URh.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Qk1Scv8o.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CqCNHzGd.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CEBQRtFW.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-Bb0-GeOK.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CKBqd0Cn.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-CqcSdYmJ.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-UMyYFzQe.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
