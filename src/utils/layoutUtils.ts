// Route layout configuration types
export type RouteLayout = {
  showNavbar: boolean;
  showFooter: boolean;
};

// Default layout configuration
const defaultLayout: RouteLayout = {
  showNavbar: true,
  showFooter: true,
};

// Routes with custom layouts
const routeLayouts: Record<string, RouteLayout> = {
  // Admin routes
  "/admin/ad-analysis": { showNavbar: false, showFooter: false },
  "/admin/dashboard": { showNavbar: false, showFooter: false },
  
  // Workshop routes
  "/workshop/dm-masterclass": { showNavbar: false, showFooter: false },
  "/workshop/da-masterclass": { showNavbar: false, showFooter: false },
  "/workshop/pm-masterclass": { showNavbar: false, showFooter: false },
  "/workshop/gen-ai-masterclass": { showNavbar: false, showFooter: false },
  "/workshop/gen-ai-masterclass-bxwcy": { showNavbar: false, showFooter: false },
  "/workshop/gen-ai-masterclass-four": { showNavbar: false, showFooter: false },
  
  // Course routes
  "/courses/generative-ai-fb": { showNavbar: false, showFooter: false },
  "/courses/product-management-program-fb": { showNavbar: false, showFooter: false },
  "/courses/data-analytics-program-fb": { showNavbar: false, showFooter: false },
  "/courses/product-management-program-eie": { showNavbar: false, showFooter: false },
  "/courses/data-analytics-program-eie": { showNavbar: false, showFooter: false },
  "/courses/no-code-tool-program-fb": { showNavbar: false, showFooter: false },
  
  // Other routes
  "/thank-you": { showNavbar: false, showFooter: false },
  "/xsat": { showNavbar: false, showFooter: false },
  "/fa-register/gen-ai": { showNavbar: false, showFooter: false },
  "/fa-register/pm": { showNavbar: false, showFooter: false },
  "/fa-register/dm": { showNavbar: false, showFooter: false },
  "/fa-register/da": { showNavbar: false, showFooter: false },
  "/workshop-registration/success": { showNavbar: false, showFooter: false },
};

/**
 * Get the layout configuration for a given route
 * @param pathname Current route pathname
 * @returns Layout configuration for the route
 */
export const getRouteLayout = (pathname: string): RouteLayout => {
  // Special handling for workshop payment success route
  if (pathname.startsWith('/workshop-payment/success/')) {
    return { showNavbar: false, showFooter: false };
  }

  // Check for exact matches first
  if (pathname in routeLayouts) {
    return routeLayouts[pathname];
  }

  // Check for routes that start with the pathname
  for (const route in routeLayouts) {
    if (pathname.startsWith(route)) {
      return routeLayouts[route];
    }
  }

  // Return default layout if no specific configuration is found
  return defaultLayout;
}; 