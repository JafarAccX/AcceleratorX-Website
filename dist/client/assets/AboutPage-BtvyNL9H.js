const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeroAbout-_2b4s7yg.js","assets/main-DqWgQVnl.js","assets/main-BA_X0d1R.css","assets/Team-Bj7HvuoA.js","assets/linkedin-nGAkfh2y.js","assets/Values-DV0cXgjr.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, S as SEO, r as reactExports, _ as __vitePreload } from "./main-DqWgQVnl.js";
const HeroAbout = reactExports.lazy(() => __vitePreload(() => import("./HeroAbout-_2b4s7yg.js"), true ? __vite__mapDeps([0,1,2]) : void 0));
const Team = reactExports.lazy(() => __vitePreload(() => import("./Team-Bj7HvuoA.js"), true ? __vite__mapDeps([3,1,2,4]) : void 0));
const Values = reactExports.lazy(() => __vitePreload(() => import("./Values-DV0cXgjr.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
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
