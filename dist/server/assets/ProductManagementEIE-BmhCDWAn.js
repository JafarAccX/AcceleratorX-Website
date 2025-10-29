import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect, Suspense, lazy } from "react";
import { H as HeaderEIE } from "./HeaderEIE-a-pU4rb3.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-D3f98g0B.js";
import { S as StickyBookNav } from "./StickyBookNav-DundPa_y.js";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import "@react-spring/web";
import "framer-motion";
import "./EnrollmentModal-6kiK3aSg.js";
import "lucide-react";
import "react-hot-toast";
import "./enrollmentApi-DmeHaJMK.js";
import "./metaPixel-Cw2h-5_I.js";
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
const BenefitsGridEIE = lazy(() => import("./BenefitsGridEIE-Be5AhTSA.js"));
const FAQEIE = lazy(() => import("./FAQEIE-CzOSoh4U.js"));
const LearningJourneyEIE = lazy(() => import("./LearningJourneyEIE-DgFL7Amd.js"));
const MentorsEIE = lazy(() => import("./MentorsEIE-Dm87lJ8p.js"));
const PricingEIE = lazy(() => import("./PricingEIE-CXuB2GKA.js"));
const ProgramHeroEIE = lazy(() => import("./ProgamHeroEIE-XTbjwNqP.js"));
const ProgramCertificateEIE = lazy(() => import("./ProgramCertificateEIE-DNEyVOZt.js"));
const ProgramHighlightsEIE = lazy(() => import("./ProgramHighlightsEIE-DG99d3Nx.js"));
const SkillsAndToolsEIE = lazy(() => import("./SkillsAndToolsEIE-BOZ3Vni6.js"));
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
