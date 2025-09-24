const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-IMexzkeE.js","assets/main-Br24Bg9q.js","assets/main-7GdIFNw8.css","assets/proxy-BpV0Cpmy.js","assets/award-Cyj3a25f.js","assets/check-circle-jpR1RDxA.js","assets/LearningJourneyEIE-Djlclw9M.js","assets/BenefitsGridEIE-DBVzeEr2.js","assets/trophy-xHwcXHSR.js","assets/users-BNm-EPws.js","assets/target-CsCm9Pkz.js","assets/book-open-bW5bh_YZ.js","assets/star-DR2GWWS5.js","assets/brain-Cib6o-83.js","assets/trending-up-Dk4oPoHa.js","assets/MentorsEIE-DpJdvHG3.js","assets/constants-C0Rc_o-P.js","assets/linkedin-BI3InuGZ.js","assets/SkillsAndToolsEIE-CQ59vKae.js","assets/index-KeK93Ytm.js","assets/PricingEIE-TzmhDIk_.js","assets/EnrollmentModal-DUd2mNsm.js","assets/enrollmentApi-DBnLqubN.js","assets/metaPixel-Cr0rW0qb.js","assets/check-_mDtse_9.js","assets/FAQEIE-h3uPwHCH.js","assets/minus-CJ9VnsiY.js","assets/plus-72-caFXB.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Br24Bg9q.js";
import ProgramHeroEIE from "./ProgamHeroEIE-XtIc0xZw.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-Cwvn4LdE.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-LVuJzAeW.js";
import { S as StickyBookNav } from "./StickyBookNav-DYTqjRtN.js";
import "./EnrollmentModal-DUd2mNsm.js";
import "./enrollmentApi-DBnLqubN.js";
import "./metaPixel-Cr0rW0qb.js";
import "./index-KeK93Ytm.js";
import "./proxy-BpV0Cpmy.js";
import "./arrow-right-DGL0WtHg.js";
import "./phone--zlUSDEC.js";
import "./users-BNm-EPws.js";
import "./lightbulb-wW1-JM40.js";
import "./workflow-Ch669Stj.js";
import "./rocket-ByYH6AhU.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-IMexzkeE.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Djlclw9M.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DBVzeEr2.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-DpJdvHG3.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-CQ59vKae.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-TzmhDIk_.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-h3uPwHCH.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
