import { r as reactExports, m as m$1, V as e, j as jsxRuntimeExports } from "./main-MWsp8Q-I.js";
import { m as motion } from "./proxy-Dp4G5h__.js";
import { A as AnimatePresence } from "./index-BlWDocJ3.js";
import { T as Trophy } from "./trophy-B4Qa4m4S.js";
import { G as GraduationCap } from "./graduation-cap-ntsYmAYm.js";
import { B as BookOpen } from "./book-open-Bj4RNcB3.js";
var i$1 = Object.defineProperty;
var d$1 = (t2, e2, n) => e2 in t2 ? i$1(t2, e2, { enumerable: true, configurable: true, writable: true, value: n }) : t2[e2] = n;
var r$1 = (t2, e2, n) => (d$1(t2, typeof e2 != "symbol" ? e2 + "" : e2, n), n);
let o$4 = class o {
  constructor() {
    r$1(this, "current", this.detect());
    r$1(this, "handoffState", "pending");
    r$1(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
let s$4 = new o$4();
let l$2 = (e2, f2) => {
  s$4.isServer ? reactExports.useEffect(e2, f2) : reactExports.useLayoutEffect(e2, f2);
};
function s$3(e2) {
  let r2 = reactExports.useRef(e2);
  return l$2(() => {
    r2.current = e2;
  }, [e2]), r2;
}
let o$3 = function(t2) {
  let e2 = s$3(t2);
  return m$1.useCallback((...r2) => e2.current(...r2), [e2]);
};
function t$1(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o3) => setTimeout(() => {
    throw o3;
  }));
}
function s$2() {
  let r2 = typeof document == "undefined";
  return "useSyncExternalStore" in e ? ((o3) => o3.useSyncExternalStore)(e)(() => () => {
  }, () => false, () => !r2) : false;
}
function l$1() {
  let r2 = s$2(), [e$1, n] = reactExports.useState(s$4.isHandoffComplete);
  return e$1 && s$4.isHandoffComplete === false && n(false), reactExports.useEffect(() => {
    e$1 !== true && n(true);
  }, [e$1]), reactExports.useEffect(() => s$4.handoff(), []), r2 ? false : e$1;
}
var o$2;
let I$1 = (o$2 = m$1.useId) != null ? o$2 : function() {
  let n = l$1(), [e2, u2] = m$1.useState(n ? () => s$4.nextId() : null);
  return l$2(() => {
    e2 === null && u2(s$4.nextId());
  }, [e2]), e2 != null ? "" + e2 : void 0;
};
function u$2(r2, n, ...a2) {
  if (r2 in n) {
    let e2 = n[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$2), t2;
}
function o$1(r2) {
  return s$4.isServer ? null : r2 instanceof Node ? r2.ownerDocument : r2 != null && r2.hasOwnProperty("current") && r2.current instanceof Node ? r2.current.ownerDocument : document;
}
let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var M = ((n) => (n[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n))(M || {}), N = ((o3) => (o3[o3.Error = 0] = "Error", o3[o3.Overflow = 1] = "Overflow", o3[o3.Success = 2] = "Success", o3[o3.Underflow = 3] = "Underflow", o3))(N || {}), F$2 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$2 || {});
function f$2(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T$1 = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(T$1 || {});
var w = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
  e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e2) => {
  e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
let S = ["textarea", "input"].join(",");
function H(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, S)) != null ? t2 : false;
}
function I(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o3 = r2(t2), i2 = r2(l2);
    if (o3 === null || i2 === null) return 0;
    let n = o3.compareDocumentPosition(i2);
    return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function O$1(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o3 = [] } = {}) {
  let i2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, n = Array.isArray(e2) ? t2 ? I(e2) : e2 : f$2(e2);
  o3.length > 0 && n.length > 1 && (n = n.filter((s2) => !o3.includes(s2))), l2 = l2 != null ? l2 : i2.activeElement;
  let E = (() => {
    if (r2 & 5) return 1;
    if (r2 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x2 = (() => {
    if (r2 & 1) return 0;
    if (r2 & 2) return Math.max(0, n.indexOf(l2)) - 1;
    if (r2 & 4) return Math.max(0, n.indexOf(l2)) + 1;
    if (r2 & 8) return n.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = r2 & 32 ? { preventScroll: true } : {}, d2 = 0, a2 = n.length, u2;
  do {
    if (d2 >= a2 || d2 + a2 <= 0) return 0;
    let s2 = x2 + d2;
    if (r2 & 16) s2 = (s2 + a2) % a2;
    else {
      if (s2 < 0) return 3;
      if (s2 >= a2) return 1;
    }
    u2 = n[s2], u2 == null || u2.focus(p2), d2 += E;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && H(u2) && u2.select(), 2;
}
function i(t2) {
  var n;
  if (t2.type) return t2.type;
  let e2 = (n = t2.as) != null ? n : "button";
  if (typeof e2 == "string" && e2.toLowerCase() === "button") return "button";
}
function T(t2, e2) {
  let [n, u2] = reactExports.useState(() => i(t2));
  return l$2(() => {
    u2(i(t2));
  }, [t2.type, t2.as]), l$2(() => {
    n || e2.current && e2.current instanceof HTMLButtonElement && !e2.current.hasAttribute("type") && u2("button");
  }, [n, e2]), n;
}
let u$1 = Symbol();
function y(...t2) {
  let n = reactExports.useRef(t2);
  reactExports.useEffect(() => {
    n.current = t2;
  }, [t2]);
  let c2 = o$3((e2) => {
    for (let o3 of n.current) o3 != null && (typeof o3 == "function" ? o3(e2) : o3.current = e2);
  });
  return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u$1])) ? void 0 : c2;
}
function t(...r2) {
  return Array.from(new Set(r2.flatMap((n) => typeof n == "string" ? n.split(" ") : []))).filter(Boolean).join(" ");
}
var O = ((n) => (n[n.None = 0] = "None", n[n.RenderStrategy = 1] = "RenderStrategy", n[n.Static = 2] = "Static", n))(O || {}), v = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(v || {});
function C$1({ ourProps: r2, theirProps: t2, slot: e2, defaultTag: n, features: o3, visible: a2 = true, name: f2, mergeRefs: l2 }) {
  l2 = l2 != null ? l2 : k;
  let s2 = R(t2, r2);
  if (a2) return m(s2, e2, n, f2, l2);
  let y2 = o3 != null ? o3 : 0;
  if (y2 & 2) {
    let { static: u2 = false, ...d2 } = s2;
    if (u2) return m(d2, e2, n, f2, l2);
  }
  if (y2 & 1) {
    let { unmount: u2 = true, ...d2 } = s2;
    return u$2(u2 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return m({ ...d2, hidden: true, style: { display: "none" } }, e2, n, f2, l2);
    } });
  }
  return m(s2, e2, n, f2, l2);
}
function m(r2, t$12 = {}, e2, n, o3) {
  let { as: a2 = e2, children: f2, refName: l2 = "ref", ...s2 } = F$1(r2, ["unmount", "static"]), y2 = r2.ref !== void 0 ? { [l2]: r2.ref } : {}, u2 = typeof f2 == "function" ? f2(t$12) : f2;
  "className" in s2 && s2.className && typeof s2.className == "function" && (s2.className = s2.className(t$12));
  let d2 = {};
  if (t$12) {
    let i2 = false, c2 = [];
    for (let [T2, p2] of Object.entries(t$12)) typeof p2 == "boolean" && (i2 = true), p2 === true && c2.push(T2);
    i2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (a2 === reactExports.Fragment && Object.keys(x(s2)).length > 0) {
    if (!reactExports.isValidElement(u2) || Array.isArray(u2) && u2.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s2).map((p2) => `  - ${p2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p2) => `  - ${p2}`).join(`
`)].join(`
`));
    let i2 = u2.props, c2 = typeof (i2 == null ? void 0 : i2.className) == "function" ? (...p2) => t(i2 == null ? void 0 : i2.className(...p2), s2.className) : t(i2 == null ? void 0 : i2.className, s2.className), T2 = c2 ? { className: c2 } : {};
    return reactExports.cloneElement(u2, Object.assign({}, R(u2.props, x(F$1(s2, ["ref"]))), d2, y2, { ref: o3(u2.ref, y2.ref) }, T2));
  }
  return reactExports.createElement(a2, Object.assign({}, F$1(s2, ["ref"]), a2 !== reactExports.Fragment && y2, a2 !== reactExports.Fragment && d2), u2);
}
function k(...r2) {
  return r2.every((t2) => t2 == null) ? void 0 : (t2) => {
    for (let e2 of r2) e2 != null && (typeof e2 == "function" ? e2(t2) : e2.current = t2);
  };
}
function R(...r2) {
  if (r2.length === 0) return {};
  if (r2.length === 1) return r2[0];
  let t2 = {}, e2 = {};
  for (let o3 of r2) for (let a2 in o3) a2.startsWith("on") && typeof o3[a2] == "function" ? (e2[a2] != null || (e2[a2] = []), e2[a2].push(o3[a2])) : t2[a2] = o3[a2];
  if (t2.disabled || t2["aria-disabled"]) return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((o3) => [o3, void 0])));
  for (let o3 in e2) Object.assign(t2, { [o3](a2, ...f2) {
    let l2 = e2[o3];
    for (let s2 of l2) {
      if ((a2 instanceof Event || (a2 == null ? void 0 : a2.nativeEvent) instanceof Event) && a2.defaultPrevented) return;
      s2(a2, ...f2);
    }
  } });
  return t2;
}
function U(r2) {
  var t2;
  return Object.assign(reactExports.forwardRef(r2), { displayName: (t2 = r2.displayName) != null ? t2 : r2.name });
}
function x(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2) t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function F$1(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let n of t2) n in e2 && delete e2[n];
  return e2;
}
let p = "div";
var s$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(s$1 || {});
function l(d2, o3) {
  var n;
  let { features: t2 = 1, ...e2 } = d2, r2 = { ref: o3, "aria-hidden": (t2 & 2) === 2 ? true : (n = e2["aria-hidden"]) != null ? n : void 0, hidden: (t2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(t2 & 4) === 4 && (t2 & 2) !== 2 && { display: "none" } } };
  return C$1({ ourProps: r2, theirProps: e2, slot: {}, defaultTag: p, name: "Hidden" });
}
let u = U(l);
var o2 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o2 || {});
function f$1() {
  let e2 = reactExports.useRef(false);
  return l$2(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}
function b({ onFocus: n }) {
  let [r2, o3] = reactExports.useState(true), u$12 = f$1();
  return r2 ? m$1.createElement(u, { as: "button", type: "button", features: s$1.Focusable, onFocus: (a2) => {
    a2.preventDefault();
    let e2, i2 = 50;
    function t2() {
      if (i2-- <= 0) {
        e2 && cancelAnimationFrame(e2);
        return;
      }
      if (n()) {
        if (cancelAnimationFrame(e2), !u$12.current) return;
        o3(false);
        return;
      }
      e2 = requestAnimationFrame(t2);
    }
    e2 = requestAnimationFrame(t2);
  } }) : null;
}
const s = reactExports.createContext(null);
function a() {
  return { groups: /* @__PURE__ */ new Map(), get(n, t2) {
    var c2;
    let e2 = this.groups.get(n);
    e2 || (e2 = /* @__PURE__ */ new Map(), this.groups.set(n, e2));
    let l2 = (c2 = e2.get(t2)) != null ? c2 : 0;
    e2.set(t2, l2 + 1);
    let o3 = Array.from(e2.keys()).indexOf(t2);
    function i2() {
      let u2 = e2.get(t2);
      u2 > 1 ? e2.set(t2, u2 - 1) : e2.delete(t2);
    }
    return [o3, i2];
  } };
}
function C({ children: n }) {
  let t2 = reactExports.useRef(a());
  return reactExports.createElement(s.Provider, { value: t2 }, n);
}
function d(n) {
  let t2 = reactExports.useContext(s);
  if (!t2) throw new Error("You must wrap your component in a <StableCollection>");
  let e$1 = f(), [l2, o3] = t2.current.get(n, e$1);
  return reactExports.useEffect(() => o3, []), l2;
}
function f() {
  var l2, o3, i2;
  let n = (i2 = (o3 = (l2 = reactExports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : l2.ReactCurrentOwner) == null ? void 0 : o3.current) != null ? i2 : null;
  if (!n) return Symbol();
  let t2 = [], e$1 = n;
  for (; e$1; ) t2.push(e$1.index), e$1 = e$1.return;
  return "$." + t2.join(".");
}
var ue = ((t2) => (t2[t2.Forwards = 0] = "Forwards", t2[t2.Backwards = 1] = "Backwards", t2))(ue || {}), Te = ((l2) => (l2[l2.Less = -1] = "Less", l2[l2.Equal = 0] = "Equal", l2[l2.Greater = 1] = "Greater", l2))(Te || {}), de = ((a2) => (a2[a2.SetSelectedIndex = 0] = "SetSelectedIndex", a2[a2.RegisterTab = 1] = "RegisterTab", a2[a2.UnregisterTab = 2] = "UnregisterTab", a2[a2.RegisterPanel = 3] = "RegisterPanel", a2[a2.UnregisterPanel = 4] = "UnregisterPanel", a2))(de || {});
let ce = { [0](e2, n) {
  var i2;
  let t2 = I(e2.tabs, (c2) => c2.current), l2 = I(e2.panels, (c2) => c2.current), o3 = t2.filter((c2) => {
    var p2;
    return !((p2 = c2.current) != null && p2.hasAttribute("disabled"));
  }), a2 = { ...e2, tabs: t2, panels: l2 };
  if (n.index < 0 || n.index > t2.length - 1) {
    let c2 = u$2(Math.sign(n.index - e2.selectedIndex), { [-1]: () => 1, [0]: () => u$2(Math.sign(n.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    if (o3.length === 0) return a2;
    let p2 = u$2(c2, { [0]: () => t2.indexOf(o3[0]), [1]: () => t2.indexOf(o3[o3.length - 1]) });
    return { ...a2, selectedIndex: p2 === -1 ? e2.selectedIndex : p2 };
  }
  let T2 = t2.slice(0, n.index), m2 = [...t2.slice(n.index), ...T2].find((c2) => o3.includes(c2));
  if (!m2) return a2;
  let b2 = (i2 = t2.indexOf(m2)) != null ? i2 : e2.selectedIndex;
  return b2 === -1 && (b2 = e2.selectedIndex), { ...a2, selectedIndex: b2 };
}, [1](e2, n) {
  if (e2.tabs.includes(n.tab)) return e2;
  let t2 = e2.tabs[e2.selectedIndex], l2 = I([...e2.tabs, n.tab], (a2) => a2.current), o3 = e2.selectedIndex;
  return e2.info.current.isControlled || (o3 = l2.indexOf(t2), o3 === -1 && (o3 = e2.selectedIndex)), { ...e2, tabs: l2, selectedIndex: o3 };
}, [2](e2, n) {
  return { ...e2, tabs: e2.tabs.filter((t2) => t2 !== n.tab) };
}, [3](e2, n) {
  return e2.panels.includes(n.panel) ? e2 : { ...e2, panels: I([...e2.panels, n.panel], (t2) => t2.current) };
}, [4](e2, n) {
  return { ...e2, panels: e2.panels.filter((t2) => t2 !== n.panel) };
} }, X = reactExports.createContext(null);
X.displayName = "TabsDataContext";
function F(e2) {
  let n = reactExports.useContext(X);
  if (n === null) {
    let t2 = new Error(`<${e2} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, F), t2;
  }
  return n;
}
let $ = reactExports.createContext(null);
$.displayName = "TabsActionsContext";
function q(e2) {
  let n = reactExports.useContext($);
  if (n === null) {
    let t2 = new Error(`<${e2} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, q), t2;
  }
  return n;
}
function fe(e2, n) {
  return u$2(n.type, ce, e2, n);
}
let be = reactExports.Fragment;
function me(e2, n) {
  let { defaultIndex: t2 = 0, vertical: l2 = false, manual: o3 = false, onChange: a2, selectedIndex: T2 = null, ...R2 } = e2;
  const m2 = l2 ? "vertical" : "horizontal", b$1 = o3 ? "manual" : "auto";
  let i2 = T2 !== null, c2 = s$3({ isControlled: i2 }), p2 = y(n), [u2, f2] = reactExports.useReducer(fe, { info: c2, selectedIndex: T2 != null ? T2 : t2, tabs: [], panels: [] }), P = reactExports.useMemo(() => ({ selectedIndex: u2.selectedIndex }), [u2.selectedIndex]), g = s$3(a2 || (() => {
  })), E = s$3(u2.tabs), L = reactExports.useMemo(() => ({ orientation: m2, activation: b$1, ...u2 }), [m2, b$1, u2]), A = o$3((s2) => (f2({ type: 1, tab: s2 }), () => f2({ type: 2, tab: s2 }))), S2 = o$3((s2) => (f2({ type: 3, panel: s2 }), () => f2({ type: 4, panel: s2 }))), k2 = o$3((s2) => {
    h.current !== s2 && g.current(s2), i2 || f2({ type: 0, index: s2 });
  }), h = s$3(i2 ? e2.selectedIndex : u2.selectedIndex), W = reactExports.useMemo(() => ({ registerTab: A, registerPanel: S2, change: k2 }), []);
  l$2(() => {
    f2({ type: 0, index: T2 != null ? T2 : t2 });
  }, [T2]), l$2(() => {
    if (h.current === void 0 || u2.tabs.length <= 0) return;
    let s2 = I(u2.tabs, (d2) => d2.current);
    s2.some((d2, M2) => u2.tabs[M2] !== d2) && k2(s2.indexOf(u2.tabs[h.current]));
  });
  let O2 = { ref: p2 };
  return m$1.createElement(C, null, m$1.createElement($.Provider, { value: W }, m$1.createElement(X.Provider, { value: L }, L.tabs.length <= 0 && m$1.createElement(b, { onFocus: () => {
    var s2, r2;
    for (let d2 of E.current) if (((s2 = d2.current) == null ? void 0 : s2.tabIndex) === 0) return (r2 = d2.current) == null || r2.focus(), true;
    return false;
  } }), C$1({ ourProps: O2, theirProps: R2, slot: P, defaultTag: be, name: "Tabs" }))));
}
let Pe = "div";
function ye(e2, n) {
  let { orientation: t2, selectedIndex: l2 } = F("Tab.List"), o3 = y(n);
  return C$1({ ourProps: { ref: o3, role: "tablist", "aria-orientation": t2 }, theirProps: e2, slot: { selectedIndex: l2 }, defaultTag: Pe, name: "Tabs.List" });
}
let xe = "button";
function ge(e2, n) {
  var O2, s2;
  let t2 = I$1(), { id: l2 = `headlessui-tabs-tab-${t2}`, ...o$22 } = e2, { orientation: a2, activation: T$12, selectedIndex: R2, tabs: m2, panels: b2 } = F("Tab"), i2 = q("Tab"), c2 = F("Tab"), p2 = reactExports.useRef(null), u2 = y(p2, n);
  l$2(() => i2.registerTab(p2), [i2, p2]);
  let f2 = d("tabs"), P = m2.indexOf(p2);
  P === -1 && (P = f2);
  let g = P === R2, E = o$3((r2) => {
    var M2;
    let d2 = r2();
    if (d2 === N.Success && T$12 === "auto") {
      let K = (M2 = o$1(p2)) == null ? void 0 : M2.activeElement, z = c2.tabs.findIndex((te) => te.current === K);
      z !== -1 && i2.change(z);
    }
    return d2;
  }), L = o$3((r2) => {
    let d2 = m2.map((K) => K.current).filter(Boolean);
    if (r2.key === o2.Space || r2.key === o2.Enter) {
      r2.preventDefault(), r2.stopPropagation(), i2.change(P);
      return;
    }
    switch (r2.key) {
      case o2.Home:
      case o2.PageUp:
        return r2.preventDefault(), r2.stopPropagation(), E(() => O$1(d2, M.First));
      case o2.End:
      case o2.PageDown:
        return r2.preventDefault(), r2.stopPropagation(), E(() => O$1(d2, M.Last));
    }
    if (E(() => u$2(a2, { vertical() {
      return r2.key === o2.ArrowUp ? O$1(d2, M.Previous | M.WrapAround) : r2.key === o2.ArrowDown ? O$1(d2, M.Next | M.WrapAround) : N.Error;
    }, horizontal() {
      return r2.key === o2.ArrowLeft ? O$1(d2, M.Previous | M.WrapAround) : r2.key === o2.ArrowRight ? O$1(d2, M.Next | M.WrapAround) : N.Error;
    } })) === N.Success) return r2.preventDefault();
  }), A = reactExports.useRef(false), S2 = o$3(() => {
    var r2;
    A.current || (A.current = true, (r2 = p2.current) == null || r2.focus({ preventScroll: true }), i2.change(P), t$1(() => {
      A.current = false;
    }));
  }), k2 = o$3((r2) => {
    r2.preventDefault();
  }), h = reactExports.useMemo(() => {
    var r2;
    return { selected: g, disabled: (r2 = e2.disabled) != null ? r2 : false };
  }, [g, e2.disabled]), W = { ref: u2, onKeyDown: L, onMouseDown: k2, onClick: S2, id: l2, role: "tab", type: T(e2, p2), "aria-controls": (s2 = (O2 = b2[P]) == null ? void 0 : O2.current) == null ? void 0 : s2.id, "aria-selected": g, tabIndex: g ? 0 : -1 };
  return C$1({ ourProps: W, theirProps: o$22, slot: h, defaultTag: xe, name: "Tabs.Tab" });
}
let Ee = "div";
function Ae(e2, n) {
  let { selectedIndex: t2 } = F("Tab.Panels"), l2 = y(n), o3 = reactExports.useMemo(() => ({ selectedIndex: t2 }), [t2]);
  return C$1({ ourProps: { ref: l2 }, theirProps: e2, slot: o3, defaultTag: Ee, name: "Tabs.Panels" });
}
let Re = "div", Le = O.RenderStrategy | O.Static;
function _e(e2, n) {
  var E, L, A, S2;
  let t2 = I$1(), { id: l2 = `headlessui-tabs-panel-${t2}`, tabIndex: o3 = 0, ...a2 } = e2, { selectedIndex: T2, tabs: R2, panels: m2 } = F("Tab.Panel"), b2 = q("Tab.Panel"), i2 = reactExports.useRef(null), c2 = y(i2, n);
  l$2(() => b2.registerPanel(i2), [b2, i2, l2]);
  let p2 = d("panels"), u$12 = m2.indexOf(i2);
  u$12 === -1 && (u$12 = p2);
  let f2 = u$12 === T2, P = reactExports.useMemo(() => ({ selected: f2 }), [f2]), g = { ref: c2, id: l2, role: "tabpanel", "aria-labelledby": (L = (E = R2[u$12]) == null ? void 0 : E.current) == null ? void 0 : L.id, tabIndex: f2 ? o3 : -1 };
  return !f2 && ((A = a2.unmount) == null || A) && !((S2 = a2.static) != null && S2) ? m$1.createElement(u, { as: "span", "aria-hidden": "true", ...g }) : C$1({ ourProps: g, theirProps: a2, slot: P, defaultTag: Re, features: Le, visible: f2, name: "Tabs.Panel" });
}
let Se = U(ge), Ie = U(me), De = U(ye), Fe = U(Ae), he = U(_e), $e = Object.assign(Se, { Group: Ie, List: De, Panels: Fe, Panel: he });
function r(e2) {
  var t2, f2, n = "";
  if ("string" == typeof e2 || "number" == typeof e2) n += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) {
    var o3 = e2.length;
    for (t2 = 0; t2 < o3; t2++) e2[t2] && (f2 = r(e2[t2])) && (n && (n += " "), n += f2);
  } else for (f2 in e2) e2[f2] && (n && (n += " "), n += f2);
  return n;
}
function clsx() {
  for (var e2, t2, f2 = 0, n = "", o3 = arguments.length; f2 < o3; f2++) (e2 = arguments[f2]) && (t2 = r(e2)) && (n && (n += " "), n += t2);
  return n;
}
const weeklyData = [
  {
    week: 1,
    module: "Foundations of Data Analysis",
    skills: [
      "Basic data analysis process",
      "Understanding data types",
      "Cleaning/sorting data in Excel",
      "Using basic Excel formulas"
    ]
  },
  {
    week: 2,
    module: "Foundations of Data Analysis",
    skills: [
      "Advanced Excel techniques (VLOOKUP, INDEX-MATCH)",
      "Creating pivot tables",
      "Building simple dashboards"
    ]
  },
  {
    week: 3,
    module: "Foundations of Data Analysis",
    skills: [
      "Principles of data visualization",
      "Introduction to Tableau and Power BI",
      "Creating basic visualizations"
    ]
  },
  {
    week: 4,
    module: "SQL for Data Analysis",
    skills: [
      "Writing basic SQL queries (SELECT, WHERE, ORDER BY)",
      "Filtering data",
      "Using conditional statements"
    ]
  },
  {
    week: 5,
    module: "SQL for Data Analysis",
    skills: [
      "Performing data aggregation (SUM, AVG, COUNT)",
      "Grouping data",
      "Joining tables (INNER JOIN, LEFT JOIN)"
    ]
  },
  {
    week: 6,
    module: "SQL for Data Analysis",
    skills: [
      "Using advanced SQL techniques (subqueries, CASE statements, window functions)",
      "Data manipulation"
    ]
  },
  {
    week: 7,
    module: "Statistics and Probability",
    skills: [
      "Descriptive statistics (mean, median, mode, variance, standard deviation)",
      "Summarizing data characteristics"
    ]
  },
  {
    week: 8,
    module: "Statistics and Probability",
    skills: [
      "Probability basics",
      "Hypothesis testing (t-tests, p-values)",
      "Interpreting statistical significance"
    ]
  },
  {
    week: 9,
    module: "Statistics and Feature Engineering",
    skills: [
      "Understanding correlation vs. causation",
      "Feature engineering basics (scaling, encoding)",
      "Creating usable features"
    ]
  },
  {
    week: 10,
    module: "Python for Data Analysis",
    skills: [
      "Python fundamentals (variables, data types, loops, functions)",
      "Basic scripting for data exploration"
    ]
  },
  {
    week: 11,
    module: "Python for Data Analysis",
    skills: [
      "Data manipulation using Pandas (DataFrames, Series)",
      "Data cleaning, filtering, and aggregation"
    ]
  },
  {
    week: 12,
    module: "Python for Data Analysis",
    skills: [
      "Creating basic and advanced visualizations using Matplotlib and Seaborn (heatmaps, box plots)"
    ]
  },
  {
    week: 13,
    module: "Python for Data Analysis",
    skills: [
      "Conducting exploratory data analysis (EDA)",
      "Identifying patterns",
      "Spotting outliers"
    ]
  },
  {
    week: 14,
    module: "Introduction to Machine Learning",
    skills: [
      "Basics of machine learning",
      "Supervised learning (linear regression, classification)",
      "Evaluating models"
    ]
  },
  {
    week: 15,
    module: "Advanced Business Intelligence",
    skills: [
      "Creating interactive dashboards in Tableau and Power BI",
      "Using filters, slicers, and drill-downs"
    ]
  },
  {
    week: 16,
    module: "AI-Powered Dashboards",
    skills: [
      "Integrating machine learning outputs into dashboards",
      "Designing predictive dashboards"
    ]
  },
  {
    week: 17,
    module: "Natural Language Processing (NLP)",
    skills: [
      "Basics of NLP",
      "Sentiment analysis",
      "Processing user feedback for actionable insights"
    ]
  },
  {
    week: 18,
    module: "Product Analytics Specialization",
    skills: [
      "Funnel analysis",
      "User journey mapping",
      "Calculating conversion metrics",
      "Identifying drop-offs"
    ]
  },
  {
    week: 19,
    module: "Product Analytics Specialization",
    skills: [
      "Time series forecasting (ARIMA, Prophet)",
      "Predicting DAU/MAU trends",
      "Interpreting forecast outputs"
    ]
  },
  {
    week: 20,
    module: "Product Analytics Specialization",
    skills: [
      "Customer segmentation (clustering, RFM analysis)",
      "Proposing personalized product strategies"
    ]
  },
  {
    week: 21,
    module: "Capstone Project",
    skills: [
      "Integrating all skills",
      "Conducting analysis",
      "Building ML models",
      "Creating dashboards",
      "Presenting actionable insights"
    ]
  }
];
const ProgressBar = ({ currentWeek, totalWeeks }) => {
  const progress = currentWeek / totalWeeks * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/10 rounded-full h-4 mb-8 overflow-hidden glass-effect", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { width: 0 },
      animate: { width: `${progress}%` },
      transition: { duration: 0.5, ease: "easeInOut" },
      className: "h-full bg-gradient-to-r from-[#1A5D1A] to-[#1F441E] relative",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+PC9zdmc+')] opacity-20" })
    }
  ) });
};
const WeeklyContent = ({
  title,
  items,
  delay,
  variant
}) => {
  const icons = {
    topics: BookOpen,
    skills: GraduationCap
  };
  const Icon = icons[variant];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay },
      className: "glass-effect rounded-xl p-6 h-full bg-black/40",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-[#1A5D1A]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-[#E4EFE7]", children: title })
        ] }),
        variant === "skills" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.3, delay: delay + idx * 0.1 },
            className: "bg-[#1A5D1A]/90 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm",
            children: item
          },
          idx
        )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.li,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.3, delay: delay + idx * 0.1 },
            className: "flex items-center gap-2 text-[#E4EFE7]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#1A5D1A]" }),
              item
            ]
          },
          idx
        )) })
      ]
    }
  );
};
function DataJourneyEIE() {
  const [currentWeek, setCurrentWeek] = reactExports.useState(1);
  const [visibleRange, setVisibleRange] = reactExports.useState({ start: 0, end: 3 });
  const [isInitialMount, setIsInitialMount] = reactExports.useState(true);
  const tabsContainerRef = reactExports.useRef(null);
  const scrollToWeek = (weekIndex) => {
    const tabElement = tabsContainerRef.current?.children[weekIndex];
    if (tabElement) {
      tabElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
    }
  };
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      if ((currentWeek - 1) % 3 === 2) {
        setCurrentWeek((prev) => Math.min(prev + 1, weeklyData.length));
      }
    }, 5e3);
    return () => clearInterval(interval);
  }, [currentWeek]);
  reactExports.useEffect(() => {
    if (isInitialMount) {
      setIsInitialMount(false);
      return;
    }
    const newStart = Math.floor((currentWeek - 1) / 3) * 3;
    setVisibleRange({
      start: newStart,
      end: Math.min(newStart + 3, weeklyData.length)
    });
    scrollToWeek(newStart);
  }, [currentWeek]);
  const handleTabChange = (index) => {
    setCurrentWeek(index + 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative py-16 px-0 sm:px-4 md:px-6 lg:px-8 overflow-x-hidden bg-[#0B1120]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 w-full h-full z-0 pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-[#1A5D1A]/5 rounded-full filter blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-[#1F441E]/5 rounded-full filter blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "max-w-7xl mx-auto space-y-12 relative z-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h2,
            {
              className: "text-4xl sm:text-5xl font-bold text-center",
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.2 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#E4EFE7]", children: "What Will You " }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#1A5D1A] relative inline-block", children: [
                  "Learn",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      className: "absolute -bottom-2 left-0 w-full h-1 bg-[#1A5D1A]",
                      initial: { scaleX: 0 },
                      animate: { scaleX: 1 },
                      transition: { duration: 0.5, delay: 0.5 }
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { currentWeek, totalWeeks: weeklyData.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs($e.Group, { onChange: handleTabChange, selectedIndex: currentWeek - 1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-effect rounded-2xl p-0.5 sm:p-2 shadow-xl backdrop-blur-sm bg-[#1A5D1A]/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              $e.List,
              {
                ref: tabsContainerRef,
                className: "flex space-x-1 sm:space-x-2 rounded-xl p-0.5 sm:p-1 overflow-x-auto scroll-smooth hide-scrollbar",
                children: weeklyData.map((week, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  $e,
                  {
                    className: ({ selected }) => clsx(
                      "tab-button rounded-lg",
                      "focus:outline-none ring-offset-2 ring-offset-[#1A5D1A] focus:ring-2",
                      "px-4 py-2.5 text-sm font-medium",
                      "transition-all duration-200 ease-in-out",
                      selected ? "bg-[#E4EFE7] shadow-md text-[#1A5D1A]" : "text-[#E4EFE7] hover:bg-[#1A5D1A]/[0.12] hover:text-[#E4EFE7]/90"
                    ),
                    children: [
                      "Week ",
                      week.week
                    ]
                  },
                  idx
                ))
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e.Panels, { className: "mt-8", children: weeklyData.map((week, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              $e.Panel,
              {
                className: clsx("rounded-xl focus:outline-none"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -20 },
                    transition: { duration: 0.3 },
                    className: "grid md:grid-cols-2 gap-8",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        WeeklyContent,
                        {
                          title: "Module",
                          items: [week.module],
                          delay: 0.1,
                          variant: "topics"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        WeeklyContent,
                        {
                          title: "Topics",
                          items: week.skills,
                          delay: 0.2,
                          variant: "skills"
                        }
                      )
                    ]
                  }
                )
              },
              idx
            )) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-center items-center gap-4 mt-8 glass-effect p-4 rounded-xl backdrop-blur-sm bg-[#1A5D1A]/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-8 w-8 text-[#1A5D1A]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-bold text-[#E4EFE7]", children: "Interview Session & Industry session every weekend" })
          ] })
        ]
      }
    )
  ] });
}
export {
  DataJourneyEIE as default
};
