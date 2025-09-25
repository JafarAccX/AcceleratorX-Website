import { r as reactExports, N as reactDomExports, k as useCourseContext, j as jsxRuntimeExports } from "./main-Bu4yalNQ.js";
import EnrollmentModal from "./EnrollmentModal-MIBgwbs0.js";
import { A as AnimatePresence } from "./index-BpgLIKka.js";
var updateQueue = makeQueue();
var raf = (fn) => schedule(fn, updateQueue);
var writeQueue = makeQueue();
raf.write = (fn) => schedule(fn, writeQueue);
var onStartQueue = makeQueue();
raf.onStart = (fn) => schedule(fn, onStartQueue);
var onFrameQueue = makeQueue();
raf.onFrame = (fn) => schedule(fn, onFrameQueue);
var onFinishQueue = makeQueue();
raf.onFinish = (fn) => schedule(fn, onFinishQueue);
var timeouts = [];
raf.setTimeout = (handler, ms) => {
  const time = raf.now() + ms;
  const cancel = () => {
    const i = timeouts.findIndex((t) => t.cancel == cancel);
    if (~i)
      timeouts.splice(i, 1);
    pendingCount -= ~i ? 1 : 0;
  };
  const timeout = { time, handler, cancel };
  timeouts.splice(findTimeout(time), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};
var findTimeout = (time) => ~(~timeouts.findIndex((t) => t.time > time) || ~timeouts.length);
raf.cancel = (fn) => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  onFinishQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
};
raf.sync = (fn) => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};
raf.throttle = (fn) => {
  let lastArgs;
  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }
  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }
  throttled.handler = fn;
  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };
  return throttled;
};
var nativeRaf = typeof window != "undefined" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (() => {
  })
);
raf.use = (impl) => nativeRaf = impl;
raf.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
raf.batchedUpdates = (fn) => fn();
raf.catch = console.error;
raf.frameLoop = "always";
raf.advance = () => {
  if (raf.frameLoop !== "demand") {
    console.warn(
      "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
    );
  } else {
    update();
  }
};
var ts = -1;
var pendingCount = 0;
var sync = false;
function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}
function start() {
  if (ts < 0) {
    ts = 0;
    if (raf.frameLoop !== "demand") {
      nativeRaf(loop);
    }
  }
}
function stop() {
  ts = -1;
}
function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}
function update() {
  const prevTs = ts;
  ts = raf.now();
  const count = findTimeout(ts);
  if (count) {
    eachSafely(timeouts.splice(0, count), (t) => t.handler());
    pendingCount -= count;
  }
  if (!pendingCount) {
    stop();
    return;
  }
  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
}
function makeQueue() {
  let next = /* @__PURE__ */ new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },
    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },
    flush(arg) {
      if (current.size) {
        next = /* @__PURE__ */ new Set();
        pendingCount -= current.size;
        eachSafely(current, (fn) => fn(arg) && next.add(fn));
        pendingCount += next.size;
        current = next;
      }
    }
  };
}
function eachSafely(values, each2) {
  values.forEach((value) => {
    try {
      each2(value);
    } catch (e) {
      raf.catch(e);
    }
  });
}
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var globals_exports = {};
__export(globals_exports, {
  assign: () => assign,
  colors: () => colors,
  createStringInterpolator: () => createStringInterpolator,
  skipAnimation: () => skipAnimation,
  to: () => to,
  willAdvance: () => willAdvance
});
function noop() {
}
var defineHidden = (obj, key, value) => Object.defineProperty(obj, key, { value, writable: true, configurable: true });
var is = {
  arr: Array.isArray,
  obj: (a) => !!a && a.constructor.name === "Object",
  fun: (a) => typeof a === "function",
  str: (a) => typeof a === "string",
  num: (a) => typeof a === "number",
  und: (a) => a === void 0
};
function isEqual(a, b) {
  if (is.arr(a)) {
    if (!is.arr(b) || a.length !== b.length)
      return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i])
        return false;
    }
    return true;
  }
  return a === b;
}
var each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx2) {
  if (is.arr(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx2, obj[i], `${i}`);
    }
    return;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx2, obj[key], key);
    }
  }
}
var toArray = (a) => is.und(a) ? [] : is.arr(a) ? a : [a];
var isSSR = () => typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
var createStringInterpolator;
var to;
var colors = null;
var skipAnimation = false;
var willAdvance = noop;
var assign = (globals) => {
  if (globals.to)
    to = globals.to;
  if (globals.now)
    raf.now = globals.now;
  if (globals.colors !== void 0)
    colors = globals.colors;
  if (globals.skipAnimation != null)
    skipAnimation = globals.skipAnimation;
  if (globals.createStringInterpolator)
    createStringInterpolator = globals.createStringInterpolator;
  if (globals.requestAnimationFrame)
    raf.use(globals.requestAnimationFrame);
  if (globals.batchedUpdates)
    raf.batchedUpdates = globals.batchedUpdates;
  if (globals.willAdvance)
    willAdvance = globals.willAdvance;
  if (globals.frameLoop)
    raf.frameLoop = globals.frameLoop;
};
var startQueue = /* @__PURE__ */ new Set();
var currentFrame = [];
var prevFrame = [];
var priority = 0;
var frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      raf(advance);
    }
  },
  /** Advance all animations by the given time. */
  advance,
  /** Call this when an animation's priority changes. */
  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);
      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    currentFrame = [];
    startQueue.clear();
  }
};
function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  raf(advance);
}
function startSafely(animation) {
  if (!currentFrame.includes(animation))
    startUnsafely(animation);
}
function startUnsafely(animation) {
  currentFrame.splice(
    findIndex(currentFrame, (other) => other.priority > animation.priority),
    0,
    animation
  );
}
function advance(dt) {
  const nextFrame = prevFrame;
  for (let i = 0; i < currentFrame.length; i++) {
    const animation = currentFrame[i];
    priority = animation.priority;
    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);
      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }
  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}
function findIndex(arr, test) {
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
}
var colors2 = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...parts) {
  return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp(
  "hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)
);
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;
function normalizeColor(color) {
  let match;
  if (typeof color === "number") {
    return color >>> 0 === color && color >= 0 && color <= 4294967295 ? color : null;
  }
  if (match = hex6.exec(color))
    return parseInt(match[1] + "ff", 16) >>> 0;
  if (colors && colors[color] !== void 0) {
    return colors[color];
  }
  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    255) >>> // a
    0;
  }
  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }
  if (match = hex3.exec(color)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      "ff",
      // a
      16
    ) >>> 0;
  }
  if (match = hex8.exec(color))
    return parseInt(match[1], 16) >>> 0;
  if (match = hex4.exec(color)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      match[4] + match[4],
      // a
      16
    ) >>> 0;
  }
  if (match = hsl.exec(color)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | 255) >>> // a
    0;
  }
  if (match = hsla.exec(color)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | parse1(match[4])) >>> // a
    0;
  }
  return null;
}
function hue2rgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}
function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0)
    return 0;
  if (int > 255)
    return 255;
  return int;
}
function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = parseFloat(str);
  if (num < 0)
    return 0;
  if (num > 1)
    return 255;
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0)
    return 0;
  if (int > 100)
    return 1;
  return int / 100;
}
function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null)
    return input;
  int32Color = int32Color || 0;
  const r = (int32Color & 4278190080) >>> 24;
  const g = (int32Color & 16711680) >>> 16;
  const b = (int32Color & 65280) >>> 8;
  const a = (int32Color & 255) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
var createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }
  if (is.arr(range)) {
    return createInterpolator({
      range,
      output,
      extrapolate
    });
  }
  if (is.str(range.output[0])) {
    return createStringInterpolator(range);
  }
  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || "extend";
  const extrapolateRight = config.extrapolateRight || config.extrapolate || "extend";
  const easing = config.easing || ((t) => t);
  return (input) => {
    const range2 = findRange(input, inputRange);
    return interpolate(
      input,
      inputRange[range2],
      inputRange[range2 + 1],
      outputRange[range2],
      outputRange[range2 + 1],
      easing,
      extrapolateLeft,
      extrapolateRight,
      config.map
    );
  };
};
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity")
      return result;
    else if (extrapolateLeft === "clamp")
      result = inputMin;
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity")
      return result;
    else if (extrapolateRight === "clamp")
      result = inputMax;
  }
  if (outputMin === outputMax)
    return outputMin;
  if (inputMin === inputMax)
    return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity)
    result = -result;
  else if (inputMax === Infinity)
    result = result - inputMin;
  else
    result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity)
    result = -result;
  else if (outputMax === Infinity)
    result = result + outputMin;
  else
    result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i)
    if (inputRange[i] >= input)
      break;
  return i - 1;
}
var $get = Symbol.for("FluidValue.get");
var $observers = Symbol.for("FluidValue.observers");
var hasFluidValue = (arg) => Boolean(arg && arg[$get]);
var getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
function callFluidObserver(observer2, event) {
  if (observer2.eventObserved) {
    observer2.eventObserved(event);
  } else {
    observer2(event);
  }
}
function callFluidObservers(target, event) {
  const observers = target[$observers];
  if (observers) {
    observers.forEach((observer2) => {
      callFluidObserver(observer2, event);
    });
  }
}
var FluidValue = class {
  constructor(get) {
    if (!get && !(get = this.get)) {
      throw Error("Unknown getter");
    }
    setFluidGetter(this, get);
  }
};
var setFluidGetter = (target, get) => setHidden(target, $get, get);
function addFluidObserver(target, observer2) {
  if (target[$get]) {
    let observers = target[$observers];
    if (!observers) {
      setHidden(target, $observers, observers = /* @__PURE__ */ new Set());
    }
    if (!observers.has(observer2)) {
      observers.add(observer2);
      if (target.observerAdded) {
        target.observerAdded(observers.size, observer2);
      }
    }
  }
  return observer2;
}
function removeFluidObserver(target, observer2) {
  const observers = target[$observers];
  if (observers && observers.has(observer2)) {
    const count = observers.size - 1;
    if (count) {
      observers.delete(observer2);
    } else {
      target[$observers] = null;
    }
    if (target.observerRemoved) {
      target.observerRemoved(count, observer2);
    }
  }
}
var setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
var variableToRgba = (input) => {
  const [token, fallback] = parseCSSVariable(input);
  if (!token || isSSR()) {
    return input;
  }
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith("--")) {
    const value2 = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
    if (value2) {
      return value2;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }
  return input;
};
var parseCSSVariable = (current) => {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};
var namedColorRegex;
var rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
var createStringInterpolator2 = (config) => {
  if (!namedColorRegex)
    namedColorRegex = colors ? (
      // match color names, ignore partial matches
      new RegExp(`(${Object.keys(colors).join("|")})(?!\\w)`, "g")
    ) : (
      // never match
      /^\b$/
    );
  const output = config.output.map((value) => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map((value) => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map(
    (_, i) => keyframes.map((values) => {
      if (!(i in values)) {
        throw Error('The arity of each "output" value must be equal');
      }
      return values[i];
    })
  );
  const interpolators = outputRanges.map(
    (output2) => createInterpolator({ ...config, output: output2 })
  );
  return (input) => {
    const missingUnit = !unitRegex.test(output[0]) && output.find((value) => unitRegex.test(value))?.replace(numberRegex, "");
    let i = 0;
    return output[0].replace(
      numberRegex,
      () => `${interpolators[i++](input)}${missingUnit || ""}`
    ).replace(rgbaRegex, rgbaRound);
  };
};
var prefix = "react-spring: ";
var once = (fn) => {
  const func = fn;
  let called = false;
  if (typeof func != "function") {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }
  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};
var warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(
    `${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
once(console.warn);
function isAnimatedString(value) {
  return is.str(value) && (value[0] == "#" || /\d/.test(value) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !isSSR() && cssVariableRegex.test(value) || value in (colors || {}));
}
var useIsomorphicLayoutEffect = isSSR() ? reactExports.useEffect : reactExports.useLayoutEffect;
var useIsMounted = () => {
  const isMounted = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
function useForceUpdate() {
  const update2 = reactExports.useState()[1];
  const isMounted = useIsMounted();
  return () => {
    if (isMounted.current) {
      update2(Math.random());
    }
  };
}
function useMemoOne(getResult, inputs) {
  const [initial] = reactExports.useState(
    () => ({
      inputs,
      result: getResult()
    })
  );
  const committed = reactExports.useRef();
  const prevCache = committed.current;
  let cache = prevCache;
  if (cache) {
    const useCache = Boolean(
      inputs && cache.inputs && areInputsEqual(inputs, cache.inputs)
    );
    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }
  reactExports.useEffect(() => {
    committed.current = cache;
    if (prevCache == initial) {
      initial.inputs = initial.result = void 0;
    }
  }, [cache]);
  return cache.result;
}
function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }
  for (let i = 0; i < next.length; i++) {
    if (next[i] !== prev[i]) {
      return false;
    }
  }
  return true;
}
var useOnce = (effect) => reactExports.useEffect(effect, emptyDeps);
var emptyDeps = [];
var $node = Symbol.for("Animated:node");
var isAnimated = (value) => !!value && value[$node] === value;
var getAnimated = (owner) => owner && owner[$node];
var setAnimated = (owner, node) => defineHidden(owner, $node, node);
var getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
var Animated = class {
  constructor() {
    setAnimated(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
};
var AnimatedValue = class extends Animated {
  constructor(_value) {
    super();
    this._value = _value;
    this.done = true;
    this.durationProgress = 0;
    if (is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }
  /** @internal */
  static create(value) {
    return new AnimatedValue(value);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(value, step) {
    if (is.num(value)) {
      this.lastPosition = value;
      if (step) {
        value = Math.round(value / step) * step;
        if (this.done) {
          this.lastPosition = value;
        }
      }
    }
    if (this._value === value) {
      return false;
    }
    this._value = value;
    return true;
  }
  reset() {
    const { done } = this;
    this.done = false;
    if (is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done)
        this.lastVelocity = null;
      this.v0 = null;
    }
  }
};
var AnimatedString = class extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = createInterpolator({
      output: [value, value]
    });
  }
  /** @internal */
  static create(value) {
    return new AnimatedString(value);
  }
  getValue() {
    const value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }
  setValue(value) {
    if (is.str(value)) {
      if (value == this._string) {
        return false;
      }
      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }
    return true;
  }
  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal]
      });
    }
    this._value = 0;
    super.reset();
  }
};
var TreeContext = { dependencies: null };
var AnimatedObject = class extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }
  getValue(animated2) {
    const values = {};
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated2);
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source);
      } else if (!animated2) {
        values[key] = source;
      }
    });
    return values;
  }
  /** Replace the raw object data */
  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }
  reset() {
    if (this.payload) {
      each(this.payload, (node) => node.reset());
    }
  }
  /** Create a payload set. */
  _makePayload(source) {
    if (source) {
      const payload = /* @__PURE__ */ new Set();
      eachProp(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }
  /** Add to a payload set. */
  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source);
    }
    const payload = getPayload(source);
    if (payload) {
      each(payload, (node) => this.add(node));
    }
  }
};
var AnimatedArray = class extends AnimatedObject {
  constructor(source) {
    super(source);
  }
  /** @internal */
  static create(source) {
    return new AnimatedArray(source);
  }
  getValue() {
    return this.source.map((node) => node.getValue());
  }
  setValue(source) {
    const payload = this.getPayload();
    if (source.length == payload.length) {
      return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
    }
    super.setValue(source.map(makeAnimated));
    return true;
  }
};
function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}
function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}
var withAnimated = (Component, host2) => {
  const hasInstance = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent
  );
  return reactExports.forwardRef((givenProps, givenRef) => {
    const instanceRef = reactExports.useRef(null);
    const ref = hasInstance && // eslint-disable-next-line react-hooks/rules-of-hooks
    reactExports.useCallback(
      (value) => {
        instanceRef.current = updateRef(givenRef, value);
      },
      [givenRef]
    );
    const [props, deps] = getAnimatedState(givenProps, host2);
    const forceUpdate = useForceUpdate();
    const callback = () => {
      const instance = instanceRef.current;
      if (hasInstance && !instance) {
        return;
      }
      const didUpdate = instance ? host2.applyAnimatedValues(instance, props.getValue(true)) : false;
      if (didUpdate === false) {
        forceUpdate();
      }
    };
    const observer = new PropsObserver(callback, deps);
    const observerRef = reactExports.useRef();
    useIsomorphicLayoutEffect(() => {
      observerRef.current = observer;
      each(deps, (dep) => addFluidObserver(dep, observer));
      return () => {
        if (observerRef.current) {
          each(
            observerRef.current.deps,
            (dep) => removeFluidObserver(dep, observerRef.current)
          );
          raf.cancel(observerRef.current.update);
        }
      };
    });
    reactExports.useEffect(callback, []);
    useOnce(() => () => {
      const observer2 = observerRef.current;
      each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
    });
    const usedProps = host2.getComponentProps(props.getValue());
    return /* @__PURE__ */ reactExports.createElement(Component, { ...usedProps, ref });
  });
};
var PropsObserver = class {
  constructor(update2, deps) {
    this.update = update2;
    this.deps = deps;
  }
  eventObserved(event) {
    if (event.type == "change") {
      raf.write(this.update);
    }
  }
};
function getAnimatedState(props, host2) {
  const dependencies = /* @__PURE__ */ new Set();
  TreeContext.dependencies = dependencies;
  if (props.style)
    props = {
      ...props,
      style: host2.createAnimatedStyle(props.style)
    };
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}
function updateRef(ref, value) {
  if (ref) {
    if (is.fun(ref))
      ref(value);
    else
      ref.current = value;
  }
  return value;
}
var cacheKey = Symbol.for("AnimatedComponent");
var createHost = (components, {
  applyAnimatedValues: applyAnimatedValues2 = () => false,
  createAnimatedStyle = (style) => new AnimatedObject(style),
  getComponentProps = (props) => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: applyAnimatedValues2,
    createAnimatedStyle,
    getComponentProps
  };
  const animated2 = (Component) => {
    const displayName = getDisplayName(Component) || "Anonymous";
    if (is.str(Component)) {
      Component = animated2[Component] || (animated2[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }
    Component.displayName = `Animated(${displayName})`;
    return Component;
  };
  eachProp(components, (Component, key) => {
    if (is.arr(components)) {
      key = getDisplayName(Component);
    }
    animated2[key] = animated2(Component);
  });
  return {
    animated: animated2
  };
};
var getDisplayName = (arg) => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;
var isFrameValue = (value) => value instanceof FrameValue;
var nextId = 1;
var FrameValue = class extends FluidValue {
  constructor() {
    super(...arguments);
    this.id = nextId++;
    this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority2) {
    if (this._priority != priority2) {
      this._priority = priority2;
      this._onPriorityChange(priority2);
    }
  }
  /** Get the current value */
  get() {
    const node = getAnimated(this);
    return node && node.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...args) {
    return globals_exports.to(this, args);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...args) {
    deprecateInterpolate();
    return globals_exports.to(this, args);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(count) {
    if (count == 1)
      this._attach();
  }
  observerRemoved(count) {
    if (count == 0)
      this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: "change",
      parent: this,
      value,
      idle
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(priority2) {
    if (!this.idle) {
      frameLoop.sort(this);
    }
    callFluidObservers(this, {
      type: "priority",
      parent: this,
      priority: priority2
    });
  }
};
var SpringContext = ({
  children,
  ...props
}) => {
  const inherited = reactExports.useContext(ctx);
  const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
  props = useMemoOne(() => ({ pause, immediate }), [pause, immediate]);
  const { Provider } = ctx;
  return /* @__PURE__ */ reactExports.createElement(Provider, { value: props }, children);
};
var ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target, init) {
  Object.assign(target, reactExports.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}
var Interpolation = class extends FrameValue {
  constructor(source, args) {
    super();
    this.source = source;
    this.idle = true;
    this._active = /* @__PURE__ */ new Set();
    this.calc = createInterpolator(...args);
    const value = this._get();
    const nodeType = getAnimatedType(value);
    setAnimated(this, nodeType.create(value));
  }
  advance(_dt) {
    const value = this._get();
    const oldValue = this.get();
    if (!isEqual(value, oldValue)) {
      getAnimated(this).setValue(value);
      this._onChange(value, this.idle);
    }
    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }
  _get() {
    const inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
    return this.calc(...inputs);
  }
  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      each(getPayload(this), (node) => {
        node.done = false;
      });
      if (globals_exports.skipAnimation) {
        raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        frameLoop.start(this);
      }
    }
  }
  // Observe our sources only when we're observed.
  _attach() {
    let priority2 = 1;
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this);
      }
      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }
        priority2 = Math.max(priority2, source.priority + 1);
      }
    });
    this.priority = priority2;
    this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this);
      }
    });
    this._active.clear();
    becomeIdle(this);
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);
        this._start();
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else if (event.type == "priority") {
      this.priority = toArray(this.source).reduce(
        (highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1),
        0
      );
    }
  }
};
function isIdle(source) {
  return source.idle !== false;
}
function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    each(getPayload(self), (node) => {
      node.done = true;
    });
    callFluidObservers(self, {
      type: "idle",
      parent: self
    });
  }
}
globals_exports.assign({
  createStringInterpolator: createStringInterpolator2,
  to: (source, args) => new Interpolation(source, args)
});
var isCustomPropRE = /^--/;
function dangerousStyleValue(name, value) {
  if (value == null || typeof value === "boolean" || value === "")
    return "";
  if (typeof value === "number" && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]))
    return value + "px";
  return ("" + value).trim();
}
var attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }
  const isFilterElement = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter";
  const {
    className,
    style,
    children,
    scrollTop,
    scrollLeft,
    viewBox,
    ...attributes
  } = props;
  const values = Object.values(attributes);
  const names = Object.keys(attributes).map(
    (name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (n) => "-" + n.toLowerCase()
    ))
  );
  if (children !== void 0) {
    instance.textContent = children;
  }
  for (const name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);
      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }
  names.forEach((name, i) => {
    instance.setAttribute(name, values[i]);
  });
  if (className !== void 0) {
    instance.className = className;
  }
  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }
  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
  if (viewBox !== void 0) {
    instance.setAttribute("viewBox", viewBox);
  }
}
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixKey = (prefix2, key) => prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
var prefixes = ["Webkit", "Ms", "Moz", "O"];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach((prefix2) => acc[prefixKey(prefix2, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);
var domTransforms = /^(matrix|translate|scale|rotate|skew)/;
var pxTransforms = /^(translate)/;
var degTransforms = /^(rotate|skew)/;
var addUnit = (value, unit) => is.num(value) && value !== 0 ? value + unit : value;
var isValueIdentity = (value, id) => is.arr(value) ? value.every((v) => isValueIdentity(v, id)) : is.num(value) ? value === id : parseFloat(value) === id;
var AnimatedStyle = class extends AnimatedObject {
  constructor({ x, y, z, ...style }) {
    const inputs = [];
    const transforms = [];
    if (x || y || z) {
      inputs.push([x || 0, y || 0, z || 0]);
      transforms.push((xyz) => [
        `translate3d(${xyz.map((v) => addUnit(v, "px")).join(",")})`,
        // prettier-ignore
        isValueIdentity(xyz, 0)
      ]);
    }
    eachProp(style, (value, key) => {
      if (key === "transform") {
        inputs.push([value || ""]);
        transforms.push((transform) => [transform, transform === ""]);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (is.und(value))
          return;
        const unit = pxTransforms.test(key) ? "px" : degTransforms.test(key) ? "deg" : "";
        inputs.push(toArray(value));
        transforms.push(
          key === "rotate3d" ? ([x2, y2, z2, deg]) => [
            `rotate3d(${x2},${y2},${z2},${addUnit(deg, unit)})`,
            isValueIdentity(deg, 0)
          ] : (input) => [
            `${key}(${input.map((v) => addUnit(v, unit)).join(",")})`,
            isValueIdentity(input, key.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    });
    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }
    super(style);
  }
};
var FluidTransform = class extends FluidValue {
  constructor(inputs, transforms) {
    super();
    this.inputs = inputs;
    this.transforms = transforms;
    this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let transform = "";
    let identity = true;
    each(this.inputs, (input, i) => {
      const arg1 = getFluidValue(input[0]);
      const [t, id] = this.transforms[i](
        is.arr(arg1) ? arg1 : input.map(getFluidValue)
      );
      transform += " " + t;
      identity = identity && id;
    });
    return identity ? "none" : transform;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(count) {
    if (count == 1)
      each(
        this.inputs,
        (input) => each(
          input,
          (value) => hasFluidValue(value) && addFluidObserver(value, this)
        )
      );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(count) {
    if (count == 0)
      each(
        this.inputs,
        (input) => each(
          input,
          (value) => hasFluidValue(value) && removeFluidObserver(value, this)
        )
      );
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._value = null;
    }
    callFluidObservers(this, event);
  }
};
var primitives = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
globals_exports.assign({
  batchedUpdates: reactDomExports.unstable_batchedUpdates,
  createStringInterpolator: createStringInterpolator2,
  colors: colors2
});
var host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: (style) => new AnimatedStyle(style),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop, scrollLeft, ...props }) => props
});
var animated = host.animated;
const StickyBookNav = () => {
  const [isFormOpen, setIsFormOpen] = reactExports.useState(false);
  const { selectedCourse } = useCourseContext();
  if (!selectedCourse) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      animated.div,
      {
        style: {
          // ...springStyles,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          // Adjusted padding for chat widget while maintaining responsiveness
          paddingRight: "clamp(1rem, 4.5rem, 5vw)"
        },
        className: "bg-gradient-to-r from-slate-800/95 via-slate-700/95 to-slate-900/95 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] backdrop-blur-sm",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-2 sm:px-3 md:px-4 py-2.5 sm:py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white text-sm sm:text-base md:text-lg font-medium leading-tight flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-bounce hidden sm:inline-block", children: "💡" }),
            "Thinking of Switching or kick starting your career?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline-block animate-pulse", children: "🎯" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setIsFormOpen(true),
              className: "w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-5 py-1.5 sm:py-2 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-sm group",
              children: [
                "Apply Scholarship",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300", children: "⚡" })
              ]
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isFormOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      EnrollmentModal,
      {
        isOpen: isFormOpen,
        onClose: () => setIsFormOpen(false)
      }
    ) })
  ] });
};
export {
  StickyBookNav as S
};
