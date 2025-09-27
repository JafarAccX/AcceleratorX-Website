import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect, Suspense, lazy } from "react";
import ProgramHeroEIE from "./ProgamHeroEIE-BmC7fXwv.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-qj9Jxmva.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CaQ6drdW.js";
import { S as StickyBookNav } from "./StickyBookNav-Dm5dAD7Q.js";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import "lucide-react";
import "./EnrollmentModal-D8ozUqkn.js";
import "framer-motion";
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
import "@react-spring/web";
const ProgramCertificateEIE = lazy(() => import("./ProgramCertificateEIE-BcAvQuUG.js"));
const LearningJourneyEIE = lazy(() => import("./LearningJourneyEIE-BUKGOYyE.js"));
const BenefitsGridEIE = lazy(() => import("./BenefitsGridEIE-DPhvEld2.js"));
const MentorsEIE = lazy(() => import("./MentorsEIE-B2tgDVP6.js"));
const SkillsAndToolsEIE = lazy(() => import("./SkillsAndToolsEIE-qMIbj1HH.js"));
const PricingEIE = lazy(() => import("./PricingEIE-BJpd7LRA.js"));
const FAQEIE = lazy(() => import("./FAQEIE-x6T9P3gW.js"));
const ProductManagementEntry = () => {
  const { setSelectedCourse } = useCourseContext();
  useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SEO, {}),
    /* @__PURE__ */ jsx(ProgramHeroEIE, {}),
    /* @__PURE__ */ jsx(ProgramHighlightsEIE, {}),
    /* @__PURE__ */ jsx(HeroWithAbouv, {}),
    /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
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
  ProductManagementEntry as default
};
