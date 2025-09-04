import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect, Suspense, lazy } from "react";
import { H as HeaderEIE } from "./HeaderEIE-OvyXIpVU.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CaQ6drdW.js";
import { S as StickyBookNav } from "./StickyBookNav-C8Iru3ZA.js";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import "@react-spring/web";
import "framer-motion";
import "./EnrollmentModal-BjjJ_V1g.js";
import "lucide-react";
import "react-hot-toast";
import "./enrollmentApi-DmeHaJMK.js";
import "./metaPixel-y0ZR53ON.js";
import "react-router";
import "react-dom/server";
import "@remix-run/router";
import "react-dom";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "react-icons/pi";
import "@tanstack/react-query";
const BenefitsGridEIE = lazy(() => import("./BenefitsGridEIE-CvsulLQ2.js"));
const FAQEIE = lazy(() => import("./FAQEIE-BBDNw-5f.js"));
const LearningJourneyEIE = lazy(() => import("./LearningJourneyEIE-C_LtQbaW.js"));
const MentorsEIE = lazy(() => import("./MentorsEIE-B2tgDVP6.js"));
const PricingEIE = lazy(() => import("./PricingEIE-BHK9DE8R.js"));
const ProgramHeroEIE = lazy(() => import("./ProgamHeroEIE-Nug373kk.js"));
const ProgramCertificateEIE = lazy(() => import("./ProgramCertificateEIE-BcAvQuUG.js"));
const ProgramHighlightsEIE = lazy(() => import("./ProgramHighlightsEIE-vpGLQN53.js"));
const SkillsAndToolsEIE = lazy(() => import("./SkillsAndToolsEIE-gg0rcFKe.js"));
const ProductManagementEIE = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SEO, {}),
    /* @__PURE__ */ jsx(HeaderEIE, {}),
    /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsx(ProgramHeroEIE, {}),
      /* @__PURE__ */ jsx(HeroWithAbouv, {}),
      /* @__PURE__ */ jsx(ProgramHighlightsEIE, {}),
      /* @__PURE__ */ jsx(LearningJourneyEIE, {}),
      /* @__PURE__ */ jsx(BenefitsGridEIE, {}),
      /* @__PURE__ */ jsx(ProgramCertificateEIE, {}),
      /* @__PURE__ */ jsx(MentorsEIE, {}),
      /* @__PURE__ */ jsx(SkillsAndToolsEIE, {}),
      /* @__PURE__ */ jsx(PricingEIE, {}),
      /* @__PURE__ */ jsx(FAQEIE, {}),
      /* @__PURE__ */ jsx(StickyBookNav, {})
    ] })
  ] });
};
export {
  ProductManagementEIE as default
};
