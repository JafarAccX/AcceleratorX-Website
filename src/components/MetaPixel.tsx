import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
// console.log('Meta Pixel ID:',  PIXEL_ID);

const PAGE_VIEW_ROUTES = [
  "/courses/product-management-program-fb",
  "/courses/data-analytics-program-fb",
  "/courses/no-code-tool-program-fb",
  "/courses/product-management-program-eie",
  "/courses/data-analytics-program-eie",
  "/workshop/da-masterclass-with-ai",
];

const LEAD_ROUTES = ["/thank-you"];

export const MetaPixel = () => {
  const location = useLocation();
  const isPageViewRoute = PAGE_VIEW_ROUTES.includes(location.pathname);
  const isLeadRoute = LEAD_ROUTES.includes(location.pathname);

  // console.log('Meta Pixel - Current Path:', location.pathname);
  // console.log('Is PageView Route:', isPageViewRoute);
  // console.log('Is Lead Route:', isLeadRoute);

  return (
    <Helmet>
      {/* Meta Pixel Base Code */}
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
          fbq('init', '${PIXEL_ID}');
          console.log('Meta Pixel - Initialized with ID:', '${PIXEL_ID}');
        `}
      </script>
      <noscript>
        {`<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1"/>`}
      </noscript>

      {/* Track PageView for specific routes */}
      {isPageViewRoute && (
        <script>
          {`
            fbq('track', 'PageView');
            console.log('Meta Pixel - Tracked PageView');
          `}
        </script>
      )}

      {/* Track Lead for thank you page */}
      {isLeadRoute && (
        <script>
          {`
            fbq('track', 'Lead');
            console.log('Meta Pixel - Tracked Lead');
          `}
        </script>
      )}
    </Helmet>
  );
};
