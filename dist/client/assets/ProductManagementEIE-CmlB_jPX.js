const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-Bshw_Acn.js","assets/main-DHphvIsW.js","assets/main-g1H-mEfk.css","assets/trophy-BYT9oEeT.js","assets/users-BTurkWRB.js","assets/target-C_O9CwqU.js","assets/book-open-CiYAr8s7.js","assets/star-CfBFTlfJ.js","assets/brain-Bvzs-NIh.js","assets/trending-up-BNKTbnge.js","assets/FAQEIE-Wb2_bHSv.js","assets/minus-BgX5xixE.js","assets/plus-BOBANR54.js","assets/LearningJourneyEIE-DrOsFJ6u.js","assets/MentorsEIE-B8zqWecP.js","assets/constants-C0Rc_o-P.js","assets/linkedin-DVz9XFWf.js","assets/PricingEIE-DJGXpnVY.js","assets/EnrollmentModal-DVARnpwq.js","assets/enrollmentApi-DT_AxxXz.js","assets/metaPixel-BtqJNysz.js","assets/check-CCI57iDP.js","assets/ProgamHeroEIE-ChPo_ZN9.js","assets/arrow-right-q-8oo8XS.js","assets/phone-DgC1yqaY.js","assets/ProgramCertificateEIE-DkxcOBzo.js","assets/award-COHacsm-.js","assets/check-circle-DzDtJPnp.js","assets/ProgramHighlightsEIE-Dqeu0eC3.js","assets/lightbulb-DNJCOwNP.js","assets/workflow-CwrZF_uJ.js","assets/rocket-C7ORhXwy.js","assets/SkillsAndToolsEIE-BoB952sd.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DHphvIsW.js";
import { H as HeaderEIE } from "./HeaderEIE-BKyKeF5C.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DBZ2oFAc.js";
import { S as StickyBookNav } from "./StickyBookNav-BDDBj1A1.js";
import "./EnrollmentModal-DVARnpwq.js";
import "./enrollmentApi-DT_AxxXz.js";
import "./metaPixel-BtqJNysz.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-Bshw_Acn.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-Wb2_bHSv.js"), true ? __vite__mapDeps([10,1,2,11,12]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DrOsFJ6u.js"), true ? __vite__mapDeps([13,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-B8zqWecP.js"), true ? __vite__mapDeps([14,1,2,15,4,16]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DJGXpnVY.js"), true ? __vite__mapDeps([17,1,2,18,19,20,21]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-ChPo_ZN9.js"), true ? __vite__mapDeps([22,1,2,18,19,20,23,24,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DkxcOBzo.js"), true ? __vite__mapDeps([25,1,2,26,27]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-Dqeu0eC3.js"), true ? __vite__mapDeps([28,1,2,29,30,31]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BoB952sd.js"), true ? __vite__mapDeps([32,1,2,15]) : void 0));
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
