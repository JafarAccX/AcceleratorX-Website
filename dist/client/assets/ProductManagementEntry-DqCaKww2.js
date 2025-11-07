const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-CwvOHHf_.js","assets/main-CRd4IIg_.js","assets/main-nhAxMPX_.css","assets/award-9tJ6JhK-.js","assets/check-circle-CNekhBmX.js","assets/LearningJourneyEIE-Bgm48e2y.js","assets/BenefitsGridEIE-DVX0x92V.js","assets/trophy-zMbbbKW8.js","assets/users-zBzdCp9r.js","assets/book-open-D4UhIaMq.js","assets/target-B2dI8Z_e.js","assets/star-DCrqV4Tt.js","assets/MentorsEIE-DvdzSIVq.js","assets/constants-CyrPx8P0.js","assets/linkedin-BE2R_KdB.js","assets/SkillsAndToolsEIE-jnNaFOYe.js","assets/PricingEIE-BXVoeWfp.js","assets/EnrollmentModal-BqPo0y01.js","assets/enrollmentApi-DIFaLmLA.js","assets/metaPixel-Bemim1W9.js","assets/check-x9yvak94.js","assets/FAQEIE-BpzEvc9P.js","assets/minus-C5mA5zVm.js","assets/plus-DdJve268.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CRd4IIg_.js";
import ProgramHeroEIE from "./ProgamHeroEIE-C9WmrrAo.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-D1BAL51J.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BVOPC2Ke.js";
import { S as StickyBookNav } from "./StickyBookNav-DI97GMcr.js";
import "./EnrollmentModal-BqPo0y01.js";
import "./enrollmentApi-DIFaLmLA.js";
import "./metaPixel-Bemim1W9.js";
import "./arrow-right-BpFbBQ17.js";
import "./phone-b38Ktuv2.js";
import "./users-zBzdCp9r.js";
import "./lightbulb-CwJ65bBU.js";
import "./workflow-Dx5tSABW.js";
import "./rocket-sshKAtOD.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CwvOHHf_.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Bgm48e2y.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DVX0x92V.js"), true ? __vite__mapDeps([6,1,2,7,8,9,10,11]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-DvdzSIVq.js"), true ? __vite__mapDeps([12,1,2,13,8,14]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-jnNaFOYe.js"), true ? __vite__mapDeps([15,1,2,13]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-BXVoeWfp.js"), true ? __vite__mapDeps([16,1,2,17,18,19,20]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BpzEvc9P.js"), true ? __vite__mapDeps([21,1,2,22,23]) : void 0));
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
