import { O as trackingService } from "./main-DHphvIsW.js";
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
export {
  getUTMDataForDB as g,
  trackFormSubmission as t
};
