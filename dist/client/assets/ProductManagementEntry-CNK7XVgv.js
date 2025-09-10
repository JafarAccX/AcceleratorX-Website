const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-7ZAMaDhp.js","assets/main-BHL7Gc-I.js","assets/main-CnF9mUWs.css","assets/proxy-verKFKaM.js","assets/award-_q4wSWQz.js","assets/check-circle-CT1Dwi9m.js","assets/LearningJourneyEIE-jnIxVQC9.js","assets/BenefitsGridEIE-B43_VOzd.js","assets/trophy-Ced8B5JE.js","assets/users-DUPFzUNZ.js","assets/target-DOA1nPhh.js","assets/book-open-BUunZnTP.js","assets/star-jzhXKvnr.js","assets/brain-C-rqg6sd.js","assets/trending-up-BoGTyF1H.js","assets/MentorsEIE-DW6__gQe.js","assets/constants-C0Rc_o-P.js","assets/linkedin-C15p91H-.js","assets/SkillsAndToolsEIE-Bda6XeNR.js","assets/index-C-XkIKZM.js","assets/PricingEIE-CMyjFB7j.js","assets/EnrollmentModal-1rjxOGQO.js","assets/enrollmentApi-D-SHSyuz.js","assets/metaPixel-BqYvEWNF.js","assets/check-L3pEl07x.js","assets/FAQEIE-BJh8Vh3u.js","assets/minus-BJt3SoNc.js","assets/plus-DUTMZPAL.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-BHL7Gc-I.js";
import ProgramHeroEIE from "./ProgamHeroEIE-DVU7jRJb.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-B-474e-t.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DCnyfsYS.js";
import { S as StickyBookNav } from "./StickyBookNav-6MwHuKkM.js";
import "./EnrollmentModal-1rjxOGQO.js";
import "./enrollmentApi-D-SHSyuz.js";
import "./metaPixel-BqYvEWNF.js";
import "./index-C-XkIKZM.js";
import "./proxy-verKFKaM.js";
import "./arrow-right-CI1uUyAu.js";
import "./phone-BzLLjD1g.js";
import "./users-DUPFzUNZ.js";
import "./lightbulb-JagPMHwv.js";
import "./workflow-CW5P07MW.js";
import "./rocket-sJEryXO-.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-7ZAMaDhp.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-jnIxVQC9.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-B43_VOzd.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-DW6__gQe.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-Bda6XeNR.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CMyjFB7j.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BJh8Vh3u.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
