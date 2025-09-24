import { T as requireReact, g as getDefaultExportFromCjs, j as jsxRuntimeExports } from "./main-CfA5h11a.js";
import { u as useInView } from "./index-xRRYW_ZE.js";
import { m as motion } from "./proxy-CHEv0qax.js";
var build = {};
var countUp_umd$1 = { exports: {} };
var countUp_umd = countUp_umd$1.exports;
var hasRequiredCountUp_umd;
function requireCountUp_umd() {
  if (hasRequiredCountUp_umd) return countUp_umd$1.exports;
  hasRequiredCountUp_umd = 1;
  (function(module, exports) {
    !(function(t, i) {
      i(exports);
    })(countUp_umd, (function(t) {
      var i = function() {
        return i = Object.assign || function(t2) {
          for (var i2, n2 = 1, s = arguments.length; n2 < s; n2++) for (var e in i2 = arguments[n2]) Object.prototype.hasOwnProperty.call(i2, e) && (t2[e] = i2[e]);
          return t2;
        }, i.apply(this, arguments);
      }, n = (function() {
        function t2(t3, n2, s) {
          var e = this;
          this.endVal = n2, this.options = s, this.version = "2.9.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t4) {
            e.startTime || (e.startTime = t4);
            var i2 = t4 - e.startTime;
            e.remaining = e.duration - i2, e.useEasing ? e.countDown ? e.frameVal = e.startVal - e.easingFn(i2, 0, e.startVal - e.endVal, e.duration) : e.frameVal = e.easingFn(i2, e.startVal, e.endVal - e.startVal, e.duration) : e.frameVal = e.startVal + (e.endVal - e.startVal) * (i2 / e.duration);
            var n3 = e.countDown ? e.frameVal < e.endVal : e.frameVal > e.endVal;
            e.frameVal = n3 ? e.endVal : e.frameVal, e.frameVal = Number(e.frameVal.toFixed(e.options.decimalPlaces)), e.printValue(e.frameVal), i2 < e.duration ? e.rAF = requestAnimationFrame(e.count) : null !== e.finalEndVal ? e.update(e.finalEndVal) : e.options.onCompleteCallback && e.options.onCompleteCallback();
          }, this.formatNumber = function(t4) {
            var i2, n3, s2, a, o = t4 < 0 ? "-" : "";
            i2 = Math.abs(t4).toFixed(e.options.decimalPlaces);
            var r = (i2 += "").split(".");
            if (n3 = r[0], s2 = r.length > 1 ? e.options.decimal + r[1] : "", e.options.useGrouping) {
              a = "";
              for (var l = 3, u = 0, h = 0, p = n3.length; h < p; ++h) e.options.useIndianSeparators && 4 === h && (l = 2, u = 1), 0 !== h && u % l == 0 && (a = e.options.separator + a), u++, a = n3[p - h - 1] + a;
              n3 = a;
            }
            return e.options.numerals && e.options.numerals.length && (n3 = n3.replace(/[0-9]/g, (function(t5) {
              return e.options.numerals[+t5];
            })), s2 = s2.replace(/[0-9]/g, (function(t5) {
              return e.options.numerals[+t5];
            }))), o + e.options.prefix + n3 + s2 + e.options.suffix;
          }, this.easeOutExpo = function(t4, i2, n3, s2) {
            return n3 * (1 - Math.pow(2, -10 * t4 / s2)) * 1024 / 1023 + i2;
          }, this.options = i(i({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.el = "string" == typeof t3 ? document.getElementById(t3) : t3, n2 = null == n2 ? this.parse(this.el.innerHTML) : n2, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n2), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, t3) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push((function() {
            return e.handleScroll(e);
          })), window.onscroll = function() {
            window.onScrollFns.forEach((function(t4) {
              return t4();
            }));
          }, this.handleScroll(this)));
        }
        return t2.prototype.handleScroll = function(t3) {
          if (t3 && window && !t3.once) {
            var i2 = window.innerHeight + window.scrollY, n2 = t3.el.getBoundingClientRect(), s = n2.top + window.pageYOffset, e = n2.top + n2.height + window.pageYOffset;
            e < i2 && e > window.scrollY && t3.paused ? (t3.paused = false, setTimeout((function() {
              return t3.start();
            }), t3.options.scrollSpyDelay), t3.options.scrollSpyOnce && (t3.once = true)) : (window.scrollY > e || s > i2) && !t3.paused && t3.reset();
          }
        }, t2.prototype.determineDirectionAndSmartEasing = function() {
          var t3 = this.finalEndVal ? this.finalEndVal : this.endVal;
          this.countDown = this.startVal > t3;
          var i2 = t3 - this.startVal;
          if (Math.abs(i2) > this.options.smartEasingThreshold && this.options.useEasing) {
            this.finalEndVal = t3;
            var n2 = this.countDown ? 1 : -1;
            this.endVal = t3 + n2 * this.options.smartEasingAmount, this.duration = this.duration / 2;
          } else this.endVal = t3, this.finalEndVal = null;
          null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
        }, t2.prototype.start = function(t3) {
          this.error || (this.options.onStartCallback && this.options.onStartCallback(), t3 && (this.options.onCompleteCallback = t3), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
        }, t2.prototype.pauseResume = function() {
          this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
        }, t2.prototype.reset = function() {
          cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
        }, t2.prototype.update = function(t3) {
          cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t3), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
        }, t2.prototype.printValue = function(t3) {
          var i2;
          if (this.el) {
            var n2 = this.formattingFn(t3);
            if (null === (i2 = this.options.plugin) || void 0 === i2 ? void 0 : i2.render) this.options.plugin.render(this.el, n2);
            else if ("INPUT" === this.el.tagName) this.el.value = n2;
            else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n2 : this.el.innerHTML = n2;
          }
        }, t2.prototype.ensureNumber = function(t3) {
          return "number" == typeof t3 && !isNaN(t3);
        }, t2.prototype.validateValue = function(t3) {
          var i2 = Number(t3);
          return this.ensureNumber(i2) ? i2 : (this.error = "[CountUp] invalid start or end value: ".concat(t3), null);
        }, t2.prototype.resetDuration = function() {
          this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
        }, t2.prototype.parse = function(t3) {
          var i2 = function(t4) {
            return t4.replace(/([.,'  ])/g, "\\$1");
          }, n2 = i2(this.options.separator), s = i2(this.options.decimal), e = t3.replace(new RegExp(n2, "g"), "").replace(new RegExp(s, "g"), ".");
          return parseFloat(e);
        }, t2;
      })();
      t.CountUp = n;
    }));
  })(countUp_umd$1, countUp_umd$1.exports);
  return countUp_umd$1.exports;
}
var hasRequiredBuild;
function requireBuild() {
  if (hasRequiredBuild) return build;
  hasRequiredBuild = 1;
  Object.defineProperty(build, "__esModule", { value: true });
  var React = requireReact();
  var countup_js = requireCountUp_umd();
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e, n, i, u, a = [], f = true, o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) ;
        else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
      } catch (r2) {
        o = true, n = r2;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
        _defineProperty(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? React.useLayoutEffect : React.useEffect;
  function useEventCallback(fn) {
    var ref = React.useRef(fn);
    useIsomorphicLayoutEffect(function() {
      ref.current = fn;
    });
    return React.useCallback(function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return ref.current.apply(void 0, args);
    }, []);
  }
  var createCountUpInstance = function createCountUpInstance2(el, props) {
    var decimal = props.decimal, decimals = props.decimals, duration = props.duration, easingFn = props.easingFn, end = props.end, formattingFn = props.formattingFn, numerals = props.numerals, prefix = props.prefix, separator = props.separator, start = props.start, suffix = props.suffix, useEasing = props.useEasing, useGrouping = props.useGrouping, useIndianSeparators = props.useIndianSeparators, enableScrollSpy = props.enableScrollSpy, scrollSpyDelay = props.scrollSpyDelay, scrollSpyOnce = props.scrollSpyOnce, plugin = props.plugin;
    return new countup_js.CountUp(el, end, {
      startVal: start,
      duration,
      decimal,
      decimalPlaces: decimals,
      easingFn,
      formattingFn,
      numerals,
      separator,
      prefix,
      suffix,
      plugin,
      useEasing,
      useIndianSeparators,
      useGrouping,
      enableScrollSpy,
      scrollSpyDelay,
      scrollSpyOnce
    });
  };
  var _excluded$1 = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"];
  var DEFAULTS = {
    decimal: ".",
    separator: ",",
    delay: null,
    prefix: "",
    suffix: "",
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: true,
    enableReinitialize: true,
    useEasing: true,
    useGrouping: true,
    useIndianSeparators: false
  };
  var useCountUp = function useCountUp2(props) {
    var filteredProps = Object.fromEntries(Object.entries(props).filter(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), value = _ref2[1];
      return value !== void 0;
    }));
    var _useMemo = React.useMemo(function() {
      return _objectSpread2(_objectSpread2({}, DEFAULTS), filteredProps);
    }, [props]), ref = _useMemo.ref, startOnMount = _useMemo.startOnMount, enableReinitialize = _useMemo.enableReinitialize, delay = _useMemo.delay, onEnd = _useMemo.onEnd, onStart = _useMemo.onStart, onPauseResume = _useMemo.onPauseResume, onReset = _useMemo.onReset, onUpdate = _useMemo.onUpdate, instanceProps = _objectWithoutProperties(_useMemo, _excluded$1);
    var countUpRef = React.useRef();
    var timerRef = React.useRef();
    var isInitializedRef = React.useRef(false);
    var createInstance = useEventCallback(function() {
      return createCountUpInstance(typeof ref === "string" ? ref : ref.current, instanceProps);
    });
    var getCountUp = useEventCallback(function(recreate) {
      var countUp = countUpRef.current;
      if (countUp && !recreate) {
        return countUp;
      }
      var newCountUp = createInstance();
      countUpRef.current = newCountUp;
      return newCountUp;
    });
    var start = useEventCallback(function() {
      var run = function run2() {
        return getCountUp(true).start(function() {
          onEnd === null || onEnd === void 0 || onEnd({
            pauseResume,
            reset,
            start: restart,
            update
          });
        });
      };
      if (delay && delay > 0) {
        timerRef.current = setTimeout(run, delay * 1e3);
      } else {
        run();
      }
      onStart === null || onStart === void 0 || onStart({
        pauseResume,
        reset,
        update
      });
    });
    var pauseResume = useEventCallback(function() {
      getCountUp().pauseResume();
      onPauseResume === null || onPauseResume === void 0 || onPauseResume({
        reset,
        start: restart,
        update
      });
    });
    var reset = useEventCallback(function() {
      if (getCountUp().el) {
        timerRef.current && clearTimeout(timerRef.current);
        getCountUp().reset();
        onReset === null || onReset === void 0 || onReset({
          pauseResume,
          start: restart,
          update
        });
      }
    });
    var update = useEventCallback(function(newEnd) {
      getCountUp().update(newEnd);
      onUpdate === null || onUpdate === void 0 || onUpdate({
        pauseResume,
        reset,
        start: restart
      });
    });
    var restart = useEventCallback(function() {
      reset();
      start();
    });
    var maybeInitialize = useEventCallback(function(shouldReset) {
      if (startOnMount) {
        if (shouldReset) {
          reset();
        }
        start();
      }
    });
    React.useEffect(function() {
      if (!isInitializedRef.current) {
        isInitializedRef.current = true;
        maybeInitialize();
      } else if (enableReinitialize) {
        maybeInitialize(true);
      }
    }, [enableReinitialize, isInitializedRef, maybeInitialize, delay, props.start, props.suffix, props.prefix, props.duration, props.separator, props.decimals, props.decimal, props.formattingFn]);
    React.useEffect(function() {
      return function() {
        reset();
      };
    }, [reset]);
    return {
      start: restart,
      pauseResume,
      reset,
      update,
      getCountUp
    };
  };
  var _excluded = ["className", "redraw", "containerProps", "children", "style"];
  var CountUp2 = function CountUp3(props) {
    var className = props.className, redraw = props.redraw, containerProps = props.containerProps, children = props.children, style = props.style, useCountUpProps = _objectWithoutProperties(props, _excluded);
    var containerRef = React.useRef(null);
    var isInitializedRef = React.useRef(false);
    var _useCountUp = useCountUp(_objectSpread2(_objectSpread2({}, useCountUpProps), {}, {
      ref: containerRef,
      startOnMount: typeof children !== "function" || props.delay === 0,
      // component manually restarts
      enableReinitialize: false
    })), start = _useCountUp.start, reset = _useCountUp.reset, updateCountUp = _useCountUp.update, pauseResume = _useCountUp.pauseResume, getCountUp = _useCountUp.getCountUp;
    var restart = useEventCallback(function() {
      start();
    });
    var update = useEventCallback(function(end) {
      if (!props.preserveValue) {
        reset();
      }
      updateCountUp(end);
    });
    var initializeOnMount = useEventCallback(function() {
      if (typeof props.children === "function") {
        if (!(containerRef.current instanceof Element)) {
          console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);
          return;
        }
      }
      getCountUp();
    });
    React.useEffect(function() {
      initializeOnMount();
    }, [initializeOnMount]);
    React.useEffect(function() {
      if (isInitializedRef.current) {
        update(props.end);
      }
    }, [props.end, update]);
    var redrawDependencies = redraw && props;
    React.useEffect(function() {
      if (redraw && isInitializedRef.current) {
        restart();
      }
    }, [restart, redraw, redrawDependencies]);
    React.useEffect(function() {
      if (!redraw && isInitializedRef.current) {
        restart();
      }
    }, [restart, redraw, props.start, props.suffix, props.prefix, props.duration, props.separator, props.decimals, props.decimal, props.className, props.formattingFn]);
    React.useEffect(function() {
      isInitializedRef.current = true;
    }, []);
    if (typeof children === "function") {
      return children({
        countUpRef: containerRef,
        start,
        reset,
        update: updateCountUp,
        pauseResume,
        getCountUp
      });
    }
    return /* @__PURE__ */ React.createElement("span", _extends({
      className,
      ref: containerRef,
      style
    }, containerProps), typeof props.start !== "undefined" ? getCountUp().formattingFn(props.start) : "");
  };
  build.default = CountUp2;
  build.useCountUp = useCountUp;
  return build;
}
var buildExports = requireBuild();
const CountUp = /* @__PURE__ */ getDefaultExportFromCjs(buildExports);
const DMMarketInsights = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const stats = [
    {
      value: 40,
      label: "Efficiency Boost",
      suffix: "%",
      description: "Average increase in marketing efficiency with AI"
    },
    {
      value: 700,
      label: "Global Ad Spend",
      prefix: "$",
      suffix: "B",
      description: "Annual digital advertising spend worldwide"
    },
    {
      value: 83,
      label: "AI Adoption",
      suffix: "%",
      description: "Marketers using AI in their strategy"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-neutral-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8 },
      className: "max-w-6xl mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl pb-2 md:text-5xl font-bold text-center mb-16 highlight-text font-display", children: "The Future is Now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: inView ? { opacity: 1, scale: 1 } : {},
            transition: { duration: 0.5, delay: index * 0.2 },
            className: "card group hover:bg-neutral-800/80",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl md:text-5xl font-mono font-bold text-neon-yellow mb-4 text-glow", children: [
                stat.prefix,
                inView && /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { end: stat.value, duration: 2.5, separator: "," }),
                stat.suffix
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-mono font-bold text-neon-pink mb-2", children: stat.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-100/70 font-mono text-sm", children: stat.description })
            ]
          },
          index
        )) })
      ]
    }
  ) }) });
};
export {
  DMMarketInsights as default
};
