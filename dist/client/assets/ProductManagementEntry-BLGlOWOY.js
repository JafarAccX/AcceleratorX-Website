const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-DkAQK2kI.js","assets/main-Ctt__ttU.js","assets/main-CnF9mUWs.css","assets/proxy-B8iZIzY2.js","assets/award-Cl88SAIe.js","assets/check-circle-DzlOc1Bh.js","assets/LearningJourneyEIE-DYx0DMQk.js","assets/BenefitsGridEIE-f0VzUrrr.js","assets/trophy-DQ8I4OBd.js","assets/users-D8SaTqiS.js","assets/target-DESc7MIT.js","assets/book-open-D4PT-A1k.js","assets/star-BdoQNzHi.js","assets/brain-D2XpMtYU.js","assets/trending-up-D4XOfrNb.js","assets/MentorsEIE-CCIFEwk1.js","assets/constants-C0Rc_o-P.js","assets/linkedin-SiJWwn_D.js","assets/SkillsAndToolsEIE-eBWlq5PU.js","assets/index-ED9k-zp5.js","assets/PricingEIE-CtJV9Beh.js","assets/EnrollmentModal-Cuo9X1Eb.js","assets/enrollmentApi-dQOlnTeY.js","assets/metaPixel-B8ufuOhe.js","assets/check-BG_LglXa.js","assets/FAQEIE-PNMf6b4d.js","assets/minus-CLpstPCf.js","assets/plus-3Xyrufte.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Ctt__ttU.js";
import ProgramHeroEIE from "./ProgamHeroEIE-ydABVA-R.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-DJT_MDdq.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CqIp7zEZ.js";
import { S as StickyBookNav } from "./StickyBookNav-DqTr2tsc.js";
import "./EnrollmentModal-Cuo9X1Eb.js";
import "./enrollmentApi-dQOlnTeY.js";
import "./metaPixel-B8ufuOhe.js";
import "./index-ED9k-zp5.js";
import "./proxy-B8iZIzY2.js";
import "./arrow-right-CGRFgriO.js";
import "./phone-Nh9HT_6k.js";
import "./users-D8SaTqiS.js";
import "./lightbulb-BBpI2Mm_.js";
import "./workflow-Q_8DEgSd.js";
import "./rocket-ClB4_MPg.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-DkAQK2kI.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DYx0DMQk.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-f0VzUrrr.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CCIFEwk1.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-eBWlq5PU.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-CtJV9Beh.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-PNMf6b4d.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
