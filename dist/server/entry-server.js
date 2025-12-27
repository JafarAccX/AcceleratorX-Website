import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import React__default, { Component, createContext, useContext, useState, useCallback, useEffect, useRef, lazy, Suspense, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { stripBasename, UNSAFE_warning, UNSAFE_invariant, matchPath, joinPaths, Action } from "@remix-run/router";
import { UNSAFE_NavigationContext, useHref, useNavigate, useLocation, useResolvedPath, createPath, UNSAFE_DataRouterStateContext, UNSAFE_useRouteId, UNSAFE_RouteContext, UNSAFE_DataRouterContext, parsePath, Router, Navigate, Route, Outlet, Routes } from "react-router";
import fastCompare from "react-fast-compare";
import invariant from "invariant";
import shallowEqual from "shallowequal";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LottieReact from "lottie-react";
import { User, Briefcase, LogOut, X, Menu, ChevronDown } from "lucide-react";
import "react-dom";
import { PiFilmScriptFill } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
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
const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
let _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      );
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
const supportedFormEncTypes = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    process.env.NODE_ENV !== "production" ? UNSAFE_warning(false, '"' + encType + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + defaultEncType + '"')) : void 0;
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    let attr = target.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    }
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(form, target);
    if (!isFormDataSubmitterSupported()) {
      let {
        name,
        type,
        value
      } = target;
      if (type === "image") {
        let prefix = name ? name + "." : "";
        formData.append(prefix + "x", "0");
        formData.append(prefix + "y", "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  if (formData && encType === "text/plain") {
    body = formData;
    formData = void 0;
  }
  return {
    action,
    method: method.toLowerCase(),
    encType,
    formData,
    body
  };
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], _excluded3 = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {
}
const ViewTransitionContext = /* @__PURE__ */ React.createContext({
  isTransitioning: false
});
if (process.env.NODE_ENV !== "production") {
  ViewTransitionContext.displayName = "ViewTransition";
}
const FetchersContext = /* @__PURE__ */ React.createContext(/* @__PURE__ */ new Map());
if (process.env.NODE_ENV !== "production") {
  FetchersContext.displayName = "Fetchers";
}
if (process.env.NODE_ENV !== "production") ;
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX$1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const Link = /* @__PURE__ */ React.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition
  } = _ref7, rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
  let {
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX$1.test(to)) {
    absoluteHref = to;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        process.env.NODE_ENV !== "production" ? UNSAFE_warning(false, '<Link to="' + to + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.') : void 0;
      }
    }
  }
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ React.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
if (process.env.NODE_ENV !== "production") {
  Link.displayName = "Link";
}
const NavLink = /* @__PURE__ */ React.forwardRef(function NavLinkWithRef(_ref8, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    viewTransition,
    children
  } = _ref8, rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
  let path = useResolvedPath(to, {
    relative: rest.relative
  });
  let location = useLocation();
  let routerState = React.useContext(UNSAFE_DataRouterStateContext);
  let {
    navigator: navigator2,
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useViewTransitionState(path) && viewTransition === true;
  let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  if (nextLocationPathname && basename) {
    nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
  }
  const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let renderProps = {
    isActive,
    isPending,
    isTransitioning
  };
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp(renderProps);
  } else {
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null, isTransitioning ? "transitioning" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
  return /* @__PURE__ */ React.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className,
    ref,
    style,
    to,
    viewTransition
  }), typeof children === "function" ? children(renderProps) : children);
});
if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
}
const Form = /* @__PURE__ */ React.forwardRef((_ref9, forwardedRef) => {
  let {
    fetcherKey,
    navigate,
    reloadDocument,
    replace,
    state,
    method = defaultMethod,
    action,
    onSubmit,
    relative,
    preventScrollReset,
    viewTransition
  } = _ref9, props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
  let submit = useSubmit();
  let formAction = useFormAction(action, {
    relative
  });
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let submitHandler = (event) => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      fetcherKey,
      method: submitMethod,
      navigate,
      replace,
      state,
      relative,
      preventScrollReset,
      viewTransition
    });
  };
  return /* @__PURE__ */ React.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});
if (process.env.NODE_ENV !== "production") {
  Form.displayName = "Form";
}
if (process.env.NODE_ENV !== "production") ;
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmit"] = "useSubmit";
  DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook2["UseFetcher"] = "useFetcher";
  DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetcher"] = "useFetcher";
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = React.useContext(UNSAFE_DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? UNSAFE_invariant(false, getDataRouterConsoleError(hookName)) : UNSAFE_invariant(false) : void 0;
  return ctx;
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return React.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative,
        viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, viewTransition]);
}
function validateClientSideSubmission() {
  if (typeof document === "undefined") {
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
  }
}
let fetcherId = 0;
let getUniqueFetcherId = () => "__" + String(++fetcherId) + "__";
function useSubmit() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmit);
  let {
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let currentRouteId = UNSAFE_useRouteId();
  return React.useCallback(function(target, options) {
    if (options === void 0) {
      options = {};
    }
    validateClientSideSubmission();
    let {
      action,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    if (options.navigate === false) {
      let key = options.fetcherKey || getUniqueFetcherId();
      router.fetch(key, currentRouteId, options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        flushSync: options.flushSync
      });
    } else {
      router.navigate(options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        replace: options.replace,
        state: options.state,
        fromRouteId: currentRouteId,
        flushSync: options.flushSync,
        viewTransition: options.viewTransition
      });
    }
  }, [router, basename, currentRouteId]);
}
function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let routeContext = React.useContext(UNSAFE_RouteContext);
  !routeContext ? process.env.NODE_ENV !== "production" ? UNSAFE_invariant(false, "useFormAction must be used inside a RouteContext") : UNSAFE_invariant(false) : void 0;
  let [match] = routeContext.matches.slice(-1);
  let path = _extends({}, useResolvedPath(action ? action : ".", {
    relative
  }));
  let location = useLocation();
  if (action == null) {
    path.search = location.search;
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some((v) => v === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? "?" + qs : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function useViewTransitionState(to, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let vtContext = React.useContext(ViewTransitionContext);
  !(vtContext != null) ? process.env.NODE_ENV !== "production" ? UNSAFE_invariant(false, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : UNSAFE_invariant(false) : void 0;
  let {
    basename
  } = useDataRouterContext(DataRouterHook.useViewTransitionState);
  let path = useResolvedPath(to, {
    relative: opts.relative
  });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}
function StaticRouter({
  basename,
  children,
  location: locationProp = "/",
  future
}) {
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let action = Action.Pop;
  let location = {
    pathname: locationProp.pathname || "/",
    search: locationProp.search || "",
    hash: locationProp.hash || "",
    state: locationProp.state != null ? locationProp.state : null,
    key: locationProp.key || "default"
  };
  let staticNavigator = getStatelessNavigator();
  return /* @__PURE__ */ React.createElement(Router, {
    basename,
    children,
    location,
    navigationType: action,
    navigator: staticNavigator,
    future,
    static: true
  });
}
function getStatelessNavigator() {
  return {
    createHref,
    encodeLocation,
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    }
  };
}
function createHref(to) {
  return typeof to === "string" ? to : createPath(to);
}
function encodeLocation(to) {
  let href = typeof to === "string" ? to : createPath(to);
  href = href.replace(/ $/, "%20");
  let encoded = ABSOLUTE_URL_REGEX.test(href) ? new URL(href) : new URL(href, "http://localhost");
  return {
    pathname: encoded.pathname,
    search: encoded.search,
    hash: encoded.hash
  };
}
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
  return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
  (carry, [key, value]) => {
    carry[value] = key;
    return carry;
  },
  {}
);
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
  for (let i = propsList.length - 1; i >= 0; i -= 1) {
    const props = propsList[i];
    if (Object.prototype.hasOwnProperty.call(props, property)) {
      return props[property];
    }
  }
  return null;
};
var getTitleFromPropsList = (propsList) => {
  let innermostTitle = getInnermostProperty(
    propsList,
    "title"
    /* TITLE */
  );
  const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (Array.isArray(innermostTitle)) {
    innermostTitle = innermostTitle.join("");
  }
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, () => innermostTitle);
  }
  const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props[
  "base"
  /* BASE */
] !== "undefined").map((props) => props[
  "base"
  /* BASE */
]).reverse().reduce((innermostBaseTag, tag) => {
  if (!innermostBaseTag.length) {
    const keys = Object.keys(tag);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const lowerCaseAttributeKey = attributeKey.toLowerCase();
      if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
        return innermostBaseTag.concat(tag);
      }
    }
  }
  return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
  const approvedSeenTags = {};
  return propsList.filter((props) => {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn(
        `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
      );
    }
    return false;
  }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
    const instanceSeenTags = {};
    instanceTags.filter((tag) => {
      let primaryAttributeKey;
      const keys2 = Object.keys(tag);
      for (let i = 0; i < keys2.length; i += 1) {
        const attributeKey = keys2[i];
        const lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      const value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach((tag) => approvedTags.push(tag));
    const keys = Object.keys(instanceSeenTags);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const tagUnion = {
        ...approvedSeenTags[attributeKey],
        ...instanceSeenTags[attributeKey]
      };
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
  if (Array.isArray(propsList) && propsList.length) {
    for (let index = 0; index < propsList.length; index += 1) {
      const prop = propsList[index];
      if (prop[checkedTag]) {
        return true;
      }
    }
  }
  return false;
};
var reducePropsToState = (propsList) => ({
  baseTag: getBaseTagFromPropsList([
    "href"
    /* HREF */
  ], propsList),
  bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
  defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
  encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
  linkTags: getTagsFromPropsList(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    propsList
  ),
  metaTags: getTagsFromPropsList(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    propsList
  ),
  noscriptTags: getTagsFromPropsList("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], propsList),
  onChangeClientState: getOnChangeClientState(propsList),
  scriptTags: getTagsFromPropsList(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    propsList
  ),
  styleTags: getTagsFromPropsList("style", [
    "cssText"
    /* CSS_TEXT */
  ], propsList),
  title: getTitleFromPropsList(propsList),
  titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
  prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i += 1) {
    if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
      return true;
    }
  }
  return false;
};
var prioritizer = (elementsList, propsToMatch) => {
  if (Array.isArray(elementsList)) {
    return elementsList.reduce(
      (acc, elementAttrs) => {
        if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
          acc.priority.push(elementAttrs);
        } else {
          acc.default.push(elementAttrs);
        }
        return acc;
      },
      { priority: [], default: [] }
    );
  }
  return { default: elementsList, priority: [] };
};
var without = (obj, key) => {
  return {
    ...obj,
    [key]: void 0
  };
};
var SELF_CLOSING_TAGS = [
  "noscript",
  "script",
  "style"
  /* STYLE */
];
var encodeSpecialCharacters = (str, encode = true) => {
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
  const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
  return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title, attributes, encode) => {
  const attributeString = generateElementAttributesAsString(attributes);
  const flattenedTitle = flattenArray(title);
  return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
  const tag = t;
  const attributeHtml = Object.keys(tag).filter(
    (attribute) => !(attribute === "innerHTML" || attribute === "cssText")
  ).reduce((string, attribute) => {
    const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
    return string ? `${string} ${attr}` : attr;
  }, "");
  const tagContent = tag.innerHTML || tag.cssText || "";
  const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
  return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
  const mapped = REACT_TAG_MAP[key];
  obj[mapped || key] = attributes[key];
  return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title, attributes) => {
  const initProps = {
    key: title,
    [HELMET_ATTRIBUTE]: true
  };
  const props = convertElementAttributesToReactProps(attributes, initProps);
  return [React__default.createElement("title", props, title)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
  const mappedTag = {
    key: i,
    [HELMET_ATTRIBUTE]: true
  };
  Object.keys(tag).forEach((attribute) => {
    const mapped = REACT_TAG_MAP[attribute];
    const mappedAttribute = mapped || attribute;
    if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
      const content = tag.innerHTML || tag.cssText;
      mappedTag.dangerouslySetInnerHTML = { __html: content };
    } else {
      mappedTag[mappedAttribute] = tag[attribute];
    }
  });
  return React__default.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
  switch (type) {
    case "title":
      return {
        toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
        toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => convertElementAttributesToReactProps(tags),
        toString: () => generateElementAttributesAsString(tags)
      };
    default:
      return {
        toComponent: () => generateTagsAsReactComponent(type, tags),
        toString: () => generateTagsAsString(type, tags, encode)
      };
  }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
  const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
  const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
  const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
  const priorityMethods = {
    toComponent: () => [
      ...generateTagsAsReactComponent("meta", meta.priority),
      ...generateTagsAsReactComponent("link", link.priority),
      ...generateTagsAsReactComponent("script", script.priority)
    ],
    toString: () => (
      // generate all the tags as strings and concatenate them
      `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag(
        "link",
        link.priority,
        encode
      )} ${getMethodsForTag("script", script.priority, encode)}`
    )
  };
  return {
    priorityMethods,
    metaTags: meta.default,
    linkTags: link.default,
    scriptTags: script.default
  };
};
var mapStateOnServer = (props) => {
  const {
    baseTag,
    bodyAttributes,
    encode = true,
    htmlAttributes,
    noscriptTags,
    styleTags,
    title = "",
    titleAttributes,
    prioritizeSeoTags
  } = props;
  let { linkTags, metaTags, scriptTags } = props;
  let priorityMethods = {
    toComponent: () => {
    },
    toString: () => ""
  };
  if (prioritizeSeoTags) {
    ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
  }
  return {
    priority: priorityMethods,
    base: getMethodsForTag("base", baseTag, encode),
    bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
    htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
    link: getMethodsForTag("link", linkTags, encode),
    meta: getMethodsForTag("meta", metaTags, encode),
    noscript: getMethodsForTag("noscript", noscriptTags, encode),
    script: getMethodsForTag("script", scriptTags, encode),
    style: getMethodsForTag("style", styleTags, encode),
    title: getMethodsForTag("title", { title, titleAttributes }, encode)
  };
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
  instances = [];
  canUseDOM = isDocument;
  context;
  value = {
    setHelmet: (serverState) => {
      this.context.helmet = serverState;
    },
    helmetInstances: {
      get: () => this.canUseDOM ? instances : this.instances,
      add: (instance) => {
        (this.canUseDOM ? instances : this.instances).push(instance);
      },
      remove: (instance) => {
        const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
        (this.canUseDOM ? instances : this.instances).splice(index, 1);
      }
    }
  };
  constructor(context, canUseDOM) {
    this.context = context;
    this.canUseDOM = canUseDOM || false;
    if (!canUseDOM) {
      context.helmet = server_default({
        baseTag: [],
        bodyAttributes: {},
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
  }
};
var defaultValue = {};
var Context = React__default.createContext(defaultValue);
var HelmetProvider = class _HelmetProvider extends Component {
  static canUseDOM = isDocument;
  helmetData;
  constructor(props) {
    super(props);
    this.helmetData = new HelmetData(this.props.context || {}, _HelmetProvider.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ React__default.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
  }
};
var updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector(
    "head"
    /* HEAD */
  );
  const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;
  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);
      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === "innerHTML") {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === "cssText") {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some((existingTag, index) => {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach((tag) => tag.parentNode?.removeChild(tag));
  newTags.forEach((tag) => headElement.appendChild(tag));
  return {
    oldTags,
    newTags
  };
};
var updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  const attributesToRemove = [...helmetAttributes];
  const attributeKeys = Object.keys(attributes);
  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTitle = (title, attributes) => {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title,
    titleAttributes
  } = newState;
  updateAttributes("body", bodyAttributes);
  updateAttributes("html", htmlAttributes);
  updateTitle(title, titleAttributes);
  const tagUpdates = {
    baseTag: updateTags("base", baseTag),
    linkTags: updateTags("link", linkTags),
    metaTags: updateTags("meta", metaTags),
    noscriptTags: updateTags("noscript", noscriptTags),
    scriptTags: updateTags("script", scriptTags),
    styleTags: updateTags("style", styleTags)
  };
  const addedTags = {};
  const removedTags = {};
  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  if (cb) {
    cb();
  }
  onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends Component {
  rendered = false;
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances } = this.props.context;
    helmetInstances.remove(this);
    this.emitChange();
  }
  emitChange() {
    const { helmetInstances, setHelmet } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      helmetInstances.get().map((instance) => {
        const props = { ...instance.props };
        delete props.context;
        return props;
      })
    );
    if (HelmetProvider.canUseDOM) {
      client_default(state);
    } else if (server_default) {
      serverState = server_default(state);
    }
    setHelmet(serverState);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;
    const { helmetInstances } = this.props.context;
    helmetInstances.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};
var Helmet = class extends Component {
  static defaultProps = {
    defer: true,
    encodeSpecialCharacters: true,
    prioritizeSeoTags: false
  };
  shouldComponentUpdate(nextProps) {
    return !fastCompare(without(this.props, "helmetData"), without(nextProps, "helmetData"));
  }
  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }
    switch (child.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: nestedChildren
        };
      case "style":
        return {
          cssText: nestedChildren
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...arrayTypeChildren[child.type] || [],
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren)
        }
      ]
    };
  }
  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case "title":
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps }
        };
      case "body":
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps }
        };
      case "html":
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps }
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps }
        };
    }
  }
  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };
    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName]
      };
    });
    return newFlattenedProps;
  }
  warnOnInvalidChildren(child, nestedChildren) {
    invariant(
      VALID_TAG_NAMES.some((name) => child.type === name),
      typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
        ", "
      )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
    );
    invariant(
      !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
      `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );
    return true;
  }
  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};
    React__default.Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }
      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});
      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }
      switch (type) {
        case "Symbol(react.fragment)":
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          arrayTypeChildren = this.flattenArrayTypeChildren(
            child,
            arrayTypeChildren,
            newChildProps,
            nestedChildren
          );
          break;
        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });
    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }
  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { helmetData } = props;
    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }
    if (helmetData && !(helmetData instanceof HelmetData)) {
      const data = helmetData;
      helmetData = new HelmetData(data.context, true);
      delete newProps.helmetData;
    }
    return helmetData ? /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ React__default.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context }));
  }
};
const CourseContext = createContext({
  selectedCourse: null,
  setSelectedCourse: () => {
  }
});
const CourseProvider = ({ children }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  return /* @__PURE__ */ jsx(CourseContext.Provider, { value: { selectedCourse, setSelectedCourse }, children });
};
const useCourseContext = () => useContext(CourseContext);
const api = axios.create({
  baseURL: "http://localhost:3020",
  withCredentials: true
  // This is crucial for sending HttpOnly cookies
});
const UserContext = createContext(void 0);
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const login = useCallback((authData) => {
    setUser(authData.user);
    setIsAuthenticated(true);
    api.defaults.headers.common["Authorization"] = `Bearer ${authData.accessToken}`;
  }, []);
  const logout = useCallback(async () => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Failed to logout", error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      delete api.defaults.headers.common["Authorization"];
    }
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") {
      setIsLoading(false);
      return;
    }
    const initAuth = async () => {
      setIsLoading(true);
      try {
        const response = await api.post("/auth/refresh-token");
        if (response.data) {
          login(response.data);
        }
      } catch {
        console.log("No active session or session expired.");
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  }, [login]);
  return /* @__PURE__ */ jsx(UserContext.Provider, { value: { user, isAuthenticated, isLoading, login, logout }, children });
}
function useUser() {
  const context = useContext(UserContext);
  if (context === void 0) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
const Lottie = LottieReact.default || LottieReact;
const LottieLoader = ({ size = 540 }) => {
  const [animationData, setAnimationData] = useState(null);
  const [minVisible, setMinVisible] = useState(true);
  useEffect(() => {
    let mounted = true;
    fetch("/xmas-lottie/74c69080-9263-49ff-934c-d1851bd94048.json").then((res) => res.json()).then((data) => {
      if (mounted) setAnimationData(data);
    }).catch(() => {
    });
    return () => {
      mounted = false;
    };
  }, []);
  useEffect(() => {
    const t = setTimeout(() => setMinVisible(false), 2e3);
    return () => clearTimeout(t);
  }, []);
  return (
    // Render overlay while we are within the minimum visible window OR while animation data is present
    minVisible || animationData ? /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black/60 z-50", children: /* @__PURE__ */ jsx("div", { className: "relative flex items-center  ", children: /* @__PURE__ */ jsxs("div", { style: { width: size, height: size }, className: "flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsx(Lottie, { animationData, loop: true }),
      /* @__PURE__ */ jsx("div", { className: "h-16 w-16 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin" })
    ] }) }) }) : null
  );
};
const companyLogo = "/redesign/logo-no-bg.webp";
function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  if (!user) return null;
  const displayName = user.FirstName + " " + user.LastName || "User";
  const displayEmail = user.Mobile || user.Email || "";
  const userInitial = user.FirstName[0]?.toUpperCase() + " " + user.LastName[0]?.toUpperCase() || "U";
  const enrolledUser = user.CourseEnrolled;
  return /* @__PURE__ */ jsxs("div", { className: "relative", ref: menuRef, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "flex items-center space-x-1 rounded-full bg-white/10 p-1 text-sm font-semibold text-gray-700 hover:bg-white/20",
        children: /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white", children: userInitial })
      }
    ),
    isOpen && /* @__PURE__ */ jsx("div", { className: "absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5", children: /* @__PURE__ */ jsxs("div", { className: "py-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-2 border-b", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900", children: displayName }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: displayEmail })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/profile",
          className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
          onClick: () => setIsOpen(false),
          children: [
            /* @__PURE__ */ jsx(User, { className: "mr-3 h-5 w-5 text-gray-400" }),
            "Profile"
          ]
        }
      ),
      enrolledUser && /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://lms.acceleratorx.org/",
          className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
          onClick: () => setIsOpen(false),
          target: "_blank",
          children: [
            /* @__PURE__ */ jsx(PiFilmScriptFill, { className: "mr-3 h-5 w-5 text-gray-400" }),
            "LMS"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/jobs",
          className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
          onClick: () => setIsOpen(false),
          children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "mr-3 h-5 w-5 text-gray-400" }),
            "Jobs"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/my-applications",
          className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
          onClick: () => setIsOpen(false),
          children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "mr-3 h-5 w-5 text-gray-400" }),
            "Applied Jobs"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleLogout,
          className: "flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
          children: [
            /* @__PURE__ */ jsx(LogOut, { className: "mr-3 h-5 w-5 text-gray-400" }),
            "Sign out"
          ]
        }
      )
    ] }) })
  ] });
}
const dropdownTransition = "transition-all duration-300 ease-in-out";
const menuTransition = "transition-all duration-300 ease-in-out transform";
const hoverTransition = "transition-all duration-200 ease-in-out";
const xsatNavItems = [
  { label: "About", href: "#about" },
  { label: "Why Appear", href: "#whyappear" },
  { label: "FAQ", href: "#faq" }
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useUser();
  const location = useLocation();
  const isXSATRoute = location.pathname === "/xsat";
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (href) => {
    setIsOpen(false);
    if (typeof window === "undefined") return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const menuItems = [
    { label: "About", path: "/about-us" },
    { label: "Blog", path: "/blogs" },
    { label: "Jobs Portal", path: "/jobs" },
    { label: "New Events", path: "/events" },
    { label: "Project Listing", path: "/project-listing" }
  ];
  const courses = [
    { label: "AI Product Management", path: "/courses/product-management" },
    { label: "Generative AI for Product Managers", path: "/courses/gen-ai-for-pms" },
    { label: "AI Digital Marketing", path: "/courses/ai-digital-marketing" },
    { label: "AI Data Analytics", path: "/courses/data-analytics" },
    { label: "Generative AI", path: "/courses/generative-ai" }
    // {
    //   label: "AI Performance Marketing",
    //   path: "/courses/advance-performance-marketing-with-ai",
    // },
    // {
    //   label: "Automation with n8n",
    //   path: "/courses/n8n-automation",
    // },
  ];
  if (isXSATRoute) {
    return /* @__PURE__ */ jsx(
      "header",
      {
        className: `fixed top-0 left-0 right-0 z-[9999] backdrop-blur-sm ${menuTransition} ${isScrolled ? "bg-black/80 shadow-lg border-b border-white/5" : "bg-transparent"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-20", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl mt-2 font-bold text-white", children: /* @__PURE__ */ jsx(Link, { to: "https://acceleratorx.org/", className: `${hoverTransition} hover:opacity-90`, children: /* @__PURE__ */ jsx("img", { src: "/xsat-bg.webp", alt: "xsat", className: "w-auto h-10" }) }) }),
            /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center space-x-6", children: xsatNavItems.map((item) => /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => scrollToSection(item.href),
                className: `text-white/90 hover:text-white ${hoverTransition} relative group py-2`,
                children: [
                  item.label,
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `absolute bottom-0 left-0 w-0 h-0.5 bg-white ${dropdownTransition} group-hover:w-full`
                    }
                  )
                ]
              },
              item.label
            )) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsOpen(!isOpen),
                className: `md:hidden text-white/90 hover:text-white p-2 rounded-lg hover:bg-white/10 ${hoverTransition}`,
                children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `md:hidden backdrop-blur-md bg-black/95 rounded-b-2xl border-t border-white/5 overflow-hidden ${menuTransition} ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
              children: /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-2 p-4", children: xsatNavItems.map((item) => /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => scrollToSection(item.href),
                  className: `text-white/90 hover:text-white ${hoverTransition} py-2 px-4 rounded-lg hover:bg-white/5`,
                  children: item.label
                },
                item.label
              )) })
            }
          )
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: `fixed w-full z-[9999] backdrop-blur-md bg-black/95 border-b border-white/10 ${menuTransition}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxs("div", { className: `relative group ${hoverTransition}`, children: [
            /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center space-x-2 hover:opacity-90", children: /* @__PURE__ */ jsx("img", { src: companyLogo, alt: "AcceleratorX company new logo - best product management courses", className: "w-auto h-16 object-contain" }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-8 -left-8 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/xmas-lottie/Snowing.gif",
                alt: "Snowing effect",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-8 left-4 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/xmas-lottie/Snowing.gif",
                alt: "Snowing effect",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-8 left-16 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/xmas-lottie/Snowing.gif",
                alt: "Snowing effect",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-8 left-24 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/xmas-lottie/Snowing.gif",
                alt: "Snowing effect",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-8 left-32 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/xmas-lottie/Snowing.gif",
                alt: "Snowing effect",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-8 left-48 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/xmas-lottie/Snowing.gif",
                alt: "Snowing effect",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-8 left-64 w-24 h-24 pointer-events-none transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-6", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/xmas-lottie/Snowing.gif",
                alt: "Snowing effect",
                className: "w-full h-full object-contain"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-6", children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => setIsDropdownOpen(true),
                onMouseLeave: () => setIsDropdownOpen(false),
                children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      className: `flex items-center gap-1 text-gray-300 group-hover:text-white text-sm leading-[1.2em] font-medium py-2 ${hoverTransition}`,
                      children: [
                        "Courses",
                        /* @__PURE__ */ jsx(
                          ChevronDown,
                          {
                            size: 16,
                            className: `${dropdownTransition}`,
                            style: {
                              transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0)"
                            }
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `absolute left-0 top-full pt-2 w-64 ${dropdownTransition} ${isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                      children: /* @__PURE__ */ jsx("div", { className: "bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-xl overflow-hidden", children: courses.map((course) => /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: course.path,
                          className: `block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 ${hoverTransition} text-xs font-medium`,
                          children: course.label
                        },
                        course.label
                      )) })
                    }
                  )
                ]
              }
            ),
            menuItems.map((item) => /* @__PURE__ */ jsxs(
              Link,
              {
                to: item.path,
                className: `relative group ${hoverTransition} ${item.label === "XSAT" || item.label === "EVENTS" || item.label === "Project Listing" ? "bg-white/5 text-[#FFBB00] hover:text-[#FFBB00] font-semibold px-4 py-1.5 rounded-lg flex items-center  border border-[#FFBB00]/10 hover:border-[#FFBB00]/30" : "text-gray-300 hover:text-white py-2"}`,
                children: [
                  item.label,
                  (item.label === "XSAT" || item.label === "EVENTS" || item.label === "Project Listing") && /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                    /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }),
                    /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" })
                  ] }),
                  item.label !== "XSAT" && item.label !== "Project Listing" && item.label !== "EVENTS" && /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `absolute bottom-0 left-0 w-0 h-0.5 bg-white ${dropdownTransition} group-hover:w-full`
                    }
                  )
                ]
              },
              item.label
            )),
            isAuthenticated ? /* @__PURE__ */ jsx(ProfileMenu, {}) : /* @__PURE__ */ jsxs("div", { className: "flex items-center p-1 bg-white/5 rounded-xl border border-white/10 ml-4 group", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/sign-in",
                  className: `text-gray-400 hover:text-white ${hoverTransition} px-4 py-1.5 text-sm font-medium rounded-lg hover:bg-white/5`,
                  children: "Login"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/sign-up",
                  className: `bg-[#1a71f6] hover:bg-[#1a71f6]/90 text-white px-5 py-1.5 rounded-lg text-sm font-medium ${hoverTransition} shadow-lg`,
                  children: "Sign Up"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsOpen(!isOpen),
              className: `md:hidden text-white/90 hover:text-white p-2 rounded-lg hover:bg-white/10 ${hoverTransition}`,
              children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `md:hidden backdrop-blur-md bg-black/95 border-t border-white/5 overflow-hidden ${menuTransition} ${isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"}`,
            children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-4 space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setIsDropdownOpen(!isDropdownOpen),
                    className: `flex items-center justify-between w-full text-gray-300 hover:text-white text-sm font-medium py-2 ${hoverTransition}`,
                    children: [
                      "Courses",
                      /* @__PURE__ */ jsx(
                        ChevronDown,
                        {
                          size: 16,
                          className: `${dropdownTransition}`,
                          style: {
                            transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0)"
                          }
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `overflow-hidden ${dropdownTransition} ${isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
                    children: /* @__PURE__ */ jsx("div", { className: "mt-2 space-y-2 pl-4 border-l border-white/10", children: courses.map((course) => /* @__PURE__ */ jsx(
                      Link,
                      {
                        to: course.path,
                        className: `block py-2 text-gray-300 hover:text-white ${hoverTransition} text-sm font-medium`,
                        onClick: () => setIsOpen(false),
                        children: course.label
                      },
                      course.label
                    )) })
                  }
                )
              ] }),
              menuItems.map((item) => /* @__PURE__ */ jsxs(
                Link,
                {
                  to: item.path,
                  className: `block text-sm font-medium ${hoverTransition} ${item.label === "XSAT" || item.label === "EVENTS" || item.label === "Project Listing" ? "bg-white/5 text-[#FFBB00] font-semibold px-4 py-2 rounded-lg flex items-center gap-2 border border-[#FFBB00]/10" : "text-gray-300 py-2"}`,
                  onClick: () => setIsOpen(false),
                  children: [
                    item.label,
                    (item.label === "XSAT" || item.label === "EVENTS" || item.label === "Project Listing") && /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                      /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }),
                      /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" })
                    ] })
                  ]
                },
                item.label
              )),
              isAuthenticated ? /* @__PURE__ */ jsx(ProfileMenu, {}) : /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-3 pt-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center p-1 bg-white/5 rounded-xl border border-white/5", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/sign-in",
                    onClick: () => setIsOpen(false),
                    className: `flex-1 text-center text-gray-400 hover:text-white ${hoverTransition} py-2 text-xs font-medium rounded-lg hover:bg-white/5`,
                    children: "Login"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/sign-up",
                    onClick: () => setIsOpen(false),
                    className: `flex-1 text-center bg-[#1a71f6] hover:bg-[#1a71f6]/90 text-white py-2 rounded-lg text-xs font-medium ${hoverTransition} shadow-lg`,
                    children: "Sign Up"
                  }
                )
              ] }) })
            ] })
          }
        )
      ]
    }
  );
}
const createEnrollment = async (data) => {
  try {
    const response = await api.post("/enrollments-new", data);
    return response.data;
  } catch (error) {
    console.error("Error creating enrollment:", error);
    throw error;
  }
};
class UnifiedTrackingService {
  eventCache = /* @__PURE__ */ new Map();
  CACHE_DURATION = 5 * 60 * 1e3;
  // 5 minutes
  pixelsInitialized = /* @__PURE__ */ new Set();
  // Clean old events from cache
  cleanCache() {
    const now = Date.now();
    for (const [key, event] of this.eventCache.entries()) {
      if (now - event.timestamp > this.CACHE_DURATION) {
        this.eventCache.delete(key);
      }
    }
  }
  // Generate consistent event ID
  generateEventId() {
    if (window.crypto?.randomUUID) {
      return window.crypto.randomUUID();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }
  // Check if event already fired
  hasEventFired(eventType, eventId, pixelId) {
    this.cleanCache();
    const cacheKey = `${eventType}_${eventId}_${pixelId}`;
    return this.eventCache.has(cacheKey);
  }
  // Mark event as fired
  markEventFired(eventType, eventId, pixelId, route) {
    const cacheKey = `${eventType}_${eventId}_${pixelId}`;
    this.eventCache.set(cacheKey, {
      eventType,
      eventId,
      timestamp: Date.now(),
      pixelId,
      route
    });
  }
  // Initialize pixel safely
  initializePixel(pixelId) {
    if (!pixelId || this.pixelsInitialized.has(pixelId)) {
      return;
    }
    if (!window.fbq) {
      console.warn("Facebook Pixel not loaded");
      return;
    }
    try {
      window.fbq("init", pixelId);
      this.pixelsInitialized.add(pixelId);
      console.log(`✅ Meta Pixel initialized: ${pixelId}`);
    } catch (error) {
      console.error(`❌ Failed to initialize pixel ${pixelId}:`, error);
    }
  }
  // Track event with deduplication
  trackEvent(eventType, pixelId, eventId, parameters) {
    if (!pixelId || !window.fbq) {
      console.warn("Cannot track event: Missing pixel ID or fbq");
      return;
    }
    const finalEventId = eventId || this.generateEventId();
    const route = window.location.pathname;
    if (this.hasEventFired(eventType, finalEventId, pixelId)) {
      console.warn(`🚫 Duplicate event prevented: ${eventType} for pixel ${pixelId}`);
      return;
    }
    try {
      this.initializePixel(pixelId);
      if (parameters && Object.keys(parameters).length > 0) {
        window.fbq("track", eventType, parameters);
      } else {
        window.fbq("track", eventType);
      }
      this.markEventFired(eventType, finalEventId, pixelId, route);
      console.log(`✅ Event tracked: ${eventType} | Pixel: ${pixelId} | Route: ${route} | EventID: ${finalEventId}`);
    } catch (error) {
      console.error(`❌ Failed to track ${eventType}:`, error);
    }
  }
  // Get cache status for debugging
  getCacheStatus() {
    this.cleanCache();
    return {
      cachedEvents: this.eventCache.size,
      initializedPixels: Array.from(this.pixelsInitialized),
      events: Array.from(this.eventCache.entries())
    };
  }
  // Clear cache (for testing/debugging)
  clearCache() {
    this.eventCache.clear();
    console.log("🗑️ Tracking cache cleared");
  }
  // Store event ID globally for server-side tracking
  storeEventId(eventId) {
    window.__META_EVENT_ID__ = eventId;
    try {
      sessionStorage.setItem("meta_event_id", eventId);
    } catch (error) {
      console.warn("Cannot store event ID in sessionStorage:", error);
    }
  }
  // Retrieve stored event ID
  getStoredEventId() {
    if (window.__META_EVENT_ID__) {
      return window.__META_EVENT_ID__;
    }
    try {
      return sessionStorage.getItem("meta_event_id");
    } catch (error) {
      console.warn("Cannot retrieve event ID from sessionStorage:", error);
      return null;
    }
  }
}
const trackingService = new UnifiedTrackingService();
const generateFormEventId = () => {
  const eventId = trackingService.generateEventId();
  trackingService.storeEventId(eventId);
  return eventId;
};
const META_CONVERSION_API_URL = "https://graph.facebook.com/v17.0";
const DEFAULT_PIXEL_ID = "1605858166968597";
const DA_PIXEL_ID = "1605858166968597";
const DA_PIXEL_ID_SECOND = "1357550371980921";
const AIDM_PIXEL_ID = "1357550371980921";
const DEFAULT_ACCESS_TOKEN = "EAAMCWA2EBawBPPIFyZCfbglZBXaiDWbsRnpdG4ZBZAe2hv5rZCFYJZBoR6B7dNu3URnm1tb1VQuWos9eF63poFxfGQ0x2AObE2P4SXXA8ecAjVzB3WEEbXdu9RSAtcVmNlkAIZBQo25ql2ZCtpESPnTrpfKqZC4GSL53tnMrLrFUpTZCGdYwHuZBxn0uTPvERwPKgZDZD";
const DA_ACCESS_TOKEN = "EAAMCWA2EBawBPPIFyZCfbglZBXaiDWbsRnpdG4ZBZAe2hv5rZCFYJZBoR6B7dNu3URnm1tb1VQuWos9eF63poFxfGQ0x2AObE2P4SXXA8ecAjVzB3WEEbXdu9RSAtcVmNlkAIZBQo25ql2ZCtpESPnTrpfKqZC4GSL53tnMrLrFUpTZCGdYwHuZBxn0uTPvERwPKgZDZD";
const DA_ACCESS_TOKEN_SECOND = "EAASp29BCF30BO4lq5EIR9XS11nY16Ko9qUYrcGq23KFeSSBZBnX8gXcBhM1P01F0GFuMixfWHZBO9PRKO7tpv2aByfSVLNTns2pVtHXDWMNkHS4VialIYli7n4xrMEM1ebhNEYdv6f3yDCzlZA2ZALAhkmIZB6g64r570ZBkQxYYEWM8GLs5OR1NOkqmpjmroUcQZDZD";
const AIDM_ACCESS_TOKEN = "EAASp29BCF30BPigecGprxm0ZCZCw7EKrxgOvTSSEYLZAILH2BPX5ZBGAfBqG291WBUcG14Xscj1ZB8W57o7Wm2J7dZBrrrY26ZAeXF3Pas5uwwbpUEdxz6XffWJ5ruGK4tLZCEWIx4v35ssYLvozCOa2Rt0JgpNennUD2sXK1Yxahx2qJgaWNFEWS9EdEuqFWQZDZD";
const DA_COURSE_NAMES = ["Data Analytics"];
const AIDM_COURSE_NAMES = ["AI Digital Marketing"];
const AIDM_ROUTES = ["/courses/ai-digital-marketing"];
const hashData = async (data) => {
  const hashBuffer = await window.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(data)
  );
  return Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
};
const getTrackingData = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    fbclid: urlParams.get("fbclid") || "",
    gclid: urlParams.get("gclid") || "",
    ttclid: urlParams.get("ttclid") || "",
    msclkid: urlParams.get("msclkid") || "",
    utm_source: urlParams.get("utm_source") || "",
    utm_medium: urlParams.get("utm_medium") || "",
    utm_campaign: urlParams.get("utm_campaign") || "",
    utm_term: urlParams.get("utm_term") || "",
    utm_content: urlParams.get("utm_content") || "",
    referrer: document.referrer || "direct",
    full_url: window.location.href
  };
};
const getUTMDataForDB = () => {
  const trackingData = getTrackingData();
  return {
    utm_source: trackingData.utm_source,
    utm_medium: trackingData.utm_medium,
    utm_campaign: trackingData.utm_campaign,
    utm_term: trackingData.utm_term,
    utm_content: trackingData.utm_content,
    referrer: trackingData.referrer,
    landing_page_url: trackingData.full_url,
    fbclid: trackingData.fbclid,
    gclid: trackingData.gclid,
    ttclid: trackingData.ttclid,
    msclkid: trackingData.msclkid
  };
};
const getMetaConfig = (course) => {
  const isDA = DA_COURSE_NAMES.includes(course || "");
  const isDASecondRoute = window.location.pathname === "/courses/data-analytics-program-fb-b";
  const isAIDM = AIDM_COURSE_NAMES.includes(course || "");
  const isAIDMRoute = AIDM_ROUTES.includes(window.location.pathname);
  if (isDASecondRoute) {
    return { pixelId: DA_PIXEL_ID_SECOND, accessToken: DA_ACCESS_TOKEN_SECOND };
  }
  if (isDA) {
    return { pixelId: DA_PIXEL_ID, accessToken: DA_ACCESS_TOKEN };
  }
  if (isAIDM || isAIDMRoute) {
    return { pixelId: AIDM_PIXEL_ID, accessToken: AIDM_ACCESS_TOKEN };
  }
  return { pixelId: DEFAULT_PIXEL_ID, accessToken: DEFAULT_ACCESS_TOKEN };
};
const trackFormSubmission = async (formData) => {
  try {
    const { pixelId, accessToken } = getMetaConfig(formData.get("course"));
    if (!pixelId || !accessToken) return;
    const trackingData = getTrackingData();
    const email = formData.get("email");
    const phone = formData.get("phone");
    const name = formData.get("name");
    if (typeof email !== "string" || typeof phone !== "string" || typeof name !== "string") {
      console.error("Invalid form data");
      return;
    }
    const [hashedEmail, hashedPhone, hashedFirstName] = await Promise.all([
      hashData(email.toLowerCase()),
      hashData(phone),
      hashData(name.split(" ")[0])
    ]);
    const eventId = trackingService.getStoredEventId();
    if (!eventId) {
      console.warn("No event ID found for server-side tracking");
      return;
    }
    console.log("Server-side tracking - Event ID:", eventId);
    const payload = {
      data: [
        {
          event_name: "CompleteRegistration",
          event_time: Math.floor(Date.now() / 1e3),
          action_source: "website",
          event_id: eventId,
          user_data: {
            em: hashedEmail,
            ph: hashedPhone,
            fn: hashedFirstName,
            client_user_agent: navigator.userAgent,
            fbc: trackingData.fbclid ? `fb.1.${Date.now()}.${trackingData.fbclid}` : void 0,
            fbp: void 0
          },
          custom_data: {
            content_name: "registration_form",
            status: "complete",
            course: formData.get("course"),
            browser_id: navigator.userAgent,
            click_id: trackingData.fbclid || trackingData.gclid || trackingData.ttclid || trackingData.msclkid,
            ...trackingData
          }
        }
      ],
      access_token: accessToken
    };
    await fetch(`${META_CONVERSION_API_URL}/${pixelId}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.error("Meta Form Tracking Error", error);
  }
};
const omniAccessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6Iis5MTk4NDU4MjY5MjQiLCJwaG9uZU51bWJlcklkIjoiODM5NjYzMjE5MjMyMTU3IiwiaWF0IjoxNzYyMTUxNDYwfQ.OPvOT6OHp-gBBP7SX3J_Lp0YgS1z68aVtz_YSgXH2ZFNGYz0HCnGxkXrdV588i--n3znI7U9fbAlxZxkeWdowdnwPBM_k5qJ1be-CeguJ0Dp71nGcV025japy9H3cQz-aFYlFPU-zPGSyJNc0Yr2460eiR6y0ilQYxK2HtrvYdD8hxv7wEsepndeOEdJ7yJS2uzX37fZw2cQmszydRiC0enIwZWe293ROWyPIKvoMU_2_Wr532aj6cTEAiWfhR5YktlzVHoMwL6xtG3IU0lVfU8zuiznSk_MExpBToP7hw_aBcnr-HCbB15RQaIuRhYD9aUBeQoMMjokbHlOXcFGKYFqp6-aUbYoUv5xw_UkdbAky1HgwcdYzOI7Ke04NQm6Oh4VZEbTtQwjxzjrB0CYgpzbcdq6QP87-3_Fkzx_oojIjaFUE7k-QjN_j8bwMNYm-bQuL-KxqkVOGKji5jrd1AY779_Wmi-jMruWnVU_rL30SqIRJb25WDUbg2zJlu5jQpJ63-xaVDBlobnuGKY-QUwf9Uopd86pfgSiNJ1_7aRU-65JncRBrCFbqJ4emDLokzqxFJVDcdiT8bfEP8RvGUzztDY_3_0_qEUzmhidvoQ2Io3Ld-Zumk-EBZDNWEQBAHOEjIos-jMVqZ_zMiV3Fa1RRxafJVDQLNQT5j1U9pI";
const BROCHURES = {
  "AI Digital Marketing": {
    title: "AI Digital Marketing Syllabus",
    url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1758802254913_notes_new_nano_19th_Sept%2C_2025-compressed.pdf?alt=media&token=42c3ad1b-7519-461b-aad6-ea9f4f5c7be7"
  },
  "Product Management": {
    title: "Product Management",
    url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1762861871432_notes_AcceleratorX_PM_Brochure-compressed.pdf?alt=media&token=f21f29c9-522a-4d26-a948-2ab6f19a4760"
  },
  "Generative AI": {
    title: "Generative AI",
    url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1761905010664_notes_new_AcceleratorX_Gen_AI_Brochure-compressed.pdf?alt=media&token=53d0ad2d-4d03-435c-8d31-4c03fc476c78"
  },
  "Gen AI for PMs": {
    title: "Gen AI for PMs",
    url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1758294289672_notes_Gen_ai_pm.pdf?alt=media&token=c84b8402-1bc1-40be-8baa-e00c0a4fff36"
  },
  "Data Analytics": {
    title: "AI Powered Data Analytics",
    url: "https://firebasestorage.googleapis.com/v0/b/acceleratorx-lms.firebasestorage.app/o/class-notes%2F1758293290835_notes_AI_Powered_DA_Brochure.pdf?alt=media&token=1bbeb25b-e1aa-49e2-8752-3e7a6b7b4e52"
  }
};
function resolveBrochure(course) {
  if (!course) return BROCHURES["AI Digital Marketing"];
  if (BROCHURES[course]) return BROCHURES[course];
  const lower = course.toLowerCase();
  const foundKey = Object.keys(BROCHURES).find((k) => k.toLowerCase() === lower);
  return foundKey ? BROCHURES[foundKey] : BROCHURES["AI Digital Marketing"];
}
async function sendWhatsAppMessage({
  phone,
  name,
  broucher
}) {
  console.log("Sending WhatsApp message to:", phone);
  try {
    const response = await fetch("https://wb.omni.tatatelebusiness.com/whatsapp-cloud/messages", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${omniAccessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "to": (() => {
          const cleaned = phone.replace(/^\+/, "");
          return cleaned.length === 10 ? `91${cleaned}` : cleaned;
        })(),
        "type": "template",
        "source": "external",
        "template": {
          "name": "registration_request_2",
          "language": {
            "code": "en"
          },
          "components": [
            {
              "type": "header",
              "parameters": [
                {
                  "type": "document",
                  "document": {
                    "link": broucher.url,
                    "filename": broucher.title
                  }
                }
              ]
            },
            {
              "type": "body",
              "parameters": [
                {
                  "type": "text",
                  "text": name
                }
              ]
            }
          ]
        },
        "metaData": {
          "custom_callback_data": ""
        }
      })
    });
    console.log("WhatsApp API response status:", response);
    const responseData = await response.json();
    console.log("WhatsApp API response data:", responseData);
    if (!response.ok) {
      const err = responseData;
      console.error("WhatsApp API error:", err);
      throw new Error("WhatsApp message sending failed");
    }
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
  }
}
function EnrollmentModal$1({ isOpen, onClose, onSubmit, customData }) {
  console.log("EnrollmentModal: imports check", {
    X: typeof X,
    motion: typeof motion,
    AnimatePresence: typeof AnimatePresence,
    createEnrollment: typeof createEnrollment
  });
  const { selectedCourse } = useCourseContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
    course: "",
    workExperience: "",
    designation: ""
  });
  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const openBrochure = (courseName) => {
    try {
      const { url } = resolveBrochure(courseName);
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error("Failed to open brochure:", err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (formData.phone.length < 10 || formData.phone.length > 12) {
      toast.error("Please enter a valid phone number (10-12 digits)");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    setIsSubmitting(true);
    try {
      const utmData = getUTMDataForDB();
      const submissionData = {
        full_name: formData.name,
        phone_number: formData.phone,
        email: formData.email,
        education_level: formData.education,
        course: formData.course,
        work_experience: formData.workExperience,
        designation: formData.designation,
        utm_source: utmData.utm_source,
        utm_medium: utmData.utm_medium,
        utm_campaign: utmData.utm_campaign,
        utm_term: utmData.utm_term,
        utm_content: utmData.utm_content,
        referrer: utmData.referrer,
        landing_page_url: utmData.landing_page_url,
        fbclid: utmData.fbclid,
        gclid: utmData.gclid,
        ttclid: utmData.ttclid,
        msclkid: utmData.msclkid,
        ...customData
        // Merge custom overrides (e.g., scholarship info)
      };
      await createEnrollment(submissionData);
      const broucherData = resolveBrochure(selectedCourse);
      console.log("Brochure data resolved:", broucherData);
      console.log("Form data being submitted:", submissionData);
      console.log("sending WhatsApp message...");
      await sendWhatsAppMessage({
        phone: formData.phone.startsWith("+") ? formData.phone : `+91${formData.phone}`,
        name: formData.name,
        broucher: broucherData
      });
      const trackingFormData = new FormData();
      trackingFormData.append("name", formData.name);
      trackingFormData.append("email", formData.email);
      trackingFormData.append("phone", formData.phone);
      trackingFormData.append("education", formData.education);
      trackingFormData.append("designation", formData.designation);
      trackingFormData.append("course", formData.course || selectedCourse || "");
      trackingFormData.append("workExperience", formData.workExperience);
      await trackFormSubmission(trackingFormData);
      toast.success("Enrollment submitted successfully! Opening brochure...");
      openBrochure(selectedCourse);
      if (onSubmit) onSubmit();
      setTimeout(() => {
        onClose();
        navigate("/thank-you", { state: { courseName: formData.course } });
      }, 800);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit enrollment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-2 sm:p-4 overflow-y-auto",
      children: /* @__PURE__ */ jsx("div", { className: "relative w-full max-w-md mx-auto mt-10 md:mt-0 bg-gray-800/95 rounded-xl shadow-xl overflow-y-auto md:my-6 ", children: /* @__PURE__ */ jsxs("div", { className: "h-[85vh] md:h-auto flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "sticky top-0 bg-gray-800/95 px-4 py-3 border-b border-gray-700 z-10", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "absolute right-3 top-3 text-gray-400 hover:text-white transition-colors p-1",
              children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 pr-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold text-white", children: "Enroll Now" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-gray-300", children: selectedCourse ? `You are enrolling for the ${selectedCourse} course.` : "Start Your Product Management or Data Analytics Journey or No Code Development Journey." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: " shadow-2xl p-6 w-full border border-gray-800/30", id: "course-form", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "p-4 space-y-3 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center ", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block min-w-[100px] text-sm font-medium text-gray-300 mb-1", children: "Full Name" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "name",
                  required: true,
                  className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                  placeholder: "Type Your Name",
                  value: formData.name,
                  onChange: (e) => setFormData({ ...formData, name: e.target.value })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block min-w-[100px] text-sm font-medium text-gray-300 mb-1", children: "Email Address" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  id: "email",
                  required: true,
                  className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                  placeholder: "Type Your Email Address",
                  value: formData.email,
                  onChange: (e) => setFormData({ ...formData, email: e.target.value })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-300 mb-1", children: "Phone Number" }),
              /* @__PURE__ */ jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ jsx("span", { className: " bg-transparent text-white px-2 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm", children: "+91" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "tel",
                    id: "phone",
                    required: true,
                    className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                    placeholder: "Type Your Phone No",
                    value: formData.phone,
                    onChange: (e) => {
                      const sanitizedValue = e.target.value.replace(/\D/g, "").slice(0, 12);
                      setFormData({ ...formData, phone: sanitizedValue });
                    }
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "designation", className: "block min-w-[100px] text-sm font-medium text-gray-300 mb-1", children: "Designation" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "designation",
                  required: true,
                  className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                  placeholder: "Type Your Designation",
                  value: formData.designation,
                  onChange: (e) => setFormData({ ...formData, designation: e.target.value })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "education", className: "block text-sm font-medium text-gray-300 mb-1", children: "Education" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "education",
                  required: true,
                  className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                  value: formData.education,
                  onChange: (e) => setFormData({ ...formData, education: e.target.value }),
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Select" }),
                    /* @__PURE__ */ jsx("option", { value: "High School", children: "High School" }),
                    /* @__PURE__ */ jsx("option", { value: "Bachelor's", children: "Bachelor's" }),
                    /* @__PURE__ */ jsx("option", { value: "Master's", children: "Master's" }),
                    /* @__PURE__ */ jsx("option", { value: "PhD", children: "PhD" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "workExperience", className: "block text-sm font-medium text-gray-300 mb-1", children: "Experience" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "workExperience",
                  required: true,
                  className: "w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white text-sm",
                  value: formData.workExperience,
                  onChange: (e) => setFormData({ ...formData, workExperience: e.target.value }),
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Select" }),
                    /* @__PURE__ */ jsx("option", { value: "0-1", children: "0-1 yrs" }),
                    /* @__PURE__ */ jsx("option", { value: "1-3", children: "1-3 yrs" }),
                    /* @__PURE__ */ jsx("option", { value: "3-5", children: "3-5 yrs" }),
                    /* @__PURE__ */ jsx("option", { value: "5+", children: "5+ yrs" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mb-3", children: "By submitting this form, you acknowledge that we collect non-personal campaign data for analytics purposes." }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-sm",
                children: "Submit Application"
              }
            )
          ] })
        ] }) })
      ] }) })
    },
    "enrollment-modal"
  ) });
}
const EnrollmentModal$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EnrollmentModal$1
}, Symbol.toStringTag, { value: "Module" }));
const AppDownloadPOP = ({ delayMs = 2e3, courseName }) => {
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedCourse, selectedCourse } = useCourseContext();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);
  const handleClose = () => setVisible(false);
  const handleBannerClick = () => {
    const courseToSet = courseName || selectedCourse || "General";
    setSelectedCourse(courseToSet);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: visible && // <motion.div
    //   initial={{ opacity: 0, scale: 0.9 }}
    //   animate={{ opacity: 1, scale: 1 }}
    //   exit={{ opacity: 0, scale: 0.9 }}
    //   transition={{ duration: 0.3 }}
    //   className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    //   role="dialog"
    //   aria-modal="true"
    // >
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
        role: "dialog",
        "aria-modal": "true",
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { y: 20 },
            animate: { y: 0 },
            className: "relative max-w-4xl w-full",
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleClose,
                  "aria-label": "Close Christmas banner popup",
                  className: "absolute -top-4 -right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900 shadow-lg transition-all hover:scale-110",
                  children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6" })
                }
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "cursor-pointer rounded-2xl overflow-hidden shadow-2xl",
                  onClick: handleBannerClick,
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "/redesign/christmas/cristmas-banner.jpg",
                        alt: "AcceleratorX Christmas Sale - 40% Off",
                        className: "hidden md:block w-full h-auto object-cover"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "/redesign/christmas/cristmas-banner-mobile.png",
                        alt: "AcceleratorX Christmas Sale - 40% Off",
                        className: "block md:hidden w-full h-auto object-cover"
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx(
      EnrollmentModal$1,
      {
        isOpen: isModalOpen,
        onClose: () => setIsModalOpen(false),
        customData: {
          utm_campaign: "Christmas_Sale_Scholarship",
          utm_content: "Popup_Banner_Click_40_Percent_Off"
        }
      }
    )
  ] });
};
const defaultLayout = {
  showNavbar: true,
  showFooter: true
};
const routeLayouts = {
  // Admin routes
  "/admin/ad-analysis": { showNavbar: false, showFooter: false },
  "/admin/dashboard": { showNavbar: false, showFooter: false },
  // Workshop routes
  "/workshop/dm-masterclass": { showNavbar: false, showFooter: false },
  "/workshop/da-masterclass": { showNavbar: false, showFooter: false },
  "/workshop/pm-masterclass": { showNavbar: false, showFooter: false },
  "/workshop/gen-ai-masterclass": { showNavbar: false, showFooter: false },
  "/workshop/gen-ai-masterclass-bxwcy": { showNavbar: false, showFooter: false },
  "/workshop/gen-ai-masterclass-thidtx": { showNavbar: false, showFooter: false },
  "/workshop/gen-ai-masterclass-four": { showNavbar: false, showFooter: false },
  "/workshop/gen-ai-masterclass-fioth": { showNavbar: false, showFooter: false },
  "/workshop/ai-dm-fitm": { showNavbar: false, showFooter: false },
  // Course routes
  "/courses/generative-ai-fb": { showNavbar: false, showFooter: false },
  "/courses/product-management-program-fb": { showNavbar: false, showFooter: false },
  "/courses/data-analytics-program-fb": { showNavbar: false, showFooter: false },
  "/courses/product-management-program-eie": { showNavbar: false, showFooter: false },
  "/courses/data-analytics-program-eie": { showNavbar: false, showFooter: false },
  "/courses/no-code-tool-program-fb": { showNavbar: false, showFooter: false },
  // Other routes
  "/thank-you": { showNavbar: false, showFooter: false },
  "/xsat": { showNavbar: false, showFooter: false },
  "/fa-register/gen-ai": { showNavbar: false, showFooter: false },
  "/fa-register/pm": { showNavbar: false, showFooter: false },
  "/fa-register/dm": { showNavbar: false, showFooter: false },
  "/fa-register/da": { showNavbar: false, showFooter: false },
  "/workshop-registration/success": { showNavbar: false, showFooter: false }
};
const getRouteLayout = (pathname) => {
  if (pathname.startsWith("/workshop-payment/success/")) {
    return { showNavbar: false, showFooter: false };
  }
  if (pathname in routeLayouts) {
    return routeLayouts[pathname];
  }
  for (const route in routeLayouts) {
    if (pathname.startsWith(route)) {
      return routeLayouts[route];
    }
  }
  return defaultLayout;
};
const Footer = lazy(() => import("./assets/Footer-BIfY1nSE.js"));
const EnrollmentModal = lazy(() => Promise.resolve().then(() => EnrollmentModal$2));
const MainLayout = ({ children }) => {
  const [isEnrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const location = useLocation();
  const handleCloseModal = () => {
    setEnrollmentModalOpen(false);
  };
  useEffect(() => {
    const openHandler = () => setEnrollmentModalOpen(true);
    const closeHandler = () => setEnrollmentModalOpen(false);
    window.addEventListener("open-enrollment-modal", openHandler);
    window.addEventListener("close-enrollment-modal", closeHandler);
    return () => {
      window.removeEventListener("open-enrollment-modal", openHandler);
      window.removeEventListener("close-enrollment-modal", closeHandler);
    };
  }, []);
  const { showNavbar, showFooter } = getRouteLayout(location.pathname);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    showNavbar && /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(EnrollmentModal, { isOpen: isEnrollmentModalOpen, onClose: handleCloseModal }) }),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen", children }),
    showFooter && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "py-8 text-center", children: "Loading…" }), children: /* @__PURE__ */ jsx(Footer, {}) }) }),
    /* @__PURE__ */ jsx(AppDownloadPOP, {})
  ] });
};
function ThankYouPage({ courseName }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-900 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-gray-300 text-lg", children: "Loading your enrollment details..." })
    ] }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-900 flex items-center justify-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl w-full text-center space-y-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(
      "svg",
      {
        className: "w-16 h-16 text-green-500",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M5 13l4 4L19 7"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-white", children: "Thank You!" }),
      /* @__PURE__ */ jsxs("p", { className: "text-xl text-gray-300", children: [
        "Your enrollment for ",
        courseName,
        " has been successfully submitted."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Our team will contact you shortly with further details." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-800 p-6 rounded-xl max-w-md mx-auto", children: /* @__PURE__ */ jsxs("p", { className: "text-gray-300 text-lg", children: [
      "Get ready to start your journey with",
      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold block mt-2", children: courseName })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 justify-center", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.location.href = "https://acceleratorx.org",
          className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200",
          children: "Know More About Us"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.open("https://calendly.com/digvijay-acceleratorx", "_blank"),
          className: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl",
          children: "📅 Book a Call with Our Expert"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent", children: "Join Our Community" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Connect with us and other learners" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://chat.whatsapp.com/LNzQFat64Fe7HdfBeHFZ7L",
            target: "_blank",
            rel: "noopener noreferrer nofollow",
            className: "group relative overflow-hidden rounded-xl p-0.5 transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#25D366] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900",
            children: [
              /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-green-600 to-green-500" }),
              /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-4 bg-gray-900 p-4 rounded-[10px] transition-all duration-300 group-hover:bg-gray-900/80", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-green-500/10 text-green-500", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-lg text-white group-hover:text-green-400 transition-colors duration-300", children: "Join WhatsApp" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300", children: "Get Daily Updates" })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://discord.gg/WKAdQuuv",
            target: "_blank",
            rel: "noopener noreferrer nofollow",
            className: "group relative overflow-hidden rounded-xl p-0.5 transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#5865F2] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900",
            children: [
              /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500" }),
              /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-4 bg-gray-900 p-4 rounded-[10px] transition-all duration-300 group-hover:bg-gray-900/80", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-indigo-500/10 text-indigo-500", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" }) }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-lg text-white group-hover:text-indigo-400 transition-colors duration-300", children: "Join Discord" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300", children: "For Job Opportunities" })
                ] })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const RouteLogic = ({ setSelectedCourse }) => {
  const location = useLocation();
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16732602077/CMPJCPz1msUaEN393Ko-"
      });
    }
  }, []);
  useEffect(() => {
    if (location.pathname === "/courses/product-management" || location.pathname === "/courses/product-management-program-fb" || location.pathname === "/courses/product-management-program-eie") {
      setSelectedCourse("Product Management");
    } else if (location.pathname === "/courses/data-analytics" || location.pathname === "/courses/data-analytics-program-fb" || location.pathname === "/courses/data-analytics-program-fb-b") {
      setSelectedCourse("Data Analytics");
    } else if (location.pathname === "/courses/generative-ai" || location.pathname === "/courses/generative-ai-fb") {
      setSelectedCourse("Generative AI");
    } else {
      setSelectedCourse(null);
    }
  }, [location, setSelectedCourse]);
  return null;
};
const ThankYouPageWrapper = () => {
  const location = useLocation();
  const { selectedCourse } = useCourseContext();
  const courseName = location.state?.courseName || selectedCourse || "our course";
  return React__default.createElement(ThankYouPage, { courseName });
};
const ADMIN_EMAIL = "admin_acx@acceleratorx.org";
const ADMIN_PASSWORD = "acceleratorx@7009876";
const BLOG_USER_EMAIL = "blog_acx@gmail.com";
const BLOG_USER_PASSWORD = "blog_acx@7890";
const PERFORMANCE_MARKETER_EMAIL = "performance_marketer@gmail.com";
const PERFORMANCE_MARKETER_PASSWORD = "performance@accex2019";
const SECOND_ORG_EMAIL = "sales@acceleratorx.com";
const SECOND_ORG_PASSWORD = "sales@accex2025";
const RNS_ORG_EMAIL = "rns@acceleratorx.com";
const RNS_ORG_PASSWORD = "rns@acce2025";
const authService = {
  async login(email, password) {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const authState = { token: "admin_authenticated", role: "admin" };
      localStorage.setItem("auth_state", JSON.stringify(authState));
      return { success: true, role: "admin" };
    }
    if (email === BLOG_USER_EMAIL && password === BLOG_USER_PASSWORD) {
      const authState = { token: "blog_user_authenticated", role: "blog_user" };
      localStorage.setItem("auth_state", JSON.stringify(authState));
      return { success: true, role: "blog_user" };
    }
    if (email === PERFORMANCE_MARKETER_EMAIL && password === PERFORMANCE_MARKETER_PASSWORD) {
      const authState = { token: "performance_marketer_authenticated", role: "performance_marketer" };
      localStorage.setItem("auth_state", JSON.stringify(authState));
      return { success: true, role: "performance_marketer" };
    }
    if (email === SECOND_ORG_EMAIL && password === SECOND_ORG_PASSWORD) {
      const authState = { token: "sales_authenticated", role: "sales" };
      localStorage.setItem("auth_state", JSON.stringify(authState));
      return { success: true, role: "performance_marketer" };
    }
    if (email === RNS_ORG_EMAIL && password === RNS_ORG_PASSWORD) {
      const authState = { token: "sales_authenticated", role: "sales" };
      localStorage.setItem("auth_state", JSON.stringify(authState));
      return { success: true, role: "performance_marketer" };
    }
    return { success: false };
  },
  logout() {
    localStorage.removeItem("auth_state");
  },
  isAuthenticated() {
    const authState = localStorage.getItem("auth_state");
    return !!authState;
  },
  getRole() {
    const authState = localStorage.getItem("auth_state");
    if (!authState) return null;
    return JSON.parse(authState).role;
  },
  hasAccess(requiredRole) {
    const role = this.getRole();
    if (!role) return false;
    if (role === "admin") return true;
    if (Array.isArray(requiredRole)) {
      return requiredRole.includes(role);
    }
    if (role === "workshop_viewer" && requiredRole === "workshop_viewer") return true;
    if (role === "blog_user" && requiredRole === "blog_user") return true;
    if (role === "performance_marketer" && requiredRole === "performance_marketer") return true;
    return role === requiredRole;
  }
};
const RoleProtectedRoute = ({
  children,
  requiredRole
}) => {
  const isAuthenticated = authService.isAuthenticated();
  const userRole = authService.getRole();
  const hasAccess = requiredRole ? userRole === "admin" || (Array.isArray(requiredRole) ? requiredRole.includes(userRole) : userRole === requiredRole) : true;
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsx(Navigate, { to: "/login" });
  }
  if (!hasAccess) {
    return /* @__PURE__ */ jsx(Navigate, { to: "/admin" });
  }
  return /* @__PURE__ */ jsx(Fragment, { children });
};
const WorkshopPaymentSuccess = lazy(() => import("./assets/Success-N-b6YkOf.js"));
const XSATEntry = lazy(() => import("./assets/XSATEntry-DSVTjfVJ.js"));
const EventManagementPage = lazy(() => import("./assets/event-BFH-kBCj.js"));
const RegistrationSuccess = lazy(() => import("./assets/registration-successful-BksTzJ1M.js"));
const HomePage = lazy(() => import("./assets/HomePage-DkrI2bUS.js"));
const AboutPage = lazy(() => import("./assets/AboutPage-C0pcFWq6.js"));
const BlogList = lazy(() => import("./assets/BlogList-B5b1WCAt.js"));
const BlogDetail = lazy(() => import("./assets/BlogDetail-BZsNVFZj.js"));
const Login = lazy(() => import("./assets/Login-DoTJADyU.js"));
const Privacy = lazy(() => import("./assets/Privacy-Y2E90NZr.js"));
const Terms = lazy(() => import("./assets/Terms-BoyvuCSM.js"));
const Refund = lazy(() => import("./assets/Refund-mzjCxYD7.js"));
const MentorPage = lazy(() => import("./assets/MentorPage-C81GYAsv.js"));
const GenAICourse$1 = lazy(() => import("./assets/GenAIEntry-CGcYOCVJ.js"));
const GenAICourseAD$1 = lazy(() => import("./assets/GenAIAd-LqUZVc0a.js"));
const DataAnalyticsPage$1 = lazy(() => import("./assets/index-B6huWyM0.js"));
const BlogDashboard = lazy(() => import("./assets/BlogDashboard-bsItqqw5.js"));
const Events = lazy(() => import("./assets/Events-BSe5P6Gl.js"));
const YearEnd = lazy(() => import("./assets/YearEnd-BTbvSNfY.js"));
const ProjectListing$1 = lazy(() => import("./assets/ProjectListing-Bv5BQ3tb.js"));
const mainRoutes = [
  /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }, "home"),
  /* @__PURE__ */ jsx(Route, { path: "/about-us", element: /* @__PURE__ */ jsx(AboutPage, {}) }, "about"),
  /* @__PURE__ */ jsx(Route, { path: "/blogs", element: /* @__PURE__ */ jsx(BlogList, {}) }, "blogs"),
  /* @__PURE__ */ jsx(Route, { path: "/blogs/:slug", element: /* @__PURE__ */ jsx(BlogDetail, {}) }, "blog-detail"),
  /* @__PURE__ */ jsx(Route, { path: "/login", element: /* @__PURE__ */ jsx(Login, {}) }, "login"),
  /* @__PURE__ */ jsx(Route, { path: "/privacy-policy", element: /* @__PURE__ */ jsx(Privacy, {}) }, "privacy"),
  /* @__PURE__ */ jsx(Route, { path: "/terms-and-conditions", element: /* @__PURE__ */ jsx(Terms, {}) }, "terms"),
  /* @__PURE__ */ jsx(Route, { path: "/refund-policy", element: /* @__PURE__ */ jsx(Refund, {}) }, "refund"),
  /* @__PURE__ */ jsx(Route, { path: "/xsat", element: /* @__PURE__ */ jsx(XSATEntry, {}) }, "xsat"),
  /* @__PURE__ */ jsx(Route, { path: "/events", element: /* @__PURE__ */ jsx(Events, {}) }, "events"),
  /* @__PURE__ */ jsx(Route, { path: "/event/PMtakedown/view", element: /* @__PURE__ */ jsx(EventManagementPage, {}) }, "event-pm"),
  // Course Routes
  /* @__PURE__ */ jsx(Route, { path: "/courses/generative-ai", element: /* @__PURE__ */ jsx(GenAICourse$1, {}) }, "gen-ai"),
  /* @__PURE__ */ jsx(Route, { path: "/courses/generative-ai-fb", element: /* @__PURE__ */ jsx(GenAICourseAD$1, {}) }, "gen-ai-fb"),
  // <Route key="digital-marketing" path="/courses/advance-performance-marketing-with-ai" element={<DMAICourse />} />,
  /* @__PURE__ */ jsx(Route, { path: "/courses/data-analytics", element: /* @__PURE__ */ jsx(DataAnalyticsPage$1, {}) }, "data-analytics"),
  // Blog Admin Routes
  /* @__PURE__ */ jsx(
    Route,
    {
      path: "/admin/blogs",
      element: /* @__PURE__ */ jsx(RoleProtectedRoute, { requiredRole: "blog_user", children: /* @__PURE__ */ jsx(BlogDashboard, {}) })
    },
    "blog-admin"
  ),
  // <Route
  //   path="/admin/blogs/new"
  //   element={
  //     <RoleProtectedRoute requiredRole="blog_user">
  //       <BlogForm onClose={() => {}} onSuccess={() => {}} />
  //     </RoleProtectedRoute>
  //   }
  // />,
  // <Route
  //   path="/admin/blogs/edit/:id"
  //   element={
  //     <RoleProtectedRoute requiredRole="blog_user">
  //       <BlogForm onClose={() => {}} onSuccess={() => {}} />
  //     </RoleProtectedRoute>
  //   }
  // />,
  // Thank You Page
  /* @__PURE__ */ jsx(Route, { path: "/thank-you", element: /* @__PURE__ */ jsx(ThankYouPageWrapper, {}) }, "thank-you"),
  /* @__PURE__ */ jsx(Route, { path: "/registration-sucessfull", element: /* @__PURE__ */ jsx(RegistrationSuccess, {}) }, "registration-success"),
  // Workshop Payment Success
  /* @__PURE__ */ jsx(Route, { path: "/workshop-payment/success/:orderId", element: /* @__PURE__ */ jsx(WorkshopPaymentSuccess, {}) }, "workshop-payment-success"),
  // Mentor Page
  /* @__PURE__ */ jsx(Route, { path: "/mentor/:id", element: /* @__PURE__ */ jsx(MentorPage, {}) }, "mentor"),
  //year end route
  /* @__PURE__ */ jsx(Route, { path: "/year-end", element: /* @__PURE__ */ jsx(YearEnd, {}) }, "year-end"),
  // project-listing
  /* @__PURE__ */ jsx(Route, { path: "/project-listing", element: /* @__PURE__ */ jsx(ProjectListing$1, {}) }, "project-listing")
];
const pageMetadata = {
  // Homepage
  "/": {
    title: "AcceleratorX | Learn Product, AI & Data Skills",
    description: "AcceleratorX offers expert-led programs in Product Management, Data Analytics, Generative AI, and Marketing to accelerate your career growth.",
    ogTitle: "AcceleratorX - Future Skills for Career Growth",
    ogDescription: "Learn Product Management, AI, and Data Analytics at AcceleratorX with hands-on training and real-world projects.",
    ogImage: "/redesign/logo-no-bg.webp",
    canonicalUrl: "https://acceleratorx.org/"
  },
  // About Us
  "/about-us": {
    title: "About Us | AcceleratorX Learning Platform",
    description: "Discover AcceleratorX, a platform dedicated to upskilling professionals in AI, Data Analytics, Marketing, and Product Management with expert-led programs.",
    ogTitle: "About AcceleratorX",
    ogDescription: "Learn how AcceleratorX helps learners acquire future-ready skills in AI, Product Management, and Data Analytics.",
    canonicalUrl: "https://acceleratorx.org/about-us"
  },
  // Auth & Account
  // "/login": {
  //   title: "Login | AcceleratorX Learning Portal",
  //   description: "Login to AcceleratorX and access your courses, workshops, and resources in Product Management, AI, Data Analytics, and Marketing programs.",
  //   ogTitle: "Login to AcceleratorX",
  //   ogDescription: "Sign in to your AcceleratorX account to continue your learning journey and access all your enrolled courses.",
  //   canonicalUrl: "https://acceleratorx.org/login"
  // },
  "/sign-up": {
    title: "Sign Up | AcceleratorX",
    description: "Create your AcceleratorX account to access AI, Data Analytics, Product Management, and Marketing courses and start your learning journey.",
    ogTitle: "Sign Up for AcceleratorX",
    ogDescription: "Register for AcceleratorX and begin your learning journey today.",
    canonicalUrl: "https://acceleratorx.org/sign-up"
  },
  "/sign-in": {
    title: "Sign In | AcceleratorX",
    description: "Sign in to your AcceleratorX account to access courses, workshops, and learning materials in AI, Data Analytics, Product Management, and Marketing.",
    ogTitle: "Sign In to AcceleratorX",
    ogDescription: "Access your AcceleratorX account and continue your learning journey.",
    canonicalUrl: "https://acceleratorx.org/sign-in"
  },
  // Policies
  "/privacy-policy": {
    title: "Privacy Policy | AcceleratorX",
    description: "Read AcceleratorX's privacy policy to understand how we collect, protect, and use your personal information while you use our platform.",
    ogTitle: "AcceleratorX Privacy Policy",
    ogDescription: "AcceleratorX ensures your data privacy and security. Read our complete privacy policy.",
    canonicalUrl: "https://acceleratorx.org/privacy-policy"
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | AcceleratorX",
    description: "Review AcceleratorX's terms and conditions outlining the user agreement, responsibilities, and usage guidelines for our courses and services.",
    ogTitle: "AcceleratorX Terms & Conditions",
    ogDescription: "Learn about the rules and guidelines for using AcceleratorX programs and services.",
    canonicalUrl: "https://acceleratorx.org/terms-and-conditions"
  },
  "/refund-policy": {
    title: "Refund Policy | AcceleratorX",
    description: "Understand AcceleratorX's refund policy covering eligibility, process, and conditions for refunds on courses, workshops, and events.",
    ogTitle: "AcceleratorX Refund Policy",
    ogDescription: "Learn how AcceleratorX manages course and workshop refunds.",
    canonicalUrl: "https://acceleratorx.org/refund-policy"
  },
  // Programs & Events
  "/xsat": {
    title: "XSAT Program | AcceleratorX",
    description: "Test your Product Management, AI, and Data Analytics skills with AcceleratorX's XSAT program designed to benchmark and enhance capabilities.",
    ogTitle: "AcceleratorX XSAT Program",
    ogDescription: "Take AcceleratorX's XSAT and measure your career readiness in AI, Data, and Product Management.",
    canonicalUrl: "https://acceleratorx.org/xsat"
  },
  "/events": {
    title: "Events & Workshops | AcceleratorX",
    description: "Explore AcceleratorX events and workshops on Product Management, AI, Data Analytics, and Marketing with industry experts and mentors.",
    ogTitle: "AcceleratorX Events & Workshops",
    ogDescription: "Learn future skills by joining AcceleratorX's expert-led events and masterclasses.",
    canonicalUrl: "https://acceleratorx.org/events"
  },
  "/event/PMtakedown/view": {
    title: "Product Management Takedown Event | AcceleratorX",
    description: "Join the PM Takedown event by AcceleratorX and learn advanced frameworks, strategies, and insights in real-world product management.",
    ogTitle: "AcceleratorX PM Takedown Event",
    ogDescription: "Learn practical PM strategies at AcceleratorX's Product Management Takedown event.",
    canonicalUrl: "https://acceleratorx.org/event/PMtakedown/view"
  },
  // Courses
  "/courses/generative-ai": {
    title: "Generative AI Course | AcceleratorX",
    description: "Master Generative AI at AcceleratorX with hands-on training in AI tools, workflows, and applications to build intelligent business solutions.",
    ogTitle: "AcceleratorX Generative AI Course",
    ogDescription: "Enroll in AcceleratorX's Generative AI course and learn to apply AI-driven innovation.",
    canonicalUrl: "https://acceleratorx.org/courses/generative-ai"
  },
  "/courses/generative-ai-fb": {
    title: "Generative AI Fast-Track Course | AcceleratorX",
    description: "Enroll in AcceleratorX's fast-track Generative AI program designed to help professionals quickly adopt AI tools and applications.",
    ogTitle: "AcceleratorX Generative AI Fast-Track",
    ogDescription: "Learn Generative AI faster with AcceleratorX's focused fast-track program.",
    canonicalUrl: "https://acceleratorx.org/courses/generative-ai"
  },
  "/courses/advance-performance-marketing-with-ai": {
    title: "AI Performance Marketing Course | AcceleratorX",
    description: "Learn advanced performance marketing using AI-driven strategies at AcceleratorX. Gain expertise in automation, targeting, and campaign optimization.",
    ogTitle: "AcceleratorX AI Performance Marketing",
    ogDescription: "Master AI-powered marketing and boost business performance with AcceleratorX.",
    canonicalUrl: "https://acceleratorx.org/courses/advance-performance-marketing-with-ai"
  },
  "/courses/data-analytics": {
    title: "Data Analytics Course | AcceleratorX",
    description: "Gain hands-on expertise in data analysis, visualization, and decision-making with AcceleratorX's Data Analytics training program.",
    ogTitle: "AcceleratorX Data Analytics Course",
    ogDescription: "Learn data analytics skills to analyze, visualize, and make smarter decisions.",
    canonicalUrl: "https://acceleratorx.org/courses/data-analytics"
  },
  "/courses/product-management": {
    title: "Product Management Course | AcceleratorX",
    description: "Learn product strategy, lifecycle management, and leadership skills with AcceleratorX's Product Management course.",
    ogTitle: "AcceleratorX Product Management Course",
    ogDescription: "Master product frameworks and tools in AcceleratorX's PM course.",
    canonicalUrl: "https://acceleratorx.org/courses/product-management"
  },
  "/courses/gen-ai-for-pms": {
    title: "Generative AI for Product Managers | AcceleratorX",
    description: "Learn how Product Managers can use Generative AI for product strategy, automation, and innovation in AcceleratorX's specialized course.",
    ogTitle: "AcceleratorX GenAI for PMs Course",
    ogDescription: "Discover Generative AI applications tailored for Product Managers.",
    canonicalUrl: "https://acceleratorx.org/courses/gen-ai-for-pms"
  },
  "/courses/product-management-program-fb": {
    title: "Product Management Program (Fast-Track) | AcceleratorX",
    description: "Enroll in AcceleratorX's fast-track Product Management program designed to help professionals gain PM skills quickly and effectively.",
    ogTitle: "AcceleratorX PM Fast-Track Program",
    ogDescription: "Learn PM frameworks and tools in AcceleratorX's accelerated program.",
    canonicalUrl: "https://acceleratorx.org/courses/product-management"
  },
  "/courses/data-analytics-program-fb": {
    title: "Data Analytics Program (Fast-Track) | AcceleratorX",
    description: "Join AcceleratorX's fast-track Data Analytics program to quickly develop analysis, visualization, and reporting skills for business.",
    ogTitle: "AcceleratorX Data Analytics Fast-Track",
    ogDescription: "Upskill in Data Analytics with AcceleratorX's fast-track program.",
    canonicalUrl: "https://acceleratorx.org/courses/data-analytics"
  },
  "/courses/data-analytics-program-fb-b": {
    title: "Data Analytics Program (Batch) | AcceleratorX",
    description: "Learn data-driven decision-making in AcceleratorX's Data Analytics batch program. Gain practical analytics skills with expert-led training.",
    ogTitle: "AcceleratorX Data Analytics Batch Program",
    ogDescription: "Enroll in AcceleratorX's Data Analytics batch program today.",
    canonicalUrl: "https://acceleratorx.org/courses/data-analytics"
  },
  "/courses/product-management-program-eie": {
    title: "Product Management EIE Program | AcceleratorX",
    description: "AcceleratorX's EIE Product Management program helps you gain structured PM knowledge, practical tools, and leadership expertise.",
    ogTitle: "AcceleratorX Product Management EIE",
    ogDescription: "Join AcceleratorX's exclusive Product Management EIE program.",
    canonicalUrl: "https://acceleratorx.org/courses/product-management"
  },
  "/courses/data-analytics-program-eie": {
    title: "Data Analytics EIE Program | AcceleratorX",
    description: "Master analytics and insights with AcceleratorX's Data Analytics EIE program designed for professionals and aspiring data leaders.",
    ogTitle: "AcceleratorX Data Analytics EIE",
    ogDescription: "Build expert-level data analytics skills in AcceleratorX's EIE program.",
    canonicalUrl: "https://acceleratorx.org/courses/data-analytics"
  },
  "/courses/n8n-automation": {
    title: "n8n Automation Course | AcceleratorX",
    description: "Learn workflow automation using n8n with AcceleratorX. Build custom automations, optimize processes, and integrate AI-driven tools.",
    ogTitle: "AcceleratorX n8n Automation Course",
    ogDescription: "Master n8n and build powerful automation workflows with AcceleratorX.",
    canonicalUrl: "https://acceleratorx.org/courses/n8n-automation"
  },
  // "/courses/onsite-workshopz": {
  //   title: "Onsite Workshops | AcceleratorX",
  //   description: "Join AcceleratorX's onsite workshops in AI, Data Analytics, and Product Management for immersive, hands-on learning experiences.",
  //   ogTitle: "AcceleratorX Onsite Workshops",
  //   ogDescription: "Learn through in-person sessions at AcceleratorX's onsite workshops.",
  //   canonicalUrl: "https://acceleratorx.org/courses/onsite-workshopz"
  // },
  // Admin Routes
  // "/admin/blogs": {
  //   title: "Admin Blogs Dashboard | AcceleratorX",
  //   description: "Manage blog content in the AcceleratorX admin dashboard. Create, edit, and publish blogs to engage learners and professionals.",
  //   ogTitle: "AcceleratorX Blogs Admin",
  //   ogDescription: "Access AcceleratorX's admin portal for blog management and publishing.",
  //   canonicalUrl: "https://acceleratorx.org/admin/blogs"
  // },
  // "/admin/blogs/new": {
  //   title: "Create New Blog | AcceleratorX Admin",
  //   description: "Add and publish new blog posts through the AcceleratorX admin system to share insights, updates, and learning content.",
  //   ogTitle: "Create Blog - AcceleratorX Admin",
  //   ogDescription: "Write and publish new blog posts with the AcceleratorX admin dashboard.",
  //   canonicalUrl: "https://acceleratorx.org/admin/blogs/new"
  // },
  // "/admin/blogs/edit/:id": {
  //   title: "Edit Blog Post | AcceleratorX Admin",
  //   description: "Update and manage existing blog posts with the AcceleratorX admin editor to keep content fresh, accurate, and engaging for learners.",
  //   ogTitle: "Edit Blog - AcceleratorX Admin",
  //   ogDescription: "Access the AcceleratorX admin editor to update and optimize blog content.",
  //   canonicalUrl: "https://acceleratorx.org/admin/blogs"
  // },
  // Success Pages
  "/thank-you": {
    title: "Thank You | AcceleratorX",
    description: "Thank you for connecting with AcceleratorX. Your registration or request has been received successfully. We'll be in touch soon.",
    ogTitle: "Thank You - AcceleratorX",
    ogDescription: "AcceleratorX has received your submission. Our team will connect with you shortly.",
    canonicalUrl: "https://acceleratorx.org/thank-you"
  },
  "/registration-sucessfull": {
    title: "Registration Successful | AcceleratorX",
    description: "Your AcceleratorX registration was successful. Get ready to start learning and exploring our AI, Data Analytics, and Product Management programs.",
    ogTitle: "Registration Confirmed - AcceleratorX",
    ogDescription: "Your AcceleratorX registration is complete. Begin your learning journey today.",
    canonicalUrl: "https://acceleratorx.org/registration-sucessfull"
  },
  // Workshop Routes
  "/workshop/pm-masterclass": {
    title: "Product Management Masterclass | AcceleratorX",
    description: "Learn advanced product management strategies, frameworks, and tools in AcceleratorX's PM Masterclass taught by industry experts.",
    ogTitle: "AcceleratorX PM Masterclass",
    ogDescription: "Join AcceleratorX's Product Management Masterclass to level up your PM skills.",
    canonicalUrl: "https://acceleratorx.org/workshop/pm-masterclass"
  },
  "/workshop/dm-masterclass": {
    title: "Digital Marketing Masterclass | AcceleratorX",
    description: "Enroll in AcceleratorX's Digital Marketing Masterclass to master SEO, performance marketing, and AI-powered campaigns for business growth.",
    ogTitle: "AcceleratorX Digital Marketing Masterclass",
    ogDescription: "Learn digital marketing strategies and tools at AcceleratorX's DM Masterclass.",
    canonicalUrl: "https://acceleratorx.org/workshop/dm-masterclass"
  },
  "/workshop/da-masterclass": {
    title: "Data Analytics Masterclass | AcceleratorX",
    description: "Join AcceleratorX's Data Analytics Masterclass to develop expertise in data visualization, reporting, and business insights.",
    ogTitle: "AcceleratorX Data Analytics Masterclass",
    ogDescription: "Learn advanced analytics and decision-making at AcceleratorX's DA Masterclass.",
    canonicalUrl: "https://acceleratorx.org/workshop/da-masterclass"
  },
  "/workshop/da-masterclass-bxwxy": {
    title: "Data Analytics Workshop | AcceleratorX",
    description: "Experience hands-on training in AcceleratorX's Data Analytics Workshop and sharpen your skills in analytics and business intelligence.",
    ogTitle: "AcceleratorX Data Analytics Workshop",
    ogDescription: "Build strong data analytics skills with AcceleratorX's hands-on workshop.",
    canonicalUrl: "https://acceleratorx.org/workshop/da-masterclass-bxwxy"
  },
  "/workshop/gen-ai-masterclass": {
    title: "Generative AI Masterclass | AcceleratorX",
    description: "Learn practical Generative AI applications in AcceleratorX's Masterclass, designed to help professionals adopt AI in real projects.",
    ogTitle: "AcceleratorX Generative AI Masterclass",
    ogDescription: "Master Generative AI tools and workflows with AcceleratorX's expert-led class.",
    canonicalUrl: "https://acceleratorx.org/workshop/gen-ai-masterclass"
  },
  "/workshop/gen-ai-masterclass-bxwcy": {
    title: "AI Tools Workshop | AcceleratorX",
    description: "Attend AcceleratorX's Generative AI workshop to explore tools, automation, and real-world AI workflows for professional growth.",
    ogTitle: "AcceleratorX AI Workshop",
    ogDescription: "Learn AI-powered tools and workflows with AcceleratorX's Generative AI workshop.",
    canonicalUrl: "https://acceleratorx.org/workshop/gen-ai-masterclass-bxwcy"
  },
  "/workshop/gen-ai-masterclass-thidtx": {
    title: "Generative AI Training Workshop | AcceleratorX",
    description: "Upskill in AcceleratorX's Generative AI training workshop and gain applied knowledge of AI tools, models, and automation workflows.",
    ogTitle: "AcceleratorX Generative AI Training",
    ogDescription: "Learn advanced AI models and workflows at AcceleratorX's GenAI workshop.",
    canonicalUrl: "https://acceleratorx.org/workshop/gen-ai-masterclass-thidtx"
  },
  "/workshop/gen-ai-masterclass-four": {
    title: "Flowwise Automation Workshop | AcceleratorX",
    description: "Join AcceleratorX's hands-on Flowwise workshop to learn no-code AI automation, workflow design, and deployment strategies.",
    ogTitle: "AcceleratorX Flowwise Automation Workshop",
    ogDescription: "Master no-code AI automation with Flowwise at AcceleratorX's live workshop.",
    canonicalUrl: "https://acceleratorx.org/workshop/gen-ai-masterclass-four"
  },
  "/workshop-registration/success": {
    title: "Workshop Registration Success | AcceleratorX",
    description: "Your workshop registration at AcceleratorX is successful. Get ready to join expert-led sessions in Product, Data, Marketing, and AI.",
    ogTitle: "AcceleratorX Workshop Registration Confirmed",
    ogDescription: "Registration successful. Join your upcoming AcceleratorX workshop.",
    canonicalUrl: "https://acceleratorx.org/workshop-registration/success"
  },
  // Flyer Routes
  "/fa-register/gen-ai": {
    title: "Register for Generative AI Program | AcceleratorX",
    description: "Sign up for AcceleratorX's Generative AI program and start learning AI-powered tools, automation, and applications for real-world use.",
    ogTitle: "AcceleratorX Generative AI Registration",
    ogDescription: "Register today for AcceleratorX's Generative AI learning program.",
    canonicalUrl: "https://acceleratorx.org/fa-register/gen-ai"
  },
  "/fa-register/pm": {
    title: "Register for Product Management Program | AcceleratorX",
    description: "Join AcceleratorX's Product Management program by registering now. Learn practical PM frameworks, tools, and strategies with experts.",
    ogTitle: "AcceleratorX PM Program Registration",
    ogDescription: "Secure your spot in AcceleratorX's Product Management program.",
    canonicalUrl: "https://acceleratorx.org/fa-register/pm"
  },
  "/fa-register/dm": {
    title: "Register for Digital Marketing Program | AcceleratorX",
    description: "Sign up for AcceleratorX's Digital Marketing program and learn AI-driven SEO, performance marketing, and campaign optimization.",
    ogTitle: "AcceleratorX Digital Marketing Registration",
    ogDescription: "Register for AcceleratorX's DM program and start learning AI-powered marketing.",
    canonicalUrl: "https://acceleratorx.org/fa-register/dm"
  },
  "/fa-register/da": {
    title: "Register for Data Analytics Program | AcceleratorX",
    description: "Enroll in AcceleratorX's Data Analytics program and gain skills in data visualization, business insights, and data-driven decision-making.",
    ogTitle: "AcceleratorX Data Analytics Registration",
    ogDescription: "Register for AcceleratorX's Data Analytics program and start your learning journey.",
    canonicalUrl: "https://acceleratorx.org/fa-register/da"
  }
};
function getPageMetadata(path) {
  if (pageMetadata[path]) {
    return pageMetadata[path];
  }
  if (path.startsWith("/admin/blogs/edit/")) {
    return pageMetadata["/admin/blogs/edit/:id"];
  }
  if (path.startsWith("/jobs/")) {
    return {
      title: "Job Details | AcceleratorX",
      description: "Explore career opportunities at AcceleratorX and join our mission to upskill professionals in AI, Data Analytics, and Product Management.",
      ogTitle: "Career Opportunities - AcceleratorX",
      ogDescription: "Find your next career opportunity with AcceleratorX and make an impact in the tech industry.",
      canonicalUrl: `https://acceleratorx.org${path}`
    };
  }
  if (path.startsWith("/certificate/")) {
    return {
      title: "Certificate Verification | AcceleratorX",
      description: "Verify your AcceleratorX certificate for courses in Product Management, Data Analytics, Generative AI, and Digital Marketing.",
      ogTitle: "AcceleratorX Certificate Verification",
      ogDescription: "Verify and download your AcceleratorX course completion certificate.",
      canonicalUrl: `https://acceleratorx.org${path}`
    };
  }
  return {
    title: "AcceleratorX | Learn Product, AI & Data Skills",
    description: "AcceleratorX offers expert-led programs in Product Management, Data Analytics, Generative AI, and Marketing to accelerate your career growth.",
    ogTitle: "AcceleratorX - Future Skills for Career Growth",
    ogDescription: "Learn Product Management, AI, and Data Analytics at AcceleratorX with hands-on training and real-world projects.",
    ogImage: "/redesign/logo-no-bg.webp",
    canonicalUrl: "https://acceleratorx.org/"
  };
}
function SEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  canonicalUrl,
  noIndex = false
}) {
  const location = useLocation();
  const defaultMetadata = getPageMetadata(location.pathname);
  const finalTitle = title || defaultMetadata.title;
  const finalDescription = description || defaultMetadata.description;
  const finalOgTitle = ogTitle || defaultMetadata.ogTitle;
  const finalOgDescription = ogDescription || defaultMetadata.ogDescription;
  const finalOgImage = ogImage || defaultMetadata.ogImage || "/redesign/logo-no-bg.webp";
  const finalCanonicalUrl = canonicalUrl || defaultMetadata.canonicalUrl;
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: finalTitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: finalDescription }),
    /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: finalCanonicalUrl }),
    noIndex ? /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }) : /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
    /* @__PURE__ */ jsx("meta", { name: "googlebot", content: "index, follow" }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: finalCanonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: finalOgTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: finalOgDescription }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: `https://acceleratorx.org${finalOgImage}` }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "AcceleratorX" }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: finalCanonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: finalOgTitle }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: finalOgDescription }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: `https://acceleratorx.org${finalOgImage}` }),
    /* @__PURE__ */ jsx("meta", { name: "author", content: "AcceleratorX" }),
    /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#1a71f6" }),
    /* @__PURE__ */ jsx("link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }),
    /* @__PURE__ */ jsx("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon.svg" })
  ] });
}
const GENCTAB = lazy(() => import("./assets/GENCTAB-kh2Tt5Zv.js"));
const WSAboutGENB = lazy(() => import("./assets/WSAboutGENB-C69ZjsrG.js"));
const WSGENIntroductionB = lazy(() => import("./assets/WSGENIntroductionB-DHvUDhr8.js"));
const WSGENWhoShouldEnrollB = lazy(() => import("./assets/WSGENWhoShouldEnrollB-CVckR0qQ.js"));
const WSHeroGENB = lazy(() => import("./assets/WSHeroGENB-c1qVHElQ.js"));
const GENCTAE = lazy(() => import("./assets/GENCTAE-pIN-Cfbb.js"));
const WSAboutGENE = lazy(() => import("./assets/WSAboutGENE-CgoTDAUd.js"));
const WSGENIntroductionE = lazy(() => import("./assets/WSGENIntroductionE-SEG7AHqw.js"));
const WSGENWhoShouldEnrollE = lazy(() => import("./assets/WSGENWhoShouldEnrollE-DeFb5DVh.js"));
const WSHeroGENE = lazy(() => import("./assets/WSHeroGENE-pSTQpWCn.js"));
const GENCTAAIDM = lazy(() => import("./assets/GENCTAAIDM-xZaO5EHo.js"));
const WSAboutAIDM = lazy(() => import("./assets/WSAboutAIDM-9YigMjV7.js"));
const WSGENIntroductionAIDM = lazy(() => import("./assets/WSGENIntroductionAIDM-B4HWzMJM.js"));
const WSGENWhoShouldEnrollAIDM = lazy(() => import("./assets/WSGENWhoShouldEnrollAIDM-B59LiQL3.js"));
const WSHeroAIDM = lazy(() => import("./assets/WSHeroAIDM-SL2etL6m.js"));
const WSGENMentorAIDM = lazy(() => import("./assets/WSGENMentorAIDM-Bdr8B7hK.js"));
const WSRegistrationSuccess = lazy(() => import("./assets/WSRegistrationSuccess-GyUfnuEP.js"));
const WSGENMentor = lazy(() => import("./assets/WSGENMentor-DKKwRlq6.js"));
const WSHeroDASecond = lazy(() => import("./assets/WSHeroDASecond-2fzB90Sv.js"));
const WSFIOSection = lazy(() => import("./assets/WSIOSection-Be303y9_.js"));
const WSTestimonialDASecond = lazy(() => import("./assets/WSTestimonialDASecond-eW87YTk7.js"));
const AIEcosystem = lazy(() => import("./assets/AIEcosystem-DMFLF07d.js"));
const ProductsSection = lazy(() => import("./assets/ProductsSection-DDIp5SNI.js"));
const TradingPlatformSection = lazy(() => import("./assets/TradingPlatformSection-Dzci5_VK.js"));
const HeroSection = lazy(() => import("./assets/hero-section-C4LbdtLk.js"));
const WorkshopHighlights = lazy(() => import("./assets/workshop-highlights-AebuLKUO.js"));
const BuiltForYou = lazy(() => import("./assets/built-for-you-BXvtmGiy.js"));
const AutomationFeatures = lazy(() => import("./assets/automation-features-B9cNzWxS.js"));
const LeadEngineCTA = lazy(() => import("./assets/lead-engine-cta-CUxwNpWc.js"));
const TechStackSection = lazy(() => import("./assets/tech-stack-section-Bm54YNWV.js"));
const WSGENCMentor = lazy(() => import("./assets/WSGENMentor-DGn6N1mT.js"));
const WSHeroGEND = lazy(() => import("./assets/WSHeroGEND-DCz2cK0I.js"));
const WSAboutGEND = lazy(() => import("./assets/WSAboutGEND-CIxp4d_N.js"));
const WSGENWhoShouldEnrollD = lazy(() => import("./assets/WSGENWhoShouldEnrollD-enXu46W2.js"));
const WSGENIntroductionD = lazy(() => import("./assets/WSGENIntroductionD-B9n7be7r.js"));
const GENCTAD = lazy(() => import("./assets/GENCTAD-hnmhwvuL.js"));
const WSGENDMentor = lazy(() => import("./assets/WSGENDMentor-BYcHXR1f.js"));
const WSRegistrationSuccessD = lazy(() => import("./assets/WSRegistrationSuccessD-D8-10o76.js"));
const WSHeroDA = lazy(() => import("./assets/WSHero-DYq0gTSb.js"));
const WSAboutDA = lazy(() => import("./assets/WSAbout-BUWP9Jf-.js"));
const WSTestimonialDA = lazy(() => import("./assets/WSTestimonial-DKabxbIu.js"));
const WSHeroPM = lazy(() => import("./assets/WSHeroPM-CqRTx4_H.js"));
const WSAboutPM = lazy(() => import("./assets/WSAboutPM-DnWLF5NK.js"));
const WSTestimonialPM = lazy(() => import("./assets/WSTestimonialPM-DaIAvh3j.js"));
const WSHeroPMB = lazy(() => import("./assets/WSHeroPMB-BK4QUSJ8.js"));
const WSAboutPMB = lazy(() => import("./assets/WSAboutPMB-Cf5PQ66f.js"));
const WSGENWhoShouldEnrollPMB = lazy(() => import("./assets/WSGENWhoShouldEnrollPMB-5EuNqCO0.js"));
const WSGENIntroductionPMB = lazy(() => import("./assets/WSGENIntroductionPMB-N6Cnrp3_.js"));
const GENCTAPMB = lazy(() => import("./assets/GENCTAPMB-DYPlXqY7.js"));
const WSHeroGEN = lazy(() => import("./assets/WSHeroGEN-Cz1BgoNd.js"));
const WSAboutGEN = lazy(() => import("./assets/WSAboutGEN-gz2agjzY.js"));
const WSGENWhoShouldEnroll = lazy(() => import("./assets/WSGENWhoShouldEnroll-BWwSKIi-.js"));
const WSGENIntroduction = lazy(() => import("./assets/WSGENIntroduction-Dls-_t1k.js"));
const GENCTA = lazy(() => import("./assets/GENCTA-DF7ssnI5.js"));
const WSHeroDM = lazy(() => import("./assets/WSHeroDM-DnYJf1aZ.js"));
const WSHeroGENC = lazy(() => import("./assets/WSHeroGENC-CBfhKRVb.js"));
const WSAboutGENC = lazy(() => import("./assets/WSAboutGENC-Bc5_TQeh.js"));
const WSGENWhoShouldEnrollC = lazy(() => import("./assets/WSGENWhoShouldEnrollC-DKaF9EPc.js"));
const WSGENIntroductionC = lazy(() => import("./assets/WSGENIntroductionC-BorXgNss.js"));
const GENCTAC = lazy(() => import("./assets/GENCTAC-CPQUFAp9.js"));
const WorkshopPageDA = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(SEO, {}),
  /* @__PURE__ */ jsx(WSHeroDA, {}),
  /* @__PURE__ */ jsx(WSAboutDA, {}),
  /* @__PURE__ */ jsx(WSTestimonialDA, {})
] });
const WorkshopPageDASecond = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(SEO, {}),
  /* @__PURE__ */ jsx(WSHeroDASecond, {}),
  /* @__PURE__ */ jsx(ProductsSection, {}),
  /* @__PURE__ */ jsx(TradingPlatformSection, {}),
  /* @__PURE__ */ jsx(AIEcosystem, {}),
  /* @__PURE__ */ jsx(WSFIOSection, {}),
  /* @__PURE__ */ jsx(WSTestimonialDASecond, {})
] });
const WorkshopPagePM = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(SEO, {}),
  /* @__PURE__ */ jsx(WSHeroPM, {}),
  /* @__PURE__ */ jsx(WSAboutPM, {}),
  /* @__PURE__ */ jsx(WSTestimonialPM, {})
] });
const WorkshopPagePMB = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(SEO, {}),
  /* @__PURE__ */ jsx(WSHeroPMB, {}),
  /* @__PURE__ */ jsx(WSAboutPMB, {}),
  /* @__PURE__ */ jsx(WSGENWhoShouldEnrollPMB, {}),
  /* @__PURE__ */ jsx(WSGENMentor, {}),
  /* @__PURE__ */ jsx(WSGENIntroductionPMB, {}),
  /* @__PURE__ */ jsx(GENCTAPMB, {})
] });
const WorkshopPageGEN = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(SEO, {}),
  /* @__PURE__ */ jsx(WSHeroGEN, {}),
  /* @__PURE__ */ jsx(WSAboutGEN, {}),
  /* @__PURE__ */ jsx(WSGENIntroduction, {}),
  /* @__PURE__ */ jsx(WSGENWhoShouldEnroll, {}),
  /* @__PURE__ */ jsx(WSGENMentor, {}),
  /* @__PURE__ */ jsx(GENCTA, {})
] });
const WorkshopPageGENBTest = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(SEO, {}),
  /* @__PURE__ */ jsx(WSHeroGENB, {}),
  /* @__PURE__ */ jsx(WSAboutGENB, {}),
  /* @__PURE__ */ jsx(WSGENWhoShouldEnrollB, {}),
  /* @__PURE__ */ jsx(WSGENMentor, {}),
  /* @__PURE__ */ jsx(WSGENIntroductionB, {}),
  /* @__PURE__ */ jsx(GENCTAB, {})
] });
const WorkshopPageGENC = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(SEO, {}),
  /* @__PURE__ */ jsx(WSHeroGENC, {}),
  /* @__PURE__ */ jsx(WSAboutGENC, {}),
  /* @__PURE__ */ jsx(WSGENIntroductionC, {}),
  /* @__PURE__ */ jsx(WSGENWhoShouldEnrollC, {}),
  /* @__PURE__ */ jsx(WSGENCMentor, {}),
  /* @__PURE__ */ jsx(GENCTAC, {})
] });
const WorkshopPageGEND = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(SEO, {}),
  /* @__PURE__ */ jsx(WSHeroGEND, {}),
  /* @__PURE__ */ jsx(WSAboutGEND, {}),
  /* @__PURE__ */ jsx(WSGENWhoShouldEnrollD, {}),
  /* @__PURE__ */ jsx(WSGENDMentor, {}),
  /* @__PURE__ */ jsx(WSGENIntroductionD, {}),
  /* @__PURE__ */ jsx(GENCTAD, {})
] });
const WorkshopPageGENETest = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(SEO, {}),
  /* @__PURE__ */ jsx(WSHeroGENE, {}),
  /* @__PURE__ */ jsx(WSAboutGENE, {}),
  /* @__PURE__ */ jsx(WSGENWhoShouldEnrollE, {}),
  /* @__PURE__ */ jsx(WSGENMentor, {}),
  /* @__PURE__ */ jsx(WSGENIntroductionE, {}),
  /* @__PURE__ */ jsx(GENCTAE, {})
] });
const WorkshopPageAIDMTest = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(SEO, {}),
  /* @__PURE__ */ jsx(WSHeroAIDM, {}),
  /* @__PURE__ */ jsx(WSAboutAIDM, {}),
  /* @__PURE__ */ jsx(WSGENWhoShouldEnrollAIDM, {}),
  /* @__PURE__ */ jsx(WSGENMentorAIDM, {}),
  /* @__PURE__ */ jsx(WSGENIntroductionAIDM, {}),
  /* @__PURE__ */ jsx(GENCTAAIDM, {})
] });
const WorkshopPageDM = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(SEO, {}),
  /* @__PURE__ */ jsx(HeroSection, {}),
  /* @__PURE__ */ jsx(WSHeroDM, {}),
  /* @__PURE__ */ jsx(WorkshopHighlights, {}),
  /* @__PURE__ */ jsx(TechStackSection, {}),
  /* @__PURE__ */ jsx(AutomationFeatures, {}),
  /* @__PURE__ */ jsx(BuiltForYou, {}),
  /* @__PURE__ */ jsx(LeadEngineCTA, {})
] });
const workshopRoutes = [
  /* @__PURE__ */ jsx(Route, { path: "/workshop/pm-masterclass", element: /* @__PURE__ */ jsx(WorkshopPagePM, {}) }, "workshop-pm"),
  /* @__PURE__ */ jsx(Route, { path: "/workshop/pm-masterclass-bxwxy", element: /* @__PURE__ */ jsx(WorkshopPagePMB, {}) }, "workshop-pmb"),
  /* @__PURE__ */ jsx(Route, { path: "/workshop/dm-masterclass", element: /* @__PURE__ */ jsx(WorkshopPageDM, {}) }, "workshop-dm"),
  /* @__PURE__ */ jsx(Route, { path: "/workshop/da-masterclass", element: /* @__PURE__ */ jsx(WorkshopPageDA, {}) }, "workshop-da"),
  /* @__PURE__ */ jsx(Route, { path: "/workshop/da-masterclass-bxwxy", element: /* @__PURE__ */ jsx(WorkshopPageDASecond, {}) }, "workshop-da-second"),
  /* @__PURE__ */ jsx(Route, { path: "/workshop/gen-ai-masterclass", element: /* @__PURE__ */ jsx(WorkshopPageGEN, {}) }, "workshop-gen"),
  /* @__PURE__ */ jsx(Route, { path: "/workshop/gen-ai-masterclass-bxwcy", element: /* @__PURE__ */ jsx(WorkshopPageGENBTest, {}) }, "workshop-genb"),
  /* @__PURE__ */ jsx(Route, { path: "/workshop/gen-ai-masterclass-thidtx", element: /* @__PURE__ */ jsx(WorkshopPageGENC, {}) }, "workshop-genc"),
  /* @__PURE__ */ jsx(Route, { path: "/workshop/gen-ai-masterclass-four", element: /* @__PURE__ */ jsx(WorkshopPageGEND, {}) }, "workshop-gend"),
  /* @__PURE__ */ jsx(Route, { path: "/workshop/gen-ai-masterclass-fioth", element: /* @__PURE__ */ jsx(WorkshopPageGENETest, {}) }, "workshop-gene"),
  /* @__PURE__ */ jsx(Route, { path: "/workshop/ai-dm-fitm", element: /* @__PURE__ */ jsx(WorkshopPageAIDMTest, {}) }, "workshop-aidm"),
  /* @__PURE__ */ jsx(Route, { path: "/workshop-registration/success", element: /* @__PURE__ */ jsx(WSRegistrationSuccess, {}) }, "workshop-success"),
  /* @__PURE__ */ jsx(Route, { path: "/workshop-registration/success-d", element: /* @__PURE__ */ jsx(WSRegistrationSuccessD, {}) }, "workshop-success-d")
];
const GENAIFlyers = lazy(() => import("./assets/GENAIFlyers-DtuG_dW2.js"));
const DMFlyers = lazy(() => import("./assets/DMFlyers-I5hZvjv2.js"));
const PMFlyers = lazy(() => import("./assets/PMFlyers-D6zp1g8T.js"));
const DAFlyers = lazy(() => import("./assets/DAFlyers-CFxr1KmO.js"));
const flyerRoutes = [
  /* @__PURE__ */ jsx(Route, { path: "/fa-register/gen-ai", element: /* @__PURE__ */ jsx(GENAIFlyers, {}) }, "flyer-genai"),
  /* @__PURE__ */ jsx(Route, { path: "/fa-register/pm", element: /* @__PURE__ */ jsx(PMFlyers, {}) }, "flyer-pm"),
  /* @__PURE__ */ jsx(Route, { path: "/fa-register/dm", element: /* @__PURE__ */ jsx(DMFlyers, {}) }, "flyer-dm"),
  /* @__PURE__ */ jsx(Route, { path: "/fa-register/da", element: /* @__PURE__ */ jsx(DAFlyers, {}) }, "flyer-da")
];
const ProductManagementEntry = lazy(() => import("./assets/ProductManagementEntry-C-00LXsx.js"));
const DataAnalyticsEntry = lazy(() => import("./assets/DataAnalyticsEntry-F0x2i9Sj.js"));
const DataAnalyticsAd = lazy(() => import("./assets/DataAnalyticsAd-CPfwpvSe.js"));
const GenAiForPMEntry = lazy(() => import("./assets/GenAiForPMEntry-YtcYBPLj.js"));
const KuppamCourses = lazy(() => import("./assets/KuppamCourses-COufqdYg.js"));
const GenAICourse = lazy(
  () => import("./assets/GenAIEntry-CGcYOCVJ.js")
);
const GenAICourseAD = lazy(() => import("./assets/GenAIAd-LqUZVc0a.js"));
const DataAnalyticsPage = lazy(() => import("./assets/index-B6huWyM0.js"));
const ProductManagementPageEIE = lazy(
  () => import("./assets/ProductManagementEIE-ds3x8pSp.js")
);
const AIDMEntry = lazy(() => import("./assets/AIDMEntry-dNf1Hj46.js"));
const courseRoutes = [
  // Main Course Routes
  /* @__PURE__ */ jsx(
    Route,
    {
      path: "/courses/product-management",
      element: /* @__PURE__ */ jsx(ProductManagementEntry, {})
    },
    "course-pm"
  ),
  /* @__PURE__ */ jsx(Route, { path: "/courses/data-analytics", element: /* @__PURE__ */ jsx(DataAnalyticsEntry, {}) }, "course-da-entry"),
  /* @__PURE__ */ jsx(Route, { path: "/courses/generative-ai", element: /* @__PURE__ */ jsx(GenAICourse, {}) }, "course-genai-entry"),
  /* @__PURE__ */ jsx(Route, { path: "/courses/gen-ai-for-pms", element: /* @__PURE__ */ jsx(GenAiForPMEntry, {}) }, "course-genai-pm"),
  /* @__PURE__ */ jsx(Route, { path: "/courses/ai-digital-marketing", element: /* @__PURE__ */ jsx(AIDMEntry, {}) }, "course-aidm"),
  // <Route
  //   key="course-dmai"
  //   path="/courses/advance-performance-marketing-with-ai"
  //   element={<DMAICourse />}
  // />,
  // Ad Course Routes
  /* @__PURE__ */ jsx(
    Route,
    {
      path: "/courses/product-management-program-fb",
      element: /* @__PURE__ */ jsx(ProductManagementPageEIE, {})
    },
    "course-pm-fb"
  ),
  /* @__PURE__ */ jsx(
    Route,
    {
      path: "/courses/data-analytics-program-fb",
      element: /* @__PURE__ */ jsx(DataAnalyticsPage, {})
    },
    "course-da-fb"
  ),
  /* @__PURE__ */ jsx(
    Route,
    {
      path: "/courses/data-analytics-program-fb-b",
      element: /* @__PURE__ */ jsx(DataAnalyticsPage, {})
    },
    "course-da-fb-b"
  ),
  /* @__PURE__ */ jsx(
    Route,
    {
      path: "/courses/product-management-program-eie",
      element: /* @__PURE__ */ jsx(ProductManagementPageEIE, {})
    },
    "course-pm-eie"
  ),
  /* @__PURE__ */ jsx(
    Route,
    {
      path: "/courses/data-analytics-program-eie",
      element: /* @__PURE__ */ jsx(DataAnalyticsAd, {})
    },
    "course-da-eie"
  ),
  /* @__PURE__ */ jsx(Route, { path: "/courses/generative-ai-fb", element: /* @__PURE__ */ jsx(GenAICourseAD, {}) }, "course-genai-fb"),
  /* @__PURE__ */ jsx(Route, { path: "/courses/generative-ai-fb-b", element: /* @__PURE__ */ jsx(GenAICourseAD, {}) }, "course-genai-fb-b"),
  /* @__PURE__ */ jsx(
    Route,
    {
      path: "/courses/onsite-workshopz",
      element: /* @__PURE__ */ jsx(KuppamCourses, {})
    },
    "course-kuppam"
  )
];
const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useUser();
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center min-h-screen bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" }) });
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsx(Navigate, { to: "/sign-in", replace: true });
  }
  return /* @__PURE__ */ jsx(Outlet, {});
};
const ProfileRoutes = lazy(() => import("./assets/profileRoutes-DCFoFKZJ.js").then((m) => ({ default: m.ProfileRoutes })));
const SignUpForm = lazy(() => import("./assets/SignUpForm-kgRMQuqr.js"));
const SignInForm = lazy(() => import("./assets/SignInForm-kHfglUP-.js").then((m) => ({ default: m.SignInForm })));
const JobApplication = lazy(() => import("./assets/JobApplication-CFT8WLHn.js"));
const JobDetails = lazy(() => import("./assets/JobDetails-DWhB-aCg.js"));
const JobList = lazy(() => import("./assets/JobList-CIVRuowG.js"));
const MyApplications = lazy(() => import("./assets/MyApplications-B5qADIl3.js"));
const CertificateDisplayPage = lazy(() => import("./assets/CertificateDisplayPage-BdqWr7M2.js"));
const ProjectListing = lazy(() => import("./assets/ProjectListing-Bv5BQ3tb.js"));
const ProjectDetail = lazy(() => import("./assets/ProjectDetail-B_zAFe0x.js"));
const AppRoutes = () => {
  const { setSelectedCourse } = useCourseContext();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(RouteLogic, { setSelectedCourse }),
    /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(LottieLoader, {}), children: /* @__PURE__ */ jsxs(Routes, { children: [
      mainRoutes,
      workshopRoutes,
      flyerRoutes,
      courseRoutes,
      /* @__PURE__ */ jsx(Route, { path: "/sign-up", element: /* @__PURE__ */ jsx(SignUpForm, {}) }, "sign-up"),
      /* @__PURE__ */ jsx(Route, { path: "/sign-in", element: /* @__PURE__ */ jsx(SignInForm, {}) }, "sign-in"),
      /* @__PURE__ */ jsx(Route, { path: "/jobs", element: /* @__PURE__ */ jsx(JobList, {}) }, "jobs"),
      /* @__PURE__ */ jsx(Route, { path: "/jobs/:id", element: /* @__PURE__ */ jsx(JobDetails, {}) }, "job-details"),
      /* @__PURE__ */ jsx(Route, { path: "/certificate/:certificateId", element: /* @__PURE__ */ jsx(CertificateDisplayPage, {}) }, "certificate"),
      /* @__PURE__ */ jsx(Route, { path: "/projects", element: /* @__PURE__ */ jsx(ProjectListing, {}) }, "projects"),
      /* @__PURE__ */ jsx(Route, { path: "/projects/:id", element: /* @__PURE__ */ jsx(ProjectDetail, {}) }, "project-detail"),
      /* @__PURE__ */ jsxs(Route, { element: /* @__PURE__ */ jsx(ProtectedRoute, {}), children: [
        /* @__PURE__ */ jsx(Route, { path: "/profile/*", element: /* @__PURE__ */ jsx(ProfileRoutes, {}) }, "profile"),
        /* @__PURE__ */ jsx(Route, { path: "/jobs/:id/apply", element: /* @__PURE__ */ jsx(JobApplication, {}) }, "job-apply"),
        /* @__PURE__ */ jsx(Route, { path: "/my-applications", element: /* @__PURE__ */ jsx(MyApplications, {}) }, "my-applications")
      ] }, "protected")
    ] }) }) })
  ] });
};
function render(url, context = {}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false
      }
    }
  });
  const helmetContext = {};
  const html = renderToString(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(CourseProvider, { children: /* @__PURE__ */ jsx(UserProvider, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(AppRoutes, {}) }) }) }) }) }) })
  );
  return { html, context: { ...context, helmet: helmetContext } };
}
export {
  EnrollmentModal$1 as E,
  Helmet as H,
  Link as L,
  SEO as S,
  api as a,
  LottieLoader as b,
  companyLogo as c,
  useCourseContext as d,
  authService as e,
  createEnrollment as f,
  getUTMDataForDB as g,
  generateFormEventId as h,
  render,
  trackFormSubmission as t,
  useUser as u
};
