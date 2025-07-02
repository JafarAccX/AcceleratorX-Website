// import { useLocation } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
// // console.log('Meta Pixel ID:',  PIXEL_ID);

// /**
//  * paste the new routes here
//  */
// const PAGE_VIEW_ROUTES = [
//   "/courses/product-management-program-fb",
//   "/courses/data-analytics-program-fb",
//   "/courses/no-code-tool-program-fb",
//   "/courses/product-management-program-eie",
//   "/courses/data-analytics-program-eie",
//   "/courses/generative-ai-fb",
//   "/workshop/pm-masterclass",
//   "/workshop/dm-masterclass",
//   "/workshop/gen-ai-masterclass-bxwcy",
//   "/workshop/gen-ai-masterclass",
//   "/workshop/da-masterclass",
//   "/workshop/da-masterclass-bxwxy",
// ];

// const LEAD_ROUTES = ["/thank-you", "/workshop-registration/success", "/workshop-payment/success/"];

// export const MetaPixel = () => {
//   const location = useLocation();
//   const isPageViewRoute = PAGE_VIEW_ROUTES.includes(location.pathname);
//   const isLeadRoute = LEAD_ROUTES.includes(location.pathname);

//   // console.log('Meta Pixel - Current Path:', location.pathname);
//   // console.log('Is PageView Route:', isPageViewRoute);
//   // console.log('Is Lead Route:', isLeadRoute);

//   return (
//     <Helmet>
//       {/* Meta Pixel Base Code */}
//       <script>
//         {`
//           !function(f,b,e,v,n,t,s)
//           {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//           n.queue=[];t=b.createElement(e);t.async=!0;
//           t.src=v;s=b.getElementsByTagName(e)[0];
//           s.parentNode.insertBefore(t,s)}(window, document,'script',
//           'https://connect.facebook.net/en_US/fbevents.js');
//           fbq('init', '${PIXEL_ID}');

//         `}
//       </script>
//       <noscript>
//         {`<img height="1" width="1" style="display:none"
//         src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1"/>`}
//       </noscript>

//       {/* Track PageView for specific routes */}
//       {isPageViewRoute && (
//         <script>
//           {`
//             fbq('track', 'PageView');

//           `}
//         </script>
//       )}

//       {/* Track Lead for thank you page */}
//       {isLeadRoute && (
//         <script>
//           {`
//             fbq('track', 'Lead');
//           `}
//         </script>
//       )}
//     </Helmet>
//   );
// };

// import { useLocation } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import { useCourseContext } from "../context/courseContext";

// const PIXEL_ID_DEFAULT = import.meta.env.VITE_META_PIXEL_ID;
// const PIXEL_ID_DA = import.meta.env.VITE_META_PIXEL_ID_DA; // Add this new env variable

// // Routes that should track PageView events
// const PAGE_VIEW_ROUTES = [
//   "/courses/product-management-program-fb",
//   "/courses/data-analytics-program-fb",
//   "/courses/no-code-tool-program-fb",
//   "/courses/product-management-program-eie",
//   "/courses/data-analytics-program-eie",
//   "/courses/generative-ai-fb",
//   "/workshop/pm-masterclass",
//   "/workshop/dm-masterclass",
//   "/workshop/gen-ai-masterclass-bxwcy",
//   "/workshop/gen-ai-masterclass",
//   "/workshop/da-masterclass",
//   "/workshop/da-masterclass-bxwxy",
// ];

// // Routes that should track Lead events
// const LEAD_ROUTES = ["/thank-you", "/workshop-registration/success", "/workshop-payment/success/"];

// // DA-specific routes that should use the DA pixel
// const DA_ROUTES = [
//   "/courses/data-analytics-program-fb",
//   "/courses/data-analytics",
//   "/workshop/da-masterclass",
//   "/workshop/da-masterclass-bxwxy",
// ];

// /**
//  * Determines which pixel ID to use based on current route and selected course
//  */
// const usePixelId = () => {
//   const location = useLocation();
//   const { selectedCourse } = useCourseContext();

//   // Check if current route is DA-specific
//   const isDaRoute = DA_ROUTES.includes(location.pathname);

//   // Check if selected course is Data Analytics
//   const isDaCourse = selectedCourse === "Data Analytics";

//   // Use DA pixel if either the route or selected course is DA-related
//   return isDaRoute || isDaCourse ? PIXEL_ID_DA : PIXEL_ID_DEFAULT;
// };

// /**
//  * MetaPixel component that handles different pixel IDs based on course context
//  */
// export const MetaPixel = () => {
//   const location = useLocation();
//   const pixelId = usePixelId();

//   const isPageViewRoute = PAGE_VIEW_ROUTES.includes(location.pathname);
//   const isLeadRoute = LEAD_ROUTES.includes(location.pathname);

//   // Don't render anything if no pixel ID is available
//   if (!pixelId) {
//     console.warn("Meta Pixel: No pixel ID available");
//     return null;
//   }

//   return (
//     <Helmet>
//       {/* Meta Pixel Base Code */}
//       <script>
//         {`
//           !function(f,b,e,v,n,t,s)
//           {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//           n.queue=[];t=b.createElement(e);t.async=!0;
//           t.src=v;s=b.getElementsByTagName(e)[0];
//           s.parentNode.insertBefore(t,s)}(window, document,'script',
//           'https://connect.facebook.net/en_US/fbevents.js');
//           fbq('init', '${pixelId}');
//         `}
//       </script>

//       <noscript>
//         {`<img height="1" width="1" style="display:none"
//         src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"/>`}
//       </noscript>

//       {/* Track PageView for specific routes */}
//       {isPageViewRoute && <script>{`fbq('track', 'PageView');`}</script>}

//       {/* Track Lead for thank you page */}
//       {isLeadRoute && <script>{`fbq('track', 'Lead');`}</script>}
//     </Helmet>
//   );
// };

// interface MetaPixelProps {
//   trackPageView?: boolean;
//   trackLead?: boolean;
// }

// /**
//  * Alternative approach: Separate components for each pixel
//  * Use this if you want more explicit control
//  */
// export const MetaPixelDefault: React.FC<MetaPixelProps> = ({ trackPageView = false, trackLead = false }) => {
//   if (!PIXEL_ID_DEFAULT) return null;

//   return (
//     <Helmet>
//       <script>
//         {`
//           !function(f,b,e,v,n,t,s)
//           {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//           n.queue=[];t=b.createElement(e);t.async=!0;
//           t.src=v;s=b.getElementsByTagName(e)[0];
//           s.parentNode.insertBefore(t,s)}(window, document,'script',
//           'https://connect.facebook.net/en_US/fbevents.js');
//           fbq('init', '${PIXEL_ID_DEFAULT}');
//           ${trackPageView ? "fbq('track', 'PageView');" : ""}
//           ${trackLead ? "fbq('track', 'Lead');" : ""}
//         `}
//       </script>
//       <noscript>
//         {`<img height="1" width="1" style="display:none"
//         src="https://www.facebook.com/tr?id=${PIXEL_ID_DEFAULT}&ev=PageView&noscript=1"/>`}
//       </noscript>
//     </Helmet>
//   );
// };

// export const MetaPixelDA: React.FC<MetaPixelProps> = ({ trackPageView = false, trackLead = false }) => {
//   if (!PIXEL_ID_DA) return null;

//   return (
//     <Helmet>
//       <script>
//         {`
//           !function(f,b,e,v,n,t,s)
//           {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//           n.queue=[];t=b.createElement(e);t.async=!0;
//           t.src=v;s=b.getElementsByTagName(e)[0];
//           s.parentNode.insertBefore(t,s)}(window, document,'script',
//           'https://connect.facebook.net/en_US/fbevents.js');
//           fbq('init', '${PIXEL_ID_DA}');
//           ${trackPageView ? "fbq('track', 'PageView');" : ""}
//           ${trackLead ? "fbq('track', 'Lead');" : ""}
//         `}
//       </script>
//       <noscript>
//         {`<img height="1" width="1" style="display:none"
//         src="https://www.facebook.com/tr?id=${PIXEL_ID_DA}&ev=PageView&noscript=1"/>`}
//       </noscript>
//     </Helmet>
//   );
// };

import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useCourseContext } from "../context/courseContext";

const PIXEL_ID_DEFAULT = import.meta.env.VITE_META_PIXEL_ID;
const PIXEL_ID_DA = import.meta.env.VITE_META_PIXEL_ID_DA;

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

const DA_ROUTES = ["/courses/data-analytics-program-fb", "/courses/data-analytics"];

export const MetaPixel: React.FC = () => {
  const location = useLocation();
  const { selectedCourse } = useCourseContext();

  const isDaRoute = DA_ROUTES.includes(location.pathname);
  const isDaCourse = selectedCourse === "Data Analytics";
  const pixelId = isDaRoute || isDaCourse ? PIXEL_ID_DA : PIXEL_ID_DEFAULT;

  const isPageViewRoute = PAGE_VIEW_ROUTES.includes(location.pathname);
  const isLeadRoute = LEAD_ROUTES.includes(location.pathname);

  if (!pixelId) return null;

  return (
    <Helmet>
      <script>
        {`
          if (!window.fbqInitialized) {
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            window.fbqInitialized = true;
          }

          ${isPageViewRoute ? "fbq('track', 'PageView');" : ""}
          ${isLeadRoute ? "fbq('track', 'Lead');" : ""}
        `}
      </script>

      <noscript>
        {`<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"/>`}
      </noscript>
    </Helmet>
  );
};
