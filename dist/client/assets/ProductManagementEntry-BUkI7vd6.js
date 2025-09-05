const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-D8lRsLTQ.js","assets/main-at0j2bC6.js","assets/main-CnF9mUWs.css","assets/proxy-CahS7ghE.js","assets/award-YU1GLcJf.js","assets/check-circle-pmWBv1KZ.js","assets/LearningJourneyEIE-Mv-Y13DG.js","assets/BenefitsGridEIE-DrcK2W89.js","assets/trophy-DdKVCl44.js","assets/users-tQfHRQw2.js","assets/target-_JuTnQdS.js","assets/book-open-D3G0ChH1.js","assets/star-C_BJ4GF2.js","assets/brain-B9y6-_XI.js","assets/trending-up-5_KRc19F.js","assets/MentorsEIE-ClMbU0tO.js","assets/constants-C0Rc_o-P.js","assets/linkedin-JlMOz1sH.js","assets/SkillsAndToolsEIE-Bl4D8v0L.js","assets/index-DHlO3EWV.js","assets/PricingEIE-CCp_da3j.js","assets/EnrollmentModal-DILSKsEd.js","assets/enrollmentApi-CLX1q15b.js","assets/metaPixel-8i-74vtX.js","assets/check-D4RU5zzk.js","assets/FAQEIE-K8JxTPlu.js","assets/minus-DkdHjdhx.js","assets/plus-BhYz0PXi.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-at0j2bC6.js";
import ProgramHeroEIE from "./ProgamHeroEIE-BrvTxvqj.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-_nh3-G87.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-C_7s9zmD.js";
import { S as StickyBookNav } from "./StickyBookNav-CW0X9dkR.js";
import "./EnrollmentModal-DILSKsEd.js";
import "./enrollmentApi-CLX1q15b.js";
import "./metaPixel-8i-74vtX.js";
import "./index-DHlO3EWV.js";
import "./proxy-CahS7ghE.js";
import "./arrow-right-DrLiVL7t.js";
import "./phone-D3hbefJS.js";
import "./users-tQfHRQw2.js";
import "./lightbulb-CQhb0xrs.js";
import "./workflow-D9VSegT2.js";
import "./rocket-tkU8f-XG.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-D8lRsLTQ.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Mv-Y13DG.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DrcK2W89.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-ClMbU0tO.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-Bl4D8v0L.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CCp_da3j.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-K8JxTPlu.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
