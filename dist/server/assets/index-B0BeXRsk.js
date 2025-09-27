import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useEffect, Suspense, lazy } from "react";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-CaQ6drdW.js";
import { S as StickyBookNav } from "./StickyBookNav-Dm5dAD7Q.js";
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
import "@react-spring/web";
import "framer-motion";
import "./EnrollmentModal-D8ozUqkn.js";
import "react-hot-toast";
import "./enrollmentApi-DmeHaJMK.js";
import "./metaPixel-D4Z7npuX.js";
const DataHeroEIE = lazy(() => import("./DataHeroEIE-IIIIuqBu.js"));
const DataProgramEIE = lazy(() => import("./DataProgramEIE-qNMR4gmi.js"));
const DataSkillsToolsEIE = lazy(() => import("./DataSkillsToolsEIE-CH7U0qwr.js"));
const DataMentorsEIE = lazy(() => import("./DataMentorsEIE-DjZnLAAr.js"));
const DataPricingEIE = lazy(() => import("./DataPricingEIE-BERZXtjH.js"));
const CAPEEIE = lazy(() => import("./CAPEEIE-Dv3Hj8K7.js"));
const DataCertificateEIE = lazy(() => import("./DataCertificateEIE-BhbOptSl.js"));
const WhoIsThisContentForEIE = lazy(() => import("./WhoIsThisContentForEIE-BEU-cALx.js"));
const DataAnalyticsFAQFB = lazy(() => import("./DataAnalyticsFAQFB-Gi-bRNfB.js"));
const DataAnalyticsPage = () => {
  const { setSelectedCourse } = useCourseContext();
  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
    /* @__PURE__ */ jsx(SEO, {}),
    /* @__PURE__ */ jsx(DataHeroEIE, {}),
    /* @__PURE__ */ jsx(HeroWithAbouv, {}),
    /* @__PURE__ */ jsx(WhoIsThisContentForEIE, {}),
    /* @__PURE__ */ jsx(DataProgramEIE, {}),
    /* @__PURE__ */ jsx(CAPEEIE, {}),
    /* @__PURE__ */ jsx(DataCertificateEIE, {}),
    /* @__PURE__ */ jsx(DataMentorsEIE, {}),
    /* @__PURE__ */ jsx(DataSkillsToolsEIE, {}),
    /* @__PURE__ */ jsx(DataPricingEIE, {}),
    /* @__PURE__ */ jsx(DataAnalyticsFAQFB, {}),
    /* @__PURE__ */ jsx(StickyBookNav, {})
  ] }) });
};
export {
  DataAnalyticsPage as default
};
