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
const DMCourseBenefits = lazy(() => import("./DMCourseBenefits-ClWHwL3C.js"));
const DMCourseOverview = lazy(() => import("./DMCourseOverview-BAg4Td9f.js"));
const DMCourseSyllabus = lazy(() => import("./DMCourseSyllabus-I_MDhPAA.js"));
const DMFAQs = lazy(() => import("./DMFAQs-B6OeJ9DK.js"));
const DMHandsOnProjects = lazy(() => import("./DMHandsOnProjects-BebonKTD.js"));
const DMHero = lazy(() => import("./DMHero-B5KkSs76.js").then((m) => ({ default: m.DMHero })));
const DMMarketingTools = lazy(() => import("./DMMarketingTools-DwTae-ro.js"));
const DMMarketInsights = lazy(() => import("./DMMarketInsights-dez86au0.js"));
const DMPricing = lazy(() => import("./DMPricing-vzkcy9aj.js"));
const DMWhoShouldEnroll = lazy(() => import("./DMWhoShouldEnroll-H8gyVIly.js"));
const DMAICourse = () => {
  const {
    setSelectedCourse
  } = useCourseContext();
  useEffect(() => {
    setSelectedCourse("Advance Performance Marketing With AI");
  }, [setSelectedCourse]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SEO, {}),
    /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsx(DMHero, {}),
      /* @__PURE__ */ jsx(DMMarketInsights, {}),
      /* @__PURE__ */ jsx(DMWhoShouldEnroll, {}),
      /* @__PURE__ */ jsx(DMCourseOverview, {}),
      /* @__PURE__ */ jsx(DMHandsOnProjects, {}),
      /* @__PURE__ */ jsx(DMMarketingTools, {}),
      /* @__PURE__ */ jsx(DMCourseSyllabus, {}),
      /* @__PURE__ */ jsx(DMCourseBenefits, {}),
      /* @__PURE__ */ jsx(DMPricing, {}),
      /* @__PURE__ */ jsx(DMFAQs, {})
    ] })
  ] });
};
export {
  DMAICourse as default
};
