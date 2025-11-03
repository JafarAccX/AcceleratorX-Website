const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeroAbout-CwsUC40v.js","assets/main-EhB7M4T3.js","assets/main-ZJ57361l.css","assets/Team-C2pwRC-P.js","assets/linkedin-CR8w8DS_.js","assets/Values-CkLwTob7.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, S as SEO, r as reactExports, _ as __vitePreload } from "./main-EhB7M4T3.js";
const HeroAbout = reactExports.lazy(() => __vitePreload(() => import("./HeroAbout-CwsUC40v.js"), true ? __vite__mapDeps([0,1,2]) : void 0));
const Team = reactExports.lazy(() => __vitePreload(() => import("./Team-C2pwRC-P.js"), true ? __vite__mapDeps([3,1,2,4]) : void 0));
const Values = reactExports.lazy(() => __vitePreload(() => import("./Values-CkLwTob7.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
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
