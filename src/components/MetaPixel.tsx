import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
const PIXEL_ID_DA_DIRECT = import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT;

/**
 * Route configurations
 */
const PAGE_VIEW_ROUTES = [
  "/courses/product-management-program-fb",
  "/courses/data-analytics-program-fb",
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
];

const LEAD_ROUTES = ["/thank-you", "/workshop-registration/success", "/workshop-payment/success/"];

// Routes specifically for Data Analytics
const DA_ROUTES = ["/courses/data-analytics-program-fb"];

export const MetaPixel = () => {
  const location = useLocation();
  const isPageViewRoute = PAGE_VIEW_ROUTES.includes(location.pathname);
  const isLeadRoute = LEAD_ROUTES.includes(location.pathname);
  const isDARoute = DA_ROUTES.includes(location.pathname);

  // Determine if DA direct pixel should be triggered
  const shouldTriggerDAPixel = isDARoute && (isPageViewRoute || isLeadRoute);

  return (
    <Helmet>
      {/* Main Meta Pixel Base Code */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          
          // Initialize main pixel
          fbq('init', '${PIXEL_ID}');
          
          // Initialize DA direct pixel
          fbq('init', '${PIXEL_ID_DA_DIRECT}');
        `}
      </script>

      {/* Noscript fallback for both pixels */}
      <noscript>
        {`<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1"/>`}
      </noscript>
      <noscript>
        {`<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=${PIXEL_ID_DA_DIRECT}&ev=PageView&noscript=1"/>`}
      </noscript>

      {/* Track PageView for specific routes */}
      {isPageViewRoute && (
        <script>
          {`
            // Track PageView on main pixel for all relevant routes
            fbq('track', 'PageView', {}, {eventID: 'pv_${Date.now()}'});
            
            ${
              shouldTriggerDAPixel
                ? `// Also track PageView on DA pixel for DA specific routes
            fbq('trackSingle', '${PIXEL_ID_DA_DIRECT}', 'PageView', {}, {eventID: 'da_pv_${Date.now()}'});`
                : ""
            }
          `}
        </script>
      )}

      {/* Track Lead for thank you page */}
      {isLeadRoute && (
        <script>
          {`
            // Track Lead on main pixel
            fbq('track', 'Lead', {}, {eventID: 'lead_${Date.now()}'});
            
            ${
              shouldTriggerDAPixel
                ? `// Also track Lead on DA pixel for DA related conversions
            fbq('trackSingle', '${PIXEL_ID_DA_DIRECT}', 'Lead', {}, {eventID: 'da_lead_${Date.now()}'});`
                : ""
            }
          `}
        </script>
      )}

      {/* Track CompleteRegistration for registration success pages */}
      {/* {isLeadRoute && (
        <script>
          {`
            // Track CompleteRegistration on main pixel
            fbq('track', 'CompleteRegistration', {
              content_name: 'registration_form',
              status: 'complete'
            }, {eventID: 'reg_${Date.now()}'});
            
            ${
              shouldTriggerDAPixel
                ? `// Also track CompleteRegistration on DA pixel for DA related registrations
            fbq('trackSingle', '${PIXEL_ID_DA_DIRECT}', 'CompleteRegistration', {
              content_name: 'registration_form', 
              status: 'complete'
            }, {eventID: 'da_reg_${Date.now()}'});`
                : ""
            }
          `}
        </script>
      )} */}
    </Helmet>
  );
};
