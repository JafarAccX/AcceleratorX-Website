const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeroAbout-wNUbz5ox.js","assets/main-Bxo1x8yy.js","assets/main-Ctc2Wiva.css","assets/proxy-DxTfwLxA.js","assets/Team-32EDapFY.js","assets/linkedin-CbEvAP-m.js","assets/Values--AGGYs4t.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, S as SEO, r as reactExports, _ as __vitePreload } from "./main-Bxo1x8yy.js";
const HeroAbout = reactExports.lazy(() => __vitePreload(() => import("./HeroAbout-wNUbz5ox.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0));
const Team = reactExports.lazy(() => __vitePreload(() => import("./Team-32EDapFY.js"), true ? __vite__mapDeps([4,1,2,3,5]) : void 0));
const Values = reactExports.lazy(() => __vitePreload(() => import("./Values--AGGYs4t.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const AboutPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEO, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroAbout, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Values, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Team, {})
    ] })
  ] });
};
export {
  AboutPage as default
};
