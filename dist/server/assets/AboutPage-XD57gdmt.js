import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Suspense, lazy } from "react";
import { S as SEO } from "../entry-server.js";
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
const HeroAbout = lazy(() => import("./HeroAbout-Ctgw3fjG.js"));
const Team = lazy(() => import("./Team-DSR1SU7N.js"));
const Values = lazy(() => import("./Values-C__Bf9_X.js"));
const AboutPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SEO, {}),
    /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsx(HeroAbout, {}),
      /* @__PURE__ */ jsx(Values, {}),
      /* @__PURE__ */ jsx(Team, {})
    ] })
  ] });
};
export {
  AboutPage as default
};
