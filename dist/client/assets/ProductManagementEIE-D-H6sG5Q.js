const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BenefitsGridEIE-DVX0x92V.js","assets/main-CRd4IIg_.js","assets/main-nhAxMPX_.css","assets/trophy-zMbbbKW8.js","assets/users-zBzdCp9r.js","assets/book-open-D4UhIaMq.js","assets/target-B2dI8Z_e.js","assets/star-DCrqV4Tt.js","assets/FAQEIE-BpzEvc9P.js","assets/minus-C5mA5zVm.js","assets/plus-DdJve268.js","assets/LearningJourneyEIE-Bgm48e2y.js","assets/MentorsEIE-DvdzSIVq.js","assets/constants-CyrPx8P0.js","assets/linkedin-BE2R_KdB.js","assets/PricingEIE-BXVoeWfp.js","assets/EnrollmentModal-BqPo0y01.js","assets/enrollmentApi-DIFaLmLA.js","assets/metaPixel-Bemim1W9.js","assets/check-x9yvak94.js","assets/ProgamHeroEIE-C9WmrrAo.js","assets/arrow-right-BpFbBQ17.js","assets/phone-b38Ktuv2.js","assets/ProgramCertificateEIE-CwvOHHf_.js","assets/award-9tJ6JhK-.js","assets/check-circle-CNekhBmX.js","assets/ProgramHighlightsEIE-D1BAL51J.js","assets/lightbulb-CwJ65bBU.js","assets/workflow-Dx5tSABW.js","assets/rocket-sshKAtOD.js","assets/SkillsAndToolsEIE-jnNaFOYe.js"])))=>i.map(i=>d[i]);
import { l as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-CRd4IIg_.js";
import { H as HeaderEIE } from "./HeaderEIE-Bi5_mUDP.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-BVOPC2Ke.js";
import { S as StickyBookNav } from "./StickyBookNav-DI97GMcr.js";
import "./EnrollmentModal-BqPo0y01.js";
import "./enrollmentApi-DIFaLmLA.js";
import "./metaPixel-Bemim1W9.js";
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-DVX0x92V.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BpzEvc9P.js"), true ? __vite__mapDeps([8,1,2,9,10]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-Bgm48e2y.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-DvdzSIVq.js"), true ? __vite__mapDeps([12,1,2,13,4,14]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-BXVoeWfp.js"), true ? __vite__mapDeps([15,1,2,16,17,18,19]) : void 0));
const ProgramHeroEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgamHeroEIE-C9WmrrAo.js"), true ? __vite__mapDeps([20,1,2,16,17,18,21,22,4]) : void 0));
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-CwvOHHf_.js"), true ? __vite__mapDeps([23,1,2,24,25]) : void 0));
const ProgramHighlightsEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramHighlightsEIE-D1BAL51J.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-jnNaFOYe.js"), true ? __vite__mapDeps([30,1,2,13]) : void 0));
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
