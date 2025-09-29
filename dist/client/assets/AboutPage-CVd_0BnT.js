const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeroAbout-CwvFSblf.js","assets/main-CQMtEg9v.js","assets/main-Ctc2Wiva.css","assets/proxy-DMpmILPN.js","assets/Team-BNeuEcvS.js","assets/linkedin-D-q3KUAL.js","assets/Values-cBFawOR1.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, S as SEO, r as reactExports, _ as __vitePreload } from "./main-CQMtEg9v.js";
const HeroAbout = reactExports.lazy(() => __vitePreload(() => import("./HeroAbout-CwvFSblf.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0));
const Team = reactExports.lazy(() => __vitePreload(() => import("./Team-BNeuEcvS.js"), true ? __vite__mapDeps([4,1,2,3,5]) : void 0));
const Values = reactExports.lazy(() => __vitePreload(() => import("./Values-cBFawOR1.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
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
