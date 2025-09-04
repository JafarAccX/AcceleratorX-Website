const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-BVfhSmIH.js","assets/main-DS-AYwzb.js","assets/main-Bk1JQKD4.css","assets/proxy-BvognpjE.js","assets/award-B6okXjIR.js","assets/check-circle-Ds6igMWj.js","assets/LearningJourneyEIE-DixGBwsJ.js","assets/BenefitsGridEIE-CeqFxAhd.js","assets/trophy-C9jESlZy.js","assets/users-DCb0cENh.js","assets/target--DSPFGW9.js","assets/book-open-DOfncP3D.js","assets/star-BvEN-F8J.js","assets/brain-D4i1SPNE.js","assets/trending-up-BYD0C6br.js","assets/MentorsEIE-vP1DRs8Z.js","assets/constants-C0Rc_o-P.js","assets/linkedin-D4idkOLD.js","assets/SkillsAndToolsEIE-BD-zpcn8.js","assets/index-CvAAj5Ob.js","assets/PricingEIE-CB7uZ6da.js","assets/EnrollmentModal-DvFI3y3c.js","assets/enrollmentApi--UjIqsAr.js","assets/metaPixel-BAx_qkDv.js","assets/check-X56IpEde.js","assets/FAQEIE-BFpFguOw.js","assets/minus-BpgX4aZ2.js","assets/plus-CgzFAacm.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DS-AYwzb.js";
import ProgramHeroEIE from "./ProgamHeroEIE-7uIRGJU_.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-4CY5GFj8.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DpettWLk.js";
import { S as StickyBookNav } from "./StickyBookNav-D5q4mrkx.js";
import "./EnrollmentModal-DvFI3y3c.js";
import "./enrollmentApi--UjIqsAr.js";
import "./metaPixel-BAx_qkDv.js";
import "./index-CvAAj5Ob.js";
import "./proxy-BvognpjE.js";
import "./arrow-right-CJ-5ajnw.js";
import "./phone-KaCSQonQ.js";
import "./users-DCb0cENh.js";
import "./lightbulb-CFG8tQdS.js";
import "./workflow-C7csxpK0.js";
import "./rocket-B9wXm9J-.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-BVfhSmIH.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DixGBwsJ.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-CeqFxAhd.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14,3]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-vP1DRs8Z.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-BD-zpcn8.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CB7uZ6da.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BFpFguOw.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
