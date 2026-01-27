import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useCourseContext } from "../context/courseContext";

const PIXEL_ID_DEFAULT = import.meta.env.VITE_META_PIXEL_ID as string | undefined;
const PIXEL_ID_DA = import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT as string | undefined;
const PIXEL_ID_DA_SECOND = import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT_SECOND as string | undefined;
const PIXEL_ID_AIDM = import.meta.env.VITE_META_PIXEL_ID_AI_DIGITAL_MARKETING as string | undefined;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    fbqInitialized?: boolean;
    __META_EVENT_ID__?: string;
    _fbq?: unknown;
  }
}

// Load Facebook Pixel script if not already loaded
const loadFacebookPixel = () => {
  // Skip on server-side
  if (typeof window === 'undefined' || window.fbq) return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
    if (f.fbq) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    n = f.fbq = function (...args: any[]) {
      if (n.callMethod) {
        n.callMethod(...args);
      } else {
        n.queue.push(args);
      }
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null, null, null);
};

const initializePixel = (pixelId: string) => {
  // Skip on server-side
  if (typeof window === 'undefined' || !window.fbq) {
    console.warn('Facebook Pixel not loaded');
    return;
  }

  // Initialize the pixel
  window.fbq('init', pixelId);
};


const PAGE_VIEW_ROUTES = [
  "/courses/product-management-program-fb",
  "/courses/data-analytics-program-fb",
  "/courses/data-analytics-program-fb-b",
  "/courses/no-code-tool-program-fb",
  "/courses/product-management-program-eie",
  "/courses/data-analytics-program-eie",
  "/courses/generative-ai-fb",
  "/courses/generative-ai-fb-b",
  "/workshop/pm-masterclass",
  "/workshop/pm-masterclass-bxwxy",
  "/workshop/dm-masterclass",
  "/workshop/gen-ai-masterclass-bxwcy",
  "/workshop/gen-ai-masterclass",
  "/workshop/da-masterclass",
  "/workshop/da-masterclass-bxwxy",
  "/courses/gen-ai-for-pms",
  "/courses/ai-digital-marketing",
  "/advance-ai-crash-course",
];

const LEAD_ROUTES = ["/thank-you", "/workshop-registration/success", "/workshop-payment/success/"];
const COMPLETE_REGISTRATION_ROUTES = ["/thank-you", "/workshop-registration/success", "/workshop-payment/success/"];

const DA_ROUTES = ["/courses/data-analytics-program-fb", "/courses/data-analytics"];
const DA_ROUTES_SECOND = ["/courses/data-analytics-program-fb-b", "/courses/generative-ai-fb-b"];
const AIDM_ROUTES = ["/courses/ai-digital-marketing"];

export const MetaPixel = () => {
  const location = useLocation();
  const { selectedCourse } = useCourseContext();
  const initializedPixelsRef = useRef<Set<string>>(new Set());

  // Skip all logic on server-side, but keep hooks consistent
  const isClient = typeof window !== 'undefined';

  const isDaRoute = DA_ROUTES.includes(location.pathname);
  const isDaRouteSecond = DA_ROUTES_SECOND.includes(location.pathname);
  const isDaCourse = selectedCourse === "Data Analytics";
  const isAIDMRoute = AIDM_ROUTES.includes(location.pathname);
  const isAIDMCourse = selectedCourse === "AI Digital Marketing";

  let pixelId: string | undefined = PIXEL_ID_DEFAULT;
  if (isDaRouteSecond) pixelId = PIXEL_ID_DA_SECOND;
  else if (isDaRoute || isDaCourse) pixelId = PIXEL_ID_DA;
  else if (isAIDMRoute || isAIDMCourse) pixelId = PIXEL_ID_AIDM;

  const isPageViewRoute = PAGE_VIEW_ROUTES.includes(location.pathname);
  const isLeadRoute = LEAD_ROUTES.includes(location.pathname);
  const isCompleteRegistrationRoute = COMPLETE_REGISTRATION_ROUTES.includes(location.pathname);

  // Debug logging
  useEffect(() => {
    if (!isClient) return;

  }, [isClient, location.pathname, pixelId, isPageViewRoute, isLeadRoute, isCompleteRegistrationRoute, isDaRoute, isDaRouteSecond, isAIDMRoute, isAIDMCourse]);

  useEffect(() => {
    if (!isClient) return;

    // Load Facebook Pixel script
    loadFacebookPixel();
  }, [isClient]);

  useEffect(() => {
    if (!isClient || !pixelId) {
      if (!pixelId) {
        console.warn('No pixel ID available for route:', location.pathname);
      }
      return;
    }

    // Wait for fbq to be available
    const checkFbq = () => {
      if (!window.fbq) {
        setTimeout(checkFbq, 100);
        return;
      }

      // Initialize pixel if not already initialized
      if (!initializedPixelsRef.current.has(pixelId)) {
        initializePixel(pixelId);
        initializedPixelsRef.current.add(pixelId);
      }

      // Track events
      if (isPageViewRoute) {
        console.log(`Tracking PageView for pixel: ${pixelId}`);
        window.fbq('track', 'PageView');
      }

      if (isLeadRoute) {
        console.log(`Tracking Lead for pixel: ${pixelId}`);
        window.fbq('track', 'Lead');
      }

      if (isCompleteRegistrationRoute) {
        console.log(`Tracking CompleteRegistration for pixel: ${pixelId}`);
        window.fbq('track', 'CompleteRegistration');
      }
    };

    checkFbq();

  }, [isClient, pixelId, isPageViewRoute, isLeadRoute, isCompleteRegistrationRoute, location.pathname]);

  return null;
};
