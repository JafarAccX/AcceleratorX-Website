const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeroAbout-DQDc3JTL.js","assets/main-CyKI5oeo.js","assets/main-B4XYXhR2.css","assets/proxy-BOkuqYBJ.js","assets/Team-p3IrlYBG.js","assets/linkedin-FjGrX4qg.js","assets/Values-CYHTBlsW.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, S as SEO, r as reactExports, _ as __vitePreload } from "./main-CyKI5oeo.js";
const HeroAbout = reactExports.lazy(() => __vitePreload(() => import("./HeroAbout-DQDc3JTL.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0));
const Team = reactExports.lazy(() => __vitePreload(() => import("./Team-p3IrlYBG.js"), true ? __vite__mapDeps([4,1,2,3,5]) : void 0));
const Values = reactExports.lazy(() => __vitePreload(() => import("./Values-CYHTBlsW.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
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
