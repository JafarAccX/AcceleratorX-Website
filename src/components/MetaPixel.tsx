import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useCourseContext } from "../context/courseContext";

const PIXEL_ID_DEFAULT = import.meta.env.VITE_META_PIXEL_ID;
const PIXEL_ID_DA = import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT;
const PIXEL_ID_DA_SECOND = import.meta.env.VITE_META_PIXEL_ID_DA_DIRECT_SECOND;

console.log(PIXEL_ID_DEFAULT, PIXEL_ID_DA, PIXEL_ID_DA_SECOND);

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

export const MetaPixel: React.FC = () => {
  const location = useLocation();
  const { selectedCourse } = useCourseContext();

  const isDaRoute = DA_ROUTES.includes(location.pathname);
  const isDaRouteSecond = DA_ROUTES_SECOND.includes(location.pathname);
  const isDaCourse = selectedCourse === "Data Analytics";
  
  let pixelId = PIXEL_ID_DEFAULT;
  if (isDaRouteSecond) {
    pixelId = PIXEL_ID_DA_SECOND;
  } else if (isDaRoute || isDaCourse) {
    pixelId = PIXEL_ID_DA;
  }

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
