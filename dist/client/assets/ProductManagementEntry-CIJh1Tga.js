const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-DkxcOBzo.js","assets/main-DHphvIsW.js","assets/main-g1H-mEfk.css","assets/award-COHacsm-.js","assets/check-circle-DzDtJPnp.js","assets/LearningJourneyEIE-DrOsFJ6u.js","assets/BenefitsGridEIE-Bshw_Acn.js","assets/trophy-BYT9oEeT.js","assets/users-BTurkWRB.js","assets/target-C_O9CwqU.js","assets/book-open-CiYAr8s7.js","assets/star-CfBFTlfJ.js","assets/brain-Bvzs-NIh.js","assets/trending-up-BNKTbnge.js","assets/MentorsEIE-B8zqWecP.js","assets/constants-C0Rc_o-P.js","assets/linkedin-DVz9XFWf.js","assets/SkillsAndToolsEIE-BoB952sd.js","assets/PricingEIE-DJGXpnVY.js","assets/EnrollmentModal-DVARnpwq.js","assets/enrollmentApi-DT_AxxXz.js","assets/metaPixel-BtqJNysz.js","assets/check-CCI57iDP.js","assets/FAQEIE-Wb2_bHSv.js","assets/minus-BgX5xixE.js","assets/plus-BOBANR54.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DHphvIsW.js";
import ProgramHeroEIE from "./ProgamHeroEIE-ChPo_ZN9.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-Dqeu0eC3.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DBZ2oFAc.js";
import { S as StickyBookNav } from "./StickyBookNav-BDDBj1A1.js";
import "./EnrollmentModal-DVARnpwq.js";
import "./enrollmentApi-DT_AxxXz.js";
import "./metaPixel-BtqJNysz.js";
import "./arrow-right-q-8oo8XS.js";
import "./phone-DgC1yqaY.js";
import "./users-BTurkWRB.js";
import "./lightbulb-DNJCOwNP.js";
import "./workflow-CwrZF_uJ.js";
import "./rocket-C7ORhXwy.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DkxcOBzo.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DrOsFJ6u.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-Bshw_Acn.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11,12,13]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-B8zqWecP.js"), true ? __vite__mapDeps([14,1,2,15,8,16]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BoB952sd.js"), true ? __vite__mapDeps([17,1,2,15]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DJGXpnVY.js"), true ? __vite__mapDeps([18,1,2,19,20,21,22]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-Wb2_bHSv.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
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
