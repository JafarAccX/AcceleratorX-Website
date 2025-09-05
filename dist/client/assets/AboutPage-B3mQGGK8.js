const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeroAbout-e3XzlZHJ.js","assets/main-DUtAh55Z.js","assets/main-BWS2aYUX.css","assets/proxy-D90nfG6D.js","assets/Team-B5OIy27L.js","assets/linkedin-ErPNqK88.js","assets/Values-BhevfXSl.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, S as SEO, r as reactExports, _ as __vitePreload } from "./main-DUtAh55Z.js";
const HeroAbout = reactExports.lazy(() => __vitePreload(() => import("./HeroAbout-e3XzlZHJ.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0));
const Team = reactExports.lazy(() => __vitePreload(() => import("./Team-B5OIy27L.js"), true ? __vite__mapDeps([4,1,2,3,5]) : void 0));
const Values = reactExports.lazy(() => __vitePreload(() => import("./Values-BhevfXSl.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
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
