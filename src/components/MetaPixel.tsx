import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useCourseContext } from "../context/courseContext";
import { 
  trackPageView, 
  trackLead, 
  trackCompleteRegistration, 
  generateFormEventId,
  getTrackingDebugInfo 
} from "../utils/unifiedTracking";

const PIXEL_ID_DEFAULT = import.meta.env.VITE_META_PIXEL_ID as string | undefined;
const PIXEL_ID_DA = import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT as string | undefined;
const PIXEL_ID_DA_SECOND = import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT_SECOND as string | undefined;

declare global {
  interface Window {
    fbq?: (command: string, eventOrId: string, params?: unknown) => void;
    fbqInitialized?: boolean;
    __META_EVENT_ID__?: string;
  }
}

console.log("Meta Pixel IDs:", {
  default: PIXEL_ID_DEFAULT,
  da: PIXEL_ID_DA,
  daSecond: PIXEL_ID_DA_SECOND
});

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
  "/workshop/dm-masterclass",
  "/workshop/gen-ai-masterclass-bxwcy",
  "/workshop/gen-ai-masterclass",
  "/workshop/da-masterclass",
  "/workshop/da-masterclass-bxwxy",
  "/courses/gen-ai-for-pms",
];

const LEAD_ROUTES = ["/thank-you", "/workshop-registration/success", "/workshop-payment/success/"];
const COMPLETE_REGISTRATION_ROUTES = ["/thank-you", "/workshop-registration/success", "/workshop-payment/success/"];

const DA_ROUTES = ["/courses/data-analytics-program-fb", "/courses/data-analytics"];
const DA_ROUTES_SECOND = ["/courses/data-analytics-program-fb-b", "/courses/generative-ai-fb-b"];

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
  const isCompleteRegistrationRoute = COMPLETE_REGISTRATION_ROUTES.includes(location.pathname);

  // Store event_id in ref for CompleteRegistration events
  const eventIdRef = useRef<string | null>(null);
  
  // Generate event ID for registration routes
  useEffect(() => {
    if (isCompleteRegistrationRoute && !eventIdRef.current) {
      eventIdRef.current = generateFormEventId();
    }
  }, [isCompleteRegistrationRoute]);

  // Debug logging
  console.log("MetaPixel Debug:", {
    route: location.pathname,
    pixelId,
    isPageViewRoute,
    isLeadRoute,
    isCompleteRegistrationRoute,
    eventId: eventIdRef.current,
    trackingDebug: getTrackingDebugInfo()
  });

  useEffect(() => {
    if (!pixelId) {
      console.warn('No pixel ID available for route:', location.pathname);
      return;
    }

    // Ensure fbq is available
    if (!window.fbq) {
      console.warn('Facebook Pixel not loaded');
      return;
    }

    // Track events using unified service
    if (isPageViewRoute) {
      trackPageView(pixelId);
    }
    
    if (isLeadRoute) {
      trackLead(pixelId);
    }
    
    if (isCompleteRegistrationRoute && eventIdRef.current) {
      trackCompleteRegistration(pixelId, eventIdRef.current, { 
        event_id: eventIdRef.current 
      });
    }

  }, [pixelId, isPageViewRoute, isLeadRoute, isCompleteRegistrationRoute, location.pathname]);

  return null;
};
