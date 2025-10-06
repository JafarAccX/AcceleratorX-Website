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
const GENFAQ = lazy(() => import("./GENFAQ-CbZHFrDM.js"));
const GENHero = lazy(() => import("./GENHero-CwftpoQf.js"));
const GENIntroduction = lazy(() => import("./GENIntroduction-CKSTCK0i.js"));
const GENLearningJourney = lazy(() => import("./GENLearningJourney-BPBJa8Kt.js"));
const GENMarketScope = lazy(() => import("./GENMarketScope-ByK0Lm1L.js"));
const GENPricing = lazy(() => import("./GENPricing-D7Hw-dGg.js"));
const GENProjectsAndOutcomes = lazy(() => import("./GENProjectsAndOutcomes-CX6_VMiT.js"));
const GENToolsYouWillLearn = lazy(() => import("./GENToolsYouWillLearn-CH7N3TX7.js"));
const GENWhoShouldEnroll = lazy(() => import("./GENWhoShouldEnroll-Dky3eSYk.js"));
const GENWhyLearnAI = lazy(() => import("./GENWhyLearnAI-C8_FtgGP.js"));
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
