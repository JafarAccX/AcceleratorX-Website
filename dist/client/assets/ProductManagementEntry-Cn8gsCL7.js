const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-C-W5m2rZ.js","assets/main-Bu4yalNQ.js","assets/main-7GdIFNw8.css","assets/proxy-BfxRfs7x.js","assets/award-C_w8Cijh.js","assets/check-circle-CPIRFcnr.js","assets/LearningJourneyEIE-D6KA74mj.js","assets/BenefitsGridEIE-DrM4ANz4.js","assets/trophy-iQEDIbuf.js","assets/users-CYlrTQWo.js","assets/target-gFUpM69y.js","assets/book-open-ChIiAHJr.js","assets/star-CW7CCq-z.js","assets/brain-BpLzX04c.js","assets/trending-up-B-qLdDGZ.js","assets/MentorsEIE-DV9ulyKb.js","assets/constants-C0Rc_o-P.js","assets/linkedin-CBALSeDq.js","assets/SkillsAndToolsEIE-OxKI0eiD.js","assets/index-BpgLIKka.js","assets/PricingEIE-swp-f5Bc.js","assets/EnrollmentModal-MIBgwbs0.js","assets/enrollmentApi-CGZgs_PB.js","assets/metaPixel-CdKfm6V_.js","assets/check-BW00fSja.js","assets/FAQEIE-J-MvjjNx.js","assets/minus-D-2nYoWA.js","assets/plus-B1i7Yi3S.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-Bu4yalNQ.js";
import ProgramHeroEIE from "./ProgamHeroEIE--A89Lzw8.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-CTfO5mnO.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-D6S9yaTc.js";
import { S as StickyBookNav } from "./StickyBookNav-DdpSthuX.js";
import "./EnrollmentModal-MIBgwbs0.js";
import "./enrollmentApi-CGZgs_PB.js";
import "./metaPixel-CdKfm6V_.js";
import "./index-BpgLIKka.js";
import "./proxy-BfxRfs7x.js";
import "./arrow-right-lGly2fuJ.js";
import "./phone-Dc-4m_TM.js";
import "./users-CYlrTQWo.js";
import "./lightbulb-DleClrR8.js";
import "./workflow-e-DCZu0G.js";
import "./rocket-AON9BfmU.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-C-W5m2rZ.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-D6KA74mj.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DrM4ANz4.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-DV9ulyKb.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-OxKI0eiD.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-swp-f5Bc.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-J-MvjjNx.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
