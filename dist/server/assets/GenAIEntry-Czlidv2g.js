import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect, Suspense, lazy } from "react";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import "react-dom/server";
import "@remix-run/router";
import "react-router";
import "react-dom";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "react-hot-toast";
import "lucide-react";
import "axios";
import "react-icons/pi";
import "@tanstack/react-query";
const GENBYOA = lazy(() => import("./GENBYOA-D_8WlVOL.js"));
const GENFAQ = lazy(() => import("./GENFAQ-CbZHFrDM.js"));
const GENHero = lazy(() => import("./GENHero-DcJ2VbwJ.js"));
const GENIntroduction = lazy(() => import("./GENIntroduction-D1tuVRMv.js"));
const GENLearningJourney = lazy(() => import("./GENLearningJourney-BPBJa8Kt.js"));
const GENMarketScope = lazy(() => import("./GENMarketScope-hjf-B_jg.js"));
const GENPricing = lazy(() => import("./GENPricing-E4vKvDoN.js"));
const GENProjectsAndOutcomes = lazy(() => import("./GENProjectsAndOutcomes-CX6_VMiT.js"));
const GENToolsYouWillLearn = lazy(() => import("./GENToolsYouWillLearn-CH7N3TX7.js"));
const GENWhoShouldEnroll = lazy(() => import("./GENWhoShouldEnroll-Dky3eSYk.js"));
const GENWhyLearnAI = lazy(() => import("./GENWhyLearnAI-CI9tuXCb.js"));
const GENMentors = lazy(() => import("./GENMentors-D-qfLqL0.js"));
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
