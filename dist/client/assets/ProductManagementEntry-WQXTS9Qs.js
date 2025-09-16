const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CoBlfVXF.js","assets/main-MWsp8Q-I.js","assets/main-CnF9mUWs.css","assets/proxy-Dp4G5h__.js","assets/award-Dm_xeU6W.js","assets/check-circle-CL8skxdp.js","assets/LearningJourneyEIE-DhLEgZQO.js","assets/BenefitsGridEIE-CprdOsJF.js","assets/trophy-B4Qa4m4S.js","assets/users-Wfq3dHs5.js","assets/target-Daizc2vj.js","assets/book-open-Bj4RNcB3.js","assets/star-CkHlXI0R.js","assets/brain-CL8NQBM_.js","assets/trending-up-COljwoFy.js","assets/MentorsEIE-BHp0Sunh.js","assets/constants-C0Rc_o-P.js","assets/linkedin-CgRfraA7.js","assets/SkillsAndToolsEIE-CzLg8DW0.js","assets/index-BlWDocJ3.js","assets/PricingEIE-DJtpzi3y.js","assets/EnrollmentModal-BWhyTLEl.js","assets/enrollmentApi-cVEso6qE.js","assets/metaPixel-C30SEqt8.js","assets/check-DwmW9JL7.js","assets/FAQEIE-DLlN-7tc.js","assets/minus-CIezkOXD.js","assets/plus-kTP5Qte6.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-MWsp8Q-I.js";
import ProgramHeroEIE from "./ProgamHeroEIE-BO5dAJEr.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-fCCQ_K6Q.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-B8rdHIs9.js";
import { S as StickyBookNav } from "./StickyBookNav-45FV86Bt.js";
import "./EnrollmentModal-BWhyTLEl.js";
import "./enrollmentApi-cVEso6qE.js";
import "./metaPixel-C30SEqt8.js";
import "./index-BlWDocJ3.js";
import "./proxy-Dp4G5h__.js";
import "./arrow-right-lcQZiN15.js";
import "./phone-DnqKz_Gd.js";
import "./users-Wfq3dHs5.js";
import "./lightbulb-DLkoWIv_.js";
import "./workflow-bj_yjrUY.js";
import "./rocket-mrMFkh8D.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CoBlfVXF.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DhLEgZQO.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-CprdOsJF.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-BHp0Sunh.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-CzLg8DW0.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DJtpzi3y.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-DLlN-7tc.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
