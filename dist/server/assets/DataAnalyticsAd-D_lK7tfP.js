import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect, Suspense, lazy } from "react";
import { H as HeaderEIE } from "./HeaderEIE-OvyXIpVU.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CaQ6drdW.js";
import { S as StickyBookNav } from "./StickyBookNav-C8Iru3ZA.js";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import "@react-spring/web";
import "framer-motion";
import "./EnrollmentModal-BjjJ_V1g.js";
import "lucide-react";
import "react-hot-toast";
import "./enrollmentApi-DmeHaJMK.js";
import "./metaPixel-y0ZR53ON.js";
import "react-router";
import "react-dom/server";
import "@remix-run/router";
import "react-dom";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "axios";
import "react-icons/pi";
import "@tanstack/react-query";
const CAPEEIE = lazy(() => import("./CAPEEIE-BH9NmOtX.js"));
const DataCertificateEIE = lazy(() => import("./DataCertificateEIE-BhbOptSl.js"));
const DataHeroEIE = lazy(() => import("./DataHeroEIE-CCfOM_gh.js"));
const DataJourneyEIE = lazy(() => import("./DataJourneyEIE-BlXEr7ja.js"));
const DataMentorsEIE = lazy(() => import("./DataMentorsEIE-CtY2BEPS.js"));
const DataPricingEIE = lazy(() => import("./DataPricingEIE-DD1ZthfA.js"));
const DataProgramEIE = lazy(() => import("./DataProgramEIE-qNMR4gmi.js"));
const DataSkillsToolsEIE = lazy(() => import("./DataSkillsToolsEIE-JefAe7X3.js"));
const WhoIsThisContentForEIE = lazy(() => import("./WhoIsThisContentForEIE-BEU-cALx.js"));
const DataAnalyticsFAQFB = lazy(() => import("./DataAnalyticsFAQFB-Gi-bRNfB.js"));
const DataAnalyticsAd = () => {
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
  DataAnalyticsAd as default
};
