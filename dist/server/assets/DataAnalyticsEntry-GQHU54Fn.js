import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect, Suspense, lazy } from "react";
import { H as HeaderEIE } from "./HeaderEIE-OvyXIpVU.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CaQ6drdW.js";
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
const CAPEEIE = lazy(() => import("./CAPEEIE-Dv3Hj8K7.js"));
const DataCertificateEIE = lazy(() => import("./DataCertificateEIE-BhbOptSl.js"));
const DataHeroEIE = lazy(() => import("./DataHeroEIE-D_TMJCrU.js"));
const DataJourneyEIE = lazy(() => import("./DataJourneyEIE-BlXEr7ja.js"));
const DataMentorsEIE = lazy(() => import("./DataMentorsEIE-DjZnLAAr.js"));
const DataPricingEIE = lazy(() => import("./DataPricingEIE-CrahBj-7.js"));
const DataProgramEIE = lazy(() => import("./DataProgramEIE-qNMR4gmi.js"));
const DataSkillsToolsEIE = lazy(() => import("./DataSkillsToolsEIE-CH7U0qwr.js"));
const WhoIsThisContentForEIE = lazy(() => import("./WhoIsThisContentForEIE-BEU-cALx.js"));
const DataAnalyticsFAQFB = lazy(() => import("./DataAnalyticsFAQFB-Gi-bRNfB.js"));
const DataAnalyticsEntry = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SEO, {}),
    /* @__PURE__ */ jsx(HeaderEIE, {}),
    /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsx(DataHeroEIE, {}),
      /* @__PURE__ */ jsx(HeroWithAbouv, {}),
      /* @__PURE__ */ jsx(WhoIsThisContentForEIE, {}),
      /* @__PURE__ */ jsx(DataProgramEIE, {}),
      /* @__PURE__ */ jsx(CAPEEIE, {}),
      /* @__PURE__ */ jsx(DataJourneyEIE, {}),
      /* @__PURE__ */ jsx(DataCertificateEIE, {}),
      /* @__PURE__ */ jsx(DataMentorsEIE, {}),
      /* @__PURE__ */ jsx(DataSkillsToolsEIE, {}),
      /* @__PURE__ */ jsx(DataPricingEIE, {}),
      /* @__PURE__ */ jsx(DataAnalyticsFAQFB, {}),
      /* @__PURE__ */ jsx(StickyBookNav, {})
    ] })
  ] });
};
export {
  DataAnalyticsEntry as default
};
