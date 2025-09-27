import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect, Suspense, lazy } from "react";
import { H as HeaderEIE } from "./HeaderEIE-OvyXIpVU.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CaQ6drdW.js";
import { S as StickyBookNav } from "./StickyBookNav-Dm5dAD7Q.js";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import "@react-spring/web";
import "framer-motion";
import "./EnrollmentModal-D8ozUqkn.js";
import "lucide-react";
import "react-hot-toast";
import "./enrollmentApi-DmeHaJMK.js";
import "./metaPixel-D4Z7npuX.js";
import "react-router";
import "react-dom/server";
import "@remix-run/router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "@tanstack/react-query";
import "react-dom";
import "react-icons/pi";
const BenefitsGridEIE = lazy(() => import("./BenefitsGridEIE-DPhvEld2.js"));
const FAQEIE = lazy(() => import("./FAQEIE-x6T9P3gW.js"));
const LearningJourneyEIE = lazy(() => import("./LearningJourneyEIE-BUKGOYyE.js"));
const MentorsEIE = lazy(() => import("./MentorsEIE-B2tgDVP6.js"));
const PricingEIE = lazy(() => import("./PricingEIE-BJpd7LRA.js"));
const ProgramHeroEIE = lazy(() => import("./ProgamHeroEIE-BmC7fXwv.js"));
const ProgramCertificateEIE = lazy(() => import("./ProgramCertificateEIE-BcAvQuUG.js"));
const ProgramHighlightsEIE = lazy(() => import("./ProgramHighlightsEIE-qj9Jxmva.js"));
const SkillsAndToolsEIE = lazy(() => import("./SkillsAndToolsEIE-qMIbj1HH.js"));
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
