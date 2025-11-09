const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-u62qBI03.js","assets/main-xBPx3qIl.js","assets/main-BLt5Qm9-.css","assets/trophy-Ctcswehc.js","assets/users-BUpqX7F3.js","assets/book-open-Dd0X8U6d.js","assets/target-C2_-Bdj5.js","assets/star-DEjHqO3w.js","assets/FAQEIE-BQY-1Qdj.js","assets/minus-DfSOsm3Y.js","assets/plus-CCoZ9Ivu.js","assets/LearningJourneyEIE-Cvag5jCq.js","assets/MentorsEIE-CS5-UBHF.js","assets/constants-CyrPx8P0.js","assets/linkedin-BRtM_FYL.js","assets/PricingEIE-DLK97HoP.js","assets/EnrollmentModal-B_c6jQWh.js","assets/enrollmentApi-BBPudnHx.js","assets/metaPixel-Dks3G9U_.js","assets/check-CXLmR8u5.js","assets/ProgamHeroEIE-B6sZM9Gf.js","assets/arrow-right-B14A2e2Y.js","assets/phone-CCkASsIW.js","assets/ProgramCertificateEIE-BkyNgnqe.js","assets/award-CF7A_VZO.js","assets/check-circle-D_MdBqhs.js","assets/ProgramHighlightsEIE-93zzfCBm.js","assets/lightbulb-BGglse_G.js","assets/workflow-bdPwZ_td.js","assets/rocket-DNoy03qc.js","assets/SkillsAndToolsEIE-DYFVAh7l.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-xBPx3qIl.js";
import { H as HeaderEIE } from "./HeaderEIE-CVF0dEn6.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CNBH2rBo.js";
import { S as StickyBookNav } from "./StickyBookNav-COKUmz_5.js";
import "./EnrollmentModal-B_c6jQWh.js";
import "./enrollmentApi-BBPudnHx.js";
import "./metaPixel-Dks3G9U_.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-u62qBI03.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BQY-1Qdj.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Cvag5jCq.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CS5-UBHF.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-DLK97HoP.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-B6sZM9Gf.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-BkyNgnqe.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-93zzfCBm.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-DYFVAh7l.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
