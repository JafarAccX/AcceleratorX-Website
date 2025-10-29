const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CKBqd0Cn.js","assets/main-ma4iRsbt.js","assets/main-G0CT17v4.css","assets/award-Cw_wodUf.js","assets/check-circle-CVy3jTpL.js","assets/LearningJourneyEIE-Qk1Scv8o.js","assets/BenefitsGridEIE-qG3cFgR-.js","assets/trophy-C4oiFXuJ.js","assets/users-B94grk6x.js","assets/book-open-Y45mtJCo.js","assets/target-Df-llSQz.js","assets/star-dHRIq2Ym.js","assets/MentorsEIE-CqCNHzGd.js","assets/constants-BiTomjDI.js","assets/linkedin-C2GvV4V5.js","assets/SkillsAndToolsEIE-UMyYFzQe.js","assets/PricingEIE-CEBQRtFW.js","assets/EnrollmentModal-Drsk4gj-.js","assets/enrollmentApi-CgCiDHJR.js","assets/metaPixel-BzgFvOZj.js","assets/check-DSgdJU7e.js","assets/FAQEIE-BQnB2URh.js","assets/minus-DdudQ9F4.js","assets/plus-DI6WqnBs.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-ma4iRsbt.js";
import ProgramHeroEIE from "./ProgamHeroEIE-Bb0-GeOK.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-CqcSdYmJ.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CTRIul8z.js";
import { S as StickyBookNav } from "./StickyBookNav-CduC0Qza.js";
import "./EnrollmentModal-Drsk4gj-.js";
import "./enrollmentApi-CgCiDHJR.js";
import "./metaPixel-BzgFvOZj.js";
import "./arrow-right-NQ7PO8Rg.js";
import "./phone-CePblAdN.js";
import "./users-B94grk6x.js";
import "./lightbulb-B3kfgARX.js";
import "./workflow-BHLt9LeP.js";
import "./rocket-DkLrTEY7.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CKBqd0Cn.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Qk1Scv8o.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-qG3cFgR-.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CqCNHzGd.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-UMyYFzQe.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CEBQRtFW.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BQnB2URh.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
