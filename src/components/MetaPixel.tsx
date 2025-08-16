import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCourseContext } from "../context/courseContext";

const PIXEL_ID_DEFAULT = import.meta.env.VITE_META_PIXEL_ID as string | undefined;
const PIXEL_ID_DA = import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT as string | undefined;
const PIXEL_ID_DA_SECOND = import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT_SECOND as string | undefined;

declare global {
  interface Window {
    fbq?: (command: string, eventOrId: string, params?: unknown) => void;
    fbqInitialized?: boolean;
  }
}

const PAGE_VIEW_ROUTES = [
  "/courses/product-management-program-fb",
  "/courses/data-analytics-program-fb",
  "/courses/data-analytics-program-fb-b",
  "/courses/no-code-tool-program-fb",
  "/courses/product-management-program-eie",
  "/courses/data-analytics-program-eie",
  "/courses/generative-ai-fb",
  "/workshop/pm-masterclass",
  "/workshop/dm-masterclass",
  "/workshop/gen-ai-masterclass-bxwcy",
  "/workshop/gen-ai-masterclass",
  "/workshop/da-masterclass",
  "/workshop/da-masterclass-bxwxy",
  "/courses/gen-ai-for-pms",
];

const LEAD_ROUTES = ["/thank-you", "/workshop-registration/success", "/workshop-payment/success/"];

const DA_ROUTES = ["/courses/data-analytics-program-fb", "/courses/data-analytics"];
const DA_ROUTES_SECOND = ["/courses/data-analytics-program-fb-b"];

export const MetaPixel = () => {
  const location = useLocation();
  const { selectedCourse } = useCourseContext();

  const isDaRoute = DA_ROUTES.includes(location.pathname);
  const isDaRouteSecond = DA_ROUTES_SECOND.includes(location.pathname);
  const isDaCourse = selectedCourse === "Data Analytics";

  let pixelId: string | undefined = PIXEL_ID_DEFAULT;
  if (isDaRouteSecond) pixelId = PIXEL_ID_DA_SECOND;
  else if (isDaRoute || isDaCourse) pixelId = PIXEL_ID_DA;

  const isPageViewRoute = PAGE_VIEW_ROUTES.includes(location.pathname);
  const isLeadRoute = LEAD_ROUTES.includes(location.pathname);

  useEffect(() => {
    if (!pixelId) return;

    // Polyfill fbq as a no-op to prevent ReferenceError if fbevents.js runs before our script sets fbq
    if (!window.fbq) {
      window.fbq = function () { return; };
    }

    const triggerEvents = () => {
      if (!window.fbq) return;
      if (!window.fbqInitialized) {
        window.fbq("init", pixelId);
        window.fbqInitialized = true;
      }
      if (isPageViewRoute) window.fbq("track", "PageView");
      if (isLeadRoute) window.fbq("track", "Lead");
    };

    const existing = document.getElementById("fb-pixel-script") as HTMLScriptElement | null;
    if (existing) {
      // Script already present; just trigger events for this route
      triggerEvents();
      return;
    }

    const script = document.createElement("script");
    script.id = "fb-pixel-script";
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    script.onload = triggerEvents;
    // Defer injection slightly to keep critical path clean
    const inject = () => document.head.appendChild(script);
    if (document.readyState === "complete") setTimeout(inject, 0);
    else window.addEventListener("load", inject, { once: true });
  }, [pixelId, isPageViewRoute, isLeadRoute]);

  return null;
};
