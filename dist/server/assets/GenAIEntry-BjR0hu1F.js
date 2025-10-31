import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect, Suspense, lazy } from "react";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "@tanstack/react-query";
import "lucide-react";
import "react-dom";
import "react-icons/pi";
import "framer-motion";
const GENBYOA = lazy(() => import("./GENBYOA-D_8WlVOL.js"));
const GENFAQ = lazy(() => import("./GENFAQ-U6bUrPMX.js"));
const GENHero = lazy(() => import("./GENHero-CAxKQOT-.js"));
const GENIntroduction = lazy(() => import("./GENIntroduction-DEV5sM6m.js"));
const GENLearningJourney = lazy(() => import("./GENLearningJourney-DwAItsVS.js"));
const GENMarketScope = lazy(() => import("./GENMarketScope-ByK0Lm1L.js"));
const GENPricing = lazy(() => import("./GENPricing-Cv6s39R0.js"));
const GENProjectsAndOutcomes = lazy(() => import("./GENProjectsAndOutcomes-C3Zq923q.js"));
const GENToolsYouWillLearn = lazy(() => import("./GENToolsYouWillLearn-kuOtiVHm.js"));
const GENWhoShouldEnroll = lazy(() => import("./GENWhoShouldEnroll-DdMDX3Yo.js"));
const GENWhyLearnAI = lazy(() => import("./GENWhyLearnAI-D82Ts9yd.js"));
const GENMentors = lazy(() => import("./GENMentors-C4xYoURl.js"));
const GenAICourse = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  useEffect(() => {
    setSelectedCourse("Generative AI");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SEO, {}),
    /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsx(GENHero, {}),
      /* @__PURE__ */ jsx(GENIntroduction, {}),
      /* @__PURE__ */ jsx(GENWhoShouldEnroll, {}),
      /* @__PURE__ */ jsx(GENBYOA, {}),
      /* @__PURE__ */ jsx(GENMarketScope, {}),
      /* @__PURE__ */ jsx(GENWhyLearnAI, {}),
      /* @__PURE__ */ jsx(GENLearningJourney, {}),
      /* @__PURE__ */ jsx(GENMentors, {}),
      /* @__PURE__ */ jsx(GENToolsYouWillLearn, {}),
      /* @__PURE__ */ jsx(GENProjectsAndOutcomes, {}),
      /* @__PURE__ */ jsx(GENPricing, {}),
      /* @__PURE__ */ jsx(GENFAQ, {})
    ] })
  ] });
};
export {
  GenAICourse as default
};
