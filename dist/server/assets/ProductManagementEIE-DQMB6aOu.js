import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect, Suspense, lazy } from "react";
import { H as HeaderEIE } from "./HeaderEIE-BBuutp5V.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DQdvjFM1.js";
import { S as StickyBookNav } from "./StickyBookNav-CTIjwIzL.js";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import "@react-spring/web";
import "framer-motion";
import "./EnrollmentModal-CRvyn2Ta.js";
import "lucide-react";
import "react-hot-toast";
import "./enrollmentApi-DmeHaJMK.js";
import "./metaPixel-46TVWgCT.js";
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
const MentorsEIE = lazy(() => import("./MentorsEIE-5lpPlHxf.js"));
const PricingEIE = lazy(() => import("./PricingEIE-BKMocLLs.js"));
const ProgramHeroEIE = lazy(() => import("./ProgamHeroEIE-DHE1j1pz.js"));
const ProgramCertificateEIE = lazy(() => import("./ProgramCertificateEIE-BK7Hn1IM.js"));
const ProgramHighlightsEIE = lazy(() => import("./ProgramHighlightsEIE-DG99d3Nx.js"));
const SkillsAndToolsEIE = lazy(() => import("./SkillsAndToolsEIE-DHtzyq8M.js"));
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
