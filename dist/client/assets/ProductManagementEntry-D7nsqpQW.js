const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProgramCertificateEIE-prfM5Ocj.js","assets/main-C28QhmdX.js","assets/main-CnF9mUWs.css","assets/proxy-DwSb1Opz.js","assets/award-BnTwxdHD.js","assets/check-circle-DbZxVb64.js","assets/LearningJourneyEIE-DCGI_tvP.js","assets/BenefitsGridEIE-D8caXnS9.js","assets/trophy-Cy4P2PzR.js","assets/users-DMt_YjC6.js","assets/target-B_4ThqT3.js","assets/book-open-BSU_yNPN.js","assets/star-c7JDR_TI.js","assets/brain-C9qcRQX_.js","assets/trending-up-B9divfHi.js","assets/MentorsEIE-Bx2Ip0fm.js","assets/constants-C0Rc_o-P.js","assets/linkedin-By11FiW7.js","assets/SkillsAndToolsEIE-GJ0rlx4c.js","assets/index-DajbXocm.js","assets/PricingEIE-C17bEZ5U.js","assets/EnrollmentModal-CpbHh6iK.js","assets/enrollmentApi-GwMyt4F-.js","assets/metaPixel-B9un28kE.js","assets/check-ChzTlK8-.js","assets/FAQEIE-4QuE3kyU.js","assets/minus-Dt9MKhhV.js","assets/plus-CiTv3EJG.js"])))=>i.map(i=>d[i]);
import { i as useCourseContext, r as reactExports, j as jsxRuntimeExports, S as SEO, _ as __vitePreload } from "./main-C28QhmdX.js";
import ProgramHeroEIE from "./ProgamHeroEIE-DkqKH63t.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-D4B6uLV2.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DzEOfFjB.js";
import { S as StickyBookNav } from "./StickyBookNav-Dr59ByLN.js";
import "./EnrollmentModal-CpbHh6iK.js";
import "./enrollmentApi-GwMyt4F-.js";
import "./metaPixel-B9un28kE.js";
import "./index-DajbXocm.js";
import "./proxy-DwSb1Opz.js";
import "./arrow-right-D13kLv6E.js";
import "./phone-C__4X67x.js";
import "./users-DMt_YjC6.js";
import "./lightbulb-C9i2S3iP.js";
import "./workflow-Bl5ldJmw.js";
import "./rocket-DhJH6LyN.js";
const ProgramCertificateEIE = reactExports.lazy(() => __vitePreload(() => import("./ProgramCertificateEIE-prfM5Ocj.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const LearningJourneyEIE = reactExports.lazy(() => __vitePreload(() => import("./LearningJourneyEIE-DCGI_tvP.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const BenefitsGridEIE = reactExports.lazy(() => __vitePreload(() => import("./BenefitsGridEIE-D8caXnS9.js"), true ? __vite__mapDeps([7,1,2,8,9,10,11,12,13,14]) : void 0));
const MentorsEIE = reactExports.lazy(() => __vitePreload(() => import("./MentorsEIE-Bx2Ip0fm.js"), true ? __vite__mapDeps([15,1,2,16,3,9,17]) : void 0));
const SkillsAndToolsEIE = reactExports.lazy(() => __vitePreload(() => import("./SkillsAndToolsEIE-GJ0rlx4c.js"), true ? __vite__mapDeps([18,1,2,16,19,3]) : void 0));
const PricingEIE = reactExports.lazy(() => __vitePreload(() => import("./PricingEIE-C17bEZ5U.js"), true ? __vite__mapDeps([20,1,2,21,22,23,19,3,24]) : void 0));
const FAQEIE = reactExports.lazy(() => __vitePreload(() => import("./FAQEIE-4QuE3kyU.js"), true ? __vite__mapDeps([25,1,2,3,26,27,19]) : void 0));
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
