import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect, Suspense, lazy } from "react";
import ProgramHeroEIE from "./ProgamHeroEIE-2AyFclhr.js";
import ProgramHighlightsEIE from "./ProgramHighlightsEIE-DG99d3Nx.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DQdvjFM1.js";
import { S as StickyBookNav } from "./StickyBookNav-UOQBzPR7.js";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import "lucide-react";
import "./EnrollmentModal-C4zUhI_e.js";
import "framer-motion";
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
import "@react-spring/web";
const ProgramCertificateEIE = lazy(() => import("./ProgramCertificateEIE-BK7Hn1IM.js"));
const LearningJourneyEIE = lazy(() => import("./LearningJourneyEIE-DgFL7Amd.js"));
const BenefitsGridEIE = lazy(() => import("./BenefitsGridEIE-Be5AhTSA.js"));
const MentorsEIE = lazy(() => import("./MentorsEIE-5lpPlHxf.js"));
const SkillsAndToolsEIE = lazy(() => import("./SkillsAndToolsEIE-DHtzyq8M.js"));
const PricingEIE = lazy(() => import("./PricingEIE-DPwP2U56.js"));
const FAQEIE = lazy(() => import("./FAQEIE-CzOSoh4U.js"));
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
