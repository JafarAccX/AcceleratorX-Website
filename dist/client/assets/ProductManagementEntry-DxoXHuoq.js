const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-BkyNgnqe.js","assets/main-xBPx3qIl.js","assets/main-BLt5Qm9-.css","assets/award-CF7A_VZO.js","assets/check-circle-D_MdBqhs.js","assets/LearningJourneyEIE-Cvag5jCq.js","assets/BenefitsGridEIE-u62qBI03.js","assets/trophy-Ctcswehc.js","assets/users-BUpqX7F3.js","assets/book-open-Dd0X8U6d.js","assets/target-C2_-Bdj5.js","assets/star-DEjHqO3w.js","assets/MentorsEIE-CS5-UBHF.js","assets/constants-CyrPx8P0.js","assets/linkedin-BRtM_FYL.js","assets/SkillsAndToolsEIE-DYFVAh7l.js","assets/PricingEIE-DLK97HoP.js","assets/EnrollmentModal-B_c6jQWh.js","assets/enrollmentApi-BBPudnHx.js","assets/metaPixel-Dks3G9U_.js","assets/check-CXLmR8u5.js","assets/FAQEIE-BQY-1Qdj.js","assets/minus-DfSOsm3Y.js","assets/plus-CCoZ9Ivu.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-xBPx3qIl.js";
import ProgramHeroEIE from "./ProgamHeroEIE-B6sZM9Gf.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-93zzfCBm.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CNBH2rBo.js";
import { S as StickyBookNav } from "./StickyBookNav-COKUmz_5.js";
import "./EnrollmentModal-B_c6jQWh.js";
import "./enrollmentApi-BBPudnHx.js";
import "./metaPixel-Dks3G9U_.js";
import "./arrow-right-B14A2e2Y.js";
import "./phone-CCkASsIW.js";
import "./users-BUpqX7F3.js";
import "./lightbulb-BGglse_G.js";
import "./workflow-bdPwZ_td.js";
import "./rocket-DNoy03qc.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-BkyNgnqe.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Cvag5jCq.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-u62qBI03.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CS5-UBHF.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DYFVAh7l.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DLK97HoP.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BQY-1Qdj.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
