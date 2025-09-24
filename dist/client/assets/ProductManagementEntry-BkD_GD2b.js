const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-Bq-gS73H.js","assets/main-DeWmku3x.js","assets/main-7GdIFNw8.css","assets/proxy-CanaJn_u.js","assets/award-B-8IPt-2.js","assets/check-circle-BtqyLcFR.js","assets/LearningJourneyEIE-C87Q6WWS.js","assets/BenefitsGridEIE-D4b3u-2Y.js","assets/trophy-CBLq2T9Y.js","assets/users-DG8_Ljzo.js","assets/target-zSR51BqK.js","assets/book-open-B3TmBhYn.js","assets/star-Cje0TEo0.js","assets/brain-DyNt3IqD.js","assets/trending-up-BMi3qHL_.js","assets/MentorsEIE-CVpwmpQl.js","assets/constants-C0Rc_o-P.js","assets/linkedin-CbAimOvB.js","assets/SkillsAndToolsEIE-CNqnR213.js","assets/index-B9lm7uYh.js","assets/PricingEIE-B-ifsP_Q.js","assets/EnrollmentModal-DI_VkV-P.js","assets/enrollmentApi-BTVnShAt.js","assets/metaPixel-CXWd2A3b.js","assets/check-BM8XLYs2.js","assets/FAQEIE-BFdmxGoT.js","assets/minus-DyZGLxRl.js","assets/plus-CZ9wvBsB.js"])))=>i.map(i=>d[i]);
import { k as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-DeWmku3x.js";
import ProgramHeroEIE from "./ProgamHeroEIE-CS9C-f4k.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-5z5K5uZC.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CHrisXE_.js";
import { S as StickyBookNav } from "./StickyBookNav-BoKEN4HT.js";
import "./EnrollmentModal-DI_VkV-P.js";
import "./enrollmentApi-BTVnShAt.js";
import "./metaPixel-CXWd2A3b.js";
import "./index-B9lm7uYh.js";
import "./proxy-CanaJn_u.js";
import "./arrow-right-FvSk5-_7.js";
import "./phone-C8mdPEP8.js";
import "./users-DG8_Ljzo.js";
import "./lightbulb-B0r4inE6.js";
import "./workflow-Csoj5SOc.js";
import "./rocket-B1QzGSiD.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-Bq-gS73H.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-C87Q6WWS.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-D4b3u-2Y.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-CVpwmpQl.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-CNqnR213.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-B-ifsP_Q.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-BFdmxGoT.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
