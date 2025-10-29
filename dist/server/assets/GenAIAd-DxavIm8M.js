import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect, Suspense, lazy } from "react";
import { H as HeaderEIE } from "./HeaderEIE-a-pU4rb3.js";
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
const GENBYOAAd = lazy(() => import("./GENBYOAAd-7Gp5ixt6.js"));
const GENFAQAd = lazy(() => import("./GENFAQAd-Damy4-oe.js"));
const GENHeroAd = lazy(() => import("./GENHeroAd-8LAD4yok.js"));
const GENIntroductionAd = lazy(() => import("./GENIntroductionAd-iUuU-gGQ.js"));
const GENLearningJourneyAd = lazy(() => import("./GENLearningJourneyAd-BSSHa3Hf.js"));
const GENMarketScopeAd = lazy(() => import("./GENMarketScopeAd-CEp8CVB5.js"));
const GENToolsYouWillLearnAd = lazy(() => import("./GENToolsYouWillLearnAd-CRF4_qHn.js"));
const GENWhoShouldEnrollAd = lazy(() => import("./GENWhoShouldEnrollAd-DtH51zrz.js"));
const GenAICourseAD = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  useEffect(() => {
    setSelectedCourse("Generative AI");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SEO, {}),
    /* @__PURE__ */ jsx(HeaderEIE, {}),
    /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsx(GENHeroAd, {}),
      /* @__PURE__ */ jsx(GENIntroductionAd, {}),
      /* @__PURE__ */ jsx(GENWhoShouldEnrollAd, {}),
      /* @__PURE__ */ jsx(GENBYOAAd, {}),
      /* @__PURE__ */ jsx(GENMarketScopeAd, {}),
      /* @__PURE__ */ jsx(GENToolsYouWillLearnAd, {}),
      /* @__PURE__ */ jsx(GENLearningJourneyAd, {}),
      /* @__PURE__ */ jsx(GENFAQAd, {})
    ] })
  ] });
};
export {
  GenAICourseAD as default
};
