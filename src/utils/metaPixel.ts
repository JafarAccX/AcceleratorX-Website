// // Meta Conversion API endpoint
// const META_CONVERSION_API_URL = "https://graph.facebook.com/v17.0";

// interface ConversionAPIPayload {
//   data: Array<{
//     event_name: string;
//     event_time: number;
//     user_data: {
//       em?: string[];
//       ph?: string[];
//       fn?: string[];
//       ct?: string[];
//       st?: string[];
//       zp?: string[];
//       external_id?: string[];
//     };
//     custom_data?: {
//       course_name?: string;
//       education_level?: string;
//       click_id?: string;
//       gclid?: string;
//       ttclid?: string;
//       msclkid?: string;
//       campaign_id?: string;
//       traffic_source?: string;
//       browser_id?: string;
//       user_agent?: string;
//       external_id?: string;
//       content_name?: string;
//       content_category?: string;
//       referrer?: string;
//       full_url?: string;
//     };
//   }>;
//   access_token: string;
// }

// const hashData = async (data: string): Promise<string> => {
//   try {
//     const hashBuffer = await window.crypto.subtle.digest(
//       "SHA-256",
//       new TextEncoder().encode(data)
//     );
//     return Array.from(new Uint8Array(hashBuffer))
//       .map((b) => b.toString(16).padStart(2, "0"))
//       .join("");
//   } catch (error) {
//     // console.error("Error hashing data:", error);
//     throw error;
//   }
// };

// const getTrackingData = () => {
//   const urlParams = new URLSearchParams(window.location.search);

//   return {
//     fbclid: urlParams.get("fbclid") || "",
//     gclid: urlParams.get("gclid") || "",
//     ttclid: urlParams.get("ttclid") || "",
//     msclkid: urlParams.get("msclkid") || "",
//     utm_source: urlParams.get("utm_source") || "",
//     utm_medium: urlParams.get("utm_medium") || "",
//     utm_campaign: urlParams.get("utm_campaign") || "",
//     utm_term: urlParams.get("utm_term") || "",
//     utm_content: urlParams.get("utm_content") || "",
//     referrer: document.referrer || "direct",
//     full_url: window.location.href,
//   };
// };

// export const getUTMDataForDB = () => {
//   const trackingData = getTrackingData();
//   return {
//     utm_source: trackingData.utm_source,
//     utm_medium: trackingData.utm_medium,
//     utm_campaign: trackingData.utm_campaign,
//     utm_term: trackingData.utm_term,
//     utm_content: trackingData.utm_content,
//     referrer: trackingData.referrer,
//     landing_page_url: trackingData.full_url,
//     fbclid: trackingData.fbclid,
//     gclid: trackingData.gclid,
//     ttclid: trackingData.ttclid,
//     msclkid: trackingData.msclkid
//   };
// };

// export const trackFormSubmission = async (
//   formData: FormData
// ): Promise<void> => {
//   try {
//     // 1. Validate environment variables
//     const pixelId = import.meta.env.VITE_META_PIXEL_ID;
//     const accessToken = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN;

//     if (!pixelId || !accessToken) {
//       throw new Error("Missing Meta Pixel configuration");
//     }

//     // 2. Get tracking data
//     const trackingData = getTrackingData();

//     // 3. Hash sensitive data
//     const [hashedEmail, hashedPhone, hashedFirstName] = await Promise.all([
//       hashData(formData.email.toLowerCase()),
//       hashData(formData.phone),
//       hashData(formData.name.split(" ")[0])
//     ]);

//     // 4. Prepare Meta Pixel payload
//     const payload = {
//       data: [
//         {
//           event_name: "CompleteRegistration",
//           event_time: Math.floor(Date.now() / 1000),
//           action_source: "website",
//           user_data: {
//             em: hashedEmail,
//             ph: hashedPhone,
//             fn: hashedFirstName,
//             client_user_agent: navigator.userAgent,
//             fbc: trackingData.fbclid
//               ? `fb.1.${Date.now()}.${trackingData.fbclid}`
//               : undefined,
//             fbp: undefined,
//           },
//           custom_data: {
//             content_name: "registration_form",
//             status: "complete",
//             course: formData.course,
//             browser_id: navigator.userAgent,
//             click_id:
//               trackingData.fbclid ||
//               trackingData.gclid ||
//               trackingData.ttclid ||
//               trackingData.msclkid,
//             ...trackingData,
//           },
//         },
//       ],
//       access_token: accessToken,
//     };

//     // 5. Send to Meta
//     const response = await fetch(
//       `${META_CONVERSION_API_URL}/${pixelId}/events`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Meta API error: ${response.status}`);
//     }

//   } catch (error) {
//     // console.error("❌ Error in form submission tracking:", error);
//   }
// };

// export const trackViewContent = (): void => {
//   try {
//     // console.group("Meta Pixel View Content Tracking");
//     // console.info("🚀 Starting view content tracking");
//     const pixelId = import.meta.env.VITE_META_PIXEL_ID;
//     const accessToken = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN;

//     // console.debug("Meta Configuration:", {
//     //   pixelId,
//     //   hasAccessToken: !!accessToken,
//     //   apiEndpoint: META_CONVERSION_API_URL,
//     // });

//     if (!accessToken) {
//       // console.warn("⚠️ Meta Pixel access token not found");
//       // console.groupEnd();
//       return;
//     }

//     const currentPath = window.location.pathname;
//     const currentUrl = window.location.href;
//     const referrer = document.referrer;
//     const clickId =
//       new URLSearchParams(window.location.search).get("fbclid") || "";
//     const browserInfo = {
//       userAgent: navigator.userAgent,
//       browserId:
//         navigator.userAgent + navigator.language + screen.width + screen.height,
//     };
//     const externalId = crypto.randomUUID();

//     const payload: ConversionAPIPayload = {
//       data: [
//         {
//           event_name: "ViewContent",
//           event_time: Math.floor(Date.now() / 1000),
//           user_data: {
//             external_id: [externalId],
//           },
//           custom_data: {
//             content_name: currentPath,
//             content_category: "page_view",
//             click_id: clickId,
//             browser_id: browserInfo.browserId,
//             user_agent: browserInfo.userAgent,
//             external_id: externalId,
//             referrer: referrer || "direct",
//             full_url: currentUrl,
//           },
//         },
//       ],
//       access_token: accessToken,
//     };

//     // console.info("📦 Preparing conversion API payload");
//     // console.debug("Full Payload:", {
//     //   eventName: "ViewContent",
//     //   pixelId,
//     //   payload: { ...payload, access_token: "***" }, // Hide access token in logs
//     // });

//     // console.info("📤 Sending data to Meta Conversion API");
//     fetch(`${META_CONVERSION_API_URL}/${pixelId}/events`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     })
//       .then(() => {
//         // console.info("✅ View content tracking completed successfully");
//         // console.groupEnd();
//       })
//       .catch((error) => {
//         // console.error("❌ Error sending view content tracking:", error);
//         // console.groupEnd();
//       });
//   } catch (error) {
//     // console.error("❌ Error in trackViewContent:", error);
//     // console.groupEnd();
//   }
// };



// Meta Conversion API endpoint
const META_CONVERSION_API_URL = "https://graph.facebook.com/v17.0";

// Data Analytics specific routes
const DA_ROUTES = [
  "/courses/data-analytics-program-fb",
];

interface ConversionAPIPayload {
  data: Array<{
    event_name: string;
    event_time: number;
    user_data: {
      em?: string[];
      ph?: string[];
      fn?: string[];
      ct?: string[];
      st?: string[];
      zp?: string[];
      external_id?: string[];
      client_user_agent?: string;
      fbc?: string;
      fbp?: string | undefined;
    };
    custom_data?: {
      course_name?: string;
      education_level?: string;
      click_id?: string;
      gclid?: string;
      ttclid?: string;
      msclkid?: string;
      campaign_id?: string;
      traffic_source?: string;
      browser_id?: string;
      user_agent?: string;
      external_id?: string;
      content_name?: string;
      content_category?: string;
      referrer?: string;
      full_url?: string;
      course?: string;
      status?: string;
      utm_source?: string;
      utm_medium?: string;
      utm_campaign?: string;
      utm_term?: string;
      utm_content?: string;
      fbclid?: string;
    };
    action_source?: string;
  }>;
  access_token: string;
}

interface PixelConfig {
  pixelId: string;
  accessToken: string;
}

interface FormData {
  email: string;
  phone: string;
  name: string;
  course?: string;
}

const hashData = async (data: string): Promise<string> => {
  try {
    const hashBuffer = await window.crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(data)
    );
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  } catch (error) {
    // console.error("Error hashing data:", error);
    throw error;
  }
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
    msclkid: trackingData.msclkid
  };
};

// Get pixel configuration based on the current path
const getPixelConfigs = (path: string): PixelConfig[] => {
  const configs: PixelConfig[] = [];

  // Main pixel config
  const mainPixelId = import.meta.env.VITE_META_PIXEL_ID;
  const mainAccessToken = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN;

  if (mainPixelId && mainAccessToken) {
    configs.push({
      pixelId: mainPixelId,
      accessToken: mainAccessToken
    });
  }

  // Add DA Direct pixel if on a DA route
  const isDARoute = DA_ROUTES.some(route => path.includes(route));
  if (isDARoute) {
    const daPixelId = import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT;
    const daAccessToken = import.meta.env.VITE_META_CONVERSION_API_ACCESS_TOKEN_DA_DIRECT;

    if (daPixelId && daAccessToken) {
      configs.push({
        pixelId: daPixelId,
        accessToken: daAccessToken
      });
    }
  }

  return configs;
};

// Send data to Meta Conversion API
const sendToMetaAPI = async (pixelConfig: PixelConfig, payload: ConversionAPIPayload): Promise<void> => {
  try {
    const response = await fetch(
      `${META_CONVERSION_API_URL}/${pixelConfig.pixelId}/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          access_token: pixelConfig.accessToken
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Meta API error: ${response.status}`);
    }
  } catch (error) {
    // console.error(`Error sending to pixel ${pixelConfig.pixelId}:`, error);
  }
};

export const trackFormSubmission = async (
  formData: FormData
): Promise<void> => {
  try {
    // Get pixel configurations based on current path
    const pixelConfigs = getPixelConfigs(window.location.pathname);

    if (pixelConfigs.length === 0) {
      throw new Error("Missing Meta Pixel configuration");
    }

    // Get tracking data
    const trackingData = getTrackingData();

    // Hash sensitive data
    const [hashedEmail, hashedPhone, hashedFirstName] = await Promise.all([
      hashData(formData.email.toLowerCase()),
      hashData(formData.phone),
      hashData(formData.name.split(" ")[0])
    ]);

    // Prepare Meta Pixel payload
    const payload: ConversionAPIPayload = {
      data: [
        {
          event_name: "CompleteRegistration",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          user_data: {
            em: [hashedEmail],
            ph: [hashedPhone],
            fn: [hashedFirstName],
            client_user_agent: navigator.userAgent,
            fbc: trackingData.fbclid
              ? `fb.1.${Date.now()}.${trackingData.fbclid}`
              : undefined,
            fbp: undefined,
          },
          custom_data: {
            content_name: "registration_form",
            status: "complete",
            course: formData.course,
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
      access_token: "", // Will be set in sendToMetaAPI
    };

    // Send to each configured pixel
    const promises = pixelConfigs.map(config =>
      sendToMetaAPI(config, payload)
    );

    await Promise.all(promises);

  } catch (error) {
    // console.error("❌ Error in form submission tracking:", error);
  }
};

export const trackViewContent = (): void => {
  try {
    // Get pixel configurations based on current path
    const pixelConfigs = getPixelConfigs(window.location.pathname);

    if (pixelConfigs.length === 0) {
      return;
    }

    const currentPath = window.location.pathname;
    const currentUrl = window.location.href;
    const referrer = document.referrer;
    const clickId = new URLSearchParams(window.location.search).get("fbclid") || "";
    const browserInfo = {
      userAgent: navigator.userAgent,
      browserId: navigator.userAgent + navigator.language + screen.width + screen.height,
    };
    const externalId = crypto.randomUUID();

    const payload: ConversionAPIPayload = {
      data: [
        {
          event_name: "ViewContent",
          event_time: Math.floor(Date.now() / 1000),
          user_data: {
            external_id: [externalId],
          },
          custom_data: {
            content_name: currentPath,
            content_category: "page_view",
            click_id: clickId,
            browser_id: browserInfo.browserId,
            user_agent: browserInfo.userAgent,
            external_id: externalId,
            referrer: referrer || "direct",
            full_url: currentUrl,
          },
        },
      ],
      access_token: "", // Will be set in sendToMetaAPI
    };

    // Send to each configured pixel
    pixelConfigs.forEach(config => {
      sendToMetaAPI(config, payload)
        .catch(error => {
          // console.error(`Error sending ViewContent to pixel ${config.pixelId}:`, error);
        });
    });
  } catch (error) {
    // console.error("❌ Error in trackViewContent:", error);
  }
};