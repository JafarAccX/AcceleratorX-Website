import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Suspense, lazy } from "react";
import { S as SEO } from "../entry-server.js";
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
const HeroAbout = lazy(() => import("./HeroAbout-Ctgw3fjG.js"));
const Team = lazy(() => import("./Team-YFDJcz8C.js"));
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
