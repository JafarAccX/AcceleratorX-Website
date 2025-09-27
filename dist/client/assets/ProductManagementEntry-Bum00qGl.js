const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CJ5T-ZAw.js","assets/main-Bz-Nf_l9.js","assets/main-BTruDH6p.css","assets/proxy-DEWmjdqp.js","assets/award-C8WfCfD0.js","assets/check-circle-CkFqxh7R.js","assets/LearningJourneyEIE-Bu9awzbO.js","assets/BenefitsGridEIE-9iGci3fn.js","assets/trophy-BPicyhMb.js","assets/users-CvaBfnJ9.js","assets/target-De5hZceu.js","assets/book-open-DoMfsFEw.js","assets/star-CyZVbP2M.js","assets/brain-5vYSb-95.js","assets/trending-up-C7UnozKl.js","assets/MentorsEIE-C3Mnr4M0.js","assets/constants-C0Rc_o-P.js","assets/linkedin-BmcjCfxn.js","assets/SkillsAndToolsEIE-FW2hD_ip.js","assets/index-C-AvqvvG.js","assets/PricingEIE-DtsusnU4.js","assets/EnrollmentModal-LbwVMh_t.js","assets/enrollmentApi-rB8Ym3X4.js","assets/metaPixel-CzVyWGmV.js","assets/check-Dkn0JgMT.js","assets/FAQEIE-C4bWRSxF.js","assets/minus-DxAv7S8P.js","assets/plus-EupP8Jjl.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bz-Nf_l9.js";
import ProgramHeroEIE from "./ProgamHeroEIE-D9wJoEh2.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-BwuMZXRe.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-Dhk5xR3S.js";
import { S as StickyBookNav } from "./StickyBookNav-cAXzrQgW.js";
import "./EnrollmentModal-LbwVMh_t.js";
import "./enrollmentApi-rB8Ym3X4.js";
import "./metaPixel-CzVyWGmV.js";
import "./index-C-AvqvvG.js";
import "./proxy-DEWmjdqp.js";
import "./arrow-right-fPsRgeyK.js";
import "./phone-zbY6uLGB.js";
import "./users-CvaBfnJ9.js";
import "./lightbulb-ht5DPbNH.js";
import "./workflow-BeqwOE24.js";
import "./rocket-DDX5IISU.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CJ5T-ZAw.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Bu9awzbO.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-9iGci3fn.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-C3Mnr4M0.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-FW2hD_ip.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DtsusnU4.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-C4bWRSxF.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
