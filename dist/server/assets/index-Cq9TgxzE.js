import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useEffect, Suspense, lazy } from "react";
import { b as useCourseContext, S as SEO } from "../entry-server.js";
import { H as HeroWithAbouv } from "./HeroWithAbouv-DQdvjFM1.js";
import { S as StickyBookNav } from "./StickyBookNav-C9uYfhjd.js";
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
import "@react-spring/web";
import "./EnrollmentModal-D1v0t8cP.js";
import "react-hot-toast";
import "./enrollmentApi-DmeHaJMK.js";
import "./metaPixel-Cw2h-5_I.js";
const DataHeroEIE = lazy(() => import("./DataHeroEIE-B2BMJLGy.js"));
const DataProgramEIE = lazy(() => import("./DataProgramEIE-B3QQ_Ct6.js"));
const DataSkillsToolsEIE = lazy(() => import("./DataSkillsToolsEIE-Dtc2l84n.js"));
const DataMentorsEIE = lazy(() => import("./DataMentorsEIE-CadsxBA5.js"));
const DataPricingEIE = lazy(() => import("./DataPricingEIE-CxJTLCrw.js"));
const CAPEEIE = lazy(() => import("./CAPEEIE-D6_oa-ZA.js"));
const DataCertificateEIE = lazy(() => import("./DataCertificateEIE-Br7M6M6C.js"));
const WhoIsThisContentForEIE = lazy(() => import("./WhoIsThisContentForEIE-teYbIXCI.js"));
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
