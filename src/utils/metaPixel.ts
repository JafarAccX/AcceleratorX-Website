// src/utils/metaPixel.ts
import { trackingService } from './unifiedTracking';

interface ConversionAPIPayload {
  data: Array<{
    event_name: string;
    event_time: number;
    action_source?: string;
    event_id?: string;
    user_data?: {
      em?: string;
      ph?: string;
      fn?: string;
      client_user_agent?: string;
      fbc?: string;
      fbp?: string;
      external_id?: string[];
    };
    custom_data?: {
      [key: string]: string | number | undefined;
    };
  }>;
  access_token: string;
}

const META_CONVERSION_API_URL = "https://graph.facebook.com/v17.0";

const DEFAULT_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
const DA_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT;
const DA_PIXEL_ID_SECOND = import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT_SECOND;
const AIDM_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID_AI_DIGITAL_MARKETING;

const DEFAULT_ACCESS_TOKEN = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN;
const DA_ACCESS_TOKEN = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN_DA_DIRECT;
const DA_ACCESS_TOKEN_SECOND = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN_DA_DIRECT_SECOND;
const AIDM_ACCESS_TOKEN = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN_AI_DIGITAL_MARKETING;

const DA_COURSE_NAMES = ["Data Analytics"]; // You can also match by route if needed
const AIDM_COURSE_NAMES = ["AI Digital Marketing"];
const AIDM_ROUTES = ["/courses/ai-digital-marketing"];

const hashData = async (data: string): Promise<string> => {
  const hashBuffer = await window.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(data)
  );
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
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
    full_url: window.location.href,
  };
};

export const getUTMDataForDB = () => {
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
    msclkid: trackingData.msclkid,
  };
};

// Choose correct pixel ID and token based on course and route
const getMetaConfig = (course?: string) => {
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

export const trackFormSubmission = async (
  formData: FormData
): Promise<void> => {
  try {
    const { pixelId, accessToken } = getMetaConfig(formData.get("course") as string);



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
      hashData(name.split(" ")[0]),
    ]);

    // Get event_id from unified tracking service for deduplication
    const eventId = trackingService.getStoredEventId();

    if (!eventId) {
      console.warn('No event ID found for server-side tracking');
      return;
    }

    console.log("Server-side tracking - Event ID:", eventId);
    const payload = {
      data: [
        {
          event_name: "CompleteRegistration",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_id: eventId,
          user_data: {
            em: hashedEmail,
            ph: hashedPhone,
            fn: hashedFirstName,
            client_user_agent: navigator.userAgent,
            fbc: trackingData.fbclid
              ? `fb.1.${Date.now()}.${trackingData.fbclid}`
              : undefined,
            fbp: undefined,
          },
          custom_data: {
            content_name: "registration_form",
            status: "complete",
            course: formData.get("course") as string,
            browser_id: navigator.userAgent,
            click_id:
              trackingData.fbclid ||
              trackingData.gclid ||
              trackingData.ttclid ||
              trackingData.msclkid,
            ...trackingData,
          },
        },
      ],
      access_token: accessToken,
    };

    await fetch(`${META_CONVERSION_API_URL}/${pixelId}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Meta Form Tracking Error", error);
  }
};

export const trackViewContent = (course?: string): void => {
  try {
    const { pixelId, accessToken } = getMetaConfig(course);
    if (!pixelId || !accessToken) return;

    const trackingData = getTrackingData();
    const externalId = crypto.randomUUID();
    const browserId = navigator.userAgent + navigator.language + screen.width + screen.height;

    const payload: ConversionAPIPayload = {
      data: [
        {
          event_name: "ViewContent",
          event_time: Math.floor(Date.now() / 1000),
          user_data: {
            external_id: [externalId],
          },
          custom_data: {
            content_name: window.location.pathname,
            content_category: "page_view",
            click_id:
              trackingData.fbclid ||
              trackingData.gclid ||
              trackingData.ttclid ||
              trackingData.msclkid,
            browser_id: browserId,
            user_agent: navigator.userAgent,
            external_id: externalId,
            ...trackingData,
          },
        },
      ],
      access_token: accessToken,
    };

    fetch(`${META_CONVERSION_API_URL}/${pixelId}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Meta ViewContent Tracking Error", error);
  }
};
